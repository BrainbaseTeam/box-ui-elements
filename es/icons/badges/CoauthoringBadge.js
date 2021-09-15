import * as React from 'react';
import { bdlBoxBlue } from '../../styles/variables';
import AccessibleSVG from '../accessible-svg';

var CoauthoringBadge = function CoauthoringBadge(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? bdlBoxBlue : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "coauthoring-badge ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    className: "fill-color",
    d: "M15,8c0-3.9-3.1-7-7-7S1,4.1,1,8s3.1,7,7,7S15,11.9,15,8z M0,8c0-4.4,3.6-8,8-8s8,3.6,8,8s-3.6,8-8,8S0,12.4,0,8z",
    fill: color
  }), React.createElement("path", {
    className: "fill-color",
    d: "M10,8V7V3.5C10,3.2,9.8,3,9.5,3C9.2,3,9,3.2,9,3.5v3.7C8.7,7.3,8.3,7.3,8,7.3s-0.7,0-1-0.1V2.5C7,2.2,6.8,2,6.5,2C6.2,2,6,2.2,6,2.5V7v1c0,0,1,0.3,2,0.3C9,8.3,10,8,10,8z",
    fill: color
  }), React.createElement("path", {
    className: "fill-color",
    d: "M11.5,12h-3L10,9c0,0-1,0.4-2,0.4S6,9,6,9l2,4h3.5c0.3,0,0.5-0.2,0.5-0.5S11.8,12,11.5,12z",
    fill: color
  })));
};

export default CoauthoringBadge;
//# sourceMappingURL=CoauthoringBadge.js.map