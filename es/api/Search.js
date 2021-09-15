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
 * @file Helper for the box search api
 * @author Box
 */
import flatten from '../utils/flatten';
import { FOLDER_FIELDS_TO_FETCH } from '../utils/fields';
import { getBadItemError } from '../utils/error';
import Base from './Base';
import FileAPI from './File';
import FolderAPI from './Folder';
import WebLinkAPI from './WebLink';
import { CACHE_PREFIX_SEARCH, FIELD_RELEVANCE, FIELD_REPRESENTATIONS, X_REP_HINT_HEADER_DIMENSIONS_DEFAULT, SORT_DESC, ERROR_CODE_SEARCH } from '../constants';

var Search =
/*#__PURE__*/
function (_Base) {
  _inherits(Search, _Base);

  function Search() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Search)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "searchSuccessHandler", function (_ref) {
      var data = _ref.data;

      if (_this.isDestroyed()) {
        return;
      }

      var entries = data.entries,
          total_count = data.total_count,
          limit = data.limit,
          offset = data.offset;

      if (!Array.isArray(entries) || typeof total_count !== 'number' || typeof limit !== 'number' || typeof offset !== 'number') {
        throw getBadItemError();
      }

      var flattened = flatten(entries, new FolderAPI(_this.options), new FileAPI(_this.options), new WebLinkAPI(_this.options));
      _this.itemCache = (_this.itemCache || []).concat(flattened);

      _this.getCache().set(_this.key, {
        item_collection: _objectSpread({}, data, {
          entries: _this.itemCache
        })
      });

      _this.finish();
    });

    _defineProperty(_assertThisInitialized(_this), "searchErrorHandler", function (error) {
      if (_this.isDestroyed()) {
        return;
      }

      _this.errorCallback(error, _this.errorCode);
    });

    return _this;
  }

  _createClass(Search, [{
    key: "getEncodedQuery",

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
     * @property {string}
     */

    /**
     * @property {Function}
     */

    /**
     * @property {Function}
     */

    /**
     * @property {Array}
     */

    /**
     * Creates a key for the cache
     *
     * @param {string} id folder id
     * @param {string} query search string
     * @return {string} key
     */
    value: function getEncodedQuery(query) {
      return encodeURIComponent(query);
    }
    /**
     * Creates a key for the cache
     *
     * @param {string} id folder id
     * @param {string} query search string
     * @return {string} key
     */

  }, {
    key: "getCacheKey",
    value: function getCacheKey(id, query) {
      return "".concat(CACHE_PREFIX_SEARCH).concat(id, "|").concat(query);
    }
    /**
     * URL for search api
     *
     * @param {string} [id] optional file id
     * @return {string} base url for files
     */

  }, {
    key: "getUrl",
    value: function getUrl() {
      return "".concat(this.getBaseApiUrl(), "/search");
    }
    /**
     * Tells if a search results has its items all loaded
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
     * Returns the results
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
      var search = cache.get(this.key);
      var item_collection = search.item_collection;

      if (!item_collection) {
        throw getBadItemError();
      }

      var entries = item_collection.entries,
          total_count = item_collection.total_count;

      if (!Array.isArray(entries) || typeof total_count !== 'number') {
        throw getBadItemError();
      }

      var collection = {
        id: this.id,
        items: entries.map(function (key) {
          return cache.get(key);
        }),
        offset: this.offset,
        percentLoaded: 100,
        sortBy: FIELD_RELEVANCE,
        // Results are always sorted by relevance
        sortDirection: SORT_DESC,
        // Results are always sorted descending
        totalCount: total_count
      };
      this.successCallback(collection);
    }
    /**
     * Handles the folder search response
     *
     * @param {Object} response
     * @return {void}
     */

  }, {
    key: "searchRequest",

    /**
     * Does the network request
     *
     * @param {RequestOptions} options - options for request
     * @return {void}
     */
    value: function searchRequest() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (this.isDestroyed()) {
        return Promise.reject();
      }

      var fields = options.fields;
      var requestFields = fields || FOLDER_FIELDS_TO_FETCH;
      this.errorCode = ERROR_CODE_SEARCH;
      return this.xhr.get({
        url: this.getUrl(),
        params: {
          offset: this.offset,
          query: this.query,
          ancestor_folder_ids: this.id,
          limit: this.limit,
          fields: requestFields.toString()
        },
        headers: requestFields.includes(FIELD_REPRESENTATIONS) ? {
          'X-Rep-Hints': X_REP_HINT_HEADER_DIMENSIONS_DEFAULT
        } : {}
      }).then(this.searchSuccessHandler).catch(this.searchErrorHandler);
    }
    /**
     * Gets search results
     *
     * @param {string} id - folder id
     * @param {string} query - search string
     * @param {number} limit - maximum number of items to retrieve
     * @param {number} offset - starting index from which to retrieve items
     * @param {Function} successCallback - Function to call with results
     * @param {Function} errorCallback - Function to call with errors
     * @param {boolean|void} [options.forceFetch] - Bypasses the cache
     * @return {void}
     */

  }, {
    key: "search",
    value: function search(id, query, limit, offset, successCallback, errorCallback) {
      var options = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};

      if (this.isDestroyed()) {
        return;
      } // Save references


      this.limit = limit;
      this.offset = offset;
      this.query = query;
      this.id = id;
      this.key = this.getCacheKey(id, this.getEncodedQuery(this.query));
      this.successCallback = successCallback;
      this.errorCallback = errorCallback; // Clear the cache if needed

      if (options.forceFetch) {
        this.getCache().unset(this.key);
      } // Return the Cache value if it exists


      if (this.isLoaded()) {
        this.finish();
        return;
      } // Make the XHR request


      this.searchRequest(options);
    }
  }]);

  return Search;
}(Base);

export default Search;
//# sourceMappingURL=Search.js.map