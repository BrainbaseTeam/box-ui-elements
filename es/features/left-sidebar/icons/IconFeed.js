import * as React from 'react';
import classNames from 'classnames';
import AccessibleSVG from '../../../icons/accessible-svg';
var iconName = 'icon-feed';

var IconFeed = function IconFeed(_ref) {
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
    d: "M.8 0h12.4c.4 0 .8.3.8.8v6.8c0 .4-.3.8-.8.8H.8c-.4 0-.8-.3-.8-.8V.8C0 .3.3 0 .8 0zM.7 9.8h12.6c.4 0 .7.3.7.7s-.3.7-.7.7H.7c-.4 0-.7-.3-.7-.7s.3-.7.7-.7zm0 2.8h12.6c.4 0 .7.3.7.7 0 .4-.3.7-.7.7H.7c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7z",
    fill: selected ? color : undefined
  }));
};

export default IconFeed;
//# sourceMappingURL=IconFeed.js.map