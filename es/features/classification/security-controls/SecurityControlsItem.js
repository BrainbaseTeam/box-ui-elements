import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { bdlBoxBlue } from '../../../styles/variables';
import Tooltip from '../../../components/tooltip';
import IconInfo from '../../../icons/general/IconInfo';
import './SecurityControlsItem.scss';
var ICON_SIZE = 13;

var SecurityControlsItem = function SecurityControlsItem(_ref) {
  var message = _ref.message,
      tooltipMessage = _ref.tooltipMessage;
  return React.createElement("li", {
    className: "bdl-SecurityControlsItem"
  }, React.createElement(FormattedMessage, message), tooltipMessage && React.createElement(Tooltip, {
    className: "bdl-SecurityControlsItem-tooltip",
    text: React.createElement(FormattedMessage, tooltipMessage),
    position: "middle-right",
    isTabbable: false
  }, React.createElement("span", {
    className: "bdl-SecurityControlsItem-tooltipIcon"
  }, React.createElement(IconInfo, {
    color: bdlBoxBlue,
    width: ICON_SIZE,
    height: ICON_SIZE
  }))));
};

export default SecurityControlsItem;
//# sourceMappingURL=SecurityControlsItem.js.map