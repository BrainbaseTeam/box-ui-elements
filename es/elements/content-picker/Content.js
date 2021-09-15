/**
 * 
 * @file File picker header and list component
 * @author Box
 */
import React from 'react';
import EmptyState from '../common/empty-state';
import ProgressBar from '../common/progress-bar';
import ItemList from './ItemList';
import { VIEW_ERROR, VIEW_SELECTED } from '../../constants';
import './Content.scss';

/**
 * Determines if we should show the empty state
 *
 * @param {string} view the current view
 * @param {Object} currentCollection the current collection
 * @return {boolean} empty or not
 */
function isEmpty(view, currentCollection) {
  var _currentCollection$it = currentCollection.items,
      items = _currentCollection$it === void 0 ? [] : _currentCollection$it;
  return view === VIEW_ERROR || items.length === 0;
}

var Content = function Content(_ref) {
  var view = _ref.view,
      rootId = _ref.rootId,
      isSmall = _ref.isSmall,
      rootElement = _ref.rootElement,
      focusedRow = _ref.focusedRow,
      hasHitSelectionLimit = _ref.hasHitSelectionLimit,
      selectableType = _ref.selectableType,
      currentCollection = _ref.currentCollection,
      tableRef = _ref.tableRef,
      canSetShareAccess = _ref.canSetShareAccess,
      isSingleSelect = _ref.isSingleSelect,
      onItemClick = _ref.onItemClick,
      onItemSelect = _ref.onItemSelect,
      onShareAccessChange = _ref.onShareAccessChange,
      onFocusChange = _ref.onFocusChange,
      extensionsWhitelist = _ref.extensionsWhitelist;
  return React.createElement("div", {
    className: "bcp-content"
  }, view === VIEW_ERROR || view === VIEW_SELECTED ? null : React.createElement(ProgressBar, {
    percent: currentCollection.percentLoaded
  }), isEmpty(view, currentCollection) ? React.createElement(EmptyState, {
    view: view,
    isLoading: currentCollection.percentLoaded !== 100
  }) : React.createElement(ItemList, {
    view: view,
    rootId: rootId,
    isSmall: isSmall,
    rootElement: rootElement,
    focusedRow: focusedRow,
    currentCollection: currentCollection,
    tableRef: tableRef,
    canSetShareAccess: canSetShareAccess,
    hasHitSelectionLimit: hasHitSelectionLimit,
    isSingleSelect: isSingleSelect,
    selectableType: selectableType,
    onItemSelect: onItemSelect,
    onItemClick: onItemClick,
    onFocusChange: onFocusChange,
    onShareAccessChange: onShareAccessChange,
    extensionsWhitelist: extensionsWhitelist
  }));
};

export default Content;
//# sourceMappingURL=Content.js.map