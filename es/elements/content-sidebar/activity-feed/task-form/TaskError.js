/**
 * 
 * @file Component for in-modal error messages for tasks
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import getProp from 'lodash/get';
import messages from './messages';
import apiMessages from '../../../../api/messages';
import { TASK_EDIT_MODE_EDIT } from '../../../../constants';
import InlineNotice from '../../../../components/inline-notice/InlineNotice';

var TaskError = function TaskError(_ref) {
  var editMode = _ref.editMode,
      error = _ref.error,
      taskType = _ref.taskType;
  var isEditMode = editMode === TASK_EDIT_MODE_EDIT;
  var isForbiddenErrorOnEdit = getProp(error, 'status') === 403 && isEditMode;
  var errorTitle = isForbiddenErrorOnEdit ? messages.taskEditWarningTitle : messages.taskCreateErrorTitle;
  var errorMessage = isEditMode ? messages.taskUpdateErrorMessage : apiMessages.taskCreateErrorMessage;

  if (!error) {
    return null;
  } // error message changes when a forbidden operation occurs while editing a task


  if (isForbiddenErrorOnEdit) {
    switch (taskType) {
      case 'GENERAL':
        errorMessage = messages.taskGeneralAssigneeRemovalWarningMessage;
        break;

      case 'APPROVAL':
        errorMessage = messages.taskApprovalAssigneeRemovalWarningMessage;
        break;

      default:
        return null;
    }
  }

  return /*#__PURE__*/React.createElement(InlineNotice, {
    type: "error",
    title: /*#__PURE__*/React.createElement(FormattedMessage, errorTitle)
  }, /*#__PURE__*/React.createElement(FormattedMessage, errorMessage));
};

export default TaskError;
//# sourceMappingURL=TaskError.js.map