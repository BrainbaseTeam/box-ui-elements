import * as React from 'react';
import { bdlBoxBlue, bdlPurpleRain } from '../../styles/variables';
import AccessibleSVG from '../accessible-svg';

var IconMetadataColored = function IconMetadataColored(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      color = _ref.color,
      title = _ref.title,
      type = _ref.type,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height;
  var fill;

  if (color) {
    fill = color;
  } else if (type === 'cascade') {
    fill = bdlPurpleRain;
  } else if (type === 'default') {
    fill = bdlBoxBlue;
  } else {
    fill = bdlBoxBlue;
  }

  return React.createElement(AccessibleSVG, {
    className: "icon-metadata ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm-2.515-5.879L6.2 7.263l1.376 2.202a.5.5 0 0 0 .848 0L9.8 7.263l.715 2.858a.5.5 0 0 0 .97-.242l-1-4a.5.5 0 0 0-.909-.144L8 8.257 6.424 5.735a.5.5 0 0 0-.91.144l-1 4a.5.5 0 0 0 .971.242z",
    fill: fill,
    fillRule: "evenodd"
  }));
};

export default IconMetadataColored;
//# sourceMappingURL=IconMetadataColored.js.map