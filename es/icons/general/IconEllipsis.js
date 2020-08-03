import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconEllipsis = function IconEllipsis(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 20 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 20 : _ref$width;
  return /*#__PURE__*/React.createElement(AccessibleSVG, {
    className: "icon-ellipsis ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 10 2",
    width: width
  }, /*#__PURE__*/React.createElement("path", {
    className: "fill-color",
    d: "M1 2c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm8 0c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zM5 2c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1z",
    fill: color,
    fillRule: "evenodd"
  }));
};

export default IconEllipsis;
//# sourceMappingURL=IconEllipsis.js.map