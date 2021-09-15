import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconBilling = function IconBilling(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#888888' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 10 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 14 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-billing ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 14 10",
    width: width
  }, React.createElement("g", {
    className: "stroke-color",
    fill: "none",
    fillRule: "evenodd",
    stroke: color
  }, React.createElement("rect", {
    height: "9",
    rx: "1",
    width: "13",
    x: ".5",
    y: ".5"
  }), React.createElement("path", {
    d: "M7.5 7.5h-5m8 0h-1",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("path", {
    d: "M1.5 3h11",
    strokeLinecap: "square",
    strokeWidth: "2"
  })));
};

export default IconBilling;
//# sourceMappingURL=IconBilling.js.map