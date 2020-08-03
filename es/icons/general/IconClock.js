import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconClock = function IconClock(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#979797' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return /*#__PURE__*/React.createElement(AccessibleSVG, {
    className: "icon-clock ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 15 15",
    width: width
  }, /*#__PURE__*/React.createElement("g", {
    className: "fill-color",
    fill: color
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7.5 1C3.9 1 1 3.9 1 7.5S3.9 14 7.5 14 14 11.1 14 7.5 11.1 1 7.5 1zm0 12C4.5 13 2 10.5 2 7.5S4.5 2 7.5 2 13 4.5 13 7.5 10.5 13 7.5 13z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 8H8V3.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5V9h3.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z"
  })));
};

export default IconClock;
//# sourceMappingURL=IconClock.js.map