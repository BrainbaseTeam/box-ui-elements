function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import LocalStore from '../../utils/LocalStore';
import Channel from './Channel';
import { get as getCookie, set as setCookie } from './cookies';
var GET = 'GET';
var POST = 'POST';
var YEAR_MS = 31536000000;
var DEFAULT_PRIMARY_PORT = 17223;
var DEFAULT_FALLBACK_PORT = 17224;
var CONTENT_TYPE_HEADER = 'Content-Type';
var CONTENT_TYPE_VALUE = 'text/plain; charset=UTF-8';
var STATUS_NOT_RUNNING = 'notrunning';
var localStore = new LocalStore();

function shouldUseFallbackFirst() {
  return !!localStore.getItem('comUseFallback');
}

function saveFallbackPortPreference() {
  localStore.setItem('comUseFallback', 1);
}

function clearFallbackPortPreference() {
  localStore.removeItem('comUseFallback');
}

function getPreferredPortOrdering() {
  if (shouldUseFallbackFirst()) {
    return {
      primary: DEFAULT_FALLBACK_PORT,
      fallback: DEFAULT_PRIMARY_PORT
    };
  }

  return {
    primary: DEFAULT_PRIMARY_PORT,
    fallback: DEFAULT_FALLBACK_PORT
  };
}

