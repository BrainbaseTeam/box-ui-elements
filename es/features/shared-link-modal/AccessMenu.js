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

import React, { Component } from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import PlainButton from '../../components/plain-button';
import DropdownMenu, { MenuToggle } from '../../components/dropdown-menu';
import { Menu, MenuSeparator, MenuSectionHeader, SelectMenuItem } from '../../components/menu';
import messages from './messages';
import { PEOPLE_WITH_LINK, PEOPLE_IN_COMPANY, PEOPLE_IN_ITEM } from './constants';
import { accessLevelPropType, allowedAccessLevelsPropType } from './propTypes';
import AccessLabel from './AccessLabel';
import RemoveLinkConfirmModal from './RemoveLinkConfirmModal';
var accessLevels = [PEOPLE_WITH_LINK, PEOPLE_IN_COMPANY, PEOPLE_IN_ITEM];

var AccessMenu = /*#__PURE__*/function (_Component) {
  _inherits(AccessMenu, _Component);

  var _super = _createSuper(AccessMenu);

  function AccessMenu() {
    var _this;

    _classCallCheck(this, AccessMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isConfirmModalOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "openConfirmModal", function () {
      _this.setState({
        isConfirmModalOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeConfirmModal", function () {
      _this.setState({
        isConfirmModalOpen: false
      });
    });

    return _this;
  }

  _createClass(AccessMenu, [{
    key: "renderMenu",
    value: function renderMenu() {
      var _this$props = this.props,
          accessLevel = _this$props.accessLevel,
          allowedAccessLevels = _this$props.allowedAccessLevels,
          canRemoveLink = _this$props.canRemoveLink,
          changeAccessLevel = _this$props.changeAccessLevel,
          enterpriseName = _this$props.enterpriseName,
          itemType = _this$props.itemType,
          removeLinkButtonProps = _this$props.removeLinkButtonProps;
      return /*#__PURE__*/React.createElement(Menu, {
        className: "share-access-menu"
      }, /*#__PURE__*/React.createElement(MenuSectionHeader, null, /*#__PURE__*/React.createElement(FormattedMessage, messages.accessTypeTitle)), accessLevels.map(function (level) {
        return allowedAccessLevels[level] ? /*#__PURE__*/React.createElement(SelectMenuItem, {
          key: level,
          isSelected: level === accessLevel,
          onClick: function onClick() {
            return changeAccessLevel(level);
          }
        }, /*#__PURE__*/React.createElement(AccessLabel, {
          accessLevel: level,
          enterpriseName: enterpriseName,
          itemType: itemType
        })) : null;
      }), canRemoveLink && /*#__PURE__*/React.createElement(MenuSeparator, null), canRemoveLink && /*#__PURE__*/React.createElement(SelectMenuItem, _extends({
        onClick: this.openConfirmModal
      }, removeLinkButtonProps), /*#__PURE__*/React.createElement(FormattedMessage, messages.removeLink)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          accessDropdownMenuProps = _this$props2.accessDropdownMenuProps,
          accessLevel = _this$props2.accessLevel,
          accessMenuButtonProps = _this$props2.accessMenuButtonProps,
          enterpriseName = _this$props2.enterpriseName,
          itemType = _this$props2.itemType,
          removeLink = _this$props2.removeLink,
          submitting = _this$props2.submitting;
      var isConfirmModalOpen = this.state.isConfirmModalOpen;
      return /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(DropdownMenu, accessDropdownMenuProps, /*#__PURE__*/React.createElement(PlainButton, _extends({
        className: classNames('lnk', {
          'is-disabled': submitting
        }),
        disabled: submitting
      }, accessMenuButtonProps), /*#__PURE__*/React.createElement(MenuToggle, null, /*#__PURE__*/React.createElement(AccessLabel, {
        accessLevel: accessLevel,
        enterpriseName: enterpriseName,
        itemType: itemType
      }))), this.renderMenu()), /*#__PURE__*/React.createElement(RemoveLinkConfirmModal, {
        isOpen: isConfirmModalOpen,
        onRequestClose: this.closeConfirmModal,
        removeLink: removeLink,
        submitting: submitting
      }));
    }
  }]);

  return AccessMenu;
}(Component);

_defineProperty(AccessMenu, "defaultProps", {
  accessDropdownMenuProps: {},
  accessMenuButtonProps: {},
  removeLinkButtonProps: {}
});

export default AccessMenu;
//# sourceMappingURL=AccessMenu.js.map