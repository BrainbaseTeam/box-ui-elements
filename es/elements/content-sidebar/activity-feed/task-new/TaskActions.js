import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { ACTIVITY_TARGETS } from '../../../common/interactionTargets';
import messages from './messages';
import Button from '../../../../components/button';
import PrimaryButton from '../../../../components/primary-button';
import { TASK_TYPE_APPROVAL, TASK_TYPE_GENERAL } from '../../../../constants';
import './TaskActions.scss';

var TaskActions = function TaskActions(_ref) {
  var isMultiFile = _ref.isMultiFile,
      onTaskApproval = _ref.onTaskApproval,
      onTaskReject = _ref.onTaskReject,
      onTaskComplete = _ref.onTaskComplete,
      onTaskView = _ref.onTaskView,
      taskType = _ref.taskType;
  var action = null;

  if (isMultiFile) {
    action = onTaskView && React.createElement(PrimaryButton, {
      className: "bcs-TaskActions-button",
      "data-testid": "view-task",
      onClick: onTaskView,
      "data-resin-target": ACTIVITY_TARGETS.TASK_VIEW_DETAILS
    }, React.createElement(FormattedMessage, messages.tasksFeedViewDetailsAction));
  } else if (taskType === TASK_TYPE_APPROVAL) {
    action = React.createElement(React.Fragment, null, React.createElement(Button, {
      className: "bcs-TaskActions-button",
      "data-testid": "reject-task",
      onClick: onTaskReject,
      "data-resin-target": ACTIVITY_TARGETS.TASK_REJECT
    }, React.createElement(FormattedMessage, messages.tasksFeedRejectAction)), React.createElement(PrimaryButton, {
      className: "bcs-TaskActions-button",
      "data-testid": "approve-task",
      onClick: onTaskApproval,
      "data-resin-target": ACTIVITY_TARGETS.TASK_APPROVE
    }, React.createElement(FormattedMessage, messages.tasksFeedApproveAction)));
  } else if (taskType === TASK_TYPE_GENERAL) {
    action = React.createElement(PrimaryButton, {
      className: "bcs-TaskActions-button",
      "data-testid": "complete-task",
      onClick: onTaskComplete,
      "data-resin-target": ACTIVITY_TARGETS.TASK_COMPLETE
    }, React.createElement(FormattedMessage, messages.tasksFeedCompleteAction));
  }

  return React.createElement("div", {
    className: "bcs-TaskActions"
  }, action);
};

export default TaskActions;
//# sourceMappingURL=TaskActions.js.map