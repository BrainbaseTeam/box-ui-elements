function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import Browser from './BrowserUtils';
import Channel from './Channel';
import CONSTANTS from './constants';
var MAX_RETRY_ATTEMPTS = 2;

var ActiveXChannel =
/*#__PURE__*/
function (_Channel) {
  _inherits(ActiveXChannel, _Channel);

  function ActiveXChannel(appName, isSynchronous) {
    var _this;

    _classCallCheck(this, ActiveXChannel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ActiveXChannel).call(this, appName));

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

        _this.executeActiveXEvent({
          detail: details
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "repairActiveXConnection", function (payload) {
      if (!Browser.isIEAndSpecificBrowserPluginSupported(CONSTANTS.BOX_TOOLS_PLUGIN_NAME)) {
        return;
      }

      if (_this.retryAttempt >= MAX_RETRY_ATTEMPTS) {
        return;
      }

      _this.retryAttempt += 1;
      setTimeout(function () {
        _this.executeActiveXEvent(payload);
      }, 100);
    });

    _defineProperty(_assertThisInitialized(_this), "executeActiveXEvent", function (payload) {
      var activeX = _this.createActiveXObjectJSRef();

      var hasExecuteSyncAPI = 'ExecuteSync' in activeX;

      try {
        if (_this.isSynchronous && hasExecuteSyncAPI) {
          activeX.ExecuteSync(JSON.stringify(payload));
        } else {
          activeX.Execute(JSON.stringify(payload));
        }
      } catch (ex) {
        _this.repairActiveXConnection(payload);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "createActiveXObjectJSRef", function () {
      var ActiveXObject = _this.window.ActiveXObject;
      return new ActiveXObject(CONSTANTS.BOX_TOOLS_PLUGIN_NAME);
    });

    _defineProperty(_assertThisInitialized(_this), "setupActiveXCommunication", function () {
      if (!_this.isActiveXExtensionListenerAttached) {
        // attach the event listener to App Extension output events
        _this.document.addEventListener(CONSTANTS.OUTPUT_EVENT, _this.appExtensionEventResponseHandler);

        _this.isActiveXExtensionListenerAttached = true;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "tearDownActiveXCommunication", function () {
      if (_this.isActiveXExtensionListenerAttached) {
        // remove the event listener for App Extension output events
        _this.document.removeEventListener(CONSTANTS.OUTPUT_EVENT, _this.appExtensionEventResponseHandler);

        _this.isActiveXExtensionListenerAttached = false;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "appExtensionEventResponseHandler", function (responseVal) {
      if (_this.retryAttempt > 0) {
        _this.retryAttempt = 0;
      }

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
      _this.tearDownActiveXCommunication();
    });

    _this.isSynchronous = isSynchronous;
    _this.channelName = CONSTANTS.ACTIVEX_CHANNEL_NAME;
    _this.reqIdToPromiseMap = new Map();
    _this.isActiveXExtensionListenerAttached = false;
    _this.retryAttempt = 0;
    _this.document = document;
    _this.window = window;

    _this.setupActiveXCommunication();

    return _this;
  }

  return ActiveXChannel;
}(Channel);

export { MAX_RETRY_ATTEMPTS };
export default ActiveXChannel;
//# sourceMappingURL=ActiveXChannel.js.map