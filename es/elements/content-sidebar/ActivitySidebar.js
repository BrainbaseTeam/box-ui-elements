function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Activity feed sidebar component
 * @author Box
 */
import * as React from 'react';
import debounce from 'lodash/debounce';
import flow from 'lodash/flow';
import noop from 'lodash/noop';
import { FormattedMessage } from 'react-intl';
import ActivityFeed from './activity-feed';
import AddTaskButton from './AddTaskButton';
import API from '../../api';
import messages from '../common/messages';
import SidebarContent from './SidebarContent';
import { EVENT_JS_READY } from '../common/logger/constants';
import { getBadUserError, getBadItemError } from '../../utils/error';
import { mark } from '../../utils/performance';
import { withAPIContext } from '../common/api-context';
import { withErrorBoundary } from '../common/error-boundary';
import { withFeatureConsumer, isFeatureEnabled } from '../common/feature-checking';
import { withLogger } from '../common/logger';
import { DEFAULT_COLLAB_DEBOUNCE, ORIGIN_ACTIVITY_SIDEBAR, SIDEBAR_VIEW_ACTIVITY, TASK_COMPLETION_RULE_ALL } from '../../constants';
import './ActivitySidebar.scss';
export var activityFeedInlineError = {
  inlineError: {
    title: messages.errorOccured,
    content: messages.activityFeedItemApiError
  }
};
var MARK_NAME_JS_READY = "".concat(ORIGIN_ACTIVITY_SIDEBAR, "_").concat(EVENT_JS_READY);
mark(MARK_NAME_JS_READY);

