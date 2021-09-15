/**
 * 
 * @file Timeline line component
 * @author Box
 */
import React from 'react';
import PlainButton from '../../../../components/plain-button/PlainButton';
import './Timeslice.scss';
var LENGTH_TEXT_ITEMLINE = 290; // match with css

var MIN_WIDTH = 6; // Need at least some width to be clickable

var Timeslice = function Timeslice(_ref) {
  var start = _ref.start,
      end = _ref.end,
      duration = _ref.duration,
      _onClick = _ref.onClick,
      index = _ref.index,
      interactionTarget = _ref.interactionTarget;

  if (typeof start !== 'number' || !duration || start >= duration) {
    return null;
  }

  var barLength = LENGTH_TEXT_ITEMLINE;
  var startLeft = Math.round(start * barLength / duration);
  var minEnding = startLeft + MIN_WIDTH; // Need at least some width to be clickable

  var ending = typeof end === 'number' ? Math.max(minEnding, end * barLength / duration) : minEnding;
  var endLeft = Math.round(Math.min(barLength, ending));
  var width = endLeft - startLeft; // If width is too small re-adjust the left position
  // to get to at least 6px wide for clickability

  if (width < MIN_WIDTH) {
    startLeft -= MIN_WIDTH - width;
    width = MIN_WIDTH;
  }

  return React.createElement(PlainButton, {
    className: "be-timeline-time",
    "data-resin-target": interactionTarget,
    onClick: function onClick() {
      return _onClick(index);
    },
    style: {
      left: "".concat(startLeft, "px"),
      width: "".concat(width, "px")
    },
    type: "button"
  });
};

export default Timeslice;
//# sourceMappingURL=Timeslice.js.map