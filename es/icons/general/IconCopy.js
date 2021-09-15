import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconCopy = function IconCopy(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#999' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 14 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 14 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-copy ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 14 14",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M1 11a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h9a1 1 0 0 1 0 2H2v8a1 1 0 0 1-1 1z",
    fill: color
  }), React.createElement("path", {
    className: "fill-color",
    d: "M13 3H3v10a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-3 8H7a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2zm0-3H7a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z",
    fill: color
  }));
};

export default IconCopy;
//# sourceMappingURL=IconCopy.js.map