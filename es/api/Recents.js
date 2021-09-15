function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
 * @file Helper for the box recents api
 * @author Box
 */
import flatten from '../utils/flatten';
import { getBadItemError } from '../utils/error';
import { FOLDER_FIELDS_TO_FETCH } from '../utils/fields';
import Base from './Base';
import FileAPI from './File';
import FolderAPI from './Folder';
import WebLinkAPI from './WebLink';
import { DEFAULT_ROOT, CACHE_PREFIX_RECENTS, ERROR_CODE_FETCH_RECENTS, FIELD_DATE, FIELD_REPRESENTATIONS, X_REP_HINT_HEADER_DIMENSIONS_DEFAULT, SORT_DESC } from '../constants';

var Recents =
/*#__PURE__*/
function (_Base) {
  _inherits(Recents, _Base);

  function Recents() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Recents);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Recents)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "recentsSuccessHandler", function (_ref) {
      var data = _ref.data;

      if (_this.isDestroyed()) {
        return;
      }

      var entries = data.entries,
          _data$order = data.order,
          by = _data$order.by,
          direction = _data$order.direction;
      var items = [];
      entries.forEach(function (_ref2) {
        var item = _ref2.item,
            interacted_at = _ref2.interacted_at;
        var path_collection = item.path_collection;
        var shouldInclude = _this.id === DEFAULT_ROOT || !!path_collection && path_collection.entries.findIndex(function (crumb) {
          return crumb.id === _this.id;
        }) !== -1;

        if (shouldInclude) {
          items.push(_extends(item, {
            interacted_at: interacted_at
          }));
        }
      });
      var flattenedItems = flatten(items, new FolderAPI(_this.options), new FileAPI(_this.options), new WebLinkAPI(_this.options));

      _this.getCache().set(_this.key, {
        item_collection: {
          entries: flattenedItems,
          order: [{
            by: by,
            direction: direction
          }]
        }
      });

      _this.finish();
    });

    _defineProperty(_assertThisInitialized(_this), "recentsErrorHandler", function (error) {
      if (_this.isDestroyed()) {
        return;
      }

      _this.errorCallback(error, _this.errorCode);
    });

    return _this;
  }

  _createClass(Recents, [{
    key: "getCacheKey",

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
     * Creates a key for the cache
     *
     * @param {string} id folder id
     * @return {string} key
     */
    value: function getCacheKey(id) {
      return "".concat(CACHE_PREFIX_RECENTS).concat(id);
    }
    /**
     * URL for recents api
     *
     * @return {string} base url for files
     */

  }, {
    key: "getUrl",
    value: function getUrl() {
      return "".concat(this.getBaseApiUrl(), "/recent_items");
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
      var recents = cache.get(this.key);
      var item_collection = recents.item_collection;

      if (!item_collection) {
        throw getBadItemError();
      }

      var entries = item_collection.entries;

      if (!Array.isArray(entries)) {
        throw getBadItemError();
      }

      var collection = {
        id: this.id,
        items: entries.map(function (key) {
          return cache.get(key);
        }),
        percentLoaded: 100,
        sortBy: FIELD_DATE,
        // Results are always sorted by date
        sortDirection: SORT_DESC // Results are always sorted descending

      };
      this.successCallback(collection);
    }
    /**
     * Handles the folder Recents response
     *
     * @param {Object} response
     * @return {void}
     */

  }, {
    key: "recentsRequest",

    /**
     * Does the network request
     *
     * @param {RequestOptions} options - options for request
     * @return {Promise}
     */
    value: function recentsRequest() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (this.isDestroyed()) {
        return Promise.reject();
      }

      var fields = options.fields;
      var requestFields = fields || FOLDER_FIELDS_TO_FETCH;
      this.errorCode = ERROR_CODE_FETCH_RECENTS;
      return this.xhr.get({
        url: this.getUrl(),
        params: {
          fields: requestFields.toString()
        },
        headers: requestFields.includes(FIELD_REPRESENTATIONS) ? {
          'X-Rep-Hints': X_REP_HINT_HEADER_DIMENSIONS_DEFAULT
        } : {}
      }).then(this.recentsSuccessHandler).catch(this.recentsErrorHandler);
    }
    /**
     * Gets recent files
     *
     * @param {string} id - parent folder id
     * @param {Function} successCallback - Function to call with results
     * @param {Function} errorCallback - Function to call with errors
     * @param {boolean|void} [options.forceFetch] - Bypasses the cache
     * @return {void}
     */

  }, {
    key: "recents",
    value: function recents(id, successCallback, errorCallback) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (this.isDestroyed()) {
        return;
      } // Save references


      this.id = id;
      this.successCallback = successCallback;
      this.errorCallback = errorCallback;
      var cache = this.getCache();
      this.key = this.getCacheKey(this.id); // Clear the cache if needed

      if (options.forceFetch) {
        cache.unset(this.key);
      } // Return the Cache value if it exists


      if (cache.has(this.key)) {
        this.finish();
        return;
      } // Make the XHR request


      this.recentsRequest(options);
    }
  }]);

  return Recents;
}(Base);

export default Recents;
//# sourceMappingURL=Recents.js.map