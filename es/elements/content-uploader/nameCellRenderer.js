function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Function to render the name table cell
 */
import React from 'react';
import IconName from './IconName';
export default (function (isResumableUploadsEnabled) {
  return function (_ref) {
    var rowData = _ref.rowData;
    return React.createElement(IconName, _extends({
      isResumableUploadsEnabled: isResumableUploadsEnabled
    }, rowData));
  };
});
//# sourceMappingURL=nameCellRenderer.js.map