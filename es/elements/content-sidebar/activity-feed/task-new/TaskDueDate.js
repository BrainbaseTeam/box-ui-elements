function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { ReadableTime } from '../../../../components/time';
import { TASK_NEW_NOT_STARTED } from '../../../../constants';
import './TaskDueDate.scss';

var TaskDueDate = function TaskDueDate(_ref) {
  var dueDate = _ref.dueDate,
      status = _ref.status;
  var isOverdue = dueDate ? status === TASK_NEW_NOT_STARTED && new Date(dueDate) < Date.now() : false;
  var fullDueDate = new Date(dueDate);
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('bcs-TaskDueDate', {
      'bcs-is-taskOverdue': isOverdue
    })
  }, /*#__PURE__*/React.createElement(FormattedMessage, _extends({}, messages.taskDueDateLabel, {
    values: {
      date: /*#__PURE__*/React.createElement(ReadableTime, {
        alwaysShowTime: true,
        timestamp: fullDueDate.getTime()
      })
    }
  })));
};

export default TaskDueDate;
//# sourceMappingURL=TaskDueDate.js.map