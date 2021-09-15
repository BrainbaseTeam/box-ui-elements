function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 
 * @file Utility for sidebar
 * @author Box
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import AsyncLoad from '../common/async-load';
import messages from '../common/messages';
import SidebarLoading from './SidebarLoading';
import SidebarLoadingError from './SidebarLoadingError';
import { hasSkills as hasSkillsData } from './skills/skillUtils';
import { mark } from '../../utils/performance';
import { SIDEBAR_VIEW_SKILLS, SIDEBAR_VIEW_ACTIVITY, SIDEBAR_VIEW_METADATA, SIDEBAR_VIEW_DETAILS, SIDEBAR_VIEW_VERSIONS } from '../../constants';

var SidebarUtils =
/*#__PURE__*/
function () {
  function SidebarUtils() {
    _classCallCheck(this, SidebarUtils);
  }

  _createClass(SidebarUtils, null, [{
    key: "canHaveDetailsSidebar",

    /**
     * Determines if we can render the details sidebar.
     * Only relies on props.
     *
     * @param {ContentSidebarProps} props - User passed in props
     * @return {Boolean} true if we should render
     */
    value: function canHaveDetailsSidebar(_ref) {
      var _ref$detailsSidebarPr = _ref.detailsSidebarProps,
          detailsSidebarProps = _ref$detailsSidebarPr === void 0 ? {} : _ref$detailsSidebarPr;
      var hasProperties = detailsSidebarProps.hasProperties,
          hasAccessStats = detailsSidebarProps.hasAccessStats,
          hasClassification = detailsSidebarProps.hasClassification,
          hasVersions = detailsSidebarProps.hasVersions,
          hasNotices = detailsSidebarProps.hasNotices;
      return !!hasProperties || !!hasAccessStats || !!hasClassification || !!hasVersions || !!hasNotices;
    }
    /**
     * Determines if we can render the metadata sidebar.
     * Only relies on props.
     *
     * @param {ContentSidebarProps} props - User passed in props
     * @return {Boolean} true if we should render
     */

  }, {
    key: "canHaveMetadataSidebar",
    value: function canHaveMetadataSidebar(props) {
      return !!props.hasMetadata;
    }
    /**
     * Determines if we can render the activity sidebar.
     * Only relies on props.
     *
     * @param {ContentSidebarProps} props - User passed in props
     * @return {Boolean} true if we should render
     */

  }, {
    key: "canHaveActivitySidebar",
    value: function canHaveActivitySidebar(props) {
      return !!props.hasActivityFeed;
    }
    /**
     * Determines if we can render the skills sidebar.
     * Only relies on props.
     *
     * @param {ContentSidebarProps} props - User passed in props
     * @return {Boolean} true if we should render
     */

  }, {
    key: "canHaveSkillsSidebar",
    value: function canHaveSkillsSidebar(props) {
      return !!props.hasSkills;
    }
    /**
     * Determines if we can render the sidebar.
     * Only relies on props.
     *
     * @param {ContentSidebarProps} props - User passed in props
     * @return {Boolean} true if we should have a sidebar
     */

  }, {
    key: "canHaveSidebar",
    value: function canHaveSidebar(props) {
      return SidebarUtils.canHaveDetailsSidebar(props) || SidebarUtils.canHaveActivitySidebar(props) || SidebarUtils.canHaveSkillsSidebar(props) || SidebarUtils.canHaveMetadataSidebar(props);
    }
    /**
     * Determines if we should bother rendering the skills sidebar.
     * Relies on props and file data.
     *
     * @private
     * @param {ContentSidebarProps} props - User passed in props
     * @param {BoxItem} file - box file
     * @return {Boolean} true if we should render
     */

  }, {
    key: "shouldRenderSkillsSidebar",
    value: function shouldRenderSkillsSidebar(props, file) {
      return !!file && SidebarUtils.canHaveSkillsSidebar(props) && hasSkillsData(file);
    }
    /**
     * Determines if we should bother rendering the metadata sidebar.
     * Relies on props and metadata data and feature enabled or not.
     *
     * @private
     * @param {ContentSidebarProps} props - User passed in props
     * @param {Array<MetadataEditor>} editors - metadata editors
     * @return {Boolean} true if we should render
     */

  }, {
    key: "shouldRenderMetadataSidebar",
    value: function shouldRenderMetadataSidebar(props, editors) {
      var _props$metadataSideba = props.metadataSidebarProps,
          metadataSidebarProps = _props$metadataSideba === void 0 ? {} : _props$metadataSideba;
      var _metadataSidebarProps = metadataSidebarProps.isFeatureEnabled,
          isFeatureEnabled = _metadataSidebarProps === void 0 ? true : _metadataSidebarProps;
      return SidebarUtils.canHaveMetadataSidebar(props) && (isFeatureEnabled || Array.isArray(editors) && editors.length > 0);
    }
    /**
     * Determines if we should bother rendering the sidebar.
     * Relies on props and file data.
     *
     * @param {ContentSidebarProps} props - User passed in props
     * @param {BoxItem} file - box file
     * @param {Array<MetadataEditor>} editors - metadata editors
     * @return {Boolean} true if we should fetch or render
     */

  }, {
    key: "shouldRenderSidebar",
    value: function shouldRenderSidebar(props, file, editors) {
      return !!file && (SidebarUtils.canHaveDetailsSidebar(props) || SidebarUtils.shouldRenderSkillsSidebar(props, file) || SidebarUtils.canHaveActivitySidebar(props) || SidebarUtils.shouldRenderMetadataSidebar(props, editors));
    }
    /**
     * Gets the title for a given sidebar view
     *
     * @param {string} view - the view name
     * @return {React.Node} - the node to render
     */

  }, {
    key: "getTitleForView",
    value: function getTitleForView(view) {
      switch (view) {
        case SIDEBAR_VIEW_SKILLS:
          return React.createElement(FormattedMessage, messages.sidebarSkillsTitle);

        case SIDEBAR_VIEW_DETAILS:
          return React.createElement(FormattedMessage, messages.sidebarDetailsTitle);

        case SIDEBAR_VIEW_METADATA:
          return React.createElement(FormattedMessage, messages.sidebarMetadataTitle);

        case SIDEBAR_VIEW_ACTIVITY:
          return React.createElement(FormattedMessage, messages.sidebarActivityTitle);

        default:
          return null;
      }
    }
    /**
     * Marks and gets the loader for a given sidebar view
     *
     * @param {String} view - the view name
     * @param {String} markName -  the name to be used by performance.mark
     * @return {Function} - a function which will resolve the module to load
     */

  }, {
    key: "getLoaderForView",
    value: function getLoaderForView(view, markName) {
      mark(markName);
      var importFn;

      switch (view) {
        case SIDEBAR_VIEW_SKILLS:
          importFn = import(
          /* webpackMode: "lazy", webpackChunkName: "skills-sidebar" */
          './SkillsSidebar');
          break;

        case SIDEBAR_VIEW_DETAILS:
          importFn = import(
          /* webpackMode: "lazy", webpackChunkName: "details-sidebar" */
          './DetailsSidebar');
          break;

        case SIDEBAR_VIEW_METADATA:
          importFn = import(
          /* webpackMode: "lazy", webpackChunkName: "metadata-sidebar" */
          './MetadataSidebar');
          break;

        case SIDEBAR_VIEW_ACTIVITY:
          importFn = import(
          /* webpackMode: "lazy", webpackChunkName: "activity-sidebar" */
          './ActivitySidebar');
          break;

        case SIDEBAR_VIEW_VERSIONS:
          importFn = import(
          /* webpackMode: "lazy", webpackChunkName: "versions-sidebar" */
          './versions');
          break;

        default:
          return Promise.resolve(null);
      }

      return importFn;
    }
    /**
     * Gets the component which async loads a given sidebar view
     *
     * @param {String} view - the view name
     * @param {String} markName -  the name to be used by performance.mark
     * @param {Object} props - additional props
     * @return {React.Node} - the node to render
     */

  }, {
    key: "getAsyncSidebarContent",
    value: function getAsyncSidebarContent(view, markName) {
      var _this = this;

      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return AsyncLoad(_objectSpread({
        errorComponent: SidebarLoadingError,
        fallback: React.createElement(SidebarLoading, {
          title: this.getTitleForView(view)
        }),
        loader: function loader() {
          return _this.getLoaderForView(view, markName);
        }
      }, props));
    }
  }]);

  return SidebarUtils;
}();

export default SidebarUtils;
//# sourceMappingURL=SidebarUtils.js.map