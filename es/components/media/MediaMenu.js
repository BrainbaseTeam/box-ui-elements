function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import classnames from 'classnames';
import { injectIntl } from 'react-intl';
import messages from './messages';
import IconEllipsis from '../../icons/general/IconEllipsis';
import { ButtonType } from '../button';
import PlainButton from '../plain-button'; // @ts-ignore TODO: migrate DropdownMenu to typescript

import DropdownMenu from '../dropdown-menu';
import { Menu } from '../menu';
import { bdlGray50 } from '../../styles/variables';
import './Media.scss';

var MediaMenu = function MediaMenu(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$isDisabled = _ref.isDisabled,
      isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
      _ref$dropdownProps = _ref.dropdownProps,
      dropdownProps = _ref$dropdownProps === void 0 ? {} : _ref$dropdownProps,
      _ref$menuProps = _ref.menuProps,
      menuProps = _ref$menuProps === void 0 ? {} : _ref$menuProps,
      intl = _ref.intl,
      rest = _objectWithoutProperties(_ref, ["className", "children", "isDisabled", "dropdownProps", "menuProps", "intl"]);

  return React.createElement(DropdownMenu, _extends({
    constrainToScrollParent: true,
    isRightAligned: true
  }, dropdownProps), React.createElement(PlainButton, _extends({
    "aria-label": intl.formatMessage(messages.menuButtonArialLabel),
    className: classnames('bdl-Media-menu', className),
    isDisabled: isDisabled,
    type: ButtonType.BUTTON
  }, rest), React.createElement(IconEllipsis, {
    color: bdlGray50,
    height: 16,
    width: 16
  })), React.createElement(Menu, menuProps, children));
};

export default injectIntl(MediaMenu);
//# sourceMappingURL=MediaMenu.js.map