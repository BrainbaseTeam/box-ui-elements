import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconDrag = function IconDrag(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#aaa' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-drag ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 24 24",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z",
    fill: color
  }), React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

export default IconDrag;
//# sourceMappingURL=IconDrag.js.map