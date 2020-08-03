function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
 * @file Component for Activity feed
 */
import * as React from 'react';
import getProp from 'lodash/get';
import noop from 'lodash/noop';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { scrollIntoView } from '../../../../utils/dom';
import ActiveState from './ActiveState';
import CommentForm from '../comment-form';
import EmptyState from './EmptyState';
import { collapseFeedState, ItemTypes } from './activityFeedUtils';
import InlineError from '../../../../components/inline-error/InlineError';
import LoadingIndicator from '../../../../components/loading-indicator/LoadingIndicator';
import messages from './messages';
import './ActivityFeed.scss';

var ActivityFeed = /*#__PURE__*/function (_React$Component) {
  _inherits(ActivityFeed, _React$Component);

  var _super = _createSuper(ActivityFeed);

  function ActivityFeed() {
    var _this;

    _classCallCheck(this, ActivityFeed);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isInputOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "activeFeedItemRef", /*#__PURE__*/React.createRef());

    _defineProperty(_assertThisInitialized(_this), "isEmpty", function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props,
          feedItems = _ref.feedItems;

      if (feedItems === undefined) {
        return false;
      }

      return feedItems.length === 0 || feedItems.length === 1 && feedItems[0].type === ItemTypes.fileVersion;
    });

    _defineProperty(_assertThisInitialized(_this), "hasLoaded", function () {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props,
          currentUser = _ref2.currentUser,
          feedItems = _ref2.feedItems;

      return currentUser !== undefined && feedItems !== undefined;
    });

    _defineProperty(_assertThisInitialized(_this), "resetFeedScroll", function () {
      if (_this.feedContainer) {
        _this.feedContainer.scrollTop = _this.feedContainer.scrollHeight;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      var nativeEvent = event.nativeEvent;
      nativeEvent.stopImmediatePropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "commentFormFocusHandler", function () {
      _this.resetFeedScroll();

      _this.setState({
        isInputOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "commentFormCancelHandler", function () {
      return _this.setState({
        isInputOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "commentFormSubmitHandler", function () {
      return _this.setState({
        isInputOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onCommentCreate", function (_ref3) {
      var text = _ref3.text,
          hasMention = _ref3.hasMention;
      var _this$props$onComment = _this.props.onCommentCreate,
          onCommentCreate = _this$props$onComment === void 0 ? noop : _this$props$onComment;
      onCommentCreate(text, hasMention);

      _this.commentFormSubmitHandler();
    });

    _defineProperty(_assertThisInitialized(_this), "onTaskCreate", function (_ref4) {
      var text = _ref4.text,
          assignees = _ref4.assignees,
          dueAt = _ref4.dueAt;
      var _this$props$onTaskCre = _this.props.onTaskCreate,
          onTaskCreate = _this$props$onTaskCre === void 0 ? noop : _this$props$onTaskCre;
      onTaskCreate(text, assignees, dueAt);

      _this.commentFormSubmitHandler();
    });

    _defineProperty(_assertThisInitialized(_this), "openVersionHistoryPopup", function (data) {
      var versionInfoHandler = _this.props.onVersionHistoryClick || noop;
      versionInfoHandler(data);
    });

    return _this;
  }

  _createClass(ActivityFeed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.resetFeedScroll();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var prevFeedItems = prevProps.feedItems;
      var _this$props = this.props,
          currFeedItems = _this$props.feedItems,
          activeFeedEntryId = _this$props.activeFeedEntryId;
      var prevIsInputOpen = prevState.isInputOpen;
      var currIsInputOpen = this.state.isInputOpen;
      var hasLoaded = this.hasLoaded();
      var hasMoreItems = prevFeedItems && currFeedItems && prevFeedItems.length < currFeedItems.length;
      var didLoadFeedItems = prevFeedItems === undefined && currFeedItems !== undefined;
      var hasInputOpened = currIsInputOpen !== prevIsInputOpen;

      if ((hasLoaded || hasMoreItems || didLoadFeedItems || hasInputOpened) && activeFeedEntryId === undefined) {
        this.resetFeedScroll();
      } // do the scroll only once after first fetch of feed items


      if (didLoadFeedItems) {
        this.scrollToActiveFeedItemOrErrorMessage();
      }
    }
  }, {
    key: "scrollToActiveFeedItemOrErrorMessage",
    value: function scrollToActiveFeedItemOrErrorMessage() {
      var activeFeedItemRef = this.activeFeedItemRef.current;
      var activeFeedEntryId = this.props.activeFeedEntryId; // if there is no active item, do not scroll

      if (!activeFeedEntryId) {
        return;
      } // if there was supposed to be an active feed item but the feed item does not exist
      // scroll to the bottom to show the inline error message


      if (activeFeedItemRef === null) {
        this.resetFeedScroll();
        return;
      }

      scrollIntoView(activeFeedItemRef);
    }
    /**
     * Detects whether or not the empty state should be shown.
     * @param {object} currentUser - The user that is logged into the account
     * @param {object} feedItems - Items in the activity feed
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          translations = _this$props2.translations,
          approverSelectorContacts = _this$props2.approverSelectorContacts,
          mentionSelectorContacts = _this$props2.mentionSelectorContacts,
          currentUser = _this$props2.currentUser,
          isDisabled = _this$props2.isDisabled,
          getAvatarUrl = _this$props2.getAvatarUrl,
          getUserProfileUrl = _this$props2.getUserProfileUrl,
          file = _this$props2.file,
          onAppActivityDelete = _this$props2.onAppActivityDelete,
          onCommentCreate = _this$props2.onCommentCreate,
          getApproverWithQuery = _this$props2.getApproverWithQuery,
          getMentionWithQuery = _this$props2.getMentionWithQuery,
          activityFeedError = _this$props2.activityFeedError,
          onVersionHistoryClick = _this$props2.onVersionHistoryClick,
          onCommentDelete = _this$props2.onCommentDelete,
          onCommentUpdate = _this$props2.onCommentUpdate,
          onTaskDelete = _this$props2.onTaskDelete,
          onTaskUpdate = _this$props2.onTaskUpdate,
          onTaskAssignmentUpdate = _this$props2.onTaskAssignmentUpdate,
          onTaskModalClose = _this$props2.onTaskModalClose,
          feedItems = _this$props2.feedItems,
          activeFeedEntryId = _this$props2.activeFeedEntryId,
          activeFeedEntryType = _this$props2.activeFeedEntryType;
      var isInputOpen = this.state.isInputOpen;
      var hasCommentPermission = getProp(file, 'permissions.can_comment', false);
      var showCommentForm = !!(currentUser && hasCommentPermission && onCommentCreate && feedItems);
      var isEmpty = this.isEmpty(this.props);
      var isLoading = !this.hasLoaded();
      var activeEntry = Array.isArray(feedItems) && feedItems.find(function (_ref5) {
        var id = _ref5.id,
            type = _ref5.type;
        return id === activeFeedEntryId && type === activeFeedEntryType;
      });
      var errorMessageByEntryType = {
        comment: messages.commentMissingError,
        task: messages.taskMissingError
      };
      var inlineFeedItemErrorMessage = activeFeedEntryType ? errorMessageByEntryType[activeFeedEntryType] : undefined;
      var isInlineFeedItemErrorVisible = !isLoading && activeFeedEntryType && !activeEntry;
      return (
        /*#__PURE__*/
        // eslint-disable-next-line
        React.createElement("div", {
          className: "bcs-activity-feed",
          onKeyDown: this.onKeyDown
        }, /*#__PURE__*/React.createElement("div", {
          ref: function ref(_ref6) {
            _this2.feedContainer = _ref6;
          },
          className: "bcs-activity-feed-items-container"
        }, isLoading && /*#__PURE__*/React.createElement("div", {
          className: "bcs-activity-feed-loading-state"
        }, /*#__PURE__*/React.createElement(LoadingIndicator, null)), isEmpty && !isLoading && /*#__PURE__*/React.createElement(EmptyState, {
          showCommentMessage: showCommentForm
        }), !isEmpty && !isLoading && /*#__PURE__*/React.createElement(ActiveState, _extends({}, activityFeedError, {
          items: collapseFeedState(feedItems),
          isDisabled: isDisabled,
          currentUser: currentUser,
          onTaskAssignmentUpdate: onTaskAssignmentUpdate,
          onAppActivityDelete: onAppActivityDelete,
          onCommentDelete: hasCommentPermission ? onCommentDelete : noop,
          onCommentEdit: hasCommentPermission ? onCommentUpdate : noop // We don't know task edit/delete specific permissions,
          // but you must at least be able to comment to do these operations.
          ,
          onTaskDelete: hasCommentPermission ? onTaskDelete : noop,
          onTaskEdit: hasCommentPermission ? onTaskUpdate : noop,
          onTaskModalClose: onTaskModalClose,
          onVersionInfo: onVersionHistoryClick ? this.openVersionHistoryPopup : null,
          translations: translations,
          getAvatarUrl: getAvatarUrl,
          getUserProfileUrl: getUserProfileUrl,
          mentionSelectorContacts: mentionSelectorContacts,
          getMentionWithQuery: getMentionWithQuery,
          approverSelectorContacts: approverSelectorContacts,
          getApproverWithQuery: getApproverWithQuery,
          activeFeedEntryId: activeFeedEntryId,
          activeFeedEntryType: activeFeedEntryType,
          activeFeedItemRef: this.activeFeedItemRef
        })), isInlineFeedItemErrorVisible && inlineFeedItemErrorMessage && /*#__PURE__*/React.createElement(InlineError, {
          title: /*#__PURE__*/React.createElement(FormattedMessage, messages.feedInlineErrorTitle),
          className: "bcs-feedItemInlineError"
        }, /*#__PURE__*/React.createElement(FormattedMessage, inlineFeedItemErrorMessage))), showCommentForm ? /*#__PURE__*/React.createElement(CommentForm, {
          onSubmit: this.resetFeedScroll,
          isDisabled: isDisabled,
          mentionSelectorContacts: mentionSelectorContacts,
          className: classNames('bcs-activity-feed-comment-input', {
            'bcs-is-disabled': isDisabled
          }),
          createComment: hasCommentPermission ? this.onCommentCreate : noop,
          getMentionWithQuery: getMentionWithQuery,
          isOpen: isInputOpen,
          user: currentUser,
          onCancel: this.commentFormCancelHandler,
          onFocus: this.commentFormFocusHandler,
          getAvatarUrl: getAvatarUrl
        }) : null)
      );
    }
  }]);

  return ActivityFeed;
}(React.Component);

export default ActivityFeed;
//# sourceMappingURL=ActivityFeed.js.map