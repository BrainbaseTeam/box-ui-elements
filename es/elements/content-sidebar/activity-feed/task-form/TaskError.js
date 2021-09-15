function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Component for in-modal error messages for tasks
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import getProp from 'lodash/get';
import messages from './messages';
import apiMessages from '../../../../api/messages';
import { TASK_EDIT_MODE_EDIT, TASK_MAX_GROUP_ASSIGNEES, ERROR_CODE_GROUP_EXCEEDS_LIMIT } from '../../../../constants';
import InlineNotice from '../../../../components/inline-notice/InlineNotice';

var TaskError = function TaskError(_ref) {
  var editMode = _ref.editMode,
      error = _ref.error,
      taskType = _ref.taskType;
  var isEditMode = editMode === TASK_EDIT_MODE_EDIT;
  var isForbiddenErrorOnEdit = getProp(error, 'status') === 403 && isEditMode;
  var taskGroupExceedsError = getProp(error, 'code') === ERROR_CODE_GROUP_EXCEEDS_LIMIT;
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

  return taskGroupExceedsError ? React.createElement(InlineNotice, {
    type: "warning",
    title: React.createElement(FormattedMessage, messages.taskGroupExceedsLimitWarningTitle)
  }, React.createElement(FormattedMessage, _extends({}, apiMessages.taskGroupExceedsLimitWarningMessage, {
    values: {
      max: TASK_MAX_GROUP_ASSIGNEES
    }
  }))) : React.createElement(InlineNotice, {
    type: "error",
    title: React.createElement(FormattedMessage, errorTitle)
  }, React.createElement(FormattedMessage, errorMessage));
};

export default TaskError;
//# sourceMappingURL=TaskError.js.map