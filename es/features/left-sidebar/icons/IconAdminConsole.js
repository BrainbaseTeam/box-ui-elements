import * as React from 'react';
import classNames from 'classnames';
import AccessibleSVG from '../../../icons/accessible-svg';
var iconName = 'icon-admin-console';

var IconAdminConsole = function IconAdminConsole(_ref) {
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
    viewBox: "0 0 14 16",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    color: color,
    d: "M12.8 13.6c.6 0 1.2.5 1.2 1s-.5 1.1-1.2 1.1H1.1c-.6 0-1.2-.5-1.2-1.1s.5-1 1.2-1h11.7zM1.6 12.1c-.9 0-1.6-.7-1.6-1.5V6.9c0-.8.7-1.5 1.6-1.5.9 0 1.6.7 1.6 1.5v3.7c-.1.8-.8 1.5-1.6 1.5zm7-1.5c0 .8-.7 1.5-1.6 1.5s-1.6-.7-1.6-1.5V4.7c0-.8.7-1.5 1.6-1.5s1.6.7 1.6 1.5v5.9zM12.4.3c.9 0 1.6.7 1.6 1.5v8.8c0 .8-.7 1.5-1.6 1.5-.9 0-1.6-.7-1.6-1.5V1.8c.1-.8.8-1.5 1.6-1.5z",
    fill: selected ? color : undefined
  }));
};

export default IconAdminConsole;
//# sourceMappingURL=IconAdminConsole.js.map