import * as React from 'react';
import { bdlBoxBlue } from '../../styles/variables';
import AccessibleSVG from '../accessible-svg';

var MetadataActiveBadge = function MetadataActiveBadge(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "metadata-active-badge ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("circle", {
    cx: "8",
    cy: "8",
    fill: "none",
    r: "7.5",
    stroke: bdlBoxBlue
  }), React.createElement("path", {
    d: "M5.126 10.545a.57.57 0 0 1-.693.437.603.603 0 0 1-.416-.728l1.143-4.8c.122-.513.772-.62 1.039-.172L8 8.308l1.801-3.026c.267-.449.917-.34 1.039.173l1.143 4.8a.603.603 0 0 1-.416.727.57.57 0 0 1-.693-.437l-.817-3.43-1.572 2.643a.557.557 0 0 1-.97 0L5.943 7.116l-.817 3.43z",
    fill: bdlBoxBlue
  })));
};

export default MetadataActiveBadge;
//# sourceMappingURL=MetadataActiveBadge.js.map