function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Content Uploader component
 * @author Box
 */
import 'regenerator-runtime/runtime';
import React, { Component } from 'react';
import classNames from 'classnames';
import getProp from 'lodash/get';
import noop from 'lodash/noop';
import uniqueid from 'lodash/uniqueId';
import cloneDeep from 'lodash/cloneDeep';
import { getTypedFileId, getTypedFolderId } from '../../utils/file';
import Browser from '../../utils/Browser';
import makeResponsive from '../common/makeResponsive';
import Internationalize from '../common/Internationalize';
import FolderUpload from '../../api/uploads/FolderUpload';
import API from '../../api';
import { getDataTransferItemId, getFileId, getFileFromDataTransferItem, getPackageFileFromDataTransferItem, getFile, getFileAPIOptions, getDataTransferItemAPIOptions, isDataTransferItemAFolder, isDataTransferItemAPackage, isMultiputSupported } from '../../utils/uploads';
import DroppableContent from './DroppableContent';
import UploadsManager from './UploadsManager';
import Footer from './Footer';
import { DEFAULT_ROOT, CLIENT_NAME_CONTENT_UPLOADER, DEFAULT_HOSTNAME_UPLOAD, DEFAULT_HOSTNAME_API, VIEW_ERROR, VIEW_UPLOAD_EMPTY, VIEW_UPLOAD_IN_PROGRESS, VIEW_UPLOAD_SUCCESS, STATUS_PENDING, STATUS_IN_PROGRESS, STATUS_STAGED, STATUS_COMPLETE, STATUS_ERROR, ERROR_CODE_UPLOAD_FILE_LIMIT } from '../../constants';
import '../common/fonts.scss';
import '../common/base.scss';
var CHUNKED_UPLOAD_MIN_SIZE_BYTES = 104857600; // 100MB

var FILE_LIMIT_DEFAULT = 10000; // Upload at most 10000 files at once by default

var HIDE_UPLOAD_MANAGER_DELAY_MS_DEFAULT = 8000;
var EXPAND_UPLOADS_MANAGER_ITEMS_NUM_THRESHOLD = 5;
var UPLOAD_CONCURRENCY = 6;

