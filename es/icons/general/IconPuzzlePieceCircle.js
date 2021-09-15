import * as React from 'react';
import classNames from 'classnames';
import AccessibleSVG from '../accessible-svg';
import { bdlBoxBlue } from '../../styles/variables';

var IconPuzzlePieceCircle = function IconPuzzlePieceCircle(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? bdlBoxBlue : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 32 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 32 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: classNames('bdl-IconPuzzlePieceCircle', className),
    height: height,
    viewBox: "0 0 28 28",
    title: title,
    width: width
  }, React.createElement("rect", {
    fill: "none",
    height: "27",
    rx: "13.5",
    stroke: color,
    width: "27",
    x: ".5",
    y: ".5"
  }), React.createElement("path", {
    fill: "none",
    stroke: color,
    d: "M8.4 10.695v3.028c.17.85.646.933 1.153.804.312-.375.78-.615 1.306-.615a1.703 1.703 0 0 1 0 3.405c-.525 0-.994-.24-1.306-.615-.507-.129-.983-.046-1.153.804v3.027h9.838v-3.027c.17-.85.646-.933 1.153-.804.312.375.78.615 1.306.615a1.703 1.703 0 0 0 0-3.405c-.526 0-.994.24-1.306.615-.507.129-.983.046-1.153-.804v-3.028H15.21c-.851-.17-.933-.645-.804-1.152a1.703 1.703 0 1 0-2.79-1.307c0 .526.24.994.614 1.307.13.507.047.982-.804 1.152H8.4z"
  }));
};

export default IconPuzzlePieceCircle;
//# sourceMappingURL=IconPuzzlePieceCircle.js.map