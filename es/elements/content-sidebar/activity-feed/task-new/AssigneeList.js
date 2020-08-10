function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import PlainButton from '../../../../components/plain-button';
import messages from './messages';
import AvatarGroupAvatar from './AvatarGroupAvatar';
import AssigneeDetails from './AssigneeDetails';
import './AssigneeList.scss';
var DEFAULT_ASSIGNEES_SHOWN = 3;
var TASKS_PAGE_SIZE = 20; // service does not return the page size to the client at the moment

function AssigneeList(props) {
  var _props$initialAssigne = props.initialAssigneeCount,
      initialAssigneeCount = _props$initialAssigne === void 0 ? DEFAULT_ASSIGNEES_SHOWN : _props$initialAssigne,
      _props$users = props.users,
      users = _props$users === void 0 ? {} : _props$users,
      getAvatarUrl = props.getAvatarUrl,
      isOpen = props.isOpen,
      onCollapse = props.onCollapse,
      onExpand = props.onExpand;
  var _users$entries = users.entries,
      entries = _users$entries === void 0 ? [] : _users$entries,
      next_marker = users.next_marker;
  var entryCount = entries.length;
  var numVisibleAssignees = isOpen ? entryCount : initialAssigneeCount;
  var visibleUsers = entries.slice(0, numVisibleAssignees).map(function (_ref) {
    var id = _ref.id,
        target = _ref.target,
        status = _ref.status,
        completedAt = _ref.completed_at;
    return /*#__PURE__*/React.createElement("li", {
      key: id,
      className: "bcs-AssigneeList-listItem"
    }, /*#__PURE__*/React.createElement(AvatarGroupAvatar, {
      status: status,
      className: "bcs-AssigneeList-listItemAvatar",
      user: target,
      getAvatarUrl: getAvatarUrl
    }), /*#__PURE__*/React.createElement(AssigneeDetails, {
      user: target,
      status: status,
      completedAt: completedAt
    }));
  });
  var hiddenAssigneeCount = Math.max(0, entryCount - initialAssigneeCount);
  var maxAdditionalAssignees = TASKS_PAGE_SIZE - initialAssigneeCount;
  var hasMoreAssigneesThanPageSize = hiddenAssigneeCount > maxAdditionalAssignees || next_marker;
  var additionalAssigneeMessage = hasMoreAssigneesThanPageSize ? messages.taskShowMoreAssigneesOverflow : messages.taskShowMoreAssignees;
  return /*#__PURE__*/React.createElement("div", {
    className: "bcs-AssigneeList"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "bcs-AssigneeList-list"
  }, visibleUsers), !isOpen && hiddenAssigneeCount > 0 && /*#__PURE__*/React.createElement("div", {
    className: "bcs-AssigneeList-toggleBtn"
  }, /*#__PURE__*/React.createElement(PlainButton, {
    "data-resin-target": "showmorebtn",
    onClick: onExpand,
    className: "lnk"
  }, /*#__PURE__*/React.createElement(FormattedMessage, _extends({}, additionalAssigneeMessage, {
    values: {
      additionalAssigneeCount: hasMoreAssigneesThanPageSize ? maxAdditionalAssignees : hiddenAssigneeCount
    }
  })))), isOpen && /*#__PURE__*/React.createElement("div", {
    className: "bcs-AssigneeList-toggleBtn"
  }, /*#__PURE__*/React.createElement(PlainButton, {
    "data-resin-target": "showlessbtn",
    onClick: onCollapse,
    className: "lnk"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.taskShowLessAssignees))));
}

export default AssigneeList;
//# sourceMappingURL=AssigneeList.js.map