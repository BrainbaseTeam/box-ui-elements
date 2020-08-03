import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { ACTIVITY_TARGETS } from '../../../common/interactionTargets';
import messages from './messages';
import Button from '../../../../components/button';
import { TASK_TYPE_APPROVAL, TASK_TYPE_GENERAL } from '../../../../constants';
import './TaskActions.scss';

var TaskActions = function TaskActions(_ref) {
  var onTaskApproval = _ref.onTaskApproval,
      onTaskReject = _ref.onTaskReject,
      onTaskComplete = _ref.onTaskComplete,
      taskType = _ref.taskType;
  var action = null;

  if (taskType === TASK_TYPE_APPROVAL) {
    action = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      className: "bcs-TaskActions-button",
      onClick: onTaskApproval,
      "data-resin-target": ACTIVITY_TARGETS.TASK_APPROVE
    }, /*#__PURE__*/React.createElement(FormattedMessage, messages.tasksFeedApproveAction)), /*#__PURE__*/React.createElement(Button, {
      className: "bcs-TaskActions-button",
      onClick: onTaskReject,
      "data-resin-target": ACTIVITY_TARGETS.TASK_REJECT
    }, /*#__PURE__*/React.createElement(FormattedMessage, messages.tasksFeedRejectAction)));
  } else if (taskType === TASK_TYPE_GENERAL) {
    action = /*#__PURE__*/React.createElement(Button, {
      className: "bcs-TaskActions-button",
      onClick: onTaskComplete,
      "data-resin-target": ACTIVITY_TARGETS.TASK_COMPLETE
    }, /*#__PURE__*/React.createElement(FormattedMessage, messages.tasksFeedCompleteAction));
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "bcs-TaskActions"
  }, action);
};

export default TaskActions;
//# sourceMappingURL=TaskActions.js.map