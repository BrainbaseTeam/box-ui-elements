import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconWatermark = function IconWatermark(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#444' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-watermark ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("g", {
    className: "fill-color",
    fill: color
  }, React.createElement("path", {
    d: "M3.5 12.3c-.1.3 0 .5.3.7.3.1.5 0 .7-.3l.5-1.2-1.3.5-.2.3zM12 8.8l-1 .4 1.5 3.3c.1.3.4.4.7.2.3-.1.4-.4.2-.7L12 8.8zM8.5 3.7l1.3 2.8.9-.4L9 2.3c-.2-.4-.8-.4-1 0L5.4 8.1l1.3-.5 1.8-3.9zM14.4 6.3c-.1-.3-.3-.4-.6-.3L2.5 10.3c-.3.1-.4.4-.3.6.1.3.4.4.6.3l11.3-4.3c.3-.1.4-.4.3-.6z"
  })));
};

export default IconWatermark;
//# sourceMappingURL=IconWatermark.js.map