import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconPrint = function IconPrint(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-print ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 24 24",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z",
    fill: color
  }), React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

export default IconPrint;
//# sourceMappingURL=IconPrint.js.map