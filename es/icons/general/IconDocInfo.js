import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconDocInfo = function IconDocInfo(_ref) {
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
    className: "icon-doc-info ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 24 24",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M19.41 7.41l-4.82-4.82A2 2 0 0 0 13.17 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.83a2 2 0 0 0-.59-1.42zM13 16a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0zm-1-6a1 1 0 1 1 1-1 1 1 0 0 1-1 1z",
    fill: color
  }));
};

export default IconDocInfo;
//# sourceMappingURL=IconDocInfo.js.map