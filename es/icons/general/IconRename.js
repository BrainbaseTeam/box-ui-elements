import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconRename = function IconRename(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#444' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 13 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 14 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-rename ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 14 13",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M3.8 7.6l-.4.4 2.5 2.5L13.3 3c.2-.2.3-.5.3-.7 0-.3-.1-.5-.3-.7L11.9.2c-.2-.2-.5-.3-.7-.3-.3 0-.5.1-.7.3L3.1 7.6l.3.4.4-.4.3.4 7-7 1.4 1.4L5.9 9 4.1 7.3l-.3.3.3.4-.3-.4zm-1.6.9L5 11.3l-3.4 1.2c-.5.2-.8-.1-.6-.6l1.2-3.4zm3.9 3h7v1h-7z",
    fill: color
  }));
};

export default IconRename;
//# sourceMappingURL=IconRename.js.map