import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var QuarantineBadge = function QuarantineBadge(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#ED3757' : _ref$color,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "quarantine-badge ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("g", {
    fill: color,
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M15 8c0-3.866-3.134-7-7-7S1 4.134 1 8s3.134 7 7 7 7-3.134 7-7zM0 8c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8-8-3.582-8-8z"
  }), React.createElement("path", {
    d: "M7.82 7.845c.012.062.12.155.18.155.065 0 .167-.088.18-.155l.668-4.02c-.01.068.08.175.143.175H7.01c.055 0 .15-.114.142-.174l.67 4.02zM7.01 3h1.98c.558 0 .935.45.845.99l-.67 4.02C9.075 8.555 8.555 9 8 9c-.552 0-1.075-.45-1.165-.99l-.67-4.02c-.09-.546.278-.99.844-.99zM9.5 11c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm-2 0c0-.276.224-.5.5-.5s.5.224.5.5-.224.5-.5.5-.5-.224-.5-.5z"
  })));
};

export default QuarantineBadge;
//# sourceMappingURL=QuarantineBadge.js.map