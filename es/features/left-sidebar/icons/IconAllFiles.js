import * as React from 'react';
import classNames from 'classnames';
import AccessibleSVG from '../../../icons/accessible-svg';
var iconName = 'icon-all-files';

var IconAllFiles = function IconAllFiles(_ref) {
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
    d: "M1.4 1.4h4.2L7 2.8h5.6c.8 0 1.4.6 1.4 1.4v7c0 .8-.6 1.4-1.4 1.4H1.4C.6 12.6 0 12 0 11.2V2.8c0-.8.6-1.4 1.4-1.4zM2 4.5v1h10v-1H2z",
    fill: selected ? color : undefined
  }));
};

export default IconAllFiles;
//# sourceMappingURL=IconAllFiles.js.map