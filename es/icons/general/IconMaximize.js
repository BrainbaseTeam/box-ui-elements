import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconMaximize = function IconMaximize(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-maximize ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M8 8V3H2v5h6zm1 0v1H1V1h8v7z",
    fill: color,
    fillRule: "evenodd"
  }));
};

export default IconMaximize;
//# sourceMappingURL=IconMaximize.js.map