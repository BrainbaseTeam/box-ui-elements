import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconChatRound = function IconChatRound(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#999' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-chat-round ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 24 24",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M14 3h-4a8 8 0 0 0-5 14.26V21a1 1 0 0 0 .08.37 1 1 0 0 0 1.31.53L12 19h2a8 8 0 0 0 0-16zm-6 9a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1z",
    fill: color
  }));
};

export default IconChatRound;
//# sourceMappingURL=IconChatRound.js.map