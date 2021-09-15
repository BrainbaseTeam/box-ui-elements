import * as React from 'react';
import AccessibleSVG from '../accessible-svg';
import { bdlGreenLight } from '../../styles/variables';

var IconStorage = function IconStorage(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? bdlGreenLight : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 12 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "bdl-IconStorage ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 12",
    width: width
  }, React.createElement("rect", {
    className: "background-color",
    clipRule: "evenodd",
    fill: "#D8D8D8",
    fillOpacity: "0",
    fillRule: "evenodd",
    height: "16",
    width: "16",
    y: "-2"
  }), React.createElement("path", {
    className: "fill-color",
    d: "M12,1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v10c0,0.6-0.4,1-1,1h-2c-0.6,0-1-0.4-1-1V1z M6,3c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v8c0,0.6-0.4,1-1,1H7c-0.6,0-1-0.4-1-1V3z M0,7c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v4c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1V7z",
    fill: color
  }));
};

export default IconStorage;
//# sourceMappingURL=IconStorage.js.map