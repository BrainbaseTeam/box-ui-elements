function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * 
 * @file Utility functions for uploads
 * @author Box
 */
import getProp from 'lodash/get';
import Browser from './Browser';
var DEFAULT_API_OPTIONS = {};
/**
 * Returns true if file contains API options
 *
 * @param {UploadFile | UploadFileWithAPIOptions} item
 * @returns {boolean}
 */

function doesFileContainAPIOptions(file) {
  // $FlowFixMe UploadFileWithAPIOptions has `file` and `options` properties
  return !!(file.options && file.file);
}
/**
 * Returns true if item contains API options
 *
 * @param {DataTransferItem | UploadDataTransferItemWithAPIOptions} item
 * @returns {boolean}
 */


function doesDataTransferItemContainAPIOptions(item) {
  // $FlowFixMe UploadDataTransferItemWithAPIOptions has `item` and `options` properties
  return !!(item.options && item.item);
}
/**
 * Converts UploadFile or UploadFileWithAPIOptions to UploadFile
 *
 * @param {UploadFile | UploadFileWithAPIOptions} file
 * @returns {UploadFile}
 */


function getFile(file) {
  if (doesFileContainAPIOptions(file)) {
    return file.file;
  }

  return file;
}
/**
 * Converts DataTransferItem or UploadDataTransferItemWithAPIOptions to DataTransferItem
 *
 * @param {DataTransferItem | UploadDataTransferItemWithAPIOptions} item
 * @returns {DataTransferItem}
 */


function getDataTransferItem(item) {
  if (doesDataTransferItemContainAPIOptions(item)) {
    return item.item;
  }

  return item;
}
/**
 * Get API Options from file
 *
 * @param {UploadFile | UploadFileWithAPIOptions} file
 * @returns {UploadItemAPIOptions}
 */


function getFileAPIOptions(file) {
  if (doesFileContainAPIOptions(file)) {
    return file.options || DEFAULT_API_OPTIONS;
  }

  return DEFAULT_API_OPTIONS;
}
/**
 * Get API Options from item
 *
 * @param {DataTransferItem | UploadDataTransferItemWithAPIOptions} item
 * @returns {UploadItemAPIOptions}
 */


function getDataTransferItemAPIOptions(item) {
  if (doesDataTransferItemContainAPIOptions(item)) {
    return item.options || DEFAULT_API_OPTIONS;
  }

  return DEFAULT_API_OPTIONS;
}
/**
 * Returns true if the given object is a Date instance encoding a valid date
 * (i.e. new Date('this is not a timestamp') should return false).
 *
 * Code adapted from
 * http://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript
 *
 * @param {Date} date
 * @return {boolean}
 */


function isValidDateObject(date) {
  return Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date.getTime());
}
/**
 * Remove milliseconds from date time string
 *
 * @param {Date} date
 * @return {string}
 */


function toISOStringNoMS(date) {
  return date.toISOString().replace(/\.[0-9]{3}/, '');
}
/**
 * Returns the file's last modified date as an ISO string with no MS component (e.g.
 * '2017-04-18T17:14:27Z'), or null if no such date can be extracted from the file object.
 * (Nothing on the Internet guarantees that the file object has this info.)
 *
 * @param {UploadFile} file
 * @return {?string}
 */


function getFileLastModifiedAsISONoMSIfPossible(file) {
  // The compatibility chart at https://developer.mozilla.org/en-US/docs/Web/API/File/lastModified#Browser_compatibility
  // is not up to date as of 12-13-2018. Edge & ie11 do not support lastModified, but support lastModifiedDate.
  var lastModified = file.lastModified || file.lastModifiedDate;

  if (lastModified && (typeof lastModified === 'string' || typeof lastModified === 'number' || lastModified instanceof Date)) {
    var lastModifiedDate = new Date(lastModified);

    if (isValidDateObject(lastModifiedDate)) {
      return toISOStringNoMS(lastModifiedDate);
    }
  }

  return null;
}
/**
 * If maybeJson is valid JSON string, return the result of calling JSON.parse
 * on it.  Otherwise, return null.
 *
 * @param {string} maybeJson
 * @return {?Object}
 */


function tryParseJson(maybeJson) {
  try {
    return JSON.parse(maybeJson);
  } catch (e) {
    return null;
  }
}
/**
 * Get bounded exponential backoff retry delay
 *
 * @param {number} initialRetryDelay
 * @param {number} maxRetryDelay
 * @param {number} retryNum - Current retry number (first retry will have value of 0).
 * @return {number}
 */


function getBoundedExpBackoffRetryDelay(initialRetryDelay, maxRetryDelay, retryNum) {
  var delay = initialRetryDelay * Math.pow(retryNum, 2);
  return delay > maxRetryDelay ? maxRetryDelay : delay;
}
/**
 * Get entry from dataTransferItem
 *
 * @param {DataTransferItem} item
 * @returns {FileSystemFileEntry}
 */


function getEntryFromDataTransferItem(item) {
  var entry = // $FlowFixMe
  item.webkitGetAsEntry || item.mozGetAsEntry || item.getAsEntry;
  return entry.call(item);
}
/**
 * Check if a dataTransferItem is a folder
 *
 * @param {UploadDataTransferItemWithAPIOptions | DataTransferItem} itemData
 * @returns {boolean}
 */


function isDataTransferItemAFolder(itemData) {
  var item = getDataTransferItem(itemData);
  var entry = getEntryFromDataTransferItem(item);

  if (!entry) {
    return false;
  }

  return entry.isDirectory;
}
/**
 * Check if a dataTransfer item is a macOS "package file"
 * @see https://en.wikipedia.org/wiki/Package_(macOS)
 *
 * @returns {boolean}
 */


