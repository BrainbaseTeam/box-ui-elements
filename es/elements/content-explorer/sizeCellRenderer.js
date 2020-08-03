/**
 * 
 * @file Function to render the date table cell
 * @author Box
 */
import React from 'react';
import getSize from '../../utils/size';
export default (function () {
  return function (_ref) {
    var cellData = _ref.cellData;
    return /*#__PURE__*/React.createElement("span", null, getSize(cellData));
  };
});
//# sourceMappingURL=sizeCellRenderer.js.map