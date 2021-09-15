import React from 'react';
import AccessDescription from './AccessDescription';
import AccessMenu from './AccessMenu';
import PermissionMenu from './PermissionMenu';
import { accessLevelPropType, allowedAccessLevelsPropType, permissionLevelPropType } from './propTypes';

var SharedLinkAccess = function SharedLinkAccess(props) {
  var accessDropdownMenuProps = props.accessDropdownMenuProps,
      accessLevel = props.accessLevel,
      accessMenuButtonProps = props.accessMenuButtonProps,
      allowedAccessLevels = props.allowedAccessLevels,
      canRemoveLink = props.canRemoveLink,
      changeAccessLevel = props.changeAccessLevel,
      changePermissionLevel = props.changePermissionLevel,
      enterpriseName = props.enterpriseName,
      isDownloadAllowed = props.isDownloadAllowed,
      isEditAllowed = props.isEditAllowed,
      isPreviewAllowed = props.isPreviewAllowed,
      itemType = props.itemType,
      permissionLevel = props.permissionLevel,
      removeLink = props.removeLink,
      removeLinkButtonProps = props.removeLinkButtonProps,
      submitting = props.submitting;
  return React.createElement("div", {
    className: "shared-link-access"
  }, React.createElement(AccessDescription, {
    accessLevel: accessLevel,
    enterpriseName: enterpriseName,
    isDownloadAllowed: isDownloadAllowed,
    isEditAllowed: isEditAllowed,
    isPreviewAllowed: isPreviewAllowed,
    itemType: itemType
  }), React.createElement(AccessMenu, {
    accessDropdownMenuProps: accessDropdownMenuProps,
    accessLevel: accessLevel,
    accessMenuButtonProps: accessMenuButtonProps,
    allowedAccessLevels: allowedAccessLevels,
    canRemoveLink: canRemoveLink,
    changeAccessLevel: changeAccessLevel,
    enterpriseName: enterpriseName,
    isDownloadAllowed: isDownloadAllowed,
    isEditAllowed: isEditAllowed,
    isPreviewAllowed: isPreviewAllowed,
    itemType: itemType,
    removeLink: removeLink,
    removeLinkButtonProps: removeLinkButtonProps,
    submitting: submitting
  }), React.createElement(PermissionMenu, {
    changePermissionLevel: changePermissionLevel,
    permissionLevel: permissionLevel,
    submitting: submitting
  }));
};

export default SharedLinkAccess;
//# sourceMappingURL=SharedLinkAccess.js.map