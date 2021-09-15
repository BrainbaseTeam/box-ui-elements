import * as React from 'react';
import classNames from 'classnames';
import AccessibleSVG from '../../../icons/accessible-svg';
var iconName = 'icon-automations';

var IconAutomations = function IconAutomations(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 14 : _ref$width,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#c4c4c4' : _ref$color,
      _ref$selected = _ref.selected,
      selected = _ref$selected === void 0 ? false : _ref$selected;
  return React.createElement(AccessibleSVG, {
    className: classNames(iconName, className, {
      'is-selected': selected
    }),
    viewBox: "0 0 14 14",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    color: color,
    d: "M8,5 L11.4585117,5 C11.7575674,5 12,5.23405867 12,5.52278468 C12,5.61753624 11.9733275,5.71050639 11.9228341,5.79175518 L7.00581071,13.7461068 C6.8519478,13.9936873 6.51933305,14.0739688 6.26289487,13.9254205 C6.09979566,13.8309411 6,13.6607712 6,13.4771363 L6,9 L2.54148831,9 C2.24243258,9 2,8.76594133 2,8.47721532 C2,8.38246376 2.02667254,8.28949361 2.07716592,8.20824482 L6.99418929,0.253893189 C7.1480522,0.00631268077 7.48066695,-0.0739687821 7.73710513,0.0745795227 C7.90020434,0.169058867 8,0.33922885 8,0.522863688 L8,5 Z",
    fill: selected ? color : undefined
  }));
};

export default IconAutomations;
//# sourceMappingURL=IconAutomations.js.map