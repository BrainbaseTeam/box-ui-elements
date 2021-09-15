import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconMetadataFilter = function IconMetadataFilter(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "metadata-filter ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("path", {
    d: "M7 11h2v2H7v-2zM1 3h14v2H1V3zm3 4h8v2H4V7z",
    fill: "#444",
    fillRule: "nonzero"
  }));
};

export default IconMetadataFilter;
//# sourceMappingURL=IconMetadataFilter.js.map