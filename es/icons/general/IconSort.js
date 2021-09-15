import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconSort = function IconSort(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#222222' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 13 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 17 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-sort ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 17.49 13.49",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M8.48 4.24L4.74.5V.24h-.25L4.24 0 4 .24h-.26V.5L0 4.24l.71.71 3.03-3.04v11.33h1V1.91l3.04 3.04.7-.71m.52 5l3.74 3.74v.26H13l.24.24.24-.24h.26v-.26l3.74-3.74-.7-.7-3.04 3.03V.24h-1v11.33L9.71 8.54l-.71.7",
    fill: color
  }));
};

export default IconSort;
//# sourceMappingURL=IconSort.js.map