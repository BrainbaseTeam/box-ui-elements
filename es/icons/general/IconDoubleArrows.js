import * as React from 'react';
import { bdlGray40 } from '../../styles/variables';
import AccessibleSVG from '../accessible-svg';

var IconDoubleArrows = function IconDoubleArrows(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? bdlGray40 : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 32 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 32 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-double-arrows ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 32 32",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M3.8 6l3.5-3.44a1 1 0 0 0 0-1.36 1 1 0 0 0-1.39 0L.72 6.29a1 1 0 0 0 0 1.41l5.19 5.1a1 1 0 0 0 1.39 0 .94.94 0 0 0 0-1.35L3.8 8H23a1 1 0 0 0 0-2zM28.2 24l-3.5-3.44a1 1 0 0 1 0-1.36 1 1 0 0 1 1.39 0l5.19 5.1a1 1 0 0 1 0 1.41l-5.19 5.1a1 1 0 0 1-1.39 0 .94.94 0 0 1 0-1.35L28.2 26H9a1 1 0 0 1 0-2z",
    fill: color
  }));
};

export default IconDoubleArrows;
//# sourceMappingURL=IconDoubleArrows.js.map