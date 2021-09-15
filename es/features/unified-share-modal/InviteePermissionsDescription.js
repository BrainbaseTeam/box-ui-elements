function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { EDITOR, CO_OWNER, PREVIEWER, PREVIEWER_UPLOADER, VIEWER, VIEWER_UPLOADER, UPLOADER } from './constants';
import messages from './messages';

var InviteePermissionDescription = function InviteePermissionDescription(_ref) {
  var _permissionDescriptio;

  var inviteePermissionLevel = _ref.inviteePermissionLevel,
      itemType = _ref.itemType;
  var permissionDescriptions = (_permissionDescriptio = {}, _defineProperty(_permissionDescriptio, EDITOR, itemType === 'folder' ? messages.editorLevelDescription : messages.editorLevelFileDescription), _defineProperty(_permissionDescriptio, CO_OWNER, messages.coownerLevelDescription), _defineProperty(_permissionDescriptio, VIEWER_UPLOADER, messages.viewerUploaderLevelDescription), _defineProperty(_permissionDescriptio, PREVIEWER_UPLOADER, messages.previewerUploaderLevelDescription), _defineProperty(_permissionDescriptio, VIEWER, messages.viewerLevelDescription), _defineProperty(_permissionDescriptio, PREVIEWER, messages.previewerLevelDescription), _defineProperty(_permissionDescriptio, UPLOADER, messages.uploaderLevelDescription), _permissionDescriptio);
  var description = permissionDescriptions[inviteePermissionLevel];
  return React.createElement("small", {
    className: "usm-menu-description"
  }, React.createElement(FormattedMessage, description));
};

export default InviteePermissionDescription;
//# sourceMappingURL=InviteePermissionsDescription.js.map