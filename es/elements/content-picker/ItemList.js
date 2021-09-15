/**
 * 
 * @file Item list component
 * @author Box
 */
import React from 'react';
import classNames from 'classnames';
import { Table, Column } from 'react-virtualized/dist/es/Table';
import AutoSizer from 'react-virtualized/dist/es/AutoSizer';
import KeyBinder from '../common/KeyBinder';
import nameCellRenderer from '../common/item/nameCellRenderer';
import iconCellRenderer from '../common/item/iconCellRenderer';
import { isFocusableElement, focus } from '../../utils/dom';
import shareAccessCellRenderer from './shareAccessCellRenderer';
import selectionCellRenderer from './selectionCellRenderer';
import isRowSelectable from './cellRendererHelper';
import { VIEW_SELECTED, FIELD_NAME, FIELD_ID, FIELD_SHARED_LINK, TYPE_FOLDER } from '../../constants';
import 'react-virtualized/styles.css';
import './ItemList.scss';

var ItemList = function ItemList(_ref) {
  var view = _ref.view,
      rootId = _ref.rootId,
      isSmall = _ref.isSmall,
      rootElement = _ref.rootElement,
      focusedRow = _ref.focusedRow,
      selectableType = _ref.selectableType,
      canSetShareAccess = _ref.canSetShareAccess,
      hasHitSelectionLimit = _ref.hasHitSelectionLimit,
      isSingleSelect = _ref.isSingleSelect,
      extensionsWhitelist = _ref.extensionsWhitelist,
      onItemSelect = _ref.onItemSelect,
      onItemClick = _ref.onItemClick,
      onShareAccessChange = _ref.onShareAccessChange,
      onFocusChange = _ref.onFocusChange,
      currentCollection = _ref.currentCollection,
      tableRef = _ref.tableRef;
  var iconCell = iconCellRenderer();
  var nameCell = nameCellRenderer(rootId, view, onItemClick);
  var selectionCell = selectionCellRenderer(onItemSelect, selectableType, extensionsWhitelist, hasHitSelectionLimit, isSingleSelect);
  var shareAccessCell = shareAccessCellRenderer(onShareAccessChange, canSetShareAccess, selectableType, extensionsWhitelist, hasHitSelectionLimit);
  var id = currentCollection.id,
      _currentCollection$it = currentCollection.items,
      items = _currentCollection$it === void 0 ? [] : _currentCollection$it;
  var rowCount = items.length;

  var rowClassName = function rowClassName(_ref2) {
    var index = _ref2.index;

    if (index === -1) {
      return '';
    }

    var _items$index = items[index],
        selected = _items$index.selected,
        type = _items$index.type;
    var isSelectable = isRowSelectable(selectableType, extensionsWhitelist, hasHitSelectionLimit, items[index]);
    return classNames("bcp-item-row bcp-item-row-".concat(index), {
      'bcp-item-row-selected': selected && view !== VIEW_SELECTED,
      'bcp-item-row-unselectable': type !== TYPE_FOLDER && !isSelectable // folder row should never dim

    });
  };

  var onRowClick = function onRowClick(_ref3) {
    var event = _ref3.event,
        rowData = _ref3.rowData,
        index = _ref3.index;

    // If the click is happening on a clickable element on the item row, ignore row selection
    if (isRowSelectable(selectableType, extensionsWhitelist, hasHitSelectionLimit, rowData) && !isFocusableElement(event.target)) {
      onItemSelect(rowData);
    } else {
      onFocusChange(index);
    }
  };

  return React.createElement(KeyBinder, {
    columnCount: 1,
    rowCount: rowCount,
    className: "bcp-item-grid",
    id: id,
    items: items,
    onSelect: onItemSelect,
    onOpen: onItemClick,
    scrollToRow: focusedRow,
    onScrollToChange: function onScrollToChange(_ref4) {
      var scrollToRow = _ref4.scrollToRow;
      return focus(rootElement, ".bcp-item-row-".concat(scrollToRow));
    }
  }, function (_ref5) {
    var onSectionRendered = _ref5.onSectionRendered,
        scrollToRow = _ref5.scrollToRow,
        focusOnRender = _ref5.focusOnRender;
    return React.createElement(AutoSizer, null, function (_ref6) {
      var width = _ref6.width,
          height = _ref6.height;
      return React.createElement(Table, {
        width: width,
        height: height,
        disableHeader: true,
        headerHeight: 0,
        rowHeight: isSmall ? 70 : 50,
        rowCount: rowCount,
        rowGetter: function rowGetter(_ref7) {
          var index = _ref7.index;
          return items[index];
        },
        ref: tableRef,
        rowClassName: rowClassName,
        onRowClick: onRowClick,
        scrollToIndex: scrollToRow,
        onRowsRendered: function onRowsRendered(_ref8) {
          var startIndex = _ref8.startIndex,
              stopIndex = _ref8.stopIndex;
          onSectionRendered({
            rowStartIndex: startIndex,
            rowStopIndex: stopIndex
          });

          if (focusOnRender) {
            focus(rootElement, ".bcp-item-row-".concat(scrollToRow));
          }
        }
      }, React.createElement(Column, {
        dataKey: FIELD_ID,
        cellRenderer: iconCell,
        width: isSmall ? 30 : 50,
        flexShrink: 0
      }), React.createElement(Column, {
        dataKey: FIELD_NAME,
        cellRenderer: nameCell,
        width: 300,
        flexGrow: 1
      }), isSmall ? null : React.createElement(Column, {
        dataKey: FIELD_SHARED_LINK,
        cellRenderer: shareAccessCell,
        width: 260,
        flexShrink: 0
      }), React.createElement(Column, {
        dataKey: FIELD_ID,
        cellRenderer: selectionCell,
        width: isSmall ? 20 : 30,
        flexShrink: 0
      }));
    });
  });
};

export default ItemList;
//# sourceMappingURL=ItemList.js.map