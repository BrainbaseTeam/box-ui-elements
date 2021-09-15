import * as React from 'react';
import AccessibleSVG from '../accessible-svg';
import { bdlBoxBlue, white } from '../../styles/variables';

var IconTaskApproval = function IconTaskApproval(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "bdl-IconTaskApproval ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 32 32",
    width: width
  }, React.createElement("g", {
    fill: "none",
    fillRule: "nonzero"
  }, React.createElement("circle", {
    className: "background-color",
    fill: bdlBoxBlue,
    cx: "16",
    cy: "16",
    r: "16"
  }), React.createElement("g", {
    transform: "translate(8 5.333)",
    className: "foreground-color",
    fill: white
  }, React.createElement("path", {
    d: "M11.267 6.51c-1.133 2.242-1.669 4.276-1.614 6.102.006.213-.177.388-.405.388H6.752c-.228 0-.41-.175-.405-.388.055-1.826-.481-3.86-1.614-6.102C2.953 2.986 4.557 0 8 0s5.047 2.986 3.267 6.51z"
  }), React.createElement("rect", {
    y: "14.337",
    width: "16",
    height: "3.353",
    rx: "1.676"
  }), React.createElement("rect", {
    x: "1.143",
    y: "18.808",
    width: "13.714",
    height: "1.192",
    rx: ".596"
  }))));
};

export default IconTaskApproval;
//# sourceMappingURL=IconTaskApproval.js.map