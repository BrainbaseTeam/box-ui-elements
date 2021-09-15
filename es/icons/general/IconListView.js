import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconListView = function IconListView(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#222' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 9 : _ref$height,
      _ref$opacity = _ref.opacity,
      opacity = _ref$opacity === void 0 ? 1 : _ref$opacity,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 9 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-list-view ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 9 9",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M0 5h9V4H0v1zm0 4h9V8H0v1zm0-9v1h9V0H0z",
    fill: color,
    fillOpacity: opacity,
    fillRule: "evenodd"
  }));
};

export default IconListView;
//# sourceMappingURL=IconListView.js.map