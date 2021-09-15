import * as React from 'react';
import { bdlBoxBlue } from '../../styles/variables';
import IconLogo from '../../icons/general/IconLogo';

var Logo = function Logo(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? bdlBoxBlue : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 25 : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 45 : _ref$width,
      title = _ref.title;
  return React.createElement("div", {
    className: "logo"
  }, React.createElement(IconLogo, {
    color: color,
    height: height,
    title: title,
    width: width
  }));
};

export default Logo;
//# sourceMappingURL=Logo.js.map