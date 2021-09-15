import * as React from 'react';
import classNames from 'classnames';
import AccessibleSVG from '../../../icons/accessible-svg';
var iconName = 'icon-synced';

var IconSynced = function IconSynced(_ref) {
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
    d: "M6.5 9.6l-2-2c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7L6.6 11c.1.1.2.1.3.1.1 0 .3 0 .4-.2L10 8.1c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0l-1.9 2V3.3c0-.3-.2-.5-.5-.5s-.4.2-.4.5v6.3zm.4 4.4c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z",
    fill: selected ? color : undefined
  }));
};

export default IconSynced;
//# sourceMappingURL=IconSynced.js.map