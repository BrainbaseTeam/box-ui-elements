import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconRemove = function IconRemove(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#979797' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 10 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 10 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-remove ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 10 10",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M4.596 5.303L1.06 8.84c-.19.19-.195.51 0 .706.19.19.513.195.708 0L5.303 6.01 8.84 9.546c.194.195.516.19.706 0 .195-.195.192-.516 0-.707L6.01 5.302l3.536-3.535c.192-.192.195-.512 0-.707-.19-.19-.512-.194-.707 0L5.302 4.597 1.768 1.06c-.195-.194-.518-.19-.707 0-.195.196-.19.516 0 .708l3.536 3.535z",
    fill: color,
    fillRule: "evenodd"
  }));
};

export default IconRemove;
//# sourceMappingURL=IconRemove.js.map