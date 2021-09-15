import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconInfoThin = function IconInfoThin(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#FFFFFF' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 20 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 20 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-info-thin ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 20 20",
    width: width
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(1 1)"
  }, React.createElement("circle", {
    className: "stroke-color",
    cx: "9",
    cy: "9",
    r: "9",
    stroke: color
  }), React.createElement("rect", {
    className: "fill-color",
    fill: color,
    height: "6",
    rx: "1",
    width: "2",
    x: "8",
    y: "8"
  }), React.createElement("circle", {
    className: "fill-color",
    cx: "9",
    cy: "5",
    fill: color,
    r: "1"
  })));
};

export default IconInfoThin;
//# sourceMappingURL=IconInfoThin.js.map