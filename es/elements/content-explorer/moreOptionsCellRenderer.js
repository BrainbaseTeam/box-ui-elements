/**
 * 
 * @file Function to render the date table cell
 * @author Box
 */
import React from 'react';
import MoreOptions from './MoreOptions';
export default (function (canPreview, canShare, canDownload, canDelete, canRename, onItemSelect, onItemDelete, onItemDownload, onItemRename, onItemShare, onItemPreview, onItemCustomShare, onItemMoveTo, onItemSetThumbnail, onItemRemoveThumbnail, isSmall) {
  return function (_ref) {
    var rowData = _ref.rowData;
    return /*#__PURE__*/React.createElement(MoreOptions, {
      canPreview: canPreview,
      canShare: canShare,
      canDownload: canDownload,
      canDelete: canDelete,
      canRename: canRename,
      onItemSelect: onItemSelect,
      onItemDelete: onItemDelete,
      onItemDownload: onItemDownload,
      onItemRename: onItemRename,
      onItemShare: onItemShare,
      onItemPreview: onItemPreview,
      onItemCustomShare: onItemCustomShare,
      onItemMoveTo: onItemMoveTo,
      onItemSetThumbnail: onItemSetThumbnail,
      onItemRemoveThumbnail: onItemRemoveThumbnail,
      isSmall: isSmall,
      item: rowData
    });
  };
});
//# sourceMappingURL=moreOptionsCellRenderer.js.map