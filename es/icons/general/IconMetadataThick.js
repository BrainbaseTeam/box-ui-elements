import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconMetadataThick = function IconMetadataThick(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#999' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-metadata-thick ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 24 24",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm4.37,13.43a1,1,0,0,1-.37.07,1,1,0,0,1-.93-.63L13.9,11.94l-1,2a1,1,0,0,1-1.78,0l-1-2L8.93,14.87a1,1,0,1,1-1.86-.74l2-5a1,1,0,0,1,1.82-.08L12,11.26l1.11-2.21A1,1,0,0,1,14,8.5a1,1,0,0,1,.89.63l2,5A1,1,0,0,1,16.37,15.43Z",
    fill: color
  }));
};

export default IconMetadataThick;
//# sourceMappingURL=IconMetadataThick.js.map