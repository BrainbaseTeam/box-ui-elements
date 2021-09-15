import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconExpirationBadge = function IconExpirationBadge(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#494949' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 14 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 14 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-expiration-badge ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("circle", {
    className: "fill-color",
    cx: "8",
    cy: "8",
    fill: color,
    r: "8"
  }), React.createElement("path", {
    d: "M8,1.5C4.4,1.5,1.5,4.4,1.5,8s2.9,6.5,6.5,6.5s6.5-2.9,6.5-6.5S11.6,1.5,8,1.5z M8,13.5C5,13.5,2.5,11,2.5,8 C2.5,5,5,2.5,8,2.5S13.5,5,13.5,8C13.5,11,11,13.5,8,13.5z",
    fill: "#FFFFFF"
  }), React.createElement("polygon", {
    fill: "#FFFFFF",
    points: "8.5,8.2 8.5,3.5 7.5,3.5 7.5,8.5 9.7,11.3 10.5,10.7 "
  }));
};

export default IconExpirationBadge;
//# sourceMappingURL=IconExpirationBadge.js.map