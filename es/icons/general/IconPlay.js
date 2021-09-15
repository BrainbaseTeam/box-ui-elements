import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconPlay = function IconPlay(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-play ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 24 24",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M8 5v14l11-7z",
    fill: color
  }), React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

export default IconPlay;
//# sourceMappingURL=IconPlay.js.map