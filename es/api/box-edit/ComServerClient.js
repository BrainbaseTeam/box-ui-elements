function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import Browser, { BROWSER_CONSTANTS } from './BrowserUtils';
import promiseOne from './promise';
import ActiveXChannel from './ActiveXChannel';
import Channel from './Channel';
import HTTPChannel from './HTTPChannel';
import SafariChannel from './SafariChannel';
import CONSTANTS from './constants';
var MIN_FIREFOX_VERSION_FOR_MIXED_CONTENT = 55;
var MIN_EDGE_16_VERSION_FOR_MIXED_CONTENT = '16.16299';
var MIN_EDGE_VERSION_FOR_MIXED_CONTENT = '17.17134';
var REQUEST_TIMEOUT_MS = 5000;
var boxToolsLogData;

function createHTTPChannel(appName) {
  var BOX_UNSECURE_LOCAL_BASE_URL = CONSTANTS.BOX_UNSECURE_LOCAL_BASE_URL,
      CREATED_STATUS = CONSTANTS.CREATED_STATUS,
      HTTP_CHANNEL_NAME = CONSTANTS.HTTP_CHANNEL_NAME;
  boxToolsLogData.http_channel_status = CREATED_STATUS;
  return new HTTPChannel(appName, BOX_UNSECURE_LOCAL_BASE_URL, HTTP_CHANNEL_NAME);
}

function createSafariChannel(appName) {
  var CREATED_STATUS = CONSTANTS.CREATED_STATUS;
  boxToolsLogData.safari_channel_status = CREATED_STATUS;
  return new SafariChannel(appName);
}

function createActiveXChannel(appName) {
  var CREATED_STATUS = CONSTANTS.CREATED_STATUS;
  boxToolsLogData.activex_channel_status = CREATED_STATUS;
  return new ActiveXChannel(appName, false);
}
/**
 * Returns an instance of the ActiveX Channel that runs commands in the ActiveX process synchronously.
 * This is required for running in certain embedded IE-based webviews.
 */


function createSynchronousActiveXChannel(appName) {
  var CREATED_STATUS = CONSTANTS.CREATED_STATUS;
  boxToolsLogData.activex_channel_status = CREATED_STATUS;
  return new ActiveXChannel(appName, true);
}
/**
 * Returns TRUE for MS Edge versions 17.17692+ OR
 * Returns TRUE for MS Edge version 16 greater than 16.16299
 * @returns {boolean}
 */


function isSupportedMSEdgeVersion() {
  var EDGE = BROWSER_CONSTANTS.EDGE;
  return Browser.isMinBrowser(EDGE, MIN_EDGE_VERSION_FOR_MIXED_CONTENT) || Browser.isMinBrowser(EDGE, MIN_EDGE_16_VERSION_FOR_MIXED_CONTENT) && Browser.getVersion().startsWith('16.');
}

function isUnsupportedMSEdgeVersion() {
  return Browser.isEdge() && !isSupportedMSEdgeVersion();
}

function isMixedContentAllowedOnLocalhost() {
  var CHROME = BROWSER_CONSTANTS.CHROME,
      FIREFOX = BROWSER_CONSTANTS.FIREFOX; // TODO can we do this with feature detection rather than sniffing?

  return Browser.isMinBrowser(CHROME, 53) || Browser.isMinBrowser(FIREFOX, MIN_FIREFOX_VERSION_FOR_MIXED_CONTENT) || isSupportedMSEdgeVersion();
}

function isSupportedSafariVersion() {
  return Browser.isMinBrowser(BROWSER_CONSTANTS.SAFARI, 10);
}

function isUnsupportedSafariVersion() {
  return Browser.isSafari() && !isSupportedSafariVersion();
}
/**
 * @TODO: (2018-07-24) Rename this to isFirefoxWithoutMixedContentCapability
 * since we do not have an Extension planned for the Firefox versions below 55.
 */


function isFirefoxWithExtensionsCapability() {
  return Browser.isFirefox() && !Browser.isMinBrowser(BROWSER_CONSTANTS.FIREFOX, MIN_FIREFOX_VERSION_FOR_MIXED_CONTENT);
}
/**
 * Checks if the IE version is supported
 * @returns {boolean}
 */


