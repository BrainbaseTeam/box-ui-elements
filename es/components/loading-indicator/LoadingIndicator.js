import * as React from 'react';
import './Crawler.scss';
export var LoadingIndicatorSize;

(function (LoadingIndicatorSize) {
  LoadingIndicatorSize["SMALL"] = "small";
  LoadingIndicatorSize["MEDIUM"] = "medium";
  LoadingIndicatorSize["LARGE"] = "large";
  LoadingIndicatorSize["DEFAULT"] = "default";
})(LoadingIndicatorSize || (LoadingIndicatorSize = {}));

var LoadingIndicator = function LoadingIndicator(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? LoadingIndicatorSize.DEFAULT : _ref$size;
  return React.createElement("div", {
    className: "crawler ".concat(className, " is-").concat(size)
  }, React.createElement("div", null), React.createElement("div", null), React.createElement("div", null));
};

export default LoadingIndicator;
//# sourceMappingURL=LoadingIndicator.js.map