import * as React from 'react';
import { bdlGray80 } from '../../styles/variables';
import AccessibleSVG from '../accessible-svg';

var IconUpload = function IconUpload(_ref) {
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
    className: "icon-upload ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    fill: color,
    fillRule: "evenodd",
    d: "M14 14v1H2v-1h12zM8 1l6 6.003h-3.004V12H5.004V7.003H2L8 1zm0 1.413l-3.589 3.59h1.591v4.998h3.996V6.004h1.59L8 2.414z"
  }));
};

export default IconUpload;
//# sourceMappingURL=IconUpload.js.map