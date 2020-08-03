import PropTypes from 'prop-types';
import ContentExplorerModes from './modes';
import ItemTypes from './item-types';
var ContentExplorerModePropType = PropTypes.oneOf([ContentExplorerModes.SELECT_FILE, ContentExplorerModes.SELECT_FOLDER, ContentExplorerModes.MOVE_COPY, ContentExplorerModes.MULTI_SELECT]);
var FolderPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
});
var FoldersPathPropType = PropTypes.arrayOf(FolderPropType);
var ItemTypePropType = PropTypes.oneOf([ItemTypes.FILE, ItemTypes.FOLDER, ItemTypes.BOOKMARK]);
var ItemPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  type: ItemTypePropType,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  extension: PropTypes.string,
  hasCollaborations: PropTypes.bool,
  isExternallyOwned: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isActionDisabled: PropTypes.bool
});
var PlaceholderPropType = PropTypes.shape({
  isLoading: PropTypes.bool.isRequired,
  loadingPlaceholderColumnWidths: PropTypes.arrayOf(PropTypes.string)
});
var ItemOrPlaceholderPropType = PropTypes.oneOfType([ItemPropType, PlaceholderPropType]);
var ItemsPropType = PropTypes.arrayOf(ItemOrPlaceholderPropType);
var ItemsMapPropType = PropTypes.objectOf(ItemPropType);
export { ContentExplorerModePropType, FolderPropType, FoldersPathPropType, ItemTypePropType, ItemPropType, ItemsPropType, ItemsMapPropType };
//# sourceMappingURL=prop-types.js.map