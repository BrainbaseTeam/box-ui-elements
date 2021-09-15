import * as React from 'react';
import PlainButton from '../../components/plain-button';
import Tooltip from '../../components/tooltip';
import IconSecurityClassification from '../../icons/general/IconSecurityClassification';
import SecurityBadge from '../security';
import { bdlYellow50 } from '../../styles/variables';
import './ClassifiedBadge.scss';
var ICON_SIZE = 12;

var ClassifiedBadge = function ClassifiedBadge(_ref) {
  var color = _ref.color,
      name = _ref.name,
      onClick = _ref.onClick,
      _ref$tooltipPosition = _ref.tooltipPosition,
      tooltipPosition = _ref$tooltipPosition === void 0 ? 'bottom-center' : _ref$tooltipPosition,
      tooltipText = _ref.tooltipText;
  var isClickable = typeof onClick === 'function';
  var isTooltipDisabled = !tooltipText;
  var badge = React.createElement(SecurityBadge, {
    className: "bdl-ClassifiedBadge",
    color: color,
    icon: React.createElement(IconSecurityClassification, {
      height: ICON_SIZE,
      width: ICON_SIZE
    }),
    message: name
  });
  return React.createElement(Tooltip, {
    isDisabled: isTooltipDisabled,
    isTabbable: false,
    position: tooltipPosition,
    text: tooltipText
  }, isClickable ? React.createElement(PlainButton, {
    className: "bdl-ClassifiedBadge-editButton",
    "data-resin-target": "editclassification",
    onClick: onClick,
    type: "button"
  }, badge) : badge);
};

ClassifiedBadge.defaultProps = {
  color: bdlYellow50
};
export default ClassifiedBadge;
//# sourceMappingURL=ClassifiedBadge.js.map