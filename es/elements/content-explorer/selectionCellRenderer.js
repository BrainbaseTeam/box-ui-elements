/**
 * 
 * @file Function to render the checkbox or radio table cell
 * @author Box
 */
import React from 'react';
import Checkbox from '../../components/checkbox';
import { PERMISSION_CAN_DOWNLOAD } from '../../constants';
export default (function (onItemPick) {
  return function (_ref) {
    var rowData = _ref.rowData;
    var _rowData$name = rowData.name,
        name = _rowData$name === void 0 ? '' : _rowData$name,
        _rowData$picked = rowData.picked,
        picked = _rowData$picked === void 0 ? false : _rowData$picked,
        permissions = rowData.permissions;
    var allowDownload = permissions[PERMISSION_CAN_DOWNLOAD];
    return React.createElement("div", null, allowDownload && React.createElement(Checkbox, {
      hideLabel: true,
      label: name,
      name: name,
      onChange: function onChange() {
        return onItemPick(rowData);
      },
      value: name,
      isChecked: picked
    }));
  };
});
//# sourceMappingURL=selectionCellRenderer.js.map