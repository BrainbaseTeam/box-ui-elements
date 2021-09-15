import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconComment = function IconComment(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 11 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 11 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-comment ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 11 11",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M9.556.932H1.492C.938.932.49 1.386.49 1.94l-.006 9.072L2.5 8.996h7.056c.554 0 1.008-.454 1.008-1.008V1.94c0-.554-.454-1.008-1.008-1.008zM2.5 4.46h6.048v1.008H2.5V4.46zm4.032 2.52H2.5V5.972h4.032V6.98zm2.016-3.024H2.5V2.948h6.048v1.008z",
    fill: color
  }));
};

export default IconComment;
//# sourceMappingURL=IconComment.js.map