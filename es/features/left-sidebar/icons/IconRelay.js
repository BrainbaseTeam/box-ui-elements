import * as React from 'react';
import classNames from 'classnames';
import AccessibleSVG from '../../../icons/accessible-svg';
var iconName = 'icon-relay';

var IconRelay = function IconRelay(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#c4c4c4' : _ref$color,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 14 : _ref$width,
      _ref$selected = _ref.selected,
      selected = _ref$selected === void 0 ? false : _ref$selected;
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
    d: "M14 2.8H9.8V1.4H2.1v-.3C2.1.5 1.6 0 1 0S0 .5 0 1.1V13c0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1V8.4h5.5l-.6 1.4h7l-1.4-3.5L14 2.8z",
    fill: selected ? color : undefined
  }));
};

export default IconRelay;
//# sourceMappingURL=IconRelay.js.map