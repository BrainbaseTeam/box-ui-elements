function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Tooltip from '../../components/tooltip';
import { Menu, MenuItem } from '../../components/menu';
import IconSharedLink from '../../icons/general/IconSharedLink';
import IconInviteCollaborators from '../../icons/general/IconInviteCollaborators';
import IconCollaboratorsRestricted from '../../icons/general/IconCollaboratorsRestricted';
import IconSharedLinkRestricted from '../../icons/general/IconSharedLinkRestricted';
import messages from './messages';
import './ShareMenu.scss';
var OWNER_COOWNER_ONLY = 'owner_coowner_only';
var INSUFFICIENT_PERMISSIONS = 'insufficient_permissions';

var ShareMenu = function ShareMenu(_ref) {
  var canInvite = _ref.canInvite,
      canShare = _ref.canShare,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$getSharedLinkPro = _ref.getSharedLinkProps,
      getSharedLinkProps = _ref$getSharedLinkPro === void 0 ? {} : _ref$getSharedLinkPro,
      _ref$inviteCollabsPro = _ref.inviteCollabsProps,
      inviteCollabsProps = _ref$inviteCollabsPro === void 0 ? {} : _ref$inviteCollabsPro,
      inviteRestrictionCode = _ref.inviteRestrictionCode,
      isDownloadAllowed = _ref.isDownloadAllowed,
      isPreviewAllowed = _ref.isPreviewAllowed,
      onGetSharedLinkSelect = _ref.onGetSharedLinkSelect,
      onInviteCollabSelect = _ref.onInviteCollabSelect,
      rest = _objectWithoutProperties(_ref, ["canInvite", "canShare", "className", "getSharedLinkProps", "inviteCollabsProps", "inviteRestrictionCode", "isDownloadAllowed", "isPreviewAllowed", "onGetSharedLinkSelect", "onInviteCollabSelect"]);

  var inviteCollabsOption = React.createElement(MenuItem, _extends({
    className: "invite-collaborators",
    isDisabled: !canInvite,
    onClick: onInviteCollabSelect
  }, inviteCollabsProps), canInvite ? React.createElement(IconInviteCollaborators, null) : React.createElement(IconCollaboratorsRestricted, null), React.createElement("div", null, React.createElement("div", null, React.createElement(FormattedMessage, messages.inviteCollabs)), React.createElement("div", {
    className: "share-option-description"
  }, React.createElement(FormattedMessage, messages.editAndComment))));
  var inviteCollabTooltip = inviteRestrictionCode === OWNER_COOWNER_ONLY ? React.createElement(FormattedMessage, messages.ownerCoownerOnlyTooltip) : React.createElement(FormattedMessage, messages.insufficientPermissionsTooltip);
  var sharedLinkPermissions;

  if (isDownloadAllowed && isPreviewAllowed) {
    sharedLinkPermissions = React.createElement(FormattedMessage, messages.viewAndDownload);
  } else if (isPreviewAllowed) {
    sharedLinkPermissions = React.createElement(FormattedMessage, messages.viewOnly);
  } else if (isDownloadAllowed) {
    sharedLinkPermissions = React.createElement(FormattedMessage, messages.downloadOnly);
  } else {
    sharedLinkPermissions = React.createElement(FormattedMessage, messages.shortcutOnly);
  }

  return React.createElement(Menu, _extends({
    className: "share-menu ".concat(className)
  }, rest), canInvite ? inviteCollabsOption : React.createElement(Tooltip, {
    position: "middle-left",
    text: inviteCollabTooltip
  }, inviteCollabsOption), React.createElement(MenuItem, _extends({
    className: "get-shared-link",
    isDisabled: !canShare,
    onClick: onGetSharedLinkSelect
  }, getSharedLinkProps), canShare ? React.createElement(IconSharedLink, null) : React.createElement(IconSharedLinkRestricted, null), React.createElement("div", null, React.createElement("div", null, React.createElement(FormattedMessage, messages.getSharedLink)), React.createElement("div", {
    className: "share-option-description"
  }, sharedLinkPermissions))));
};

ShareMenu.propTypes = {
  canInvite: PropTypes.bool.isRequired,
  canShare: PropTypes.bool.isRequired,
  className: PropTypes.string,
  getSharedLinkProps: PropTypes.object,
  inviteCollabsProps: PropTypes.object,
  inviteRestrictionCode: PropTypes.oneOf([INSUFFICIENT_PERMISSIONS, OWNER_COOWNER_ONLY]),
  isDownloadAllowed: PropTypes.bool.isRequired,
  isPreviewAllowed: PropTypes.bool.isRequired,
  onGetSharedLinkSelect: PropTypes.func.isRequired,
  onInviteCollabSelect: PropTypes.func.isRequired
};
export { OWNER_COOWNER_ONLY, INSUFFICIENT_PERMISSIONS };
export default ShareMenu;
//# sourceMappingURL=ShareMenu.js.map