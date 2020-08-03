/**
 * 
 * @file Droppable area containing upload item list
 */
import React from 'react';
import makeDroppable from '../common/droppable';
import ItemList from './ItemList';
import UploadState from './UploadState';
import './DroppableContent.scss';

/**
 * Definition for drag and drop behavior.
 */
var dropDefinition = {
  /**
   * Validates whether a file can be dropped or not.
   */
  dropValidator: function dropValidator(_ref, _ref2) {
    var allowedTypes = _ref.allowedTypes;
    var types = _ref2.types;
    return Array.from(types).some(function (type) {
      return allowedTypes.indexOf(type) > -1;
    });
  },

  /**
   * Determines what happens after a file is dropped
   */
  onDrop: function onDrop(event, _ref3) {
    var addDataTransferItemsToUploadQueue = _ref3.addDataTransferItemsToUploadQueue;
    var items = event.dataTransfer.items;
    addDataTransferItemsToUploadQueue(items);
  }
};
var DroppableContent = makeDroppable(dropDefinition)(function (_ref4) {
  var canDrop = _ref4.canDrop,
      isOver = _ref4.isOver,
      isTouch = _ref4.isTouch,
      view = _ref4.view,
      items = _ref4.items,
      addFiles = _ref4.addFiles,
      onClick = _ref4.onClick,
      isFolderUploadEnabled = _ref4.isFolderUploadEnabled;

  var handleSelectFiles = function handleSelectFiles(_ref5) {
    var files = _ref5.target.files;
    return addFiles(files);
  };

  var hasItems = items.length > 0;
  return /*#__PURE__*/React.createElement("div", {
    className: "bcu-droppable-content"
  }, /*#__PURE__*/React.createElement(ItemList, {
    items: items,
    onClick: onClick,
    view: view
  }), /*#__PURE__*/React.createElement(UploadState, {
    canDrop: canDrop,
    hasItems: hasItems,
    isFolderUploadEnabled: isFolderUploadEnabled,
    isOver: isOver,
    isTouch: isTouch,
    onSelect: handleSelectFiles,
    view: view
  }));
});
export default DroppableContent;
//# sourceMappingURL=DroppableContent.js.map