var ActivitySidebar = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(ActivitySidebar, _React$PureComponent);

  var _super = _createSuper(ActivitySidebar);

  function ActivitySidebar(props) {
    var _this;

    _classCallCheck(this, ActivitySidebar);

    _this = _super.call(this, props); // eslint-disable-next-line react/prop-types

    _defineProperty(_assertThisInitialized(_this), "feedSuccessCallback", function () {
      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "feedErrorCallback", function (e, code, contextInfo) {
      _this.errorCallback(e, code, contextInfo);

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "createTask", function (message, assignees, taskType, dueAt, completionRule, onSuccess, onError) {
      var currentUser = _this.state.currentUser;
      var _this$props = _this.props,
          file = _this$props.file,
          api = _this$props.api;

      if (!currentUser) {
        throw getBadUserError();
      }

      var errorCallback = function errorCallback(e, code, contextInfo) {
        if (onError) {
          onError(e, code, contextInfo);
        }

        _this.feedErrorCallback(e, code, contextInfo);
      };

      var successCallback = function successCallback() {
        if (onSuccess) {
          onSuccess();
        }

        _this.feedSuccessCallback();
      };

      api.getFeedAPI(false).createTaskNew(file, currentUser, message, assignees, taskType, dueAt, completionRule, successCallback, errorCallback); // need to load the pending item

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "deleteTask", function (task) {
      var _this$props2 = _this.props,
          file = _this$props2.file,
          api = _this$props2.api,
          onTaskDelete = _this$props2.onTaskDelete;
      api.getFeedAPI(false).deleteTaskNew(file, task, function (taskId) {
        _this.feedSuccessCallback();

        onTaskDelete(taskId);
      }, _this.feedErrorCallback); // need to load the pending item

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "updateTask", function (task, onSuccess, onError) {
      var _this$props3 = _this.props,
          file = _this$props3.file,
          api = _this$props3.api,
          onTaskUpdate = _this$props3.onTaskUpdate;

      var errorCallback = function errorCallback(e, code) {
        if (onError) {
          onError(e, code);
        }

        _this.feedErrorCallback(e, code);
      };

      var successCallback = function successCallback() {
        _this.feedSuccessCallback();

        if (onSuccess) {
          onSuccess();
        }

        onTaskUpdate();
      };

      api.getFeedAPI(false).updateTaskNew(file, task, successCallback, errorCallback); // need to load the pending item

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "updateTaskAssignment", function (taskId, taskAssignmentId, status) {
      var _this$props4 = _this.props,
          file = _this$props4.file,
          api = _this$props4.api;
      api.getFeedAPI(false).updateTaskCollaborator(file, taskId, taskAssignmentId, status, _this.feedSuccessCallback, _this.feedErrorCallback); // need to load the pending item

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "deleteComment", function (_ref) {
      var id = _ref.id,
          permissions = _ref.permissions;
      var _this$props5 = _this.props,
          file = _this$props5.file,
          api = _this$props5.api,
          onCommentDelete = _this$props5.onCommentDelete;
      api.getFeedAPI(false).deleteComment(file, id, permissions, function (comment) {
        _this.feedSuccessCallback();

        onCommentDelete(comment);
      }, _this.feedErrorCallback); // need to load the pending item

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "updateComment", function (id, text, hasMention, permissions, onSuccess, onError) {
      var _this$props6 = _this.props,
          file = _this$props6.file,
          api = _this$props6.api,
          onCommentUpdate = _this$props6.onCommentUpdate;

      var errorCallback = function errorCallback(e, code) {
        if (onError) {
          onError(e, code);
        }

        _this.feedErrorCallback(e, code);
      };

      var successCallback = function successCallback() {
        _this.feedSuccessCallback();

        if (onSuccess) {
          onSuccess();
        }

        onCommentUpdate();
      };

      api.getFeedAPI(false).updateComment(file, id, text, hasMention, permissions, successCallback, errorCallback); // need to load the pending item

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "createComment", function (text, hasMention) {
      var _this$props7 = _this.props,
          file = _this$props7.file,
          api = _this$props7.api,
          onCommentCreate = _this$props7.onCommentCreate;
      var currentUser = _this.state.currentUser;

      if (!currentUser) {
        throw getBadUserError();
      }

      api.getFeedAPI(false).createComment(file, currentUser, text, hasMention, function (comment) {
        onCommentCreate(comment);

        _this.feedSuccessCallback();
      }, _this.feedErrorCallback); // need to load the pending item

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "deleteAppActivity", function (_ref2) {
      var id = _ref2.id;
      var _this$props8 = _this.props,
          file = _this$props8.file,
          api = _this$props8.api;
      api.getFeedAPI(false).deleteAppActivity(file, id, _this.feedSuccessCallback, _this.feedErrorCallback); // need to load the pending item

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "fetchFeedItemsSuccessCallback", function (feedItems) {
      _this.setState({
        feedItems: feedItems,
        activityFeedError: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fetchFeedItemsErrorCallback", function (feedItems) {
      _this.setState({
        feedItems: feedItems,
        activityFeedError: activityFeedInlineError
      });
    });

    _defineProperty(_assertThisInitialized(_this), "errorCallback", function (error, code) {
      var contextInfo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      /* eslint-disable no-console */
      console.error(error);
      /* eslint-enable no-console */
      // eslint-disable-next-line react/prop-types

      _this.props.onError(error, code, contextInfo);
    });

    _defineProperty(_assertThisInitialized(_this), "fetchCurrentUserSuccessCallback", function (currentUser) {
      _this.setState({
        currentUser: currentUser,
        currentUserError: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getApproverContactsSuccessCallback", function (collaborators) {
      var entries = collaborators.entries;

      _this.setState({
        approverSelectorContacts: entries
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getMentionContactsSuccessCallback", function (collaborators) {
      var entries = collaborators.entries;

      _this.setState({
        mentionSelectorContacts: entries
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getApproverWithQuery", debounce(_this.getCollaborators.bind(_assertThisInitialized(_this), _this.getApproverContactsSuccessCallback, _this.errorCallback), DEFAULT_COLLAB_DEBOUNCE));

    _defineProperty(_assertThisInitialized(_this), "getMentionWithQuery", debounce(_this.getCollaborators.bind(_assertThisInitialized(_this), _this.getMentionContactsSuccessCallback, _this.errorCallback), DEFAULT_COLLAB_DEBOUNCE));

    _defineProperty(_assertThisInitialized(_this), "fetchCurrentUserErrorCallback", function (e, code) {
      _this.setState({
        currentUser: undefined,
        currentUserError: {
          maskError: {
            errorHeader: messages.currentUserErrorHeaderMessage,
            errorSubHeader: messages.defaultErrorMaskSubHeaderMessage
          }
        }
      });

      _this.errorCallback(e, code, {
        error: e
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getAvatarUrl", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(userId) {
        var _this$props9, file, api;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props9 = _this.props, file = _this$props9.file, api = _this$props9.api;
                return _context.abrupt("return", api.getUsersAPI(false).getAvatarUrlWithAccessToken(userId, file.id));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "onTaskModalClose", function () {
      _this.setState({
        approverSelectorContacts: []
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderAddTaskButton", function () {
      var isDisabled = _this.props.isDisabled;
      var approverSelectorContacts = _this.state.approverSelectorContacts;

      var _assertThisInitialize = _assertThisInitialized(_this),
          getApproverWithQuery = _assertThisInitialize.getApproverWithQuery,
          getAvatarUrl = _assertThisInitialize.getAvatarUrl,
          createTask = _assertThisInitialize.createTask,
          onTaskModalClose = _assertThisInitialize.onTaskModalClose;

      var taskFormProps = {
        approverSelectorContacts: approverSelectorContacts,
        completionRule: TASK_COMPLETION_RULE_ALL,
        createTask: createTask,
        getApproverWithQuery: getApproverWithQuery,
        getAvatarUrl: getAvatarUrl,
        id: '',
        message: '',
        approvers: []
      };
      return /*#__PURE__*/React.createElement(AddTaskButton, {
        isDisabled: isDisabled,
        onTaskModalClose: onTaskModalClose,
        taskFormProps: taskFormProps
      });
    });

    var logger = _this.props.logger;
    logger.onReadyMetric({
      endMarkName: MARK_NAME_JS_READY
    });
    _this.state = {};
    return _this;
  }

  _createClass(ActivitySidebar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var currentUser = this.props.currentUser;
      this.fetchFeedItems(true);
      this.fetchCurrentUser(currentUser);
    }
    /**
     * Fetches a Users info
     *
     * @private
     * @param {User} [user] - Box User. If missing, gets user that the current token was generated for.
     * @return {void}
     */

  }, {
    key: "fetchCurrentUser",
    value: function fetchCurrentUser(user) {
      var shouldDestroy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _this$props10 = this.props,
          api = _this$props10.api,
          file = _this$props10.file;

      if (!file) {
        throw getBadItemError();
      }

      if (typeof user === 'undefined') {
        api.getUsersAPI(shouldDestroy).getUser(file.id, this.fetchCurrentUserSuccessCallback, this.fetchCurrentUserErrorCallback);
      } else {
        this.setState({
          currentUser: user,
          currentUserError: undefined
        });
      }
    }
    /**
     * Success callback for fetching feed items
     */

  }, {
    key: "fetchFeedItems",

    /**
     * Fetches the feed items for the sidebar
     *
     * @param {boolean} shouldDestroy true if the api factory should be destroyed
     */
    value: function fetchFeedItems() {
      var shouldRefreshCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var shouldDestroy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _this$props11 = this.props,
          file = _this$props11.file,
          api = _this$props11.api,
          features = _this$props11.features;
      var shouldShowAppActivity = isFeatureEnabled(features, 'activityFeed.appActivity.enabled');
      api.getFeedAPI(shouldDestroy).feedItems(file, shouldRefreshCache, this.fetchFeedItemsSuccessCallback, this.fetchFeedItemsErrorCallback, this.errorCallback, {
        shouldShowAppActivity: shouldShowAppActivity
      });
    }
    /**
     * Handles a successful feed API fetch
     *
     * @private
     * @param {Array} feedItems - the feed items
     * @return {void}
     */

  }, {
    key: "getCollaborators",

    /**
     * Fetches file collaborators
     *
     * @param {Function} successCallback - the success callback
     * @param {Function} errorCallback - the error callback
     * @param {string} searchStr - the search string
     * @return {void}
     */
    value: function getCollaborators(successCallback, errorCallback, searchStr) {
      // Do not fetch without filter
      var _this$props12 = this.props,
          file = _this$props12.file,
          api = _this$props12.api;

      if (!searchStr || searchStr.trim() === '') {
        return;
      }

      api.getFileCollaboratorsAPI(true).getFileCollaborators(file.id, successCallback, errorCallback, {
        filter_term: searchStr
      });
    }
    /**
     * Handles a failed file user info fetch
     *
     * @private
     * @param {ElementsXhrError} e - API error
     * @return {void}
     */

  }, {
    key: "refresh",
    value: function refresh() {
      this.fetchFeedItems(true);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props13 = this.props,
          elementId = _this$props13.elementId,
          file = _this$props13.file,
          _this$props13$isDisab = _this$props13.isDisabled,
          isDisabled = _this$props13$isDisab === void 0 ? false : _this$props13$isDisab,
          onVersionHistoryClick = _this$props13.onVersionHistoryClick,
          getUserProfileUrl = _this$props13.getUserProfileUrl,
          activeFeedEntryId = _this$props13.activeFeedEntryId,
          activeFeedEntryType = _this$props13.activeFeedEntryType;
      var _this$state = this.state,
          currentUser = _this$state.currentUser,
          approverSelectorContacts = _this$state.approverSelectorContacts,
          mentionSelectorContacts = _this$state.mentionSelectorContacts,
          feedItems = _this$state.feedItems,
          activityFeedError = _this$state.activityFeedError,
          currentUserError = _this$state.currentUserError;
      return /*#__PURE__*/React.createElement(SidebarContent, {
        actions: this.renderAddTaskButton(),
        className: "bcs-activity",
        elementId: elementId,
        sidebarView: SIDEBAR_VIEW_ACTIVITY,
        title: /*#__PURE__*/React.createElement(FormattedMessage, messages.sidebarActivityTitle)
      }, /*#__PURE__*/React.createElement(ActivityFeed, {
        file: file,
        activityFeedError: activityFeedError,
        approverSelectorContacts: approverSelectorContacts,
        mentionSelectorContacts: mentionSelectorContacts,
        currentUser: currentUser,
        isDisabled: isDisabled,
        onAppActivityDelete: this.deleteAppActivity,
        onCommentCreate: this.createComment,
        onCommentDelete: this.deleteComment,
        onCommentUpdate: this.updateComment,
        onTaskCreate: this.createTask,
        onTaskDelete: this.deleteTask,
        onTaskUpdate: this.updateTask,
        onTaskModalClose: this.onTaskModalClose,
        onTaskAssignmentUpdate: this.updateTaskAssignment,
        getApproverWithQuery: this.getApproverWithQuery,
        getMentionWithQuery: this.getMentionWithQuery,
        onVersionHistoryClick: onVersionHistoryClick,
        getAvatarUrl: this.getAvatarUrl,
        getUserProfileUrl: getUserProfileUrl,
        feedItems: feedItems,
        currentUserError: currentUserError,
        activeFeedEntryId: activeFeedEntryId,
        activeFeedEntryType: activeFeedEntryType
      }));
    }
  }]);

  return ActivitySidebar;
}(React.PureComponent);

_defineProperty(ActivitySidebar, "defaultProps", {
  isDisabled: false,
  onCommentCreate: noop,
  onCommentDelete: noop,
  onCommentUpdate: noop,
  onTaskAssignmentUpdate: noop,
  onTaskCreate: noop,
  onTaskDelete: noop,
  onTaskUpdate: noop
});

export { ActivitySidebar as ActivitySidebarComponent };
export default flow([withLogger(ORIGIN_ACTIVITY_SIDEBAR), withErrorBoundary(ORIGIN_ACTIVITY_SIDEBAR), withAPIContext, withFeatureConsumer])(ActivitySidebar);
//# sourceMappingURL=ActivitySidebar.js.map