import * as React from 'react';
import AccessibleSVG from '../accessible-svg';
import { bdlGray80 } from '../../styles/variables';

var IconMoveCopy = function IconMoveCopy(_ref) {
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
    className: "icon-move-copy ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    fill: color,
    fillRule: "evenodd",
    d: "M4 3h9c.557 0 .942.345.994.875L14 4v11H4V3h9zm9 1H5v10h8V4zm-2-3v1H3v10H2V1h9zm-.5 9c.3 0 .5.2.5.5s-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3zm0-3c.3 0 .5.2.5.5s-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3z"
  }));
};

export default IconMoveCopy;
//# sourceMappingURL=IconMoveCopy.js.map