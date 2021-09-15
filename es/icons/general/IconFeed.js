import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconFeed = function IconFeed(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#979797' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 14 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 14 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-feed ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 14 14",
    width: width
  }, React.createElement("path", {
    className: "stroke-color",
    d: "M1 .5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V1a.5.5 0 0 0-.5-.5H1zm-.25 9a.25.25 0 1 0 0 .5h12.5a.25.25 0 1 0 0-.5H.75zm0 2.833a.25.25 0 1 0 0 .5h12.5a.25.25 0 1 0 0-.5H.75z",
    fill: "none",
    fillRule: "evenodd",
    stroke: color
  }));
};

export default IconFeed;
//# sourceMappingURL=IconFeed.js.map