var HTTPChannel =
/*#__PURE__*/
function (_Channel) {
  _inherits(HTTPChannel, _Channel);

  function HTTPChannel(_appName, _url, channelName) {
    var _this;

    _classCallCheck(this, HTTPChannel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HTTPChannel).call(this, _appName));

    _defineProperty(_assertThisInitialized(_this), "createCORSRequest", function (method, url) {
      var xhr;

      try {
        var _XMLHttpRequest = _this.window.XMLHttpRequest;
        xhr = new _XMLHttpRequest();
        xhr.open(method, url, true);
        return xhr;
      } catch (ex) {
        if (_this.retryCounter < 3) {
          _this.retryCounter += 1;
          return _this.createCORSRequest(method, url);
        }

        throw new Error('could not create xhr');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getComServerStatusInstallationPromise", function (timeoutMS) {
      var resolve;
      var reject;
      var comServerInstallationPromise = new Promise(function (res, rej) {
        resolve = res;
        reject = rej;
      });

      var resolveWithValidPort = function resolveWithValidPort(port, res) {
        _this.currentPort = port;

        if (port === DEFAULT_PRIMARY_PORT) {
          clearFallbackPortPreference();
        } else {
          saveFallbackPortPreference();
        }

        _this.comServerInstallationPromiseRejected = false;
        resolve(res);
      };

      var portPreferences = getPreferredPortOrdering();
      var primaryPort = portPreferences.primary;
      var fallbackPort = portPreferences.fallback; // Try primary port first

      _this.checkInstallStatus(primaryPort, timeoutMS).then(resolveWithValidPort.bind(_assertThisInitialized(_this), primaryPort)).catch(function (err) {
        // If com server returned that the port is available but the app is not running, reject
        if (err === STATUS_NOT_RUNNING) {
          _this.comServerInstallationPromiseRejected = true;
          reject();
          return;
        } // Only check secondary, if necessary, otherwise this throws a browser error in console


        _this.checkInstallStatus(fallbackPort, timeoutMS).then(resolveWithValidPort.bind(_assertThisInitialized(_this), fallbackPort)).catch(function () {
          _this.comServerInstallationPromiseRejected = true;
          reject();
        });
      });

      return comServerInstallationPromise;
    });

    _defineProperty(_assertThisInitialized(_this), "sendComServerRequest", function (method, url, data, timeoutMS) {
      return new Promise(function (resolve, reject) {
        try {
          var request = _this.createCORSRequest(method, url);

          request.setRequestHeader(CONTENT_TYPE_HEADER, CONTENT_TYPE_VALUE);

          request.onload = function () {
            resolve(request);
          };

          request.onerror = function () {
            reject(request);
          };

          if (timeoutMS > 0) {
            request.timeout = timeoutMS;

            request.ontimeout = function () {
              reject(request);
            };
          }

          setTimeout(function () {
            request.send(data);
          }, 0);
        } catch (err) {
          reject();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "checkInstallStatus", function (port, timeoutMS) {
      return _this.sendComServerRequest(GET, "".concat(_this.url).concat(port, "/status"), null, timeoutMS).then(function (request) {
        var response = JSON.parse(request.responseText);

        if (response.running) {
          return response;
        }

        _this.comServerInstallationPromiseRejected = true;
        throw new Error(STATUS_NOT_RUNNING);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getComChannel", function (appName) {
      return getCookie("".concat(appName, "-bgp-id"));
    });

    _defineProperty(_assertThisInitialized(_this), "setComChannel", function (appName) {
      var bgpId = _this.getComChannel(appName) || _this.generateId();

      var comChannelName = "bgp-".concat(bgpId);
      var aYearFromNow = new Date().getTime() + YEAR_MS;
      setCookie("".concat(appName, "-bgp-id"), bgpId, aYearFromNow);
      setCookie("bgp-".concat(bgpId), 'generic', aYearFromNow);
      return comChannelName;
    });

    _defineProperty(_assertThisInitialized(_this), "getComServerStatus", function (timeoutMS) {
      if (!_this.comServerInstallationPromise || _this.comServerInstallationPromiseRejected) {
        // Null out the promise and fetch status again (handles the case where user installed box edit within the same page load)
        _this.comServerInstallationPromise = null;
        _this.comServerInstallationPromise = _this.getComServerStatusInstallationPromise(timeoutMS);
        return _this.comServerInstallationPromise;
      }

      return _this.comServerInstallationPromise;
    });

    _defineProperty(_assertThisInitialized(_this), "sendRequest", function (data, browserToComServerTimeoutMS, comServerToApplicationTimeoutSec) {
      var url = "".concat(_this.url).concat(_this.currentPort, "/application_request?application=").concat(_this.appName, "&com=").concat(_this.comChannelName, "&timeout=").concat(comServerToApplicationTimeoutSec);
      return _this.sendComServerRequest(POST, url, data, browserToComServerTimeoutMS).then(function (results) {
        // TODO: does the error object need to be richer?
        var response = JSON.parse(results.responseText);

        if (response.response_type && response.response_type === 'error') {
          throw new Error("Communication error: ".concat(response.message));
        }

        return response;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "sendCommand", function (data, browserToComServerTimeoutMS, comServerToApplicationTimeoutSec) {
      var url = "".concat(_this.url).concat(_this.currentPort, "/application_command?application=").concat(_this.appName, "&com=").concat(_this.comChannelName, "&timeout=").concat(comServerToApplicationTimeoutSec);
      return _this.sendComServerRequest(POST, url, data, browserToComServerTimeoutMS).then(function (results) {
        return JSON.parse(results.responseText);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "generateId", function () {
      var time = new Date().getTime();
      return 'xxxxxxxx'.replace(/x/g, function () {
        // Generate random number between 1 and 16.
        // Using time for added entropy.
        var rand = Math.floor((time + Math.random() * 16) % 16); // Convert number to a HEX

        return rand.toString(16);
      });
    });

    _this.url = _url;
    _this.comChannelName = _this.setComChannel(_appName);
    _this.channelName = channelName;
    _this.comServerInstallationPromise = null;
    _this.comServerInstallationPromiseRejected = false;
    _this.retryCounter = 0;
    _this.sendCount = 0;
    _this.currentPort = getPreferredPortOrdering().primary;
    _this.window = window;
    return _this;
  }

  return HTTPChannel;
}(Channel);

export default HTTPChannel;
//# sourceMappingURL=HTTPChannel.js.map