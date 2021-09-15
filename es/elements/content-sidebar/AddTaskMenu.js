import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '../../components/button';
import DropdownMenu from '../../components/dropdown-menu';
import MenuToggle from '../../components/dropdown-menu/MenuToggle';
import { Menu, MenuItem } from '../../components/menu';
import IconTaskApproval from '../../icons/two-toned/IconTaskApproval';
import IconTaskGeneral from '../../icons/two-toned/IconTaskGeneral';
import messages from './messages';
import { TASK_TYPE_APPROVAL, TASK_TYPE_GENERAL } from '../../constants';
import './AddTaskMenu.scss';

var AddTaskMenu = function AddTaskMenu(props) {
  return React.createElement(DropdownMenu, {
    constrainToScrollParent: true,
    isRightAligned: true
  }, React.createElement(Button, {
    isDisabled: props.isDisabled,
    type: "button",
    setRef: props.setAddTaskButtonRef
  }, React.createElement(MenuToggle, null, React.createElement(FormattedMessage, messages.tasksAddTask))), React.createElement(Menu, {
    className: "bcs-AddTaskMenu"
  }, React.createElement(MenuItem, {
    className: "bcs-AddTaskMenu-menuItem",
    onClick: function onClick() {
      return props.onMenuItemClick(TASK_TYPE_GENERAL);
    }
  }, React.createElement("div", {
    className: "bcs-AddTaskMenu-icon"
  }, React.createElement(IconTaskGeneral, {
    width: 30,
    height: 30
  })), React.createElement("div", null, React.createElement("div", {
    className: "bcs-AddTaskMenu-title"
  }, React.createElement(FormattedMessage, messages.taskAddTaskGeneral)), React.createElement("div", {
    className: "bcs-AddTaskMenu-description"
  }, React.createElement(FormattedMessage, messages.taskAddTaskGeneralDescription)))), React.createElement(MenuItem, {
    className: "bcs-AddTaskMenu-menuItem",
    onClick: function onClick() {
      return props.onMenuItemClick(TASK_TYPE_APPROVAL);
    }
  }, React.createElement("div", {
    className: "bcs-AddTaskMenu-icon"
  }, React.createElement(IconTaskApproval, {
    width: 30,
    height: 30
  })), React.createElement("div", null, React.createElement("div", {
    className: "bcs-AddTaskMenu-title"
  }, React.createElement(FormattedMessage, messages.taskAddTaskApproval)), React.createElement("div", {
    className: "bcs-AddTaskMenu-description"
  }, React.createElement(FormattedMessage, messages.taskAddTaskApprovalDescription))))));
};

export default AddTaskMenu;
//# sourceMappingURL=AddTaskMenu.js.map