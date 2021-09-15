import * as React from 'react';
import classNames from 'classnames';
import AccessibleSVG from '../accessible-svg';
import { bdlGray80 } from '../../styles/variables';

var IconCollections = function IconCollections(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? bdlGray80 : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: classNames('bdl-IconCollections', className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    fill: color,
    fillRule: "evenodd",
    d: "M13.888 1C14.502 1 15 1.498 15 2.112v9.776c0 .614-.498 1.112-1.112 1.112H4.112A1.112 1.112 0 0 1 3 11.888V2.112C3 1.498 3.498 1 4.112 1h9.776zM14 2H4v10h10V2zM1.5 7c.25 0 .5.135.5.5v5.103C2 13.504 2.5 14 3.397 14H8.5c.358.01.5.25.5.5s-.142.49-.5.5H3.154A2.154 2.154 0 0 1 1 12.847V7.5c0-.364.25-.5.5-.5z"
  }));
};

export default IconCollections;
//# sourceMappingURL=IconCollections.js.map