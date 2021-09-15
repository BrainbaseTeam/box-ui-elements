import * as React from 'react';
import { bdlBoxBlue } from '../../styles/variables';
import AccessibleSVG from '../accessible-svg';

var IconPresenceInvite = function IconPresenceInvite(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? bdlBoxBlue : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 28 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 28 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-presence-invite ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 28 28",
    width: width
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("circle", {
    cx: "14",
    cy: "14",
    fill: color,
    r: "14"
  }), React.createElement("path", {
    d: "M16.389 12.012c-1.257-.096-2.487.382-3.31 1.288a.359.359 0 0 0 0 .449c.4.6.608 1.296.6 2.006v1.87c0 .207.177.375.395.375h5.53a.385.385 0 0 0 .395-.374v-1.714c.042-1.989-1.524-3.68-3.61-3.9z",
    fill: "#FFF"
  }), React.createElement("circle", {
    cx: "16",
    cy: "9",
    fill: "#FFF",
    r: "2"
  }), React.createElement("circle", {
    cx: "9",
    cy: "9",
    fill: "#FFF",
    r: "2"
  }), React.createElement("path", {
    d: "M8.608 12.018c-2.091.245-3.648 1.926-3.607 3.896v1.712c0 .207.179.374.4.374H12.6c.22 0 .4-.167.4-.374v-1.87c.005-1.058-.47-2.069-1.306-2.781a4.18 4.18 0 0 0-3.086-.957z",
    fill: "#FFF"
  }), React.createElement("path", {
    d: "M21.5 16.5h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2z",
    fill: "#FFF",
    fillRule: "nonzero",
    stroke: color
  })));
};

export default IconPresenceInvite;
//# sourceMappingURL=IconPresenceInvite.js.map