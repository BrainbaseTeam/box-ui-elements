import * as React from 'react';
import AccessibleSVG from '../accessible-svg';
import { bdlGray10, bdlGray50, white } from '../../styles/variables';

var SecurityBlockedState = function SecurityBlockedState(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$primaryColor = _ref.primaryColor,
      primaryColor = _ref$primaryColor === void 0 ? bdlGray10 : _ref$primaryColor,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 167 : _ref$height,
      _ref$secondaryColor = _ref.secondaryColor,
      secondaryColor = _ref$secondaryColor === void 0 ? bdlGray50 : _ref$secondaryColor,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 130 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "bdl-SecurityBlockedState ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 130 167",
    width: width
  }, React.createElement("path", {
    className: "stroke-color",
    stroke: primaryColor,
    strokeWidth: "4",
    fill: white,
    strokeDasharray: "3",
    d: "M7 0h91l32 30v130a7 7 0 0 1-7 7H7a7 7 0 0 1-7-7V7a7 7 0 0 1 7-7z"
  }), React.createElement("path", {
    className: "fill-color",
    fill: primaryColor,
    d: "M98 0l32 30H98z"
  }), React.createElement("path", {
    className: "stroke-color",
    d: "M35 55.385S50 63.91 65 50c15 13.91 30 5.385 30 5.385v47.788L65 120l-30-16.827V55.385z",
    stroke: secondaryColor,
    strokeWidth: "4",
    fill: white,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("path", {
    className: "fill-color",
    d: "M64.412 57c-12.353 11.128-24.706 4.308-24.706 4.308v38.23L64.412 113V57z",
    fill: primaryColor
  }), React.createElement("path", {
    className: "stroke-color",
    d: "M85.588 71v23.333",
    stroke: secondaryColor,
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

export default SecurityBlockedState;
//# sourceMappingURL=SecurityBlockedState.js.map