import * as React from 'react';
import PlainButton from '../../components/plain-button';
import Tooltip from '../../components/tooltip';
import IconSecurityClassification from '../../icons/general/IconSecurityClassification';
import SecurityBadge from '../security';
import { bdlYellorange } from '../../styles/variables';
import './ClassifiedBadge.scss';

var ClassifiedBadge = function ClassifiedBadge(_ref) {
  var name = _ref.name,
      onClick = _ref.onClick,
      _ref$tooltipPosition = _ref.tooltipPosition,
      tooltipPosition = _ref$tooltipPosition === void 0 ? 'bottom-center' : _ref$tooltipPosition,
      tooltipText = _ref.tooltipText;
  var isClickable = typeof onClick === 'function';
  var isTooltipDisabled = !tooltipText;
  var badge = /*#__PURE__*/React.createElement(SecurityBadge, {
    className: "bdl-ClassifiedBadge",
    icon: /*#__PURE__*/React.createElement(IconSecurityClassification, {
      color: bdlYellorange,
      height: 10,
      width: 10,
      strokeWidth: 3
    }),
    message: name
  });
  return /*#__PURE__*/React.createElement(Tooltip, {
    isDisabled: isTooltipDisabled,
    isTabbable: false,
    position: tooltipPosition,
    text: tooltipText
  }, isClickable ? /*#__PURE__*/React.createElement(PlainButton, {
    className: "bdl-ClassifiedBadge-editButton",
    "data-resin-target": "editclassification",
    onClick: onClick,
    type: "button"
  }, badge) : badge);
};

export default ClassifiedBadge;
//# sourceMappingURL=ClassifiedBadge.js.map