function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
 * @file Content Picker Component
 * @author Box
 */
import 'regenerator-runtime/runtime';
import React, { Component } from 'react';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import getProp from 'lodash/get';
import uniqueid from 'lodash/uniqueId';
import noop from 'lodash/noop';
import Header from '../common/header';
import SubHeader from '../common/sub-header/SubHeader';
import UploadDialog from '../common/upload-dialog';
import CreateFolderDialog from '../common/create-folder-dialog';
import Internationalize from '../common/Internationalize';
import makeResponsive from '../common/makeResponsive';
import OffsetBasedPagination from '../../features/pagination/OffsetBasedPagination';
import { isFocusableElement, isInputElement, focus } from '../../utils/dom';
import API from '../../api';
import Content from './Content';
import Footer from './Footer';
import { CLIENT_NAME_CONTENT_PICKER, DEFAULT_HOSTNAME_API, DEFAULT_HOSTNAME_UPLOAD, DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_SIZE, DEFAULT_ROOT, DEFAULT_SEARCH_DEBOUNCE, DEFAULT_VIEW_FILES, DEFAULT_VIEW_RECENTS, ERROR_CODE_ITEM_NAME_IN_USE, ERROR_CODE_ITEM_NAME_INVALID, ERROR_CODE_ITEM_NAME_TOO_LONG, FIELD_NAME, FIELD_SHARED_LINK, SORT_ASC, TYPE_FILE, TYPE_FOLDER, TYPE_WEBLINK, TYPED_ID_FOLDER_PREFIX, VIEW_ERROR, VIEW_FOLDER, VIEW_RECENTS, VIEW_SEARCH, VIEW_SELECTED } from '../../constants';
import { FILE_SHARED_LINK_FIELDS_TO_FETCH } from '../../utils/fields';
import '../common/fonts.scss';
import '../common/base.scss';
import '../common/modal.scss';
import './ContentPicker.scss';
var defaultType = "".concat(TYPE_FILE, ",").concat(TYPE_WEBLINK);

