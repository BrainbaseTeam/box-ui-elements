import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconMinusThin = function IconMinusThin(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#222' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 1 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 9 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-minus-thin ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 9 1",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M0 0h9v1H0z",
    fill: color,
    fillRule: "evenodd"
  }));
};

export default IconMinusThin;
//# sourceMappingURL=IconMinusThin.js.map