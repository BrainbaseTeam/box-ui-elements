import * as React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import IconInfo from '../../icons/general/IconInfo';
import Tooltip from '../tooltip';
var messages = defineMessages({
  checkboxTooltipIconInfoText: {
    "id": "boxui.checkboxTooltip.iconInfoText",
    "defaultMessage": "Info"
  }
});

var CheckboxTooltip = function CheckboxTooltip(_ref) {
  var tooltip = _ref.tooltip;
  return React.createElement("div", {
    className: "checkbox-tooltip-wrapper"
  }, React.createElement(Tooltip, {
    text: tooltip
  }, React.createElement("div", {
    className: "info-tooltip"
  }, React.createElement(IconInfo, {
    height: 16,
    title: React.createElement(FormattedMessage, messages.checkboxTooltipIconInfoText),
    width: 16
  }))));
};

export default CheckboxTooltip;
//# sourceMappingURL=CheckboxTooltip.js.map