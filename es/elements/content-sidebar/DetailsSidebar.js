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
 * @file Details sidebar component
 * @author Box
 */
import React from 'react';
import flow from 'lodash/flow';
import getProp from 'lodash/get';
import noop from 'lodash/noop';
import { FormattedMessage } from 'react-intl';
import API from '../../api';
import messages from '../common/messages';
import SidebarAccessStats from './SidebarAccessStats';
import SidebarClassification from './SidebarClassification';
import SidebarContent from './SidebarContent';
import SidebarFileProperties from './SidebarFileProperties';
import SidebarNotices from './SidebarNotices';
import SidebarSection from './SidebarSection';
import SidebarVersions from './SidebarVersions';
import { EVENT_JS_READY } from '../common/logger/constants';
import { getBadItemError } from '../../utils/error';
import { mark } from '../../utils/performance';
import { SECTION_TARGETS } from '../common/interactionTargets';
import { SIDEBAR_FIELDS_TO_FETCH } from '../../utils/fields';
import { withAPIContext } from '../common/api-context';
import { withErrorBoundary } from '../common/error-boundary';
import { withLogger } from '../common/logger';
import { HTTP_STATUS_CODE_FORBIDDEN, ORIGIN_DETAILS_SIDEBAR, IS_ERROR_DISPLAYED, SIDEBAR_VIEW_DETAILS } from '../../constants';
import './DetailsSidebar.scss';
var MARK_NAME_JS_READY = "".concat(ORIGIN_DETAILS_SIDEBAR, "_").concat(EVENT_JS_READY);
mark(MARK_NAME_JS_READY);

