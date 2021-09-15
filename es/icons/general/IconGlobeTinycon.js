import * as React from 'react';
import AccessibleSVG from '../accessible-svg';
import { bdlBoxBlue } from '../../styles/variables';

var IconGlobeTinycon = function IconGlobeTinycon(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? bdlBoxBlue : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-globe ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    className: "fill-color",
    d: "M8 .5A7.484 7.484 0 0 0 .5 8c0 4.155 3.345 7.5 7.5 7.5 4.155 0 7.5-3.345 7.5-7.5C15.5 3.845 12.155.5 8 .5z",
    stroke: color
  }), React.createElement("path", {
    className: "fill-color",
    d: "M12 12.061c-.107-.28-.512-1.308-1.268-1.883-.187-.142-.718-.217-1.592-.226V8.365c0-.794-.578-.794-1.019-.794H4.594V5.983H6.11c.44 0 .757.065.757-.397V4.395h1.515c.772 0 1.841-.309 1.841-1.9-3.778-.89-6.391.344-7.84 3.703L5.407 9.38l-.07.282a1.482 1.482 0 0 0 1.53 1.835l.586 2.487c1.21-.034 2.087-.166 2.633-.397.464-.196 1.101-.705 1.913-1.526z",
    fill: color,
    stroke: color,
    strokeWidth: ".766",
    strokeLinejoin: "round"
  })));
};

export default IconGlobeTinycon;
//# sourceMappingURL=IconGlobeTinycon.js.map