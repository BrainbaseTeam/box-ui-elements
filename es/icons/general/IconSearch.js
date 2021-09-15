import * as React from 'react';
import AccessibleSVG from '../accessible-svg';
import { bdlGray40 } from '../../styles/variables';

var IconSearch = function IconSearch(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'icon-search' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? bdlGray40 : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 14 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 14 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-search ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 14 14",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M13.7,12.1L11.6,10l-1.1-0.2c0.9-1,1.4-2.4,1.4-3.9c0-3.3-2.7-6-6-6C2.7,0,0,2.7,0,6s2.7,6,6,6 c1.5,0,2.9-0.6,4-1.5l0.2,1l2.1,2.1c0.4,0.4,1,0.4,1.4,0l0,0C14.1,13.1,14.1,12.5,13.7,12.1z M6,10.4c-2.5,0-4.5-2-4.5-4.5 s2-4.5,4.5-4.5s4.5,2,4.5,4.5S8.4,10.4,6,10.4z",
    fill: color,
    fillRule: "evenodd"
  }));
};

export default IconSearch;
//# sourceMappingURL=IconSearch.js.map