function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 
 * @file Local storage wrapper that falls back to an in memory store
 * @author Box
 */
import Cache from './Cache';
var KEY_PREFIX = 'localStore';
var SERVICE_VERSION = '0';

var LocalStore =
/*#__PURE__*/
function () {
  /**
   * [constructor]
   *
   * @return {void}
   */
  function LocalStore() {
    _classCallCheck(this, LocalStore);

    this.memoryStore = new Cache();

    try {
      this.localStorage = window.localStorage;
      this.isLocalStorageAvailable = this.canUseLocalStorage();
    } catch (e) {
      this.isLocalStorageAvailable = false;
    }
  }
  /**
   * Builds a key for the session store
   * @private
   * @param  {string} key
   *
   * @return {string}
   */


  _createClass(LocalStore, [{
    key: "buildKey",
    value: function buildKey(key) {
      return "".concat(KEY_PREFIX, "/").concat(SERVICE_VERSION, "/").concat(key);
    }
    /**
     * Test to see browser can use local storage.
     * See http://stackoverflow.com/questions/14555347
     * Note that this will return false if we are actually hitting the maximum localStorage
     * size (5MB / 2.5M chars)
     *
     * @private
     * @return {boolean} True if browser can use localStore
     */

  }, {
    key: "canUseLocalStorage",
    value: function canUseLocalStorage() {
      if (!this.localStorage) {
        return false;
      }

      try {
        this.localStorage.setItem(this.buildKey('TestKey'), 'testValue');
        this.localStorage.removeItem(this.buildKey('TestKey'));
        return true;
      } catch (e) {
        return false;
      }
    }
    /**
     * Set an item
     *
     * @param {string} key
     * @param {*} value
     *
     * @return {void}
     */

  }, {
    key: "setItem",
    value: function setItem(key, value) {
      if (this.isLocalStorageAvailable) {
        try {
          this.localStorage.setItem(this.buildKey(key), JSON.stringify(value));
        } catch (e) {// no-op
        }
      } else {
        this.memoryStore.set(key, value);
      }
    }
    /**
     * Get an item
     *
     * @param  {string} key
     *
     * @return {*}
     */

  }, {
    key: "getItem",
    value: function getItem(key) {
      if (this.isLocalStorageAvailable) {
        try {
          var item = this.localStorage.getItem(this.buildKey(key));

          if (!item) {
            return null;
          }

          return JSON.parse(item);
        } catch (e) {
          return null;
        }
      } else {
        return this.memoryStore.get(key);
      }
    }
    /**
     * Remove an item
     *
     * @param  {string} key
     *
     * @return {void}
     */

  }, {
    key: "removeItem",
    value: function removeItem(key) {
      if (this.isLocalStorageAvailable) {
        try {
          this.localStorage.removeItem(this.buildKey(key));
        } catch (e) {// no-op
        }

        return;
      }

      this.memoryStore.unset(key);
    }
  }]);

  return LocalStore;
}();

export default LocalStore;
//# sourceMappingURL=LocalStore.js.map