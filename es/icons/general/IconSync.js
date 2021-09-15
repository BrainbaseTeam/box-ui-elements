import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconSync = function IconSync(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#979797' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-sync ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("g", {
    className: "stroke-color",
    fill: "none",
    fillRule: "evenodd",
    stroke: color,
    transform: "translate(1 1)"
  }, React.createElement("circle", {
    cx: "7",
    cy: "7",
    r: "7"
  }), React.createElement("path", {
    d: "M4 7.054l2.58 2.69L10.938 5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

export default IconSync;
//# sourceMappingURL=IconSync.js.map