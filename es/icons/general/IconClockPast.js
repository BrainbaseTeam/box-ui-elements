import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconClockPast = function IconClockPast(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#444' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 14 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-clock-past ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 14",
    width: width
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(0 1)"
  }, React.createElement("rect", {
    className: "fill-color",
    fill: color,
    height: "5",
    rx: ".5",
    width: "1",
    x: "9.66",
    y: "3"
  }), React.createElement("rect", {
    className: "fill-color",
    fill: color,
    height: "1",
    rx: ".5",
    width: "3",
    x: "9.66",
    y: "7"
  }), React.createElement("path", {
    className: "stroke-color",
    d: "M5.66 10.62C6.697 11.48 8.032 12 9.487 12c3.314 0 6-2.686 6-6s-2.686-6-6-6c-3.313 0-6 2.686-6 6",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("path", {
    className: "fill-color",
    d: "M6.317 5l-2.83 2.828L.66 5",
    fill: color
  })));
};

export default IconClockPast;
//# sourceMappingURL=IconClockPast.js.map