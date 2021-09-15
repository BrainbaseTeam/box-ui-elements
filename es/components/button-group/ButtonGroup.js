import * as React from 'react';
import './ButtonGroup.scss';

var ButtonGroup = function ButtonGroup(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      isDisabled = _ref.isDisabled;
  return React.createElement("div", {
    className: "btn-group ".concat(className, " ").concat(isDisabled ? 'is-disabled' : '')
  }, children);
};

export default ButtonGroup;
//# sourceMappingURL=ButtonGroup.js.map