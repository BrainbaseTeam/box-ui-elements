/**
 * 
 * @file Open With dropdown menu
 * @author Box
 */
import * as React from 'react';
import DropdownMenu from '../../components/dropdown-menu/DropdownMenu';
import Menu from '../../components/menu/Menu';
import OpenWithDropdownMenuItem from './OpenWithDropdownMenuItem';
import MultipleIntegrationsOpenWithButton from './MultipleIntegrationsOpenWithButton';
var RIGHT_ALIGNMENT = 'right';

var OpenWithDropdownMenu = function OpenWithDropdownMenu(_ref) {
  var _ref$dropdownAlignmen = _ref.dropdownAlignment,
      dropdownAlignment = _ref$dropdownAlignmen === void 0 ? RIGHT_ALIGNMENT : _ref$dropdownAlignmen,
      integrations = _ref.integrations,
      onClick = _ref.onClick;
  return React.createElement(DropdownMenu, {
    isRightAligned: dropdownAlignment === RIGHT_ALIGNMENT
  }, React.createElement(MultipleIntegrationsOpenWithButton, null), React.createElement(Menu, {
    className: "bcow-menu"
  }, integrations.map(function (integration) {
    return React.createElement(OpenWithDropdownMenuItem, {
      key: integration.appIntegrationId,
      integration: integration,
      onClick: onClick
    });
  })));
};

export default OpenWithDropdownMenu;
//# sourceMappingURL=OpenWithDropdownMenu.js.map