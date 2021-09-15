function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import classNames from 'classnames';
import IconAlertDefault from '../../icons/general/IconAlertDefault';
import { bdlYellow50 } from '../../styles/variables';
import './SecurityBadge.scss';

var SecurityBadge = function SecurityBadge(_ref) {
  var className = _ref.className,
      color = _ref.color,
      icon = _ref.icon,
      message = _ref.message,
      rest = _objectWithoutProperties(_ref, ["className", "color", "icon", "message"]);

  return React.createElement("h1", _extends({
    className: classNames('bdl-SecurityBadge', className),
    style: {
      backgroundColor: color
    }
  }, rest), icon, React.createElement("span", {
    className: "bdl-SecurityBadge-name"
  }, message));
};

SecurityBadge.defaultProps = {
  icon: React.createElement(IconAlertDefault, {
    color: bdlYellow50,
    height: 22,
    width: 22,
    strokeWidth: 3
  })
};
export default SecurityBadge;
//# sourceMappingURL=SecurityBadge.js.map