/* eslint-disable import/no-unresolved,  no-shadow, import/no-extraneous-dependencies, no-console */
const SimpleGit = require('simple-git/promise');
const colors = require('colors/safe');
const ora = require('ora');
const rimraf = require('rimraf');
const cosmiconfig = require('cosmiconfig');
const uniqid = require('uniqid');

const util = require('./util');
const defaultConfig = require('./defaultConfig');
const convertToReact = require('./parsers/convertToReact');
const disableAlphaSort = require('./amenders/disableAlphaSort');
const addTypes = require('./amenders/addTypes');
const useAccessibleSvg = require('./amenders/useAccessibleSvg');
const applyViewbox = require('./amenders/applyViewbox');
const addAutoGeneratedMessage = require('./amenders/addAutoGeneratedMessage');
const createStory = require('./amenders/createStory');

// create an instance of ora for individual file parsing later
const progress = ora();

/**
 * Run all configured parsers
 * @param {string} file SVG contents
 * @param {object} options options used by any possible parser (SVGR, etc.)
 * @return {string} parsed file content
 */
function parse(file, options) {
    // Add any additional entries below in the order they should run
    return [convertToReact].reduce((finalFile, currentFunc) => {
        return currentFunc(finalFile, options);
    }, file);
}

/**
 * Amend the produced files in ways that cannot be handled in parse phase
 * @param {string} file SVG contents
 * @param {object} options options used by any possible amender
 * @return {string} amended file content
 */
function amend(file, options) {
    // Add any additional entries below in the order they should run
    return [useAccessibleSvg, disableAlphaSort, addTypes, applyViewbox, addAutoGeneratedMessage, createStory].reduce(
        (finalFile, currentFunc) => {
            return currentFunc(finalFile, options);
        },
        file,
    );
}

/**
 * handler function for calling amend and parse. Also logs progress while running
 * @param {string} fileContent the actual content of the icon file
 * @param {object} options options used by any possible parser
 * - fileNameAndPath - the full path and name of the file in the working directory
 * - sourcePath - the temporary directory where unconverted assets live
 * - destinationPath - the target (relative) directory where assets will be placed
 */
function parser(fileContent, options) {
    progress.text = colors.cyan(`Parsing ${options.fileNameAndPath}`);
    progress.render();

    const parsed = parse(fileContent, options);

    progress.text = colors.cyan(`Amending ${options.fileNameAndPath}`);
    progress.render();

    return amend(parsed, options);
}

module.exports = async cliOptions => {
    progress.start(colors.cyan('Load configuration. . .'));

    // prefer the CLI options to any found config, then use defaults as last resort
    const settings = cosmiconfig.cosmiconfig('asset-import');
    const emptyConfig = { config: {} };
    const result = await settings.search().catch(() => null);
    const config = { ...defaultConfig, ...(result || emptyConfig).config, ...cliOptions };

    if (result && result.filepath) {
        progress.succeed(colors.cyan(`Using config ${result.filepath}`));
    } else {
        progress.info(colors.cyan('No config file used'));
    }

    if (config.verbose) {
        // print out config details
        progress.info(colors.brightCyan('Using configuration:'));
        progress.info(colors.brightCyan(config));
    }

    const git = new SimpleGit(config.workingDir);
    const sourcePath = `${config.workingDir}/${uniqid('design-assets-')}`;

    rimraf(sourcePath, async () => {
        try {
            if (git) {
                progress.start(colors.cyan(`Clone ${config.repository}`));
                await git.clone(config.repository, sourcePath);
                await git.cwd(sourcePath);
                progress.succeed();

                progress.start(colors.cyan(`Checkout ${config.branch} to ${sourcePath}`));
                await git.checkout(config.branch);
                progress.succeed();

                progress.start(colors.cyan(`Parse contents of ${sourcePath}. . .`));
                util.parseContentsOf(sourcePath, sourcePath, config.destinationDir, parser);
                progress.succeed(colors.cyan('Parsing completed successfully.'));

                progress.start('Cleaning up. . .');
                rimraf(sourcePath, () => {
                    progress.succeed(colors.cyan('Done.'));
                    process.exit(0);
                });
            }
        } catch (e) {
            // There was an error in one of the awaits, probably due to missing arguments
            progress.fail(`There was an error processing the assets: ${e}`);
            process.exit(2);
        }
    });
};
