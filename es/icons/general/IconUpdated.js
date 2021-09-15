import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconUpdated = function IconUpdated(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#15AA61' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-updated ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("circle", {
    cx: "8",
    cy: "8",
    fill: "#fff",
    height: "16",
    r: "7.5",
    stroke: color,
    strokeWidth: "1",
    width: "16",
    x: "0",
    y: "0"
  }), React.createElement("path", {
    d: "M4 8c0 1.1.45 2.1 1.2 2.8L4 12h3V9l-1.1 1.1C5.35 9.6 5 8.85 5 8c0-1.3.85-2.4 2-2.85v-1c-1.7.45-3 2-3 3.85zm8-4H9v3l1.1-1.1c.55.5.9 1.25.9 2.1 0 1.3-.85 2.4-2 2.85v1.05c1.7-.45 3-2 3-3.85 0-1.1-.45-2.1-1.2-2.8L12 4z",
    fill: color
  })));
};

export default IconUpdated;
//# sourceMappingURL=IconUpdated.js.map