function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import TextInputWithCopyButton from '../../components/text-input-with-copy-button';
import Tooltip from '../../components/tooltip';
import PlainButton from '../../components/plain-button';
import { convertToMs } from '../../utils/datetime';
import IconExpirationInverted from '../../icons/general/IconExpirationInverted';
import IconSettingInverted from '../../icons/general/IconSettingInverted';
import SharedLinkAccess from './SharedLinkAccess';
import messages from './messages';
import { accessLevelPropType, allowedAccessLevelsPropType, permissionLevelPropType } from './propTypes';
import './SharedLink.scss';

var SharedLink = function SharedLink(props) {
  var accessDropdownMenuProps = props.accessDropdownMenuProps,
      accessLevel = props.accessLevel,
      accessMenuButtonProps = props.accessMenuButtonProps,
      allowedAccessLevels = props.allowedAccessLevels,
      canRemoveLink = props.canRemoveLink,
      changeAccessLevel = props.changeAccessLevel,
      changePermissionLevel = props.changePermissionLevel,
      copyButtonProps = props.copyButtonProps,
      enterpriseName = props.enterpriseName,
      expiration = props.expiration,
      intl = props.intl,
      isDownloadAllowed = props.isDownloadAllowed,
      isEditAllowed = props.isEditAllowed,
      isPreviewAllowed = props.isPreviewAllowed,
      itemType = props.itemType,
      onCopySuccess = props.onCopySuccess,
      onSettingsClick = props.onSettingsClick,
      permissionLevel = props.permissionLevel,
      removeLink = props.removeLink,
      removeLinkButtonProps = props.removeLinkButtonProps,
      _props$settingsButton = props.settingsButtonProps,
      settingsButtonProps = _props$settingsButton === void 0 ? {} : _props$settingsButton,
      sharedLink = props.sharedLink,
      submitting = props.submitting;
  return /*#__PURE__*/React.createElement("div", {
    className: "shared-link"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shared-link-icons"
  }, expiration ? /*#__PURE__*/React.createElement(Tooltip, {
    position: "middle-left",
    text: /*#__PURE__*/React.createElement(FormattedMessage, _extends({}, messages.sharedLinkExpirationTooltip, {
      values: {
        expiration: convertToMs(expiration)
      }
    }))
  }, /*#__PURE__*/React.createElement("span", {
    className: "shared-link-expiration"
  }, /*#__PURE__*/React.createElement(IconExpirationInverted, {
    height: 16,
    width: 16
  }))) : null, onSettingsClick && /*#__PURE__*/React.createElement(PlainButton, _extends({}, settingsButtonProps, {
    "aria-label": intl.formatMessage(messages.settingsButtonLabel),
    className: "shared-link-settings-btn",
    onClick: onSettingsClick,
    type: "button"
  }), /*#__PURE__*/React.createElement(IconSettingInverted, null))), /*#__PURE__*/React.createElement(TextInputWithCopyButton, {
    buttonProps: copyButtonProps,
    className: "shared-link-container",
    disabled: submitting,
    label: /*#__PURE__*/React.createElement(FormattedMessage, messages.sharedLinkLabel),
    onCopySuccess: onCopySuccess,
    type: "url",
    value: sharedLink
  }), /*#__PURE__*/React.createElement(SharedLinkAccess, {
    accessDropdownMenuProps: accessDropdownMenuProps,
    accessLevel: accessLevel,
    accessMenuButtonProps: accessMenuButtonProps,
    allowedAccessLevels: allowedAccessLevels,
    canRemoveLink: canRemoveLink,
    changeAccessLevel: changeAccessLevel,
    changePermissionLevel: changePermissionLevel,
    enterpriseName: enterpriseName,
    isDownloadAllowed: isDownloadAllowed,
    isEditAllowed: isEditAllowed,
    isPreviewAllowed: isPreviewAllowed,
    itemType: itemType,
    permissionLevel: permissionLevel,
    removeLink: removeLink,
    removeLinkButtonProps: removeLinkButtonProps,
    submitting: submitting
  }));
};

export { SharedLink as SharedLinkBase };
export default injectIntl(SharedLink);
//# sourceMappingURL=SharedLink.js.map