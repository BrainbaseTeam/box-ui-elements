import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconGraduationHat = function IconGraduationHat(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#8EA6B2' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 12 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 12 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-graduation-hat ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 12 12",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M2.818 6.444v1.82L6 10l3.182-1.737V6.444L6 8.181 2.818 6.444zM6 2L1 4.667l5 2.666 4.09-2.182v3.071H11V4.667L6 2z",
    fill: color,
    fillRule: "nonzero"
  }));
};

export default IconGraduationHat;
//# sourceMappingURL=IconGraduationHat.js.map