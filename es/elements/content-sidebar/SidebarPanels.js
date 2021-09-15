function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
 * @file Content Sidebar Panels component
 * @author Box
 */
import * as React from 'react';
import flow from 'lodash/flow';
import { Redirect, Route, Switch } from 'react-router-dom';
import SidebarUtils from './SidebarUtils';
import withSidebarAnnotations from './withSidebarAnnotations';
import { withAnnotatorContext } from '../common/annotator-context';
import { withAPIContext } from '../common/api-context';
import { withRouterAndRef } from '../common/routing';
import { ORIGIN_ACTIVITY_SIDEBAR, ORIGIN_DETAILS_SIDEBAR, ORIGIN_METADATA_SIDEBAR, ORIGIN_SKILLS_SIDEBAR, ORIGIN_VERSIONS_SIDEBAR, SIDEBAR_VIEW_ACTIVITY, SIDEBAR_VIEW_DETAILS, SIDEBAR_VIEW_METADATA, SIDEBAR_VIEW_SKILLS, SIDEBAR_VIEW_VERSIONS } from '../../constants';
// TODO: place into code splitting logic
var BASE_EVENT_NAME = '_JS_LOADING';
var MARK_NAME_JS_LOADING_DETAILS = "".concat(ORIGIN_DETAILS_SIDEBAR).concat(BASE_EVENT_NAME);
var MARK_NAME_JS_LOADING_ACTIVITY = "".concat(ORIGIN_ACTIVITY_SIDEBAR).concat(BASE_EVENT_NAME);
var MARK_NAME_JS_LOADING_SKILLS = "".concat(ORIGIN_SKILLS_SIDEBAR).concat(BASE_EVENT_NAME);
var MARK_NAME_JS_LOADING_METADATA = "".concat(ORIGIN_METADATA_SIDEBAR).concat(BASE_EVENT_NAME);
var MARK_NAME_JS_LOADING_VERSIONS = "".concat(ORIGIN_VERSIONS_SIDEBAR).concat(BASE_EVENT_NAME);
var URL_TO_FEED_ITEM_TYPE = {
  annotations: 'annotation',
  comments: 'comment',
  tasks: 'task'
};
var LoadableDetailsSidebar = SidebarUtils.getAsyncSidebarContent(SIDEBAR_VIEW_DETAILS, MARK_NAME_JS_LOADING_DETAILS);
var LoadableActivitySidebar = SidebarUtils.getAsyncSidebarContent(SIDEBAR_VIEW_ACTIVITY, MARK_NAME_JS_LOADING_ACTIVITY);
var LoadableSkillsSidebar = SidebarUtils.getAsyncSidebarContent(SIDEBAR_VIEW_SKILLS, MARK_NAME_JS_LOADING_SKILLS);
var LoadableMetadataSidebar = SidebarUtils.getAsyncSidebarContent(SIDEBAR_VIEW_METADATA, MARK_NAME_JS_LOADING_METADATA);
var LoadableVersionsSidebar = SidebarUtils.getAsyncSidebarContent(SIDEBAR_VIEW_VERSIONS, MARK_NAME_JS_LOADING_VERSIONS);

