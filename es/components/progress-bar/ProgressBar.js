import React from 'react';
import './ProgressBar.scss';

var ProgressBar = function ProgressBar(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$progress = _ref.progress,
      progress = _ref$progress === void 0 ? 0 : _ref$progress;
  var style = {
    width: "".concat(progress, "%")
  };
  return React.createElement("div", {
    className: "progress-bar-container"
  }, React.createElement("div", {
    className: "progress-bar ".concat(className),
    style: style
  }));
};

export default ProgressBar;
//# sourceMappingURL=ProgressBar.js.map