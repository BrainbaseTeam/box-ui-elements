function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
 * @file Open With Component
 * @author Box
 */
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import uniqueid from 'lodash/uniqueId';
import noop from 'lodash/noop';
import { FormattedMessage } from 'react-intl';
import queryString from 'query-string';
import Internationalize from '../common/Internationalize';
import messages from '../common/messages';
import { withErrorBoundary } from '../common/error-boundary';
import API from '../../api';
import IntegrationPortalContainer from './IntegrationPortalContainer';
import OpenWithDropdownMenu from './OpenWithDropdownMenu';
import BoxToolsInstallMessage from './BoxToolsInstallMessage';
import OpenWithButton from './OpenWithButton';
import OpenWithFallbackButton from './OpenWithFallbackButton';
import ExecuteForm from './ExecuteForm';
import '../common/base.scss';
import './ContentOpenWith.scss';
import { BOX_EDIT_INTEGRATION_ID, BOX_EDIT_SFC_INTEGRATION_ID, CLIENT_NAME_OPEN_WITH, DEFAULT_HOSTNAME_API, ERROR_CODE_EXECUTE_INTEGRATION, HTTP_GET, HTTP_POST, ORIGIN_OPEN_WITH, TYPE_FILE, TYPE_FOLDER } from '../../constants';
var UNSUPPORTED_INVOCATION_METHOD_TYPE = 'Integration invocation using this HTTP method type is not supported';
var BLACKLISTED_ERROR_MESSAGE_KEY = 'boxToolsBlacklistedError';
var BOX_TOOLS_INSTALL_ERROR_MESSAGE_KEY = 'boxToolsInstallErrorMessage';
var GENERIC_EXECUTE_MESSAGE_KEY = 'executeIntegrationOpenWithErrorHeader';
var AUTH_CODE = 'auth_code';

