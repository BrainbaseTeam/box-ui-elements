function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import AddTaskMenu from './AddTaskMenu';
import TaskModal from './TaskModal';
import { TASK_TYPE_APPROVAL } from '../../constants';

var AddTaskButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AddTaskButton, _React$Component);

  function AddTaskButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AddTaskButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AddTaskButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "buttonRef", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "state", {
      error: null,
      isTaskFormOpen: false,
      taskType: TASK_TYPE_APPROVAL
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickMenuItem", function (taskType) {
      _this.props.history.replace({
        state: {
          open: true
        }
      });

      _this.setState({
        isTaskFormOpen: true,
        taskType: taskType
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleModalClose", function () {
      var onTaskModalClose = _this.props.onTaskModalClose;

      _this.setState({
        isTaskFormOpen: false,
        error: null
      });

      if (_this.buttonRef.current) {
        _this.buttonRef.current.focus();
      }

      onTaskModalClose();
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmitError", function (e) {
      return _this.setState({
        error: e
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setAddTaskButtonRef", function (element) {
      _this.buttonRef.current = element;
    });

    return _this;
  }

  _createClass(AddTaskButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isDisabled = _this$props.isDisabled,
          taskFormProps = _this$props.taskFormProps;
      var _this$state = this.state,
          isTaskFormOpen = _this$state.isTaskFormOpen,
          taskType = _this$state.taskType,
          error = _this$state.error;
      return React.createElement(React.Fragment, null, React.createElement(AddTaskMenu, {
        isDisabled: isDisabled,
        onMenuItemClick: this.handleClickMenuItem,
        setAddTaskButtonRef: this.setAddTaskButtonRef
      }), React.createElement(TaskModal, {
        error: error,
        onSubmitError: this.handleSubmitError,
        onSubmitSuccess: this.handleModalClose,
        onModalClose: this.handleModalClose,
        isTaskFormOpen: isTaskFormOpen,
        taskFormProps: taskFormProps,
        taskType: taskType
      }));
    }
  }]);

  return AddTaskButton;
}(React.Component);

_defineProperty(AddTaskButton, "defaultProps", {
  isDisabled: false
});

export { AddTaskButton as AddTaskButtonComponent };
export default withRouter(AddTaskButton);
//# sourceMappingURL=AddTaskButton.js.map