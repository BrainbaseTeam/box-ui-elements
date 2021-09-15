function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import noop from 'lodash/noop';
import classNames from 'classnames';
import { Column } from 'react-virtualized/dist/es/Table/index';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { bdlGray } from '../../styles/variables';
import IconDrag from '../../icons/general/IconDrag';
import { draggableRowRenderer } from '../virtualized-table-renderers';
import { VIRTUALIZED_TABLE_DEFAULTS } from './constants';
import VirtualizedTable from './VirtualizedTable';
import './DraggableVirtualizedTable.scss';
var HEADER_HEIGHT = VIRTUALIZED_TABLE_DEFAULTS.HEADER_HEIGHT,
    ROW_HEIGHT = VIRTUALIZED_TABLE_DEFAULTS.ROW_HEIGHT;
var ICON_SIZE = 24;

var DraggableVirtualizedTable = function DraggableVirtualizedTable(_ref) {
  var children = _ref.children,
      className = _ref.className,
      onDragEnd = _ref.onDragEnd,
      rowData = _ref.rowData,
      shouldShowDragHandle = _ref.shouldShowDragHandle,
      tableId = _ref.tableId,
      rest = _objectWithoutProperties(_ref, ["children", "className", "onDragEnd", "rowData", "shouldShowDragHandle", "tableId"]);

  var tableClassName = classNames('bdl-DraggableVirtualizedTable', className);

  var draggableCellRenderer = function draggableCellRenderer() {
    return React.createElement(IconDrag, {
      color: bdlGray,
      height: ICON_SIZE,
      width: ICON_SIZE
    });
  }; // Virtualized table's performance optimizations can not be used here since
  // all rows need to be rendered in order for drag and drop to work properly.
  // From a UX perspective, it also doesn't make sense to have drag and drop on
  // very large tables that actually require optimizations, so this component
  // always forces the table to be tall enough to fit all rows


  var tableHeight = rowData.length * ROW_HEIGHT + HEADER_HEIGHT;

  var handleDragEnd = function handleDragEnd(_ref2) {
    var destination = _ref2.destination,
        source = _ref2.source;
    var destinationIndex = destination ? destination.index : source.index;
    return onDragEnd(source.index, destinationIndex);
  };

  return React.createElement(DragDropContext, {
    onDragEnd: handleDragEnd
  }, React.createElement(Droppable, {
    droppableId: tableId
  }, function (droppableProvided) {
    return React.createElement("div", {
      ref: droppableProvided.innerRef
    }, React.createElement(VirtualizedTable, _extends({}, rest, {
      className: tableClassName,
      rowRenderer: draggableRowRenderer,
      height: tableHeight,
      rowData: rowData
    }), shouldShowDragHandle && React.createElement(Column, {
      cellRenderer: draggableCellRenderer,
      className: "bdl-DraggableVirtualizedTable-dragHandleColumn",
      dataKey: "dragHandle",
      disableSort: true,
      flexGrow: 0,
      headerClassName: "bdl-DraggableVirtualizedTable-dragHandleColumn",
      width: ICON_SIZE
    }), children));
  }));
};

DraggableVirtualizedTable.displayName = 'DraggableVirtualizedTable';
DraggableVirtualizedTable.defaultProps = {
  onDragEnd: noop,
  shouldShowDragHandle: true
};
export default DraggableVirtualizedTable;
//# sourceMappingURL=DraggableVirtualizedTable.js.map