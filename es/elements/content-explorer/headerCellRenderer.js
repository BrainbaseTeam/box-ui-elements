/**
 * 
 * @file Function to render the date table cell
 * @author Box
 */
import React from 'react';
import IconChevron from '../../icons/general/IconChevron';
import { SORT_ASC, COLOR_999 } from '../../constants';
import './headerCellRenderer.scss';
export default (function (_ref) {
  var dataKey = _ref.dataKey,
      label = _ref.label,
      sortBy = _ref.sortBy,
      sortDirection = _ref.sortDirection;
  var by = sortBy && sortBy.toLowerCase();
  var direction = sortDirection === SORT_ASC ? 'up' : 'down';
  return React.createElement("div", null, label, "\xA0\xA0", by === dataKey && React.createElement(IconChevron, {
    color: COLOR_999,
    direction: direction,
    size: "6px",
    thickness: "1px"
  }));
});
//# sourceMappingURL=headerCellRenderer.js.map