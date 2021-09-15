/**
 * 
 * @file Function to render the checkbox table cell
 * @author Box
 */
import React from 'react';
import Checkbox from '../../components/checkbox/Checkbox';
import isRowSelectable from './cellRendererHelper';
export default (function (onItemSelect, selectableType, extensionsWhitelist, hasHitSelectionLimit) {
  return function (_ref) {
    var rowData = _ref.rowData;
    var name = rowData.name,
        _rowData$selected = rowData.selected,
        selected = _rowData$selected === void 0 ? false : _rowData$selected;

    if (!isRowSelectable(selectableType, extensionsWhitelist, hasHitSelectionLimit, rowData)) {
      return React.createElement("span", null);
    }

    return React.createElement(Checkbox, {
      hideLabel: true,
      isChecked: selected,
      label: name,
      name: name,
      onChange: function onChange() {
        return onItemSelect(rowData);
      }
    });
  };
});
//# sourceMappingURL=checkboxCellRenderer.js.map