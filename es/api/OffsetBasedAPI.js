function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
 * @file class for Box offset based API's to inherit common functionality from
 * @author Box
 */
import { getTypedFileId } from '../utils/file';
import Base from './Base';
import { DEFAULT_FETCH_START, DEFAULT_FETCH_END } from '../constants';

var OffsetBasedApi =
/*#__PURE__*/
function (_Base) {
  _inherits(OffsetBasedApi, _Base);

  function OffsetBasedApi() {
    _classCallCheck(this, OffsetBasedApi);

    return _possibleConstructorReturn(this, _getPrototypeOf(OffsetBasedApi).apply(this, arguments));
  }

  _createClass(OffsetBasedApi, [{
    key: "getQueryParameters",

    /**
     * @property {Data}
     */

    /**
     * Gets query params for the API
     *
     * @param {number} offset the offset from the start to start fetching at
     * @param {number} limit the number of items to fetch
     * @param {array} fields the fields to fetch
     * @return the query params object
     */
    value: function getQueryParameters(offset, limit, fields) {
      var queryParams = {
        offset: offset,
        limit: limit
      };

      if (fields && fields.length > 0) {
        queryParams.fields = fields.toString();
      }

      return queryParams;
    }
    /**
     * Determines if the API has more items to fetch
     *
     * @param {number} offset the offset from the start to start fetching at
     * @param {number} totalCount the total number of items
     * @return {boolean} true if there are more items
     */

  }, {
    key: "hasMoreItems",
    value: function hasMoreItems(offset, totalCount) {
      return totalCount === undefined || offset < totalCount;
    }
    /**
     * Helper for get
     *
     * @param {string} id the file id
     * @param {number} offset the offset from the start to start fetching at
     * @param {number} limit the number of items to fetch
     * @param {array} fields the fields to fetch
     * @param {boolean} shouldFetchAll true if should get all the pages before calling the sucessCallback
     * @private
     */

  }, {
    key: "offsetGetRequest",
    value: function () {
      var _offsetGetRequest = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(id, offset, limit, shouldFetchAll, fields) {
        var params, url, _ref, data, entries, totalCount, nextOffset;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.isDestroyed()) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.prev = 2;
                params = this.getQueryParameters(offset, limit, fields);
                url = this.getUrl(id);
                _context.next = 7;
                return this.xhr.get({
                  url: url,
                  id: getTypedFileId(id),
                  params: params
                });

              case 7:
                _ref = _context.sent;
                data = _ref.data;
                entries = this.data ? this.data.entries : [];
                this.data = _objectSpread({}, data, {
                  entries: entries.concat(data.entries)
                });
                totalCount = data.total_count;
                nextOffset = offset + limit;

                if (!(shouldFetchAll && this.hasMoreItems(nextOffset, totalCount))) {
                  _context.next = 16;
                  break;
                }

                this.offsetGetRequest(id, nextOffset, limit, shouldFetchAll, fields);
                return _context.abrupt("return");

              case 16:
                this.successHandler(this.data);
                _context.next = 22;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](2);
                this.errorHandler(_context.t0);

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 19]]);
      }));

      function offsetGetRequest(_x, _x2, _x3, _x4, _x5) {
        return _offsetGetRequest.apply(this, arguments);
      }

      return offsetGetRequest;
    }()
    /**
     * Offset based API get
     *
     * @param {string} id the file id
     * @param {Function} successCallback the success callback
     * @param {Function} errorCallback the error callback
     * @param {number} offset the offset from the start to start fetching at
     * @param {number} limit the number of items to fetch
     * @param {array} fields the fields to fetch
     * @param {boolean} shouldFetchAll true if should get all the pages before calling the sucessCallback
     */

  }, {
    key: "offsetGet",
    value: function () {
      var _offsetGet = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(id, successCallback, errorCallback) {
        var offset,
            limit,
            fields,
            shouldFetchAll,
            _args2 = arguments;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                offset = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : DEFAULT_FETCH_START;
                limit = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : DEFAULT_FETCH_END;
                fields = _args2.length > 5 ? _args2[5] : undefined;
                shouldFetchAll = _args2.length > 6 && _args2[6] !== undefined ? _args2[6] : true;
                this.successCallback = successCallback;
                this.errorCallback = errorCallback;
                return _context2.abrupt("return", this.offsetGetRequest(id, offset, limit, shouldFetchAll, fields));

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function offsetGet(_x6, _x7, _x8) {
        return _offsetGet.apply(this, arguments);
      }

      return offsetGet;
    }()
  }]);

  return OffsetBasedApi;
}(Base);

export default OffsetBasedApi;
//# sourceMappingURL=OffsetBasedAPI.js.map