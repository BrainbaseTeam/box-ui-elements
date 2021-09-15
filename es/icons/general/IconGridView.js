import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconGridView = function IconGridView(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#444' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 9 : _ref$height,
      _ref$opacity = _ref.opacity,
      opacity = _ref$opacity === void 0 ? 1 : _ref$opacity,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 9 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-grid-view ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 9 9",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M3 1v2H1V1h2m1-1H0v4h4V0zM8 1v2H6V1h2m1-1H5v4h4V0zM3 6v2H1V6h2m1-1H0v4h4V5zM8 6v2H6V6h2m1-1H5v4h4V5z",
    fill: color,
    fillOpacity: opacity
  }));
};

export default IconGridView;
//# sourceMappingURL=IconGridView.js.map