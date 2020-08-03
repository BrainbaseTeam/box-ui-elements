function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Active state component for Activity Feed
 */
import * as React from 'react';
import classNames from 'classnames';
import getProp from 'lodash/get';
import AppActivity from '../app-activity';
import Comment from '../comment';
import TaskNew from '../task-new';
import Version, { CollapsedVersion } from '../version';
import withErrorHandling from '../../withErrorHandling';

var ActiveState = function ActiveState(_ref) {
  var activeFeedEntryId = _ref.activeFeedEntryId,
      activeFeedEntryType = _ref.activeFeedEntryType,
      activeFeedItemRef = _ref.activeFeedItemRef,
      approverSelectorContacts = _ref.approverSelectorContacts,
      currentUser = _ref.currentUser,
      items = _ref.items,
      mentionSelectorContacts = _ref.mentionSelectorContacts,
      getMentionWithQuery = _ref.getMentionWithQuery,
      onAppActivityDelete = _ref.onAppActivityDelete,
      onCommentDelete = _ref.onCommentDelete,
      onCommentEdit = _ref.onCommentEdit,
      onTaskDelete = _ref.onTaskDelete,
      onTaskEdit = _ref.onTaskEdit,
      onTaskAssignmentUpdate = _ref.onTaskAssignmentUpdate,
      onTaskModalClose = _ref.onTaskModalClose,
      onVersionInfo = _ref.onVersionInfo,
      translations = _ref.translations,
      getApproverWithQuery = _ref.getApproverWithQuery,
      getAvatarUrl = _ref.getAvatarUrl,
      getUserProfileUrl = _ref.getUserProfileUrl;
  var activeEntry = items.find(function (_ref2) {
    var id = _ref2.id,
        type = _ref2.type;
    return id === activeFeedEntryId && type === activeFeedEntryType;
  });
  return /*#__PURE__*/React.createElement("ul", {
    className: "bcs-activity-feed-active-state"
  }, items.map(function (item) {
    var isFocused = item === activeEntry;
    var refValue = isFocused ? activeFeedItemRef : undefined;

    switch (item.type) {
      case 'comment':
        return /*#__PURE__*/React.createElement("li", {
          key: item.type + item.id,
          className: classNames('bcs-activity-feed-comment', {
            'bcs-is-focused': isFocused
          }),
          ref: refValue
        }, /*#__PURE__*/React.createElement(Comment, _extends({}, item, {
          currentUser: currentUser,
          getAvatarUrl: getAvatarUrl,
          getMentionWithQuery: getMentionWithQuery,
          getUserProfileUrl: getUserProfileUrl,
          mentionSelectorContacts: mentionSelectorContacts,
          onDelete: onCommentDelete,
          onEdit: onCommentEdit,
          permissions: {
            can_delete: getProp(item.permissions, 'can_delete', false),
            can_edit: getProp(item.permissions, 'can_edit', false)
          },
          translations: translations
        })));

      case 'task':
        return /*#__PURE__*/React.createElement("li", {
          key: item.type + item.id,
          className: classNames('bcs-activity-feed-task-new', {
            'bcs-is-focused': isFocused
          }),
          ref: refValue
        }, /*#__PURE__*/React.createElement(TaskNew, _extends({}, item, {
          approverSelectorContacts: approverSelectorContacts,
          currentUser: currentUser,
          getApproverWithQuery: getApproverWithQuery,
          getAvatarUrl: getAvatarUrl,
          getUserProfileUrl: getUserProfileUrl,
          onAssignmentUpdate: onTaskAssignmentUpdate,
          onDelete: onTaskDelete,
          onEdit: onTaskEdit,
          onModalClose: onTaskModalClose,
          translations: translations
        })));

      case 'file_version':
        return /*#__PURE__*/React.createElement("li", {
          key: item.type + item.id,
          className: "bcs-version-item"
        }, item.versions ? /*#__PURE__*/React.createElement(CollapsedVersion, _extends({}, item, {
          onInfo: onVersionInfo
        })) : /*#__PURE__*/React.createElement(Version, _extends({}, item, {
          onInfo: onVersionInfo
        })));

      case 'app_activity':
        return /*#__PURE__*/React.createElement("li", {
          key: item.type + item.id,
          className: "bcs-activity-feed-app-activity"
        }, /*#__PURE__*/React.createElement(AppActivity, _extends({
          currentUser: currentUser,
          onDelete: onAppActivityDelete
        }, item)));

      default:
        return null;
    }
  }));
};

export { ActiveState as ActiveStateComponent };
export default withErrorHandling(ActiveState);
//# sourceMappingURL=ActiveState.js.map