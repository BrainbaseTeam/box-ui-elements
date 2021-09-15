import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconCloud = function IconCloud(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$filter = _ref.filter,
      filter = _ref$filter === void 0 ? {} : _ref$filter,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 64 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 64 : _ref$width;
  var filterID = filter.id,
      definition = filter.definition;
  return React.createElement(AccessibleSVG, {
    className: "icon-cloud ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 64 64",
    width: width
  }, definition ? React.createElement("defs", null, definition) : null, React.createElement("path", {
    d: "M60.4 36.8c0-5-4-9-9-9-.4 0-.9 0-1.3.1C49.1 20 42.4 14 34.3 14c-5.8 0-10.8 3.1-13.6 7.7-1.1-.3-2.3-.5-3.6-.5-6.8 0-12.3 5.5-12.3 12.3 0 6.7 5.4 12.2 12.1 12.3h34.4c5.1-.1 9.1-4.1 9.1-9z",
    filter: filterID ? "url(#".concat(filterID, ")") : undefined
  }));
};

export default IconCloud;
//# sourceMappingURL=IconCloud.js.map