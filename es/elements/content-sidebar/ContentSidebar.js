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
 * @file Content Sidebar Container
 * @author Box
 */
import 'regenerator-runtime/runtime';
import * as React from 'react';
import noop from 'lodash/noop';
import flow from 'lodash/flow';
import API from '../../api';
import APIContext from '../common/api-context';
import Internationalize from '../common/Internationalize';
import Sidebar from './Sidebar';
import NavRouter from '../common/nav-router';
import SidebarUtils from './SidebarUtils';
import { DEFAULT_HOSTNAME_API, CLIENT_NAME_CONTENT_SIDEBAR, ORIGIN_CONTENT_SIDEBAR } from '../../constants';
import { EVENT_JS_READY } from '../common/logger/constants';
import { mark } from '../../utils/performance';
import { SIDEBAR_FIELDS_TO_FETCH } from '../../utils/fields';
import { withErrorBoundary } from '../common/error-boundary';
import { withFeatureProvider } from '../common/feature-checking';
import { withLogger } from '../common/logger';
import '../common/fonts.scss';
import '../common/base.scss';
import '../common/modal.scss';
import './ContentSidebar.scss';
var MARK_NAME_JS_READY = "".concat(ORIGIN_CONTENT_SIDEBAR, "_").concat(EVENT_JS_READY);
mark(MARK_NAME_JS_READY);

