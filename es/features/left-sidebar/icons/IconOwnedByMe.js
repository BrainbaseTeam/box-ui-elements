import * as React from 'react';
import classNames from 'classnames';
import AccessibleSVG from '../../../icons/accessible-svg';
var iconName = 'icon-owned-by-me';

var IconOwnedByMe = function IconOwnedByMe(_ref) {
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
    d: "M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,2.6c1.3,0,2.3,1,2.3,2.3c0,1.3-1,2.3-2.3,2.3 c-1.3,0-2.3-1-2.3-2.3C4.7,3.7,5.7,2.6,7,2.6z M7,12.5c-1.6,0-3-0.7-4-1.8C3.6,9.1,5.2,8,7,8c1.8,0,3.4,1.1,4,2.8 C10,11.8,8.6,12.5,7,12.5z",
    fill: selected ? color : undefined
  }));
};

export default IconOwnedByMe;
//# sourceMappingURL=IconOwnedByMe.js.map