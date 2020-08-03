import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { TASK_COMPLETION_RULE_ANY } from '../../../../constants';
import messages from './messages';
import Tooltip from '../../../../components/tooltip';
import IconAnyTask from '../../../../icons/general/IconAnyTask';
import './TaskCompletionRuleIcon.scss';

var TaskCompletionRuleIcon = function TaskCompletionRuleIcon(_ref) {
  var completionRule = _ref.completionRule;
  return completionRule === TASK_COMPLETION_RULE_ANY && /*#__PURE__*/React.createElement(Tooltip, {
    position: "top-center",
    text: /*#__PURE__*/React.createElement(FormattedMessage, messages.taskAnyAffordanceTooltip)
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(IconAnyTask, {
    height: 11,
    width: 11,
    className: "bcs-TaskCompletionRuleIcon"
  })));
};

export default TaskCompletionRuleIcon;
//# sourceMappingURL=TaskCompletionRuleIcon.js.map