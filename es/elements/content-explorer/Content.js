function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file File picker header and list component
 * @author Box
 */
import React from 'react';
import EmptyState from '../common/empty-state';
import ProgressBar from '../common/progress-bar';
import ItemGrid from './ItemGrid';
import ItemList from './ItemList';
import MetadataBasedItemList from '../../features/metadata-based-view';
import { VIEW_ERROR, VIEW_METADATA, VIEW_MODE_LIST, VIEW_MODE_GRID, VIEW_SELECTED } from '../../constants';
import './Content.scss';
/**
 * Determines if we should show the empty state
 *
 * @param {string} view the current view
 * @param {Object} currentCollection the current collection
 * @param {FieldsToShow} fieldsToShow list of metadata template fields to show
 * @return {boolean} empty or not
 */

function isEmpty(view, currentCollection, fieldsToShow) {
  var _currentCollection$it = currentCollection.items,
      items = _currentCollection$it === void 0 ? [] : _currentCollection$it;
  return view === VIEW_ERROR || !items.length || view === VIEW_METADATA && !fieldsToShow.length;
}

var Content = function Content(_ref) {
  var currentCollection = _ref.currentCollection,
      focusedRow = _ref.focusedRow,
      _ref$gridColumnCount = _ref.gridColumnCount,
      gridColumnCount = _ref$gridColumnCount === void 0 ? 1 : _ref$gridColumnCount,
      isMedium = _ref.isMedium,
      onSortChange = _ref.onSortChange,
      tableRef = _ref.tableRef,
      view = _ref.view,
      _ref$viewMode = _ref.viewMode,
      viewMode = _ref$viewMode === void 0 ? VIEW_MODE_LIST : _ref$viewMode,
      _ref$fieldsToShow = _ref.fieldsToShow,
      fieldsToShow = _ref$fieldsToShow === void 0 ? [] : _ref$fieldsToShow,
      rest = _objectWithoutProperties(_ref, ["currentCollection", "focusedRow", "gridColumnCount", "isMedium", "onSortChange", "tableRef", "view", "viewMode", "fieldsToShow"]);

  var isViewEmpty = isEmpty(view, currentCollection, fieldsToShow);
  var isMetadataBasedView = view === VIEW_METADATA;
  var isListView = !isMetadataBasedView && viewMode === VIEW_MODE_LIST; // Folder view or Recents view

  var isGridView = !isMetadataBasedView && viewMode === VIEW_MODE_GRID; // Folder view or Recents view

  return React.createElement("div", {
    className: "bce-content"
  }, view === VIEW_ERROR || view === VIEW_SELECTED ? null : React.createElement(ProgressBar, {
    percent: currentCollection.percentLoaded
  }), isViewEmpty && React.createElement(EmptyState, {
    view: view,
    isLoading: currentCollection.percentLoaded !== 100
  }), !isViewEmpty && isMetadataBasedView && React.createElement(MetadataBasedItemList, _extends({
    currentCollection: currentCollection,
    fieldsToShow: fieldsToShow
  }, rest)), !isViewEmpty && isListView && React.createElement(ItemList, _extends({
    currentCollection: currentCollection,
    onSortChange: onSortChange,
    focusedRow: focusedRow,
    isMedium: isMedium,
    tableRef: tableRef,
    view: view
  }, rest)), !isViewEmpty && isGridView && React.createElement(ItemGrid, _extends({
    currentCollection: currentCollection,
    gridColumnCount: gridColumnCount,
    view: view
  }, rest)));
};

export default Content;
//# sourceMappingURL=Content.js.map