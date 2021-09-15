import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconFlag = function IconFlag(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#979797' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-flag ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 14 14",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M8.56 10.002l3.835.017L10.89 7l1.502-3H9v4H8V2h1v1h5l-.002.003H14L12.005 7 14 10.988h-.01L14 11h-.925l-.19.002V11H7.098L8 9H1v4.502C1 13.777.768 14 .5 14c-.276 0-.5-.22-.5-.498V.498C0 .223.232 0 .5 0c.276 0 .5.22.5.498V1h8v1H1v6h8v.988h.008l-.45 1.014z",
    fill: color,
    fillRule: "evenodd"
  }));
};

export default IconFlag;
//# sourceMappingURL=IconFlag.js.map