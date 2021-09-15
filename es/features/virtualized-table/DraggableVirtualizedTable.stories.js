function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as React from 'react';
import isNil from 'lodash/isNil';
import { Column } from 'react-virtualized/dist/es/Table/index';
import { boolean } from '@storybook/addon-knobs';
import { baseCellRenderer } from '../virtualized-table-renderers';
import notes from './DraggableVirtualizedTable.stories.md';
import DraggableVirtualizedTable from './DraggableVirtualizedTable';
export var Basic = function Basic() {
  var initialRowData = [{
    id: '1',
    name: 'Product A',
    description: 'Product Description A',
    price: 4.99
  }, {
    id: '2',
    name: 'Product B',
    description: 'Product Description B',
    price: 2.99
  }, {
    id: '3',
    name: 'Product C',
    description: 'Product Description C',
    price: 3.99
  }, {
    id: '4',
    name: 'Product D',
    description: 'Product Description D',
    price: 1.99
  }];

  var _React$useState = React.useState(initialRowData),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      rowData = _React$useState2[0],
      setRowData = _React$useState2[1];

  var onDragEnd = function onDragEnd(sourceIndex, destinationIndex) {
    if (isNil(destinationIndex) || destinationIndex < 0) {
      return;
    }

    var reorderedItems = _toConsumableArray(rowData);

    var _reorderedItems$splic = reorderedItems.splice(sourceIndex, 1),
        _reorderedItems$splic2 = _slicedToArray(_reorderedItems$splic, 1),
        removedItem = _reorderedItems$splic2[0];

    reorderedItems.splice(destinationIndex, 0, removedItem);
    setRowData(reorderedItems);
  };

  return React.createElement(DraggableVirtualizedTable, {
    tableId: "tableId",
    onDragEnd: onDragEnd,
    rowData: rowData,
    shouldShowDragHandle: boolean('shouldShowDragHandle', true)
  }, React.createElement(Column, {
    cellRenderer: baseCellRenderer,
    dataKey: "name",
    disableSort: true,
    flexGrow: 1,
    label: "Name",
    width: 1
  }), React.createElement(Column, {
    cellRenderer: baseCellRenderer,
    dataKey: "description",
    disableSort: true,
    flexGrow: 1,
    label: "Description",
    width: 1
  }), React.createElement(Column, {
    cellRenderer: baseCellRenderer,
    dataKey: "price",
    disableSort: true,
    flexGrow: 1,
    label: "Price",
    width: 1
  }));
};
export default {
  title: 'Features|DraggableVirtualizedTable',
  component: DraggableVirtualizedTable,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=DraggableVirtualizedTable.stories.js.map