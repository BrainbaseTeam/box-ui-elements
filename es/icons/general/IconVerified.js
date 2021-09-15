import * as React from 'react';
import { bdlGreenLight } from '../../styles/variables';
import AccessibleSVG from '../accessible-svg';

var IconVerified = function IconVerified(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? bdlGreenLight : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 14 : _ref$height,
      _ref$opacity = _ref.opacity,
      opacity = _ref$opacity === void 0 ? 1 : _ref$opacity,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 14 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-verified ".concat(className),
    height: height,
    opacity: opacity,
    title: title,
    viewBox: "0 0 14 14",
    width: width
  }, React.createElement("path", {
    d: "M7 14c-3.865993 0-7-3.134007-7-7s3.134007-7 7-7 7 3.134007 7 7-3.134007 7-7 7zM5.31288 9.303048l1.44555 1.21296 4.499514-5.36231-1.44555-1.21296-4.499514 5.36231zM3 7.36231L5.31288 9.30305l1.21296-1.44555L4.21296 5.91676 3 7.36231z",
    fill: color,
    fillRule: "evenodd"
  }));
};

export default IconVerified;
//# sourceMappingURL=IconVerified.js.map