var ContentPicker =
/*#__PURE__*/
function (_Component) {
  _inherits(ContentPicker, _Component);

  // Keeps track of very 1st load

  /**
   * [constructor]
   *
   * @private
   * @return {ContentPicker}
   */
  function ContentPicker(props) {
    var _this;

    _classCallCheck(this, ContentPicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContentPicker).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "firstLoad", true);

    _defineProperty(_assertThisInitialized(_this), "getSelectedItems", function () {
      var selected = _this.state.selected;
      return Object.keys(selected).map(function (key) {
        var clone = _objectSpread({}, selected[key]);

        delete clone.selected;
        return clone;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "choose", function () {
      var onChoose = _this.props.onChoose;

      var results = _this.getSelectedItems();

      onChoose(results);
    });

    _defineProperty(_assertThisInitialized(_this), "deleteSelectedKeys", function () {
      var selected = _this.state.selected; // Clear out the selected field

      Object.keys(selected).forEach(function (key) {
        return delete selected[key].selected;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "cancel", function () {
      var onCancel = _this.props.onCancel;

      _this.deleteSelectedKeys(); // Reset the selected state


      _this.setState({
        selected: {}
      }, function () {
        return onCancel();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "refreshCollection", function () {
      var _this$state = _this.state,
          id = _this$state.currentCollection.id,
          view = _this$state.view,
          searchQuery = _this$state.searchQuery;

      if (view === VIEW_FOLDER && id) {
        _this.fetchFolder(id, false);
      } else if (view === VIEW_RECENTS) {
        _this.showRecents(false);
      } else if (view === VIEW_SEARCH && searchQuery) {
        _this.search(searchQuery);
      } else if (view === VIEW_SELECTED) {
        _this.showSelected();
      } else {
        throw new Error('Cannot refresh incompatible view!');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "errorCallback", function (error, code) {
      _this.setState({
        view: VIEW_ERROR
      });
      /* eslint-disable no-console */


      console.error(error, code);
      /* eslint-enable no-console */
    });

    _defineProperty(_assertThisInitialized(_this), "onItemClick", function (item) {
      // If the id was passed in, just use that
      if (typeof item === 'string') {
        _this.fetchFolder(item);

        return;
      } // If the item was passed in


      var id = item.id,
          type = item.type;

      if (type === TYPE_FOLDER) {
        _this.fetchFolder(id);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "fetchFolder", function (id) {
      var triggerNavigationEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var rootFolderId = _this.props.rootFolderId;
      var _this$state2 = _this.state,
          currentId = _this$state2.currentCollection.id,
          currentOffset = _this$state2.currentOffset,
          limit = _this$state2.currentPageSize,
          _this$state2$searchQu = _this$state2.searchQuery,
          searchQuery = _this$state2$searchQu === void 0 ? '' : _this$state2$searchQu,
          sortBy = _this$state2.sortBy,
          sortDirection = _this$state2.sortDirection;
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
      }); // Fetch the folder using folder API


      _this.api.getFolderAPI().getFolder(folderId, limit, offset, sortBy, sortDirection, function (collection) {
        _this.fetchFolderSuccessCallback(collection, triggerNavigationEvent);
      }, _this.errorCallback, {
        forceFetch: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "showSelected", function () {
      var _this$state3 = _this.state,
          selected = _this$state3.selected,
          sortBy = _this$state3.sortBy,
          sortDirection = _this$state3.sortDirection;

      _this.setState({
        searchQuery: '',
        view: VIEW_SELECTED,
        currentCollection: {
          sortBy: sortBy,
          sortDirection: sortDirection,
          percentLoaded: 100,
          items: Object.keys(selected).map(function (key) {
            return _this.api.getCache().get(key);
          })
        }
      }, _this.finishNavigation);
    });

    _defineProperty(_assertThisInitialized(_this), "searchSuccessCallback", function (collection) {
      var currentCollection = _this.state.currentCollection;

      _this.setState({
        currentCollection: _extends(currentCollection, collection)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "debouncedSearch", debounce(function (id, query) {
      var _this$state4 = _this.state,
          currentOffset = _this$state4.currentOffset,
          currentPageSize = _this$state4.currentPageSize;

      _this.api.getSearchAPI().search(id, query, currentPageSize, currentOffset, _this.searchSuccessCallback, _this.errorCallback, {
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
        searchQuery: query,
        view: VIEW_SEARCH,
        currentCollection: _this.currentUnloadedCollection(),
        currentOffset: trimmedQuery === searchQuery ? currentOffset : 0
      });

      _this.debouncedSearch(folderId, query);
    });

    _defineProperty(_assertThisInitialized(_this), "upload", function () {
      var _this$state$currentCo = _this.state.currentCollection,
          id = _this$state$currentCo.id,
          permissions = _this$state$currentCo.permissions;
      var canUpload = _this.props.canUpload;

      if (!id || !permissions) {
        return;
      }

      var canUploadPermission = permissions.can_upload;

      if (!canUpload || !canUploadPermission) {
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

    _defineProperty(_assertThisInitialized(_this), "createFolder", function () {
      _this.createFolderCallback();
    });

    _defineProperty(_assertThisInitialized(_this), "createFolderCallback", function (name) {
      var _this$state6 = _this.state,
          isCreateFolderModalOpen = _this$state6.isCreateFolderModalOpen,
          currentCollection = _this$state6.currentCollection;
      var canCreateNewFolder = _this.props.canCreateNewFolder;

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

      _this.api.getFolderAPI().create(id, name, function () {
        _this.fetchFolder(id);
      }, function (_ref) {
        var status = _ref.response.status;

        _this.setState({
          errorCode: status === 409 ? ERROR_CODE_ITEM_NAME_IN_USE : ERROR_CODE_ITEM_NAME_INVALID,
          isLoading: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "select", function (item) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$forceSharedLink = _ref2.forceSharedLink,
          forceSharedLink = _ref2$forceSharedLink === void 0 ? true : _ref2$forceSharedLink;

      var _this$props = _this.props,
          canSetShareAccess = _this$props.canSetShareAccess,
          selectableType = _this$props.type,
          maxSelectable = _this$props.maxSelectable;
      var _this$state7 = _this.state,
          view = _this$state7.view,
          selected = _this$state7.selected,
          _this$state7$currentC = _this$state7.currentCollection.items,
          items = _this$state7$currentC === void 0 ? [] : _this$state7$currentC;
      var id = item.id,
          type = item.type;

      if (!id || !type || selectableType.indexOf(type) === -1) {
        return;
      }

      var selectedKeys = Object.keys(selected);
      var selectedCount = selectedKeys.length;
      var hasHitSelectionLimit = selectedCount === maxSelectable;
      var isSingleFileSelection = maxSelectable === 1;

      var cacheKey = _this.api.getAPI(type).getCacheKey(id);

      var existing = selected[cacheKey];

      var existingFromCache = _this.api.getCache().get(cacheKey);

      var existInSelected = selectedKeys.indexOf(cacheKey) !== -1;
      var itemCanSetShareAccess = getProp(item, 'permissions.can_set_share_access', false); // Existing object could have mutated and we just need to update the
      // reference in the selected map. In that case treat it like a new selection.

      if (existing && existing === existingFromCache) {
        // We are selecting the same item that was already
        // selected. Unselect it in this case. Toggle case.
        delete existing.selected;
        delete selected[cacheKey];
      } else {
        // We are selecting a new item that was never
        // selected before. However if we are in a single
        // item selection mode, we should also unselect any
        // prior item that was item that was selected.
        // Check if we hit the selection limit and if selection
        // is not already currently in the selected data structure.
        // Ignore when in single file selection mode.
        if (hasHitSelectionLimit && !isSingleFileSelection && !existInSelected) {
          return;
        } // Clear out the prior item for single file selection mode


        if (selectedCount > 0 && isSingleFileSelection) {
          var prior = selectedKeys[0]; // only one item

          delete selected[prior].selected;
          delete selected[prior];
        } // Select the new item


        item.selected = true;
        selected[cacheKey] = item; // If can set share access, fetch the shared link properties of the item
        // In the case where another item is selected, any in flight XHR will get
        // cancelled

        if (canSetShareAccess && itemCanSetShareAccess && forceSharedLink) {
          _this.fetchSharedLinkInfo(item);
        }
      }

      var focusedRow = items.findIndex(function (i) {
        return i.id === item.id;
      });

      _this.setState({
        selected: selected,
        focusedRow: focusedRow
      }, function () {
        if (view === VIEW_SELECTED) {
          // Need to refresh the selected view
          _this.showSelected();
        }
      });
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

    _defineProperty(_assertThisInitialized(_this), "handleSharedLinkSuccess", function (item) {
      // if no shared link currently exists, create a shared link with enterprise default
      if (!item[FIELD_SHARED_LINK]) {
        // $FlowFixMe
        _this.changeShareAccess(null, item);
      } else {
        var selected = _this.state.selected;
        var id = item.id,
            type = item.type; // $FlowFixMe

        var cacheKey = _this.api.getAPI(type).getCacheKey(id); // if shared link already exists, update the collection in state


        _this.updateItemInCollection(item);

        if (item.selected && item !== selected[cacheKey]) {
          _this.select(item, {
            forceSharedLink: false
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "changeShareAccess", function (access, item) {
      var canSetShareAccess = _this.props.canSetShareAccess;

      if (!item || !canSetShareAccess) {
        return;
      }

      var permissions = item.permissions,
          type = item.type;

      if (!permissions || !type) {
        return;
      }

      var can_set_share_access = permissions.can_set_share_access;

      if (!can_set_share_access) {
        return;
      }

      _this.api.getAPI(type).share(item, access, function (updatedItem) {
        _this.updateItemInCollection(updatedItem);

        if (item.selected) {
          _this.select(updatedItem, {
            forceSharedLink: false
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateItemInCollection", function (item) {
      var currentCollection = _this.state.currentCollection;
      var _currentCollection$it = currentCollection.items,
          items = _currentCollection$it === void 0 ? [] : _currentCollection$it;
      var newState = {
        currentCollection: _objectSpread({}, currentCollection, {
          items: items.map(function (collectionItem) {
            return collectionItem.id === item.id ? item : collectionItem;
          })
        })
      };

      _this.setState(newState);
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

    _defineProperty(_assertThisInitialized(_this), "tableRef", function (table) {
      _this.table = table;
    });

    _defineProperty(_assertThisInitialized(_this), "closeModals", function () {
      var focusedRow = _this.state.focusedRow;

      _this.setState({
        isLoading: false,
        isCreateFolderModalOpen: false,
        isUploadModalOpen: false
      });

      var _this$state8 = _this.state,
          selected = _this$state8.selected,
          _this$state8$currentC = _this$state8.currentCollection.items,
          items = _this$state8$currentC === void 0 ? [] : _this$state8$currentC;

      if (selected && items.length > 0) {
        focus(_this.rootElement, ".bcp-item-row-".concat(focusedRow));
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
          focus(_this.rootElement, '.bcp-item-row', false);

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

        case 'c':
          if (_this.globalModifier) {
            _this.choose();

            event.preventDefault();
          }

          break;

        case 'x':
          if (_this.globalModifier) {
            _this.cancel();

            event.preventDefault();
          }

          break;

        case 's':
          if (_this.globalModifier) {
            _this.showSelected();

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

    _defineProperty(_assertThisInitialized(_this), "onFocusChange", function (focusedRow) {
      _this.setState({
        focusedRow: focusedRow
      });
    });

    _defineProperty(_assertThisInitialized(_this), "paginate", function (newOffset) {
      _this.setState({
        currentOffset: newOffset
      }, _this.refreshCollection);
    });

    var apiHost = props.apiHost,
        clientName = props.clientName,
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
      clientName: clientName,
      id: "".concat(TYPED_ID_FOLDER_PREFIX).concat(_rootFolderId),
      language: language,
      requestInterceptor: requestInterceptor,
      responseInterceptor: responseInterceptor,
      sharedLink: sharedLink,
      sharedLinkPassword: sharedLinkPassword,
      token: token,
      uploadHost: uploadHost
    });
    _this.id = uniqueid('bcp_');
    _this.state = {
      sortBy: _sortBy,
      sortDirection: _sortDirection,
      rootName: '',
      currentCollection: {},
      currentOffset: initialPageSize * (initialPage - 1),
      currentPageSize: initialPageSize,
      selected: {},
      searchQuery: '',
      view: VIEW_FOLDER,
      isCreateFolderModalOpen: false,
      isUploadModalOpen: false,
      focusedRow: 0,
      isLoading: false,
      errorCode: ''
    };
    return _this;
  }
  /**
   * Destroys api instances
   *
   * @private
   * @return {void}
   */


  _createClass(ContentPicker, [{
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
      var _this$props2 = this.props,
          defaultView = _this$props2.defaultView,
          currentFolderId = _this$props2.currentFolderId;
      this.rootElement = document.getElementById(this.id);
      this.appElement = this.rootElement.firstElementChild;

      if (defaultView === DEFAULT_VIEW_RECENTS) {
        this.showRecents();
      } else {
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
    value: function componentDidUpdate(_ref3, prevState) {
      var prevFolderId = _ref3.currentFolderId;
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
     * Gets selected items from state.
     * Clones values before returning so that
     * object references are broken. Also cleans
     * up the selected attribute since it was
     * added by the file picker.
     *
     * @private
     * @return {BoxItem[]}
     */

  }, {
    key: "currentUnloadedCollection",

    /**
     * Resets the percentLoaded in the collection
     * so that the loading bar starts showing
     *
     * @private
     * @return {Collection}
     */
    value: function currentUnloadedCollection() {
      var currentCollection = this.state.currentCollection;
      return _extends(currentCollection, {
        percentLoaded: 0
      });
    }
    /**
     * Refreshing the item collection depending
     * upon the view. Collection is gotten from cache.
     * Navigation event is prevented.
     *
     * @private
     * @return {void}
     */

  }, {
    key: "finishNavigation",

    /**
     * Focuses the grid
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
        focus(this.rootElement, '.bcp-item-row');
        this.setState({
          focusedRow: 0
        });
      }

      this.firstLoad = false;
    }
    /**
     * Folder fetch success callback
     *
     * @private
     * @param {Object} collection item collection object
     * @param {Boolean|void} triggerNavigationEvent - To focus the grid
     * @return {void}
     */

  }, {
    key: "fetchFolderSuccessCallback",
    value: function fetchFolderSuccessCallback(collection, triggerNavigationEvent) {
      var _this$props3 = this.props,
          clearSelectedItemsOnNavigation = _this$props3.clearSelectedItemsOnNavigation,
          rootFolderId = _this$props3.rootFolderId;
      var id = collection.id,
          name = collection.name;
      var commonState = {
        currentCollection: collection,
        rootName: id === rootFolderId ? name : ''
      }; // New folder state

      var newState = clearSelectedItemsOnNavigation ? _objectSpread({}, commonState, {
        selected: {}
      }) : commonState; // Close any open modals

      this.closeModals(); // Deletes selected keys

      if (clearSelectedItemsOnNavigation) {
        this.deleteSelectedKeys();
      }

      if (triggerNavigationEvent) {
        // Fire folder navigation event
        this.setState(newState, this.finishNavigation);
      } else {
        this.setState(newState);
      }
    }
    /**
     * Fetches a folder, defaults to fetching root folder
     *
     * @private
     * @param {string|void} [id] folder id
     * @param {Boolean|void} [triggerNavigationEvent] - To focus the grid
     * @return {void}
     */

  }, {
    key: "recentsSuccessCallback",

    /**
     * Recents fetch success callback
     *
     * @private
     * @param {Object} collection item collection object
     * @param {Boolean|void} [triggerNavigationEvent] To trigger navigate event
     * @return {void}
     */
    value: function recentsSuccessCallback(collection, triggerNavigationEvent) {
      var newState = {
        currentCollection: collection
      };

      if (triggerNavigationEvent) {
        this.setState(newState, this.finishNavigation);
      } else {
        this.setState(newState);
      }
    }
    /**
     * Shows recents.
     * We always try to force fetch recents.
     *
     * @private
     * @param {Boolean|void} [triggerNavigationEvent] To trigger navigate event
     * @param {Boolean|void} [forceFetch] To void cache
     * @return {void}
     */

  }, {
    key: "showRecents",
    value: function showRecents() {
      var _this2 = this;

      var triggerNavigationEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var rootFolderId = this.props.rootFolderId; // Reset search state, the view and show busy indicator

      this.setState({
        searchQuery: '',
        view: VIEW_RECENTS,
        currentCollection: this.currentUnloadedCollection(),
        currentOffset: 0
      }); // Fetch the folder using folder API

      this.api.getRecentsAPI().recents(rootFolderId, function (collection) {
        _this2.recentsSuccessCallback(collection, triggerNavigationEvent);
      }, this.errorCallback, {
        forceFetch: true
      });
    }
    /**
     * Shows the selected items
     *
     * @private
     * @return {void}
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
      var _this$props4 = this.props,
          language = _this$props4.language,
          messages = _this$props4.messages,
          rootFolderId = _this$props4.rootFolderId,
          logoUrl = _this$props4.logoUrl,
          canUpload = _this$props4.canUpload,
          canSetShareAccess = _this$props4.canSetShareAccess,
          canCreateNewFolder = _this$props4.canCreateNewFolder,
          contentUploaderProps = _this$props4.contentUploaderProps,
          extensions = _this$props4.extensions,
          maxSelectable = _this$props4.maxSelectable,
          type = _this$props4.type,
          token = _this$props4.token,
          sharedLink = _this$props4.sharedLink,
          sharedLinkPassword = _this$props4.sharedLinkPassword,
          apiHost = _this$props4.apiHost,
          uploadHost = _this$props4.uploadHost,
          isHeaderLogoVisible = _this$props4.isHeaderLogoVisible,
          isPaginationVisible = _this$props4.isPaginationVisible,
          isSmall = _this$props4.isSmall,
          className = _this$props4.className,
          measureRef = _this$props4.measureRef,
          chooseButtonLabel = _this$props4.chooseButtonLabel,
          cancelButtonLabel = _this$props4.cancelButtonLabel,
          requestInterceptor = _this$props4.requestInterceptor,
          responseInterceptor = _this$props4.responseInterceptor,
          renderCustomActionButtons = _this$props4.renderCustomActionButtons,
          showSelectedButton = _this$props4.showSelectedButton;
      var _this$state9 = this.state,
          view = _this$state9.view,
          rootName = _this$state9.rootName,
          selected = _this$state9.selected,
          currentCollection = _this$state9.currentCollection,
          currentPageSize = _this$state9.currentPageSize,
          searchQuery = _this$state9.searchQuery,
          isCreateFolderModalOpen = _this$state9.isCreateFolderModalOpen,
          isUploadModalOpen = _this$state9.isUploadModalOpen,
          isLoading = _this$state9.isLoading,
          errorCode = _this$state9.errorCode,
          focusedRow = _this$state9.focusedRow;
      var id = currentCollection.id,
          offset = currentCollection.offset,
          permissions = currentCollection.permissions,
          totalCount = currentCollection.totalCount;

      var _ref4 = permissions || {},
          can_upload = _ref4.can_upload;

      var selectedCount = Object.keys(selected).length;
      var isSingleSelect = maxSelectable === 1;
      var hasHitSelectionLimit = selectedCount === maxSelectable && !isSingleSelect;
      var allowUpload = canUpload && !!can_upload;
      var allowCreate = canCreateNewFolder && !!can_upload;
      var styleClassName = classNames('be bcp', className);
      /* eslint-disable jsx-a11y/no-static-element-interactions */

      /* eslint-disable jsx-a11y/no-noninteractive-tabindex */

      return React.createElement(Internationalize, {
        language: language,
        messages: messages
      }, React.createElement("div", {
        id: this.id,
        className: styleClassName,
        ref: measureRef,
        "data-testid": "content-picker"
      }, React.createElement("div", {
        className: "be-app-element",
        onKeyDown: this.onKeyDown,
        tabIndex: 0
      }, React.createElement(Header, {
        view: view,
        isHeaderLogoVisible: isHeaderLogoVisible,
        isSmall: isSmall,
        searchQuery: searchQuery,
        logoUrl: logoUrl,
        onSearch: this.search
      }), React.createElement(SubHeader, {
        view: view,
        rootId: rootFolderId,
        isSmall: isSmall,
        rootName: rootName,
        currentCollection: currentCollection,
        canUpload: allowUpload,
        canCreateNewFolder: allowCreate,
        onUpload: this.upload,
        onCreate: this.createFolder,
        onItemClick: this.fetchFolder,
        onSortChange: this.sort
      }), React.createElement(Content, {
        view: view,
        isSmall: isSmall,
        rootId: rootFolderId,
        rootElement: this.rootElement,
        focusedRow: focusedRow,
        selectableType: type,
        canSetShareAccess: canSetShareAccess,
        extensionsWhitelist: extensions,
        hasHitSelectionLimit: hasHitSelectionLimit,
        currentCollection: currentCollection,
        isSingleSelect: isSingleSelect,
        tableRef: this.tableRef,
        onItemSelect: this.select,
        onItemClick: this.onItemClick,
        onFocusChange: this.onFocusChange,
        onShareAccessChange: this.changeShareAccess
      }), React.createElement(Footer, {
        currentCollection: currentCollection,
        selectedCount: selectedCount,
        selectedItems: this.getSelectedItems(),
        showSelectedButton: showSelectedButton,
        hasHitSelectionLimit: hasHitSelectionLimit,
        isSingleSelect: isSingleSelect,
        onSelectedClick: this.showSelected,
        onChoose: this.choose,
        onCancel: this.cancel,
        chooseButtonLabel: chooseButtonLabel,
        cancelButtonLabel: cancelButtonLabel,
        renderCustomActionButtons: renderCustomActionButtons
      }, isPaginationVisible ? React.createElement(OffsetBasedPagination, {
        offset: offset,
        onOffsetChange: this.paginate,
        pageSize: currentPageSize,
        totalCount: totalCount
      }) : null)), allowUpload && !!this.appElement ? React.createElement(UploadDialog, {
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
      }) : null));
      /* eslint-enable jsx-a11y/no-static-element-interactions */

      /* eslint-enable jsx-a11y/no-noninteractive-tabindex */
    }
  }]);

  return ContentPicker;
}(Component);

_defineProperty(ContentPicker, "defaultProps", {
  type: defaultType,
  rootFolderId: DEFAULT_ROOT,
  onChoose: noop,
  onCancel: noop,
  initialPage: DEFAULT_PAGE_NUMBER,
  initialPageSize: DEFAULT_PAGE_SIZE,
  sortBy: FIELD_NAME,
  sortDirection: SORT_ASC,
  extensions: [],
  maxSelectable: Infinity,
  canUpload: true,
  canSetShareAccess: true,
  canCreateNewFolder: true,
  autoFocus: false,
  className: '',
  apiHost: DEFAULT_HOSTNAME_API,
  uploadHost: DEFAULT_HOSTNAME_UPLOAD,
  clientName: CLIENT_NAME_CONTENT_PICKER,
  defaultView: DEFAULT_VIEW_FILES,
  contentUploaderProps: {},
  showSelectedButton: true,
  clearSelectedItemsOnNavigation: false,
  isHeaderLogoVisible: true,
  isPaginationVisible: true
});

export { ContentPicker as ContentPickerComponent };
export default makeResponsive(ContentPicker);
//# sourceMappingURL=ContentPicker.js.map