import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import BookmarkIcon from '../../../icons/bookmark-icon';
import FileIcon from '../../../icons/file-icon';
import FolderIcon from '../../../icons/folder-icon';
import ItemTypes from '../item-types';
import { ItemTypePropType } from '../prop-types';
import messages from '../messages';

var ItemListIcon = function ItemListIcon(_ref) {
  var type = _ref.type,
      _ref$extension = _ref.extension,
      extension = _ref$extension === void 0 ? '' : _ref$extension,
      _ref$hasCollaboration = _ref.hasCollaborations,
      hasCollaborations = _ref$hasCollaboration === void 0 ? false : _ref$hasCollaboration,
      _ref$isExternallyOwne = _ref.isExternallyOwned,
      isExternallyOwned = _ref$isExternallyOwne === void 0 ? false : _ref$isExternallyOwne;

  switch (type) {
    case ItemTypes.FOLDER:
      {
        var titleID = 'personalFolder';

        if (hasCollaborations) {
          titleID = 'collaboratedFolder';
        } else if (isExternallyOwned) {
          titleID = 'externalFolder';
        }

        return /*#__PURE__*/React.createElement(FolderIcon, {
          isCollab: hasCollaborations,
          isExternal: isExternallyOwned,
          title: /*#__PURE__*/React.createElement(FormattedMessage, messages[titleID])
        });
      }

    case ItemTypes.FILE:
      return /*#__PURE__*/React.createElement(FileIcon, {
        extension: extension,
        title: /*#__PURE__*/React.createElement(FormattedMessage, messages.file)
      });

    case ItemTypes.BOOKMARK:
      return /*#__PURE__*/React.createElement(BookmarkIcon, {
        title: /*#__PURE__*/React.createElement(FormattedMessage, messages.bookmark)
      });

    default:
      // Use generic file icon as fallback
      return /*#__PURE__*/React.createElement(FileIcon, {
        title: /*#__PURE__*/React.createElement(FormattedMessage, messages.file)
      });
  }
};

ItemListIcon.propTypes = {
  type: ItemTypePropType,
  extension: PropTypes.string,
  hasCollaborations: PropTypes.bool,
  isExternallyOwned: PropTypes.bool
};
export default ItemListIcon;
//# sourceMappingURL=ItemListIcon.js.map