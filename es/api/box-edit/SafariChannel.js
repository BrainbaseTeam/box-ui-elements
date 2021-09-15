function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import Channel from './Channel';
import CONSTANTS from './constants';
var INPUT_EVENT = 'box_extension_input';
var OUTPUT_EVENT = 'box_extension_output';

var SafariChannel =
/*#__PURE__*/
function (_Channel) {
  _inherits(SafariChannel, _Channel);

  function SafariChannel(appName) {
    var _this;

    _classCallCheck(this, SafariChannel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SafariChannel).call(this, appName));

    _defineProperty(_assertThisInitialized(_this), "executeOperation", function () {
      var operationType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var browserToComServerTimeoutMS = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var comServerToApplicationTimeoutSec = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      return new Promise(function (resolve, reject) {
        var details = _this.buildDetailsObj(operationType, data, comServerToApplicationTimeoutSec);

        var timeoutId = setTimeout(function () {
          reject(new Error({
            status_code: CONSTANTS.REQUEST_TIMEOUT_RESPONSE_CODE
          }));
        }, browserToComServerTimeoutMS);

        _this.reqIdToPromiseMap.set(details.req_id, {
          resolve: resolve,
          rejectTimeout: timeoutId
        });

        _this.createAndDispatchAppExtensionEvent({
          detail: details
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setupSafariExtensionCommunication", function () {
      if (!_this.isAppExtensionListenerAttached) {
        _this.isAppExtensionListenerAttached = true;

        _this.document.addEventListener(OUTPUT_EVENT, _this.appExtensionEventResponseHandler);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "tearDownSafariExtensionCommunication", function () {
      if (_this.isAppExtensionListenerAttached) {
        _this.isAppExtensionListenerAttached = false;

        _this.document.removeEventListener(OUTPUT_EVENT, _this.appExtensionEventResponseHandler);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "appExtensionEventResponseHandler", function (responseVal) {
      var response = typeof responseVal.detail === 'string' ? JSON.parse(responseVal.detail) : responseVal.detail;

      if (_this.reqIdToPromiseMap.has(response.req_id)) {
        var resolveObj = _this.reqIdToPromiseMap.get(response.req_id);

        if (resolveObj) {
          clearTimeout(resolveObj.rejectTimeout);

          _this.reqIdToPromiseMap.delete(response.req_id);

          var responseData = typeof response.com_server_response.data === 'string' ? JSON.parse(response.com_server_response.data) : response.com_server_response.data;
          resolveObj.resolve(responseData);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "createAndDispatchAppExtensionEvent", function (payload) {
      var CustomEvent = _this.window.CustomEvent;
      var eventInstance = new CustomEvent(INPUT_EVENT, payload);

      _this.document.dispatchEvent(eventInstance);
    });

    _defineProperty(_assertThisInitialized(_this), "getComServerStatus", function (browserToComServerTimeoutMS, comServerToApplicationTimeoutSec) {
      return _this.executeOperation(CONSTANTS.OPERATION_STATUS, null, browserToComServerTimeoutMS, comServerToApplicationTimeoutSec);
    });

    _defineProperty(_assertThisInitialized(_this), "sendRequest", function (data, browserToComServerTimeoutMS, comServerToApplicationTimeoutSec) {
      return _this.executeOperation(CONSTANTS.OPERATION_REQUEST, data, browserToComServerTimeoutMS, comServerToApplicationTimeoutSec);
    });

    _defineProperty(_assertThisInitialized(_this), "sendCommand", function (data, browserToComServerTimeoutMS, comServerToApplicationTimeoutSec) {
      return _this.executeOperation(CONSTANTS.OPERATION_COMMAND, data, browserToComServerTimeoutMS, comServerToApplicationTimeoutSec);
    });

    _defineProperty(_assertThisInitialized(_this), "destroy", function () {
      _this.tearDownSafariExtensionCommunication();
    });

    _this.reqIdToPromiseMap = new Map();
    _this.channelName = CONSTANTS.SAFARI_CHANNEL_NAME;
    _this.window = window;
    _this.document = document;

    _this.setupSafariExtensionCommunication();

    return _this;
  }

  return SafariChannel;
}(Channel);

export default SafariChannel;
//# sourceMappingURL=SafariChannel.js.map