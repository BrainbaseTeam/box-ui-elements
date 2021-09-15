import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconInfo = function IconInfo(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-info ".concat(className),
    height: height,
    title: title,
    viewBox: "-603 389 16 16",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M-595 403c5.5 0 8-7.1 3.9-10.6-4.2-3.6-10.8.3-9.8 5.7.5 2.8 3 4.9 5.9 4.9zm.9-6.7v3.7h-1.4v-3.7h1.4zm.1-2.2c0 1-1.7 1.1-1.7 0 .1-1.1 1.7-1.1 1.7 0z",
    fill: color,
    fillRule: "evenodd"
  }));
};

export default IconInfo;
//# sourceMappingURL=IconInfo.js.map