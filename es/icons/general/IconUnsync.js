import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconUnsync = function IconUnsync(_ref) {
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
    className: "icon-unsync ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("g", {
    className: "fill-color",
    fill: color
  }, React.createElement("path", {
    d: "M10.9 7.8l1.4-1.5c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0l-1.3 1.5.6.7zM8.2 9.3l-.6.7-2.2-2.3c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l2.6 2.7c.2.2.5.2.7 0l1-1-.8-.8z"
  })), React.createElement("path", {
    className: "fill-color",
    d: "M8 .5C3.9.5.5 3.9.5 8s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5S12.1.5 8 .5zM14.5 8c0 1.4-.4 2.6-1.1 3.7l-9-9c1-.7 2.3-1.1 3.7-1.1 3.5-.1 6.4 2.8 6.4 6.4zM8 14.5c-3.6 0-6.5-2.9-6.5-6.5 0-1.9.8-3.5 2.1-4.7L8 7.7l4.8 4.8c-1.3 1.2-2.9 2-4.8 2z",
    fill: color
  }));
};

export default IconUnsync;
//# sourceMappingURL=IconUnsync.js.map