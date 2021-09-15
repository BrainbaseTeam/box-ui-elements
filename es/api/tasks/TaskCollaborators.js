function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * 
 * @file Helper for the box Task Collaborators API
 * @author Box
 */
import omit from 'lodash/omit';
import TasksBase from './TasksBase';
import { ERROR_CODE_FETCH_TASK_COLLABORATOR, ERROR_CODE_CREATE_TASK_COLLABORATOR, ERROR_CODE_UPDATE_TASK_COLLABORATOR, ERROR_CODE_DELETE_TASK_COLLABORATOR, API_PAGE_LIMIT } from '../../constants';

var TaskCollaborators =
/*#__PURE__*/
function (_TasksBase) {
  _inherits(TaskCollaborators, _TasksBase);

  function TaskCollaborators() {
    _classCallCheck(this, TaskCollaborators);

    return _possibleConstructorReturn(this, _getPrototypeOf(TaskCollaborators).apply(this, arguments));
  }

  _createClass(TaskCollaborators, [{
    key: "getUrlForTaskCollaborators",
    value: function getUrlForTaskCollaborators(taskId) {
      return "".concat(this.getBaseApiUrl(), "/undoc/tasks/").concat(taskId, "/task_collaborators?role=ASSIGNEE&limit=").concat(API_PAGE_LIMIT);
    }
  }, {
    key: "getUrlForTaskCollaboratorCreate",
    value: function getUrlForTaskCollaboratorCreate() {
      return "".concat(this.getBaseApiUrl(), "/undoc/task_collaborators");
    }
  }, {
    key: "getUrlForTaskCollaborator",
    value: function getUrlForTaskCollaborator(id) {
      return "".concat(this.getBaseApiUrl(), "/undoc/task_collaborators/").concat(id);
    }
  }, {
    key: "getUrlForTaskGroupCreate",
    value: function getUrlForTaskGroupCreate() {
      return "".concat(this.getBaseApiUrl(), "/undoc/task_collaborators/expand_group");
    }
  }, {
    key: "createTaskCollaborator",
    value: function createTaskCollaborator(_ref) {
      var errorCallback = _ref.errorCallback,
          file = _ref.file,
          successCallback = _ref.successCallback,
          task = _ref.task,
          user = _ref.user;
      this.errorCode = ERROR_CODE_CREATE_TASK_COLLABORATOR;
      var requestData = {
        data: {
          task: {
            type: 'task',
            id: task.id
          },
          target: {
            type: 'user',
            id: user.id
          }
        }
      };
      this.post({
        id: file.id,
        url: this.getUrlForTaskCollaboratorCreate(),
        data: _objectSpread({}, requestData),
        successCallback: successCallback,
        errorCallback: errorCallback
      });
    }
  }, {
    key: "createTaskCollaboratorsforGroup",
    value: function createTaskCollaboratorsforGroup(_ref2) {
      var errorCallback = _ref2.errorCallback,
          file = _ref2.file,
          successCallback = _ref2.successCallback,
          task = _ref2.task,
          group = _ref2.group;
      this.errorCode = ERROR_CODE_CREATE_TASK_COLLABORATOR;
      var requestData = {
        data: {
          task: {
            type: 'task',
            id: task.id
          },
          target: {
            type: 'group',
            id: group.id
          }
        }
      };
      this.post({
        id: file.id,
        url: this.getUrlForTaskGroupCreate(),
        data: _objectSpread({}, requestData),
        successCallback: successCallback,
        errorCallback: errorCallback
      });
    }
  }, {
    key: "getTaskCollaborators",
    value: function getTaskCollaborators(_ref3) {
      var errorCallback = _ref3.errorCallback,
          file = _ref3.file,
          successCallback = _ref3.successCallback,
          task = _ref3.task;
      this.errorCode = ERROR_CODE_FETCH_TASK_COLLABORATOR;
      var url = this.getUrlForTaskCollaborators(task.id);
      this.get({
        id: file.id,
        successCallback: successCallback,
        errorCallback: errorCallback,
        url: url
      });
    }
  }, {
    key: "updateTaskCollaborator",
    value: function updateTaskCollaborator(_ref4) {
      var errorCallback = _ref4.errorCallback,
          file = _ref4.file,
          successCallback = _ref4.successCallback,
          taskCollaborator = _ref4.taskCollaborator;
      this.errorCode = ERROR_CODE_UPDATE_TASK_COLLABORATOR;
      var requestData = {
        data: omit(taskCollaborator, 'id')
      };
      this.put({
        id: file.id,
        url: this.getUrlForTaskCollaborator(taskCollaborator.id),
        data: _objectSpread({}, requestData),
        successCallback: successCallback,
        errorCallback: errorCallback
      });
    }
  }, {
    key: "deleteTaskCollaborator",
    value: function deleteTaskCollaborator(_ref5) {
      var errorCallback = _ref5.errorCallback,
          file = _ref5.file,
          successCallback = _ref5.successCallback,
          taskCollaborator = _ref5.taskCollaborator;
      this.errorCode = ERROR_CODE_DELETE_TASK_COLLABORATOR;
      this.delete({
        id: file.id,
        url: this.getUrlForTaskCollaborator(taskCollaborator.id),
        successCallback: successCallback,
        errorCallback: errorCallback
      });
    }
  }]);

  return TaskCollaborators;
}(TasksBase);

export default TaskCollaborators;
//# sourceMappingURL=TaskCollaborators.js.map