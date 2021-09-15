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
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import DropdownMenu, { MenuToggle } from '../../components/dropdown-menu';
import LabelPill from '../../components/label-pill';
import PlainButton from '../../components/plain-button';
import { Menu, SelectMenuItem } from '../../components/menu';
import { CAN_EDIT, CAN_VIEW_DOWNLOAD, CAN_VIEW_ONLY } from './constants';
import messages from './messages';
import './SharedLinkPermissionMenu.scss';

var SharedLinkPermissionMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(SharedLinkPermissionMenu, _Component);

  function SharedLinkPermissionMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SharedLinkPermissionMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SharedLinkPermissionMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onChangePermissionLevel", function (newPermissionLevel) {
      var _this$props = _this.props,
          changePermissionLevel = _this$props.changePermissionLevel,
          permissionLevel = _this$props.permissionLevel,
          trackingProps = _this$props.trackingProps;
      var onChangeSharedLinkPermissionLevel = trackingProps.onChangeSharedLinkPermissionLevel;

      if (permissionLevel !== newPermissionLevel) {
        changePermissionLevel(newPermissionLevel);

        if (onChangeSharedLinkPermissionLevel) {
          onChangeSharedLinkPermissionLevel(newPermissionLevel);
        }
      }
    });

    return _this;
  }

  _createClass(SharedLinkPermissionMenu, [{
    key: "render",
    value: function render() {
      var _permissionLevels,
          _this2 = this;

      var _this$props2 = this.props,
          allowedPermissionLevels = _this$props2.allowedPermissionLevels,
          permissionLevel = _this$props2.permissionLevel,
          sharedLinkEditTagTargetingApi = _this$props2.sharedLinkEditTagTargetingApi,
          submitting = _this$props2.submitting,
          trackingProps = _this$props2.trackingProps;
      var sharedLinkPermissionsMenuButtonProps = trackingProps.sharedLinkPermissionsMenuButtonProps;
      var canShow = sharedLinkEditTagTargetingApi ? sharedLinkEditTagTargetingApi.canShow : false;

      if (!permissionLevel) {
        return null;
      }

      var permissionLevels = (_permissionLevels = {}, _defineProperty(_permissionLevels, CAN_EDIT, {
        label: React.createElement(FormattedMessage, messages.sharedLinkPermissionsEdit)
      }), _defineProperty(_permissionLevels, CAN_VIEW_DOWNLOAD, {
        label: React.createElement(FormattedMessage, messages.sharedLinkPermissionsViewDownload)
      }), _defineProperty(_permissionLevels, CAN_VIEW_ONLY, {
        label: React.createElement(FormattedMessage, messages.sharedLinkPermissionsViewOnly)
      }), _permissionLevels);
      return React.createElement(DropdownMenu, {
        constrainToWindow: true
      }, React.createElement(PlainButton, _extends({
        className: classNames('lnk', {
          'is-disabled': submitting,
          'bdl-is-disabled': submitting
        }),
        disabled: submitting
      }, sharedLinkPermissionsMenuButtonProps), React.createElement(MenuToggle, null, permissionLevels[permissionLevel].label)), React.createElement(Menu, {
        className: "ums-share-permissions-menu"
      }, allowedPermissionLevels.map(function (level) {
        return React.createElement(SelectMenuItem, {
          key: level,
          isSelected: level === permissionLevel,
          onClick: function onClick() {
            return _this2.onChangePermissionLevel(level);
          }
        }, React.createElement("div", {
          className: "ums-share-permissions-menu-item"
        }, React.createElement("span", null, permissionLevels[level].label), level === CAN_EDIT && canShow && React.createElement(LabelPill.Pill, {
          className: "ftux-editable-shared-link",
          type: "ftux"
        }, React.createElement(LabelPill.Text, null, React.createElement(FormattedMessage, messages.ftuxSharedLinkPermissionsEditTag)))));
      })));
    }
  }]);

  return SharedLinkPermissionMenu;
}(Component);

_defineProperty(SharedLinkPermissionMenu, "defaultProps", {
  trackingProps: {}
});

export default SharedLinkPermissionMenu;
//# sourceMappingURL=SharedLinkPermissionMenu.js.map