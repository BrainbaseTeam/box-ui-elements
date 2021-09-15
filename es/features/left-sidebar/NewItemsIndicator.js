import * as React from 'react';
import './styles/NewItemsIndicator.scss';

var NewItemsIndicator = function NewItemsIndicator(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  return React.createElement("span", {
    className: "new-items-indicator is-showing ".concat(className)
  });
};

export default NewItemsIndicator;
//# sourceMappingURL=NewItemsIndicator.js.map