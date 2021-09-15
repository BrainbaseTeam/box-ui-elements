function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Function to render the checkbox or radio table cell
 * @author Box
 */
import React from 'react';
import Checkbox from '../../components/checkbox';
import RadioButton from '../../components/radio/RadioButton';
import isRowSelectable from './cellRendererHelper';
export default (function (onItemSelect, selectableType, extensionsWhitelist, hasHitSelectionLimit, isRadio) {
  return function (_ref) {
    var rowData = _ref.rowData;
    var _rowData$name = rowData.name,
        name = _rowData$name === void 0 ? '' : _rowData$name,
        _rowData$selected = rowData.selected,
        selected = _rowData$selected === void 0 ? false : _rowData$selected;
    var Component = isRadio ? RadioButton : Checkbox;

    if (!isRowSelectable(selectableType, extensionsWhitelist, hasHitSelectionLimit, rowData)) {
      return React.createElement("span", null);
    }

    return React.createElement(Component, _extends({
      hideLabel: true,
      label: name,
      name: name,
      onChange: function onChange() {
        return onItemSelect(rowData);
      },
      value: name
    }, _defineProperty({}, isRadio ? 'isSelected' : 'isChecked', selected)));
  };
});
//# sourceMappingURL=selectionCellRenderer.js.map