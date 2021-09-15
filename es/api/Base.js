function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Base class with utility methods for API calls
 * @author Box
 */
import noop from 'lodash/noop';
import Xhr from '../utils/Xhr';
import Cache from '../utils/Cache';
import UploadsReachability from './uploads/UploadsReachability';
import { getTypedFileId } from '../utils/file';
import { getBadItemError, getBadPermissionsError } from '../utils/error';
import { DEFAULT_HOSTNAME_API, DEFAULT_HOSTNAME_UPLOAD, HTTP_GET, HTTP_POST, HTTP_PUT, HTTP_DELETE } from '../constants';

var Base =
/*#__PURE__*/
function () {
  /**
   * @property {Cache}
   */

  /**
   * @property {boolean}
   */

  /**
   * @property {Xhr}
   */

  /**
   * @property {string}
   */

  /**
   * @property {string}
   */

  /**
   * @property {*}
   */

  /**
   * @property {Function}
   */

  /**
   * @property {Function}
   */

  /**
   * @property {string}
   */

  /**
   * @property {Function}
   */

  /**
   * @property {Function}
   */

  /**
   * @property {UploadsReachability}
   */

  /**
   * [constructor]
   *
   * @param {Object} [options]
   * @param {string} [options.token] - Auth token
   * @param {string} [options.sharedLink] - Shared link
   * @param {string} [options.sharedLinkPassword] - Shared link password
   * @param {string} [options.apiHost] - Api host
   * @param {string} [options.uploadHost] - Upload host name
   * @return {Base} Base instance
   */
  function Base(options) {
    var _this = this;

    _classCallCheck(this, Base);

    _defineProperty(this, "successHandler", function (data) {
      if (!_this.isDestroyed() && typeof _this.successCallback === 'function') {
        _this.successCallback(data);
      }
    });

    _defineProperty(this, "errorHandler", function (error) {
      if (!_this.isDestroyed() && typeof _this.errorCallback === 'function') {
        var response = error.response;

        if (response && response.data) {
          _this.errorCallback(response.data, _this.errorCode);
        } else {
          _this.errorCallback(error, _this.errorCode);
        }
      }
    });

    this.cache = options.cache || new Cache();
    this.apiHost = options.apiHost || DEFAULT_HOSTNAME_API;
    this.uploadHost = options.uploadHost || DEFAULT_HOSTNAME_UPLOAD; // @TODO: avoid keeping another copy of data in this.options

    this.options = _objectSpread({}, options, {
      apiHost: this.apiHost,
      uploadHost: this.uploadHost,
      cache: this.cache
    });
    this.xhr = new Xhr(this.options);
    this.destroyed = false;
    this.consoleLog = !!options.consoleLog && !!window.console ? window.console.log || noop : noop;
    this.consoleError = !!options.consoleError && !!window.console ? window.console.error || noop : noop;
    this.uploadsReachability = new UploadsReachability();
  }
  /**
   * [destructor]
   *
   * @return {void}
   */


  _createClass(Base, [{
    key: "destroy",
    value: function destroy() {
      this.xhr.abort();
      this.destroyed = true;
    }
    /**
     * Asks the API if its destructor has been called
     *
     * @return {void}
     */

  }, {
    key: "isDestroyed",
    value: function isDestroyed() {
      return this.destroyed;
    }
    /**
     * Checks that our desired API call has sufficient permissions and an item ID
     *
     * @param {string} permissionToCheck - Permission to check
     * @param {Object} permissions - Permissions object
     * @param {string} id - Item id
     * @return {void}
     */

  }, {
    key: "checkApiCallValidity",
    value: function checkApiCallValidity(permissionToCheck, permissions, id) {
      if (!id || !permissions) {
        throw getBadItemError();
      }

      var permission = permissions[permissionToCheck];

      if (!permission) {
        throw getBadPermissionsError();
      }
    }
    /**
     * Base URL for api
     *
     * @return {string} base url
     */

  }, {
    key: "getBaseApiUrl",
    value: function getBaseApiUrl() {
      var suffix = this.apiHost.endsWith('/') ? '2.0' : '/2.0';
      return "".concat(this.apiHost).concat(suffix);
    }
    /**
     * Base URL for api uploads
     *
     * @return {string} base url
     */

  }, {
    key: "getBaseUploadUrl",
    value: function getBaseUploadUrl() {
      var suffix = this.uploadHost.endsWith('/') ? 'api/2.0' : '/api/2.0';
      return "".concat(this.uploadHost).concat(suffix);
    }
    /**
     * Gets the cache instance
     *
     * @return {Cache} cache instance
     */

  }, {
    key: "getCache",
    value: function getCache() {
      return this.cache;
    }
    /**
     * Generic success handler
     *
     * @param {Object} data - The response data
     */

  }, {
    key: "getUrl",

    /**
     * Gets the URL for the API, meant to be overridden
     * @param {string} id - The item id
     */

    /* eslint-disable no-unused-vars */
    value: function getUrl(id) {
      /* eslint-enable no-unused-vars */
      throw new Error('Implement me!');
    }
    /**
     * Formats an API entry for use in components
     * @param {string} entry - an API response entry
     */

    /* eslint-disable no-unused-vars */

  }, {
    key: "format",
    value: function format(entry) {
      /* eslint-enable no-unused-vars */
      throw new Error('Implement me!');
    }
    /**
     * Generic API GET
     *
     * @param {string} id - The file id
     * @param {Function} successCallback - The success callback
     * @param {Function} errorCallback - The error callback
     * @param {Object} requestData - additional request data
     * @param {string} url - API url
     * @returns {Promise}
     */

  }, {
    key: "get",
    value: function get(_ref) {
      var id = _ref.id,
          successCallback = _ref.successCallback,
          errorCallback = _ref.errorCallback,
          requestData = _ref.requestData,
          url = _ref.url;
      var apiUrl = url || this.getUrl(id);
      return this.makeRequest(HTTP_GET, id, apiUrl, successCallback, errorCallback, requestData);
    }
    /**
     * Generic API POST
     *
     * @param {string} id - The file id
     * @param {string} url - The url to post to
     * @param {Object} data - The data to post
     * @param {Function} successCallback - The success callback
     * @param {Function} errorCallback - The error callback
     */

  }, {
    key: "post",
    value: function post(_ref2) {
      var id = _ref2.id,
          url = _ref2.url,
          data = _ref2.data,
          successCallback = _ref2.successCallback,
          errorCallback = _ref2.errorCallback;
      return this.makeRequest(HTTP_POST, id, url, successCallback, errorCallback, data);
    }
    /**
     * Generic API PUT
     *
     * @param {string} id - The file id
     * @param {string} url - The url to put to
     * @param {Object} data - The data to put
     * @param {Function} successCallback - The success callback
     * @param {Function} errorCallback - The error callback
     */

  }, {
    key: "put",
    value: function put(_ref3) {
      var id = _ref3.id,
          url = _ref3.url,
          data = _ref3.data,
          successCallback = _ref3.successCallback,
          errorCallback = _ref3.errorCallback;
      return this.makeRequest(HTTP_PUT, id, url, successCallback, errorCallback, data);
    }
    /**
     * Generic API DELETE
     *
     * @param {string} id - The file id
     * @param {string} url - The url of the item to delete
     * @param {Function} successCallback - The success callback
     * @param {Function} errorCallback - The error callback
     * @param {Object} data optional data to delete
     */

  }, {
    key: "delete",
    value: function _delete(_ref4) {
      var id = _ref4.id,
          url = _ref4.url,
          data = _ref4.data,
          successCallback = _ref4.successCallback,
          errorCallback = _ref4.errorCallback;
      return this.makeRequest(HTTP_DELETE, id, url, successCallback, errorCallback, data);
    }
    /**
     * Generic API CRUD operations
     *
     * @param {string} method - which REST method to execute (GET, POST, PUT, DELETE)
     * @param {string} id - The file id
     * @param {string} url - The url of the item to operate on
     * @param {Function} successCallback - The success callback
     * @param {Function} errorCallback - The error callback
     * @param {Object} requestData - Optional info to be added to the API call such as params or request body data
     */

  }, {
    key: "makeRequest",
    value: function () {
      var _makeRequest = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(method, id, url, successCallback, errorCallback) {
        var requestData,
            xhrMethod,
            _ref5,
            _data,
            _args = arguments;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                requestData = _args.length > 5 && _args[5] !== undefined ? _args[5] : {};

                if (!this.isDestroyed()) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                this.successCallback = successCallback;
                this.errorCallback = errorCallback; // $FlowFixMe

                xhrMethod = this.xhr[method.toLowerCase()].bind(this.xhr);
                _context.prev = 6;
                _context.next = 9;
                return xhrMethod(_objectSpread({
                  id: getTypedFileId(id),
                  url: url
                }, requestData));

              case 9:
                _ref5 = _context.sent;
                _data = _ref5.data;
                this.successHandler(_data);
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](6);
                this.errorHandler(_context.t0);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[6, 14]]);
      }));

      function makeRequest(_x, _x2, _x3, _x4, _x5) {
        return _makeRequest.apply(this, arguments);
      }

      return makeRequest;
    }()
  }]);

  return Base;
}();

export default Base;
//# sourceMappingURL=Base.js.map