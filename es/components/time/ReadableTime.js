import { injectIntl } from 'react-intl';
import { ONE_HOUR_MS } from '../../constants';
import { isToday, isYesterday, isCurrentYear } from '../../utils/datetime';
import messages from './messages';
// exclude languages that do not have a grammar for uppercase (e.g. russian)
var nonUppercaseLocales = ['ru'];

var ReadableTime = function ReadableTime(_ref) {
  var intl = _ref.intl,
      timestamp = _ref.timestamp,
      _ref$relativeThreshol = _ref.relativeThreshold,
      relativeThreshold = _ref$relativeThreshol === void 0 ? ONE_HOUR_MS : _ref$relativeThreshol,
      _ref$allowFutureTimes = _ref.allowFutureTimestamps,
      allowFutureTimestamps = _ref$allowFutureTimes === void 0 ? true : _ref$allowFutureTimes,
      _ref$alwaysShowTime = _ref.alwaysShowTime,
      alwaysShowTime = _ref$alwaysShowTime === void 0 ? false : _ref$alwaysShowTime,
      _ref$showWeekday = _ref.showWeekday,
      showWeekday = _ref$showWeekday === void 0 ? false : _ref$showWeekday,
      _ref$uppercase = _ref.uppercase,
      uppercase = _ref$uppercase === void 0 ? false : _ref$uppercase;
  var shouldUppercase = uppercase && !nonUppercaseLocales.includes(intl.locale);
  var relativeIfNewerThanTs = Date.now() - relativeThreshold;
  var shouldShowYear = !isCurrentYear(timestamp);

  if (!allowFutureTimestamps && timestamp > Date.now()) {
    // TODO: what is the reasoning behind this rule?
    timestamp = relativeIfNewerThanTs; // Default to 'Today' for timestamps that would show a future date
  } // e.g. Oct 5, 2018


  var dateMessage = messages.eventTime;
  var date = null;
  var weekday = null;
  var output;

  if (isToday(timestamp)) {
    // e.g. Today at 12:30 PM
    dateMessage = messages.eventTimeToday;
  } else if (isYesterday(timestamp)) {
    // e.g. Yesterday at 11:30 AM
    dateMessage = messages.eventTimeYesterday;
  } else if (showWeekday) {
    // e.g. Monday, Oct 5, 2018
    dateMessage = messages.eventTimeWeekdayLong;
    weekday = intl.formatDate(timestamp, {
      weekday: 'long'
    });
  } else if (shouldShowYear && alwaysShowTime) {
    // e.g. Oct 5, 2018 at 10:30 PM
    dateMessage = messages.eventTimeDate;
  } else if (!shouldShowYear && alwaysShowTime) {
    // e.g. Oct 5 at 10:30 PM
    dateMessage = messages.eventTimeDateShort;
    date = intl.formatDate(timestamp, {
      month: 'short',
      day: 'numeric'
    });
  } else if (!shouldShowYear && !alwaysShowTime) {
    // e.g. Oct 5
    output = intl.formatDate(timestamp, {
      month: 'short',
      day: 'numeric'
    });
    return shouldUppercase ? output.toLocaleUpperCase(intl.locale) : output;
  }

  var values = {
    time: timestamp,
    date: date,
    weekday: weekday
  };
  output = intl.formatMessage(dateMessage, values); // if the time stamp is within +/- the relative threshold for the current time,
  // print the default time format

  var timeDiff = timestamp - Date.now();

  if (Math.abs(timeDiff) <= relativeThreshold) {
    if (intl.formatRelativeTime) {
      // react-intl v3
      output = intl.formatRelativeTime(timeDiff);
    } else {
      // react-intl v2
      output = intl.formatRelative(timestamp);
    }
  }

  return shouldUppercase ? output.toLocaleUpperCase(intl.locale) : output;
};

export { ReadableTime as ReadableTimeComponent };
export default injectIntl(ReadableTime);
//# sourceMappingURL=ReadableTime.js.map