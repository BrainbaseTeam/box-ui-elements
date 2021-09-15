function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Badgeable from '../../components/badgeable/Badgeable';
import Tooltip from '../../components/tooltip/Tooltip';
import Avatar from '../../components/avatar';
import IconExpirationBadge from '../../icons/general/IconExpirationBadge';
import messages from './messages';

var CollaboratorAvatarItem = function CollaboratorAvatarItem(props) {
  var _props$allowBadging = props.allowBadging,
      allowBadging = _props$allowBadging === void 0 ? false : _props$allowBadging,
      expiration = props.expiration,
      _props$isExternalColl = props.isExternalCollab,
      isExternalCollab = _props$isExternalColl === void 0 ? false : _props$isExternalColl,
      hasCustomAvatar = props.hasCustomAvatar,
      avatarUrl = props.avatarUrl,
      name = props.name,
      rest = _objectWithoutProperties(props, ["allowBadging", "expiration", "isExternalCollab", "hasCustomAvatar", "avatarUrl", "name"]);

  var avatarInstance = hasCustomAvatar && avatarUrl ? React.createElement(Avatar, _extends({
    avatarUrl: avatarUrl,
    name: name
  }, rest, {
    isExternal: isExternalCollab,
    shouldShowExternal: allowBadging
  })) : React.createElement(Avatar, _extends({
    name: name || '-'
  }, rest, {
    isExternal: isExternalCollab,
    shouldShowExternal: allowBadging
  }));
  var expirationBadge = allowBadging && expiration && expiration.executeAt ? React.createElement(Tooltip, {
    position: "middle-right",
    text: React.createElement(FormattedMessage, _extends({}, messages.expirationTooltipText, {
      values: {
        date: expiration.executeAt
      }
    }))
  }, React.createElement("div", null, React.createElement(IconExpirationBadge, {
    className: "themed",
    height: 14,
    width: 14
  }))) : null;
  return React.createElement(Badgeable, {
    topLeft: expirationBadge
  }, avatarInstance);
};

export default CollaboratorAvatarItem;
//# sourceMappingURL=CollaboratorAvatarItem.js.map