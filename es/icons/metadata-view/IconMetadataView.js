import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconMetadataView = function IconMetadataView(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "metadata-view ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M8.83 9a2.995 2.995 0 0 0 0-2H15a1 1 0 0 1 0 2H8.83zM3.17 9H1a1 1 0 0 1 0-2h2.17a2.995 2.995 0 0 0 0 2zm10.66-6a2.995 2.995 0 0 0 0-2H15a1 1 0 0 1 0 2h-1.17zM8.17 3H1a1 1 0 1 1 0-2h7.17a2.995 2.995 0 0 0 0 2zM9 2a2 2 0 1 1 4 0 2 2 0 0 1-4 0zM4 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0z",
    fill: "#767676",
    fillRule: "nonzero"
  })));
};

export default IconMetadataView;
//# sourceMappingURL=IconMetadataView.js.map