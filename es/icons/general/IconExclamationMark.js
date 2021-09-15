import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconExclamationMark = function IconExclamationMark(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#999' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 20 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 20 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-exclamation-mark ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 20 20",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-16a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V5c0-.6-.4-1-1-1zm0 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
    fill: color,
    fillRule: "nonzero"
  }));
};

export default IconExclamationMark;
//# sourceMappingURL=IconExclamationMark.js.map