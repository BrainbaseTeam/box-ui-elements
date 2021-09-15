import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconPageBack = function IconPageBack(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 13 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 8 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-page-back ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 8 13",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M.1 11.3l4.6-4.5L.1 2.2 1.5.8l6 6-6 6-1.4-1.5z",
    fill: color,
    fillRule: "evenodd",
    transform: "rotate(180 4 7)"
  }));
};

export default IconPageBack;
//# sourceMappingURL=IconPageBack.js.map