/**
 * 
 * @file Content sub header component
 * @author Box
 */
import React from 'react';
import Sort from './Sort';
import Add from './Add';
import GridViewSlider from '../../../components/grid-view/GridViewSlider';
import ViewModeChangeButton from './ViewModeChangeButton';
import { VIEW_FOLDER, VIEW_MODE_GRID } from '../../../constants';
import './SubHeaderRight.scss';

var SubHeaderRight = function SubHeaderRight(_ref) {
  var canCreateNewFolder = _ref.canCreateNewFolder,
      canUpload = _ref.canUpload,
      currentCollection = _ref.currentCollection,
      gridColumnCount = _ref.gridColumnCount,
      gridMaxColumns = _ref.gridMaxColumns,
      gridMinColumns = _ref.gridMinColumns,
      maxGridColumnCountForWidth = _ref.maxGridColumnCountForWidth,
      onCreate = _ref.onCreate,
      onGridViewSliderChange = _ref.onGridViewSliderChange,
      onSortChange = _ref.onSortChange,
      onUpload = _ref.onUpload,
      onViewModeChange = _ref.onViewModeChange,
      view = _ref.view,
      viewMode = _ref.viewMode;
  var sortBy = currentCollection.sortBy,
      sortDirection = currentCollection.sortDirection,
      _currentCollection$it = currentCollection.items,
      items = _currentCollection$it === void 0 ? [] : _currentCollection$it;
  var hasGridView = !!gridColumnCount;
  var hasItems = items.length > 0;
  var isFolder = view === VIEW_FOLDER;
  var showSort = isFolder && hasItems;
  var showAdd = (!!canUpload || !!canCreateNewFolder) && isFolder;
  return React.createElement("div", {
    className: "be-sub-header-right"
  }, hasItems && viewMode === VIEW_MODE_GRID && React.createElement(GridViewSlider, {
    columnCount: gridColumnCount,
    gridMaxColumns: gridMaxColumns,
    gridMinColumns: gridMinColumns,
    maxColumnCount: maxGridColumnCountForWidth,
    onChange: onGridViewSliderChange
  }), hasItems && hasGridView && React.createElement(ViewModeChangeButton, {
    viewMode: viewMode,
    onViewModeChange: onViewModeChange
  }), showSort && !!sortBy && !!sortDirection && React.createElement(Sort, {
    onSortChange: onSortChange,
    sortBy: sortBy,
    sortDirection: sortDirection
  }), showAdd && React.createElement(Add, {
    isDisabled: !isFolder,
    onCreate: onCreate,
    onUpload: onUpload,
    showCreate: canCreateNewFolder,
    showUpload: canUpload
  }));
};

export default SubHeaderRight;
//# sourceMappingURL=SubHeaderRight.js.map