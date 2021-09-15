import * as React from 'react';
import AccessibleSVG from '../accessible-svg';
import { bdlGray80 } from '../../styles/variables';

var IconAdd = function IconAdd(_ref) {
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
    className: "bdl-IconAdd ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M8.5 2v5.5H14v1H8.5V14h-1V8.5H2v-1h5.5V2z",
    fill: color,
    fillRule: "evenodd"
  }));
};

export default IconAdd;
//# sourceMappingURL=IconAdd.js.map