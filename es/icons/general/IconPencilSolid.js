import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconPencilSolid = function IconPencilSolid(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 10 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 10 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-pencil-solid ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 10 10",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M.5 7.625V9.5h1.875l5.53-5.53-1.876-1.874L.5 7.626zM9.354 2.52c.195-.194.195-.51 0-.704L8.184.646C7.99.45 7.674.45 7.48.646l-.916.915L8.44 3.437l.914-.915z",
    fill: color
  }));
};

export default IconPencilSolid;
//# sourceMappingURL=IconPencilSolid.js.map