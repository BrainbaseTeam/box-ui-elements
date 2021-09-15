function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Multiput upload base class
 * @author Box
 */
import BaseUpload from './BaseUpload';
var DEFAULT_MULTIPUT_CONFIG = {
  digestReadahead: 5,
  // How many parts past those currently uploading to precompute digest for
  initialRetryDelayMs: 5000,
  // Base for exponential backoff on retries
  maxRetryDelayMs: 60000,
  // Upper bound for time between retries
  parallelism: 4,
  // Maximum number of parts to upload at a time
  requestTimeoutMs: 120000,
  // Idle timeout on part upload, overall request timeout on other requests
  retries: 5 // How many times to retry requests such as upload part or commit. Note that total number of attempts will be retries + 1 in worst case where all attempts fail.

};

var BaseMultiput =
/*#__PURE__*/
function (_BaseUpload) {
  _inherits(BaseMultiput, _BaseUpload);

  /**
   * [constructor]
   *
   * @param {Options} options
   * @param {Object} sessionEndpoints
   * @param {MultiputConfig} [config]
   * @return {void}
   */
  function BaseMultiput(options, sessionEndpoints, config) {
    var _this;

    _classCallCheck(this, BaseMultiput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BaseMultiput).call(this, _objectSpread({}, options, {
      shouldRetry: false // disable XHR retries as there is already retry logic

    })));

    _defineProperty(_assertThisInitialized(_this), "logEvent", function (eventType, eventInfo) {
      var data = {
        event_type: eventType
      };

      if (eventInfo) {
        data.event_info = eventInfo;
      }

      return _this.xhr.post({
        url: _this.sessionEndpoints.logEvent,
        data: data
      });
    });

    _this.config = config || DEFAULT_MULTIPUT_CONFIG;
    _this.sessionEndpoints = sessionEndpoints;
    return _this;
  }
  /**
   * POST log event
   *
   * @param {string} eventType
   * @param {string} [eventInfo]
   * @return {Promise}
   */


  return BaseMultiput;
}(BaseUpload);

export default BaseMultiput;
//# sourceMappingURL=BaseMultiput.js.map