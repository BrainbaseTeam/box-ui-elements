import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconExpiration = function IconExpiration(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#444444' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 15 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 14 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-expiration ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 14 15",
    width: width
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(0 -1)"
  }, React.createElement("circle", {
    className: "stroke-color",
    cx: "7.16",
    cy: "9.5",
    r: "5.5",
    stroke: color
  }), React.createElement("rect", {
    className: "fill-color",
    fill: color,
    height: "5",
    rx: ".5",
    width: "1",
    x: "6.66",
    y: "6"
  }), React.createElement("rect", {
    className: "fill-color",
    fill: color,
    height: "1",
    rx: ".5",
    width: "3",
    x: "6.66",
    y: "10"
  }), React.createElement("rect", {
    className: "fill-color",
    fill: color,
    height: "1",
    rx: ".5",
    transform: "rotate(30 11.16 2.5)",
    width: "5",
    x: "8.66",
    y: "2"
  }), React.createElement("rect", {
    className: "fill-color",
    fill: color,
    height: "1",
    rx: ".5",
    transform: "rotate(-30 3.16 2.5)",
    width: "5",
    x: ".66",
    y: "2"
  })));
};

export default IconExpiration;
//# sourceMappingURL=IconExpiration.js.map