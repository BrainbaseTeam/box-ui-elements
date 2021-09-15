function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
 * @file Marker-based helper for the Box Groups API
 * @author Box
 */
import MarkerBasedAPI from './MarkerBasedAPI';
import { DEFAULT_MAX_CONTACTS, ERROR_CODE_FETCH_ENTERPRISE_GROUPS } from '../constants';

var MarkerBasedGroups =
/*#__PURE__*/
function (_MarkerBasedAPI) {
  _inherits(MarkerBasedGroups, _MarkerBasedAPI);

  function MarkerBasedGroups() {
    _classCallCheck(this, MarkerBasedGroups);

    return _possibleConstructorReturn(this, _getPrototypeOf(MarkerBasedGroups).apply(this, arguments));
  }

  _createClass(MarkerBasedGroups, [{
    key: "getUrl",

    /**
     * API URL for fetching all groups that are visible to the current user
     *
     * @returns {string} URL for fetching groups
     */
    value: function getUrl() {
      return "".concat(this.getBaseApiUrl(), "/groups");
    }
    /**
     * API for fetching all groups in the current user's enterprise
     *
     * @param {string} id - Box item ID
     * @param {Function} successCallback - Success callback
     * @param {Function} errorCallback - Error callback
     * @param {Object} [requestData] - Opitional additional request data
     * @param {Object} [limit] - Max number of groups to return
     * @returns {void}
     */

  }, {
    key: "getGroupsInEnterprise",
    value: function getGroupsInEnterprise(id, successCallback, errorCallback, requestData) {
      var limit = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : DEFAULT_MAX_CONTACTS;
      this.errorCode = ERROR_CODE_FETCH_ENTERPRISE_GROUPS;
      this.markerGet({
        id: id,
        limit: limit,
        successCallback: successCallback,
        errorCallback: errorCallback,
        requestData: _objectSpread({
          usemarker: true
        }, requestData),
        shouldFetchAll: false
      });
    }
  }]);

  return MarkerBasedGroups;
}(MarkerBasedAPI);

export default MarkerBasedGroups;
//# sourceMappingURL=MarkerBasedGroups.js.map