var ContentUploader =
/*#__PURE__*/
function (_Component) {
  _inherits(ContentUploader, _Component);

  /**
   * [constructor]
   *
   * @return {ContentUploader}
   */
  function ContentUploader(props) {
    var _this;

    _classCallCheck(this, ContentUploader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContentUploader).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "isAutoExpanded", false);

    _defineProperty(_assertThisInitialized(_this), "getBaseAPIOptions", function () {
      var _this$props = _this.props,
          token = _this$props.token,
          sharedLink = _this$props.sharedLink,
          sharedLinkPassword = _this$props.sharedLinkPassword,
          apiHost = _this$props.apiHost,
          uploadHost = _this$props.uploadHost,
          clientName = _this$props.clientName,
          requestInterceptor = _this$props.requestInterceptor,
          responseInterceptor = _this$props.responseInterceptor;
      return {
        token: token,
        sharedLink: sharedLink,
        sharedLinkPassword: sharedLinkPassword,
        apiHost: apiHost,
        uploadHost: uploadHost,
        clientName: clientName,
        requestInterceptor: requestInterceptor,
        responseInterceptor: responseInterceptor
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getNewFiles", function (files) {
      var rootFolderId = _this.props.rootFolderId;
      var itemIds = _this.state.itemIds;
      return Array.from(files).filter(function (file) {
        return !itemIds[getFileId(file, rootFolderId)];
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getNewDataTransferItems", function (items) {
      var rootFolderId = _this.props.rootFolderId;
      var itemIds = _this.state.itemIds;
      return Array.from(items).filter(function (item) {
        return !itemIds[getDataTransferItemId(item, rootFolderId)];
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addFilesToUploadQueue", function (files, itemUpdateCallback) {
      var isRelativePathIgnored = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var _this$props2 = _this.props,
          onBeforeUpload = _this$props2.onBeforeUpload,
          rootFolderId = _this$props2.rootFolderId;

      if (!files || files.length === 0) {
        return;
      }

      var newFiles = _this.getNewFiles(files);

      if (newFiles.length === 0) {
        return;
      }

      var newItemIds = {};
      newFiles.forEach(function (file) {
        newItemIds[getFileId(file, rootFolderId)] = true;
      });
      clearTimeout(_this.resetItemsTimeout);
      var firstFile = getFile(newFiles[0]);

      _this.setState(function (state) {
        return {
          itemIds: _objectSpread({}, state.itemIds, {}, newItemIds)
        };
      }, function () {
        onBeforeUpload(newFiles);

        if (firstFile.webkitRelativePath && !isRelativePathIgnored) {
          // webkitRelativePath should be ignored when the upload destination folder is known
          _this.addFilesWithRelativePathToQueue(newFiles, itemUpdateCallback);
        } else {
          _this.addFilesWithoutRelativePathToQueue(newFiles, itemUpdateCallback);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addDroppedItemsToUploadQueue", function (droppedItems, itemUpdateCallback) {
      if (droppedItems.items) {
        _this.addDataTransferItemsToUploadQueue(droppedItems.items, itemUpdateCallback);
      } else {
        Array.from(droppedItems.files).forEach(function (file) {
          _this.addFilesToUploadQueue([file], itemUpdateCallback);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "addDataTransferItemsToUploadQueue", function (dataTransferItems, itemUpdateCallback) {
      var isFolderUploadEnabled = _this.props.isFolderUploadEnabled;

      if (!dataTransferItems || dataTransferItems.length === 0) {
        return;
      }

      var folderItems = [];
      var fileItems = [];
      var packageItems = [];
      Array.from(dataTransferItems).forEach(function (item) {
        var isDirectory = isDataTransferItemAFolder(item);

        if (Browser.isSafari() && isDataTransferItemAPackage(item)) {
          packageItems.push(item);
        } else if (isDirectory && isFolderUploadEnabled) {
          folderItems.push(item);
        } else if (!isDirectory) {
          fileItems.push(item);
        }
      });

      _this.addFileDataTransferItemsToUploadQueue(fileItems, itemUpdateCallback);

      _this.addPackageDataTransferItemsToUploadQueue(packageItems, itemUpdateCallback);

      _this.addFolderDataTransferItemsToUploadQueue(folderItems, itemUpdateCallback);
    });

    _defineProperty(_assertThisInitialized(_this), "addFileDataTransferItemsToUploadQueue", function (dataTransferItems, itemUpdateCallback) {
      dataTransferItems.forEach(
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(item) {
          var file;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return getFileFromDataTransferItem(item);

                case 2:
                  file = _context.sent;

                  if (file) {
                    _context.next = 5;
                    break;
                  }

                  return _context.abrupt("return");

                case 5:
                  _this.addFilesToUploadQueue([file], itemUpdateCallback);

                case 6:
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
    });

    _defineProperty(_assertThisInitialized(_this), "addPackageDataTransferItemsToUploadQueue", function (dataTransferItems, itemUpdateCallback) {
      dataTransferItems.forEach(function (item) {
        var file = getPackageFileFromDataTransferItem(item);

        if (!file) {
          return;
        }

        _this.addFilesToUploadQueue([file], itemUpdateCallback);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addFolderDataTransferItemsToUploadQueue",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(dataTransferItems, itemUpdateCallback) {
        var rootFolderId, itemIds, newItems, fileAPIOptions, _fileAPIOptions$folde, folderId;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                rootFolderId = _this.props.rootFolderId;
                itemIds = _this.state.itemIds;

                if (!(dataTransferItems.length === 0)) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return");

              case 4:
                newItems = _this.getNewDataTransferItems(dataTransferItems);
                newItems.forEach(function (item) {
                  itemIds[getDataTransferItemId(item, rootFolderId)] = true;
                });

                if (!(newItems.length === 0)) {
                  _context3.next = 8;
                  break;
                }

                return _context3.abrupt("return");

              case 8:
                fileAPIOptions = getDataTransferItemAPIOptions(newItems[0]);
                _fileAPIOptions$folde = fileAPIOptions.folderId, folderId = _fileAPIOptions$folde === void 0 ? rootFolderId : _fileAPIOptions$folde;
                newItems.forEach(
                /*#__PURE__*/
                function () {
                  var _ref3 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee2(item) {
                    var folderUpload;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            folderUpload = _this.getFolderUploadAPI(folderId);
                            _context2.next = 3;
                            return folderUpload.buildFolderTreeFromDataTransferItem(item);

                          case 3:
                            _this.addFolderToUploadQueue(folderUpload, itemUpdateCallback, fileAPIOptions);

                          case 4:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x4) {
                    return _ref3.apply(this, arguments);
                  };
                }());

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "getFolderUploadAPI", function (folderId) {
      var uploadBaseAPIOptions = _this.getBaseAPIOptions();

      return new FolderUpload(_this.addFilesToUploadQueue, folderId, _this.addToQueue, uploadBaseAPIOptions);
    });

    _defineProperty(_assertThisInitialized(_this), "addFolderToUploadQueue", function (folderUpload, itemUpdateCallback, apiOptions) {
      _this.addToQueue([// $FlowFixMe no file property
      {
        api: folderUpload,
        extension: '',
        isFolder: true,
        name: folderUpload.folder.name,
        options: apiOptions,
        progress: 0,
        size: 1,
        status: STATUS_PENDING
      }], itemUpdateCallback);
    });

    _defineProperty(_assertThisInitialized(_this), "addFilesWithoutRelativePathToQueue", function (files, itemUpdateCallback) {
      var itemIds = _this.state.itemIds;
      var rootFolderId = _this.props.rootFolderId; // Convert files from the file API to upload items

      var newItems = files.map(function (file) {
        var uploadFile = getFile(file);
        var uploadAPIOptions = getFileAPIOptions(file);
        var name = uploadFile.name,
            size = uploadFile.size; // Extract extension or use empty string if file has no extension

        var extension = name.substr(name.lastIndexOf('.') + 1);

        if (extension.length === name.length) {
          extension = '';
        }

        var api = _this.getUploadAPI(uploadFile, uploadAPIOptions);

        var uploadItem = {
          api: api,
          extension: extension,
          file: uploadFile,
          name: name,
          progress: 0,
          size: size,
          status: STATUS_PENDING
        };

        if (uploadAPIOptions) {
          uploadItem.options = uploadAPIOptions;
        }

        itemIds[getFileId(uploadItem, rootFolderId)] = true;
        return uploadItem;
      });

      if (newItems.length === 0) {
        return;
      }

      _this.setState({
        itemIds: itemIds
      });

      _this.addToQueue(newItems, itemUpdateCallback);
    });

    _defineProperty(_assertThisInitialized(_this), "addToQueue", function (newItems, itemUpdateCallback) {
      var _this$props3 = _this.props,
          fileLimit = _this$props3.fileLimit,
          useUploadsManager = _this$props3.useUploadsManager;
      var _this$state = _this.state,
          items = _this$state.items,
          isUploadsManagerExpanded = _this$state.isUploadsManagerExpanded;
      var updatedItems = [];
      var prevItemsNum = items.length;
      var totalNumOfItems = prevItemsNum + newItems.length; // Don't add more than fileLimit # of items

      if (totalNumOfItems > fileLimit) {
        updatedItems = items.concat(newItems.slice(0, fileLimit - items.length));

        _this.setState({
          errorCode: ERROR_CODE_UPLOAD_FILE_LIMIT
        });
      } else {
        updatedItems = items.concat(newItems);

        _this.setState({
          errorCode: ''
        }); // If the number of items being uploaded passes the threshold, expand the upload manager


        if (prevItemsNum < EXPAND_UPLOADS_MANAGER_ITEMS_NUM_THRESHOLD && totalNumOfItems >= EXPAND_UPLOADS_MANAGER_ITEMS_NUM_THRESHOLD && useUploadsManager && !isUploadsManagerExpanded) {
          _this.isAutoExpanded = true;

          _this.expandUploadsManager();
        }
      }

      _this.updateViewAndCollection(updatedItems, function () {
        if (itemUpdateCallback) {
          itemUpdateCallback();
        }

        var view = _this.state.view; // Automatically start upload if other files are being uploaded

        if (view === VIEW_UPLOAD_IN_PROGRESS) {
          _this.upload();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "removeFileFromUploadQueue", function (item) {
      var _this$props4 = _this.props,
          onCancel = _this$props4.onCancel,
          useUploadsManager = _this$props4.useUploadsManager;
      var items = _this.state.items; // Clear any error errorCode in footer

      _this.setState({
        errorCode: ''
      });

      var api = item.api;
      api.cancel();
      items.splice(items.indexOf(item), 1);
      onCancel([item]);

      _this.updateViewAndCollection(items, function () {
        // Minimize uploads manager if there are no more items
        if (useUploadsManager && !items.length) {
          _this.minimizeUploadsManager();
        }

        var view = _this.state.view;

        if (view === VIEW_UPLOAD_IN_PROGRESS) {
          _this.upload();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "cancel", function () {
      var items = _this.state.items;
      items.forEach(function (uploadItem) {
        var api = uploadItem.api,
            status = uploadItem.status;

        if (status === STATUS_IN_PROGRESS) {
          api.cancel();
        }
      }); // Reset upload collection

      _this.updateViewAndCollection([]);
    });

    _defineProperty(_assertThisInitialized(_this), "upload", function () {
      var items = _this.state.items;
      items.forEach(function (uploadItem) {
        if (uploadItem.status === STATUS_PENDING) {
          _this.uploadFile(uploadItem);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleUploadSuccess", function (item, entries) {
      var _this$props5 = _this.props,
          onUpload = _this$props5.onUpload,
          useUploadsManager = _this$props5.useUploadsManager;
      item.progress = 100;

      if (!item.error) {
        item.status = STATUS_COMPLETE;
      } // Cache Box File object of successfully uploaded item


      if (entries && entries.length === 1) {
        var _entries = _slicedToArray(entries, 1),
            boxFile = _entries[0];

        item.boxFile = boxFile;
      }

      var items = _this.state.items;
      items[items.indexOf(item)] = item; // Broadcast that a file has been uploaded

      if (useUploadsManager) {
        onUpload(item);

        _this.checkClearUploadItems();
      } else {
        onUpload(item.boxFile);
      }

      _this.updateViewAndCollection(items, function () {
        var view = _this.state.view;

        if (view === VIEW_UPLOAD_IN_PROGRESS) {
          _this.upload();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "resetUploadManagerExpandState", function () {
      _this.isAutoExpanded = false;

      _this.setState({
        isUploadsManagerExpanded: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleUploadError", function (item, error) {
      var _this$props6 = _this.props,
          onError = _this$props6.onError,
          useUploadsManager = _this$props6.useUploadsManager;
      var file = item.file;
      var items = _this.state.items;
      item.status = STATUS_ERROR;
      item.error = error;

      var newItems = _toConsumableArray(items);

      var index = newItems.findIndex(function (singleItem) {
        return singleItem === item;
      });

      if (index !== -1) {
        newItems[index] = item;
      } // Broadcast that there was an error uploading a file


      var errorData = useUploadsManager ? {
        item: item,
        error: error
      } : {
        file: file,
        error: error
      };
      onError(errorData);

      _this.updateViewAndCollection(newItems, function () {
        if (useUploadsManager) {
          _this.isAutoExpanded = true;

          _this.expandUploadsManager();
        }

        var view = _this.state.view;

        if (view === VIEW_UPLOAD_IN_PROGRESS) {
          _this.upload();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleUploadProgress", function (item, event) {
      if (!event.total || item.status === STATUS_COMPLETE || item.status === STATUS_STAGED) {
        return;
      }

      item.progress = Math.min(Math.round(event.loaded / event.total * 100), 100);
      item.status = item.progress === 100 ? STATUS_STAGED : STATUS_IN_PROGRESS;
      var onProgress = _this.props.onProgress;
      onProgress(item);
      var items = _this.state.items;
      items[items.indexOf(item)] = item;

      _this.updateViewAndCollection(items);
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (item) {
      var _this$props7 = _this.props,
          chunked = _this$props7.chunked,
          isResumableUploadsEnabled = _this$props7.isResumableUploadsEnabled,
          onClickCancel = _this$props7.onClickCancel,
          onClickResume = _this$props7.onClickResume,
          onClickRetry = _this$props7.onClickRetry;
      var status = item.status,
          file = item.file;
      var isChunkedUpload = chunked && !item.isFolder && file.size > CHUNKED_UPLOAD_MIN_SIZE_BYTES && isMultiputSupported();
      var isResumable = isResumableUploadsEnabled && isChunkedUpload && item.api.sessionId;

      switch (status) {
        case STATUS_IN_PROGRESS:
        case STATUS_STAGED:
        case STATUS_COMPLETE:
        case STATUS_PENDING:
          _this.removeFileFromUploadQueue(item);

          onClickCancel(item);
          break;

        case STATUS_ERROR:
          if (isResumable) {
            item.bytesUploadedOnLastResume = item.api.totalUploadedBytes;

            _this.resumeFile(item);

            onClickResume(item);
          } else {
            _this.resetFile(item);

            _this.uploadFile(item);

            onClickRetry(item);
          }

          break;

        default:
          break;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "clickAllWithStatus", function (status) {
      var items = _this.state.items;
      items.forEach(function (item) {
        if (!status || item.status === status) {
          _this.onClick(item);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "expandUploadsManager", function () {
      var useUploadsManager = _this.props.useUploadsManager;

      if (!useUploadsManager) {
        return;
      }

      clearTimeout(_this.resetItemsTimeout);

      _this.setState({
        isUploadsManagerExpanded: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "minimizeUploadsManager", function () {
      var _this$props8 = _this.props,
          useUploadsManager = _this$props8.useUploadsManager,
          onMinimize = _this$props8.onMinimize;

      if (!useUploadsManager || !onMinimize) {
        return;
      }

      clearTimeout(_this.resetItemsTimeout);
      onMinimize();

      _this.resetUploadManagerExpandState();

      _this.checkClearUploadItems();
    });

    _defineProperty(_assertThisInitialized(_this), "checkClearUploadItems", function () {
      _this.resetItemsTimeout = setTimeout(_this.resetUploadsManagerItemsWhenUploadsComplete, HIDE_UPLOAD_MANAGER_DELAY_MS_DEFAULT);
    });

    _defineProperty(_assertThisInitialized(_this), "toggleUploadsManager", function () {
      var isUploadsManagerExpanded = _this.state.isUploadsManagerExpanded;

      if (isUploadsManagerExpanded) {
        _this.minimizeUploadsManager();
      } else {
        _this.expandUploadsManager();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "resetUploadsManagerItemsWhenUploadsComplete", function () {
      var _this$state2 = _this.state,
          view = _this$state2.view,
          items = _this$state2.items,
          isUploadsManagerExpanded = _this$state2.isUploadsManagerExpanded;
      var _this$props9 = _this.props,
          useUploadsManager = _this$props9.useUploadsManager,
          onCancel = _this$props9.onCancel; // Do not reset items when upload manger is expanded or there're uploads in progress

      if (isUploadsManagerExpanded && useUploadsManager && !!items.length || view === VIEW_UPLOAD_IN_PROGRESS) {
        return;
      }

      onCancel(items);

      _this.setState({
        items: [],
        itemIds: {}
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addFilesWithOptionsToUploadQueueAndStartUpload", function (files, dataTransferItems) {
      _this.addFilesToUploadQueue(files, _this.upload);

      _this.addDataTransferItemsToUploadQueue(dataTransferItems, _this.upload);
    });

    var _rootFolderId = props.rootFolderId,
        _token = props.token,
        _useUploadsManager = props.useUploadsManager;
    _this.state = {
      view: _rootFolderId && _token || _useUploadsManager ? VIEW_UPLOAD_EMPTY : VIEW_ERROR,
      items: [],
      errorCode: '',
      itemIds: {},
      isUploadsManagerExpanded: false
    };
    _this.id = uniqueid('bcu_');
    return _this;
  }
  /**
   * Fetches the root folder on load
   *
   * @private
   * @inheritdoc
   * @return {void}
   */


  _createClass(ContentUploader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.rootElement = document.getElementById(this.id);
      this.appElement = this.rootElement;
    }
    /**
     * Cancels pending uploads
     *
     * @private
     * @inheritdoc
     * @return {void}
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancel();
    }
    /**
     * Adds new items to the queue when files prop gets updated in window view
     *
     * @return {void}
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props10 = this.props,
          files = _this$props10.files,
          dataTransferItems = _this$props10.dataTransferItems,
          useUploadsManager = _this$props10.useUploadsManager;
      var hasFiles = Array.isArray(files) && files.length > 0;
      var hasItems = Array.isArray(dataTransferItems) && dataTransferItems.length > 0;
      var hasUploads = hasFiles || hasItems;

      if (!useUploadsManager || !hasUploads) {
        return;
      } // TODO: this gets called unnecessarily (upon each render regardless of the queue not changing)


      this.addFilesWithOptionsToUploadQueueAndStartUpload(files, dataTransferItems);
    }
    /**
     * Create and return new instance of API creator
     *
     * @param {UploadItemAPIOptions} [uploadAPIOptions]
     * @return {API}
     */

  }, {
    key: "createAPIFactory",
    value: function createAPIFactory(uploadAPIOptions) {
      var rootFolderId = this.props.rootFolderId;
      var folderId = getProp(uploadAPIOptions, 'folderId') || rootFolderId;
      var fileId = getProp(uploadAPIOptions, 'fileId');
      var itemFolderId = getTypedFolderId(folderId);
      var itemFileId = fileId ? getTypedFileId(fileId) : null;
      return new API(_objectSpread({}, this.getBaseAPIOptions(), {
        id: itemFileId || itemFolderId
      }, uploadAPIOptions));
    }
    /**
     * Return base API options from props
     *
     * @private
     * @returns {Object}
     */

  }, {
    key: "addFilesWithRelativePathToQueue",

    /**
     * Converts File API to upload items and adds to upload queue for files with webkitRelativePath.
     *
     * @private
     * @param {Array<UploadFileWithAPIOptions | File>} files - Files to be added to upload queue
     * @param {Function} itemUpdateCallback - function to be invoked after items status are updated
     * @return {void}
     */
    value: function addFilesWithRelativePathToQueue(files, itemUpdateCallback) {
      if (files.length === 0) {
        return;
      }

      var rootFolderId = this.props.rootFolderId;
      var fileAPIOptions = getFileAPIOptions(files[0]);
      var _fileAPIOptions$folde2 = fileAPIOptions.folderId,
          folderId = _fileAPIOptions$folde2 === void 0 ? rootFolderId : _fileAPIOptions$folde2;
      var folderUpload = this.getFolderUploadAPI(folderId); // Only 1 folder tree can be built with files having webkitRelativePath properties

      folderUpload.buildFolderTreeFromWebkitRelativePath(files);
      this.addFolderToUploadQueue(folderUpload, itemUpdateCallback, fileAPIOptions);
    }
    /**
     * Get folder upload API instance
     *
     * @private
     * @param {string} folderId
     * @return {FolderUpload}
     */

  }, {
    key: "getUploadAPI",

    /**
     * Returns a new API instance for the given file.
     *
     * @private
     * @param {File} file - File to get a new API instance for
     * @param {UploadItemAPIOptions} [uploadAPIOptions]
     * @return {UploadAPI} - Instance of Upload API
     */
    value: function getUploadAPI(file, uploadAPIOptions) {
      var _this$props11 = this.props,
          chunked = _this$props11.chunked,
          isResumableUploadsEnabled = _this$props11.isResumableUploadsEnabled,
          isUploadFallbackLogicEnabled = _this$props11.isUploadFallbackLogicEnabled;
      var size = file.size;
      var factory = this.createAPIFactory(uploadAPIOptions);

      if (chunked && size > CHUNKED_UPLOAD_MIN_SIZE_BYTES) {
        if (isMultiputSupported()) {
          var chunkedUploadAPI = factory.getChunkedUploadAPI();

          if (isResumableUploadsEnabled) {
            chunkedUploadAPI.isResumableUploadsEnabled = true;
          }

          if (isUploadFallbackLogicEnabled) {
            chunkedUploadAPI.isUploadFallbackLogicEnabled = true;
          }

          return chunkedUploadAPI;
        }
        /* eslint-disable no-console */


        console.warn('Chunked uploading is enabled, but not supported by your browser. You may need to enable HTTPS.');
        /* eslint-enable no-console */
      }

      var plainUploadAPI = factory.getPlainUploadAPI();

      if (isUploadFallbackLogicEnabled) {
        plainUploadAPI.isUploadFallbackLogicEnabled = true;
      }

      return plainUploadAPI;
    }
    /**
     * Removes an item from the upload queue. Cancels upload if in progress.
     *
     * @param {UploadItem} item - Item to remove
     * @return {void}
     */

  }, {
    key: "uploadFile",

    /**
     * Helper to upload a single file.
     *
     * @param {UploadItem} item - Upload item object
     * @return {void}
     */
    value: function uploadFile(item) {
      var _this2 = this;

      var _this$props12 = this.props,
          overwrite = _this$props12.overwrite,
          rootFolderId = _this$props12.rootFolderId;
      var api = item.api,
          file = item.file,
          options = item.options;
      var items = this.state.items;
      var numItemsUploading = items.filter(function (item_t) {
        return item_t.status === STATUS_IN_PROGRESS;
      }).length;

      if (numItemsUploading >= UPLOAD_CONCURRENCY) {
        return;
      }

      var uploadOptions = {
        file: file,
        folderId: options && options.folderId ? options.folderId : rootFolderId,
        errorCallback: function errorCallback(error) {
          return _this2.handleUploadError(item, error);
        },
        progressCallback: function progressCallback(event) {
          return _this2.handleUploadProgress(item, event);
        },
        successCallback: function successCallback(entries) {
          return _this2.handleUploadSuccess(item, entries);
        },
        overwrite: overwrite,
        fileId: options && options.fileId ? options.fileId : null
      };
      item.status = STATUS_IN_PROGRESS;
      items[items.indexOf(item)] = item;
      api.upload(uploadOptions);
      this.updateViewAndCollection(items);
    }
    /**
     * Helper to resume uploading a single file.
     *
     * @param {UploadItem} item - Upload item object
     * @return {void}
     */

  }, {
    key: "resumeFile",
    value: function resumeFile(item) {
      var _this3 = this;

      var _this$props13 = this.props,
          overwrite = _this$props13.overwrite,
          rootFolderId = _this$props13.rootFolderId,
          onResume = _this$props13.onResume;
      var api = item.api,
          file = item.file,
          options = item.options;
      var items = this.state.items;
      var numItemsUploading = items.filter(function (item_t) {
        return item_t.status === STATUS_IN_PROGRESS;
      }).length;

      if (numItemsUploading >= UPLOAD_CONCURRENCY) {
        return;
      }

      var resumeOptions = {
        file: file,
        folderId: options && options.folderId ? options.folderId : rootFolderId,
        errorCallback: function errorCallback(error) {
          return _this3.handleUploadError(item, error);
        },
        progressCallback: function progressCallback(event) {
          return _this3.handleUploadProgress(item, event);
        },
        successCallback: function successCallback(entries) {
          return _this3.handleUploadSuccess(item, entries);
        },
        overwrite: overwrite,
        sessionId: api && api.sessionId ? api.sessionId : null,
        fileId: options && options.fileId ? options.fileId : null
      };
      item.status = STATUS_IN_PROGRESS;
      delete item.error;
      items[items.indexOf(item)] = item;
      onResume(item);
      api.resume(resumeOptions);
      this.updateViewAndCollection(items);
    }
    /**
     * Helper to reset a file. Cancels any current upload and resets progress.
     *
     * @param {UploadItem} item - Upload item to reset
     * @return {void}
     */

  }, {
    key: "resetFile",
    value: function resetFile(item) {
      var api = item.api,
          file = item.file,
          options = item.options;

      if (api && typeof api.cancel === 'function') {
        api.cancel();
      } // Reset API, progress & status


      item.api = this.getUploadAPI(file, options);
      item.progress = 0;
      item.status = STATUS_PENDING;
      delete item.error;
      var items = this.state.items;
      items[items.indexOf(item)] = item;
      this.updateViewAndCollection(items);
    }
    /**
     * Handles a successful upload.
     *
     * @private
     * @param {UploadItem} item - Upload item corresponding to success event
     * @param {BoxItem[]} entries - Successfully uploaded Box File objects
     * @return {void}
     */

  }, {
    key: "updateViewAndCollection",

    /**
     * Updates view and internal upload collection with provided items.
     *
     * @private
     * @param {UploadItem[]} item - Items to update collection with
     * @param {Function} callback
     * @return {void}
     */
    value: function updateViewAndCollection(items, callback) {
      var _this$props14 = this.props,
          onComplete = _this$props14.onComplete,
          useUploadsManager = _this$props14.useUploadsManager,
          isResumableUploadsEnabled = _this$props14.isResumableUploadsEnabled;
      var someUploadIsInProgress = items.some(function (uploadItem) {
        return uploadItem.status !== STATUS_COMPLETE;
      });
      var someUploadHasFailed = items.some(function (uploadItem) {
        return uploadItem.status === STATUS_ERROR;
      });
      var allItemsArePending = !items.some(function (uploadItem) {
        return uploadItem.status !== STATUS_PENDING;
      });
      var noFileIsPendingOrInProgress = items.every(function (uploadItem) {
        return uploadItem.status !== STATUS_PENDING && uploadItem.status !== STATUS_IN_PROGRESS;
      });
      var areAllItemsFinished = items.every(function (uploadItem) {
        return uploadItem.status === STATUS_COMPLETE || uploadItem.status === STATUS_ERROR;
      });
      var uploadItemsStatus = isResumableUploadsEnabled ? areAllItemsFinished : noFileIsPendingOrInProgress;
      var view = '';

      if (items && items.length === 0 || allItemsArePending) {
        view = VIEW_UPLOAD_EMPTY;
      } else if (someUploadHasFailed && useUploadsManager) {
        view = VIEW_ERROR;
      } else if (someUploadIsInProgress) {
        view = VIEW_UPLOAD_IN_PROGRESS;
      } else {
        view = VIEW_UPLOAD_SUCCESS;

        if (!useUploadsManager) {
          onComplete(cloneDeep(items.map(function (item) {
            return item.boxFile;
          }))); // Reset item collection after successful upload

          items = [];
        }
      }

      if (uploadItemsStatus && useUploadsManager) {
        if (this.isAutoExpanded) {
          this.resetUploadManagerExpandState();
        } // Else manually expanded so don't close


        onComplete(items);
      }

      var state = {
        items: items,
        view: view
      };

      if (items.length === 0) {
        state.itemIds = {};
        state.errorCode = '';
      }

      this.setState(state, callback);
    }
    /**
     * Handles an upload error.
     *
     * @private
     * @param {UploadItem} item - Upload item corresponding to error
     * @param {Error} error - Upload error
     * @return {void}
     */

  }, {
    key: "render",

    /**
     * Renders the content uploader
     *
     * @inheritdoc
     * @return {Component}
     */
    value: function render() {
      var _this$props15 = this.props,
          language = _this$props15.language,
          messages = _this$props15.messages,
          onClose = _this$props15.onClose,
          className = _this$props15.className,
          measureRef = _this$props15.measureRef,
          isTouch = _this$props15.isTouch,
          fileLimit = _this$props15.fileLimit,
          useUploadsManager = _this$props15.useUploadsManager,
          isResumableUploadsEnabled = _this$props15.isResumableUploadsEnabled,
          isFolderUploadEnabled = _this$props15.isFolderUploadEnabled,
          _this$props15$isDragg = _this$props15.isDraggingItemsToUploadsManager,
          isDraggingItemsToUploadsManager = _this$props15$isDragg === void 0 ? false : _this$props15$isDragg;
      var _this$state3 = this.state,
          view = _this$state3.view,
          items = _this$state3.items,
          errorCode = _this$state3.errorCode,
          isUploadsManagerExpanded = _this$state3.isUploadsManagerExpanded;
      var isEmpty = items.length === 0;
      var isVisible = !isEmpty || !!isDraggingItemsToUploadsManager;
      var hasFiles = items.length !== 0;
      var isLoading = items.some(function (item) {
        return item.status === STATUS_IN_PROGRESS;
      });
      var isDone = items.every(function (item) {
        return item.status === STATUS_COMPLETE || item.status === STATUS_STAGED;
      });
      var styleClassName = classNames('bcu', className, {
        'be-app-element': !useUploadsManager,
        be: !useUploadsManager
      });
      return React.createElement(Internationalize, {
        language: language,
        messages: messages
      }, useUploadsManager ? React.createElement("div", {
        ref: measureRef,
        className: styleClassName,
        id: this.id
      }, React.createElement(UploadsManager, {
        isDragging: isDraggingItemsToUploadsManager,
        isExpanded: isUploadsManagerExpanded,
        isResumableUploadsEnabled: isResumableUploadsEnabled,
        isVisible: isVisible,
        items: items,
        onItemActionClick: this.onClick,
        onRemoveActionClick: this.removeFileFromUploadQueue,
        onUploadsManagerActionClick: this.clickAllWithStatus,
        toggleUploadsManager: this.toggleUploadsManager,
        view: view
      })) : React.createElement("div", {
        ref: measureRef,
        className: styleClassName,
        id: this.id
      }, React.createElement(DroppableContent, {
        addDataTransferItemsToUploadQueue: this.addDroppedItemsToUploadQueue,
        addFiles: this.addFilesToUploadQueue,
        allowedTypes: ['Files'],
        isFolderUploadEnabled: isFolderUploadEnabled,
        isTouch: isTouch,
        items: items,
        onClick: this.onClick,
        view: view
      }), React.createElement(Footer, {
        errorCode: errorCode,
        fileLimit: fileLimit,
        hasFiles: hasFiles,
        isLoading: isLoading,
        onCancel: this.cancel,
        onClose: onClose,
        onUpload: this.upload,
        isDone: isDone
      })));
    }
  }]);

  return ContentUploader;
}(Component);

_defineProperty(ContentUploader, "defaultProps", {
  rootFolderId: DEFAULT_ROOT,
  apiHost: DEFAULT_HOSTNAME_API,
  chunked: true,
  className: '',
  clientName: CLIENT_NAME_CONTENT_UPLOADER,
  fileLimit: FILE_LIMIT_DEFAULT,
  uploadHost: DEFAULT_HOSTNAME_UPLOAD,
  onBeforeUpload: noop,
  onClickCancel: noop,
  onClickResume: noop,
  onClickRetry: noop,
  onClose: noop,
  onComplete: noop,
  onError: noop,
  onResume: noop,
  onUpload: noop,
  onProgress: noop,
  overwrite: true,
  useUploadsManager: false,
  files: [],
  onMinimize: noop,
  onCancel: noop,
  isFolderUploadEnabled: false,
  isResumableUploadsEnabled: false,
  isUploadFallbackLogicEnabled: false,
  dataTransferItems: [],
  isDraggingItemsToUploadsManager: false
});

export default makeResponsive(ContentUploader);
export { ContentUploader as ContentUploaderComponent, CHUNKED_UPLOAD_MIN_SIZE_BYTES };
//# sourceMappingURL=ContentUploader.js.map