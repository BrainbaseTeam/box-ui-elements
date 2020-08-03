function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { EDITOR, CO_OWNER, PREVIEWER, PREVIEWER_UPLOADER, VIEWER, VIEWER_UPLOADER, UPLOADER } from './constants';
import InviteePermissionsDescription from './InviteePermissionsDescription';
import messages from './messages';

var InviteePermissionsLabel = function InviteePermissionsLabel(_ref) {
  var _permissionOptionsTex, _permissionLabelTexts;

  var hasDescription = _ref.hasDescription,
      inviteePermissionLevel = _ref.inviteePermissionLevel,
      itemType = _ref.itemType;
  var permissionOptionsTexts = (_permissionOptionsTex = {}, _defineProperty(_permissionOptionsTex, EDITOR, messages.editorLevelText), _defineProperty(_permissionOptionsTex, CO_OWNER, messages.coownerLevelText), _defineProperty(_permissionOptionsTex, VIEWER_UPLOADER, messages.viewerUploaderLevelText), _defineProperty(_permissionOptionsTex, PREVIEWER_UPLOADER, messages.previewerUploaderLevelText), _defineProperty(_permissionOptionsTex, VIEWER, messages.viewerLevelText), _defineProperty(_permissionOptionsTex, PREVIEWER, messages.previewerLevelText), _defineProperty(_permissionOptionsTex, UPLOADER, messages.uploaderLevelText), _permissionOptionsTex);
  var permissionLabelTexts = (_permissionLabelTexts = {}, _defineProperty(_permissionLabelTexts, EDITOR, messages.editorLevelButtonLabel), _defineProperty(_permissionLabelTexts, CO_OWNER, messages.coownerLevelButtonLabel), _defineProperty(_permissionLabelTexts, VIEWER_UPLOADER, messages.viewerUploaderLevelButtonLabel), _defineProperty(_permissionLabelTexts, PREVIEWER_UPLOADER, messages.previewerUploaderLevelButtonLabel), _defineProperty(_permissionLabelTexts, VIEWER, messages.viewerLevelButtonLabel), _defineProperty(_permissionLabelTexts, PREVIEWER, messages.previewerLevelButtonLabel), _defineProperty(_permissionLabelTexts, UPLOADER, messages.uploaderLevelButtonLabel), _permissionLabelTexts);
  return hasDescription ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, /*#__PURE__*/React.createElement(FormattedMessage, permissionOptionsTexts[inviteePermissionLevel]), ' '), /*#__PURE__*/React.createElement(InviteePermissionsDescription, {
    inviteePermissionLevel: inviteePermissionLevel,
    itemType: itemType
  })) : /*#__PURE__*/React.createElement(FormattedMessage, permissionLabelTexts[inviteePermissionLevel]);
};

export default InviteePermissionsLabel;
//# sourceMappingURL=InviteePermissionsLabel.js.map