function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import noop from 'lodash/noop';
import flow from 'lodash/flow';
import get from 'lodash/get';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import TetherComponent from 'react-tether';
import { withFeatureConsumer, getFeatureConfig } from '../../../common/feature-checking';
import { withAPIContext } from '../../../common/api-context';
import Avatar from '../Avatar';
import Media from '../../../../components/media';
import { MenuItem } from '../../../../components/menu';
import ActivityError from '../common/activity-error';
import ActivityMessage from '../common/activity-message';
import ActivityTimestamp from '../common/activity-timestamp';
import DeleteConfirmation from '../common/delete-confirmation';
import IconTaskApproval from '../../../../icons/two-toned/IconTaskApproval';
import IconTaskGeneral from '../../../../icons/two-toned/IconTaskGeneral';
import IconTrash from '../../../../icons/general/IconTrash';
import IconPencil from '../../../../icons/general/IconPencil';
import UserLink from '../common/user-link';
import API from '../../../../api/APIFactory';
import { TASK_COMPLETION_RULE_ALL, TASK_NEW_APPROVED, TASK_NEW_REJECTED, TASK_NEW_NOT_STARTED, TASK_NEW_IN_PROGRESS, TASK_NEW_COMPLETED, TASK_TYPE_APPROVAL, PLACEHOLDER_USER, TASK_EDIT_MODE_EDIT } from '../../../../constants';
import { ACTIVITY_TARGETS } from '../../../common/interactionTargets';
import { bdlGray80 } from '../../../../styles/variables';
import TaskActions from './TaskActions';
import TaskCompletionRuleIcon from './TaskCompletionRuleIcon';
import TaskDueDate from './TaskDueDate';
import TaskStatus from './TaskStatus';
import AssigneeList from './AssigneeList';
import TaskModal from '../../TaskModal';
import commonMessages from '../../../common/messages';
import messages from './messages';
import './Task.scss';

var getMessageForTask = function getMessageForTask(isCurrentUser, taskType) {
  if (isCurrentUser) {
    if (taskType === TASK_TYPE_APPROVAL) {
      return messages.tasksFeedHeadlineApprovalCurrentUser;
    }

    return messages.tasksFeedHeadlineGeneralCurrentUser;
  }

  if (taskType === TASK_TYPE_APPROVAL) {
    return messages.tasksFeedHeadlineApproval;
  }

  return messages.tasksFeedHeadlineGeneral;
};

