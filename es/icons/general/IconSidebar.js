import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconSidebar = function IconSidebar(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 18 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-sidebar ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 18 16",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M13 3h2v2h-2zM13 6h2v2h-2z",
    fill: color
  }), React.createElement("path", {
    className: "fill-color",
    d: "M16 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM2 14V2h8v12H2zM12 2h4v12h-4V2z",
    fill: color
  }));
};

export default IconSidebar;
//# sourceMappingURL=IconSidebar.js.map