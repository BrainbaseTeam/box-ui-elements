import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconSidebarLeft = function IconSidebarLeft(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#222' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 18 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 18 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-sidebar-left ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 18 18",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M5 6H3V4h2v2zm0 3H3V7h2v2z",
    fill: color
  }), React.createElement("path", {
    className: "fill-color",
    d: "M0 3v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H2C.9 1 0 1.9 0 3zm8 12V3h8v12H8zm-2 0H2V3h4v12z",
    fill: color
  }));
};

export default IconSidebarLeft;
//# sourceMappingURL=IconSidebarLeft.js.map