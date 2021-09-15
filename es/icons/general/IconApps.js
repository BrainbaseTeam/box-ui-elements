import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconApps = function IconApps(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#888888' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 14 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 14 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-apps ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 14 14",
    width: width
  }, React.createElement("path", {
    className: "stroke-color",
    d: "M.5.5h3v3h-3zm5 0h3v3h-3zm5 0h3v3h-3zm-10 5h3v3h-3zm5 0h3v3h-3zm5 0h3v3h-3zm-10 5h3v3h-3zm5 0h3v3h-3zm5 0h3v3h-3z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

export default IconApps;
//# sourceMappingURL=IconApps.js.map