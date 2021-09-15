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
 * @file Helper for the Box Collaborations API
 * @author Box
 *
 * The Collaborations API is different from the other APIs related to collaborations/collaborators.
 * - The Item Collaborations (File Collaborations and Folder Collaborations) API only accepts GET requests for a single item;
 *   it returns an object containing all the users who are collaborated on that item.
 * - The File Collaborators API is used exclusively in the ContentSidebar UI Element.
 * - This API enables CRUD actions on a single collaboration for a single item. For more information, see the API docs at
 *   https://developer.box.com/reference/resources/collaboration/.
 */
import Base from './Base';

var Collaborations =
/*#__PURE__*/
function (_Base) {
  _inherits(Collaborations, _Base);

  function Collaborations() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Collaborations);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Collaborations)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "addCollaboration", function (item, collaboration, successCallback, errorCallback) {
      var id = item.id;

      _this.post({
        id: id,
        data: {
          data: _objectSpread({
            item: item
          }, collaboration)
        },
        errorCallback: errorCallback,
        successCallback: successCallback,
        url: _this.getUrl()
      });
    });

    return _this;
  }

  _createClass(Collaborations, [{
    key: "getUrl",

    /**
     * API URL for collaborations
     *
     * @return {string} Base URL for collaborations
     */
    value: function getUrl() {
      return "".concat(this.getBaseApiUrl(), "/collaborations");
    }
    /**
     * Add a collaboration for a single user or a single group to a file or folder.
     * Users can be added by ID or login (email); groups can only be added by ID.
     *
     * @param {BoxItem} item
     * @param {$Shape<Collaboration>} collaboration
     * @param {(data?: Object) => void} successCallback
     * @param {ElementsErrorCallback} errorCallback
     */

  }]);

  return Collaborations;
}(Base);

export default Collaborations;
//# sourceMappingURL=Collaborations.js.map