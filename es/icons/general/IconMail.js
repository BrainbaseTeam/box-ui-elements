import * as React from 'react';
import AccessibleSVG from '../accessible-svg';
import { bdlGray80 } from '../../styles/variables';

var IconMail = function IconMail(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? bdlGray80 : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-mail ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    fill: color,
    fillRule: "evenodd",
    d: "M14 3H2c-.6 0-1 .4-1 1v9c0 .6.5 1 1 1h12c.6 0 1-.4 1-1V4c0-.6-.5-1-1-1zM8 8.5L2.8 4h10.5L8 8.5zm6 4.5H2V4.7l5.7 4.8.3.3.3-.3L14 4.7V13z"
  }));
};

export default IconMail;
//# sourceMappingURL=IconMail.js.map