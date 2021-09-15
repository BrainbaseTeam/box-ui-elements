import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconInviteCollaborators = function IconInviteCollaborators(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#444444' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-invite-collaborators ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(1 -1)"
  }, React.createElement("circle", {
    className: "stroke-color",
    cx: "7",
    cy: "9",
    r: "7",
    stroke: color
  }), React.createElement("circle", {
    className: "stroke-color",
    cx: "7",
    cy: "7",
    r: "2",
    stroke: color
  }), React.createElement("path", {
    className: "stroke-color",
    d: "M3 13s1.4985-2 4-2 4 2 4 2",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("circle", {
    cx: "11",
    cy: "3",
    fill: "#FFFFFF",
    r: "3"
  }), React.createElement("path", {
    className: "fill-color",
    d: "M11.4634 3.521H12.5c.276 0 .5-.2238.5-.5 0-.276-.224-.5-.5-.5h-1.0366V1.5c0-.276-.2238-.5-.5-.5-.276 0-.5.224-.5.5v1.021H9.5c-.276 0-.5.224-.5.5 0 .2762.224.5.5.5h.9634V4.5c0 .276.224.5.5.5.2762 0 .5-.224.5-.5v-.979z",
    fill: color
  })));
};

export default IconInviteCollaborators;
//# sourceMappingURL=IconInviteCollaborators.js.map