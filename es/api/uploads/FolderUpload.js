function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Folder upload bootstrapping
 * @author Box
 */
import { getEntryFromDataTransferItem, getFile, getFileAPIOptions, getDataTransferItem, getDataTransferItemAPIOptions } from '../../utils/uploads';
import FolderUploadNode from './FolderUploadNode';
var PATH_DELIMITER = '/';

var FolderUpload =
/*#__PURE__*/
function () {
  /**
   * [constructor]
   *
   * @param {Function} addFilesToUploadQueue
   * @param {string} destinationFolderId
   * @param {Function} addFolderToUploadQueue
   * @param {Object} baseAPIOptions
   * @return {void}
   */
  function FolderUpload(addFilesToUploadQueue, destinationFolderId, addFolderToUploadQueue, baseAPIOptions) {
    _classCallCheck(this, FolderUpload);

    _defineProperty(this, "files", []);

    this.addFilesToUploadQueue = addFilesToUploadQueue;
    this.destinationFolderId = destinationFolderId;
    this.addFolderToUploadQueue = addFolderToUploadQueue;
    this.baseAPIOptions = baseAPIOptions;
  }
  /**
   * Create a folder tree from fileList wekbkitRelativePath
   *
   * @public
   * @param  {Array} Array<UploadFileWithAPIOptions | UploadFile> | FileList
   * @returns {void}
   */


  _createClass(FolderUpload, [{
    key: "buildFolderTreeFromWebkitRelativePath",
    value: function buildFolderTreeFromWebkitRelativePath(fileList) {
      var _this = this;

      Array.from(fileList).forEach(function (fileData) {
        var file = getFile(fileData);
        var webkitRelativePath = file.webkitRelativePath;

        if (!webkitRelativePath) {
          return;
        }

        var fileAPIOptions = getFileAPIOptions(fileData);
        var pathArray = webkitRelativePath.split(PATH_DELIMITER).slice(0, -1);

        if (pathArray.length <= 0) {
          return;
        } // Since only 1 folder tree can be uploaded a time with using webkitRelativePath, the root folder name
        // of all the files should be the same.


        if (!_this.folder) {
          var rootFolderName = pathArray[0];
          _this.folder = _this.createFolderUploadNode(rootFolderName, fileAPIOptions);
        } // Add file to the root folder


        if (pathArray.length === 1) {
          _this.folder.files.push(file);
        }

        var subTree = _this.folder.folders; // Walk the path after the root folder

        var pathArryAfterRoot = pathArray.slice(1);
        pathArryAfterRoot.forEach(function (folderName, index) {
          // Create new child folder
          if (!subTree[folderName]) {
            subTree[folderName] = _this.createFolderUploadNode(folderName, fileAPIOptions);
          }

          if (index === pathArryAfterRoot.length - 1) {
            // end of path, push the file
            subTree[folderName].files.push(file);
          } else {
            // walk the tree
            subTree = subTree[folderName].folders;
          }
        });
      });
    }
    /**
     * Build folder tree from dataTransferItem, which can only represent 1 folder tree
     *
     * @param {DataTransferItem | UploadDataTransferItemWithAPIOptions} dataTransferItem
     * @returns {Promise<any>}
     */

  }, {
    key: "buildFolderTreeFromDataTransferItem",
    value: function () {
      var _buildFolderTreeFromDataTransferItem = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dataTransferItem) {
        var item, apiOptions, entry, name;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                item = getDataTransferItem(dataTransferItem);
                apiOptions = getDataTransferItemAPIOptions(dataTransferItem);
                entry = getEntryFromDataTransferItem(item);
                name = entry.name;
                this.folder = this.createFolderUploadNode(name, apiOptions, entry);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function buildFolderTreeFromDataTransferItem(_x) {
        return _buildFolderTreeFromDataTransferItem.apply(this, arguments);
      }

      return buildFolderTreeFromDataTransferItem;
    }()
    /**
     * Create a FolderUploadNode instance
     *
     * @param {string} name
     * @param {Object} apiOptions
     * @param {FileSystemFileEntry} [entry]
     * @returns {FolderUploadNode}
     */

  }, {
    key: "createFolderUploadNode",
    value: function createFolderUploadNode(name, apiOptions, entry) {
      return new FolderUploadNode(name, this.addFilesToUploadQueue, this.addFolderToUploadQueue, apiOptions, _objectSpread({}, this.baseAPIOptions, {}, apiOptions), entry);
    }
    /**
     * Upload folders
     *
     * @public
     * @param {Object} Options
     * @param {Function} options.errorCallback
     * @returns {Promise<any>}
     */

  }, {
    key: "upload",
    value: function () {
      var _upload = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(_ref) {
        var errorCallback, successCallback, newFolderId;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                errorCallback = _ref.errorCallback, successCallback = _ref.successCallback;
                _context2.next = 3;
                return this.folder.upload(this.destinationFolderId, errorCallback, true);

              case 3:
                // If the folder upload failed then a folderID will not be set
                newFolderId = this.folder.getFolderId();

                if (newFolderId) {
                  successCallback([{
                    id: newFolderId
                  }]);
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function upload(_x2) {
        return _upload.apply(this, arguments);
      }

      return upload;
    }()
    /**
     * Noop cancel
     *
     * @public
     */

  }, {
    key: "cancel",
    value: function cancel() {}
  }]);

  return FolderUpload;
}();

export default FolderUpload;
//# sourceMappingURL=FolderUpload.js.map