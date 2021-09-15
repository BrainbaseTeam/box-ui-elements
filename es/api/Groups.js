function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
 * @file Helper for the box Groups API
 * @author Box
 */
import noop from 'lodash/noop';
import Base from './Base';

var Groups =
/*#__PURE__*/
function (_Base) {
  _inherits(Groups, _Base);

  function Groups() {
    _classCallCheck(this, Groups);

    return _possibleConstructorReturn(this, _getPrototypeOf(Groups).apply(this, arguments));
  }

  _createClass(Groups, [{
    key: "getUrlForGroupCount",

    /**
     * API URL to get group count
     *
     * @param {string} id a box group ID
     * @return {string} formatted URL for retrieving the membership information
     */
    value: function getUrlForGroupCount(id) {
      return "".concat(this.getBaseApiUrl(), "/groups/").concat(id, "/memberships");
    }
    /**
     * API for creating a comment on a file
     *
     * @param {string} id a box group ID
     * @param {Function} [successCallback] callback for handling a valid server response
     * @param {Function} [errorCallback] handle errors raised by backend or connection errors
     * @return {Promise<{}>} Promise which resolves with the payload, including the total_count
     */

  }, {
    key: "getGroupCount",
    value: function getGroupCount(_ref) {
      var _this = this;

      var _ref$errorCallback = _ref.errorCallback,
          _errorCallback = _ref$errorCallback === void 0 ? noop : _ref$errorCallback,
          _ref$successCallback = _ref.successCallback,
          _successCallback = _ref$successCallback === void 0 ? noop : _ref$successCallback,
          group = _ref.group,
          file = _ref.file;

      return new Promise(function (resolve, reject) {
        return _this.get({
          id: file.id,
          url: _this.getUrlForGroupCount(group.id),
          successCallback: function successCallback() {
            _successCallback.apply(void 0, arguments);

            resolve.apply(void 0, arguments);
          },
          errorCallback: function errorCallback() {
            _errorCallback.apply(void 0, arguments);

            reject();
          },
          requestData: {
            params: {
              limit: 1
            }
          }
        });
      });
    }
  }]);

  return Groups;
}(Base);

export default Groups;
//# sourceMappingURL=Groups.js.map