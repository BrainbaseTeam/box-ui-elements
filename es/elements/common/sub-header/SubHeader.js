/**
 * 
 * @file Content sub header component
 * @author Box
 */
import React from 'react';
import noop from 'lodash/noop';
import SubHeaderLeft from './SubHeaderLeft';
import SubHeaderRight from './SubHeaderRight';
import { VIEW_MODE_LIST } from '../../../constants';
import './SubHeader.scss';

var SubHeader = function SubHeader(_ref) {
  var canCreateNewFolder = _ref.canCreateNewFolder,
      canUpload = _ref.canUpload,
      currentCollection = _ref.currentCollection,
      _ref$gridColumnCount = _ref.gridColumnCount,
      gridColumnCount = _ref$gridColumnCount === void 0 ? 0 : _ref$gridColumnCount,
      _ref$gridMaxColumns = _ref.gridMaxColumns,
      gridMaxColumns = _ref$gridMaxColumns === void 0 ? 0 : _ref$gridMaxColumns,
      _ref$gridMinColumns = _ref.gridMinColumns,
      gridMinColumns = _ref$gridMinColumns === void 0 ? 0 : _ref$gridMinColumns,
      _ref$maxGridColumnCou = _ref.maxGridColumnCountForWidth,
      maxGridColumnCountForWidth = _ref$maxGridColumnCou === void 0 ? 0 : _ref$maxGridColumnCou,
      _ref$onGridViewSlider = _ref.onGridViewSliderChange,
      onGridViewSliderChange = _ref$onGridViewSlider === void 0 ? noop : _ref$onGridViewSlider,
      isSmall = _ref.isSmall,
      onCreate = _ref.onCreate,
      onItemClick = _ref.onItemClick,
      onSortChange = _ref.onSortChange,
      onUpload = _ref.onUpload,
      onViewModeChange = _ref.onViewModeChange,
      rootId = _ref.rootId,
      rootName = _ref.rootName,
      view = _ref.view,
      _ref$viewMode = _ref.viewMode,
      viewMode = _ref$viewMode === void 0 ? VIEW_MODE_LIST : _ref$viewMode;
  return React.createElement("div", {
    className: "be-sub-header",
    "data-testid": "be-sub-header"
  }, React.createElement(SubHeaderLeft, {
    currentCollection: currentCollection,
    isSmall: isSmall,
    onItemClick: onItemClick,
    rootId: rootId,
    rootName: rootName,
    view: view
  }), React.createElement(SubHeaderRight, {
    canCreateNewFolder: canCreateNewFolder,
    canUpload: canUpload,
    currentCollection: currentCollection,
    gridColumnCount: gridColumnCount,
    gridMaxColumns: gridMaxColumns,
    gridMinColumns: gridMinColumns,
    maxGridColumnCountForWidth: maxGridColumnCountForWidth,
    onCreate: onCreate,
    onGridViewSliderChange: onGridViewSliderChange,
    onSortChange: onSortChange,
    onUpload: onUpload,
    onViewModeChange: onViewModeChange,
    view: view,
    viewMode: viewMode
  }));
};

export default SubHeader;
//# sourceMappingURL=SubHeader.js.map