var DetailsSidebar =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(DetailsSidebar, _React$PureComponent);

  function DetailsSidebar(props) {
    var _this;

    _classCallCheck(this, DetailsSidebar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DetailsSidebar).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "descriptionChangeSuccessCallback", function (file) {
      _this.setState({
        file: file,
        fileError: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fetchFileSuccessCallback", function (file) {
      _this.setState({
        file: file,
        fileError: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fetchFileErrorCallback", function (e, code) {
      // TODO: handle the error properly (probably with maskError) once files call split out
      _this.setState({
        file: undefined
      });

      _this.props.onError(e, code, {
        e: e
      });
    });

    _defineProperty(_assertThisInitialized(_this), "descriptionChangeErrorCallback", function (file) {
      // Reset the state back to the original description since the API call failed
      _this.setState({
        file: file,
        fileError: {
          inlineError: {
            title: messages.fileDescriptionInlineErrorTitleMessage,
            content: messages.defaultInlineErrorContentMessage
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDescriptionChange", function (newDescription) {
      var api = _this.props.api;
      var file = _this.state.file;

      if (!file) {
        throw getBadItemError();
      }

      var description = file.description;

      if (newDescription === description) {
        return;
      }

      api.getFileAPI().setFileDescription(file, newDescription, _this.descriptionChangeSuccessCallback, _this.descriptionChangeErrorCallback);
    });

    _defineProperty(_assertThisInitialized(_this), "fetchAccessStatsErrorCallback", function (e, code) {
      if (!_this.props.hasAccessStats) {
        return;
      }

      var isForbidden = getProp(e, 'status') === HTTP_STATUS_CODE_FORBIDDEN;
      var accessStatsError;

      if (isForbidden) {
        accessStatsError = {
          error: messages.fileAccessStatsPermissionsError
        };
      } else {
        accessStatsError = {
          maskError: {
            errorHeader: messages.fileAccessStatsErrorHeaderMessage,
            errorSubHeader: messages.defaultErrorMaskSubHeaderMessage
          }
        };
      }

      _this.setState({
        isLoadingAccessStats: false,
        accessStats: undefined,
        accessStatsError: accessStatsError
      });

      _this.props.onError(e, code, _defineProperty({
        e: e
      }, IS_ERROR_DISPLAYED, !isForbidden));
    });

    _defineProperty(_assertThisInitialized(_this), "fetchAccessStatsSuccessCallback", function (accessStats) {
      if (!_this.props.hasAccessStats) {
        return;
      }

      _this.setState({
        accessStats: accessStats,
        accessStatsError: undefined,
        isLoadingAccessStats: false
      });
    });

    _this.state = {
      isLoadingAccessStats: false
    };
    var logger = _this.props.logger;
    logger.onReadyMetric({
      endMarkName: MARK_NAME_JS_READY
    });
    return _this;
  }

  _createClass(DetailsSidebar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchFile();

      if (this.props.hasAccessStats) {
        this.fetchAccessStats();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var prevHasAccessStats = _ref.hasAccessStats;
      var hasAccessStats = this.props.hasAccessStats; // Component visibility props such as hasAccessStats can sometimes be flipped after an async call

      var hasAccessStatsChanged = prevHasAccessStats !== hasAccessStats;

      if (hasAccessStatsChanged) {
        if (hasAccessStats) {
          this.fetchAccessStats();
        } else {
          this.setState({
            isLoadingAccessStats: false,
            accessStats: undefined,
            accessStatsError: undefined
          });
        }
      }
    }
    /**
     * File description update callback
     *
     * @private
     * @param {BoxItem} file - Updated file object
     * @return {void}
     */

  }, {
    key: "fetchFile",

    /**
     * Fetches a file with the fields needed for details sidebar
     *
     * @param {Function} successCallback - the success callback
     * @param {Function} errorCallback - the error callback
     * @return {void}
     */
    value: function fetchFile() {
      var successCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.fetchFileSuccessCallback;
      var errorCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.fetchFileErrorCallback;
      var _this$props = this.props,
          api = _this$props.api,
          fileId = _this$props.fileId;
      api.getFileAPI().getFile(fileId, successCallback, errorCallback, {
        fields: SIDEBAR_FIELDS_TO_FETCH // TODO: replace this with DETAILS_SIDEBAR_FIELDS_TO_FETCH as we do not need all the sidebar fields

      });
    }
    /**
     * Handles a successful file fetch
     *
     * @param {Object} file - the box file
     * @return {void}
     */

  }, {
    key: "fetchAccessStats",

    /**
     * Fetches the access stats for a file
     *
     * @private
     * @return {void}
     */
    value: function fetchAccessStats() {
      var _this$props2 = this.props,
          api = _this$props2.api,
          fileId = _this$props2.fileId;
      var isLoadingAccessStats = this.state.isLoadingAccessStats;

      if (isLoadingAccessStats) {
        return;
      }

      this.setState({
        isLoadingAccessStats: true
      });
      api.getFileAccessStatsAPI(false).getFileAccessStats(fileId, this.fetchAccessStatsSuccessCallback, this.fetchAccessStatsErrorCallback);
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.fetchAccessStats();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          classification = _this$props3.classification,
          elementId = _this$props3.elementId,
          hasProperties = _this$props3.hasProperties,
          hasNotices = _this$props3.hasNotices,
          hasAccessStats = _this$props3.hasAccessStats,
          hasClassification = _this$props3.hasClassification,
          hasRetentionPolicy = _this$props3.hasRetentionPolicy,
          hasVersions = _this$props3.hasVersions,
          onAccessStatsClick = _this$props3.onAccessStatsClick,
          onVersionHistoryClick = _this$props3.onVersionHistoryClick,
          onClassificationClick = _this$props3.onClassificationClick,
          onRetentionPolicyExtendClick = _this$props3.onRetentionPolicyExtendClick,
          retentionPolicy = _this$props3.retentionPolicy;
      var _this$state = this.state,
          accessStats = _this$state.accessStats,
          accessStatsError = _this$state.accessStatsError,
          file = _this$state.file,
          fileError = _this$state.fileError,
          isLoadingAccessStats = _this$state.isLoadingAccessStats; // TODO: Add loading indicator and handle errors once file call is split out

      return React.createElement(SidebarContent, {
        className: "bcs-details",
        elementId: elementId,
        sidebarView: SIDEBAR_VIEW_DETAILS,
        title: React.createElement(FormattedMessage, messages.sidebarDetailsTitle)
      }, file && hasNotices && React.createElement("div", {
        className: "bcs-DetailsSidebar-notices"
      }, React.createElement(SidebarNotices, {
        file: file
      })), file && hasClassification && React.createElement(SidebarClassification, {
        classification: classification,
        file: file,
        onEdit: onClassificationClick
      }), file && hasAccessStats && React.createElement(SidebarAccessStats, _extends({
        accessStats: accessStats,
        file: file,
        onAccessStatsClick: onAccessStatsClick
      }, accessStatsError)), file && hasProperties && React.createElement(SidebarSection, {
        interactionTarget: SECTION_TARGETS.FILE_PROPERTIES,
        title: React.createElement(FormattedMessage, messages.sidebarProperties)
      }, hasVersions && React.createElement(SidebarVersions, {
        file: file,
        onVersionHistoryClick: onVersionHistoryClick
      }), React.createElement(SidebarFileProperties, _extends({
        file: file,
        onDescriptionChange: this.onDescriptionChange
      }, fileError, {
        hasRetentionPolicy: hasRetentionPolicy,
        isLoading: isLoadingAccessStats,
        onRetentionPolicyExtendClick: onRetentionPolicyExtendClick,
        retentionPolicy: retentionPolicy
      }))));
    }
  }]);

  return DetailsSidebar;
}(React.PureComponent);

_defineProperty(DetailsSidebar, "defaultProps", {
  hasNotices: false,
  hasProperties: false,
  hasAccessStats: false,
  hasClassification: false,
  hasRetentionPolicy: false,
  hasVersions: false,
  onError: noop
});

export { DetailsSidebar as DetailsSidebarComponent };
export default flow([withLogger(ORIGIN_DETAILS_SIDEBAR), withErrorBoundary(ORIGIN_DETAILS_SIDEBAR), withAPIContext])(DetailsSidebar);
//# sourceMappingURL=DetailsSidebar.js.map