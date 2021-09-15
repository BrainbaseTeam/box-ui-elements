import * as React from 'react';
import { bdlGray50 } from '../../styles/variables';
import AccessibleSVG from '../accessible-svg';

var IconShow = function IconShow(_ref) {
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
    className: "icon-show ".concat(className),
    title: title,
    width: width,
    height: height,
    viewBox: "0 0 16 16"
  }, React.createElement("path", {
    d: "M7.354 7.646l3.292-3.292a.5.5 0 0 0 0-.708L9.354 2.354a.5.5 0 0 0-.708 0L3.354 7.646a.5.5 0 0 0 0 .708l5.292 5.292a.5.5 0 0 0 .708 0l1.292-1.292a.5.5 0 0 0 0-.708L7.354 8.354a.5.5 0 0 1 0-.708z",
    fill: color,
    fillRule: "nonzero"
  }));
};

export default IconShow;
//# sourceMappingURL=IconShow.js.map