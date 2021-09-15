import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconAlignLeft = function IconAlignLeft(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#444' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 10 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 13 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-align-left ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 13 10",
    width: width
  }, React.createElement("path", {
    className: "stroke-color",
    d: "M.3.5h11.9M.3 3.5h9.3m-9.3 6h9.3m-9.3-3H5",
    fill: "none",
    stroke: color,
    strokeMiterlimit: 10
  }));
};

export default IconAlignLeft;
//# sourceMappingURL=IconAlignLeft.js.map