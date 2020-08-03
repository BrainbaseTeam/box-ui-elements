function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 
 * @file Helper for some browser utilities
 * @author Box
 */
var isDashSupported;

var Browser = /*#__PURE__*/function () {
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
     * Returns whether browser is mobile.
     *
     * @return {boolean} Whether browser is mobile
     */

  }, {
    key: "isMobile",
    value: function isMobile() {
      // Relying on the user agent to avoid desktop browsers on machines with touch screens.
      return /iphone|ipad|ipod|android|blackberry|bb10|mini|windows\sce|palm/i.test(Browser.getUserAgent());
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
     * Checks the browser for Dash support using H264 high.
     * Dash requires MediaSource extensions to exist and be applicable
     * to the H264 container (since we use H264 and not webm)
     *
     * @public
     * @param { boolean} recheck - recheck support
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
  }]);

  return Browser;
}();

export default Browser;
//# sourceMappingURL=Browser.js.map