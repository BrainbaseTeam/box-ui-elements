import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages'; // $FlowFixMe LabelPill is in typescript

import LabelPill from '../../../../components/label-pill';
import Tooltip from '../../../../components/tooltip';
import MoveCopy16 from '../../../../icon/line/MoveCopy16';

var TaskMultiFileIcon = function TaskMultiFileIcon(_ref) {
  var isMultiFile = _ref.isMultiFile;
  return isMultiFile && React.createElement(Tooltip, {
    position: "top-center",
    text: React.createElement(FormattedMessage, messages.taskMultipleFilesAffordanceTooltip)
  }, React.createElement(LabelPill.Pill, {
    "data-testid": "multifile-badge"
  }, React.createElement(LabelPill.Icon, {
    Component: MoveCopy16
  })));
};

export default TaskMultiFileIcon;
//# sourceMappingURL=TaskMultiFileIcon.js.map