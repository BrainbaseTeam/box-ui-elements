/**
 * 
 * @file Function to render the date table cell
 * @author Box
 */
import React from 'react';
import Date from './Date';
export default (function () {
  return function (_ref) {
    var dataKey = _ref.dataKey,
        rowData = _ref.rowData;
    return React.createElement(Date, {
      dataKey: dataKey,
      item: rowData
    });
  };
});
//# sourceMappingURL=dateCellRenderer.js.map