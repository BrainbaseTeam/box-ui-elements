import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconAccepted = function IconAccepted(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#26C281' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-accepted ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("circle", {
    cx: 8,
    cy: 8,
    fill: color,
    r: 8
  }), React.createElement("path", {
    d: "M7.051 9.253L4.965 7.172 3.75 8.423l3.301 3.327 5.699-5.751-1.235-1.249-4.464 4.503z",
    fill: "#FFF"
  })));
};

export default IconAccepted;
//# sourceMappingURL=IconAccepted.js.map