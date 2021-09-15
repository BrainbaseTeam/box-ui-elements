function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 
 * @file Helper for some browser utilities
 * @author Box
 */
var isDashSupported;

var Browser =
/*#__PURE__*/
function () {
  function Browser() {
    _classCallCheck(this, Browser);
  }

  _createClass(Browser, null, [{
    key: "getUserAgent",

    /**
     * Returns the user agent.
     * Helps in mocking out.
     *
     * @return {String} navigator userAgent
     */
    value: function getUserAgent() {
      return global.navigator.userAgent;
    }
    /**
     * Returns whether browser is mobile, including tablets.
     *
     * We rely on user agent (UA) to avoid matching desktops with touchscreens.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent#mobile_tablet_or_desktop
     *
     * @return {boolean} Whether browser is mobile
     */

  }, {
    key: "isMobile",
    value: function isMobile() {
      var userAgent = Browser.getUserAgent();
      return /iphone|ipad|ipod|android|blackberry|bb10|mini|windows\sce|palm/i.test(userAgent) || /Mobi/i.test(userAgent);
    }
    /**
     * Returns whether browser is IE.
     *
     * @return {boolena} Whether browser is IE
     */

  }, {
    key: "isIE",
    value: function isIE() {
      return /Trident/i.test(Browser.getUserAgent());
    }
    /**
     * Returns whether browser is Safari.
     *
     * @return {boolean} Whether browser is Safari
     */

  }, {
    key: "isSafari",
    value: function isSafari() {
      var userAgent = Browser.getUserAgent();
      return /AppleWebKit/i.test(userAgent) && !/Chrome\//i.test(userAgent);
    }
    /**
     * Returns whether browser is Mobile Safari.
     *
     * @see https://developer.chrome.com/docs/multidevice/user-agent/
     * @return {boolean} Whether browser is Mobile Safari
     */

  }, {
    key: "isMobileSafari",
    value: function isMobileSafari() {
      return Browser.isMobile() && Browser.isSafari() && !Browser.isMobileChromeOniOS();
    }
    /**
     * Returns whether browser is Mobile Chrome on iOS.
     *
     * @see https://developer.chrome.com/docs/multidevice/user-agent/
     * @return {boolean} Whether browser is Mobile Chrome on iOS
     */

  }, {
    key: "isMobileChromeOniOS",
    value: function isMobileChromeOniOS() {
      var userAgent = Browser.getUserAgent();
      return Browser.isMobile() && /AppleWebKit/i.test(userAgent) && /CriOS\//i.test(userAgent);
    }
    /**
     * Checks the browser for Dash support using H264 high.
     * Dash requires MediaSource extensions to exist and be applicable
     * to the H264 container (since we use H264 and not webm)
     *
     * @public
     * @param {boolean} recheck - recheck support
     * @return {boolean} true if dash is usable
     */

  }, {
    key: "canPlayDash",
    value: function canPlayDash() {
      var recheck = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (typeof isDashSupported === 'undefined' || recheck) {
        var mse = global.MediaSource;
        isDashSupported = !!mse && typeof mse.isTypeSupported === 'function' && mse.isTypeSupported('video/mp4; codecs="avc1.64001E"');
      }

      return isDashSupported;
    }
    /**
     * Checks whether the browser has support for the Clipboard API. This new API supercedes
     * the `execCommand`-based API and uses Promises for detecting whether it works or not.
     *
     * This check determines if the browser can support writing to the clipboard.
     * @see https://www.w3.org/TR/clipboard-apis/#async-clipboard-api
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Clipboard
     *
     * @return {boolean} whether writing to the clipboard is possible
     */

  }, {
    key: "canWriteToClipboard",
    value: function canWriteToClipboard() {
      return !!(global.navigator.clipboard && global.navigator.clipboard.writeText);
    }
    /**
     * Checks whether the browser has support for the Clipboard API. This new API supercedes
     * the `execCommand`-based API and uses Promises for detecting whether it works or not.
     *
     * This check determines if the browser can support reading from the clipboard.
     * @see https://www.w3.org/TR/clipboard-apis/#async-clipboard-api
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Clipboard
     *
     * @return {boolean} whether reading from the clipboard is possible
     */

  }, {
    key: "canReadFromClipboard",
    value: function canReadFromClipboard() {
      return !!(global.navigator.clipboard && global.navigator.clipboard.readText);
    }
  }]);

  return Browser;
}();

export default Browser;
//# sourceMappingURL=Browser.js.map