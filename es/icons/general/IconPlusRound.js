import * as React from 'react';
import AccessibleSVG from '../accessible-svg';
import { bdlGray80 } from '../../styles/variables';

var IconPlusRound = function IconPlusRound(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? bdlGray80 : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "bdl-IconPlusRound ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M7.428 7.428V3.567a.572.572 0 0 1 1.144 0v3.86h3.861a.572.572 0 0 1 0 1.145h-3.86v3.861a.572.572 0 0 1-1.145 0v-3.86H3.567a.572.572 0 0 1 0-1.145h3.86zM8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14z",
    fill: color,
    fillRule: "evenodd"
  }));
};

export default IconPlusRound;
//# sourceMappingURL=IconPlusRound.js.map