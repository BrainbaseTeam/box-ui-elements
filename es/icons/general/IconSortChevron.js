import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconSortChevron = function IconSortChevron(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#aeaeae' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 11 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 11 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "bdl-icon-sort-chevron ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 9.8 9.7",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M4.9 6.7c-.1 0-.3-.1-.4-.2L2 4c-.3-.2-.3-.6 0-.8s.6-.2.8 0l2.1 2.1L7 3.2c.2-.2.6-.2.8 0s.2.6 0 .8L5.3 6.5c-.1.1-.3.2-.4.2z",
    fill: color
  }));
};

export default IconSortChevron;
//# sourceMappingURL=IconSortChevron.js.map