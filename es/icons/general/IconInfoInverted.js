import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconInfoInverted = function IconInfoInverted(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 18 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 18 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-info-inverted ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 18 18",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M8.1 13.5h1.8V8.1H8.1v5.4zM9 0C4.05 0 0 4.05 0 9s4.05 9 9 9 9-4.05 9-9-4.05-9-9-9zm0 16.2c-3.96 0-7.2-3.24-7.2-7.2S5.04 1.8 9 1.8s7.2 3.24 7.2 7.2-3.24 7.2-7.2 7.2zm-.9-9.9h1.8V4.5H8.1v1.8z",
    fill: color,
    fillRule: "evenodd"
  }));
};

export default IconInfoInverted;
//# sourceMappingURL=IconInfoInverted.js.map