var Task = /*#__PURE__*/function (_React$Component) {
  _inherits(Task, _React$Component);

  var _super = _createSuper(Task);

  function Task() {
    var _this;

    _classCallCheck(this, Task);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      loadCollabError: undefined,
      assignedToFull: _this.props.assigned_to,
      modalError: undefined,
      isEditing: false,
      isLoading: false,
      isAssigneeListOpen: false,
      isConfirmingDelete: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleAssigneeListExpand", function () {
      _this.getAllTaskCollaborators(function () {
        _this.setState({
          isAssigneeListOpen: true
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleAssigneeListCollapse", function () {
      _this.setState({
        isAssigneeListOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleEditClick", function () {
      _this.getAllTaskCollaborators(function () {
        _this.setState({
          isEditing: true
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeleteClick", function () {
      _this.setState({
        isConfirmingDelete: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeleteConfirm", function () {
      var _this$props = _this.props,
          id = _this$props.id,
          onDelete = _this$props.onDelete,
          permissions = _this$props.permissions;

      if (onDelete) {
        onDelete({
          id: id,
          permissions: permissions
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeleteCancel", function () {
      _this.setState({
        isConfirmingDelete: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleEditModalClose", function () {
      var onModalClose = _this.props.onModalClose;

      _this.setState({
        isEditing: false,
        modalError: undefined
      });

      if (onModalClose) {
        onModalClose();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEditSubmitError", function (error) {
      _this.setState({
        modalError: error
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getAllTaskCollaborators", function (onSuccess) {
      var _this$props2 = _this.props,
          id = _this$props2.id,
          api = _this$props2.api,
          task_links = _this$props2.task_links,
          assigned_to = _this$props2.assigned_to;
      var errorOccured = commonMessages.errorOccured;
      var taskCollaboratorLoadErrorMessage = messages.taskCollaboratorLoadErrorMessage; // skip fetch when there are no additional collaborators

      if (!assigned_to.next_marker) {
        _this.setState({
          assignedToFull: assigned_to
        });

        onSuccess();
        return;
      } // fileid is required for api calls, check for presence


      var fileId = get(task_links, 'entries[0].target.id');

      if (!fileId) {
        return;
      }

      _this.setState({
        isLoading: true
      });

      api.getTaskCollaboratorsAPI(false).getTaskCollaborators({
        task: {
          id: id
        },
        file: {
          id: fileId
        },
        errorCallback: function errorCallback() {
          _this.setState({
            isLoading: false,
            loadCollabError: {
              message: taskCollaboratorLoadErrorMessage,
              title: errorOccured
            }
          });
        },
        successCallback: function successCallback(assignedToFull) {
          _this.setState({
            assignedToFull: assignedToFull,
            isLoading: false
          });

          onSuccess();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleTaskAction", function (taskId, assignmentId, taskStatus) {
      var onAssignmentUpdate = _this.props.onAssignmentUpdate;

      _this.setState({
        isAssigneeListOpen: false
      });

      onAssignmentUpdate(taskId, assignmentId, taskStatus);
    });

    return _this;
  }

  _createClass(Task, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          approverSelectorContacts = _this$props3.approverSelectorContacts,
          assigned_to = _this$props3.assigned_to,
          completion_rule = _this$props3.completion_rule,
          created_at = _this$props3.created_at,
          created_by = _this$props3.created_by,
          currentUser = _this$props3.currentUser,
          due_at = _this$props3.due_at,
          error = _this$props3.error,
          features = _this$props3.features,
          getApproverWithQuery = _this$props3.getApproverWithQuery,
          getAvatarUrl = _this$props3.getAvatarUrl,
          getUserProfileUrl = _this$props3.getUserProfileUrl,
          id = _this$props3.id,
          isPending = _this$props3.isPending,
          description = _this$props3.description,
          onEdit = _this$props3.onEdit,
          permissions = _this$props3.permissions,
          status = _this$props3.status,
          task_type = _this$props3.task_type,
          translatedTaggedMessage = _this$props3.translatedTaggedMessage,
          translations = _this$props3.translations;
      var _this$state = this.state,
          assignedToFull = _this$state.assignedToFull,
          modalError = _this$state.modalError,
          isEditing = _this$state.isEditing,
          isLoading = _this$state.isLoading,
          loadCollabError = _this$state.loadCollabError,
          isAssigneeListOpen = _this$state.isAssigneeListOpen,
          isConfirmingDelete = _this$state.isConfirmingDelete;
      var inlineError = loadCollabError || error;
      var currentUserAssignment = assigned_to && assigned_to.entries ? assigned_to.entries.find(function (_ref) {
        var target = _ref.target;
        return target.id === currentUser.id;
      }) : null;
      var createdByUser = created_by.target || PLACEHOLDER_USER;
      var createdAtTimestamp = new Date(created_at).getTime();
      var shouldShowActions = currentUserAssignment && currentUserAssignment.permissions && currentUserAssignment.permissions.can_update && currentUserAssignment.status === TASK_NEW_NOT_STARTED && (status === TASK_NEW_NOT_STARTED || status === TASK_NEW_IN_PROGRESS);
      var TaskTypeIcon = task_type === TASK_TYPE_APPROVAL ? IconTaskApproval : IconTaskGeneral;
      var isMenuVisible = (permissions.can_delete || permissions.can_update) && !isPending;
      return /*#__PURE__*/React.createElement("div", {
        className: "bcs-Task"
      }, inlineError ? /*#__PURE__*/React.createElement(ActivityError, inlineError) : null, /*#__PURE__*/React.createElement(Media, {
        className: classNames('bcs-Task-media', {
          'bcs-is-pending': isPending || isLoading
        })
      }, /*#__PURE__*/React.createElement(Media.Figure, {
        className: "bcs-Task-avatar"
      }, /*#__PURE__*/React.createElement(Avatar, {
        getAvatarUrl: getAvatarUrl,
        user: createdByUser
      }), /*#__PURE__*/React.createElement(TaskTypeIcon, {
        width: 20,
        height: 20,
        className: "bcs-Task-avatarBadge"
      })), /*#__PURE__*/React.createElement(Media.Body, null, isMenuVisible && /*#__PURE__*/React.createElement(TetherComponent, {
        attachment: "top right",
        className: "bcs-Task-deleteConfirmationModal",
        constraints: [{
          to: 'scrollParent',
          attachment: 'together'
        }],
        targetAttachment: "bottom right"
      }, /*#__PURE__*/React.createElement(Media.Menu, {
        isDisabled: isConfirmingDelete,
        menuProps: {
          'data-resin-component': ACTIVITY_TARGETS.TASK_OPTIONS
        }
      }, permissions.can_update && /*#__PURE__*/React.createElement(MenuItem, {
        "data-resin-target": ACTIVITY_TARGETS.TASK_OPTIONS_EDIT,
        onClick: this.handleEditClick
      }, /*#__PURE__*/React.createElement(IconPencil, {
        color: bdlGray80
      }), /*#__PURE__*/React.createElement(FormattedMessage, messages.taskEditMenuItem)), permissions.can_delete && /*#__PURE__*/React.createElement(MenuItem, {
        "data-resin-target": ACTIVITY_TARGETS.TASK_OPTIONS_DELETE,
        onClick: this.handleDeleteClick
      }, /*#__PURE__*/React.createElement(IconTrash, {
        color: bdlGray80
      }), /*#__PURE__*/React.createElement(FormattedMessage, messages.taskDeleteMenuItem))), isConfirmingDelete && /*#__PURE__*/React.createElement(DeleteConfirmation, {
        "data-resin-component": ACTIVITY_TARGETS.TASK_OPTIONS,
        isOpen: isConfirmingDelete,
        message: messages.taskDeletePrompt,
        onDeleteCancel: this.handleDeleteCancel,
        onDeleteConfirm: this.handleDeleteConfirm
      })), /*#__PURE__*/React.createElement("div", {
        className: "bcs-Task-headline"
      }, /*#__PURE__*/React.createElement(FormattedMessage, _extends({}, getMessageForTask(!!currentUserAssignment, task_type), {
        values: {
          user: /*#__PURE__*/React.createElement(UserLink, _extends({}, createdByUser, {
            "data-resin-target": ACTIVITY_TARGETS.PROFILE,
            getUserProfileUrl: getUserProfileUrl
          }))
        }
      }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ActivityTimestamp, {
        date: createdAtTimestamp
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ActivityMessage, _extends({
        id: id,
        tagged_message: description,
        translatedTaggedMessage: translatedTaggedMessage
      }, translations, {
        translationFailed: error ? true : null,
        getUserProfileUrl: getUserProfileUrl
      }))), /*#__PURE__*/React.createElement("div", {
        className: "bcs-Task-statusContainer"
      }, !!due_at && /*#__PURE__*/React.createElement(TaskDueDate, {
        dueDate: due_at,
        status: status
      }), /*#__PURE__*/React.createElement(TaskStatus, {
        status: status
      }), /*#__PURE__*/React.createElement(TaskCompletionRuleIcon, {
        completionRule: completion_rule
      })), /*#__PURE__*/React.createElement("div", {
        className: "bcs-Task-assigneeListContainer"
      }, /*#__PURE__*/React.createElement(AssigneeList, {
        isOpen: isAssigneeListOpen,
        onCollapse: this.handleAssigneeListCollapse,
        onExpand: this.handleAssigneeListExpand,
        getAvatarUrl: getAvatarUrl,
        initialAssigneeCount: 3,
        users: isAssigneeListOpen ? assignedToFull : assigned_to
      })), currentUserAssignment && shouldShowActions && /*#__PURE__*/React.createElement("div", {
        className: "bcs-Task-actionsContainer"
      }, /*#__PURE__*/React.createElement(TaskActions, {
        taskType: task_type,
        onTaskApproval: isPending ? noop : function () {
          _this2.handleTaskAction(id, currentUserAssignment.id, TASK_NEW_APPROVED);
        },
        onTaskReject: isPending ? noop : function () {
          return _this2.handleTaskAction(id, currentUserAssignment.id, TASK_NEW_REJECTED);
        },
        onTaskComplete: isPending ? noop : function () {
          return _this2.handleTaskAction(id, currentUserAssignment.id, TASK_NEW_COMPLETED);
        }
      })))), /*#__PURE__*/React.createElement(TaskModal, {
        editMode: TASK_EDIT_MODE_EDIT,
        error: modalError,
        feedbackUrl: getFeatureConfig(features, 'activityFeed.tasks').feedbackUrl || '',
        onSubmitError: this.handleEditSubmitError,
        onSubmitSuccess: this.handleEditModalClose,
        onModalClose: this.handleEditModalClose,
        isTaskFormOpen: isEditing,
        taskFormProps: {
          id: id,
          approvers: assignedToFull.entries,
          approverSelectorContacts: approverSelectorContacts,
          completionRule: completion_rule,
          getApproverWithQuery: getApproverWithQuery,
          getAvatarUrl: getAvatarUrl,
          createTask: function createTask() {},
          editTask: onEdit,
          dueDate: due_at,
          message: description
        },
        taskType: task_type
      }));
    }
  }]);

  return Task;
}(React.Component);

_defineProperty(Task, "defaultProps", {
  completion_rule: TASK_COMPLETION_RULE_ALL
});

export { Task as TaskComponent };
export default flow([withFeatureConsumer, withAPIContext])(Task);
//# sourceMappingURL=Task.js.map