function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
 * @file Helper for the box Tasks API
 * @author Box
 */
import TasksBase from './TasksBase';
import { ERROR_CODE_CREATE_TASK, ERROR_CODE_UPDATE_TASK, ERROR_CODE_DELETE_TASK, ERROR_CODE_FETCH_TASKS, API_PAGE_LIMIT } from '../../constants';

var TasksNew =
/*#__PURE__*/
function (_TasksBase) {
  _inherits(TasksNew, _TasksBase);

  function TasksNew() {
    _classCallCheck(this, TasksNew);

    return _possibleConstructorReturn(this, _getPrototypeOf(TasksNew).apply(this, arguments));
  }

  _createClass(TasksNew, [{
    key: "getUrlForFileTasks",
    value: function getUrlForFileTasks(id) {
      return "".concat(this.getBaseApiUrl(), "/undoc/files/").concat(id, "/linked_tasks?limit=").concat(API_PAGE_LIMIT);
    }
  }, {
    key: "getUrlForTaskCreateWithDeps",
    value: function getUrlForTaskCreateWithDeps() {
      return "".concat(this.getBaseApiUrl(), "/undoc/tasks/with_dependencies");
    }
  }, {
    key: "getUrlForTask",
    value: function getUrlForTask(id) {
      return "".concat(this.getBaseApiUrl(), "/undoc/tasks/").concat(id);
    }
  }, {
    key: "getUrlForTaskWithDeps",
    value: function getUrlForTaskWithDeps(id) {
      return "".concat(this.getBaseApiUrl(), "/undoc/tasks/").concat(id, "/with_dependencies");
    }
  }, {
    key: "updateTaskWithDeps",
    value: function updateTaskWithDeps(_ref) {
      var errorCallback = _ref.errorCallback,
          file = _ref.file,
          successCallback = _ref.successCallback,
          task = _ref.task;
      this.errorCode = ERROR_CODE_UPDATE_TASK;
      var createTaskCollabsPayload = task.addedAssignees.map(function (assignee) {
        return {
          op: assignee.item && assignee.item.type === 'group' ? 'add_task_collaborators_expand_group' : 'add_task_collaborator',
          payload: {
            target: {
              type: assignee.item && assignee.item.type === 'group' ? 'group' : 'user',
              id: assignee.id
            }
          }
        };
      });
      var deleteTaskCollabsPayload = task.removedAssignees.map(function (assignee) {
        return {
          op: 'delete_task_collaborator',
          id: assignee.id
        };
      });

      var id = task.id,
          addedAssignees = task.addedAssignees,
          removedAssignees = task.removedAssignees,
          updateTaskPayload = _objectWithoutProperties(task, ["id", "addedAssignees", "removedAssignees"]);

      this.put({
        id: file.id,
        url: this.getUrlForTaskWithDeps(task.id),
        data: {
          data: [{
            op: 'update_task',
            payload: _objectSpread({}, updateTaskPayload)
          }].concat(_toConsumableArray(createTaskCollabsPayload), _toConsumableArray(deleteTaskCollabsPayload))
        },
        successCallback: successCallback,
        errorCallback: errorCallback
      });
    }
  }, {
    key: "deleteTask",
    value: function deleteTask(_ref2) {
      var errorCallback = _ref2.errorCallback,
          file = _ref2.file,
          successCallback = _ref2.successCallback,
          task = _ref2.task;
      this.errorCode = ERROR_CODE_DELETE_TASK;
      this.delete({
        id: file.id,
        url: this.getUrlForTask(task.id),
        successCallback: successCallback,
        errorCallback: errorCallback
      });
    }
  }, {
    key: "getTasksForFile",
    value: function getTasksForFile(_ref3) {
      var errorCallback = _ref3.errorCallback,
          file = _ref3.file,
          successCallback = _ref3.successCallback;
      this.errorCode = ERROR_CODE_FETCH_TASKS;
      this.get({
        id: file.id,
        url: this.getUrlForFileTasks(file.id),
        successCallback: successCallback,
        errorCallback: errorCallback
      });
    }
  }, {
    key: "getTask",
    value: function getTask(_ref4) {
      var errorCallback = _ref4.errorCallback,
          file = _ref4.file,
          id = _ref4.id,
          successCallback = _ref4.successCallback;
      this.errorCode = ERROR_CODE_FETCH_TASKS;
      this.get({
        id: file.id,
        url: this.getUrlForTask(id),
        successCallback: successCallback,
        errorCallback: errorCallback
      });
    }
  }, {
    key: "createTaskWithDeps",
    value: function createTaskWithDeps(_ref5) {
      var errorCallback = _ref5.errorCallback,
          file = _ref5.file,
          successCallback = _ref5.successCallback,
          task = _ref5.task,
          assignees = _ref5.assignees;
      this.errorCode = ERROR_CODE_CREATE_TASK;
      var createTaskCollabsPayload = assignees.map(function (assignee) {
        return {
          target: {
            type: assignee.item && assignee.item.type === 'group' ? 'group' : 'user',
            id: assignee.id
          }
        };
      });
      var createTaskLinksPayload = [{
        target: {
          id: file.id,
          type: 'file'
        }
      }];
      var createTaskWithDepsPayload = {
        task: _objectSpread({}, task),
        assigned_to: createTaskCollabsPayload,
        task_links: createTaskLinksPayload
      };
      this.post({
        id: file.id,
        url: this.getUrlForTaskCreateWithDeps(),
        data: {
          data: _objectSpread({}, createTaskWithDepsPayload)
        },
        successCallback: successCallback,
        errorCallback: errorCallback
      });
    }
  }]);

  return TasksNew;
}(TasksBase);

export default TasksNew;
//# sourceMappingURL=TasksNew.js.map