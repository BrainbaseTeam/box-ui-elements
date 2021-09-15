import * as React from 'react';
import AccessibleSVG from '../accessible-svg';
import { bdlGray80 } from '../../styles/variables';

var IconCaretRound = function IconCaretRound(_ref) {
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
    className: "bdl-IconCaretRound ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M3.46 6.727a.572.572 0 0 1 .81-.81L8 9.648l3.73-3.73a.572.572 0 0 1 .81.81L8.495 10.77a.7.7 0 0 1-.99 0L3.46 6.727zm9.49 6.223a7 7 0 1 0-9.9-9.9 7 7 0 0 0 9.9 9.9z",
    fill: color,
    fillRule: "evenodd"
  }));
};

export default IconCaretRound;
//# sourceMappingURL=IconCaretRound.js.map