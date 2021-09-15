function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * 
 * @file Helper for the box web link api
 * @author Box
 */
import Item from './Item';
import { CACHE_PREFIX_WEBLINK, ERROR_CODE_FETCH_WEBLINK } from '../constants';
import { findMissingProperties } from '../utils/fields';

var WebLink =
/*#__PURE__*/
function (_Item) {
  _inherits(WebLink, _Item);

  function WebLink() {
    _classCallCheck(this, WebLink);

    return _possibleConstructorReturn(this, _getPrototypeOf(WebLink).apply(this, arguments));
  }

  _createClass(WebLink, [{
    key: "getCacheKey",

    /**
     * Creates a key for the cache
     *
     * @param {string} id folder id
     * @return {string} key
     */
    value: function getCacheKey(id) {
      return "".concat(CACHE_PREFIX_WEBLINK).concat(id);
    }
    /**
     * URL for weblink api
     *
     * @param {string} [id] optional file id
     * @return {string} base url for files
     */

  }, {
    key: "getUrl",
    value: function getUrl(id) {
      var suffix = id ? "/".concat(id) : '';
      return "".concat(this.getBaseApiUrl(), "/web_links").concat(suffix);
    }
    /**
     * Gets a Box weblink
     *
     * @param {string} id - Weblink id
     * @param {(newItem: BoxItem) => void} successCallback - Function to call with results
     * @param {Function} errorCallback - Function to call with errors
     * @param {Array<String>} fields - Array of field strings
     * @returns {Promise}
     */

  }, {
    key: "getWeblink",
    value: function () {
      var _getWeblink = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(id, successCallback, errorCallback) {
        var _ref,
            fields,
            cache,
            key,
            missingFields,
            xhrOptions,
            _ref2,
            data,
            _args = arguments;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ref = _args.length > 3 && _args[3] !== undefined ? _args[3] : {}, fields = _ref.fields;

                if (!this.isDestroyed()) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                cache = this.getCache();
                key = this.getCacheKey(id);
                this.errorCode = ERROR_CODE_FETCH_WEBLINK;
                this.successCallback = successCallback;
                this.errorCallback = errorCallback;

                if (!cache.has(key)) {
                  _context.next = 13;
                  break;
                }

                missingFields = findMissingProperties(cache.get(key), fields);

                if (!(missingFields.length === 0)) {
                  _context.next = 13;
                  break;
                }

                successCallback(cache.get(key));
                return _context.abrupt("return");

              case 13:
                xhrOptions = {
                  url: this.getUrl(id)
                };

                if (fields) {
                  xhrOptions.params = {
                    fields: fields.toString()
                  };
                }

                _context.prev = 15;
                _context.next = 18;
                return this.xhr.get(xhrOptions);

              case 18:
                _ref2 = _context.sent;
                data = _ref2.data;

                if (!this.isDestroyed()) {
                  _context.next = 22;
                  break;
                }

                return _context.abrupt("return");

              case 22:
                // Cache check is again done since this code is executed async
                if (cache.has(key)) {
                  cache.merge(key, data);
                } else {
                  // If there was nothing in the cache
                  cache.set(key, data);
                }

                this.successHandler(cache.get(key));
                _context.next = 29;
                break;

              case 26:
                _context.prev = 26;
                _context.t0 = _context["catch"](15);
                this.errorHandler(_context.t0);

              case 29:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[15, 26]]);
      }));

      function getWeblink(_x, _x2, _x3) {
        return _getWeblink.apply(this, arguments);
      }

      return getWeblink;
    }()
  }]);

  return WebLink;
}(Item);

export default WebLink;
//# sourceMappingURL=WebLink.js.map