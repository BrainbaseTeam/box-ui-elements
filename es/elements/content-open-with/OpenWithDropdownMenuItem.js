/**
 * 
 * @file Open With dropdown menu item
 * @author Box
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import MenuItem from '../../components/menu/MenuItem';
import messages from '../common/messages';
import { OPEN_WITH_MENU_ITEM_ICON_SIZE } from '../../constants';
import getIcon from './IconFileMap';
import utils from './openWithUtils';
import './OpenWithDropdownMenuItem.scss';

function getErrorMessage() {
  var disabledReasons = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var message; // Use the first disabled reason as the description if the integration is disabled.

  var code = disabledReasons[0];
  var defaultErrorMessage = React.createElement(FormattedMessage, messages.errorOpenWithDescription);

  switch (code) {
    case 'blocked_by_shield_access_policy':
      message = React.createElement(FormattedMessage, messages.boxEditErrorBlockedByPolicy);
      break;

    case 'collaborators_hidden':
      message = defaultErrorMessage;
      break;

    default:
      message = disabledReasons[0] || defaultErrorMessage;
  }

  return message;
}

var OpenWithDropdownMenuItem = function OpenWithDropdownMenuItem(_ref) {
  var integration = _ref.integration,
      _onClick = _ref.onClick;
  var displayName = integration.displayName,
      displayDescription = integration.displayDescription,
      isDisabled = integration.isDisabled,
      extension = integration.extension,
      disabledReasons = integration.disabledReasons;
  var Icon = getIcon(displayName);
  var description = isDisabled ? getErrorMessage(disabledReasons) : displayDescription;
  var className = classNames({
    'bcow-box-tools-uninstalled': utils.isDisabledBecauseBoxToolsIsNotInstalled(integration)
  });
  return React.createElement(MenuItem, {
    className: className,
    isDisabled: isDisabled,
    onClick: function onClick() {
      return _onClick(integration);
    }
  }, React.createElement(Icon, {
    dimension: OPEN_WITH_MENU_ITEM_ICON_SIZE,
    extension: extension,
    height: OPEN_WITH_MENU_ITEM_ICON_SIZE,
    width: OPEN_WITH_MENU_ITEM_ICON_SIZE
  }), React.createElement("span", null, React.createElement("p", {
    className: "bcow-menu-item-title"
  }, displayName), React.createElement("p", {
    className: "bcow-menu-item-description"
  }, description)));
};

export default OpenWithDropdownMenuItem;
//# sourceMappingURL=OpenWithDropdownMenuItem.js.map