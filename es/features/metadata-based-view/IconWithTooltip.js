import React from 'react';
import { FormattedMessage } from 'react-intl';
import PlainButton from '../../components/plain-button';
import Button from '../../components/button';
import Tooltip from '../../components/tooltip';
import IconCheck from '../../icons/general/IconCheck';
import IconClose from '../../icons/general/IconClose';
import IconPencil from '../../icons/general/IconPencil';
import { bdlGray62 } from '../../styles/variables';
import { CANCEL_ICON_TYPE, EDIT_ICON_TYPE, SAVE_ICON_TYPE } from './constants';

var IconWithTooltip = function IconWithTooltip(_ref) {
  var className = _ref.className,
      isUpdating = _ref.isUpdating,
      onClick = _ref.onClick,
      tooltipText = _ref.tooltipText,
      type = _ref.type;
  var iconBtn;

  switch (type) {
    case CANCEL_ICON_TYPE:
      iconBtn = React.createElement(PlainButton, {
        className: className,
        type: "button",
        onClick: onClick
      }, React.createElement(IconClose, {
        color: bdlGray62,
        width: 16,
        height: 16
      }));
      break;

    case EDIT_ICON_TYPE:
      iconBtn = React.createElement(PlainButton, {
        className: className,
        type: "button",
        onClick: onClick
      }, React.createElement(IconPencil, {
        color: bdlGray62
      }));
      break;

    case SAVE_ICON_TYPE:
      iconBtn = React.createElement(Button, {
        className: className,
        isLoading: isUpdating,
        type: "button",
        onClick: onClick
      }, React.createElement(IconCheck, {
        color: bdlGray62,
        width: 16,
        height: 16
      }));
      break;

    default:
      return null;
  }

  return React.createElement(Tooltip, {
    text: tooltipText
  }, iconBtn);
};

export default IconWithTooltip;
//# sourceMappingURL=IconWithTooltip.js.map