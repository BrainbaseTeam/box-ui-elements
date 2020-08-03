import React from 'react';
import { FormattedMessage } from 'react-intl';
import PlainButton from '../../components/plain-button';
import Tooltip from '../../components/tooltip';
import IconCheck from '../../icons/general/IconCheck';
import IconClose from '../../icons/general/IconClose';
import IconPencil from '../../icons/general/IconPencil';
import { bdlGray62 } from '../../styles/variables';
import { CANCEL_ICON_TYPE, EDIT_ICON_TYPE, SAVE_ICON_TYPE } from './constants';

var IconWithTooltip = function IconWithTooltip(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      tooltipText = _ref.tooltipText,
      type = _ref.type;
  var icon;

  switch (type) {
    case CANCEL_ICON_TYPE:
      icon = /*#__PURE__*/React.createElement(IconClose, {
        color: bdlGray62,
        width: 16,
        height: 16
      });
      break;

    case EDIT_ICON_TYPE:
      icon = /*#__PURE__*/React.createElement(IconPencil, {
        color: bdlGray62
      });
      break;

    case SAVE_ICON_TYPE:
      icon = /*#__PURE__*/React.createElement(IconCheck, {
        color: bdlGray62,
        width: 16,
        height: 16
      });
      break;

    default:
      return null;
  }

  return /*#__PURE__*/React.createElement(Tooltip, {
    text: tooltipText
  }, /*#__PURE__*/React.createElement(PlainButton, {
    className: className,
    type: "button",
    onClick: onClick
  }, icon));
};

export default IconWithTooltip;
//# sourceMappingURL=IconWithTooltip.js.map