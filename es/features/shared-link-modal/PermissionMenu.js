function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import DropdownMenu, { MenuToggle } from '../../components/dropdown-menu';
import PlainButton from '../../components/plain-button';
import { Menu, SelectMenuItem } from '../../components/menu';
import { permissionLevelPropType } from './propTypes';
import { CAN_VIEW, CAN_EDIT } from './constants';
import messages from './messages';
var permissionLevels = [CAN_VIEW, CAN_EDIT];

var PermissionMenu = function PermissionMenu(props) {
  var _permissionLabels;

  var changePermissionLevel = props.changePermissionLevel,
      permissionLevel = props.permissionLevel,
      submitting = props.submitting;

  if (!changePermissionLevel || !permissionLevel) {
    return null;
  }

  var permissionLabels = (_permissionLabels = {}, _defineProperty(_permissionLabels, CAN_VIEW, React.createElement(FormattedMessage, messages.canView)), _defineProperty(_permissionLabels, CAN_EDIT, React.createElement(FormattedMessage, messages.canEdit)), _permissionLabels);
  return React.createElement(DropdownMenu, null, React.createElement(PlainButton, {
    className: classNames('lnk', {
      'is-disabled bdl-is-disabled': submitting
    }),
    disabled: submitting
  }, React.createElement(MenuToggle, null, permissionLabels[permissionLevel])), React.createElement(Menu, null, permissionLevels.map(function (level) {
    return React.createElement(SelectMenuItem, {
      key: level,
      isSelected: level === permissionLevel,
      onClick: function onClick() {
        return changePermissionLevel(level);
      }
    }, permissionLabels[level]);
  })));
};

PermissionMenu.displayName = 'PermissionMenu';
export default PermissionMenu;
//# sourceMappingURL=PermissionMenu.js.map