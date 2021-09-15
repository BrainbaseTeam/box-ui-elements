import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconCaretDown = function IconCaretDown(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 6 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 10 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-caret-down ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 10 6",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M0 .5l5 5 5-5H0z",
    fill: color,
    fillRule: "evenodd"
  }));
};

export default IconCaretDown;
//# sourceMappingURL=IconCaretDown.js.map