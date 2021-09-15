import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconPlusThin = function IconPlusThin(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#222' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 9 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 9 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-plus-thin ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 9 9",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M5 4V0H4v4H0v1h4v4h1V5h4V4H5z",
    fill: color,
    fillRule: "evenodd"
  }));
};

export default IconPlusThin;
//# sourceMappingURL=IconPlusThin.js.map