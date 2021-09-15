import * as React from 'react';
import classNames from 'classnames';
import AccessibleSVG from '../accessible-svg';
import { bdlGray50 } from '../../styles/variables';

var IconClock = function IconClock(_ref) {
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
    className: classNames('bdl-IconClock', className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    fill: color,
    d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"
  }), React.createElement("path", {
    className: "fill-color",
    fill: color,
    d: "M8 2.5a.5.5 0 0 1 .5.5v4.486l3.208 1.687a.5.5 0 0 1 .244.592l-.034.083a.5.5 0 0 1-.676.21L7.767 8.23a.5.5 0 0 1-.267-.442V3a.5.5 0 0 1 .5-.5z"
  }));
};

export default IconClock;
//# sourceMappingURL=IconClock.js.map