function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Active state component for Activity Feed
 */
import * as React from 'react';
import getProp from 'lodash/get';
import ActivityItem from './ActivityItem';
import AppActivity from '../app-activity';
import AnnotationActivity from '../annotations';
import Comment from '../comment';
import TaskNew from '../task-new';
import Version, { CollapsedVersion } from '../version';
import withErrorHandling from '../../withErrorHandling';

var ActiveState = function ActiveState(_ref) {
  var activeFeedEntryId = _ref.activeFeedEntryId,
      activeFeedEntryType = _ref.activeFeedEntryType,
      activeFeedItemRef = _ref.activeFeedItemRef,
      approverSelectorContacts = _ref.approverSelectorContacts,
      currentFileVersionId = _ref.currentFileVersionId,
      currentUser = _ref.currentUser,
      items = _ref.items,
      mentionSelectorContacts = _ref.mentionSelectorContacts,
      getMentionWithQuery = _ref.getMentionWithQuery,
      onAnnotationDelete = _ref.onAnnotationDelete,
      onAnnotationEdit = _ref.onAnnotationEdit,
      onAnnotationSelect = _ref.onAnnotationSelect,
      onAppActivityDelete = _ref.onAppActivityDelete,
      onCommentDelete = _ref.onCommentDelete,
      onCommentEdit = _ref.onCommentEdit,
      onTaskDelete = _ref.onTaskDelete,
      onTaskEdit = _ref.onTaskEdit,
      onTaskView = _ref.onTaskView,
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
  return React.createElement("ul", {
    className: "bcs-activity-feed-active-state"
  }, items.map(function (item) {
    var isFocused = item === activeEntry;
    var refValue = isFocused ? activeFeedItemRef : undefined;
    var itemFileVersionId = getProp(item, 'file_version.id');

    switch (item.type) {
      case 'comment':
        return React.createElement(ActivityItem, {
          key: item.type + item.id,
          className: "bcs-activity-feed-comment",
          "data-testid": "comment",
          isFocused: isFocused,
          ref: refValue
        }, React.createElement(Comment, _extends({}, item, {
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
        return React.createElement(ActivityItem, {
          key: item.type + item.id,
          className: "bcs-activity-feed-task-new",
          "data-testid": "task",
          isFocused: isFocused,
          ref: refValue
        }, React.createElement(TaskNew, _extends({}, item, {
          approverSelectorContacts: approverSelectorContacts,
          currentUser: currentUser,
          getApproverWithQuery: getApproverWithQuery,
          getAvatarUrl: getAvatarUrl,
          getUserProfileUrl: getUserProfileUrl,
          onAssignmentUpdate: onTaskAssignmentUpdate,
          onDelete: onTaskDelete,
          onEdit: onTaskEdit,
          onView: onTaskView,
          onModalClose: onTaskModalClose,
          translations: translations
        })));

      case 'file_version':
        return React.createElement(ActivityItem, {
          key: item.type + item.id,
          className: "bcs-version-item",
          "data-testid": "version"
        }, item.versions ? // $FlowFixMe
        React.createElement(CollapsedVersion, _extends({}, item, {
          onInfo: onVersionInfo
        })) : // $FlowFixMe
        React.createElement(Version, _extends({}, item, {
          onInfo: onVersionInfo
        })));

      case 'app_activity':
        return React.createElement(ActivityItem, {
          key: item.type + item.id,
          className: "bcs-activity-feed-app-activity",
          "data-testid": "app-activity"
        }, React.createElement(AppActivity, _extends({
          currentUser: currentUser,
          onDelete: onAppActivityDelete
        }, item)));

      case 'annotation':
        return React.createElement(ActivityItem, {
          key: item.type + item.id,
          className: "bcs-activity-feed-annotation-activity",
          "data-testid": "annotation-activity",
          isFocused: isFocused,
          ref: refValue
        }, React.createElement(AnnotationActivity, {
          currentUser: currentUser,
          getAvatarUrl: getAvatarUrl,
          getUserProfileUrl: getUserProfileUrl,
          getMentionWithQuery: getMentionWithQuery,
          isCurrentVersion: currentFileVersionId === itemFileVersionId,
          item: item,
          mentionSelectorContacts: mentionSelectorContacts,
          onEdit: onAnnotationEdit,
          onDelete: onAnnotationDelete,
          onSelect: onAnnotationSelect
        }));

      default:
        return null;
    }
  }));
};

export { ActiveState as ActiveStateComponent };
export default withErrorHandling(ActiveState);
//# sourceMappingURL=ActiveState.js.map