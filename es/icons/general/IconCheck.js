import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconCheck = function IconCheck(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-check ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 24 24",
    width: width
  }, React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), React.createElement("path", {
    className: "fill-color",
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
    fill: color
  }));
};

export default IconCheck;
//# sourceMappingURL=IconCheck.js.map