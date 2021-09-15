import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconRecentFiles = function IconRecentFiles(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#999' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-recent-files ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 24 24",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M17 20l-3 2H5c-2 0-3-1-3-3V7l2-3v15l1 1h12z",
    fill: color
  }), React.createElement("path", {
    className: "fill-color",
    d: "M8 0h7l1 1 4 4 1 1v10l-2 2H8l-2-2V2l2-2z",
    fill: color
  }), React.createElement("path", {
    d: "M13 5v5m4 0h-4",
    stroke: "#FFF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2
  }));
};

export default IconRecentFiles;
//# sourceMappingURL=IconRecentFiles.js.map