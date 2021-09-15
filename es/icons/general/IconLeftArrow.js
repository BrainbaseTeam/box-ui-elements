import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconLeftArrow = function IconLeftArrow(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#888888' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 14 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 12 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-governance ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 12 14",
    width: width
  }, React.createElement("path", {
    className: "stroke-color",
    d: "M9.5 4.5h-9m4-4l-4 4m4 4l-4-4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round"
  }));
};

export default IconLeftArrow;
//# sourceMappingURL=IconLeftArrow.js.map