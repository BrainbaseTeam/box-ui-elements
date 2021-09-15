import * as React from 'react';
import AccessibleSVG from '../accessible-svg';
import { bdlGray80 } from '../../styles/variables';

var IconLogin = function IconLogin(_ref) {
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
    className: "bdl-IconLogin ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    fill: color,
    d: "M12,3H4C3.4,3,3,3.4,3,4v8c0,0.6,0.4,1,1,1h8c0.6,0,1-0.4,1-1V4C13,3.4,12.6,3,12,3z M12,2c1.1,0,2,0.9,2,2v8c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V4c0-1.1,0.9-2,2-2H12z M8.1,3.9l4.2,4.2l-4.2,4.2l-0.7-0.7l3-3l-6.6,0v-1l6.6,0l-3-3L8.1,3.9z"
  }));
};

export default IconLogin;
//# sourceMappingURL=IconLogin.js.map