function isDataTransferItemAPackage(itemData) {
  var item = getDataTransferItem(itemData);
  var isDirectory = isDataTransferItemAFolder(item);
  return isDirectory && item.type === 'application/zip' && item.kind === 'file';
}
/**
 * Get file from FileSystemFileEntry
 *
 * @param {FileSystemFileEntry} entry
 * @returns {Promise<UploadFile>}
 */


function getFileFromEntry(entry) {
  return new Promise(function (resolve) {
    entry.file(function (file) {
      resolve(file);
    });
  });
}
/**
 * Get file from DataTransferItem or UploadDataTransferItemWithAPIOptions
 *
 * @param {UploadDataTransferItemWithAPIOptions | DataTransferItem} itemData
 * @returns {Promise<UploadFile | UploadFileWithAPIOptions | null>}
 */


function getFileFromDataTransferItem(_x) {
  return _getFileFromDataTransferItem.apply(this, arguments);
}
/**
 * Get file from DataTransferItem or UploadDataTransferItemWithAPIOptions
 * Uses `entry`'s `getAsFile` method for retrieving package information as a single file.
 * @see https://en.wikipedia.org/wiki/Package_(macOS)
 *
 * @param {UploadDataTransferItemWithAPIOptions | DataTransferItem} itemData
 * @returns {?UploadFile | ?UploadFileWithAPIOptions | null}
 */


function _getFileFromDataTransferItem() {
  _getFileFromDataTransferItem = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(itemData) {
    var item, entry, file;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            item = getDataTransferItem(itemData);
            entry = getEntryFromDataTransferItem(item);

            if (entry) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", null);

          case 4:
            _context.next = 6;
            return getFileFromEntry(entry);

          case 6:
            file = _context.sent;

            if (!doesDataTransferItemContainAPIOptions(itemData)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", {
              file: file,
              options: getDataTransferItemAPIOptions(itemData)
            });

          case 9:
            return _context.abrupt("return", file);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getFileFromDataTransferItem.apply(this, arguments);
}

function getPackageFileFromDataTransferItem(itemData) {
  var item = getDataTransferItem(itemData);
  var entry = getEntryFromDataTransferItem(item);

  if (!entry) {
    return null;
  }

  var itemFile = item.getAsFile();

  if (doesDataTransferItemContainAPIOptions(itemData)) {
    return {
      file: itemFile,
      options: getDataTransferItemAPIOptions(itemData)
    };
  }

  return itemFile;
}
/**
 * Generates file id based on file properties
 *
 * When folderId or uploadInitTimestamp is missing from file options, file name is returned as file id.
 * Otherwise, fileName_folderId_uploadInitTimestamp is used as file id.
 *
 * @param {UploadFileWithAPIOptions | UploadFile} file
 * @param {string} rootFolderId
 * @returns {string}
 */


function getFileId(file, rootFolderId) {
  if (!doesFileContainAPIOptions(file)) {
    return file.name;
  }

  var fileWithOptions = file;
  var folderId = getProp(fileWithOptions, 'options.folderId', rootFolderId);
  var uploadInitTimestamp = getProp(fileWithOptions, 'options.uploadInitTimestamp', Date.now());
  var fileName = fileWithOptions.file.webkitRelativePath || fileWithOptions.file.name;
  return "".concat(fileName, "_").concat(folderId, "_").concat(uploadInitTimestamp);
}
/**
 * Generates item id based on item properties
 *
 * When item options including folderId or uploadInitTimestamp are missing, item name is returned as item id.
 * Otherwise, item properties are used as item id.
 * E.g., folder1_0_123124124
 *
 * @param {DataTransferItem | UploadDataTransferItemWithAPIOptions} itemData
 * @param {string} rootFolderId
 * @returns {string}
 */


function getDataTransferItemId(itemData, rootFolderId) {
  var item = getDataTransferItem(itemData);

  var _getEntryFromDataTran = getEntryFromDataTransferItem(item),
      name = _getEntryFromDataTran.name;

  if (!doesDataTransferItemContainAPIOptions(itemData)) {
    return name;
  }

  var _getDataTransferItemA = getDataTransferItemAPIOptions(itemData),
      _getDataTransferItemA2 = _getDataTransferItemA.folderId,
      folderId = _getDataTransferItemA2 === void 0 ? rootFolderId : _getDataTransferItemA2,
      _getDataTransferItemA3 = _getDataTransferItemA.uploadInitTimestamp,
      uploadInitTimestamp = _getDataTransferItemA3 === void 0 ? Date.now() : _getDataTransferItemA3;

  return "".concat(name, "_").concat(folderId, "_").concat(uploadInitTimestamp);
}
/**
 * Multiput uploads require the use of crypto, which is only supported in secure contexts.
 * Multiput uploads is not supported on mobile iOS Safari.
 */


function isMultiputSupported() {
  var cryptoObj = window.crypto || window.msCrypto;

  if (Browser.isMobileSafari()) {
    return false;
  }

  return window.location.protocol === 'https:' && cryptoObj && cryptoObj.subtle;
}

export { DEFAULT_API_OPTIONS, doesDataTransferItemContainAPIOptions, doesFileContainAPIOptions, getBoundedExpBackoffRetryDelay, getDataTransferItem, getDataTransferItemAPIOptions, getDataTransferItemId, getEntryFromDataTransferItem, getFile, getFileAPIOptions, getFileFromDataTransferItem, getPackageFileFromDataTransferItem, getFileFromEntry, getFileId, getFileLastModifiedAsISONoMSIfPossible, isDataTransferItemAFolder, isDataTransferItemAPackage, isMultiputSupported, toISOStringNoMS, tryParseJson };
//# sourceMappingURL=uploads.js.map