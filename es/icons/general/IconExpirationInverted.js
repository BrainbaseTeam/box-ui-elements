import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconExpirationInverted = function IconExpirationInverted(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#444444' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-expiration-inverted ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 24 24",
    width: width
  }, React.createElement("g", {
    className: "fill-color",
    fill: color
  }, React.createElement("path", {
    d: "M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c5.5,0,10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8 S16.4,20,12,20z"
  }), React.createElement("path", {
    d: "M12.5,7H11v6l5.2,3.1l0.8-1.2l-4.5-2.7V7z"
  })));
};

export default IconExpirationInverted;
//# sourceMappingURL=IconExpirationInverted.js.map