import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconLock = function IconLock(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#444' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 14 : _ref$height,
      _ref$opacity = _ref.opacity,
      opacity = _ref$opacity === void 0 ? 1 : _ref$opacity,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 13 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-lock ".concat(className),
    height: height,
    opacity: opacity,
    title: title,
    viewBox: "0 0 13 14",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M3 5v.5h7c.8 0 1.5.7 1.5 1.5v4c0 .8-.7 1.5-1.5 1.5H3c-.8 0-1.5-.7-1.5-1.5V7c0-.8.7-1.5 1.5-1.5v-1C1.6 4.5.5 5.6.5 7v4c0 1.4 1.1 2.5 2.5 2.5h7c1.4 0 2.5-1.1 2.5-2.5V7c0-1.4-1.1-2.5-2.5-2.5H3V5z",
    fill: color
  }), React.createElement("path", {
    className: "fill-color",
    d: "M5.2 9h3c.3 0 .5.2.5.5s-.3.5-.5.5h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5z",
    fill: color
  }), React.createElement("path", {
    className: "fill-color",
    d: "M3 5c0-1.9 1.6-3.5 3.5-3.5V1v.5C8.4 1.5 10 3.1 10 5c0 .3.2.5.5.5s.5-.2.5-.5C11 2.5 9 .5 6.5.5S2 2.5 2 5c0 .3.2.5.5.5S3 5.3 3 5z",
    fill: color
  }));
};

export default IconLock;
//# sourceMappingURL=IconLock.js.map