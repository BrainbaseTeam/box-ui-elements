import * as React from 'react';
import classNames from 'classnames';
import AccessibleSVG from '../accessible-svg';
import { bdlGray40 } from '../../styles/variables';

var IconPuzzlePiece = function IconPuzzlePiece(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? bdlGray40 : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 32 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 32 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: classNames('bdl-IconPuzzlePiece', className),
    height: height,
    title: title,
    viewBox: "0 0 14 14",
    width: width
  }, React.createElement("path", {
    d: "M0 4.16v3c.17.85.65.93 1.15.8a1.72 1.72 0 0 1 1.31-.61 1.7 1.7 0 0 1 0 3.4 1.72 1.72 0 0 1-1.31-.61c-.5-.13-1-.05-1.15.8v3h9.84V11c.17-.85.64-.93 1.15-.8A1.7 1.7 0 1 0 11 8c-.51.13-1 0-1.15-.8v-3h-3C6 4 5.88 3.52 6 3a1.7 1.7 0 1 0-2.17 0c.13.51 0 1-.8 1.15z",
    fill: color
  }));
};

export default IconPuzzlePiece;
//# sourceMappingURL=IconPuzzlePiece.js.map