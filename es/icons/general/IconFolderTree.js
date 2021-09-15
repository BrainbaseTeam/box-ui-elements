import * as React from 'react';
import AccessibleSVG from '../accessible-svg';
import { bdlGray50 } from '../../styles/variables';

var IconFolderTree = function IconFolderTree(_ref) {
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
    className: "bdl-IconFolderTree ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M4 1a2 2 0 0 1 .501 3.937L4.5 7h5.563a2 2 0 1 1 0 1.001L4.5 8v4.5h5.563a2 2 0 1 1 0 1.001L3.5 13.5V4.937A2 2 0 0 1 4 1z",
    fill: color,
    fillRule: "evenodd"
  }));
};

export default IconFolderTree;
//# sourceMappingURL=IconFolderTree.js.map