var ContentSidebar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContentSidebar, _React$Component);

  /**
   * [constructor]
   *
   * @private
   * @return {ContentSidebar}
   */
  function ContentSidebar(props) {
    var _this;

    _classCallCheck(this, ContentSidebar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContentSidebar).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isLoading: true
    });

    _defineProperty(_assertThisInitialized(_this), "errorCallback", function (error, code) {
      /* eslint-disable no-console */
      console.error(error);
      /* eslint-enable no-console */

      /* eslint-disable react/prop-types */

      _this.props.onError(error, code, {
        error: error
      });
      /* eslint-enable react/prop-types */

    });

    _defineProperty(_assertThisInitialized(_this), "fetchMetadataSuccessCallback", function (_ref) {
      var editors = _ref.editors;

      _this.setState({
        metadataEditors: editors
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fetchFileSuccessCallback", function (file) {
      _this.setState({
        file: file,
        isLoading: false
      }, _this.fetchMetadata);
    });

    var apiHost = props.apiHost,
        cache = props.cache,
        clientName = props.clientName,
        language = props.language,
        requestInterceptor = props.requestInterceptor,
        responseInterceptor = props.responseInterceptor,
        sharedLink = props.sharedLink,
        sharedLinkPassword = props.sharedLinkPassword,
        token = props.token;
    _this.api = new API({
      apiHost: apiHost,
      cache: cache,
      clientName: clientName,
      language: language,
      requestInterceptor: requestInterceptor,
      responseInterceptor: responseInterceptor,
      sharedLink: sharedLink,
      sharedLinkPassword: sharedLinkPassword,
      token: token
    });
    /* eslint-disable react/prop-types */

    var logger = props.logger;
    logger.onReadyMetric({
      endMarkName: MARK_NAME_JS_READY
    });
    /* eslint-enable react/prop-types */

    return _this;
  }
  /**
   * Destroys api instances with caches
   *
   * @private
   * @return {void}
   */


  _createClass(ContentSidebar, [{
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
     * Fetches the file data on load
     *
     * @private
     * @inheritdoc
     * @return {void}
     */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchFile();
    }
    /**
     * Fetches new file data on update
     *
     * @private
     * @inheritdoc
     * @return {void}
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var fileId = this.props.fileId;
      var prevFileId = prevProps.fileId;

      if (fileId !== prevFileId) {
        this.fetchFile();
      }
    }
    /**
     * Network error callback
     *
     * @private
     * @param {Error} error - Error object
     * @param {string} code - error code
     * @return {void}
     */

  }, {
    key: "fetchMetadata",

    /**
     * Fetches file metadata editors if required
     *
     * @private
     * @return {void}
     */
    value: function fetchMetadata() {
      var file = this.state.file;
      var metadataSidebarProps = this.props.metadataSidebarProps;
      var _metadataSidebarProps = metadataSidebarProps.isFeatureEnabled,
          isFeatureEnabled = _metadataSidebarProps === void 0 ? true : _metadataSidebarProps; // Only fetch metadata if we think that the file may have metadata on it
      // but currently the metadata feature is turned off. Use case of this would be a free
      // user who doesn't have the metadata feature but is collabed on a file from a user
      // who added metadata on the file. If the feature is enabled we always end up showing
      // the metadata sidebar irrespective of there being any existing metadata or not.

      var canHaveMetadataSidebar = !isFeatureEnabled && SidebarUtils.canHaveMetadataSidebar(this.props);

      if (canHaveMetadataSidebar) {
        this.api.getMetadataAPI(false).getMetadata(file, this.fetchMetadataSuccessCallback, noop, isFeatureEnabled);
      }
    }
    /**
     * File fetch success callback that sets the file and sidebar visibility.
     * Also makes an optional request to fetch metadata editors
     *
     * @private
     * @param {Object} file - Box file
     * @return {void}
     */

  }, {
    key: "fetchFile",

    /**
     * Fetches a file
     *
     * @private
     * @param {Object|void} [fetchOptions] - Fetch options
     * @return {void}
     */
    value: function fetchFile() {
      var fetchOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var fileId = this.props.fileId;
      this.setState({
        isLoading: true
      });

      if (fileId && SidebarUtils.canHaveSidebar(this.props)) {
        this.api.getFileAPI().getFile(fileId, this.fetchFileSuccessCallback, this.errorCallback, _objectSpread({}, fetchOptions, {
          fields: SIDEBAR_FIELDS_TO_FETCH
        }));
      }
    }
    /**
     * Refreshes the sidebar panel
     * @returns {void}
     */

  }, {
    key: "refresh",
    value: function refresh() {
      if (this.sidebarRef) {
        this.sidebarRef.refresh();
      }
    }
    /**
     * Renders the sidebar
     *
     * @private
     * @inheritdoc
     * @return {Element}
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          activitySidebarProps = _this$props.activitySidebarProps,
          additionalTabs = _this$props.additionalTabs,
          className = _this$props.className,
          currentUser = _this$props.currentUser,
          defaultView = _this$props.defaultView,
          detailsSidebarProps = _this$props.detailsSidebarProps,
          fileId = _this$props.fileId,
          getPreview = _this$props.getPreview,
          getViewer = _this$props.getViewer,
          hasAdditionalTabs = _this$props.hasAdditionalTabs,
          hasActivityFeed = _this$props.hasActivityFeed,
          hasMetadata = _this$props.hasMetadata,
          hasSkills = _this$props.hasSkills,
          hasVersions = _this$props.hasVersions,
          history = _this$props.history,
          isDefaultOpen = _this$props.isDefaultOpen,
          language = _this$props.language,
          messages = _this$props.messages,
          metadataSidebarProps = _this$props.metadataSidebarProps,
          onAnnotationSelect = _this$props.onAnnotationSelect,
          onVersionChange = _this$props.onVersionChange,
          onVersionHistoryClick = _this$props.onVersionHistoryClick,
          versionsSidebarProps = _this$props.versionsSidebarProps;
      var _this$state = this.state,
          file = _this$state.file,
          isLoading = _this$state.isLoading,
          metadataEditors = _this$state.metadataEditors;
      var initialPath = defaultView.charAt(0) === '/' ? defaultView : "/".concat(defaultView);

      if (!file || !fileId || !SidebarUtils.shouldRenderSidebar(this.props, file, metadataEditors)) {
        return null;
      }

      return React.createElement(Internationalize, {
        language: language,
        messages: messages
      }, React.createElement(APIContext.Provider, {
        value: this.api
      }, React.createElement(NavRouter, {
        history: history,
        initialEntries: [initialPath]
      }, React.createElement(Sidebar, {
        activitySidebarProps: activitySidebarProps,
        additionalTabs: additionalTabs,
        className: className,
        currentUser: currentUser,
        detailsSidebarProps: detailsSidebarProps,
        file: file,
        fileId: fileId,
        getPreview: getPreview,
        getViewer: getViewer,
        hasActivityFeed: hasActivityFeed,
        hasAdditionalTabs: hasAdditionalTabs,
        hasMetadata: hasMetadata,
        hasSkills: hasSkills,
        hasVersions: hasVersions,
        isDefaultOpen: isDefaultOpen,
        isLoading: isLoading,
        metadataEditors: metadataEditors,
        metadataSidebarProps: metadataSidebarProps,
        onAnnotationSelect: onAnnotationSelect,
        onVersionChange: onVersionChange,
        onVersionHistoryClick: onVersionHistoryClick,
        versionsSidebarProps: versionsSidebarProps,
        wrappedComponentRef: function wrappedComponentRef(ref) {
          _this2.sidebarRef = ref;
        }
      }))));
    }
  }]);

  return ContentSidebar;
}(React.Component);

_defineProperty(ContentSidebar, "defaultProps", {
  activitySidebarProps: {},
  apiHost: DEFAULT_HOSTNAME_API,
  className: '',
  clientName: CLIENT_NAME_CONTENT_SIDEBAR,
  defaultView: '',
  detailsSidebarProps: {},
  getPreview: noop,
  getViewer: noop,
  hasActivityFeed: false,
  hasAdditionalTabs: false,
  hasMetadata: false,
  hasSkills: false,
  isDefaultOpen: true,
  metadataSidebarProps: {}
});

export { ContentSidebar as ContentSidebarComponent };
export default flow([withFeatureProvider, withLogger(ORIGIN_CONTENT_SIDEBAR), withErrorBoundary(ORIGIN_CONTENT_SIDEBAR)])(ContentSidebar);
//# sourceMappingURL=ContentSidebar.js.map