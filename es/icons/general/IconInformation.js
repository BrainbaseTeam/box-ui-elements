import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconInformation = function IconInformation(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#444' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 13 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 5 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-information ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 5 13",
    width: width
  }, React.createElement("g", {
    className: "fill-color",
    fill: color
  }, React.createElement("path", {
    d: "M1 12h3V6H1v6zm0-7h3c.6 0 1 .5 1 1v6c0 .6-.4 1-1 1H1c-.6 0-1-.5-1-1V6c0-.6.4-1 1-1zM2 3h1c.6 0 1-.4 1-1s-.4-1-1-1H2c-.6 0-1 .4-1 1s.4 1 1 1zm0-3h1c1.1 0 2 .9 2 2s-.9 2-2 2H2C.9 4 0 3.1 0 2s.9-2 2-2z"
  })));
};

export default IconInformation;
//# sourceMappingURL=IconInformation.js.map