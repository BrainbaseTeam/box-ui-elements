import * as React from 'react';
import { bdlGray50, white } from '../../styles/variables';
import AccessibleSVG from '../accessible-svg';

var IconWorkflow = function IconWorkflow(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 32 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 32 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "bdl-IconWorkflow ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 32 32",
    width: width
  }, React.createElement("g", {
    fill: "none",
    fillRule: "nonzero"
  }, React.createElement("rect", {
    className: "background-color",
    rx: "6",
    ry: "6",
    width: "32",
    height: "32",
    fill: bdlGray50
  }), React.createElement("path", {
    className: "foreground-color",
    transform: "translate(8 8)",
    d: "M7,8H5a2,2,0,0,0,0,4H8a1,1,0,0,1,0,2H5A4,4,0,0,1,5,6h6.5a1.5,1.5,0,0,0,0-3H6A1,1,0,0,1,6,1h5.5a3.5,3.5,0,0,1,0,7ZM2,3A1,1,0,1,1,3,2,1,1,0,0,1,2,3ZM13,15a2,2,0,1,1,2-2A2,2,0,0,1,13,15Z",
    fill: white,
    fillRule: "evenodd"
  })));
};

export default IconWorkflow;
//# sourceMappingURL=IconWorkflow.js.map