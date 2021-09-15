import * as React from 'react';
import classNames from 'classnames';
import AccessibleSVG from '../../../icons/accessible-svg';
var iconName = 'icon-box-relay';

var IconBoxRelay = function IconBoxRelay(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 14 : _ref$width,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#c4c4c4' : _ref$color,
      _ref$selected = _ref.selected,
      selected = _ref$selected === void 0 ? false : _ref$selected,
      title = _ref.title;
  return React.createElement(AccessibleSVG, {
    className: classNames(iconName, className, {
      'is-selected': selected
    }),
    title: title,
    viewBox: "0 0 14 14",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    color: color,
    d: "M1 1.002V1h5.001l-1.94 3.668a.5.5 0 0 0 .094.592L8.001 9H3.947l1.022 3.743a1 1 0 0 1-1.932.517L.034 2.261A1 1 0 0 1 1 1.001zM8.001 1h3.495a.5.5 0 0 1 .458.7L10.08 4.625a.5.5 0 0 0 .112.662L13.87 8.17a.5.5 0 0 1-.375.831h-3.494L6.155 5.33a.5.5 0 0 1-.098-.593z",
    fillRule: "evenodd",
    fill: selected ? color : undefined
  }));
};

export default IconBoxRelay;
//# sourceMappingURL=IconBoxRelay.js.map