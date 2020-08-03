function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import IconInfo from '../../icons/general/IconInfo';
import Tooltip from '../tooltip';

var InfoIconWithTooltip = function InfoIconWithTooltip(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      iconProps = _ref.iconProps,
      tooltipText = _ref.tooltipText;
  return /*#__PURE__*/React.createElement("span", {
    key: "infoIcon",
    className: "".concat(className, " tooltip-icon-container")
  }, /*#__PURE__*/React.createElement(Tooltip, {
    position: "top-center",
    text: tooltipText
  }, /*#__PURE__*/React.createElement("span", {
    className: "info-icon-container"
  }, /*#__PURE__*/React.createElement(IconInfo, _extends({
    height: 16,
    width: 16
  }, iconProps)))));
};

export default InfoIconWithTooltip;
//# sourceMappingURL=InfoIconWithTooltip.js.map