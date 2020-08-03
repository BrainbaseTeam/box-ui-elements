var _statusMessageKeyMap;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import camelCase from 'lodash/camelCase';
import { TASK_NEW_APPROVED, TASK_NEW_REJECTED, TASK_NEW_COMPLETED, TASK_NEW_NOT_STARTED, TASK_NEW_IN_PROGRESS } from '../../../../constants';
import messages from './messages';
import './TaskStatus.scss';
var statusMessageKeyMap = (_statusMessageKeyMap = {}, _defineProperty(_statusMessageKeyMap, TASK_NEW_APPROVED, messages.tasksFeedApprovedLabel), _defineProperty(_statusMessageKeyMap, TASK_NEW_COMPLETED, messages.tasksFeedCompletedLabel), _defineProperty(_statusMessageKeyMap, TASK_NEW_REJECTED, messages.tasksFeedRejectedLabel), _defineProperty(_statusMessageKeyMap, TASK_NEW_NOT_STARTED, messages.tasksFeedInProgressLabel), _defineProperty(_statusMessageKeyMap, TASK_NEW_IN_PROGRESS, messages.tasksFeedInProgressLabel), _statusMessageKeyMap);
var Status = /*#__PURE__*/React.memo(function (_ref) {
  var status = _ref.status;
  return /*#__PURE__*/React.createElement(FormattedMessage, _extends({}, messages.tasksFeedStatusLabel, {
    values: {
      taskStatus: /*#__PURE__*/React.createElement("span", {
        className: "bcs-TaskStatus-message ".concat(camelCase(status))
      }, /*#__PURE__*/React.createElement(FormattedMessage, statusMessageKeyMap[status]))
    }
  }), function () {
    for (var _len = arguments.length, msg = new Array(_len), _key = 0; _key < _len; _key++) {
      msg[_key] = arguments[_key];
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "bcs-TaskStatus"
    }, msg);
  });
});
export default Status;
//# sourceMappingURL=TaskStatus.js.map