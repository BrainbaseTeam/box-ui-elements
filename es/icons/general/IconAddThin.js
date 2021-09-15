import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconAddThin = function IconAddThin(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#222222' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 17 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 17 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-add-thin ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 17 17",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M8 0h1v17H8z",
    fill: color
  }), React.createElement("path", {
    className: "fill-color",
    d: "M17 8v1H0V8z",
    fill: color
  }));
};

export default IconAddThin;
//# sourceMappingURL=IconAddThin.js.map