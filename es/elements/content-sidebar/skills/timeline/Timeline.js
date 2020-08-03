/**
 * 
 * @file Timeline component
 * @author Box
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import PlainButton from '../../../../components/plain-button/PlainButton';
import IconTrackNext from '../../../../icons/general/IconTrackNext';
import IconTrackPrevious from '../../../../icons/general/IconTrackPrevious';
import messages from '../../../common/messages';
import { SKILLS_TARGETS } from '../../../common/interactionTargets';
import Timeslice from './Timeslice';
import { isValidStartTime } from '../transcript/timeSliceUtils';
import './Timeline.scss';

var Timeline = function Timeline(_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? '' : _ref$text,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 0 : _ref$duration,
      _ref$timeslices = _ref.timeslices,
      timeslices = _ref$timeslices === void 0 ? [] : _ref$timeslices,
      getViewer = _ref.getViewer,
      interactionTarget = _ref.interactionTarget;
  var timeSliceIndex = -1;

  var playSegment = function playSegment(index) {
    var incr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var newIndex = incr > 0 ? Math.min(timeslices.length - 1, index + incr) : Math.max(0, index + incr);
    var viewer = getViewer ? getViewer() : null;
    var timeslice = timeslices[newIndex];
    var validTime = isValidStartTime(timeslice);

    if (validTime && viewer && typeof viewer.play === 'function') {
      viewer.play(timeslice.start);
      timeSliceIndex = newIndex;
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "be-timeline"
  }, text && /*#__PURE__*/React.createElement("div", {
    className: "be-timeline-label"
  }, text), /*#__PURE__*/React.createElement("div", {
    className: "be-timeline-line-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "be-timeline-line"
  }), timeslices.map(function (_ref2, index) {
    var start = _ref2.start,
        end = _ref2.end;
    return (
      /*#__PURE__*/

      /* eslint-disable react/no-array-index-key */
      React.createElement(Timeslice, {
        key: index,
        duration: duration,
        end: end,
        index: index,
        interactionTarget: interactionTarget,
        onClick: playSegment,
        start: start
      })
    );
  }
  /* eslint-enable react/no-array-index-key */
  )), /*#__PURE__*/React.createElement("div", {
    className: "be-timeline-btns"
  }, /*#__PURE__*/React.createElement(PlainButton, {
    "data-resin-target": SKILLS_TARGETS.TIMELINE.PREVIOUS,
    onClick: function onClick() {
      return playSegment(timeSliceIndex, -1);
    },
    type: "button"
  }, /*#__PURE__*/React.createElement(IconTrackPrevious, {
    title: /*#__PURE__*/React.createElement(FormattedMessage, messages.previousSegment)
  })), /*#__PURE__*/React.createElement(PlainButton, {
    "data-resin-target": SKILLS_TARGETS.TIMELINE.NEXT,
    onClick: function onClick() {
      return playSegment(timeSliceIndex, 1);
    },
    type: "button"
  }, /*#__PURE__*/React.createElement(IconTrackNext, {
    title: /*#__PURE__*/React.createElement(FormattedMessage, messages.nextSegment)
  }))));
};

export default Timeline;
//# sourceMappingURL=Timeline.js.map