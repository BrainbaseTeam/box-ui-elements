import * as React from 'react';
import AccessibleSVG from '../accessible-svg';
import { bdlBoxBlue } from '../../styles/variables';

var UploadSuccessState = function UploadSuccessState(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? bdlBoxBlue : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 49 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 50 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "upload-success-state ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 50 49",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M41.88,4.39l4,4.53L17,38.73,4.24,26,9,21.28l5.89,6.09L17,29.57l2.16-2.18,22.74-23M42,0,17,25.28,9,17,0,26,17,43,50,9,42,0Z",
    fill: color
  }), React.createElement("rect", {
    className: "fill-color",
    fill: color,
    fillOpacity: "0.2",
    height: "3",
    rx: "1.5",
    ry: "1.5",
    width: "6",
    x: "4",
    y: "46"
  }), React.createElement("rect", {
    className: "fill-color",
    fill: color,
    fillOpacity: "0.2",
    height: "3",
    rx: "1.5",
    ry: "1.5",
    width: "6",
    x: "33",
    y: "46"
  }), React.createElement("rect", {
    className: "fill-color",
    fill: color,
    fillOpacity: "0.2",
    height: "3",
    rx: "1.5",
    ry: "1.5",
    width: "21",
    x: "11",
    y: "46"
  }));
};

export default UploadSuccessState;
//# sourceMappingURL=UploadSuccessState.js.map