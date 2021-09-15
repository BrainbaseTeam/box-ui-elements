/**
 * 
 * @file Function to render the name table cell
 * @author Box
 */
import React from 'react';
import Name from './Name';
export default (function (rootId, view, onItemClick, onItemSelect) {
  var canPreview = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var showDetails = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
  var isTouch = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  return function (_ref) {
    var rowData = _ref.rowData;
    return React.createElement(Name, {
      canPreview: canPreview,
      isTouch: isTouch,
      item: rowData,
      onItemClick: onItemClick,
      onItemSelect: onItemSelect,
      rootId: rootId,
      showDetails: showDetails,
      view: view
    });
  };
});
//# sourceMappingURL=nameCellRenderer.js.map