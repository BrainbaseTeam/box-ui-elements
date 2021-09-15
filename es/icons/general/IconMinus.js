import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconMinus = function IconMinus(_ref) {
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
    className: "icon-minus ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("path", {
    d: "M2 5h8v2H2z",
    fill: color,
    fillRule: "evenodd"
  }));
};

export default IconMinus;
//# sourceMappingURL=IconMinus.js.map