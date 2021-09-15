import * as React from 'react';
import { bdlGray20 } from '../../styles/variables';
import AccessibleSVG from '../accessible-svg';

var IconSmallClose = function IconSmallClose(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? bdlGray20 : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 8 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 8 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-close ".concat(className),
    height: height,
    title: title,
    viewBox: "181 11 8 8",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M189 11.806l-.806-.806L185 14.194 181.806 11l-.806.806L184.194 15 181 18.194l.806.806L185 15.806 188.194 19l.806-.806L185.806 15",
    fill: color
  }));
};

export default IconSmallClose;
//# sourceMappingURL=IconSmallClose.js.map