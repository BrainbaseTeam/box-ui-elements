import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconFlagSolid = function IconFlagSolid(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#979797' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 18 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 18 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-flag-solid ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 18 18",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M4 1C5.33.33 6.67 0 8 0c2 0 4 2 6 2 1.33 0 2.67-.33 4-1v10c-1.33.67-2.67 1-4 1-2 0-4-2-6-2-1.33 0-2.67.33-4 1V1zM1 0h1a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1z",
    fill: color,
    fillRule: "nonzero"
  }));
};

export default IconFlagSolid;
//# sourceMappingURL=IconFlagSolid.js.map