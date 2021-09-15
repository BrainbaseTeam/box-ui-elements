function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
 * @file Helper for the box metadata query API
 * @author Box
 */
import Base from './Base';
import { CACHE_PREFIX_METADATA_QUERY, ERROR_CODE_METADATA_QUERY } from '../constants';

var MetadataQuery =
/*#__PURE__*/
function (_Base) {
  _inherits(MetadataQuery, _Base);

  function MetadataQuery() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MetadataQuery);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MetadataQuery)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "queryMetadataSuccessHandler", function (_ref) {
      var data = _ref.data;

      var cache = _this.getCache();

      cache.set(_this.key, data);

      _this.finish();
    });

    return _this;
  }

  _createClass(MetadataQuery, [{
    key: "getCacheKey",

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
     * Creates a key for the metadata cache
     *
     * @param {string} id - metadata template
     * @return {string} key
     */
    value: function getCacheKey(id) {
      return "".concat(CACHE_PREFIX_METADATA_QUERY).concat(id);
    }
    /**
     * API URL for metadata query
     * @return {string} base url for files
     */

  }, {
    key: "getUrl",
    value: function getUrl() {
      return "".concat(this.getBaseApiUrl(), "/metadata_queries/execute_read");
    }
    /**
     * Returns true for cache hit for metadata query results
     *
     * @return {boolean} if query results are loaded
     */

  }, {
    key: "isLoaded",
    value: function isLoaded() {
      var cache = this.getCache();
      return cache.has(this.key);
    }
    /**
     * Returns the results using successCallback
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
      var metadataQueryData = cache.get(this.key);
      this.successCallback(metadataQueryData);
    }
    /**
     * @param {Object} response
     */

  }, {
    key: "queryMetadataRequest",

    /**
     * Does the network request to metadata query API
     * @param {Object} query query object with SQL Clauses like properties
     * @return {void}
     */
    value: function queryMetadataRequest(query) {
      if (this.isDestroyed()) {
        return;
      }

      this.errorCode = ERROR_CODE_METADATA_QUERY;
      this.xhr.post({
        url: this.getUrl(),
        data: query
      }).then(this.queryMetadataSuccessHandler).catch(this.errorHandler);
    }
    /**
     * API for querying enterprise metadata
     * @param {Object} query - metadata query object
     * @param {Function} successCallback - Function to call with results
     * @param {Function} errorCallback - Function to call with errors
     * @param {boolean|void} [options.forceFetch] - Bypasses the cache
     * @return {void}
     */

  }, {
    key: "queryMetadata",
    value: function queryMetadata(query, successCallback, errorCallback) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (this.isDestroyed()) {
        return;
      }

      var _options$context = options.context,
          context = _options$context === void 0 ? {} : _options$context;
      this.key = this.getCacheKey(context.id);
      this.successCallback = successCallback;
      this.errorCallback = errorCallback; // Clear the cache if needed

      if (options.forceFetch) {
        this.getCache().unset(this.key);
      } // Return the Cache value if it exists


      if (this.isLoaded()) {
        this.finish();
        return;
      } // Make the XHR request


      this.queryMetadataRequest(query);
    }
  }]);

  return MetadataQuery;
}(Base);

export default MetadataQuery;
//# sourceMappingURL=MetadataQuery.js.map