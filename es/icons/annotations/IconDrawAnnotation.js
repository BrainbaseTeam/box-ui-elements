import * as React from 'react';
import { bdlGray80 } from '../../styles/variables';
import AccessibleSVG from '../accessible-svg';

var IconDrawAnnotationMode = function IconDrawAnnotationMode(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? bdlGray80 : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 21 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 22 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-annotation-draw ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 14.88 14.88",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M11.65,6.64,5.11,13.17.06,14.94,1.83,9.89,8.37,3.35Zm1.41-1.41L9.78,1.94,11.37.35a1,1,0,0,1,1.41,0l1.87,1.87a1,1,0,0,1,0,1.41Z",
    fill: color,
    fillRule: "evenodd"
  }));
};

export default IconDrawAnnotationMode;
//# sourceMappingURL=IconDrawAnnotation.js.map