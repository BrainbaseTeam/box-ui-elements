function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { FormattedMessage, FormattedRelative, FormattedDate } from 'react-intl';
import { ONE_HOUR_MS } from '../../constants';
import { isToday, isYesterday, isCurrentYear } from '../../utils/datetime';
import messages from './messages';

var ReadableTime = function ReadableTime(_ref) {
  var timestamp = _ref.timestamp,
      _ref$relativeThreshol = _ref.relativeThreshold,
      relativeThreshold = _ref$relativeThreshol === void 0 ? ONE_HOUR_MS : _ref$relativeThreshol,
      _ref$allowFutureTimes = _ref.allowFutureTimestamps,
      allowFutureTimestamps = _ref$allowFutureTimes === void 0 ? true : _ref$allowFutureTimes,
      _ref$alwaysShowTime = _ref.alwaysShowTime,
      alwaysShowTime = _ref$alwaysShowTime === void 0 ? false : _ref$alwaysShowTime,
      _ref$showWeekday = _ref.showWeekday,
      showWeekday = _ref$showWeekday === void 0 ? false : _ref$showWeekday;
  var relativeIfNewerThanTs = Date.now() - relativeThreshold;
  var shouldShowYear = !isCurrentYear(timestamp);

  if (!allowFutureTimestamps && timestamp > Date.now()) {
    // TODO: what is the reasoning behind this rule?
    timestamp = relativeIfNewerThanTs; // Default to 'Today' for timestamps that would show a future date
  } // e.g. Oct 5, 2018


  var dateMessage = messages.eventTime;
  var date = null;
  var weekday = null;

  if (isToday(timestamp)) {
    // e.g. Today at 12:30 PM
    dateMessage = messages.eventTimeToday;
  } else if (isYesterday(timestamp)) {
    // e.g. Yesterday at 11:30 AM
    dateMessage = messages.eventTimeYesterday;
  } else if (showWeekday) {
    // e.g. Monday, Oct 5, 2018
    dateMessage = messages.eventTimeWeekdayLong;
    weekday = /*#__PURE__*/React.createElement(FormattedDate, {
      value: timestamp,
      weekday: "long"
    });
  } else if (shouldShowYear && alwaysShowTime) {
    // e.g. Oct 5, 2018 at 10:30 PM
    dateMessage = messages.eventTimeDate;
  } else if (!shouldShowYear && alwaysShowTime) {
    // e.g. Oct 5 at 10:30 PM
    dateMessage = messages.eventTimeDateShort;
    date = /*#__PURE__*/React.createElement(FormattedDate, {
      value: timestamp,
      month: "short",
      day: "numeric"
    });
  } else if (!shouldShowYear && !alwaysShowTime) {
    // e.g. Oct 5
    return /*#__PURE__*/React.createElement(FormattedDate, {
      value: timestamp,
      month: "short",
      day: "numeric"
    });
  }

  var output = /*#__PURE__*/React.createElement(FormattedMessage, _extends({}, dateMessage, {
    values: {
      time: timestamp,
      date: date,
      weekday: weekday
    }
  })); // if the time stamp is within +/- the relative threshold for the current time,
  // print the default time format

  if (Math.abs(Date.now() - timestamp) <= relativeThreshold) {
    output = /*#__PURE__*/React.createElement(FormattedRelative, {
      value: timestamp
    });
  }

  return output;
};

export default ReadableTime;
//# sourceMappingURL=ReadableTime.js.map