import * as React from 'react';
import AccessibleSVG from '../accessible-svg';
import { bdlBoxBlue, white } from '../../styles/variables';

var IconLightning = function IconLightning(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "bdl-IconLightning ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 32 32",
    width: width
  }, React.createElement("circle", {
    className: "background-color",
    fill: bdlBoxBlue,
    cx: "16",
    cy: "16",
    r: "12"
  }), React.createElement("polygon", {
    className: "foreground-color",
    fill: white,
    points: "19.3333333 8 11 17.6 14.3333333 17.6 12.6666667 24 21 14.4 17.6666667 14.4"
  }));
};

export default IconLightning;
//# sourceMappingURL=IconLightning.js.map