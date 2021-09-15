import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconFileBase = function IconFileBase(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      baseClassName = _ref.baseClassName,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 32 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 32 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "".concat(baseClassName, " ").concat(className),
    height: height,
    title: title,
    viewBox: "0 0 32 32",
    width: width
  }, children);
};

export default IconFileBase;
//# sourceMappingURL=IconFileBase.js.map