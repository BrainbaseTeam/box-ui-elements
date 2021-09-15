function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 
 * @file Helper for Box uploads reachability test
 * @author Box
 */
import axios from 'axios';
import LocalStore from '../../utils/LocalStore';
import { DEFAULT_HOSTNAME_UPLOAD, DEFAULT_HOSTNAME_UPLOAD_APP, HEADER_CONTENT_TYPE } from '../../constants';
var CACHED_RESULTS_LOCAL_STORE_KEY = 'bcu-uploads-reachability-cached-results';

var UploadsReachability =
/*#__PURE__*/
function () {
  /**
   * [constructor]
   */
  function UploadsReachability() {
    _classCallCheck(this, UploadsReachability);

    this.localStore = new LocalStore();
    this.cachedResults = {}; // Populate cachedResults with valid values from the local store, and then save the new
    // cachedResults back to local store.
    // This cleanup of invalid entries is not strictly necessary to maintain correctness,
    // but if we don't do this cleanup results may accumulate in local storage forever.

    this.populateCachedResultsWithValidLocalStoreValues();
    this.saveCachedResultsToLocalStore();
  }
  /**
   * Returns existing reachability results from local store
   *
   * @private
   * @return {?Object} The results, or null if there was a problem reading the value from local store
   */


  _createClass(UploadsReachability, [{
    key: "getCachedResultsFromLocalStore",
    value: function getCachedResultsFromLocalStore() {
      return this.localStore.getItem(CACHED_RESULTS_LOCAL_STORE_KEY);
    }
    /**
     * Saves the cachedResults variable as a JSON string in local store.
     *
     * @private
     * @return {void}
     */

  }, {
    key: "saveCachedResultsToLocalStore",
    value: function saveCachedResultsToLocalStore() {
      this.localStore.setItem(CACHED_RESULTS_LOCAL_STORE_KEY, this.cachedResults);
    }
    /**
     * Returns true if the given cached result is still valid (i.e. it has not expired yet)
     *
     * @private
     * @param {StringAnyMap} result - A result object for one host
     * @return {boolean} Whether or not the result is valid
     */

  }, {
    key: "isCachedHostValid",
    value: function isCachedHostValid(result) {
      return result.expirationTimestampMS > Date.now();
    }
    /**
     * Returns the cached result for the given uploadHost
     *
     * @private
     * @param {string} uploadHost - The host URL
     * @return {null|StringAnyMap} The result object or null if there isn't one
     */

  }, {
    key: "getCachedResult",
    value: function getCachedResult(uploadHost) {
      if (uploadHost in this.cachedResults) {
        var result = this.cachedResults[uploadHost];

        if (this.isCachedHostValid(result)) {
          return result;
        }
      }

      return null;
    }
    /**
     * Updates a cached result. Changes both the in-memory cachedResult variable and what's stored in local store
     *
     * @private
     * @param {string} uploadHost - The host URL that was tested
     * @param {boolean} isHostReachable - Whether or not the host was reachable
     * @return {void}
     */

  }, {
    key: "updateCachedResult",
    value: function updateCachedResult(uploadHost, isHostReachable) {
      this.cachedResults[uploadHost] = {
        isReachable: isHostReachable,
        expirationTimestampMS: Date.now() + 1000 * 86400
      };
      this.saveCachedResultsToLocalStore();
    }
    /**
     * Adds to the cachedResults object with valid entries from local storage
     *
     * @private
     * @return {void}
     */

  }, {
    key: "populateCachedResultsWithValidLocalStoreValues",
    value: function populateCachedResultsWithValidLocalStoreValues() {
      var _this = this;

      var localStoreResults = this.getCachedResultsFromLocalStore();

      if (!localStoreResults) {
        return;
      }

      Object.keys(localStoreResults).forEach(function (uploadHost) {
        var result = localStoreResults[uploadHost];

        if (_this.isCachedHostValid(result)) {
          _this.cachedResults[uploadHost] = result;
        }
      });
    }
    /**
     * Returns the host URLs that, according to the cached reachability test results, are unreachable
     *
     * @return {Array} The unreachable host URLs
     */

  }, {
    key: "getUnreachableHostsUrls",
    value: function getUnreachableHostsUrls() {
      var _this2 = this;

      var unreachableHosts = [];

      if (!this.cachedResults) {
        return unreachableHosts;
      }

      Object.keys(this.cachedResults).forEach(function (uploadHost) {
        var value = _this2.cachedResults[uploadHost];

        if (_this2.isCachedHostValid(value) && !value.isReachable) {
          unreachableHosts.push(uploadHost);
        }
      });
      return unreachableHosts;
    }
    /**
     * Determines whether the given host is reachable by either making a test request to the uploadHost
     * or returning the result of the last reachability test it did
     *
     * @param {string} uploadHost - The upload host URL that will be stored in the cached test result and returned in
     * getUnreachableHostsUrls() if test fails (this is usually a prefix of the uploadUrl)
     * @return {Promise<boolean>} Promise that resolved to true if the host is reachable, false if it is not
     */

  }, {
    key: "isReachable",
    value: function () {
      var _isReachable = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(uploadHost) {
        var cachedResult, isHostReachable;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(uploadHost === "".concat(DEFAULT_HOSTNAME_UPLOAD, "/") || uploadHost === "".concat(DEFAULT_HOSTNAME_UPLOAD_APP, "/"))) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", true);

              case 2:
                cachedResult = this.getCachedResult(uploadHost);

                if (!cachedResult) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", cachedResult.isReachable);

              case 5:
                _context.next = 7;
                return this.makeReachabilityRequest(uploadHost);

              case 7:
                isHostReachable = _context.sent;
                this.updateCachedResult(uploadHost, isHostReachable);
                return _context.abrupt("return", isHostReachable);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function isReachable(_x) {
        return _isReachable.apply(this, arguments);
      }

      return isReachable;
    }()
    /**
     * Determines if the given uploadHost is reachable by making a test upload request to it.
     * Does not read or modify any cached results.
     *
     * @param {string} uploadHost - The upload host url to make a test request against
     * @return {Promise<boolean>}
     */

  }, {
    key: "makeReachabilityRequest",
    value: function () {
      var _makeReachabilityRequest = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(uploadHost) {
        var _headers;

        var url, headers, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = "".concat(uploadHost, "html5?reachability_test=run");
                headers = (_headers = {}, _defineProperty(_headers, HEADER_CONTENT_TYPE, 'application/x-www-form-urlencoded; charset=UTF-8'), _defineProperty(_headers, 'X-File-Name', 'reachability_pseudofile.txt'), _defineProperty(_headers, 'X-File-Size', '1234'), _headers);
                data = 'reachability_file=test_file_data';
                _context2.prev = 3;
                _context2.next = 6;
                return axios.post(url, data, {
                  headers: headers
                });

              case 6:
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](3);
                return _context2.abrupt("return", false);

              case 11:
                return _context2.abrupt("return", true);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 8]]);
      }));

      function makeReachabilityRequest(_x2) {
        return _makeReachabilityRequest.apply(this, arguments);
      }

      return makeReachabilityRequest;
    }()
  }]);

  return UploadsReachability;
}();

export default UploadsReachability;
//# sourceMappingURL=UploadsReachability.js.map