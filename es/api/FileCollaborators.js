function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
 * @file Helper for the box collaborators API
 * @author Box
 */
import MarkerBasedAPI from './MarkerBasedAPI';
import { DEFAULT_MAX_COLLABORATORS } from '../constants';

var FileCollaborators =
/*#__PURE__*/
function (_MarkerBasedAPI) {
  _inherits(FileCollaborators, _MarkerBasedAPI);

  function FileCollaborators() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FileCollaborators);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FileCollaborators)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "successHandler", function (data) {
      if (_this.isDestroyed() || typeof _this.successCallback !== 'function') {
        return;
      } // Transform into "mention selector" format:


      var collaboratorSelectorItems = data.entries.map(function (collab) {
        var item;

        if (collab.type === 'group') {
          item = collab; // flow needs assignment to happen after type refinement
        } else {
          item = collab;
          item.email = item.login; // transform user object
        }

        return {
          id: collab.id,
          name: collab.name,
          item: item
        };
      });

      _this.successCallback(_objectSpread({}, data, {
        entries: collaboratorSelectorItems
      }));
    });

    return _this;
  }

  _createClass(FileCollaborators, [{
    key: "getUrl",

    /**
     * API URL for comments
     *
     * @param {string} [id] - a box file id
     * @return {string} base url for files
     */
    value: function getUrl(id) {
      if (!id) {
        throw new Error('Missing file id!');
      }

      return "".concat(this.getBaseApiUrl(), "/files/").concat(id, "/collaborators");
    }
    /**
     * Transform result of API response
     *
     * @param {Object} data the response data
     */

  }, {
    key: "getFileCollaborators",

    /**
     * API for fetching collaborators on a file
     *
     * @param {string} id - the file id
     * @param {Function} successCallback - the success callback
     * @param {Function} errorCallback - the error callback
     * @param {Object} requestData - any additional request data
     * @param {number} limit - the max number of collaborators to return
     * @returns {void}
     */
    value: function getFileCollaborators(id, successCallback, errorCallback) {
      var requestData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var limit = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : DEFAULT_MAX_COLLABORATORS;
      // NOTE: successCallback is called with the result
      // of this.successHandler, not the API response!
      this.markerGet({
        id: id,
        limit: limit,
        successCallback: successCallback,
        errorCallback: errorCallback,
        requestData: requestData
      });
    }
  }]);

  return FileCollaborators;
}(MarkerBasedAPI);

export default FileCollaborators;
//# sourceMappingURL=FileCollaborators.js.map