import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconDownloadSolid = function IconDownloadSolid(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 10 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 10 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-download-solid ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 10 10",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M9.658 4.304H7.143V.634h-3.77v3.67H.857l4.4 4.283 4.4-4.283zM.858 9.81v1.224h8.8V9.81h-8.8z",
    fill: color
  }));
};

export default IconDownloadSolid;
//# sourceMappingURL=IconDownloadSolid.js.map