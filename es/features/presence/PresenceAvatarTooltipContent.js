function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl'; // @ts-ignore flow import

import messages from './messages'; // @ts-ignore flow import

import { determineInteractionMessage } from './utils/presenceUtils';
import './PresenceAvatarTooltipContent.scss';

function PresenceAvatarTooltipContent(_ref) {
  var name = _ref.name,
      interactedAt = _ref.interactedAt,
      interactionType = _ref.interactionType,
      intl = _ref.intl,
      isActive = _ref.isActive;
  var lastActionMessage = determineInteractionMessage(interactionType);
  var timeAgo;

  if (intl.formatRelativeTime) {
    timeAgo = intl.formatRelativeTime(interactedAt - Date.now());
  } else {
    // @ts-ignore: react-intl v2 backwards compatibility
    timeAgo = intl.formatRelative(interactedAt);
  }

  return React.createElement("div", {
    className: "bdl-PresenceAvatarTooltipContent"
  }, React.createElement("span", {
    className: "bdl-PresenceAvatarTooltipContent-name"
  }, name), lastActionMessage && React.createElement("span", {
    className: "bdl-PresenceAvatarTooltipContent-event"
  }, isActive ? React.createElement(FormattedMessage, messages.activeNowText) : React.createElement(FormattedMessage, _extends({}, lastActionMessage, {
    values: {
      timeAgo: timeAgo
    }
  }))));
}

export { PresenceAvatarTooltipContent as PresenceAvatarTooltipContentComponent };
export default injectIntl(PresenceAvatarTooltipContent);
//# sourceMappingURL=PresenceAvatarTooltipContent.js.map