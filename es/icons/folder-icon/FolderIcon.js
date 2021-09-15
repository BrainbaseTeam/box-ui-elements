import * as React from 'react';
import IconFolderCollab from '../../icon/content/FolderShared32';
import IconFolderExternal from '../../icon/content/FolderExternal32';
import IconFolderPersonal from '../../icon/content/FolderPersonal32';
import IconFolderCustom from '../folder/IconFolderCustom';

var FolderIcon = function FolderIcon(_ref) {
  var _ref$dimension = _ref.dimension,
      dimension = _ref$dimension === void 0 ? 32 : _ref$dimension,
      _ref$isCollab = _ref.isCollab,
      isCollab = _ref$isCollab === void 0 ? false : _ref$isCollab,
      _ref$isExternal = _ref.isExternal,
      isExternal = _ref$isExternal === void 0 ? false : _ref$isExternal,
      title = _ref.title,
      thumbnailUrl = _ref.thumbnailUrl;

  // Display our own custom thumbnail
  if (thumbnailUrl) {
    return React.createElement(IconFolderCustom, {
      height: dimension,
      title: title,
      width: dimension,
      thumbnailUrl: thumbnailUrl
    });
  }

  if (isExternal) {
    return React.createElement(IconFolderExternal, {
      height: dimension,
      title: title,
      width: dimension
    });
  }

  if (isCollab) {
    return React.createElement(IconFolderCollab, {
      height: dimension,
      title: title,
      width: dimension
    });
  }

  return React.createElement(IconFolderPersonal, {
    height: dimension,
    title: title,
    width: dimension
  });
};

export default FolderIcon;
//# sourceMappingURL=FolderIcon.js.map