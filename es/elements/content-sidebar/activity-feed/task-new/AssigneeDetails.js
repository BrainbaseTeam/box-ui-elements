var _statusMessages;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import ReadableTime from '../../../../components/time/ReadableTime';
import commonMessages from '../../../common/messages';
import messages from './messages';
import { TASK_NEW_APPROVED, TASK_NEW_REJECTED, TASK_NEW_COMPLETED, TASK_NEW_NOT_STARTED } from '../../../../constants';
import './AssigneeDetails.scss';
var statusMessages = (_statusMessages = {}, _defineProperty(_statusMessages, TASK_NEW_APPROVED, messages.tasksFeedStatusApproved), _defineProperty(_statusMessages, TASK_NEW_REJECTED, messages.tasksFeedStatusRejected), _defineProperty(_statusMessages, TASK_NEW_COMPLETED, messages.tasksFeedStatusCompleted), _defineProperty(_statusMessages, TASK_NEW_NOT_STARTED, null), _statusMessages);

var Datestamp = function Datestamp(_ref) {
  var date = _ref.date;
  return /*#__PURE__*/React.createElement(ReadableTime, {
    timestamp: new Date(date).getTime(),
    alwaysShowTime: true,
    relativeThreshold: 0
  });
};

var AvatarDetails = /*#__PURE__*/React.memo(function (_ref2) {
  var user = _ref2.user,
      status = _ref2.status,
      completedAt = _ref2.completedAt,
      className = _ref2.className;
  var statusMessage = statusMessages[status] || null;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(className, 'bcs-AssigneeDetails')
  }, /*#__PURE__*/React.createElement("div", {
    className: "bcs-AssigneeDetails-name"
  }, user.name ? user.name : /*#__PURE__*/React.createElement(FormattedMessage, commonMessages.priorCollaborator)), statusMessage && completedAt && /*#__PURE__*/React.createElement("div", {
    className: "bcs-AssigneeDetails-status"
  }, /*#__PURE__*/React.createElement(FormattedMessage, _extends({}, statusMessage, {
    values: {
      dateTime: /*#__PURE__*/React.createElement(Datestamp, {
        date: completedAt
      })
    }
  }))));
});
export default AvatarDetails;
//# sourceMappingURL=AssigneeDetails.js.map