function isSupportedIEVersion() {
  return Browser.isMinBrowser(BROWSER_CONSTANTS.IE, 11);
}
/**
 * Checks if the user is on IE 11 and has a specific ActiveXObject plugin loaded on the page
 */


function isSupportedIEAndBoxToolsPluginAvailable() {
  // Browser Plugins Support is the check for ActiveX-like plugins
  return isSupportedIEVersion() && Browser.isIEAndSpecificBrowserPluginSupported(CONSTANTS.BOX_TOOLS_PLUGIN_NAME);
}
/**
 * Analyze the cause of Channel failure and return a rejected Promise with an error message
 */


function comServerErrorGenerator(reject) {
  var BOX_EDIT_NOT_SUPPORTED_ERROR = CONSTANTS.BOX_EDIT_NOT_SUPPORTED_ERROR,
      BOX_EDIT_SAFARI_ERROR = CONSTANTS.BOX_EDIT_SAFARI_ERROR,
      BOX_EDIT_UNINSTALLED_ERROR = CONSTANTS.BOX_EDIT_UNINSTALLED_ERROR,
      BOX_EDIT_UPGRADE_BROWSER_ERROR = CONSTANTS.BOX_EDIT_UPGRADE_BROWSER_ERROR;
  var errorMessageID = BOX_EDIT_NOT_SUPPORTED_ERROR;

  if (isMixedContentAllowedOnLocalhost()) {
    errorMessageID = BOX_EDIT_UNINSTALLED_ERROR;
  } else if (isSupportedIEVersion()) {
    errorMessageID = BOX_EDIT_UNINSTALLED_ERROR;
  } else if (Browser.isFirefox() || Browser.isChrome() || isUnsupportedSafariVersion() || isUnsupportedMSEdgeVersion() // Show UPGRADE message when MS Edge support has been enabled
  ) {
      errorMessageID = BOX_EDIT_UPGRADE_BROWSER_ERROR;
    } else if (isSupportedSafariVersion()) {
    errorMessageID = BOX_EDIT_SAFARI_ERROR;
  }

  boxToolsLogData.error_message = errorMessageID;
  return reject(new Error(errorMessageID));
}
/**
 * Default returns the timeout value of 5000ms, if a timeout is not passed.
 * When passed validates it to be a number and parse it to the lower integer value
 *
 * @param {number} [customTimeoutMS] optional field to override the timeout value passed in miliseconds
 * @returns {number}
 */


function validateAndReturnBrowserToComServerTimeout(customTimeoutMS) {
  var timeoutMS = REQUEST_TIMEOUT_MS; // validate timeout is a positive number

  if (typeof customTimeoutMS === 'number' && customTimeoutMS >= 0) {
    timeoutMS = Math.floor(customTimeoutMS);
  }

  return timeoutMS;
}
/**
 * Returns reduced timeout converted to seconds
 * We need to use a shortened timeout for the connection between local com server and application,
 * so that we will receive a message that that connection has timed out,
 * before the connection between the browser and the local com server itself times out.
 */


function shortenAndReturnComServerToApplicationTimeout(browserToComServerTimeoutMS) {
  var timeoutSec = +(browserToComServerTimeoutMS / 1000).toFixed(2);

  if (browserToComServerTimeoutMS < 2) {
    timeoutSec /= 2;
  } else {
    timeoutSec -= 1;
  }

  return timeoutSec;
}

function initBoxToolsLogData() {
  var browserName = Browser.getName();
  var browserVersion = Browser.getVersion();
  var UNCREATED_STATUS = CONSTANTS.UNCREATED_STATUS;
  boxToolsLogData = {
    box_tools_version: null,
    browser_name: browserName,
    browser_version: browserVersion,
    error_message: null,
    installation_type: null,
    http_channel_status: UNCREATED_STATUS,
    https_channel_status: UNCREATED_STATUS,
    activex_channel_status: UNCREATED_STATUS,
    safari_channel_status: UNCREATED_STATUS
  };
}

