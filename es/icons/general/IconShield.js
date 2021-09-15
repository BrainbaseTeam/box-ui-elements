import * as React from 'react';
import classNames from 'classnames';
import AccessibleSVG from '../accessible-svg';
import { bdlBoxBlue, white } from '../../styles/variables';

var IconShield = function IconShield(_ref) {
  var className = _ref.className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? bdlBoxBlue : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 32 : _ref$height,
      _ref$opacity = _ref.opacity,
      opacity = _ref$opacity === void 0 ? 0.2 : _ref$opacity,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 32 : _ref$width,
      title = _ref.title;
  return React.createElement(AccessibleSVG, {
    className: classNames('bdl-IconShield', className),
    height: height,
    title: title,
    viewBox: "0 0 32 32",
    width: width
  }, React.createElement("path", {
    className: "stroke-color",
    fill: white,
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M3 3.308S9.5 6.962 16 1c6.5 5.962 13 2.308 13 2.308v20.48L16 31 3 23.788V3.308z"
  }), React.createElement("path", {
    className: "fill-color",
    fill: color,
    fillOpacity: opacity,
    d: "M16 5C10.5 8.5 6 7 6 7v14.712L16 27V5z"
  }), React.createElement("path", {
    className: "stroke-color",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M25 10v11"
  }));
};

export default IconShield;
//# sourceMappingURL=IconShield.js.map