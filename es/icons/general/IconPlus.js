import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconPlus = function IconPlus(_ref) {
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
    className: "icon-plus ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("path", {
    d: "M5 5H2v2h3v3h2V7h3V5H7V2H5v3z",
    fill: color,
    fillRule: "evenodd"
  }));
};

export default IconPlus;
//# sourceMappingURL=IconPlus.js.map