function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Helper for the Box Item (File/Folder) Collaborations API
 * @author Box
 */
import MarkerBasedAPI from './MarkerBasedAPI';
import { DEFAULT_MAX_COLLABORATORS } from '../constants';

var ItemCollaborations =
/*#__PURE__*/
function (_MarkerBasedAPI) {
  _inherits(ItemCollaborations, _MarkerBasedAPI);

  function ItemCollaborations() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ItemCollaborations);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ItemCollaborations)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getCollaborations", function (id, successCallback, errorCallback) {
      var requestData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var limit = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : DEFAULT_MAX_COLLABORATORS;

      _this.markerGet({
        id: id,
        limit: limit,
        successCallback: successCallback,
        errorCallback: errorCallback,
        requestData: requestData
      });
    });

    _defineProperty(_assertThisInitialized(_this), "successHandler", function (data) {
      if (_this.isDestroyed() || typeof _this.successCallback !== 'function') {
        return;
      }

      _this.successCallback(data); // defined in this.markerGet()

    });

    return _this;
  }

  _createClass(ItemCollaborations, [{
    key: "getUrl",

    /**
     * API URL for collaborations
     *
     * @param {string} id - Item ID
     * @protected
     * @return {string} Base URL for collaborations
     */
    value: function getUrl(id) {
      return "getUrl(".concat(id, ") should be overridden");
    }
    /**
     * API for fetching collaborations on a Box item
     *
     * @param {string} id - Item ID
     * @param {Function} successCallback - Success callback
     * @param {Function} errorCallback - Error callback
     * @param {Object} [requestData] - Optional additional request data
     * @param {number} [limit] - Max number of collaborations to return
     * @returns {void}
     */

  }]);

  return ItemCollaborations;
}(MarkerBasedAPI);

export default ItemCollaborations;
//# sourceMappingURL=ItemCollaborations.js.map