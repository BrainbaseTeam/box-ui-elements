import * as React from 'react';
import classNames from 'classnames';
import AccessibleSVG from '../../../icons/accessible-svg';
var iconName = 'icon-dev-console';

var IconDevConsole = function IconDevConsole(_ref) {
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
    d: "M2.3 7.2l1.5 1.5c.3.3.3.8 0 1.1-.3.3-.8.3-1.1 0L.1 7.1l2.6-2.6c.3-.3.8-.3 1.1 0s.3.8 0 1.1L2.3 7.2zm8-1.5c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0L14 7.3l-2.6 2.6c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l1.5-1.5-1.5-1.6zm-4.1 5c-.1.4-.6.6-1 .5s-.6-.6-.5-1l2.4-6.8c.1-.4.6-.6 1-.5.4.1.6.6.5 1l-2.4 6.8z",
    fill: selected ? color : undefined
  }));
};

export default IconDevConsole;
//# sourceMappingURL=IconDevConsole.js.map