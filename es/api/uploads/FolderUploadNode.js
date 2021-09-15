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
 * @file Recursively create folder and upload files
 * @author Box
 */
import noop from 'lodash/noop';
import { getFileFromEntry } from '../../utils/uploads';
import FolderAPI from '../Folder';
import { STATUS_COMPLETE, STATUS_ERROR, ERROR_CODE_UPLOAD_CHILD_FOLDER_FAILED, ERROR_CODE_ITEM_NAME_IN_USE } from '../../constants';

var FolderUploadNode =
/*#__PURE__*/
function () {
  /**
   * [constructor]
   *
   * @param {string} name
   * @param {Function} addFilesToUploadQueue
   * @param {Function} addFolderToUploadQueue
   * @returns {void}
   */
  function FolderUploadNode(_name, addFilesToUploadQueue, addFolderToUploadQueue, fileAPIOptions, baseAPIOptions, _entry) {
    var _this = this;

    _classCallCheck(this, FolderUploadNode);

    _defineProperty(this, "files", []);

    _defineProperty(this, "folders", {});

    _defineProperty(this, "uploadChildFolders",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(errorCallback) {
        var folders, promises;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // $FlowFixMe
                folders = Object.values(_this.folders);
                promises = folders.map(function (folder) {
                  return folder.upload(_this.folderId, errorCallback);
                });
                _context.next = 4;
                return Promise.all(promises);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(this, "createAndUploadFolder",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(errorCallback, isRoot) {
        var errorEncountered, errorCode, data, folderObject;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this.buildCurrentFolderFromEntry();

              case 2:
                errorEncountered = false;
                errorCode = '';
                _context2.prev = 4;
                _context2.next = 7;
                return _this.createFolder();

              case 7:
                data = _context2.sent;
                _this.folderId = data.id;
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](4);

                // @TODO: Handle 429
                if (_context2.t0.code === ERROR_CODE_ITEM_NAME_IN_USE) {
                  _this.folderId = _context2.t0.context_info.conflicts[0].id;
                } else if (isRoot) {
                  errorCallback(_context2.t0);
                } else {
                  // If this is a child folder of the folder being uploaded, this errorCallback will set
                  // an error message on the root folder being uploaded. Set a generic messages saying that a
                  // child has caused the error. The child folder will be tagged with the error message in
                  // the call to this.addFolderToUploadQueue below
                  errorEncountered = true;
                  errorCode = _context2.t0.code;
                  errorCallback({
                    code: ERROR_CODE_UPLOAD_CHILD_FOLDER_FAILED
                  });
                }

              case 14:
                if (!isRoot) {
                  _context2.next = 16;
                  break;
                }

                return _context2.abrupt("return");

              case 16:
                folderObject = {
                  extension: '',
                  name: _this.name,
                  status: STATUS_COMPLETE,
                  isFolder: true,
                  size: 1,
                  progress: 100
                };

                if (errorEncountered) {
                  folderObject.status = STATUS_ERROR;
                  folderObject.error = {
                    code: errorCode
                  };
                }

                _this.addFolderToUploadQueue(folderObject);

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[4, 11]]);
      }));

      return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getFormattedFiles", function () {
      return _this.files.map(function (file) {
        return {
          file: file,
          options: _objectSpread({}, _this.fileAPIOptions, {
            folderId: _this.folderId,
            uploadInitTimestamp: Date.now()
          })
        };
      });
    });

    _defineProperty(this, "createFolderUploadNodesFromEntries",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(entries) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Promise.all(entries.map(
                /*#__PURE__*/
                function () {
                  var _ref4 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee3(entry) {
                    var isFile, name, file;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            isFile = entry.isFile, name = entry.name;

                            if (!isFile) {
                              _context3.next = 7;
                              break;
                            }

                            _context3.next = 4;
                            return getFileFromEntry(entry);

                          case 4:
                            file = _context3.sent;

                            _this.files.push(file);

                            return _context3.abrupt("return");

                          case 7:
                            _this.folders[name] = new FolderUploadNode(name, _this.addFilesToUploadQueue, _this.addFolderToUploadQueue, _this.fileAPIOptions, _objectSpread({}, _this.baseAPIOptions, {}, _this.fileAPIOptions), entry);

                          case 8:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x5) {
                    return _ref4.apply(this, arguments);
                  };
                }()));

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(this, "readEntry", function (reader, resolve) {
      reader.readEntries(
      /*#__PURE__*/
      function () {
        var _ref5 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee5(entries) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  if (entries.length) {
                    _context5.next = 3;
                    break;
                  }

                  resolve();
                  return _context5.abrupt("return");

                case 3:
                  _context5.next = 5;
                  return _this.createFolderUploadNodesFromEntries(entries);

                case 5:
                  _this.readEntry(reader, resolve);

                case 6:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x6) {
          return _ref5.apply(this, arguments);
        };
      }(), noop);
    });

    _defineProperty(this, "buildCurrentFolderFromEntry", function () {
      if (!_this.entry) {
        return Promise.resolve();
      }

      return new Promise(function (resolve) {
        // $FlowFixMe entry is not empty
        var reader = _this.entry.createReader();

        _this.readEntry(reader, resolve);
      });
    });

    _defineProperty(this, "getFolderId", function () {
      return _this.folderId;
    });

    this.name = _name;
    this.addFilesToUploadQueue = addFilesToUploadQueue;
    this.addFolderToUploadQueue = addFolderToUploadQueue;
    this.fileAPIOptions = fileAPIOptions;
    this.baseAPIOptions = baseAPIOptions;
    this.entry = _entry;
  }
  /**
   * Upload a folder
   *
   * @public
   * @param {string} parentFolderId
   * @param {Function} errorCallback
   * @param {boolean} isRoot
   * @returns {Promise}
   */


  _createClass(FolderUploadNode, [{
    key: "upload",
    value: function () {
      var _upload = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(parentFolderId, errorCallback) {
        var isRoot,
            _args6 = arguments;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                isRoot = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : false;
                this.parentFolderId = parentFolderId;
                _context6.next = 4;
                return this.createAndUploadFolder(errorCallback, isRoot);

              case 4:
                if (!this.getFolderId()) {
                  _context6.next = 8;
                  break;
                }

                this.addFilesToUploadQueue(this.getFormattedFiles(), noop, true);
                _context6.next = 8;
                return this.uploadChildFolders(errorCallback);

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function upload(_x7, _x8) {
        return _upload.apply(this, arguments);
      }

      return upload;
    }()
    /**
     * Upload all child folders
     *
     * @private
     * @param {Function} errorCallback
     * @returns {Promise}
     */

  }, {
    key: "createFolder",

    /**
     * Promisify create folder
     *
     * @private
     * @returns {Promise}
     */
    value: function createFolder() {
      var _this2 = this;

      var folderAPI = new FolderAPI(_objectSpread({}, this.baseAPIOptions, {
        id: "folder_".concat(this.parentFolderId)
      }));
      return new Promise(function (resolve, reject) {
        folderAPI.create(_this2.parentFolderId, _this2.name, resolve, reject);
      });
    }
    /**
     * Create FolderUploadNode instances from entries
     *
     * @private
     * @param {Array<FileSystemFileEntry>} entries
     * @returns {Promise<any>}
     */

  }]);

  return FolderUploadNode;
}();

export default FolderUploadNode;
//# sourceMappingURL=FolderUploadNode.js.map