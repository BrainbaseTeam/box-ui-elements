import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconCollaborators = function IconCollaborators(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#979797' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-collaborators ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("g", {
    className: "stroke-color",
    fill: "none",
    fillRule: "evenodd",
    stroke: color,
    transform: "translate(1 1)"
  }, React.createElement("circle", {
    cx: "7",
    cy: "7",
    r: "7"
  }), React.createElement("circle", {
    cx: "7",
    cy: "5",
    r: "2"
  }), React.createElement("path", {
    d: "M7 12c2.182-.07 3.964-1.572 4-2 .064-.758-2.895-.993-4-.993S3 9.237 3 10c0 .255 1.818 2.07 4 2z"
  })));
};

export default IconCollaborators;
//# sourceMappingURL=IconCollaborators.js.map