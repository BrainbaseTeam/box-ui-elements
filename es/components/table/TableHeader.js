import * as React from 'react';
import classNames from 'classnames';
import TableRow from './TableRow';

var TableHeader = function TableHeader(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$rowClassName = _ref.rowClassName,
      rowClassName = _ref$rowClassName === void 0 ? '' : _ref$rowClassName;
  return React.createElement("thead", {
    className: classNames('table-header', className)
  }, React.createElement(TableRow, {
    className: rowClassName
  }, children));
};

export default TableHeader;
//# sourceMappingURL=TableHeader.js.map