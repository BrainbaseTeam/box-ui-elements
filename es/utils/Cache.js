function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 
 * @file A simple in-memory cache
 * @author Box
 */
import _merge from 'lodash/merge';

var Cache =
/*#__PURE__*/
function () {
  /**
   * @property {*}
   */

  /**
   * [constructor]
   *
   * @return {Cache} Cache instance
   */
  function Cache() {
    _classCallCheck(this, Cache);

    this.cache = {};
  }
  /**
   * Caches a simple object in memory.
   *
   * @param {string} key The cache key
   * @param {*} value The cache value
   * @return {void}
   */


  _createClass(Cache, [{
    key: "set",
    value: function set(key, value) {
      this.cache[key] = value;
    }
    /**
     * Merges cached values for objects.
     *
     * @param {string} key The cache key
     * @param {*} value The cache value
     * @return {void}
     */

  }, {
    key: "merge",
    value: function merge(key, value) {
      if (this.has(key)) {
        this.set(key, _merge({}, this.get(key), value));
      } else {
        throw new Error("Key ".concat(key, " not in cache!"));
      }
    }
    /**
     * Deletes object from in-memory cache.
     *
     * @param {string} key The cache key
     * @return {void}
     */

  }, {
    key: "unset",
    value: function unset(key) {
      delete this.cache[key];
    }
    /**
     * Deletes all object from in-memory cache
     * that match the key as prefix.
     *
     * @param {string} prefix The cache key prefix
     * @return {void}
     */

  }, {
    key: "unsetAll",
    value: function unsetAll(prefix) {
      var _this = this;

      Object.keys(this.cache).forEach(function (key) {
        if (key.startsWith(prefix)) {
          delete _this.cache[key];
        }
      });
    }
    /**
     * Checks if cache has provided key.
     *
     * @param {string} key The cache key
     * @return {boolean} Whether the cache has key
     */

  }, {
    key: "has",
    value: function has(key) {
      return {}.hasOwnProperty.call(this.cache, key);
    }
    /**
     * Fetches a cached object from in-memory cache if available.
     *
     * @param {string} key Key of cached object
     * @return {*} Cached object
     */

  }, {
    key: "get",
    value: function get(key) {
      if (this.has(key)) {
        return this.cache[key];
      }

      return undefined;
    }
  }]);

  return Cache;
}();

export default Cache;
//# sourceMappingURL=Cache.js.map