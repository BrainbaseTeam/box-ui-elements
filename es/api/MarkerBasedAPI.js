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
 * @file class for Box marker based API's to inherit common functionality from
 * @author Box
 */
import { getTypedFileId } from '../utils/file';
import Base from './Base';

var MarkerBasedApi =
/*#__PURE__*/
function (_Base) {
  _inherits(MarkerBasedApi, _Base);

  function MarkerBasedApi() {
    _classCallCheck(this, MarkerBasedApi);

    return _possibleConstructorReturn(this, _getPrototypeOf(MarkerBasedApi).apply(this, arguments));
  }

  _createClass(MarkerBasedApi, [{
    key: "hasMoreItems",

    /**
     * @property {Data}
     */

    /**
     * Determines if the API has more items to fetch
     *
     * @param {string} marker the marker from the start to start fetching at
     * @return {boolean} true if there are more items
     */
    value: function hasMoreItems(marker) {
      return marker !== null && marker !== '';
    }
    /**
     * Helper for get
     *
     * @param {string} id the file id
     * @param {string} marker the marker from the start to start fetching at
     * @param {number} limit the number of items to fetch
     * @param {Object} requestData the request query params
     * @param {boolean} shouldFetchAll true if should get all the pages before calling
     * @private
     */

  }, {
    key: "markerGetRequest",
    value: function () {
      var _markerGetRequest = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(id, marker, limit, shouldFetchAll) {
        var requestData,
            url,
            queryParams,
            _ref,
            data,
            entries,
            nextMarker,
            _args = arguments;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                requestData = _args.length > 4 && _args[4] !== undefined ? _args[4] : {};

                if (!this.isDestroyed()) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.prev = 3;
                url = this.getUrl(id);
                queryParams = _objectSpread({}, requestData, {
                  marker: marker,
                  limit: limit
                });
                _context.next = 8;
                return this.xhr.get({
                  url: url,
                  id: getTypedFileId(id),
                  params: queryParams
                });

              case 8:
                _ref = _context.sent;
                data = _ref.data;
                entries = this.data ? this.data.entries : [];
                this.data = _objectSpread({}, data, {
                  entries: entries.concat(data.entries)
                });
                nextMarker = data.next_marker;

                if (!(shouldFetchAll && this.hasMoreItems(nextMarker))) {
                  _context.next = 16;
                  break;
                }

                this.markerGetRequest(id, nextMarker, limit, shouldFetchAll, requestData);
                return _context.abrupt("return");

              case 16:
                this.successHandler(this.data);
                _context.next = 22;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](3);
                this.errorHandler(_context.t0);

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 19]]);
      }));

      function markerGetRequest(_x, _x2, _x3, _x4) {
        return _markerGetRequest.apply(this, arguments);
      }

      return markerGetRequest;
    }()
    /**
     * Marker based API get
     * @param {Object} options
     * @param {string} options.id the file id
     * @param {Function} options.successCallback the success callback
     * @param {Function} options.errorCallback the error callback
     * @param {string} [options.marker] the marker from the start to start fetching at
     * @param {number} [options.limit] the number of items to fetch
     * @param {Object} options.requestData the request query params
     * @param {boolean} [options.shouldFetchAll] true if should get all the pages before calling the sucessCallback
     */

  }, {
    key: "markerGet",
    value: function () {
      var _markerGet = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(_ref2) {
        var id, successCallback, errorCallback, _ref2$marker, marker, _ref2$limit, limit, requestData, _ref2$shouldFetchAll, shouldFetchAll;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = _ref2.id, successCallback = _ref2.successCallback, errorCallback = _ref2.errorCallback, _ref2$marker = _ref2.marker, marker = _ref2$marker === void 0 ? '' : _ref2$marker, _ref2$limit = _ref2.limit, limit = _ref2$limit === void 0 ? 1000 : _ref2$limit, requestData = _ref2.requestData, _ref2$shouldFetchAll = _ref2.shouldFetchAll, shouldFetchAll = _ref2$shouldFetchAll === void 0 ? true : _ref2$shouldFetchAll;
                this.successCallback = successCallback;
                this.errorCallback = errorCallback;
                return _context2.abrupt("return", this.markerGetRequest(id, marker, limit, shouldFetchAll, requestData));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function markerGet(_x5) {
        return _markerGet.apply(this, arguments);
      }

      return markerGet;
    }()
  }]);

  return MarkerBasedApi;
}(Base);

export default MarkerBasedApi;
//# sourceMappingURL=MarkerBasedAPI.js.map