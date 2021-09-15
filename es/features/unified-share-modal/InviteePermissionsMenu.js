function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import PlainButton from '../../components/plain-button';
import DropdownMenu, { MenuToggle } from '../../components/dropdown-menu';
import { Menu, SelectMenuItem } from '../../components/menu';
import Tooltip from '../../components/tooltip';
import { ITEM_TYPE_WEBLINK } from '../../common/constants';
import getDefaultPermissionLevel from './utils/defaultPermissionLevel';
import InviteePermissionsLabel from './InviteePermissionsLabel';
import messages from './messages';

var InviteePermissionsMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(InviteePermissionsMenu, _Component);

  function InviteePermissionsMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InviteePermissionsMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InviteePermissionsMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onChangeInviteePermissionsLevel", function (newInviteePermissionLevel) {
      var _this$props = _this.props,
          inviteePermissionLevel = _this$props.inviteePermissionLevel,
          changeInviteePermissionLevel = _this$props.changeInviteePermissionLevel;

      if (inviteePermissionLevel !== newInviteePermissionLevel) {
        changeInviteePermissionLevel(newInviteePermissionLevel);
      }
    });

    return _this;
  }

  _createClass(InviteePermissionsMenu, [{
    key: "renderMenu",
    value: function renderMenu() {
      var _this2 = this;

      var _this$props2 = this.props,
          inviteePermissionLevel = _this$props2.inviteePermissionLevel,
          inviteePermissions = _this$props2.inviteePermissions,
          itemType = _this$props2.itemType;
      var defaultPermissionLevel = getDefaultPermissionLevel(inviteePermissions);
      var selectedPermissionLevel = inviteePermissionLevel || defaultPermissionLevel;
      return React.createElement(Menu, {
        className: "usm-share-access-menu"
      }, inviteePermissions.map(function (level) {
        return level.value ? React.createElement(SelectMenuItem, {
          key: level.value,
          isDisabled: level.disabled,
          isSelected: level.value === selectedPermissionLevel,
          onClick: function onClick() {
            return _this2.onChangeInviteePermissionsLevel(level.value);
          }
        }, React.createElement(InviteePermissionsLabel, {
          hasDescription: true,
          inviteePermissionLevel: level.value,
          inviteePermissions: true,
          itemType: itemType
        })) : null;
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          inviteePermissions = _this$props3.inviteePermissions,
          inviteePermissionsButtonProps = _this$props3.inviteePermissionsButtonProps,
          inviteePermissionLevel = _this$props3.inviteePermissionLevel,
          disabled = _this$props3.disabled,
          itemType = _this$props3.itemType;
      var defaultPermissionLevel = getDefaultPermissionLevel(inviteePermissions);
      var selectedPermissionLevel = inviteePermissionLevel || defaultPermissionLevel;
      var disabledTooltip = itemType === ITEM_TYPE_WEBLINK ? React.createElement(FormattedMessage, messages.inviteDisabledWeblinkTooltip) : React.createElement(FormattedMessage, messages.inviteDisabledTooltip);
      var plainButton = React.createElement(PlainButton, _extends({
        className: classNames('lnk', {
          'is-disabled': disabled,
          'bdl-is-disabled': disabled
        }),
        disabled: disabled
      }, inviteePermissionsButtonProps), React.createElement(MenuToggle, null, selectedPermissionLevel && React.createElement(InviteePermissionsLabel, {
        hasDescription: false,
        inviteePermissionLevel: selectedPermissionLevel,
        itemType: itemType
      })));
      var plainButtonWrap = disabled ? React.createElement(Tooltip, {
        position: "bottom-center",
        text: disabledTooltip
      }, React.createElement("div", {
        className: "tooltip-target"
      }, plainButton)) : plainButton; // TODO: `DropdownMenu` doesn't currently handle a scenario where the menu is taller than
      // the available vertical space. cannot use the constraint props here in short windows.

      return React.createElement("div", {
        className: "be invitee-menu-wrap"
      }, React.createElement(DropdownMenu, null, plainButtonWrap, this.renderMenu()));
    }
  }]);

  return InviteePermissionsMenu;
}(Component);

_defineProperty(InviteePermissionsMenu, "defaultProps", {
  disabled: false,
  inviteePermissions: [],
  inviteePermissionsButtonProps: {}
});

export default InviteePermissionsMenu;
//# sourceMappingURL=InviteePermissionsMenu.js.map