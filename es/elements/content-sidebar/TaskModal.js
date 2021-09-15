function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import Modal from '../../components/modal/Modal';
import TaskForm from './activity-feed/task-form';
import messages from './messages';
import { TASK_EDIT_MODE_CREATE, TASK_TYPE_APPROVAL, TASK_TYPE_GENERAL } from '../../constants';

function getMessageForModalTitle(taskType, mode) {
  switch (taskType) {
    case TASK_TYPE_GENERAL:
      return mode === TASK_EDIT_MODE_CREATE ? messages.tasksCreateGeneralTaskFormTitle : messages.tasksEditGeneralTaskFormTitle;

    case TASK_TYPE_APPROVAL:
    default:
      return mode === TASK_EDIT_MODE_CREATE ? messages.tasksCreateApprovalTaskFormTitle : messages.tasksEditApprovalTaskFormTitle;
  }
}

var focusTargetSelector = '.task-modal textarea, .task-modal input';

var TaskModal = function TaskModal(props) {
  var _props$editMode = props.editMode,
      editMode = _props$editMode === void 0 ? TASK_EDIT_MODE_CREATE : _props$editMode,
      error = props.error,
      onSubmitError = props.onSubmitError,
      onSubmitSuccess = props.onSubmitSuccess,
      onModalClose = props.onModalClose,
      taskType = props.taskType,
      isTaskFormOpen = props.isTaskFormOpen,
      taskFormProps = props.taskFormProps; // Note: Modal throws an error if this fails to find an element!

  return React.createElement(Modal, {
    className: "be-modal task-modal",
    "data-testid": "create-task-modal",
    focusElementSelector: focusTargetSelector,
    isOpen: isTaskFormOpen,
    onRequestClose: onModalClose,
    title: React.createElement(FormattedMessage, getMessageForModalTitle(taskType, editMode))
  }, React.createElement("div", {
    className: "be"
  }, React.createElement(TaskForm, _extends({
    editMode: editMode // $FlowFixMe
    ,
    error: error,
    onCancel: onModalClose,
    onSubmitError: onSubmitError,
    onSubmitSuccess: onSubmitSuccess,
    taskType: taskType
  }, taskFormProps))));
};

export default TaskModal;
//# sourceMappingURL=TaskModal.js.map