import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconMetadata = function IconMetadata(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#333' : _ref$color,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 14 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 14 : _ref$height;
  return React.createElement(AccessibleSVG, {
    className: "icon-metadata ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 14 14",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M7 13a6 6 0 1 0-6-6 6 6 0 0 0 6 6zm0 1a7 7 0 1 1 7-7 7 7 0 0 1-7 7zM4.86 8.87l.59-2.36 1.13 1.8a.5.5 0 0 0 .85 0l1.13-1.8.59 2.36a.5.5 0 1 0 1-.24l-.87-3.5A.5.5 0 0 0 8.33 5L7 7.11 5.67 5a.5.5 0 0 0-.91.14l-.87 3.5a.5.5 0 0 0 1 .24z",
    fill: color
  }));
};

export default IconMetadata;
//# sourceMappingURL=IconMetadata.js.map