import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconAlert = function IconAlert(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-alert ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 24 24",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z",
    fill: color,
    fillRule: "evenodd"
  }));
};

export default IconAlert;
//# sourceMappingURL=IconAlert.js.map