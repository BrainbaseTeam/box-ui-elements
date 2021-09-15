import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import Button from '../../../components/button';
import { ContentExplorerModePropType } from '../prop-types';
import ContentExplorerModes from '../modes';
import messages from '../messages';

var ContentExplorerNewFolderButton = function ContentExplorerNewFolderButton(_ref) {
  var contentExplorerMode = _ref.contentExplorerMode,
      intl = _ref.intl,
      onClick = _ref.onClick,
      _ref$isDisabled = _ref.isDisabled,
      isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
      _ref$isCreateNewFolde = _ref.isCreateNewFolderAllowed,
      isCreateNewFolderAllowed = _ref$isCreateNewFolde === void 0 ? true : _ref$isCreateNewFolde;
  var doesModeAllowCreateNewFolder = contentExplorerMode === ContentExplorerModes.SELECT_FOLDER || contentExplorerMode === ContentExplorerModes.MOVE_COPY || contentExplorerMode === ContentExplorerModes.MULTI_SELECT;
  return doesModeAllowCreateNewFolder ? React.createElement(Button, {
    className: "content-explorer-new-folder-button",
    type: "button",
    onClick: onClick,
    isDisabled: isDisabled,
    title: !isCreateNewFolderAllowed ? intl.formatMessage(messages.newFolderForbidden) : ''
  }, React.createElement(FormattedMessage, messages.newFolder)) : null;
};

ContentExplorerNewFolderButton.propTypes = {
  contentExplorerMode: ContentExplorerModePropType.isRequired,
  intl: PropTypes.any,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  isCreateNewFolderAllowed: PropTypes.bool
};
export { ContentExplorerNewFolderButton as ContentExplorerNewFolderButtonBase };
export default injectIntl(ContentExplorerNewFolderButton);
//# sourceMappingURL=ContentExplorerNewFolderButton.js.map