import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconStar = function IconStar(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#979797' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 14 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 14 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-star ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 14 14",
    width: width
  }, React.createElement("path", {
    className: "stroke-color",
    d: "M7 10.5l-4.114 2.163.785-4.58L.344 4.836l4.6-.67L7 0l2.057 4.168 4.6.67L10.33 8.08l.784 4.58z",
    fill: "none",
    fillRule: "evenodd",
    stroke: color
  }));
};

export default IconStar;
//# sourceMappingURL=IconStar.js.map