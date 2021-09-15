var _statusMessages;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import ActivityDatestamp from '../common/activity-datestamp';
import commonMessages from '../../../common/messages';
import messages from './messages';
import { TASK_NEW_APPROVED, TASK_NEW_REJECTED, TASK_NEW_COMPLETED, TASK_NEW_NOT_STARTED } from '../../../../constants';
import './AssigneeDetails.scss';
var statusMessages = (_statusMessages = {}, _defineProperty(_statusMessages, TASK_NEW_APPROVED, messages.tasksFeedStatusApproved), _defineProperty(_statusMessages, TASK_NEW_REJECTED, messages.tasksFeedStatusRejected), _defineProperty(_statusMessages, TASK_NEW_COMPLETED, messages.tasksFeedStatusCompleted), _defineProperty(_statusMessages, TASK_NEW_NOT_STARTED, null), _statusMessages);
var AssigneeDetails = React.memo(function (_ref) {
  var user = _ref.user,
      status = _ref.status,
      completedAt = _ref.completedAt,
      className = _ref.className;
  var statusMessage = statusMessages[status] || null;
  return React.createElement("div", {
    className: classNames(className, 'bcs-AssigneeDetails')
  }, React.createElement("div", {
    className: "bcs-AssigneeDetails-name"
  }, user.name ? user.name : React.createElement(FormattedMessage, commonMessages.priorCollaborator)), statusMessage && completedAt && React.createElement("div", {
    className: "bcs-AssigneeDetails-status"
  }, React.createElement(FormattedMessage, _extends({}, statusMessage, {
    values: {
      dateTime: React.createElement(ActivityDatestamp, {
        date: completedAt
      })
    }
  }))));
});
export default AssigneeDetails;
//# sourceMappingURL=AssigneeDetails.js.map