var ComServerClient =
/*#__PURE__*/
function () {
  function ComServerClient(appName) {
    _classCallCheck(this, ComServerClient);

    _defineProperty(this, "isInitialized", false);

    this.channels = [];
    this.isInitialized = true;
    initBoxToolsLogData();

    if (isMixedContentAllowedOnLocalhost()) {
      this.channels.push(createHTTPChannel(appName));
    } else if (isSupportedSafariVersion()) {
      this.channels.push(createSafariChannel(appName));
    } else if (isSupportedIEAndBoxToolsPluginAvailable()) {
      this.channels.push(createActiveXChannel(appName));
    } else if (isFirefoxWithExtensionsCapability() || isUnsupportedMSEdgeVersion()) {// @NOTE (2018-07-24) No Action - Trying all channels is not an option in this case
      // @TODO (2018-07-24) Remove this empty case from here?
    } else {
      // @NOTE: (2018-01-16) Trying all channels in case of custom useragent
      this.channels = this.channels.concat([createHTTPChannel(appName), createSafariChannel(appName), createSynchronousActiveXChannel(appName)]);
    }
  }

  _createClass(ComServerClient, [{
    key: "getComServerStatus",
    value: function getComServerStatus(customTimeoutMS) {
      var _this = this;

      var ACTIVE_STATUS = CONSTANTS.ACTIVE_STATUS;
      var browserToComServerTimeoutMS = validateAndReturnBrowserToComServerTimeout(customTimeoutMS);
      var comServerToApplicationTimeoutSec = shortenAndReturnComServerToApplicationTimeout(browserToComServerTimeoutMS);
      var shouldRejectPromiseDueToUnSupportedMSEdgeOrVersion = isUnsupportedMSEdgeVersion();
      return new Promise(function (resolve, reject) {
        if (shouldRejectPromiseDueToUnSupportedMSEdgeOrVersion) {
          return comServerErrorGenerator.call(null, reject);
        }

        if (!_this.channels.length) {
          return comServerErrorGenerator.call(null, reject);
        }

        return promiseOne(_this.channels.map(function (channel) {
          return channel.getComServerStatus(browserToComServerTimeoutMS, comServerToApplicationTimeoutSec).then(function (res) {
            _this.activeChannel = channel;

            if (res) {
              boxToolsLogData.installation_type = res.installation_type;
              boxToolsLogData.box_tools_version = res.version;
            }

            boxToolsLogData["".concat(channel.channelName, "_status")] = ACTIVE_STATUS;
            return resolve(res);
          });
        })).catch(comServerErrorGenerator.bind(null, reject));
      });
    } // TODO isSynchronous? do we need it?

  }, {
    key: "sendRequest",
    value: function sendRequest(requestData, isSynchronous, customTimeoutMS) {
      var _this2 = this;

      var browserToComServerTimeoutMS = validateAndReturnBrowserToComServerTimeout(customTimeoutMS);
      var comServerToApplicationTimeoutSec = shortenAndReturnComServerToApplicationTimeout(browserToComServerTimeoutMS);

      if (this.activeChannel) {
        return this.activeChannel.sendRequest(requestData, browserToComServerTimeoutMS, comServerToApplicationTimeoutSec);
      }

      return this.getComServerStatus().then(function () {
        return _this2.activeChannel.sendRequest(requestData, browserToComServerTimeoutMS, comServerToApplicationTimeoutSec);
      });
    }
  }, {
    key: "sendCommand",
    value: function sendCommand(data, customTimeoutMS) {
      var _this3 = this;

      var browserToComServerTimeoutMS = validateAndReturnBrowserToComServerTimeout(customTimeoutMS);
      var comServerToApplicationTimeoutSec = shortenAndReturnComServerToApplicationTimeout(browserToComServerTimeoutMS);

      if (this.activeChannel) {
        return this.activeChannel.sendCommand(data, browserToComServerTimeoutMS, comServerToApplicationTimeoutSec);
      }

      return this.getComServerStatus().then(function () {
        return _this3.activeChannel.sendCommand(data, browserToComServerTimeoutMS, comServerToApplicationTimeoutSec);
      });
    }
  }]);

  return ComServerClient;
}();

export default ComServerClient;
//# sourceMappingURL=ComServerClient.js.map