var SidebarPanels =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SidebarPanels, _React$Component);

  function SidebarPanels() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SidebarPanels);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SidebarPanels)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "activitySidebar", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "detailsSidebar", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "metadataSidebar", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "state", {
      isInitialized: false
    });

    _defineProperty(_assertThisInitialized(_this), "versionsSidebar", React.createRef());

    return _this;
  }

  _createClass(SidebarPanels, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        isInitialized: true
      });
    }
    /**
     * Refreshes the contents of the active sidebar
     * @returns {void}
     */

  }, {
    key: "refresh",
    value: function refresh() {
      var shouldRefreshCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var activitySidebar = this.activitySidebar.current;
      var detailsSidebar = this.detailsSidebar.current;
      var metadataSidebar = this.metadataSidebar.current;
      var versionsSidebar = this.versionsSidebar.current;

      if (activitySidebar) {
        activitySidebar.refresh(shouldRefreshCache);
      }

      if (detailsSidebar) {
        detailsSidebar.refresh();
      }

      if (metadataSidebar) {
        metadataSidebar.refresh();
      }

      if (versionsSidebar) {
        versionsSidebar.refresh();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          activitySidebarProps = _this$props.activitySidebarProps,
          currentUser = _this$props.currentUser,
          detailsSidebarProps = _this$props.detailsSidebarProps,
          elementId = _this$props.elementId,
          file = _this$props.file,
          fileId = _this$props.fileId,
          getPreview = _this$props.getPreview,
          getViewer = _this$props.getViewer,
          hasActivity = _this$props.hasActivity,
          hasDetails = _this$props.hasDetails,
          hasMetadata = _this$props.hasMetadata,
          hasSkills = _this$props.hasSkills,
          hasVersions = _this$props.hasVersions,
          isOpen = _this$props.isOpen,
          metadataSidebarProps = _this$props.metadataSidebarProps,
          onAnnotationSelect = _this$props.onAnnotationSelect,
          onVersionChange = _this$props.onVersionChange,
          onVersionHistoryClick = _this$props.onVersionHistoryClick,
          versionsSidebarProps = _this$props.versionsSidebarProps;
      var isInitialized = this.state.isInitialized;

      if (!isOpen || !hasActivity && !hasDetails && !hasMetadata && !hasSkills && !hasVersions) {
        return null;
      }

      return React.createElement(Switch, null, hasSkills && React.createElement(Route, {
        exact: true,
        path: "/".concat(SIDEBAR_VIEW_SKILLS),
        render: function render() {
          return React.createElement(LoadableSkillsSidebar, {
            elementId: elementId,
            key: file.id,
            file: file,
            getPreview: getPreview,
            getViewer: getViewer,
            hasSidebarInitialized: isInitialized,
            startMarkName: MARK_NAME_JS_LOADING_SKILLS
          });
        }
      }), hasActivity && React.createElement(Route, {
        exact: true,
        path: ["/".concat(SIDEBAR_VIEW_ACTIVITY), "/".concat(SIDEBAR_VIEW_ACTIVITY, "/:activeFeedEntryType(annotations)/:fileVersionId/:activeFeedEntryId?"), "/".concat(SIDEBAR_VIEW_ACTIVITY, "/:activeFeedEntryType(comments|tasks)/:activeFeedEntryId?")],
        render: function render(_ref) {
          var match = _ref.match;
          var matchEntryType = match.params.activeFeedEntryType;
          var activeFeedEntryType = matchEntryType ? URL_TO_FEED_ITEM_TYPE[matchEntryType] : undefined;
          return React.createElement(LoadableActivitySidebar, _extends({
            elementId: elementId,
            currentUser: currentUser,
            file: file,
            hasSidebarInitialized: isInitialized,
            onAnnotationSelect: onAnnotationSelect,
            onVersionChange: onVersionChange,
            onVersionHistoryClick: onVersionHistoryClick,
            ref: _this2.activitySidebar,
            startMarkName: MARK_NAME_JS_LOADING_ACTIVITY,
            activeFeedEntryId: match.params.activeFeedEntryId,
            activeFeedEntryType: match.params.activeFeedEntryId && activeFeedEntryType
          }, activitySidebarProps));
        }
      }), hasDetails && React.createElement(Route, {
        exact: true,
        path: "/".concat(SIDEBAR_VIEW_DETAILS),
        render: function render() {
          return React.createElement(LoadableDetailsSidebar, _extends({
            elementId: elementId,
            fileId: fileId,
            hasSidebarInitialized: isInitialized,
            key: fileId,
            hasVersions: hasVersions,
            onVersionHistoryClick: onVersionHistoryClick,
            ref: _this2.detailsSidebar,
            startMarkName: MARK_NAME_JS_LOADING_DETAILS
          }, detailsSidebarProps));
        }
      }), hasMetadata && React.createElement(Route, {
        exact: true,
        path: "/".concat(SIDEBAR_VIEW_METADATA),
        render: function render() {
          return React.createElement(LoadableMetadataSidebar, _extends({
            elementId: elementId,
            fileId: fileId,
            hasSidebarInitialized: isInitialized,
            ref: _this2.metadataSidebar,
            startMarkName: MARK_NAME_JS_LOADING_METADATA
          }, metadataSidebarProps));
        }
      }), hasVersions && React.createElement(Route, {
        path: "/:sidebar(activity|details)/versions/:versionId?",
        render: function render(_ref2) {
          var match = _ref2.match;
          return React.createElement(LoadableVersionsSidebar, _extends({
            fileId: fileId,
            hasSidebarInitialized: isInitialized,
            key: fileId,
            onVersionChange: onVersionChange,
            parentName: match.params.sidebar,
            ref: _this2.versionsSidebar,
            versionId: match.params.versionId
          }, versionsSidebarProps));
        }
      }), React.createElement(Route, {
        render: function render() {
          var redirect = '';

          if (hasSkills) {
            redirect = SIDEBAR_VIEW_SKILLS;
          } else if (hasActivity) {
            redirect = SIDEBAR_VIEW_ACTIVITY;
          } else if (hasDetails) {
            redirect = SIDEBAR_VIEW_DETAILS;
          } else if (hasMetadata) {
            redirect = SIDEBAR_VIEW_METADATA;
          }

          return React.createElement(Redirect, {
            to: {
              pathname: "/".concat(redirect),
              state: {
                silent: true
              }
            }
          });
        }
      }));
    }
  }]);

  return SidebarPanels;
}(React.Component);

export { SidebarPanels as SidebarPanelsComponent };
export default flow([withSidebarAnnotations, withAPIContext, withAnnotatorContext, withRouterAndRef])(SidebarPanels);
//# sourceMappingURL=SidebarPanels.js.map