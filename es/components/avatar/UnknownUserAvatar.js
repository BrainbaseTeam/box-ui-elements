import * as React from 'react';
import AccessibleSVG from '../accessible-svg/AccessibleSVG';

var UnknownUserAvatar = function UnknownUserAvatar(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 28 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 28 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "unknown-user-avatar ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 28 28",
    width: width
  }, React.createElement("circle", {
    cx: "14",
    cy: "14",
    fill: "#ededed",
    r: "14"
  }), React.createElement("path", {
    d: "M5.5 25.1C6.7 21 10 18 14 18s7.3 3 8.5 7.1a14 14 0 0 1-17 0zM14 16a5 5 0 1 1 0-10 5 5 0 0 1 0 10z",
    fill: "#c3c3c3"
  }));
};

export default UnknownUserAvatar;
//# sourceMappingURL=UnknownUserAvatar.js.map