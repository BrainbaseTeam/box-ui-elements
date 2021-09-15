function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
 * @file Content Explorer Component
 * @author Box
 */
import 'regenerator-runtime/runtime';
import React, { Component } from 'react';
import classNames from 'classnames';
import cloneDeep from 'lodash/cloneDeep';
import debounce from 'lodash/debounce';
import flow from 'lodash/flow';
import getProp from 'lodash/get';
import noop from 'lodash/noop';
import uniqueid from 'lodash/uniqueId';
import CreateFolderDialog from '../common/create-folder-dialog';
import UploadDialog from '../common/upload-dialog';
import Header from '../common/header';
import Pagination from '../../features/pagination';
import SubHeader from '../common/sub-header/SubHeader';
import makeResponsive from '../common/makeResponsive';
import openUrlInsideIframe from '../../utils/iframe';
import Internationalize from '../common/Internationalize';
import API from '../../api';
import MetadataQueryAPIHelper from '../../features/metadata-based-view/MetadataQueryAPIHelper';
import Footer from './Footer';
import PreviewDialog from './PreviewDialog';
import ShareDialog from './ShareDialog';
import RenameDialog from './RenameDialog';
import DeleteConfirmationDialog from './DeleteConfirmationDialog';
import Content from './Content';
import isThumbnailReady from './utils';
import { isFocusableElement, isInputElement, focus } from '../../utils/dom';
import { FILE_SHARED_LINK_FIELDS_TO_FETCH, FOLDER_FIELDS_TO_FETCH } from '../../utils/fields';
import CONTENT_EXPLORER_FOLDER_FIELDS_TO_FETCH from './constants';
import LocalStore from '../../utils/LocalStore';
import { withFeatureConsumer, withFeatureProvider } from '../common/feature-checking';
import { DEFAULT_HOSTNAME_UPLOAD, DEFAULT_HOSTNAME_API, DEFAULT_HOSTNAME_APP, DEFAULT_HOSTNAME_STATIC, DEFAULT_SEARCH_DEBOUNCE, SORT_ASC, FIELD_NAME, DEFAULT_ROOT, VIEW_SEARCH, VIEW_FOLDER, VIEW_ERROR, VIEW_RECENTS, VIEW_METADATA, VIEW_MODE_LIST, TYPE_FILE, TYPE_WEBLINK, TYPE_FOLDER, CLIENT_NAME_CONTENT_EXPLORER, DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_SIZE, DEFAULT_VIEW_FILES, DEFAULT_VIEW_RECENTS, DEFAULT_VIEW_METADATA, ERROR_CODE_ITEM_NAME_INVALID, ERROR_CODE_ITEM_NAME_TOO_LONG, TYPED_ID_FOLDER_PREFIX } from '../../constants';
import '../common/fonts.scss';
import '../common/base.scss';
import '../common/modal.scss';
import './ContentExplorer.scss';
var GRID_VIEW_MAX_COLUMNS = 7;
var GRID_VIEW_MIN_COLUMNS = 1;
var localStoreViewMode = 'bce.defaultViewMode';

