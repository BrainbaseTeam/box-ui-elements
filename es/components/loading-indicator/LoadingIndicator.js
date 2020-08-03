import React from 'react';
import './Crawler.scss';

var LoadingIndicator = function LoadingIndicator(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'default' : _ref$size;
  return /*#__PURE__*/React.createElement("div", {
    className: "crawler ".concat(className, " is-").concat(size)
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null));
};

export default LoadingIndicator;
//# sourceMappingURL=LoadingIndicator.js.map