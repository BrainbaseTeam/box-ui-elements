import React from 'react';
import classNames from 'classnames';
import './PreviewLoadingRing.scss';
export default function PreviewLoadingRing(_ref) {
  var children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'light' : _ref$theme;
  var borderStyles = color ? {
    backgroundColor: color
  } : undefined;
  return React.createElement("div", {
    className: classNames('bdl-PreviewLoadingRing', "bdl-PreviewLoadingRing--".concat(theme), className)
  }, React.createElement("div", {
    className: "bdl-PreviewLoadingRing-border",
    style: borderStyles
  }), React.createElement("div", {
    className: "bdl-PreviewLoadingRing-content"
  }, children));
}
//# sourceMappingURL=PreviewLoadingRing.js.map