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
 * @file Content Sidebar Component
 * @author Box
 */
import * as React from 'react';
import classNames from 'classnames';
import flow from 'lodash/flow';
import getProp from 'lodash/get';
import noop from 'lodash/noop';
import uniqueid from 'lodash/uniqueId';
import { withRouter } from 'react-router-dom';
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import LocalStore from '../../utils/LocalStore';
import SidebarNav from './SidebarNav';
import SidebarPanels from './SidebarPanels';
import SidebarUtils from './SidebarUtils';
import { withFeatureConsumer } from '../common/feature-checking';
export var SIDEBAR_FORCE_KEY = 'bcs.force';
export var SIDEBAR_FORCE_VALUE_CLOSED = 'closed';
export var SIDEBAR_FORCE_VALUE_OPEN = 'open';

var Sidebar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar(props) {
    var _this;

    _classCallCheck(this, Sidebar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sidebar).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "id", uniqueid('bcs_'));

    _defineProperty(_assertThisInitialized(_this), "sidebarPanels", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "store", new LocalStore());

    _defineProperty(_assertThisInitialized(_this), "getUrlPrefix", function (pathname) {
      var basePath = pathname.substring(1).split('/')[0];
      return basePath;
    });

    _defineProperty(_assertThisInitialized(_this), "handleVersionHistoryClick", function (event) {
      var _this$props = _this.props,
          file = _this$props.file,
          history = _this$props.history;
      var currentVersion = file.file_version;
      var fileVersionSlug = currentVersion ? "/".concat(currentVersion.id) : '';

      var urlPrefix = _this.getUrlPrefix(history.location.pathname);

      if (event.preventDefault) {
        event.preventDefault();
      }

      history.push("/".concat(urlPrefix, "/versions").concat(fileVersionSlug));
    });

    _this.state = {
      isDirty: _this.getLocationState('open') || false
    };

    _this.setForcedByLocation();

    return _this;
  }

  _createClass(Sidebar, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          fileId = _this$props2.fileId,
          history = _this$props2.history,
          location = _this$props2.location;
      var prevFileId = prevProps.fileId,
          prevLocation = prevProps.location;
      var isDirty = this.state.isDirty; // User navigated to a different file without ever navigating the sidebar

      if (!isDirty && fileId !== prevFileId && location.pathname !== '/') {
        history.replace({
          pathname: '/',
          state: {
            silent: true
          }
        });
      } // User navigated or toggled the sidebar intentionally, internally or externally


      if (location !== prevLocation && !this.getLocationState('silent')) {
        this.setForcedByLocation();
        this.setState({
          isDirty: true
        });
      }
    }
  }, {
    key: "getLocationState",

    /**
     * Getter for location state properties.
     *
     * NOTE: Each location on the history stack has its own optional state object that is wholly separate from
     * this component's internal state. Values on the location state object can persist even between refreshes
     * when using certain history contexts, such as BrowserHistory.
     *
     * @param key - Optionally get a specific key value from state
     * @returns {any} - The location state or state key value
     */
    value: function getLocationState(key) {
      var location = this.props.location;
      var _location$state = location.state,
          locationState = _location$state === void 0 ? {} : _location$state;
      return getProp(locationState, key);
    }
    /**
     * Getter/setter for sidebar forced state
     *
     * @param isOpen - Optionally set the sidebar to open/closed
     * @returns {string|null} - The sidebar open/closed state
     */

  }, {
    key: "isForced",
    value: function isForced(isOpen) {
      if (isOpen !== undefined) {
        this.store.setItem(SIDEBAR_FORCE_KEY, isOpen ? SIDEBAR_FORCE_VALUE_OPEN : SIDEBAR_FORCE_VALUE_CLOSED);
      }

      return this.store.getItem(SIDEBAR_FORCE_KEY);
    }
    /**
     * Getter for whether the sidebar has been forced open
     * @returns {boolean} - True if the sidebar has been forced open
     */

  }, {
    key: "isForcedOpen",
    value: function isForcedOpen() {
      return this.isForced() === SIDEBAR_FORCE_VALUE_OPEN;
    }
    /**
     * Getter for whether the sidebar has been forced open/closed previously
     * @returns {boolean} - True if the sidebar has been forced open/closed previously
     */

  }, {
    key: "isForcedSet",
    value: function isForcedSet() {
      return this.isForced() !== null;
    }
    /**
     * Refreshes the sidebar panel
     * @returns {void}
     */

  }, {
    key: "refresh",
    value: function refresh() {
      var shouldRefreshCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var sidebarPanels = this.sidebarPanels.current;

      if (sidebarPanels) {
        sidebarPanels.refresh(shouldRefreshCache);
      }
    }
    /**
     * Helper to set the local store open state based on the location open state, if defined
     */

  }, {
    key: "setForcedByLocation",
    value: function setForcedByLocation() {
      var isLocationOpen = this.getLocationState('open');

      if (isLocationOpen !== undefined && isLocationOpen !== null) {
        this.isForced(isLocationOpen);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          activitySidebarProps = _this$props3.activitySidebarProps,
          additionalTabs = _this$props3.additionalTabs,
          className = _this$props3.className,
          currentUser = _this$props3.currentUser,
          detailsSidebarProps = _this$props3.detailsSidebarProps,
          file = _this$props3.file,
          fileId = _this$props3.fileId,
          getPreview = _this$props3.getPreview,
          getViewer = _this$props3.getViewer,
          hasAdditionalTabs = _this$props3.hasAdditionalTabs,
          hasVersions = _this$props3.hasVersions,
          isDefaultOpen = _this$props3.isDefaultOpen,
          isLoading = _this$props3.isLoading,
          metadataEditors = _this$props3.metadataEditors,
          metadataSidebarProps = _this$props3.metadataSidebarProps,
          onAnnotationSelect = _this$props3.onAnnotationSelect,
          onVersionChange = _this$props3.onVersionChange,
          versionsSidebarProps = _this$props3.versionsSidebarProps;
      var isOpen = this.isForcedSet() ? this.isForcedOpen() : !!isDefaultOpen;
      var hasActivity = SidebarUtils.canHaveActivitySidebar(this.props);
      var hasDetails = SidebarUtils.canHaveDetailsSidebar(this.props);
      var hasMetadata = SidebarUtils.shouldRenderMetadataSidebar(this.props, metadataEditors);
      var hasSkills = SidebarUtils.shouldRenderSkillsSidebar(this.props, file);
      var onVersionHistoryClick = hasVersions ? this.handleVersionHistoryClick : this.props.onVersionHistoryClick;
      var styleClassName = classNames('be bcs', className, {
        'bcs-is-open': isOpen
      });
      return React.createElement("aside", {
        id: this.id,
        className: styleClassName
      }, isLoading ? React.createElement("div", {
        className: "bcs-loading"
      }, React.createElement(LoadingIndicator, null)) : React.createElement(React.Fragment, null, React.createElement(SidebarNav, {
        additionalTabs: additionalTabs,
        elementId: this.id,
        fileId: fileId,
        hasActivity: hasActivity,
        hasAdditionalTabs: hasAdditionalTabs,
        hasDetails: hasDetails,
        hasMetadata: hasMetadata,
        hasSkills: hasSkills,
        isOpen: isOpen
      }), React.createElement(SidebarPanels, {
        activitySidebarProps: activitySidebarProps,
        currentUser: currentUser,
        elementId: this.id,
        detailsSidebarProps: detailsSidebarProps,
        file: file,
        fileId: fileId,
        getPreview: getPreview,
        getViewer: getViewer,
        hasActivity: hasActivity,
        hasDetails: hasDetails,
        hasMetadata: hasMetadata,
        hasSkills: hasSkills,
        hasVersions: hasVersions,
        isOpen: isOpen,
        key: file.id,
        metadataSidebarProps: metadataSidebarProps,
        onAnnotationSelect: onAnnotationSelect,
        onVersionChange: onVersionChange,
        onVersionHistoryClick: onVersionHistoryClick,
        ref: this.sidebarPanels,
        versionsSidebarProps: versionsSidebarProps
      })));
    }
  }]);

  return Sidebar;
}(React.Component);

_defineProperty(Sidebar, "defaultProps", {
  annotatorState: {},
  isDefaultOpen: true,
  isLoading: false,
  getAnnotationsMatchPath: noop,
  getAnnotationsPath: noop
});

export { Sidebar as SidebarComponent };
export default flow([withFeatureConsumer, withRouter])(Sidebar);
//# sourceMappingURL=Sidebar.js.map