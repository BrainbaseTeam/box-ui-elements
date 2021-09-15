import * as React from 'react';
import classNames from 'classnames';
import AccessibleSVG from '../../../icons/accessible-svg';
var iconName = 'icon-trash';

var IconTrash = function IconTrash(_ref) {
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
    d: "M13.1 0h.9l-2.1 12.8c-.1.7-.8 1.2-1.4 1.2h-7c-.7 0-1.3-.6-1.4-1.2L0 0h13.1zM9.9 2.3H4.1c-.3 0-.6.2-.6.6s.2.6.6.6h5.8c.3 0 .6-.2.6-.6s-.2-.6-.6-.6z",
    fill: selected ? color : undefined
  }));
};

export default IconTrash;
//# sourceMappingURL=IconTrash.js.map