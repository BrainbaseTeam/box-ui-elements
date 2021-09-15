import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconCommentsBadge = function IconCommentsBadge(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#777' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 15 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 14 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-comments-badge ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 14 15",
    width: width
  }, React.createElement("g", {
    className: "stroke-color",
    fill: "none",
    fillRule: "evenodd",
    stroke: color,
    strokeWidth: ".875"
  }, React.createElement("path", {
    d: "M3.063 13.938l2.88-2.905h5.432c1.208 0 2.188-.98 2.188-2.187v-6.22c0-1.21-.98-2.188-2.188-2.188h-8.75c-1.208 0-2.188.98-2.188 2.187v6.22c0 1.21.98 2.188 2.188 2.188h.438v2.905z"
  }), React.createElement("path", {
    d: "M3.938 3.97h6.124M3.938 7.5h6.124",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

export default IconCommentsBadge;
//# sourceMappingURL=IconCommentsBadge.js.map