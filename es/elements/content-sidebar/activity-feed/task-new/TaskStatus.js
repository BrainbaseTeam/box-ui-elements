var _statusMessageKeyMap, _typeKeyMap;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { TASK_NEW_APPROVED, TASK_NEW_REJECTED, TASK_NEW_COMPLETED, TASK_NEW_NOT_STARTED, TASK_NEW_IN_PROGRESS } from '../../../../constants';
import messages from './messages'; // $FlowFixMe LabelPill is in typescript

import LabelPill from '../../../../components/label-pill';
var statusMessageKeyMap = (_statusMessageKeyMap = {}, _defineProperty(_statusMessageKeyMap, TASK_NEW_APPROVED, messages.taskFeedApprovedUppercaseLabel), _defineProperty(_statusMessageKeyMap, TASK_NEW_COMPLETED, messages.taskFeedCompletedUppercaseLabel), _defineProperty(_statusMessageKeyMap, TASK_NEW_REJECTED, messages.taskFeedRejectedUppercaseLabel), _defineProperty(_statusMessageKeyMap, TASK_NEW_NOT_STARTED, messages.taskFeedInProgressUppercaseLabel), _defineProperty(_statusMessageKeyMap, TASK_NEW_IN_PROGRESS, messages.taskFeedInProgressUppercaseLabel), _statusMessageKeyMap);
var typeKeyMap = (_typeKeyMap = {}, _defineProperty(_typeKeyMap, TASK_NEW_APPROVED, 'success'), _defineProperty(_typeKeyMap, TASK_NEW_COMPLETED, 'success'), _defineProperty(_typeKeyMap, TASK_NEW_REJECTED, 'error'), _defineProperty(_typeKeyMap, TASK_NEW_NOT_STARTED, 'default'), _defineProperty(_typeKeyMap, TASK_NEW_IN_PROGRESS, 'default'), _typeKeyMap);
var Status = React.memo(function (_ref) {
  var status = _ref.status;
  return React.createElement(LabelPill.Pill, {
    type: typeKeyMap[status]
  }, React.createElement(LabelPill.Text, null, React.createElement(FormattedMessage, statusMessageKeyMap[status])));
});
export default Status;
//# sourceMappingURL=TaskStatus.js.map