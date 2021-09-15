import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconCalendar = function IconCalendar(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#BABABA' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 17 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-calendar ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 17",
    width: width
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(0 1)"
  }, React.createElement("rect", {
    className: "fill-color",
    fill: color,
    height: height,
    rx: "2",
    width: width,
    y: "2"
  }), React.createElement("rect", {
    fill: "#FFF",
    height: "9",
    rx: "1",
    width: "13.75",
    x: "1.25",
    y: "6"
  }), React.createElement("path", {
    className: "fill-color",
    d: "M11 7h2.5v2.5H11zM7 11h2.5v2.5H7zM3 11h2.5v2.5H3zM7 7h2.5v2.5H7zM3 7h2.5v2.5H3z",
    fill: color
  })));
};

export default IconCalendar;
//# sourceMappingURL=IconCalendar.js.map