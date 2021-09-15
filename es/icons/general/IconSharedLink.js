import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconSharedLink = function IconSharedLink(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#444444' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 15 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 15 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-shared-link ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 15 15",
    width: width
  }, React.createElement("g", {
    className: "stroke-color",
    fill: "none",
    fillRule: "evenodd",
    stroke: color,
    transform: "translate(1 1)"
  }, React.createElement("path", {
    d: "M7.913 10.657l-1.086 1.086c-1.562 1.562-4.097 1.56-5.656 0-1.56-1.562-1.56-4.098 0-5.657L2.257 5M5 2.256L6.086 1.17c1.562-1.562 4.098-1.56 5.657 0 1.562 1.562 1.56 4.098 0 5.657l-1.086 1.086",
    strokeLinecap: "round"
  }), React.createElement("rect", {
    className: "stroke-color",
    height: "0.5",
    rx: ".5",
    stroke: color,
    strokeWidth: "0.5",
    transform: "rotate(-45 6.342 6.808)",
    width: "8",
    x: "2.342",
    y: "6.308"
  })));
};

export default IconSharedLink;
//# sourceMappingURL=IconSharedLink.js.map