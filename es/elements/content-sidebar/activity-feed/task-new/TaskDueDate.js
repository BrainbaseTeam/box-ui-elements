function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import ActivityDatestamp from '../common/activity-datestamp';
import messages from './messages'; // $FlowFixMe LabelPill is in typescript

import LabelPill from '../../../../components/label-pill';
import { TASK_NEW_NOT_STARTED } from '../../../../constants';

var TaskDueDate = function TaskDueDate(_ref) {
  var dueDate = _ref.dueDate,
      status = _ref.status;
  var isOverdue = dueDate ? status === TASK_NEW_NOT_STARTED && new Date(dueDate) < Date.now() : false;
  var fullDueDate = new Date(dueDate);
  var pillProps = isOverdue ? {
    'data-testid': 'task-overdue-date',
    type: 'error'
  } : {
    type: 'default'
  };
  return React.createElement("div", {
    "data-testid": "task-due-date"
  }, React.createElement(LabelPill.Pill, pillProps, React.createElement(LabelPill.Text, null, React.createElement(FormattedMessage, _extends({}, messages.taskFeedStatusDue, {
    values: {
      dateTime: React.createElement(ActivityDatestamp, {
        date: fullDueDate.getTime(),
        uppercase: true
      })
    }
  })))));
};

export default TaskDueDate;
//# sourceMappingURL=TaskDueDate.js.map