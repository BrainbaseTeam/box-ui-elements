import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconNavigateRight = function IconNavigateRight(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 48 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 48 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-navigate-right ".concat(className),
    focusable: "false",
    height: height,
    title: title,
    viewBox: "0 0 48 48",
    width: width
  }, React.createElement("path", {
    d: "M17.2,14.8l9.2,9.2l-9.2,9.2L20,36l12-12L20,12L17.2,14.8z",
    fill: "#494949",
    stroke: "#DCDCDC",
    strokeMiterlimit: "10"
  }), React.createElement("path", {
    d: "M48,48H0L0,0l48,0V48z",
    display: "none",
    fill: "none"
  }));
};

export default IconNavigateRight;
//# sourceMappingURL=IconNavigateRight.js.map