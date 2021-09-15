/**
 * 
 * @file Item list component
 */
import React from 'react';
import noop from 'lodash/noop';
import { Table, Column } from 'react-virtualized/dist/es/Table';
import AutoSizer from 'react-virtualized/dist/es/AutoSizer';
import nameCellRenderer from './nameCellRenderer';
import progressCellRenderer from './progressCellRenderer';
import actionCellRenderer from './actionCellRenderer';
import removeCellRenderer from './removeCellRenderer';
import 'react-virtualized/styles.css';
import './ItemList.scss';

var ItemList = function ItemList(_ref) {
  var _ref$isResumableUploa = _ref.isResumableUploadsEnabled,
      isResumableUploadsEnabled = _ref$isResumableUploa === void 0 ? false : _ref$isResumableUploa,
      items = _ref.items,
      onClick = _ref.onClick,
      _ref$onRemoveClick = _ref.onRemoveClick,
      onRemoveClick = _ref$onRemoveClick === void 0 ? noop : _ref$onRemoveClick;
  return React.createElement(AutoSizer, null, function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    var nameCell = nameCellRenderer(isResumableUploadsEnabled);
    var progressCell = progressCellRenderer();
    var actionCell = actionCellRenderer(isResumableUploadsEnabled, onClick);
    var removeCell = removeCellRenderer(onRemoveClick);
    return React.createElement(Table, {
      className: "bcu-item-list",
      disableHeader: true,
      headerHeight: 0,
      height: height,
      rowClassName: "bcu-item-row",
      rowCount: items.length,
      rowGetter: function rowGetter(_ref3) {
        var index = _ref3.index;
        return items[index];
      },
      rowHeight: 50,
      width: width
    }, React.createElement(Column, {
      cellRenderer: nameCell,
      dataKey: "name",
      flexGrow: 1,
      flexShrink: 1,
      width: 300
    }), React.createElement(Column, {
      cellRenderer: progressCell,
      dataKey: "progress",
      flexGrow: 1,
      flexShrink: 1,
      style: {
        textAlign: 'right'
      },
      width: 300
    }), React.createElement(Column, {
      className: isResumableUploadsEnabled ? '' : 'bcu-item-list-action-column',
      cellRenderer: actionCell,
      dataKey: "status",
      flexShrink: 0,
      width: 25
    }), isResumableUploadsEnabled && React.createElement(Column, {
      className: "bcu-item-list-action-column",
      cellRenderer: removeCell,
      dataKey: "remove",
      flexShrink: 0,
      width: 25
    }));
  });
};

export default ItemList;
//# sourceMappingURL=ItemList.js.map