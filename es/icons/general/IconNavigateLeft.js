import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconNavigateLeft = function IconNavigateLeft(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 48 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 48 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-navigate-left ".concat(className),
    focusable: "false",
    height: height,
    title: title,
    viewBox: "0 0 48 48",
    width: width
  }, React.createElement("path", {
    d: "M30.8,33.2L21.7,24l9.2-9.2L28,12L16,24l12,12L30.8,33.2z",
    fill: "#494949",
    stroke: "#DCDCDC",
    strokeMiterlimit: "10"
  }), React.createElement("path", {
    d: "M0,0h48v48H0V0z",
    display: "none",
    fill: "none"
  }));
};

export default IconNavigateLeft;
//# sourceMappingURL=IconNavigateLeft.js.map