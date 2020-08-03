/**
 * 
 * @file Function to filter cells from being selected
 * @author Box
 */
import { TYPE_FILE } from '../../constants';

function isRowSelectable(selectableType, extensionsWhitelist, hasHitSelectionLimit, rowData) {
  var type = rowData.type,
      _rowData$extension = rowData.extension,
      extension = _rowData$extension === void 0 ? '' : _rowData$extension,
      selected = rowData.selected;
  var shouldAllowSelection = hasHitSelectionLimit ? !!selected : true;
  var isTypeSelectable = !!type && selectableType.indexOf(type) > -1;
  var isFilePicker = selectableType.indexOf(TYPE_FILE) > -1;
  var isExtensionWhitelisted = isFilePicker && extensionsWhitelist.length ? extensionsWhitelist.indexOf(extension) > -1 : true;
  return shouldAllowSelection && isTypeSelectable && isExtensionWhitelisted;
}

export default isRowSelectable;
//# sourceMappingURL=cellRendererHelper.js.map