import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconCollapse = function IconCollapse(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#979797' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 13 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 13 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-collapse ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 13 13",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M8 6h4a1 1 0 0 0 0-2H9V1a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1zM1 9h3v3a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2z",
    fill: color
  }));
};

export default IconCollapse;
//# sourceMappingURL=IconCollapse.js.map