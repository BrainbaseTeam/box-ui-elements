import * as React from 'react';
import classNames from 'classnames';

var TableBody = function TableBody(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  return React.createElement("tbody", {
    className: classNames('table-body', className)
  }, children);
};

export default TableBody;
//# sourceMappingURL=TableBody.js.map