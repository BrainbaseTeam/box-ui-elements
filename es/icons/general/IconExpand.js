import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconExpand = function IconExpand(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#979797' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 13 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 13 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-expand ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 13 13",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M12 0H6a1 1 0 0 0 0 2h5v5a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1zM7 11H2V6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2z",
    fill: color
  }));
};

export default IconExpand;
//# sourceMappingURL=IconExpand.js.map