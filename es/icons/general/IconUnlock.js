import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconUnlock = function IconUnlock(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#444' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 14 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 12 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-unlock ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 12 14",
    width: width
  }, React.createElement("g", {
    className: "fill-color",
    fill: color
  }, React.createElement("path", {
    d: "M10.3 5C10.2 2.6 8.3.6 5.9.6c-1 0-2 .3-2.7.9-.3.2-.3.5-.2.8.2.2.5.3.7.1.6-.5 1.4-.7 2.1-.7 1.8 0 3.4 1.5 3.4 3.4H2C.9 5 0 5.9 0 7v5c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7c0-1-.7-1.8-1.7-2zm.7 7c0 .5-.5 1-1 1H2c-.6 0-1-.4-1-1V7c0-.5.5-1 1-1h8c.6 0 1 .4 1 1v5z"
  }), React.createElement("path", {
    d: "M7.5 9h-3c-.3 0-.5.2-.5.5s.2.5.5.5h3c.3 0 .5-.2.5-.5S7.8 9 7.5 9z"
  })));
};

export default IconUnlock;
//# sourceMappingURL=IconUnlock.js.map