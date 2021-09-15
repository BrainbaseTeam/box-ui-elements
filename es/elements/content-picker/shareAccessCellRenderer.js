/**
 * 
 * @file Function to render the share access table cell
 * @author Box
 */
import React from 'react';
import getProp from 'lodash/get';
import ShareAccessSelect from '../common/share-access-select';
import isRowSelectable from './cellRendererHelper';
import LoadingIndicator from '../../components/loading-indicator';
export default (function (onChange, canSetShareAccess, selectableType, extensionsWhitelist, hasHitSelectionLimit) {
  return function (_ref) {
    var rowData = _ref.rowData;
    var itemCanSetShareAccess = getProp(rowData, 'permissions.can_set_share_access', false);

    if (!canSetShareAccess || !itemCanSetShareAccess || !isRowSelectable(selectableType, extensionsWhitelist, hasHitSelectionLimit, rowData) || !rowData.selected) {
      return React.createElement("span", null);
    }

    var allowed_shared_link_access_levels = rowData.allowed_shared_link_access_levels;
    var isLoading = !allowed_shared_link_access_levels;
    return isLoading ? React.createElement(LoadingIndicator, {
      className: "bcp-share-access-loading"
    }) : React.createElement(ShareAccessSelect, {
      canSetShareAccess: canSetShareAccess,
      className: "bcp-shared-access-select",
      item: rowData,
      onChange: onChange
    });
  };
});
//# sourceMappingURL=shareAccessCellRenderer.js.map