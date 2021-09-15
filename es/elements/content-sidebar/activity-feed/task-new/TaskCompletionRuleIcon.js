import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { TASK_COMPLETION_RULE_ANY } from '../../../../constants';
import messages from './messages'; // $FlowFixMe LabelPill is in typescript

import LabelPill from '../../../../components/label-pill';
import Tooltip from '../../../../components/tooltip';
import Avatar16 from '../../../../icon/line/Avatar16';
import './TaskCompletionRuleIcon.scss';

var TaskCompletionRuleIcon = function TaskCompletionRuleIcon(_ref) {
  var completionRule = _ref.completionRule;
  return completionRule === TASK_COMPLETION_RULE_ANY && React.createElement("span", {
    className: "bcs-TaskCompletionRuleIcon"
  }, React.createElement(Tooltip, {
    position: "top-center",
    text: React.createElement(FormattedMessage, messages.taskAnyAffordanceTooltip)
  }, React.createElement(LabelPill.Pill, null, React.createElement(LabelPill.Icon, {
    Component: Avatar16
  }), React.createElement(LabelPill.Text, {
    className: "bcs-TaskCompletionRuleIcon-oneSize"
  }, "1"))));
};

export default TaskCompletionRuleIcon;
//# sourceMappingURL=TaskCompletionRuleIcon.js.map