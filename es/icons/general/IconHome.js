import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconHome = function IconHome(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 18 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 20 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-home ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 20 18",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M8 17.5v-6h4v6h5v-8h3l-10-9-10 9h3v8h5z",
    fill: color,
    fillRule: "evenodd"
  }));
};

export default IconHome;
//# sourceMappingURL=IconHome.js.map