var ContentExplorer =
/*#__PURE__*/
function (_Component) {
  _inherits(ContentExplorer, _Component);

  // Keeps track of very 1st load

  /**
   * [constructor]
   *
   * @private
   * @return {ContentExplorer}
   */
  function ContentExplorer(props) {
    var _this;

    _classCallCheck(this, ContentExplorer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContentExplorer).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "firstLoad", true);

    _defineProperty(_assertThisInitialized(_this), "store", new LocalStore());

    _defineProperty(_assertThisInitialized(_this), "showMetadataQueryResultsSuccessCallback", function (metadataQueryCollection) {
      var nextMarker = metadataQueryCollection.nextMarker;
      var _this$state = _this.state,
          currentCollection = _this$state.currentCollection,
          currentPageNumber = _this$state.currentPageNumber,
          markers = _this$state.markers;

      var cloneMarkers = _toConsumableArray(markers);

      if (nextMarker) {
        cloneMarkers[currentPageNumber + 1] = nextMarker;
      }

      _this.setState({
        currentCollection: _objectSpread({}, currentCollection, {}, metadataQueryCollection, {
          percentLoaded: 100
        }),
        markers: cloneMarkers
      });
    });

    _defineProperty(_assertThisInitialized(_this), "errorCallback", function (error) {
      _this.setState({
        view: VIEW_ERROR
      });
      /* eslint-disable no-console */


      console.error(error);
      /* eslint-enable no-console */
    });

    _defineProperty(_assertThisInitialized(_this), "refreshCollection", function () {
      var _this$state2 = _this.state,
          id = _this$state2.currentCollection.id,
          view = _this$state2.view,
          searchQuery = _this$state2.searchQuery;

      if (view === VIEW_FOLDER && id) {
        _this.fetchFolder(id, false);
      } else if (view === VIEW_RECENTS) {
        _this.showRecents(false);
      } else if (view === VIEW_SEARCH && searchQuery) {
        _this.search(searchQuery);
      } else if (view === VIEW_METADATA) {
        _this.showMetadataQueryResults();
      } else {
        throw new Error('Cannot refresh incompatible view!');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "fetchFolder", function (id) {
      var triggerNavigationEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var rootFolderId = _this.props.rootFolderId;
      var _this$state3 = _this.state,
          currentId = _this$state3.currentCollection.id,
          currentOffset = _this$state3.currentOffset,
          limit = _this$state3.currentPageSize,
          _this$state3$searchQu = _this$state3.searchQuery,
          searchQuery = _this$state3$searchQu === void 0 ? '' : _this$state3$searchQu,
          sortBy = _this$state3.sortBy,
          sortDirection = _this$state3.sortDirection;
      var folderId = typeof id === 'string' ? id : rootFolderId;
      var hasFolderChanged = currentId && currentId !== folderId;
      var hasSearchQuery = !!searchQuery.trim().length;
      var offset = hasFolderChanged || hasSearchQuery ? 0 : currentOffset; // Reset offset on folder or mode change
      // If we are navigating around, aka not first load
      // then reset the focus to the root so that after
      // the collection loads the activeElement is not the
      // button that was clicked to fetch the folder

      if (!_this.firstLoad) {
        _this.rootElement.focus();
      } // Reset search state, the view and show busy indicator


      _this.setState({
        searchQuery: '',
        view: VIEW_FOLDER,
        currentCollection: _this.currentUnloadedCollection(),
        currentOffset: offset
      });

      var fields = FOLDER_FIELDS_TO_FETCH;
      fields.push('metadata.enterprise_261189234.customThumbnail'); // Fetch the folder using folder API

      _this.api.getFolderAPI().getFolder(folderId, limit, offset, sortBy, sortDirection, function (collection) {
        _this.fetchFolderSuccessCallback(collection, triggerNavigationEvent);
      }, _this.errorCallback, {
        fields: CONTENT_EXPLORER_FOLDER_FIELDS_TO_FETCH,
        forceFetch: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onItemClick", function (item) {
      // If the id was passed in, just use that
      if (typeof item === 'string') {
        _this.fetchFolder(item);

        return;
      }

      var id = item.id,
          type = item.type;
      var isTouch = _this.props.isTouch;

      if (type === TYPE_FOLDER) {
        _this.fetchFolder(id);

        return;
      }

      if (isTouch) {
        return;
      }

      _this.preview(item);
    });

    _defineProperty(_assertThisInitialized(_this), "searchSuccessCallback", function (collection) {
      var selected = _this.state.selected; // Close any open modals

      _this.closeModals();

      _this.updateCollection(collection, selected);
    });

    _defineProperty(_assertThisInitialized(_this), "debouncedSearch", debounce(function (id, query) {
      var _this$state4 = _this.state,
          currentOffset = _this$state4.currentOffset,
          currentPageSize = _this$state4.currentPageSize;

      _this.api.getSearchAPI().search(id, query, currentPageSize, currentOffset, _this.searchSuccessCallback, _this.errorCallback, {
        fields: CONTENT_EXPLORER_FOLDER_FIELDS_TO_FETCH,
        forceFetch: true
      });
    }, DEFAULT_SEARCH_DEBOUNCE));

    _defineProperty(_assertThisInitialized(_this), "search", function (query) {
      var rootFolderId = _this.props.rootFolderId;
      var _this$state5 = _this.state,
          id = _this$state5.currentCollection.id,
          currentOffset = _this$state5.currentOffset,
          searchQuery = _this$state5.searchQuery;
      var folderId = typeof id === 'string' ? id : rootFolderId;
      var trimmedQuery = query.trim();

      if (!query) {
        // Cancel the debounce so we don't search on a previous query
        _this.debouncedSearch.cancel(); // Query was cleared out, load the prior folder
        // The prior folder is always the parent folder for search


        _this.setState({
          currentOffset: 0
        }, function () {
          _this.fetchFolder(folderId, false);
        });

        return;
      }

      if (!trimmedQuery) {
        // Query now only has bunch of spaces
        // do nothing and but update prior state
        _this.setState({
          searchQuery: query
        });

        return;
      }

      _this.setState({
        currentCollection: _this.currentUnloadedCollection(),
        currentOffset: trimmedQuery === searchQuery ? currentOffset : 0,
        searchQuery: query,
        selected: undefined,
        view: VIEW_SEARCH
      });

      _this.debouncedSearch(folderId, query);
    });

    _defineProperty(_assertThisInitialized(_this), "upload", function () {
      var _this$state$currentCo = _this.state.currentCollection,
          id = _this$state$currentCo.id,
          permissions = _this$state$currentCo.permissions;
      var canUpload = _this.props.canUpload;

      if (!canUpload || !id || !permissions) {
        return;
      }

      var can_upload = permissions.can_upload;

      if (!can_upload) {
        return;
      }

      _this.setState({
        isUploadModalOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "uploadSuccessHandler", function () {
      var id = _this.state.currentCollection.id;

      _this.fetchFolder(id, false);
    });

    _defineProperty(_assertThisInitialized(_this), "changeShareAccess", function (access) {
      var selected = _this.state.selected;
      var canSetShareAccess = _this.props.canSetShareAccess;

      if (!selected || !canSetShareAccess) {
        return;
      }

      var permissions = selected.permissions,
          type = selected.type;

      if (!permissions || !type) {
        return;
      }

      var can_set_share_access = permissions.can_set_share_access;

      if (!can_set_share_access) {
        return;
      }

      _this.setState({
        isLoading: true
      });

      _this.api.getAPI(type).share(selected, access, function (updatedItem) {
        _this.setState({
          isLoading: false
        });

        _this.select(updatedItem);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "sort", function (sortBy, sortDirection) {
      var id = _this.state.currentCollection.id;

      if (id) {
        _this.setState({
          sortBy: sortBy,
          sortDirection: sortDirection
        }, _this.refreshCollection);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "attemptThumbnailGeneration",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(item) {
        var entries, representation, updatedRepresentation;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                entries = getProp(item, 'representations.entries');
                representation = getProp(entries, '[0]');

                if (!representation) {
                  _context.next = 7;
                  break;
                }

                _context.next = 5;
                return _this.api.getFileAPI(false).generateRepresentation(representation);

              case 5:
                updatedRepresentation = _context.sent;

                if (updatedRepresentation !== representation) {
                  _this.updateItemInCollection(_objectSpread({}, cloneDeep(item), {
                    representations: {
                      entries: [updatedRepresentation].concat(_toConsumableArray(entries.slice(1)))
                    }
                  }));
                }

              case 7:
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

    _defineProperty(_assertThisInitialized(_this), "updateItemInCollection", function (newItem) {
      var currentCollection = _this.state.currentCollection;
      var _currentCollection$it = currentCollection.items,
          items = _currentCollection$it === void 0 ? [] : _currentCollection$it;

      var newCollection = _objectSpread({}, currentCollection);

      newCollection.items = items.map(function (item) {
        return item.id === newItem.id ? newItem : item;
      });

      _this.setState({
        currentCollection: newCollection
      });
    });

    _defineProperty(_assertThisInitialized(_this), "select", function (item) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
      var _this$state6 = _this.state,
          selected = _this$state6.selected,
          currentCollection = _this$state6.currentCollection;
      var _currentCollection$it2 = currentCollection.items,
          items = _currentCollection$it2 === void 0 ? [] : _currentCollection$it2;
      var onSelect = _this.props.onSelect;

      if (item === selected) {
        callback(item);
        return;
      }

      var selectedItem = _objectSpread({}, item, {
        selected: true
      });

      _this.updateCollection(currentCollection, selectedItem, function () {
        onSelect(cloneDeep([selectedItem]));
        callback(selectedItem);
      });

      var focusedRow = items.findIndex(function (i) {
        return i.id === item.id;
      });

      _this.setState({
        focusedRow: focusedRow
      });
    });

    _defineProperty(_assertThisInitialized(_this), "pick", function (item) {
      var id = item.id,
          type = item.type;
      var _this$state7 = _this.state,
          picked = _this$state7.picked,
          currentCollection = _this$state7.currentCollection;
      var _currentCollection$it3 = currentCollection.items,
          items = _currentCollection$it3 === void 0 ? [] : _currentCollection$it3;
      var selectedKeys = Object.keys(picked);

      var cacheKey = _this.api.getAPI(type).getCacheKey(id);

      var existing = picked[cacheKey];

      if (existing) {
        item.picked = false;
        delete picked[cacheKey];
      } else {
        item.picked = true;
        picked[cacheKey] = item;
      }

      var pickedItem = _objectSpread({}, item);

      _this.updateCollection(currentCollection, pickedItem);

      _this.setState({
        picked: picked
      });
    });

    _defineProperty(_assertThisInitialized(_this), "customShare", function (item) {
      var onCustomShare = _this.props.onCustomShare;
      onCustomShare(item);
    });

    _defineProperty(_assertThisInitialized(_this), "moveTo", function (item) {
      var onMoveTo = _this.props.onMoveTo;
      onMoveTo(item);
    });

    _defineProperty(_assertThisInitialized(_this), "copy", function (item) {
      var onCopy = _this.props.onCopy;
      onCopy(item);
    });

    _defineProperty(_assertThisInitialized(_this), "setThumbnail", function (item) {
      var onSetThumbnail = _this.props.onSetThumbnail;
      onSetThumbnail(item);
    });

    _defineProperty(_assertThisInitialized(_this), "removeThumbnail", function (item) {
      var onRemoveThumbnail = _this.props.onRemoveThumbnail;
      onRemoveThumbnail(item);
    });

    _defineProperty(_assertThisInitialized(_this), "preview", function (item) {
      var type = item.type,
          url = item.url;

      if (type === TYPE_WEBLINK) {
        window.open(url);
        return;
      }

      _this.select(item, _this.previewCallback);
    });

    _defineProperty(_assertThisInitialized(_this), "previewCallback", function () {
      var selected = _this.state.selected;
      var canPreview = _this.props.canPreview;

      if (!selected || !canPreview) {
        return;
      }

      var permissions = selected.permissions;

      if (!permissions) {
        return;
      }

      var can_preview = permissions.can_preview;

      if (!can_preview) {
        return;
      }

      _this.setState({
        isPreviewModalOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "download", function (item) {
      _this.select(item, _this.downloadCallback);
    });

    _defineProperty(_assertThisInitialized(_this), "batchDownload", function () {
      var onBatchDownload = _this.props.onBatchDownload;
      var picked = _this.state.picked;
      var results = Object.keys(picked).map(function (key) {
        var clone = _objectSpread({}, picked[key]);

        delete clone.picked;
        return clone;
      });
      onBatchDownload(results);
    });

    _defineProperty(_assertThisInitialized(_this), "batchCancel", function () {
      var onBatchCancel = _this.props.onBatchCancel;
      var _this$state8 = _this.state,
          picked = _this$state8.picked,
          currentCollection = _this$state8.currentCollection;
      Object.keys(picked).forEach(function (key) {
        return delete picked[key].picked;
      });

      _this.setState({
        picked: {}
      }, function () {
        return onBatchCancel();
      }); // Remove picked properties from currentCollection so UI also reflects changed state


      Object.keys(currentCollection).forEach(function (key) {
        delete currentCollection[key].picked;
      });

      _this.updateCollection(currentCollection);
    });

    _defineProperty(_assertThisInitialized(_this), "downloadCallback", function () {
      var selected = _this.state.selected;
      var _this$props = _this.props,
          canDownload = _this$props.canDownload,
          onDownload = _this$props.onDownload;

      if (!selected || !canDownload) {
        return;
      }

      var id = selected.id,
          permissions = selected.permissions;

      if (!id || !permissions) {
        return;
      }

      var can_download = permissions.can_download;

      if (!can_download) {
        return;
      }

      var openUrl = function openUrl(url) {
        openUrlInsideIframe(url);
        onDownload(cloneDeep([selected]));
      };

      var type = selected.type;

      if (type === TYPE_FILE) {
        _this.api.getFileAPI().getDownloadUrl(id, selected, openUrl, noop);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "delete", function (item) {
      _this.select(item, _this.deleteCallback);
    });

    _defineProperty(_assertThisInitialized(_this), "deleteCallback", function () {
      var _this$state9 = _this.state,
          selected = _this$state9.selected,
          isDeleteModalOpen = _this$state9.isDeleteModalOpen;
      var _this$props2 = _this.props,
          canDelete = _this$props2.canDelete,
          onDelete = _this$props2.onDelete;

      if (!selected || !canDelete) {
        return;
      }

      var id = selected.id,
          permissions = selected.permissions,
          parent = selected.parent,
          type = selected.type;

      if (!id || !permissions || !parent || !type) {
        return;
      }

      var parentId = parent.id;
      var can_delete = permissions.can_delete;

      if (!can_delete || !parentId) {
        return;
      }

      if (!isDeleteModalOpen) {
        _this.setState({
          isDeleteModalOpen: true
        });

        return;
      }

      _this.setState({
        isLoading: true
      });

      _this.api.getAPI(type).deleteItem(selected, function () {
        onDelete(cloneDeep([selected]));

        _this.refreshCollection();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "rename", function (item) {
      _this.select(item, _this.renameCallback);
    });

    _defineProperty(_assertThisInitialized(_this), "renameCallback", function (nameWithoutExt, extension) {
      var _this$state10 = _this.state,
          selected = _this$state10.selected,
          isRenameModalOpen = _this$state10.isRenameModalOpen;
      var _this$props3 = _this.props,
          canRename = _this$props3.canRename,
          onRename = _this$props3.onRename;

      if (!selected || !canRename) {
        return;
      }

      var id = selected.id,
          permissions = selected.permissions,
          type = selected.type;

      if (!id || !permissions || !type) {
        return;
      }

      var can_rename = permissions.can_rename;

      if (!can_rename) {
        return;
      }

      if (!isRenameModalOpen || !nameWithoutExt) {
        _this.setState({
          isRenameModalOpen: true,
          errorCode: ''
        });

        return;
      }

      var name = "".concat(nameWithoutExt).concat(extension);

      if (!nameWithoutExt.trim()) {
        _this.setState({
          errorCode: ERROR_CODE_ITEM_NAME_INVALID,
          isLoading: false
        });

        return;
      }

      _this.setState({
        isLoading: true
      });

      _this.api.getAPI(type).rename(selected, name, function (updatedItem) {
        _this.setState({
          isRenameModalOpen: false
        });

        _this.refreshCollection();

        _this.select(updatedItem);

        onRename(cloneDeep(selected));
      }, function (_ref2) {
        var code = _ref2.code;

        _this.setState({
          errorCode: code,
          isLoading: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "createFolder", function () {
      _this.createFolderCallback();
    });

    _defineProperty(_assertThisInitialized(_this), "createFolderCallback", function (name) {
      var _this$state11 = _this.state,
          isCreateFolderModalOpen = _this$state11.isCreateFolderModalOpen,
          currentCollection = _this$state11.currentCollection;
      var _this$props4 = _this.props,
          canCreateNewFolder = _this$props4.canCreateNewFolder,
          onCreate = _this$props4.onCreate;

      if (!canCreateNewFolder) {
        return;
      }

      var id = currentCollection.id,
          permissions = currentCollection.permissions;

      if (!id || !permissions) {
        return;
      }

      var can_upload = permissions.can_upload;

      if (!can_upload) {
        return;
      }

      if (!isCreateFolderModalOpen || !name) {
        _this.setState({
          isCreateFolderModalOpen: true,
          errorCode: ''
        });

        return;
      }

      if (!name) {
        _this.setState({
          errorCode: ERROR_CODE_ITEM_NAME_INVALID,
          isLoading: false
        });

        return;
      }

      if (name.length > 255) {
        _this.setState({
          errorCode: ERROR_CODE_ITEM_NAME_TOO_LONG,
          isLoading: false
        });

        return;
      }

      _this.setState({
        isLoading: true
      });

      _this.api.getFolderAPI().create(id, name, function (item) {
        _this.refreshCollection();

        _this.select(item);

        onCreate(cloneDeep(item));
      }, function (_ref3) {
        var code = _ref3.code;

        _this.setState({
          errorCode: code,
          isLoading: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "share", function (item) {
      _this.select(item, _this.shareCallback);
    });

    _defineProperty(_assertThisInitialized(_this), "fetchSharedLinkInfo", function (item) {
      var id = item.id,
          type = item.type;

      switch (type) {
        case TYPE_FOLDER:
          _this.api.getFolderAPI().getFolderFields(id, _this.handleSharedLinkSuccess, noop, {
            fields: FILE_SHARED_LINK_FIELDS_TO_FETCH
          });

          break;

        case TYPE_FILE:
          _this.api.getFileAPI().getFile(id, _this.handleSharedLinkSuccess, noop, {
            fields: FILE_SHARED_LINK_FIELDS_TO_FETCH
          });

          break;

        case TYPE_WEBLINK:
          _this.api.getWebLinkAPI().getWeblink(id, _this.handleSharedLinkSuccess, noop, {
            fields: FILE_SHARED_LINK_FIELDS_TO_FETCH
          });

          break;

        default:
          throw new Error('Unknown Type');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSharedLinkSuccess", function (newItem) {
      var currentCollection = _this.state.currentCollection; // Update item in collection

      _this.updateCollection(currentCollection, newItem, function () {
        return _this.setState({
          isShareModalOpen: true
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "shareCallback", function () {
      var selected = _this.state.selected;
      var canShare = _this.props.canShare;

      if (!selected || !canShare) {
        return;
      }

      var permissions = selected.permissions;

      if (!permissions) {
        return;
      }

      var can_share = permissions.can_share;

      if (!can_share) {
        return;
      }

      _this.fetchSharedLinkInfo(selected);
    });

    _defineProperty(_assertThisInitialized(_this), "tableRef", function (table) {
      _this.table = table;
    });

    _defineProperty(_assertThisInitialized(_this), "closeModals", function () {
      var focusedRow = _this.state.focusedRow;

      _this.setState({
        isLoading: false,
        isDeleteModalOpen: false,
        isRenameModalOpen: false,
        isCreateFolderModalOpen: false,
        isShareModalOpen: false,
        isUploadModalOpen: false,
        isPreviewModalOpen: false
      });

      var _this$state12 = _this.state,
          selected = _this$state12.selected,
          _this$state12$current = _this$state12.currentCollection.items,
          items = _this$state12$current === void 0 ? [] : _this$state12$current;

      if (selected && items.length > 0) {
        focus(_this.rootElement, ".bce-item-row-".concat(focusedRow));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      if (isInputElement(event.target)) {
        return;
      }

      var rootFolderId = _this.props.rootFolderId;
      var key = event.key.toLowerCase();

      switch (key) {
        case '/':
          focus(_this.rootElement, '.be-search input[type="search"]', false);
          event.preventDefault();
          break;

        case 'arrowdown':
          focus(_this.rootElement, '.bce-item-row', false);

          _this.setState({
            focusedRow: 0
          });

          event.preventDefault();
          break;

        case 'g':
          break;

        case 'b':
          if (_this.globalModifier) {
            focus(_this.rootElement, '.be-breadcrumb button', false);
            event.preventDefault();
          }

          break;

        case 'f':
          if (_this.globalModifier) {
            _this.fetchFolder(rootFolderId);

            event.preventDefault();
          }

          break;

        case 'u':
          if (_this.globalModifier) {
            _this.upload();

            event.preventDefault();
          }

          break;

        case 'r':
          if (_this.globalModifier) {
            _this.showRecents();

            event.preventDefault();
          }

          break;

        case 'n':
          if (_this.globalModifier) {
            _this.createFolder();

            event.preventDefault();
          }

          break;

        default:
          _this.globalModifier = false;
          return;
      }

      _this.globalModifier = key === 'g';
    });

    _defineProperty(_assertThisInitialized(_this), "paginate", function (newOffset) {
      _this.setState({
        currentOffset: newOffset
      }, _this.refreshCollection);
    });

    _defineProperty(_assertThisInitialized(_this), "markerBasedPaginate", function (newOffset) {
      var currentPageNumber = _this.state.currentPageNumber;

      _this.setState({
        currentPageNumber: currentPageNumber + newOffset // newOffset could be negative

      }, _this.refreshCollection);
    });

    _defineProperty(_assertThisInitialized(_this), "getViewMode", function () {
      return _this.store.getItem(localStoreViewMode) || VIEW_MODE_LIST;
    });

    _defineProperty(_assertThisInitialized(_this), "getMaxNumberOfGridViewColumnsForWidth", function () {
      var _this$props5 = _this.props,
          isSmall = _this$props5.isSmall,
          isMedium = _this$props5.isMedium,
          isLarge = _this$props5.isLarge;
      var maxWidthColumns = GRID_VIEW_MAX_COLUMNS;

      if (isSmall) {
        maxWidthColumns = 1;
      } else if (isMedium) {
        maxWidthColumns = 3;
      } else if (isLarge) {
        maxWidthColumns = 5;
      }

      return maxWidthColumns;
    });

    _defineProperty(_assertThisInitialized(_this), "changeViewMode", function (viewMode) {
      _this.store.setItem(localStoreViewMode, viewMode);

      _this.forceUpdate();
    });

    _defineProperty(_assertThisInitialized(_this), "onGridViewSliderChange", function (sliderValue) {
      // need to do this calculation since lowest value of grid view slider
      // means highest number of columns
      var gridColumnCount = GRID_VIEW_MAX_COLUMNS - sliderValue + 1;

      _this.setState({
        gridColumnCount: gridColumnCount
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateMetadata", function (item, field, oldValue, newValue) {
      _this.metadataQueryAPIHelper.updateMetadata(item, field, oldValue, newValue, function () {
        _this.updateMetadataSuccessCallback(item, field, newValue);
      }, _this.errorCallback);
    });

    _defineProperty(_assertThisInitialized(_this), "updateMetadataSuccessCallback", function (item, field, newValue) {
      var currentCollection = _this.state.currentCollection;
      var _currentCollection$it4 = currentCollection.items,
          items = _currentCollection$it4 === void 0 ? [] : _currentCollection$it4,
          nextMarker = currentCollection.nextMarker;
      var updatedItems = items.map(function (collectionItem) {
        var clonedItem = cloneDeep(collectionItem);

        if (item.id === clonedItem.id) {
          var fields = getProp(clonedItem, 'metadata.enterprise.fields', []);
          fields.forEach(function (itemField) {
            if (itemField.key.split('.').pop() === field) {
              itemField.value = newValue; // set updated metadata value to correct item in currentCollection
            }
          });
        }

        return clonedItem;
      });

      _this.setState({
        currentCollection: {
          items: updatedItems,
          nextMarker: nextMarker,
          percentLoaded: 100
        }
      });
    });

    var apiHost = props.apiHost,
        initialPage = props.initialPage,
        initialPageSize = props.initialPageSize,
        language = props.language,
        requestInterceptor = props.requestInterceptor,
        responseInterceptor = props.responseInterceptor,
        _rootFolderId = props.rootFolderId,
        sharedLink = props.sharedLink,
        sharedLinkPassword = props.sharedLinkPassword,
        _sortBy = props.sortBy,
        _sortDirection = props.sortDirection,
        token = props.token,
        uploadHost = props.uploadHost;
    _this.api = new API({
      apiHost: apiHost,
      clientName: CLIENT_NAME_CONTENT_EXPLORER,
      id: "".concat(TYPED_ID_FOLDER_PREFIX).concat(_rootFolderId),
      language: language,
      requestInterceptor: requestInterceptor,
      responseInterceptor: responseInterceptor,
      sharedLink: sharedLink,
      sharedLinkPassword: sharedLinkPassword,
      token: token,
      uploadHost: uploadHost
    });
    _this.id = uniqueid('bce_');
    _this.state = {
      currentCollection: {},
      currentOffset: initialPageSize * (initialPage - 1),
      currentPageSize: initialPageSize,
      currentPageNumber: 0,
      errorCode: '',
      focusedRow: 0,
      gridColumnCount: 4,
      isCreateFolderModalOpen: false,
      isDeleteModalOpen: false,
      isLoading: false,
      isPreviewModalOpen: false,
      isRenameModalOpen: false,
      isShareModalOpen: false,
      isUploadModalOpen: false,
      picked: {},
      markers: [],
      rootName: '',
      searchQuery: '',
      sortBy: _sortBy,
      sortDirection: _sortDirection,
      view: VIEW_FOLDER
    };
    return _this;
  }
  /**
   * Destroys api instances
   *
   * @private
   * @return {void}
   */


  _createClass(ContentExplorer, [{
    key: "clearCache",
    value: function clearCache() {
      this.api.destroy(true);
    }
    /**
     * Cleanup
     *
     * @private
     * @inheritdoc
     * @return {void}
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearCache();
    }
    /**
     * Fetches the root folder on load
     *
     * @private
     * @inheritdoc
     * @return {void}
     */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props6 = this.props,
          currentFolderId = _this$props6.currentFolderId,
          defaultView = _this$props6.defaultView;
      this.rootElement = document.getElementById(this.id);
      this.appElement = this.rootElement.firstElementChild;

      switch (defaultView) {
        case DEFAULT_VIEW_RECENTS:
          this.showRecents();
          break;

        case DEFAULT_VIEW_METADATA:
          this.showMetadataQueryResults();
          break;

        default:
          this.fetchFolder(currentFolderId);
      }
    }
    /**
     * Fetches the current folder if different
     * from what was already fetched before.
     *
     * @private
     * @inheritdoc
     * @return {void}
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref4, prevState) {
      var prevFolderId = _ref4.currentFolderId;
      var currentFolderId = this.props.currentFolderId;
      var id = prevState.currentCollection.id;

      if (prevFolderId === currentFolderId) {
        return;
      }

      if (typeof currentFolderId === 'string' && id !== currentFolderId) {
        this.fetchFolder(currentFolderId);
      }
    }
    /**
     * Metadata queries success callback
     *
     * @private
     * @param {Object} metadataQueryCollection - Metadata query response collection
     * @return {void}
     */

  }, {
    key: "showMetadataQueryResults",

    /**
     * Queries metadata_queries/execute API and fetches the result
     *
     * @private
     * @return {void}
     */
    value: function showMetadataQueryResults() {
      var _this$props$metadataQ = this.props.metadataQuery,
          metadataQuery = _this$props$metadataQ === void 0 ? {} : _this$props$metadataQ;
      var _this$state13 = this.state,
          currentPageNumber = _this$state13.currentPageNumber,
          markers = _this$state13.markers;
      var metadataQueryClone = cloneDeep(metadataQuery);

      if (currentPageNumber === 0) {
        // Preserve the marker as part of the original query
        markers[currentPageNumber] = metadataQueryClone.marker;
      }

      if (typeof markers[currentPageNumber] === 'string') {
        // Set marker to the query to get next set of results
        metadataQueryClone.marker = markers[currentPageNumber];
      }

      if (typeof metadataQueryClone.limit !== 'number') {
        // Set limit to the query for pagination support
        metadataQueryClone.limit = DEFAULT_PAGE_SIZE;
      } // Reset search state, the view and show busy indicator


      this.setState({
        searchQuery: '',
        currentCollection: this.currentUnloadedCollection(),
        view: VIEW_METADATA
      });
      this.metadataQueryAPIHelper = new MetadataQueryAPIHelper(this.api);
      this.metadataQueryAPIHelper.fetchMetadataQueryResults(metadataQueryClone, this.showMetadataQueryResultsSuccessCallback, this.errorCallback);
    }
    /**
     * Resets the collection so that the loading bar starts showing
     *
     * @private
     * @return {Collection}
     */

  }, {
    key: "currentUnloadedCollection",
    value: function currentUnloadedCollection() {
      var currentCollection = this.state.currentCollection;
      return _extends(currentCollection, {
        percentLoaded: 0
      });
    }
    /**
     * Network error callback
     *
     * @private
     * @param {Error} error error object
     * @return {void}
     */

  }, {
    key: "finishNavigation",

    /**
     * Focuses the grid and fires navigate event
     *
     * @private
     * @return {void}
     */
    value: function finishNavigation() {
      var autoFocus = this.props.autoFocus;
      var percentLoaded = this.state.currentCollection.percentLoaded; // If loading for the very first time, only allow focus if autoFocus is true

      if (this.firstLoad && !autoFocus) {
        this.firstLoad = false;
        return;
      } // Don't focus the grid until its loaded and user is not already on an interactable element


      if (percentLoaded === 100 && !isFocusableElement(document.activeElement)) {
        focus(this.rootElement, '.bce-item-row');
        this.setState({
          focusedRow: 0
        });
      }

      this.firstLoad = false;
    }
    /**
     * Refreshing the item collection depending upon the view.
     * Navigation event is prevented.
     *
     * @private
     * @return {void}
     */

  }, {
    key: "fetchFolderSuccessCallback",

    /**
     * Folder fetch success callback
     *
     * @private
     * @param {Object} collection - item collection object
     * @param {Boolean|void} triggerNavigationEvent - To trigger navigate event and focus grid
     * @return {void}
     */
    value: function fetchFolderSuccessCallback(collection, triggerNavigationEvent) {
      var _this2 = this;

      var _this$props7 = this.props,
          onNavigate = _this$props7.onNavigate,
          rootFolderId = _this$props7.rootFolderId;
      var boxItem = collection.boxItem,
          id = collection.id,
          name = collection.name;
      var _this$state14 = this.state,
          selected = _this$state14.selected,
          picked = _this$state14.picked;
      var rootName = id === rootFolderId ? name : ''; // Close any open modals

      this.closeModals();
      this.updateCollection(collection, selected, function () {
        if (triggerNavigationEvent) {
          // Fire folder navigation event
          _this2.setState({
            rootName: rootName
          }, _this2.finishNavigation);

          if (boxItem) {
            onNavigate(cloneDeep(boxItem));
          }
        } else {
          _this2.setState({
            rootName: rootName
          });
        }
      });
    }
    /**
     * Fetches a folder, defaults to fetching root folder
     *
     * @private
     * @param {string|void} [id] folder id
     * @param {Boolean|void} [triggerNavigationEvent] To trigger navigate event
     * @return {void}
     */

  }, {
    key: "recentsSuccessCallback",

    /**
     * Recents fetch success callback
     *
     * @private
     * @param {Object} collection item collection object
     * @param {Boolean} triggerNavigationEvent - To trigger navigate event
     * @return {void}
     */
    value: function recentsSuccessCallback(collection, triggerNavigationEvent) {
      if (triggerNavigationEvent) {
        this.updateCollection(collection, undefined, this.finishNavigation);
      } else {
        this.updateCollection(collection);
      }
    }
    /**
     * Shows recents.
     *
     * @private
     * @param {Boolean|void} [triggerNavigationEvent] To trigger navigate event
     * @return {void}
     */

  }, {
    key: "showRecents",
    value: function showRecents() {
      var _this3 = this;

      var triggerNavigationEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var rootFolderId = this.props.rootFolderId; // Reset search state, the view and show busy indicator

      this.setState({
        searchQuery: '',
        view: VIEW_RECENTS,
        currentCollection: this.currentUnloadedCollection(),
        currentOffset: 0
      }); // Fetch the folder using folder API

      this.api.getRecentsAPI().recents(rootFolderId, function (collection) {
        _this3.recentsSuccessCallback(collection, triggerNavigationEvent);
      }, this.errorCallback, {
        fields: CONTENT_EXPLORER_FOLDER_FIELDS_TO_FETCH,
        forceFetch: true
      });
    }
    /**
     * Uploads
     *
     * @private
     * @param {File} file dom file object
     * @return {void}
     */

  }, {
    key: "updateCollection",

    /**
     * Sets state with currentCollection updated to have items.selected properties
     * set according to the given selected param. Also updates the selected item in the
     * currentcollection. selectedItem will be set to the selected state
     * item if it is in currentCollection, otherwise it will be set to undefined.
     *
     * @private
     * @param {Collection} collection - collection that needs to be updated
     * @param {Object} [selectedItem] - The item that should be selected in that collection (if present)
     * @param {Function} [callback] - callback function that should be called after setState occurs
     * @return {void}
     */
    value: function () {
      var _updateCollection = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(collection, selectedItem) {
        var _this4 = this;

        var callback,
            _collection$items,
            items,
            fileAPI,
            newCollection,
            selectedId,
            newSelectedItem,
            itemThumbnails,
            picked,
            _args2 = arguments;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                callback = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : noop;
                _collection$items = collection.items, items = _collection$items === void 0 ? [] : _collection$items;
                fileAPI = this.api.getFileAPI(false);
                newCollection = _objectSpread({}, collection);
                selectedId = selectedItem ? selectedItem.id : null;
                _context2.next = 7;
                return Promise.all(items.map(function (item) {
                  return item.type === TYPE_FILE ? fileAPI.getThumbnailUrl(item) : null;
                }));

              case 7:
                itemThumbnails = _context2.sent;
                picked = this.state.picked;
                newCollection.items = items.map(function (item, index) {
                  var isSelected = item.id === selectedId;
                  var currentItem = isSelected ? selectedItem : item;
                  var thumbnailUrl = itemThumbnails[index];
                  var key = "".concat(item.type, "_").concat(item.id);
                  var isPicked = false;

                  if (key in picked && picked[key].picked) {
                    isPicked = true;
                  }

                  var newItem = _objectSpread({}, currentItem, {
                    selected: isSelected,
                    thumbnailUrl: thumbnailUrl,
                    picked: isPicked,
                    // Force metadata always to be updated. This causes thumbnails
                    // to reloaded.
                    metadata: item.metadata
                  });

                  if (item.type === TYPE_FILE && thumbnailUrl && !isThumbnailReady(newItem)) {
                    _this4.attemptThumbnailGeneration(newItem);
                  } // Only if selectedItem is in the current collection do we want to set selected state


                  if (isSelected) {
                    newSelectedItem = newItem;
                  }

                  return newItem;
                });
                this.setState({
                  currentCollection: newCollection,
                  selected: newSelectedItem
                }, callback);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function updateCollection(_x2, _x3) {
        return _updateCollection.apply(this, arguments);
      }

      return updateCollection;
    }()
    /**
     * Attempts to generate a thumbnail for the given item and assigns the
     * item its thumbnail url if successful
     *
     * @param {BoxItem} item - item to generate thumbnail for
     * @return {Promise<void>}
     */

  }, {
    key: "render",

    /**
     * Renders the file picker
     *
     * @private
     * @inheritdoc
     * @return {Element}
     */
    value: function render() {
      var _this$props8 = this.props,
          apiHost = _this$props8.apiHost,
          appHost = _this$props8.appHost,
          canCreateNewFolder = _this$props8.canCreateNewFolder,
          canDelete = _this$props8.canDelete,
          canDownload = _this$props8.canDownload,
          canPreview = _this$props8.canPreview,
          canRename = _this$props8.canRename,
          canSetShareAccess = _this$props8.canSetShareAccess,
          canShare = _this$props8.canShare,
          canUpload = _this$props8.canUpload,
          className = _this$props8.className,
          contentPreviewProps = _this$props8.contentPreviewProps,
          contentUploaderProps = _this$props8.contentUploaderProps,
          defaultView = _this$props8.defaultView,
          isMedium = _this$props8.isMedium,
          isSmall = _this$props8.isSmall,
          isTouch = _this$props8.isTouch,
          language = _this$props8.language,
          logoUrl = _this$props8.logoUrl,
          measureRef = _this$props8.measureRef,
          messages = _this$props8.messages,
          fieldsToShow = _this$props8.fieldsToShow,
          onDownload = _this$props8.onDownload,
          onPreview = _this$props8.onPreview,
          onUpload = _this$props8.onUpload,
          requestInterceptor = _this$props8.requestInterceptor,
          responseInterceptor = _this$props8.responseInterceptor,
          rootFolderId = _this$props8.rootFolderId,
          sharedLink = _this$props8.sharedLink,
          sharedLinkPassword = _this$props8.sharedLinkPassword,
          staticHost = _this$props8.staticHost,
          staticPath = _this$props8.staticPath,
          previewLibraryVersion = _this$props8.previewLibraryVersion,
          token = _this$props8.token,
          uploadHost = _this$props8.uploadHost;
      var _this$state15 = this.state,
          currentCollection = _this$state15.currentCollection,
          currentPageNumber = _this$state15.currentPageNumber,
          currentPageSize = _this$state15.currentPageSize,
          errorCode = _this$state15.errorCode,
          focusedRow = _this$state15.focusedRow,
          gridColumnCount = _this$state15.gridColumnCount,
          isCreateFolderModalOpen = _this$state15.isCreateFolderModalOpen,
          isDeleteModalOpen = _this$state15.isDeleteModalOpen,
          isLoading = _this$state15.isLoading,
          isPreviewModalOpen = _this$state15.isPreviewModalOpen,
          isRenameModalOpen = _this$state15.isRenameModalOpen,
          isShareModalOpen = _this$state15.isShareModalOpen,
          isUploadModalOpen = _this$state15.isUploadModalOpen,
          markers = _this$state15.markers,
          rootName = _this$state15.rootName,
          searchQuery = _this$state15.searchQuery,
          selected = _this$state15.selected,
          picked = _this$state15.picked,
          view = _this$state15.view;
      var id = currentCollection.id,
          offset = currentCollection.offset,
          permissions = currentCollection.permissions,
          totalCount = currentCollection.totalCount;

      var _ref5 = permissions || {},
          can_upload = _ref5.can_upload;

      var styleClassName = classNames('be bce', className);
      var allowUpload = canUpload && !!can_upload;
      var allowCreate = canCreateNewFolder && !!can_upload;
      var isDefaultViewMetadata = defaultView === DEFAULT_VIEW_METADATA;
      var isErrorView = view === VIEW_ERROR;
      var pickedCount = Object.keys(picked).length;
      var viewMode = this.getViewMode();
      var maxGridColumnCount = this.getMaxNumberOfGridViewColumnsForWidth();
      var hasNextMarker = !!markers[currentPageNumber + 1];
      var hasPreviousMarker = currentPageNumber === 1 || !!markers[currentPageNumber - 1];
      /* eslint-disable jsx-a11y/no-static-element-interactions */

      /* eslint-disable jsx-a11y/no-noninteractive-tabindex */

      return React.createElement(Internationalize, {
        language: language,
        messages: messages
      }, React.createElement("div", {
        id: this.id,
        className: styleClassName,
        ref: measureRef,
        "data-testid": "content-explorer"
      }, React.createElement("div", {
        className: "be-app-element",
        onKeyDown: this.onKeyDown,
        tabIndex: 0
      }, !isDefaultViewMetadata && React.createElement(React.Fragment, null, React.createElement(Header, {
        view: view,
        isSmall: isSmall,
        searchQuery: searchQuery,
        logoUrl: logoUrl,
        onSearch: this.search
      }), React.createElement(SubHeader, {
        view: view,
        viewMode: viewMode,
        rootId: rootFolderId,
        isSmall: isSmall,
        rootName: rootName,
        currentCollection: currentCollection,
        canUpload: allowUpload,
        canCreateNewFolder: allowCreate,
        gridColumnCount: gridColumnCount,
        gridMaxColumns: GRID_VIEW_MAX_COLUMNS,
        gridMinColumns: GRID_VIEW_MIN_COLUMNS,
        maxGridColumnCountForWidth: maxGridColumnCount,
        onUpload: this.upload,
        onCreate: this.createFolder,
        onGridViewSliderChange: this.onGridViewSliderChange,
        onItemClick: this.fetchFolder,
        onSortChange: this.sort,
        onViewModeChange: this.changeViewMode
      })), React.createElement(Content, {
        canDelete: canDelete,
        canDownload: canDownload,
        canPreview: canPreview,
        canRename: canRename,
        canSetShareAccess: canSetShareAccess,
        canShare: canShare,
        currentCollection: currentCollection,
        focusedRow: focusedRow,
        gridColumnCount: Math.min(gridColumnCount, maxGridColumnCount),
        isMedium: isMedium,
        isSmall: isSmall,
        isTouch: isTouch,
        fieldsToShow: fieldsToShow,
        onItemClick: this.onItemClick,
        onItemCustomShare: this.customShare,
        onItemDelete: this.delete,
        onItemDownload: this.download,
        onItemMoveTo: this.moveTo,
        onItemCopy: this.copy,
        onItemPick: this.pick,
        onItemPreview: this.preview,
        onItemRename: this.rename,
        onItemSelect: this.select,
        onItemShare: this.share,
        onMetadataUpdate: this.updateMetadata,
        onItemSetThumbnail: this.setThumbnail,
        onItemRemoveThumbnail: this.removeThumbnail,
        onSortChange: this.sort,
        rootElement: this.rootElement,
        rootId: rootFolderId,
        tableRef: this.tableRef,
        view: view,
        viewMode: viewMode
      }), !isErrorView && React.createElement(Footer, {
        pickedCount: pickedCount,
        onBatchDownload: this.batchDownload,
        onBatchCancel: this.batchCancel
      }, React.createElement(Pagination, {
        hasNextMarker: hasNextMarker,
        hasPrevMarker: hasPreviousMarker,
        offset: offset,
        onOffsetChange: this.paginate,
        pageSize: currentPageSize,
        totalCount: totalCount,
        onMarkerBasedPageChange: this.markerBasedPaginate
      }))), allowUpload && !!this.appElement ? React.createElement(UploadDialog, {
        isOpen: isUploadModalOpen,
        currentFolderId: id,
        token: token,
        sharedLink: sharedLink,
        sharedLinkPassword: sharedLinkPassword,
        apiHost: apiHost,
        uploadHost: uploadHost,
        onClose: this.uploadSuccessHandler,
        parentElement: this.rootElement,
        appElement: this.appElement,
        onUpload: onUpload,
        contentUploaderProps: contentUploaderProps,
        requestInterceptor: requestInterceptor,
        responseInterceptor: responseInterceptor
      }) : null, allowCreate && !!this.appElement ? React.createElement(CreateFolderDialog, {
        isOpen: isCreateFolderModalOpen,
        onCreate: this.createFolderCallback,
        onCancel: this.closeModals,
        isLoading: isLoading,
        errorCode: errorCode,
        parentElement: this.rootElement,
        appElement: this.appElement
      }) : null, canDelete && selected && !!this.appElement ? React.createElement(DeleteConfirmationDialog, {
        isOpen: isDeleteModalOpen,
        onDelete: this.deleteCallback,
        onCancel: this.closeModals,
        item: selected,
        isLoading: isLoading,
        parentElement: this.rootElement,
        appElement: this.appElement
      }) : null, canRename && selected && !!this.appElement ? React.createElement(RenameDialog, {
        isOpen: isRenameModalOpen,
        onRename: this.renameCallback,
        onCancel: this.closeModals,
        item: selected,
        isLoading: isLoading,
        errorCode: errorCode,
        parentElement: this.rootElement,
        appElement: this.appElement
      }) : null, canShare && selected && !!this.appElement ? React.createElement(ShareDialog, {
        isOpen: isShareModalOpen,
        canSetShareAccess: canSetShareAccess,
        onShareAccessChange: this.changeShareAccess,
        onCancel: this.refreshCollection,
        item: selected,
        isLoading: isLoading,
        parentElement: this.rootElement,
        appElement: this.appElement
      }) : null, canPreview && selected && !!this.appElement ? React.createElement(PreviewDialog, {
        isOpen: isPreviewModalOpen,
        isTouch: isTouch,
        onCancel: this.closeModals,
        item: selected,
        currentCollection: currentCollection,
        token: token,
        parentElement: this.rootElement,
        appElement: this.appElement,
        onPreview: onPreview,
        onDownload: onDownload,
        canDownload: canDownload,
        cache: this.api.getCache(),
        apiHost: apiHost,
        appHost: appHost,
        staticHost: staticHost,
        staticPath: staticPath,
        previewLibraryVersion: previewLibraryVersion,
        sharedLink: sharedLink,
        sharedLinkPassword: sharedLinkPassword,
        contentPreviewProps: contentPreviewProps,
        requestInterceptor: requestInterceptor,
        responseInterceptor: responseInterceptor
      }) : null));
      /* eslint-enable jsx-a11y/no-static-element-interactions */

      /* eslint-enable jsx-a11y/no-noninteractive-tabindex */
    }
  }]);

  return ContentExplorer;
}(Component);

_defineProperty(ContentExplorer, "defaultProps", {
  rootFolderId: DEFAULT_ROOT,
  sortBy: FIELD_NAME,
  sortDirection: SORT_ASC,
  canDownload: true,
  canDelete: true,
  canUpload: true,
  canRename: true,
  canShare: true,
  canPreview: true,
  canSetShareAccess: true,
  canCreateNewFolder: true,
  autoFocus: false,
  apiHost: DEFAULT_HOSTNAME_API,
  appHost: DEFAULT_HOSTNAME_APP,
  staticHost: DEFAULT_HOSTNAME_STATIC,
  uploadHost: DEFAULT_HOSTNAME_UPLOAD,
  className: '',
  onBatchCancel: noop,
  onBatchDownload: noop,
  onCustomShare: noop,
  onDelete: noop,
  onDownload: noop,
  onPreview: noop,
  onRename: noop,
  onCreate: noop,
  onMoveTo: noop,
  onCopy: noop,
  onSelect: noop,
  onSetThumbnail: noop,
  onRemoveThumbnail: noop,
  onUpload: noop,
  onNavigate: noop,
  defaultView: DEFAULT_VIEW_FILES,
  initialPage: DEFAULT_PAGE_NUMBER,
  initialPageSize: DEFAULT_PAGE_SIZE,
  contentPreviewProps: {
    contentSidebarProps: {}
  },
  contentUploaderProps: {}
});

export { ContentExplorer as ContentExplorerComponent };
export default flow([makeResponsive, withFeatureConsumer, withFeatureProvider])(ContentExplorer);
//# sourceMappingURL=ContentExplorer.js.map