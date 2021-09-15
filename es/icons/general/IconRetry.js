import * as React from 'react';
import AccessibleSVG from '../accessible-svg';
import { bdlGray } from '../../styles/variables';

var IconRetry = function IconRetry(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? bdlGray : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 32 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 32 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "bdl-IconRetry ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 32 32",
    width: width
  }, React.createElement("g", {
    className: "fill-color",
    fill: color,
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M25.023 16c0-6.075-4.925-11-11-11s-11 4.925-11 11 4.925 11 11 11c2.601 0 5.06-.904 7.02-2.53a1 1 0 1 1 1.278 1.538A12.949 12.949 0 0 1 14.023 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13a1 1 0 0 1-2 0z",
    fillRule: "nonzero"
  }), React.createElement("path", {
    d: "M20 14l6 6 6-6z"
  })));
};

export default IconRetry;
//# sourceMappingURL=IconRetry.js.map