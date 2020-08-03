function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * 
 * @file Helper for the open_with_integrations API endpoint
 * @author Box
 */
import Base from './Base';
import { ERROR_CODE_FETCH_INTEGRATIONS, BOX_EDIT_INTEGRATION_ID, BOX_EDIT_SFC_INTEGRATION_ID } from '../constants';

var OpenWith = /*#__PURE__*/function (_Base) {
  _inherits(OpenWith, _Base);

  var _super = _createSuper(OpenWith);

  function OpenWith() {
    _classCallCheck(this, OpenWith);

    return _super.apply(this, arguments);
  }

  _createClass(OpenWith, [{
    key: "getUrl",

    /**
     * API URL for Open With
     *
     * @param {string} [id] - a box file id
     * @return {string} base url for files
     */
    value: function getUrl(id) {
      if (!id) {
        throw new Error('Missing file id!');
      }

      return "".concat(this.getBaseApiUrl(), "/files/").concat(id, "/open_with_integrations");
    }
    /**
     * Gets Open With integration data
     *
     * @param {string} fileId - Box file ID
     * @param {Function} successCallback - Success callback
     * @param {Function} errorCallback - Error callback
     * @return {void}
     */

  }, {
    key: "getOpenWithIntegrations",
    value: function getOpenWithIntegrations(fileId, _successCallback, errorCallback) {
      var _this = this;

      this.errorCode = ERROR_CODE_FETCH_INTEGRATIONS;
      this.get({
        id: fileId,
        successCallback: function successCallback(openWithIntegrations) {
          var formattedOpenWithData = _this.formatOpenWithData(openWithIntegrations);

          var consolidatedOpenWithIntegrations = _this.consolidateBoxEditIntegrations(formattedOpenWithData);

          _successCallback(consolidatedOpenWithIntegrations);
        },
        errorCallback: errorCallback
      });
    }
    /**
     * Removes the Box Edit SFC integration if the higher scoped Box Edit integration is present.
     * Box Edit and SFC Box Edit are considered separate integrations by the API. We only want to show one,
     * even if both are enabled and returned from the API.
     *
     * @param {Array<Integration>} integrations - List of integrations
     * @return {Array<Integration>} Integrations with only one Box Edit integration
     */

  }, {
    key: "consolidateBoxEditIntegrations",
    value: function consolidateBoxEditIntegrations(integrations) {
      var consolidatedIntegrations = _toConsumableArray(integrations);

      var boxEditIntegration = integrations.some(function (item) {
        return item.appIntegrationId === BOX_EDIT_INTEGRATION_ID;
      });

      if (boxEditIntegration) {
        consolidatedIntegrations = integrations.filter(function (item) {
          return item.appIntegrationId !== BOX_EDIT_SFC_INTEGRATION_ID;
        });
      }

      return consolidatedIntegrations;
    }
    /**
     * Formats Open With data conveniently for the client
     *
     * @param {Array<Object>} openWithIntegrations - The modified Open With integration objects
     * @return {Array<Integration>} formatted Open With integrations
     */

  }, {
    key: "formatOpenWithData",
    value: function formatOpenWithData(openWithIntegrations) {
      var items = openWithIntegrations.items,
          defaultIntegration = openWithIntegrations.default_app_integration;
      var integrations = items.map(function (_ref) {
        var app_integration = _ref.app_integration,
            disabled_reasons = _ref.disabled_reasons,
            display_name = _ref.display_name,
            display_description = _ref.display_description,
            display_order = _ref.display_order,
            is_disabled = _ref.is_disabled,
            should_show_consent_popup = _ref.should_show_consent_popup;
        var id = app_integration.id,
            type = app_integration.type;
        return {
          appIntegrationId: id,
          displayDescription: display_description,
          disabledReasons: disabled_reasons || [],
          displayOrder: display_order,
          isDefault: !!defaultIntegration && id === defaultIntegration.id,
          isDisabled: is_disabled,
          displayName: display_name,
          requiresConsent: should_show_consent_popup,
          type: type
        };
      }); // Sort integrations by displayOrder

      return integrations.sort(function (integrationA, integrationB) {
        return integrationA.displayOrder - integrationB.displayOrder;
      });
    }
  }]);

  return OpenWith;
}(Base);

export default OpenWith;
//# sourceMappingURL=OpenWith.js.map