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
 * @file Helper for the app_integrations API endpoint
 * @author Box
 */
import Base from './Base';
import { TYPE_FILE, ERROR_CODE_EXECUTE_INTEGRATION } from '../constants';

var AppIntegrations =
/*#__PURE__*/
function (_Base) {
  _inherits(AppIntegrations, _Base);

  function AppIntegrations() {
    _classCallCheck(this, AppIntegrations);

    return _possibleConstructorReturn(this, _getPrototypeOf(AppIntegrations).apply(this, arguments));
  }

  _createClass(AppIntegrations, [{
    key: "getUrl",

    /**
     * API URL for Open With
     *
     * @param {string} [integrationId] - a box integration app ID
     * @return {string} base url for app integrations
     */
    value: function getUrl(integrationId) {
      if (!integrationId) {
        throw new Error('Missing app integration id!');
      }

      return "".concat(this.getBaseApiUrl(), "/app_integrations/").concat(integrationId);
    }
    /**
     * API endpoint to execute an integration, given an ID
     *
     * @param {string} integrationID - An app integration ID
     * @param {string} fileID - A file ID
     * @return {string} base url for files
     */

  }, {
    key: "execute",
    value: function execute(integrationId, fileId, successCallback, errorCallback) {
      if (!integrationId) {
        throw new Error('Missing integration id!');
      }

      if (!fileId) {
        throw new Error('Missing file id!');
      }

      this.errorCode = ERROR_CODE_EXECUTE_INTEGRATION;
      var executeURL = "".concat(this.getUrl(integrationId), "/execute");
      var body = {
        data: {
          item: {
            id: fileId,
            type: TYPE_FILE
          }
        }
      };
      this.post({
        id: fileId,
        url: executeURL,
        data: body,
        successCallback: successCallback,
        errorCallback: errorCallback
      });
    }
  }]);

  return AppIntegrations;
}(Base);

export default AppIntegrations;
//# sourceMappingURL=AppIntegrations.js.map