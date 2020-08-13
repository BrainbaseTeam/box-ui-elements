/**
 * 
 * @file Item list component
 * @author Box
 */
import React from 'react';
import classNames from 'classnames';
import { injectIntl } from 'react-intl';
import { Table, Column } from 'react-virtualized/dist/es/Table';
import AutoSizer from 'react-virtualized/dist/es/AutoSizer';
import KeyBinder from '../common/KeyBinder';
import nameCellRenderer from '../common/item/nameCellRenderer';
import iconCellRenderer from '../common/item/iconCellRenderer';
import { focus } from '../../utils/dom';
import messages from '../common/messages';
import headerCellRenderer from './headerCellRenderer';
import sizeCellRenderer from './sizeCellRenderer';
import dateCellRenderer from './dateCellRenderer';
import moreOptionsCellRenderer from './moreOptionsCellRenderer';
import selectionCellRenderer from './selectionCellRenderer';
import { FIELD_DATE, FIELD_ID, FIELD_NAME, FIELD_SIZE, VIEW_FOLDER, VIEW_RECENTS } from '../../constants';
import './ItemList.scss';

var ItemList = function ItemList(_ref) {
  var view = _ref.view,
      isSmall = _ref.isSmall,
      isMedium = _ref.isMedium,
      isTouch = _ref.isTouch,
      rootId = _ref.rootId,
      rootElement = _ref.rootElement,
      canShare = _ref.canShare,
      canDownload = _ref.canDownload,
      canDelete = _ref.canDelete,
      canPreview = _ref.canPreview,
      canRename = _ref.canRename,
      onItemClick = _ref.onItemClick,
      onItemSelect = _ref.onItemSelect,
      onItemPick = _ref.onItemPick,
      onItemDelete = _ref.onItemDelete,
      onItemDownload = _ref.onItemDownload,
      onItemRename = _ref.onItemRename,
      onItemShare = _ref.onItemShare,
      onItemPreview = _ref.onItemPreview,
      onItemCustomShare = _ref.onItemCustomShare,
      onItemMoveTo = _ref.onItemMoveTo,
      onItemSetThumbnail = _ref.onItemSetThumbnail,
      onItemRemoveThumbnail = _ref.onItemRemoveThumbnail,
      onSortChange = _ref.onSortChange,
      currentCollection = _ref.currentCollection,
      tableRef = _ref.tableRef,
      focusedRow = _ref.focusedRow,
      intl = _ref.intl;
  var nameCell = nameCellRenderer(rootId, view, onItemClick, onItemSelect, canPreview, isSmall, // shows details if false
  isTouch);
  var selectionCell = selectionCellRenderer(onItemPick);
  var iconCell = iconCellRenderer();
  var dateCell = dateCellRenderer();
  var sizeAccessCell = sizeCellRenderer();
  var moreOptionsCell = moreOptionsCellRenderer(canPreview, canShare, canDownload, canDelete, canRename, onItemSelect, onItemDelete, onItemDownload, onItemRename, onItemShare, onItemPreview, onItemCustomShare, onItemMoveTo, onItemSetThumbnail, onItemRemoveThumbnail, isSmall);
  var isRecents = view === VIEW_RECENTS;
  var hasSort = view === VIEW_FOLDER;
  var id = currentCollection.id,
      _currentCollection$it = currentCollection.items,
      items = _currentCollection$it === void 0 ? [] : _currentCollection$it,
      sortBy = currentCollection.sortBy,
      sortDirection = currentCollection.sortDirection;
  var rowCount = items.length;

  var rowClassName = function rowClassName(_ref2) {
    var index = _ref2.index;

    if (index === -1) {
      return 'bce-item-header-row';
    }

    var selected = items[index].selected;
    return classNames("bce-item-row bce-item-row-".concat(index), {
      'bce-item-row-selected': selected
    });
  };

  var sort = function sort(_ref3) {
    var by = _ref3.sortBy,
        direction = _ref3.sortDirection;
    onSortChange(by, direction);
  };

  return /*#__PURE__*/React.createElement(KeyBinder, {
    id: id,
    items: items,
    columnCount: 1,
    rowCount: rowCount,
    className: "bce-item-grid",
    onRename: onItemRename,
    onShare: onItemShare,
    onDownload: onItemDownload,
    onOpen: onItemClick,
    onSelect: onItemSelect,
    onDelete: onItemDelete,
    scrollToRow: focusedRow,
    onScrollToChange: function onScrollToChange(_ref4) {
      var scrollToRow = _ref4.scrollToRow;
      return focus(rootElement, ".bce-item-row-".concat(scrollToRow));
    }
  }, function (_ref5) {
    var onSectionRendered = _ref5.onSectionRendered,
        scrollToRow = _ref5.scrollToRow,
        focusOnRender = _ref5.focusOnRender;
    return /*#__PURE__*/React.createElement(AutoSizer, null, function (_ref6) {
      var width = _ref6.width,
          height = _ref6.height;
      return /*#__PURE__*/React.createElement(Table, {
        width: width,
        height: height,
        headerHeight: isSmall ? 0 : 40,
        rowHeight: 50,
        rowCount: rowCount,
        rowGetter: function rowGetter(_ref7) {
          var index = _ref7.index;
          return items[index];
        },
        ref: tableRef,
        rowClassName: rowClassName,
        scrollToIndex: scrollToRow,
        sort: sort,
        sortBy: sortBy,
        sortDirection: sortDirection,
        onRowClick: function onRowClick(_ref8) {
          var rowData = _ref8.rowData;
          return onItemSelect(rowData);
        },
        onRowsRendered: function onRowsRendered(_ref9) {
          var startIndex = _ref9.startIndex,
              stopIndex = _ref9.stopIndex;
          onSectionRendered({
            rowStartIndex: startIndex,
            rowStopIndex: stopIndex
          });

          if (focusOnRender) {
            focus(rootElement, ".bce-item-row-".concat(scrollToRow));
          }
        }
      }, /*#__PURE__*/React.createElement(Column, {
        disableSort: true,
        dataKey: FIELD_ID,
        cellRenderer: iconCell,
        width: isSmall ? 30 : 50,
        flexShrink: 0
      }), /*#__PURE__*/React.createElement(Column, {
        disableSort: !hasSort,
        label: intl.formatMessage(messages.name),
        dataKey: FIELD_NAME,
        cellRenderer: nameCell,
        headerRenderer: headerCellRenderer,
        width: 300,
        flexGrow: 1
      }), isSmall ? null : /*#__PURE__*/React.createElement(Column, {
        className: "bce-item-coloumn",
        disableSort: !hasSort,
        label: isRecents ? intl.formatMessage(messages.interacted) : intl.formatMessage(messages.modified),
        dataKey: FIELD_DATE,
        cellRenderer: dateCell,
        headerRenderer: headerCellRenderer,
        width: isRecents ? 120 : 300,
        flexGrow: 1
      }), isSmall || isMedium ? null : /*#__PURE__*/React.createElement(Column, {
        className: "bce-item-coloumn",
        disableSort: !hasSort,
        label: intl.formatMessage(messages.size),
        dataKey: FIELD_SIZE,
        cellRenderer: sizeAccessCell,
        headerRenderer: headerCellRenderer,
        width: 80,
        flexShrink: 0
      }), /*#__PURE__*/React.createElement(Column, {
        disableSort: true,
        dataKey: FIELD_ID,
        cellRenderer: moreOptionsCell,
        width: isSmall || !canShare ? 58 : 140,
        flexShrink: 0
      }), /*#__PURE__*/React.createElement(Column, {
        dataKey: FIELD_ID,
        cellRenderer: selectionCell,
        width: isSmall ? 20 : 30,
        flexShrink: 0
      }));
    });
  });
};

export default injectIntl(ItemList);
//# sourceMappingURL=ItemList.js.map