var ContentOpenWith =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ContentOpenWith, _PureComponent);

  /**
   * [constructor]
   *
   * @private
   * @return {ContentOpenWith}
   */
  function ContentOpenWith(props) {
    var _this;

    _classCallCheck(this, ContentOpenWith);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContentOpenWith).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "initialState", {
      isDropdownOpen: false,
      integrations: null,
      isLoading: true,
      fetchError: null,
      executePostData: null,
      shouldRenderErrorIntegrationPortal: false,
      shouldRenderLoadingIntegrationPortal: false
    });

    _defineProperty(_assertThisInitialized(_this), "fetchOpenWithSuccessHandler",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(integrations) {
        var _this$props, boxToolsName, boxToolsInstallUrl, boxEditIntegration, _ref3, extension, errorMessageObject, formattedErrorMessage;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = _this.props, boxToolsName = _this$props.boxToolsName, boxToolsInstallUrl = _this$props.boxToolsInstallUrl;
                boxEditIntegration = integrations.find(function (_ref2) {
                  var appIntegrationId = _ref2.appIntegrationId;
                  return _this.isBoxEditIntegration(appIntegrationId);
                });

                if (!(boxEditIntegration && !boxEditIntegration.isDisabled)) {
                  _context.next = 22;
                  break;
                }

                _context.prev = 3;
                _context.next = 6;
                return _this.getIntegrationFileExtension();

              case 6:
                _ref3 = _context.sent;
                extension = _ref3.extension;
                boxEditIntegration.extension = extension; // If Box Edit is present and enabled, we need to set its ability to locally open the given file
                // No-op if these checks are successful

                _context.next = 11;
                return _this.isBoxEditAvailable();

              case 11:
                _context.next = 13;
                return _this.canOpenExtensionWithBoxEdit(boxEditIntegration);

              case 13:
                _context.next = 22;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](3);
                errorMessageObject = messages[_context.t0.message] || messages[GENERIC_EXECUTE_MESSAGE_KEY];
                formattedErrorMessage = React.createElement(FormattedMessage, errorMessageObject);

                if (_context.t0.message === BOX_TOOLS_INSTALL_ERROR_MESSAGE_KEY) {
                  formattedErrorMessage = React.createElement(BoxToolsInstallMessage, {
                    boxToolsInstallUrl: boxToolsInstallUrl,
                    boxToolsName: boxToolsName
                  });
                }

                boxEditIntegration.disabledReasons.push(formattedErrorMessage);
                boxEditIntegration.isDisabled = true;

              case 22:
                _this.setState({
                  integrations: integrations,
                  isLoading: false
                });

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 15]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "getIntegrationFileExtension", function () {
      var fileId = _this.props.fileId;
      return new Promise(function (resolve, reject) {
        _this.api.getFileAPI().getFileExtension(fileId, resolve, function () {
          return reject(new Error(GENERIC_EXECUTE_MESSAGE_KEY));
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isBoxEditAvailable", function () {
      return _this.api.getBoxEditAPI().checkBoxEditAvailability().catch(function () {
        throw new Error(BOX_TOOLS_INSTALL_ERROR_MESSAGE_KEY);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "canOpenExtensionWithBoxEdit", function (_ref4) {
      var _ref4$extension = _ref4.extension,
          extension = _ref4$extension === void 0 ? '' : _ref4$extension;
      return _this.api.getBoxEditAPI().getAppForExtension(extension).catch(function () {
        throw new Error(BLACKLISTED_ERROR_MESSAGE_KEY);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fetchErrorHandler", function (error, code) {
      _this.props.onError(error, code, {
        error: error
      });

      _this.setState({
        fetchError: error,
        isLoading: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onIntegrationClick", function (_ref5) {
      var appIntegrationId = _ref5.appIntegrationId,
          displayName = _ref5.displayName;
      var fileId = _this.props.fileId;

      var isBoxEditIntegration = _this.isBoxEditIntegration(appIntegrationId);

      _this.api.getAppIntegrationsAPI(false).execute(appIntegrationId, fileId, _this.executeIntegrationSuccessHandler.bind(_assertThisInitialized(_this), appIntegrationId), isBoxEditIntegration ? _this.executeBoxEditErrorHandler : _this.executeIntegrationErrorHandler);

      if (isBoxEditIntegration) {
        // No window management is required when using Box Edit.
        return;
      } // These window features will open the new window directly on top of the current window at the same


      var windowFeatures = "left=".concat(window.screenX, ",top=").concat(window.screenY, ",height=").concat(window.outerHeight, ",width=").concat(window.innerWidth, ",toolbar=0"); // window.open() is immediately invoked to avoid popup-blockers
      // The name is included to be the target of a form if the integration is a POST integration.
      // A uniqueid is used to force the browser to open a new tab every time, while still allowing
      // a form to reference a given tab.

      _this.integrationWindow = _this.window.open('', "".concat(uniqueid(appIntegrationId)), windowFeatures);
      _this.integrationWindow.document.title = displayName;
      _this.integrationWindow.onunload = _this.cleanupIntegrationWindow;

      _this.setState({
        shouldRenderLoadingIntegrationPortal: true,
        shouldRenderErrorIntegrationPortal: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "cleanupIntegrationWindow", function () {
      _this.setState({
        shouldRenderLoadingIntegrationPortal: false,
        shouldRenderErrorIntegrationPortal: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "executeIntegrationSuccessHandler", function (integrationId, executeData) {
      if (_this.isBoxEditIntegration(integrationId)) {
        _this.executeBoxEditSuccessHandler(integrationId, executeData);
      } else {
        _this.executeOnlineIntegrationSuccessHandler(executeData);
      }

      _this.onExecute(integrationId);
    });

    _defineProperty(_assertThisInitialized(_this), "executeOnlineIntegrationSuccessHandler", function (executeData) {
      var method = executeData.method,
          url = executeData.url;

      switch (method) {
        case HTTP_POST:
          _this.setState({
            executePostData: executeData
          });

          break;

        case HTTP_GET:
          if (!_this.integrationWindow) {
            return;
          } // Prevents abuse of window.opener
          // see here for more details: https://mathiasbynens.github.io/rel-noopener/


          _this.integrationWindow.location = url;
          _this.integrationWindow.opener = null;
          break;

        default:
          _this.executeIntegrationErrorHandler(Error(UNSUPPORTED_INVOCATION_METHOD_TYPE), ERROR_CODE_EXECUTE_INTEGRATION);

      }

      _this.integrationWindow = null;
    });

    _defineProperty(_assertThisInitialized(_this), "executeBoxEditSuccessHandler", function (integrationId, _ref6) {
      var url = _ref6.url;
      var _this$props2 = _this.props,
          fileId = _this$props2.fileId,
          token = _this$props2.token,
          onError = _this$props2.onError;
      var queryParams = queryString.parse(url);
      var authCode = queryParams[AUTH_CODE];

      var isFileScoped = _this.isBoxEditSFCIntegration(integrationId);

      _this.api.getBoxEditAPI().openFile(fileId, {
        data: {
          auth_code: authCode,
          token: token,
          token_scope: isFileScoped ? TYPE_FILE : TYPE_FOLDER
        }
      }).catch(function (error) {
        onError(error, ERROR_CODE_EXECUTE_INTEGRATION, {
          error: error
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onExecuteFormSubmit", function () {
      _this.setState({
        executePostData: null
      });
    });

    _defineProperty(_assertThisInitialized(_this), "executeIntegrationErrorHandler", function (error, code) {
      _this.props.onError(error, code, {
        error: error
      }); // eslint-disable-next-line no-console


      console.error(error);

      _this.setState({
        shouldRenderLoadingIntegrationPortal: false,
        shouldRenderErrorIntegrationPortal: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "executeBoxEditErrorHandler", function (error) {
      _this.props.onError(error); // eslint-disable-next-line no-console


      console.error(error);
    });

    var _token = props.token,
        apiHost = props.apiHost,
        clientName = props.clientName,
        language = props.language,
        requestInterceptor = props.requestInterceptor,
        responseInterceptor = props.responseInterceptor;
    _this.id = uniqueid('bcow_');
    _this.api = new API({
      apiHost: apiHost,
      clientName: clientName,
      language: language,
      requestInterceptor: requestInterceptor,
      responseInterceptor: responseInterceptor,
      token: _token
    }); // Clone initial state to allow for state reset on new files

    _this.state = _objectSpread({}, _this.initialState);
    return _this;
  }
  /**
   * Destroys api instances with caches
   *
   * @private
   * @return {void}
   */


  _createClass(ContentOpenWith, [{
    key: "clearCache",
    value: function clearCache() {
      this.api.destroy(true);
    }
    /**
     * Cleanup
     *
     * @private
     * @inheritdoc
     * @return {void}
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Don't destroy the cache while unmounting
      this.api.destroy(false);
    }
    /**
     *
     * @private
     * @inheritdoc
     * @return {void}
     */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var fileId = this.props.fileId;

      if (!fileId) {
        return;
      }

      this.window = window;
      this.fetchOpenWithData();
    }
    /**
     * After component updates, re-fetch Open With data if appropriate.
     *
     * @return {void}
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var currentFileId = this.props.fileId;
      var previousFileId = prevProps.fileId;

      if (!currentFileId) {
        return;
      }

      if (currentFileId !== previousFileId) {
        this.setState(_objectSpread({}, this.initialState));
        this.fetchOpenWithData();
      }
    }
    /**
     * Checks if a given integration is a Box Edit integration.
     *
     * @param {string} [integrationId] - The integration ID
     * @return {boolean}
     */

  }, {
    key: "isBoxEditIntegration",
    value: function isBoxEditIntegration(integrationId) {
      return integrationId === BOX_EDIT_INTEGRATION_ID || this.isBoxEditSFCIntegration(integrationId);
    }
    /**
     * Checks if a given integration is a Box Edit integration.
     *
     * @param {string} [integrationId] - The integration ID
     * @return {boolean}
     */

  }, {
    key: "isBoxEditSFCIntegration",
    value: function isBoxEditSFCIntegration(integrationId) {
      return integrationId === BOX_EDIT_SFC_INTEGRATION_ID;
    }
    /**
     * Fetches Open With data.
     *
     * @return {void}
     */

  }, {
    key: "fetchOpenWithData",
    value: function fetchOpenWithData() {
      var fileId = this.props.fileId;
      this.api.getOpenWithAPI(false).getOpenWithIntegrations(fileId, this.fetchOpenWithSuccessHandler, this.fetchErrorHandler);
    }
    /**
     * Fetch app integrations info needed to render.
     *
     * @param {OpenWithIntegrations} integrations - The available Open With integrations
     * @return {void}
     */

  }, {
    key: "onExecute",

    /**
     * Calls the onExecute prop
     *
     * @private
     * @param {string} integrationID - The integration that was executed
     * @return {void}
     */
    value: function onExecute(integrationID) {
      this.props.onExecute(integrationID);
      this.setState({
        shouldRenderLoadingIntegrationPortal: false
      });
    }
    /**
     * Handles execution related errors
     *
     * @private
     * @param {Error} error - Error object
     * @return {void}
     */

  }, {
    key: "getDisplayIntegration",

    /**
     * Gets a display integration, if available, for the Open With button
     *
     * @private
     * @return {?Integration}
     */
    value: function getDisplayIntegration() {
      var integrations = this.state.integrations; // We only consider an integration a display integration if is the only integration in our state

      return Array.isArray(integrations) && integrations.length === 1 ? integrations[0] : null;
    }
    /**
     * Render the Open With element
     *
     * @private
     * @inheritdoc
     * @return {Element}
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          language = _this$props3.language,
          intlMessages = _this$props3.messages,
          dropdownAlignment = _this$props3.dropdownAlignment;
      var _this$state = this.state,
          fetchError = _this$state.fetchError,
          isLoading = _this$state.isLoading,
          integrations = _this$state.integrations,
          executePostData = _this$state.executePostData,
          shouldRenderLoadingIntegrationPortal = _this$state.shouldRenderLoadingIntegrationPortal,
          shouldRenderErrorIntegrationPortal = _this$state.shouldRenderErrorIntegrationPortal;
      var className = classNames('be bcow', this.props.className);
      var displayIntegration = this.getDisplayIntegration();
      var numIntegrations = integrations ? integrations.length : 0;
      return React.createElement(Internationalize, {
        language: language,
        messages: intlMessages
      }, React.createElement("div", {
        className: className,
        "data-testid": "bcow-content",
        id: this.id
      }, numIntegrations <= 1 ? React.createElement(OpenWithButton, {
        displayIntegration: displayIntegration,
        error: fetchError,
        isLoading: isLoading,
        onClick: this.onIntegrationClick
      }) : React.createElement(OpenWithDropdownMenu, {
        dropdownAlignment: dropdownAlignment,
        integrations: integrations,
        onClick: this.onIntegrationClick
      }), (shouldRenderLoadingIntegrationPortal || shouldRenderErrorIntegrationPortal) && React.createElement(IntegrationPortalContainer, {
        hasError: shouldRenderErrorIntegrationPortal,
        integrationWindow: this.integrationWindow
      }), executePostData && React.createElement(ExecuteForm, {
        executePostData: executePostData,
        id: this.id,
        onSubmit: this.onExecuteFormSubmit,
        windowName: this.integrationWindow && this.integrationWindow.name
      })));
    }
  }]);

  return ContentOpenWith;
}(PureComponent);

_defineProperty(ContentOpenWith, "defaultProps", {
  apiHost: DEFAULT_HOSTNAME_API,
  className: '',
  clientName: CLIENT_NAME_OPEN_WITH,
  onExecute: noop,
  onError: noop
});

export { ContentOpenWith as ContentOpenWithComponent };
export default withErrorBoundary(ORIGIN_OPEN_WITH, OpenWithFallbackButton)(ContentOpenWith);
//# sourceMappingURL=ContentOpenWith.js.map