import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconChat = function IconChat(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#979797' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-chat ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 14 15",
    width: width
  }, React.createElement("g", {
    className: "fill-color",
    fill: color
  }, React.createElement("path", {
    d: "M1 0C.4 0 0 .4 0 1v10h2v3.2L5.7 11H13c.6 0 1-.4 1-1V0H1zm12 10H5.3l-.3.2L3 12v-2H1V1h12v9z"
  }), React.createElement("path", {
    d: "M3.5 6h1c.3 0 .5-.2.5-.5S4.8 5 4.5 5h-1c-.3 0-.5.2-.5.5s.2.5.5.5zM6.5 6h1c.3 0 .5-.2.5-.5S7.8 5 7.5 5h-1c-.3 0-.5.2-.5.5s.2.5.5.5zM9.5 6h1c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-1c-.3 0-.5.2-.5.5s.2.5.5.5z"
  })));
};

export default IconChat;
//# sourceMappingURL=IconChat.js.map