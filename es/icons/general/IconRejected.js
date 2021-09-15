import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconRejected = function IconRejected(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#ED3757' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 18 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 18 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-rejected ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 18 18",
    width: width
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("circle", {
    cx: 9,
    cy: 9,
    fill: color,
    r: 9
  }), React.createElement("path", {
    d: "M9 7.586l2.828-2.829 1.415 1.415L10.414 9l2.829 2.828-1.415 1.415L9 10.414l-2.828 2.829-1.415-1.415L7.586 9 4.757 6.172l1.415-1.415z",
    fill: "#FFF",
    fillRule: "nonzero"
  })));
};

export default IconRejected;
//# sourceMappingURL=IconRejected.js.map