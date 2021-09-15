/**
 * 
 * @file Function to render the remove table cell
 */
import React from 'react';
import ItemRemove from './ItemRemove';
export default (function (_onClick) {
  return function (_ref) {
    var rowData = _ref.rowData;

    if (rowData.isFolder) {
      return null;
    }

    return React.createElement(ItemRemove, {
      status: rowData.status,
      onClick: function onClick() {
        return _onClick(rowData);
      }
    });
  };
});
//# sourceMappingURL=removeCellRenderer.js.map