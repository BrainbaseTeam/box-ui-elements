/**
 * 
 * @file Function to render the icon table cell
 * @author Box
 */
import React from 'react';
import FileIcon from '../../../icons/file-icon/FileIcon';
import FolderIcon from '../../../icons/folder-icon/FolderIcon';
import BookmarkIcon from '../../../icons/bookmark-icon/BookmarkIcon';
import { TYPE_FOLDER, TYPE_FILE, TYPE_WEBLINK } from '../../../constants';
import './IconCell.scss';
export function getIcon(dimension, rowData) {
  var type = rowData.type,
      extension = rowData.extension,
      has_collaborations = rowData.has_collaborations,
      is_externally_owned = rowData.is_externally_owned;

  switch (type) {
    case TYPE_FOLDER:
      return /*#__PURE__*/React.createElement(FolderIcon, {
        dimension: dimension,
        isCollab: has_collaborations,
        isExternal: is_externally_owned
      });

    case TYPE_FILE:
      return /*#__PURE__*/React.createElement(FileIcon, {
        dimension: dimension,
        extension: extension
      });

    case TYPE_WEBLINK:
      return /*#__PURE__*/React.createElement(BookmarkIcon, {
        height: dimension,
        width: dimension
      });

    default:
      throw new Error('Unsupported item type!');
  }
}
export default (function () {
  var dimension = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
  return function (_ref) {
    var rowData = _ref.rowData;
    return /*#__PURE__*/React.createElement("div", {
      className: "be-item-icon"
    }, getIcon(dimension, rowData));
  };
});
//# sourceMappingURL=iconCellRenderer.js.map