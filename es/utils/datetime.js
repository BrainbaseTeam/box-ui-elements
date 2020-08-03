/**
 * 
 * @file Date and time utilities
 * @author Box
 */
import isNaN from 'lodash/isNaN';
var MILLISECONDS_PER_SECOND = 1000; // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds

var MILLISECONDS_PER_DAY = 24 * 60 * 60 * MILLISECONDS_PER_SECOND; // 60 sec * 1000

var MILLISECONDS_PER_MINUTE = 60 * MILLISECONDS_PER_SECOND;
/**
 * RegExp matcher for acceptable ISO 8601 date formats w/ timezone (see below)
 * Capture groups structured as follows:
 * 1) the date/time portion (2018-06-13T00:00:00.000)
 * 2) the milliseconds (if matched)
 * 3) the timezone portion (e.g., Z, +03, -0400, +05:00)
 * 4) the Z format for timezone (if matched)
 * 5) the short format for timezone (if matched)
 * 6) the colon-less format for timezone (if matched)
 * 7) the colon long format for timezone (if matched)
 */

var RE_ISO8601_DATE = /^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,3})?)?((Z$)|(?:[+-](?:([0-2]\d$)|([0-2]\d(?:00|30)$)|([0-2]\d:(?:00|30)$))))$/;
var ISO8601_DATETIME = 1;
var ISO8601_MILLISECONDS = 2;
var ISO8601_TIMEZONE = 3;
var ISO8601_Z_FMT = 4;
var ISO8601_SHORT_FMT = 5;
var ISO8601_MEDIUM_FMT = 6;
var ISO8601_LONG_FMT = 7;
/**
 * Helper to normalize a date value to a date object
 * @param dateValue - Date number, string, or object
 * @returns {date} the normalized date object
 */

function convertToDate(dateValue) {
  return dateValue instanceof Date ? dateValue : new Date(dateValue);
}
/**
 * Converts an integer value in seconds to milliseconds.
 * @param {number} seconds - The value in seconds
 * @returns {number} the value in milliseconds
 */


function convertToMs(seconds) {
  return seconds * MILLISECONDS_PER_SECOND;
}
/**
 * Checks whether the given date value (in unix milliseconds) is today.
 * @param {number|string|Date} dateValue - Date object or integer representing the number of milliseconds since 1/1/1970 UTC
 * @returns {boolean} whether the given value is today
 */


function isToday(dateValue) {
  return new Date().toDateString() === convertToDate(dateValue).toDateString();
}
/**
 * Checks whether the given date value (in unix milliseconds) is yesterday.
 * @param {number|string|Date} dateValue - Date object or integer or representing the number of milliseconds since 1/1/1970 UTC
 * @returns {boolean} whether the given value is yesterday
 */


function isYesterday(dateValue) {
  return isToday(convertToDate(dateValue).getTime() + MILLISECONDS_PER_DAY);
}
/**
 * Checks whether the given date value (in unix milliseconds) is tomorrow.
 * @param {number|string|Date} dateValue - Date object or integer or representing the number of milliseconds since 1/1/1970 UTC
 * @returns {boolean} whether the given value is tomorrow
 */


function isTomorrow(dateValue) {
  return isToday(convertToDate(dateValue).getTime() - MILLISECONDS_PER_DAY);
}
/**
 * Checks whether the given date value (in unix milliseconds) is in the current month.
 * @param {number|string|Date} dateValue - Date object or integer representing the number of milliseconds since 1/1/1970 UTC
 * @returns {boolean} whether the given value is in the current month
 */


function isCurrentMonth(dateValue) {
  return new Date().getMonth() === convertToDate(dateValue).getMonth();
}
/**
 * Checks whether the given date value (in unix milliseconds) is in the current year.
 * @param {number|string|Date} dateValue - Date object or integer representing the number of milliseconds since 1/1/1970 UTC
 * @returns {boolean} whether the given value is in the current year
 */


function isCurrentYear(dateValue) {
  return new Date().getFullYear() === convertToDate(dateValue).getFullYear();
}
/**
 * Formats a number of seconds as a time string
 *
 * @param {number} seconds - seconds
 * @return {string} a string formatted like 3:57:35
 */


function formatTime(seconds) {
  var h = Math.floor(seconds / 3600);
  var m = Math.floor(seconds % 3600 / 60);
  var s = Math.floor(seconds % 3600 % 60);
  var hour = h > 0 ? "".concat(h.toString(), ":") : '';
  var sec = s < 10 ? "0".concat(s.toString()) : s.toString();
  var min = m.toString();

  if (h > 0 && m < 10) {
    min = "0".concat(min);
  }

  return "".concat(hour).concat(min, ":").concat(sec);
}
/**
 * Adds time to a given dateValue
 *
 * @param {number|Date} dateValue - date or integer value to add time to
 * @param {number} timeToAdd - amount of time to add in ms
 * @return {number|Date} the modified date or integer
 */


