/**
 * 
 * @file Skills utils
 * @author Box
 */
import getProp from 'lodash/get';

/**
 * Returns true if its a valid skills card.
 *
 * @param {SkillCard} card - box skill card
 * @return {boolean} if its valid skills card
 */
var isValidSkillsCard = function isValidSkillsCard(file, card) {
  var fileVersion = getProp(file, 'file_version.id');
  var skillCardFileVersion = card.file_version ? card.file_version.id : fileVersion;
  return fileVersion === skillCardFileVersion && (!!card.status || Array.isArray(card.entries));
};
/**
 * Returns true if there are valid skills to show.
 *
 * @param {BoxItem} file - box file
 * @return {boolean} if there are valid skills to show
 */


var hasSkills = function hasSkills(file) {
  var cards = getProp(file, 'metadata.global.boxSkillsCards.cards', []);
  return Array.isArray(cards) && cards.length > 0 && cards.some(function (card) {
    return isValidSkillsCard(file, card);
  });
};

export { hasSkills, isValidSkillsCard };
//# sourceMappingURL=skillUtils.js.map