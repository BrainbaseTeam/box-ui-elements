function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import classnames from 'classnames';
import IconEllipsis from '../../icons/general/IconEllipsis';
import PlainButton from '../plain-button';
import DropdownMenu from '../dropdown-menu';
import { Menu } from '../menu';
import { bdlGray50 } from '../../styles/variables';
import './Media.scss';

var MediaMenu = function MediaMenu(_ref) {
  var className = _ref.className,
      children = _ref.children,
      isDisabled = _ref.isDisabled,
      dropdownProps = _ref.dropdownProps,
      menuProps = _ref.menuProps,
      rest = _objectWithoutProperties(_ref, ["className", "children", "isDisabled", "dropdownProps", "menuProps"]);

  return /*#__PURE__*/React.createElement(DropdownMenu, _extends({
    constrainToScrollParent: true,
    isRightAligned: true
  }, dropdownProps), /*#__PURE__*/React.createElement(PlainButton, _extends({
    isDisabled: isDisabled,
    className: classnames('bdl-Media-menu', className),
    type: "button"
  }, rest), /*#__PURE__*/React.createElement(IconEllipsis, {
    color: bdlGray50,
    height: 16,
    width: 16
  })), /*#__PURE__*/React.createElement(Menu, menuProps, children));
};

MediaMenu.defaultProps = {
  dropdownProps: {},
  isDisabled: false,
  menuProps: {}
};
export default MediaMenu;
//# sourceMappingURL=MediaMenu.js.map