import * as React from 'react';
import { bdlGray50 } from '../../styles/variables';
import AccessibleSVG from '../accessible-svg';

var IconHide = function IconHide(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? bdlGray50 : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-hide ".concat(className),
    title: title,
    width: width,
    height: height,
    viewBox: "0 0 16 16"
  }, React.createElement("path", {
    d: "M7.646 7.646L4.354 4.354a.5.5 0 0 1 0-.708l1.292-1.292a.5.5 0 0 1 .708 0l5.292 5.292a.5.5 0 0 1 0 .708l-5.292 5.292a.5.5 0 0 1-.708 0l-1.292-1.292a.5.5 0 0 1 0-.708l3.292-3.292a.5.5 0 0 0 0-.708z",
    fill: color,
    fillRule: "nonzero"
  }));
};

export default IconHide;
//# sourceMappingURL=IconHide.js.map