function addTime(dateValue, timeToAdd) {
  if (dateValue instanceof Date) {
    return new Date(dateValue.getTime() + timeToAdd);
  }

  return dateValue + timeToAdd;
}
/**
 * Will convert
 *      2018-06-13T07:00:00.000Z
 * to
 *      2018-06-13T00:00:00.000Z
 *
 * This is the opposite of convertISOStringToUTCDate
 *
 * @param {Date} date
 * @return {number}
 */


function convertDateToUnixMidnightTime(date) {
  // date is localized to 00:00:00 at system/browser timezone
  var utcUnixTimeInMs = date.getTime(); // timezone an integer offset; minutes behind GMT
  // we use the browser timezone offset instead of the user's,
  // because the datepicker uses the browser to get the "midnight"
  // time in the user's timezone with getTime()

  var timezoneOffsetInMins = date.getTimezoneOffset();
  var timezoneOffsetInMs = timezoneOffsetInMins * MILLISECONDS_PER_MINUTE; // we need the unix/epoch time for midnight on the date selected

  var unixDayMidnightTime = utcUnixTimeInMs - timezoneOffsetInMs;
  return unixDayMidnightTime;
}
/**
 * Will check to see if a date object is not valid, according to the browser
 * JS engine.
 *
 * @param {Date} date
 * @return {boolean} whether the date value passes validation
 */


function isValidDate(date) {
  return !isNaN(date.getTime());
}
/**
 * Will convert ISO8601-compatible dates (with zone designators)
 *      2018-06-13T00:00:00.000-0500
 *      or
 *      2018-06-13T00:00:00.000-05
 *
 * to
 *      2018-06-13T00:00:00.000-05:00
 *
 * Equivalent formats between the two (e.g., uzing 'Z') will remain unchanged.
 * If the date format cannot be converted, it will pass along the existing value
 * @param {string} isoString
 * @return {string} converted date format, if applicable
 */


function convertISOStringtoRFC3339String(isoString) {
  // test that the date format inbound is ISO8601-compatible
  if (RE_ISO8601_DATE.test(isoString)) {
    // if it is, parse out the timezone part if it's in a longer format
    // use the capture groups instead of the split result for the datetime and the time zone
    var parseDate = isoString.split(RE_ISO8601_DATE);
    var dateTime = parseDate[ISO8601_DATETIME];
    var milliseconds = parseDate[ISO8601_MILLISECONDS];
    var timeZone = parseDate[ISO8601_TIMEZONE]; // add milliseconds if missing, to standardize output

    if (!milliseconds) {
      dateTime += '.000';
    }

    if (parseDate[ISO8601_Z_FMT]) {
      return isoString;
    }

    if (parseDate[ISO8601_SHORT_FMT]) {
      return "".concat(dateTime + timeZone, ":00");
    }

    if (parseDate[ISO8601_MEDIUM_FMT]) {
      return "".concat(dateTime + timeZone.substr(0, 3), ":").concat(timeZone.substr(3));
    }

    if (parseDate[ISO8601_LONG_FMT]) {
      return isoString;
    }
  }

  return isoString;
}
/**
 * Will convert
 *      2018-06-13T00:00:00.000Z
 * to
 *      2018-06-13T07:00:00.000Z
 *
 * This is the opposite of convertDateToUnixMidnightTime
 *
 * @param {string} isoString - ISO string in UTC time zone
 */


function convertISOStringToUTCDate(isoString) {
  // get date in UTC midnight time
  var utcDate = new Date(convertISOStringtoRFC3339String(isoString));
  var utcTime = utcDate.getTime(); // get browser's timezone

  var timezoneOffsetInMins = utcDate.getTimezoneOffset();
  var timezoneOffsetInMs = timezoneOffsetInMins * MILLISECONDS_PER_MINUTE; // return date in utc timezone

  var localizedUnixTimeInMs = utcTime + timezoneOffsetInMs;
  return new Date(localizedUnixTimeInMs);
}

export { convertToDate, convertToMs, convertDateToUnixMidnightTime, convertISOStringToUTCDate, convertISOStringtoRFC3339String, isToday, isTomorrow, isValidDate, isYesterday, isCurrentMonth, isCurrentYear, formatTime, addTime };
//# sourceMappingURL=datetime.js.map