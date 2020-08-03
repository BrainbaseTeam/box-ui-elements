var _rotations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
var DOWN = 'down';
var LEFT = 'left';
var RIGHT = 'right';
var UP = 'up';
var rotations = (_rotations = {}, _defineProperty(_rotations, DOWN, 135), _defineProperty(_rotations, LEFT, 225), _defineProperty(_rotations, RIGHT, 45), _defineProperty(_rotations, UP, 315), _rotations);

var IconChevron = function IconChevron(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000' : _ref$color,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? UP : _ref$direction,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? '9px' : _ref$size,
      _ref$thickness = _ref.thickness,
      thickness = _ref$thickness === void 0 ? '2px' : _ref$thickness;
  return /*#__PURE__*/React.createElement("span", {
    className: "icon-chevron icon-chevron-".concat(direction, " ").concat(className),
    style: {
      borderColor: color,
      borderStyle: 'solid solid none none',
      borderWidth: thickness,
      display: 'inline-block',
      height: size,
      transform: "rotate(".concat(rotations[direction], "deg)"),
      width: size
    }
  });
};

export default IconChevron;
//# sourceMappingURL=IconChevron.js.map