function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Function to render the action table cell
 */
import React from 'react';
import ItemAction from './ItemAction';
export default (function (isResumableUploadsEnabled, _onClick) {
  return function (_ref) {
    var rowData = _ref.rowData;
    return React.createElement(ItemAction, _extends({}, rowData, {
      isResumableUploadsEnabled: isResumableUploadsEnabled,
      onClick: function onClick() {
        return _onClick(rowData);
      }
    }));
  };
});
//# sourceMappingURL=actionCellRenderer.js.map