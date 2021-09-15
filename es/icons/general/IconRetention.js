import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconRetention = function IconRetention(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#FFFFFF' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 14 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-retention ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 14",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M1,14h14V7H1V14z M6,8h4c0.5,0,1,0.4,1,1c0,0.6-0.5,1-1,1H6c-0.5,0-1-0.4-1-1C5,8.4,5.5,8,6,8z",
    fill: color
  }), React.createElement("rect", {
    className: "fill-color",
    fill: color,
    height: "2",
    width: "16",
    y: "4"
  }), React.createElement("polygon", {
    className: "fill-color",
    fill: color,
    points: "13,0 3,0 0,3 16,3"
  }));
};

export default IconRetention;
//# sourceMappingURL=IconRetention.js.map