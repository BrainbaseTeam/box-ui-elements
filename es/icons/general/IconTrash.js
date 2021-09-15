import * as React from 'react';
import { bdlGray80 } from '../../styles/variables';
import AccessibleSVG from '../accessible-svg';

var IconTrash = function IconTrash(_ref) {
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
    className: "icon-trash ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    fill: color,
    fillRule: "evenodd",
    d: "M14 2l-1.8 11c-.1.6-.7 1-1.2 1H5c-.6 0-1.1-.5-1.2-1L2 2h12zm-1.2 1H3.2l1.6 9.9s.1.1.2.1h6c.06 0 .12-.036.158-.065l.042-.035L12.8 3zm-2.3 1c.3 0 .5.2.5.5s-.2.5-.5.5h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5z"
  }));
};

export default IconTrash;
//# sourceMappingURL=IconTrash.js.map