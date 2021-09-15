function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
 * @file Helper for the box folder api
 * @author Box
 */
import noop from 'lodash/noop';
import flatten from '../utils/flatten';
import { FOLDER_FIELDS_TO_FETCH } from '../utils/fields';
import { getBadItemError } from '../utils/error';
import Item from './Item';
import FileAPI from './File';
import WebLinkAPI from './WebLink';
import { CACHE_PREFIX_FOLDER, ERROR_CODE_FETCH_FOLDER, ERROR_CODE_CREATE_FOLDER, FIELD_REPRESENTATIONS, X_REP_HINT_HEADER_DIMENSIONS_DEFAULT } from '../constants';

var Folder =
/*#__PURE__*/
function (_Item) {
  _inherits(Folder, _Item);

  function Folder() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Folder);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Folder)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "folderSuccessHandler", function (_ref) {
      var data = _ref.data;

      if (_this.isDestroyed()) {
        return;
      }

      var item_collection = data.item_collection;

      if (!item_collection) {
        throw getBadItemError();
      }

      var entries = item_collection.entries,
          total_count = item_collection.total_count,
          limit = item_collection.limit,
          offset = item_collection.offset;

      if (!Array.isArray(entries) || typeof total_count !== 'number' || typeof limit !== 'number' || typeof offset !== 'number') {
        throw getBadItemError();
      }

      var flattened = flatten(entries, new Folder(_this.options), new FileAPI(_this.options), new WebLinkAPI(_this.options));
      _this.itemCache = (_this.itemCache || []).concat(flattened);

      _this.getCache().set(_this.key, _objectSpread({}, data, {
        item_collection: _objectSpread({}, item_collection, {
          entries: _this.itemCache
        })
      }));

      _this.finish();
    });

    _defineProperty(_assertThisInitialized(_this), "folderDetailsSuccessHandler", function (_ref2) {
      var data = _ref2.data;

      if (_this.isDestroyed()) {
        return;
      }

      var cachedEntry = _this.getCache().get(_this.key);

      var updatedCacheEntry = _objectSpread({}, cachedEntry, {}, data);

      _this.getCache().set(_this.key, updatedCacheEntry);

      _this.successCallback(updatedCacheEntry);
    });

    _defineProperty(_assertThisInitialized(_this), "createSuccessHandler", function (_ref3) {
      var data = _ref3.data;
      var childId = data.id;

      if (_this.isDestroyed() || !childId) {
        return;
      }

      var childKey = _this.getCacheKey(childId);

      var cache = _this.getCache();

      var parent = cache.get(_this.key);

      if (!parent) {
        _this.successCallback(data);

        return;
      }

      var item_collection = parent.item_collection;

      if (!item_collection) {
        throw getBadItemError();
      }

      var total_count = item_collection.total_count,
          entries = item_collection.entries;

      if (!Array.isArray(entries) || typeof total_count !== 'number') {
        throw getBadItemError();
      }

      cache.set(childKey, data);
      item_collection.entries = [childKey].concat(entries);
      item_collection.total_count = total_count + 1;

      _this.successCallback(data);
    });

    return _this;
  }

  _createClass(Folder, [{
    key: "getCacheKey",

    /**
     * @property {string}
     */

    /**
     * @property {string}
     */

    /**
     * @property {number}
     */

    /**
     * @property {number}
     */

    /**
     * @property {string}
     */

    /**
     * @property {string}
     */

    /**
     * @property {Array}
     */

    /**
     * @property {Function}
     */

    /**
     * @property {Function}
     */

    /**
     * Creates a key for the cache
     *
     * @param {string} id folder id
     * @return {string} key
     */
    value: function getCacheKey(id) {
      return "".concat(CACHE_PREFIX_FOLDER).concat(id);
    }
    /**
     * Base URL for folder api
     *
     * @param {string} [id] optional file id
     * @return {string} base url for files
     */

  }, {
    key: "getUrl",
    value: function getUrl(id) {
      var suffix = id ? "/".concat(id) : '';
      return "".concat(this.getBaseApiUrl(), "/folders").concat(suffix);
    }
    /**
     * Tells if a folder has its items all loaded
     *
     * @return {boolean} if items are loaded
     */

  }, {
    key: "isLoaded",
    value: function isLoaded() {
      var cache = this.getCache();
      return cache.has(this.key);
    }
    /**
     * Composes and returns the results
     *
     * @return {void}
     */

  }, {
    key: "finish",
    value: function finish() {
      if (this.isDestroyed()) {
        return;
      }

      var cache = this.getCache();
      var folder = cache.get(this.key);
      var id = folder.id,
          name = folder.name,
          permissions = folder.permissions,
          path_collection = folder.path_collection,
          item_collection = folder.item_collection;

      if (!item_collection || !path_collection) {
        throw getBadItemError();
      }

      var entries = item_collection.entries,
          offset = item_collection.offset,
          total_count = item_collection.total_count;

      if (!Array.isArray(entries) || typeof total_count !== 'number') {
        throw getBadItemError();
      }

      var collection = {
        id: id,
        name: name,
        offset: offset,
        percentLoaded: 100,
        permissions: permissions,
        boxItem: folder,
        breadcrumbs: path_collection.entries,
        items: entries.map(function (key) {
          return cache.get(key);
        }),
        sortBy: this.sortBy,
        sortDirection: this.sortDirection,
        totalCount: total_count
      };
      this.successCallback(collection);
    }
    /**
     * Handles the folder fetch response
     *
     * @param {Object} response
     * @return {void}
     */

  }, {
    key: "folderRequest",

    /**
     * Does the network request for fetching a folder
     *
     * @param {Array<String>} fields Array of field strings
     * @return {Promise}
     */
    value: function folderRequest() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          fields = _ref4.fields,
          noPagination = _ref4.noPagination;

      var successHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.folderSuccessHandler;

      if (this.isDestroyed()) {
        return Promise.reject();
      }

      var requestFields = fields || FOLDER_FIELDS_TO_FETCH;
      this.errorCode = ERROR_CODE_FETCH_FOLDER;
      var params = {
        fields: requestFields.toString()
      };

      if (!noPagination) {
        params = _objectSpread({}, params, {
          direction: this.sortDirection.toLowerCase(),
          limit: this.limit,
          offset: this.offset,
          fields: requestFields.toString(),
          sort: this.sortBy.toLowerCase()
        });
      }

      return this.xhr.get({
        url: this.getUrl(this.id),
        params: params,
        headers: requestFields.includes(FIELD_REPRESENTATIONS) ? {
          'X-Rep-Hints': X_REP_HINT_HEADER_DIMENSIONS_DEFAULT
        } : {}
      }).then(successHandler).catch(this.errorHandler);
    }
    /**
     * Gets a box folder properties. If you want to get the items, you should use `getFolder`
     *
     * @param {string} id - Folder id
     * @param {Function} successCallback - Function to call with results
     * @param {Function} errorCallback - Function to call with errors
     * @param {Object} options - Options
     * @returns {void}
     */

  }, {
    key: "getFolderFields",
    value: function getFolderFields(id, successCallback, errorCallback) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (this.isDestroyed()) {
        return;
      } // Save references


      this.id = id;
      this.key = this.getCacheKey(id);
      this.successCallback = successCallback;
      this.errorCallback = errorCallback;
      this.folderRequest(_objectSpread({}, options, {
        noPagination: true
      }), this.folderDetailsSuccessHandler);
    }
    /**
     * Gets a box folder and its items
     *
     * @param {string} id - Folder id
     * @param {number} limit - maximum number of items to retrieve
     * @param {number} offset - starting index from which to retrieve items
     * @param {string} sortBy - sort by field
     * @param {string} sortDirection - sort direction
     * @param {Function} successCallback - Function to call with results
     * @param {Function} errorCallback - Function to call with errors
     * @param {boolean|void} [options.fields] - Optionally include specific fields
     * @param {boolean|void} [options.forceFetch] - Optionally Bypasses the cache
     * @param {boolean|void} [options.refreshCache] - Optionally Updates the cache
     * @return {void}
     */

  }, {
    key: "getFolder",
    value: function getFolder(id, limit, offset, sortBy, sortDirection, successCallback, errorCallback) {
      var options = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : {};

      if (this.isDestroyed()) {
        return;
      } // Save references


      this.id = id;
      this.key = this.getCacheKey(id);
      this.limit = limit;
      this.offset = offset;
      this.sortBy = sortBy;
      this.sortDirection = sortDirection;
      this.successCallback = successCallback;
      this.errorCallback = errorCallback; // Clear the cache if needed

      if (options.forceFetch) {
        this.getCache().unset(this.key);
      } // Return the Cache value if it exists


      if (this.isLoaded()) {
        this.finish();
        return;
      } // Make the XHR request


      this.folderRequest(options);
    }
    /**
     * API to rename an Item
     *
     * @param {string} id - parent folder id
     * @param {string} name - new folder name
     * @param {Function} successCallback - success callback
     * @param {Function} errorCallback - error callback
     * @return {void}
     */

  }, {
    key: "folderCreateRequest",

    /**
     * Does the network request for fetching a folder
     *
     * @return {void}
     */
    value: function folderCreateRequest(name) {
      if (this.isDestroyed()) {
        return Promise.reject();
      }

      this.errorCode = ERROR_CODE_CREATE_FOLDER;
      var url = "".concat(this.getUrl(), "?fields=").concat(FOLDER_FIELDS_TO_FETCH.toString());
      return this.xhr.post({
        url: url,
        data: {
          name: name,
          parent: {
            id: this.id
          }
        }
      }).then(this.createSuccessHandler).catch(this.errorHandler);
    }
    /**
     * API to create a folder
     *
     * @param {string} id - parent folder id
     * @param {string} name - new folder name
     * @param {Function} successCallback - success callback
     * @param {Function} errorCallback - error callback
     * @return {void}
     */

  }, {
    key: "create",
    value: function create(id, name, successCallback) {
      var errorCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;

      if (this.isDestroyed()) {
        return;
      }

      this.id = id;
      this.key = this.getCacheKey(id);
      this.successCallback = successCallback;
      this.errorCallback = errorCallback;
      this.folderCreateRequest(name);
    }
  }]);

  return Folder;
}(Item);

export default Folder;
//# sourceMappingURL=Folder.js.map