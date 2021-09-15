function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Component for Approval comment form
 */
import * as React from 'react';
import noop from 'lodash/noop';
import getProp from 'lodash/get';
import classNames from 'classnames';
import { FormattedMessage, injectIntl } from 'react-intl';
import commonMessages from '../../../../common/messages';
import messages from './messages';
import commentFormMessages from '../comment-form/messages';
import Form from '../../../../components/form-elements/form/Form';
import ContactDatalistItem from '../../../../components/contact-datalist-item/ContactDatalistItem';
import TextArea from '../../../../components/text-area';
import DatePicker from '../../../../components/date-picker/DatePicker';
import Checkbox from '../../../../components/checkbox';
import PillSelectorDropdown from '../../../../components/pill-selector-dropdown/PillSelectorDropdown';
import Button from '../../../../components/button/Button';
import { FeatureFlag } from '../../../common/feature-checking';
import PrimaryButton from '../../../../components/primary-button/PrimaryButton';
import { TASK_COMPLETION_RULE_ANY, TASK_COMPLETION_RULE_ALL, TASK_EDIT_MODE_CREATE, TASK_EDIT_MODE_EDIT } from '../../../../constants';
import { ACTIVITY_TARGETS, INTERACTION_TARGET } from '../../../common/interactionTargets';
import TaskError from './TaskError';
import './TaskForm.scss';

function convertAssigneesToSelectorItems(approvers) {
  return approvers.map(function (_ref) {
    var target = _ref.target;
    var newSelectorItem = {
      id: target.id,
      name: target.name,
      item: target,
      value: target.id,
      text: target.name // for PillSelectorDropdown SelectorOptions type

    };
    return newSelectorItem;
  });
}

var TaskForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TaskForm, _React$Component);

  function TaskForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TaskForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TaskForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", _this.getInitialFormState());

    _defineProperty(_assertThisInitialized(_this), "validateForm", function (only) {
      _this.setState(function (state) {
        var intl = _this.props.intl;
        var approvers = state.approvers,
            message = state.message,
            approverTextInput = state.approverTextInput;
        var assigneeFieldMissingError = {
          code: 'required',
          message: intl.formatMessage(commonMessages.requiredFieldError)
        };
        var assigneeFieldInvalidError = {
          code: 'invalid',
          message: intl.formatMessage(commonMessages.invalidUserError)
        };
        var messageFieldError = {
          code: 'required',
          message: intl.formatMessage(commonMessages.requiredFieldError)
        };
        var formValidityState = {
          taskAssignees: (approverTextInput.length ? assigneeFieldInvalidError : null) || (approvers.length ? null : assigneeFieldMissingError),
          taskName: message ? null : messageFieldError,
          taskDueDate: null
        };
        var isValid = Object.values(formValidityState).every(function (val) {
          return val == null;
        });
        return {
          isValid: isValid,
          formValidityState: only ? _objectSpread({}, state.formValidityState, _defineProperty({}, only, formValidityState[only])) : formValidityState
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getErrorByFieldname", function (fieldName) {
      var formValidityState = _this.state.formValidityState;
      return formValidityState[fieldName] ? formValidityState[fieldName].message : null;
    });

    _defineProperty(_assertThisInitialized(_this), "clearForm", function () {
      return _this.setState(_this.getInitialFormState());
    });

    _defineProperty(_assertThisInitialized(_this), "handleInvalidSubmit", function () {
      _this.validateForm();
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmitSuccess", function () {
      var onSubmitSuccess = _this.props.onSubmitSuccess;

      if (onSubmitSuccess) {
        onSubmitSuccess();
      }

      _this.clearForm();

      _this.setState({
        isLoading: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmitError", function (e) {
      var onSubmitError = _this.props.onSubmitError;
      onSubmitError(e);

      _this.setState({
        isLoading: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addResinInfo", function () {
      var _this$props = _this.props,
          id = _this$props.id,
          taskType = _this$props.taskType,
          editMode = _this$props.editMode;
      var dueDate = _this.state.dueDate;

      var addedAssignees = _this.getAddedAssignees();

      var removedAssignees = _this.getRemovedAssignees();

      return {
        'data-resin-taskid': id,
        'data-resin-tasktype': taskType,
        'data-resin-isediting': editMode === TASK_EDIT_MODE_EDIT,
        'data-resin-numassigneesadded': addedAssignees.filter(function (assignee) {
          return assignee.target.type === 'user';
        }).length,
        'data-resin-numgroupssadded': addedAssignees.filter(function (assignee) {
          return assignee.target.type === 'group';
        }).length,
        'data-resin-numassigneesremoved': removedAssignees.length,
        'data-resin-assigneesadded': addedAssignees.map(function (assignee) {
          return assignee.target.id;
        }),
        'data-resin-assigneesremoved': removedAssignees.map(function (assignee) {
          return assignee.target.id;
        }),
        'data-resin-duedate': dueDate && dueDate.getTime()
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getAddedAssignees", function () {
      // Added assignees are the ones in state that weren't in the prop
      var approvers = _this.props.approvers;
      var currentApprovers = _this.state.approvers;
      var approverIds = approvers.map(function (approver) {
        return approver.id;
      });
      return currentApprovers.filter(function (currentApprover) {
        return approverIds.indexOf(currentApprover.id) === -1;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getRemovedAssignees", function () {
      // Assignees to remove are the ones in the prop that cannot be found in state
      var approvers = _this.props.approvers;
      var currentApprovers = _this.state.approvers;
      var currentApproverIds = currentApprovers.map(function (currentApprover) {
        return currentApprover.id;
      });
      return approvers.filter(function (approver) {
        return currentApproverIds.indexOf(approver.id) === -1;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleValidSubmit", function () {
      var _this$props2 = _this.props,
          id = _this$props2.id,
          createTask = _this$props2.createTask,
          editTask = _this$props2.editTask,
          editMode = _this$props2.editMode,
          taskType = _this$props2.taskType;
      var _this$state = _this.state,
          message = _this$state.message,
          currentApprovers = _this$state.approvers,
          dueDate = _this$state.dueDate,
          completionRule = _this$state.completionRule,
          isValid = _this$state.isValid;
      var dueDateString = dueDate && dueDate.toISOString();
      if (!isValid) return;

      _this.setState({
        isLoading: true
      });

      if (editMode === TASK_EDIT_MODE_EDIT && editTask) {
        editTask({
          id: id,
          completion_rule: completionRule,
          description: message,
          due_at: dueDateString,
          addedAssignees: convertAssigneesToSelectorItems(_this.getAddedAssignees()),
          removedAssignees: _this.getRemovedAssignees()
        }, _this.handleSubmitSuccess, _this.handleSubmitError);
      } else {
        createTask(message, convertAssigneesToSelectorItems(currentApprovers), taskType, dueDateString, completionRule, _this.handleSubmitSuccess, _this.handleSubmitError);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDueDateChange", function (date) {
      var dateValue = null;

      if (date) {
        dateValue = new Date(date); // The date given to us is midnight of the date selected.
        // Modify date to be the end of day (minus 1 millisecond) for the given due date

        dateValue.setHours(23, 59, 59, 999);
      }

      _this.setState({
        dueDate: dateValue
      });

      _this.validateForm('taskDueDate');
    });

    _defineProperty(_assertThisInitialized(_this), "handleCompletionRuleChange", function (event) {
      _this.setState({
        completionRule: event.target.checked ? TASK_COMPLETION_RULE_ANY : TASK_COMPLETION_RULE_ALL
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleApproverSelectorInput", function (value) {
      var _this$props$getApprov = _this.props.getApproverWithQuery,
          getApproverWithQuery = _this$props$getApprov === void 0 ? noop : _this$props$getApprov;

      _this.setState({
        approverTextInput: value
      });

      getApproverWithQuery(value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleApproverSelectorSelect", function (pills) {
      _this.setState({
        approvers: _this.state.approvers.concat(pills.map(function (pill) {
          return {
            id: '',
            target: pill.item,
            role: 'ASSIGNEE',
            type: 'task_collaborator',
            status: 'NOT_STARTED',
            permissions: {
              can_delete: false,
              can_update: false
            }
          };
        })),
        approverTextInput: ''
      });

      _this.validateForm('taskAssignees');
    });

    _defineProperty(_assertThisInitialized(_this), "handleApproverSelectorRemove", function (option, index) {
      var approvers = _toConsumableArray(_this.state.approvers);

      approvers.splice(index, 1);

      _this.setState({
        approvers: approvers
      });

      _this.validateForm('taskAssignees');
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeMessage", function (e) {
      e.persist();

      _this.setState({
        message: e.currentTarget.value
      });

      _this.validateForm('taskName');
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancelClick", function () {
      _this.props.onCancel();
    });

    return _this;
  }

  _createClass(TaskForm, [{
    key: "getInitialFormState",
    value: function getInitialFormState() {
      var _this$props3 = this.props,
          dueDate = _this$props3.dueDate,
          id = _this$props3.id,
          message = _this$props3.message,
          approvers = _this$props3.approvers,
          completionRule = _this$props3.completionRule;
      return {
        id: id,
        completionRule: completionRule || TASK_COMPLETION_RULE_ALL,
        approvers: approvers,
        approverTextInput: '',
        dueDate: dueDate ? new Date(dueDate) : null,
        formValidityState: {},
        message: message,
        isLoading: false,
        isValid: null
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _ref5;

      var _this$props4 = this.props,
          approverSelectorContacts = _this$props4.approverSelectorContacts,
          className = _this$props4.className,
          error = _this$props4.error,
          isDisabled = _this$props4.isDisabled,
          intl = _this$props4.intl,
          editMode = _this$props4.editMode,
          taskType = _this$props4.taskType;
      var _this$state2 = this.state,
          dueDate = _this$state2.dueDate,
          approvers = _this$state2.approvers,
          message = _this$state2.message,
          formValidityState = _this$state2.formValidityState,
          isLoading = _this$state2.isLoading,
          completionRule = _this$state2.completionRule;
      var inputContainerClassNames = classNames('bcs-task-input-container', 'bcs-task-input-is-open', className);
      var isCreateEditMode = editMode === TASK_EDIT_MODE_CREATE;
      var selectedApprovers = convertAssigneesToSelectorItems(approvers); // filter out selected approvers
      // map to datalist item format

      var approverOptions = approverSelectorContacts.filter(function (_ref2) {
        var id = _ref2.id;
        return !selectedApprovers.find(function (_ref3) {
          var value = _ref3.value;
          return value === id;
        });
      });
      var pillSelectorOverlayClasses = classNames({
        scrollable: approverOptions.length > 4
      });
      var submitButtonMessage = isCreateEditMode ? messages.tasksAddTaskFormSubmitLabel : messages.tasksEditTaskFormSubmitLabel;
      var shouldShowCompletionRule = approvers.length > 0; // Enable checkbox when there is a group or multiple users being assigned
      // TODO: consider setting contants for assignee types to src/constants.js
      // - move from src/features/collaborator-avatars/constants.js

      var isCompletionRuleCheckboxDisabled = approvers.filter(function (approver) {
        return approver.target.type === 'group';
      }).length <= 0 && approvers.filter(function (approver) {
        return approver.target.type === 'user';
      }).length <= 1;
      var isCompletionRuleCheckboxChecked = completionRule === TASK_COMPLETION_RULE_ANY;
      var isForbiddenErrorOnEdit = isLoading || getProp(error, 'status') === 403 && !isCreateEditMode;
      return React.createElement("div", {
        className: inputContainerClassNames,
        "data-resin-component": "taskform"
      }, React.createElement("div", {
        className: "bcs-task-input-form-container"
      }, React.createElement(TaskError, {
        editMode: editMode,
        error: error,
        taskType: taskType
      }), React.createElement(Form, {
        formValidityState: formValidityState,
        onInvalidSubmit: this.handleInvalidSubmit,
        onValidSubmit: this.handleValidSubmit
      }, React.createElement(PillSelectorDropdown, {
        className: pillSelectorOverlayClasses,
        error: this.getErrorByFieldname('taskAssignees'),
        disabled: isForbiddenErrorOnEdit,
        inputProps: {
          'data-testid': 'task-form-assignee-input'
        },
        isRequired: true,
        label: React.createElement(FormattedMessage, messages.tasksAddTaskFormSelectAssigneesLabel),
        name: "taskAssignees",
        onBlur: function onBlur() {
          return _this2.validateForm('taskAssignees');
        },
        onInput: this.handleApproverSelectorInput,
        onRemove: this.handleApproverSelectorRemove,
        onSelect: this.handleApproverSelectorSelect,
        placeholder: intl.formatMessage(commentFormMessages.approvalAddAssignee),
        selectedOptions: selectedApprovers,
        selectorOptions: approverOptions,
        shouldSetActiveItemOnOpen: true,
        shouldClearUnmatchedInput: true,
        validateForError: function validateForError() {
          return _this2.validateForm('taskAssignees');
        }
      }, approverOptions.map(function (_ref4) {
        var id = _ref4.id,
            name = _ref4.name,
            _ref4$item = _ref4.item,
            item = _ref4$item === void 0 ? {} : _ref4$item;
        return React.createElement(ContactDatalistItem, {
          key: id,
          "data-testid": "task-assignee-option",
          name: name,
          subtitle: item.type === 'group' ? React.createElement(FormattedMessage, messages.taskCreateGroupLabel) : item.email
        });
      })), shouldShowCompletionRule && React.createElement(React.Fragment, null, React.createElement(FeatureFlag, {
        feature: "activityFeed.tasks.assignToGroup"
      }, React.createElement(Checkbox, {
        "data-testid": "task-form-completion-rule-checkbox-group",
        isChecked: isCompletionRuleCheckboxChecked,
        isDisabled: isCompletionRuleCheckboxDisabled || isForbiddenErrorOnEdit,
        label: React.createElement(FormattedMessage, messages.taskAnyCheckboxLabel),
        tooltip: intl.formatMessage(messages.taskAnyInfoGroupTooltip),
        name: "completionRule",
        onChange: this.handleCompletionRuleChange
      })), React.createElement(FeatureFlag, {
        not: true,
        feature: "activityFeed.tasks.assignToGroup"
      }, React.createElement(Checkbox, {
        "data-testid": "task-form-completion-rule-checkbox",
        isChecked: isCompletionRuleCheckboxChecked,
        isDisabled: isCompletionRuleCheckboxDisabled || isForbiddenErrorOnEdit,
        label: React.createElement(FormattedMessage, messages.taskAnyCheckboxLabel),
        tooltip: intl.formatMessage(messages.taskAnyInfoTooltip),
        name: "completionRule",
        onChange: this.handleCompletionRuleChange
      }))), React.createElement(TextArea, {
        className: "bcs-task-name-input",
        "data-testid": "task-form-name-input",
        disabled: isDisabled || isForbiddenErrorOnEdit,
        error: this.getErrorByFieldname('taskName'),
        isRequired: true,
        label: React.createElement(FormattedMessage, messages.tasksAddTaskFormMessageLabel),
        name: "taskName",
        onBlur: function onBlur() {
          return _this2.validateForm('taskName');
        },
        onChange: this.handleChangeMessage,
        placeholder: intl.formatMessage(commentFormMessages.commentWrite),
        value: message
      }), React.createElement(DatePicker, {
        className: "bcs-task-add-due-date-input",
        error: this.getErrorByFieldname('taskDueDate'),
        inputProps: (_ref5 = {}, _defineProperty(_ref5, INTERACTION_TARGET, ACTIVITY_TARGETS.TASK_DATE_PICKER), _defineProperty(_ref5, 'data-testid', 'task-form-date-input'), _ref5),
        isDisabled: isForbiddenErrorOnEdit,
        isRequired: false,
        label: React.createElement(FormattedMessage, messages.tasksAddTaskFormDueDateLabel),
        minDate: new Date(),
        name: "taskDueDate",
        onChange: this.handleDueDateChange,
        placeholder: intl.formatMessage(commentFormMessages.approvalSelectDate),
        value: dueDate || undefined
      }), React.createElement("div", {
        className: "bcs-task-input-controls"
      }, React.createElement(Button, _extends({
        className: "bcs-task-input-cancel-btn",
        "data-resin-target": ACTIVITY_TARGETS.APPROVAL_FORM_CANCEL,
        "data-testid": "task-form-cancel-button",
        onClick: this.handleCancelClick,
        isDisabled: isLoading,
        type: "button"
      }, this.addResinInfo()), React.createElement(FormattedMessage, messages.tasksAddTaskFormCancelLabel)), React.createElement(PrimaryButton, _extends({
        className: "bcs-task-input-submit-btn",
        "data-resin-target": ACTIVITY_TARGETS.APPROVAL_FORM_POST,
        "data-testid": "task-form-submit-button",
        isDisabled: isForbiddenErrorOnEdit,
        isLoading: isLoading
      }, this.addResinInfo()), React.createElement(FormattedMessage, submitButtonMessage))))));
    }
  }]);

  return TaskForm;
}(React.Component); // For testing only


_defineProperty(TaskForm, "defaultProps", {
  approvers: [],
  approverSelectorContacts: [],
  editMode: TASK_EDIT_MODE_CREATE,
  id: '',
  message: ''
});

export { TaskForm as TaskFormUnwrapped };
export default injectIntl(TaskForm);
//# sourceMappingURL=TaskForm.js.map