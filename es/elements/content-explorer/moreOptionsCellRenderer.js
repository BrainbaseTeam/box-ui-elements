/**
 * 
 * @file Function to render the date table cell
 * @author Box
 */
import React from 'react';
import Checkbox from '../../components/checkbox';
import MoreOptions from './MoreOptions';
import { PERMISSION_CAN_DOWNLOAD } from '../../constants';
export default (function (canPreview, canShare, canDownload, canDelete, canRename, onItemSelect, onItemDelete, onItemDownload, onItemPick, onItemRename, onItemShare, onItemPreview, onItemCustomShare, onItemMoveTo, onItemCopy, onItemSetThumbnail, onItemRemoveThumbnail, isSmall) {
  return function (_ref) {
    var rowData = _ref.rowData;
    var _rowData$name = rowData.name,
        name = _rowData$name === void 0 ? '' : _rowData$name,
        _rowData$picked = rowData.picked,
        picked = _rowData$picked === void 0 ? false : _rowData$picked,
        permissions = rowData.permissions;
    var allowDownload = permissions[PERMISSION_CAN_DOWNLOAD];
    return /*#__PURE__*/React.createElement("div", {
      className: "bce-item-coloumn-moreoptions-wrapper"
    }, /*#__PURE__*/React.createElement(MoreOptions, {
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
      onItemCopy: onItemCopy,
      onItemSetThumbnail: onItemSetThumbnail,
      onItemRemoveThumbnail: onItemRemoveThumbnail,
      isSmall: isSmall,
      item: rowData
    }), allowDownload && /*#__PURE__*/React.createElement(Checkbox, {
      hideLabel: true,
      label: name,
      name: name,
      onChange: function onChange() {
        return onItemPick(rowData);
      },
      value: name,
      isChecked: picked
    }));
  };
});
//# sourceMappingURL=moreOptionsCellRenderer.js.map