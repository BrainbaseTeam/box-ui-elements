function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import classNames from 'classnames';
import './Header.scss';

var Header = function Header(_ref) {
  var children = _ref.children,
      color = _ref.color,
      className = _ref.className,
      _ref$fixed = _ref.fixed,
      fixed = _ref$fixed === void 0 ? false : _ref$fixed,
      rest = _objectWithoutProperties(_ref, ["children", "color", "className", "fixed"]);

  var classes = classNames('header', {
    'is-fixed': fixed
  }, className);
  return React.createElement("header", _extends({
    className: classes,
    style: color ? {
      backgroundColor: color
    } : {}
  }, rest), children);
};

export default Header;
//# sourceMappingURL=Header.js.map