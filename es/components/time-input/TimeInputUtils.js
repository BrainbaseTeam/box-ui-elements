function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VALID_TIME_REGEX = /[\u4e0a\u4e0b\uc624]?[\u5348\ud6c4\uc804]?[0-9]{1,2}.?.?.?[0-9]{0,2}\s?[AaPp\u03C0\u03BC]?\.?\s?[Mm\u03BC]?/;
var AM_REGEX = /[Aa\u4e0a\u03C0\uc624]\.?\s?[Mm\u5348\ud6c4\u03BC\uc804]/;
var PM_REGEX = /[Pp\u4e0b\uc624\u03BC]\.?\s?[Mm\u5348\ud6c4\u03BC]/;
var NUMBER_REGEX = /[0-9]{1,2}/g;
var TWELVE_HOURS = 12;
var SIXTY_MINUTES = 60;
var DEFAULT_PARSED_TIME = {
  hours: 0,
  minutes: 0
};
var VALID_NUMBER_COUNT = 2;
/**
 * Check that the input string is in a valid time format
 * @param input - input string to test
 * @returns
 */

export var isValidTime = function isValidTime(input) {
  return !!input && VALID_TIME_REGEX.test(input);
};
/**
 * Parse an input string and convert it into an object containing numerical hours and minutes.
 * @param input - input string to be converted
 * @param isRequired - whether the input is required
 * @returns
 */

export var parseTimeFromString = function parseTimeFromString(input, isRequired) {
  // Return the default time (midnight) if the input is empty, but not required
  if (!input && !isRequired) return DEFAULT_PARSED_TIME; // Throw an error if the input is empty and required, or if the input fails the initial regex

  if (!input || !isValidTime(input)) {
    throw new SyntaxError();
  } // Throw an error if the input contains more than four numbers


  var timeArray = input.match(NUMBER_REGEX);
  if (!timeArray || !timeArray.length) return DEFAULT_PARSED_TIME;

  if (timeArray.length > VALID_NUMBER_COUNT) {
    throw new SyntaxError();
  } // If there are three numbers total, the regex match will split them
  // unevenly, loading two numbers for the hours value and one for the
  // minutes value. For instance, "305" would be split into ["30", "5"].
  // This should be ["3", "05"] instead, so we will move the second
  // number in the hours value to the beginning of the minutes value.


  var hasAMNotation = AM_REGEX.test(input);
  var hasPMNotation = PM_REGEX.test(input);

  var _timeArray = _slicedToArray(timeArray, 2),
      hours = _timeArray[0],
      minutes = _timeArray[1];

  if (hours && minutes && hours.length === 2 && minutes.length === 1) {
    minutes = hours[1] + minutes;
    hours = hours[0];
  } // Convert the minutes value into an integer


  var numericMinutes = minutes ? parseInt(minutes, 10) : 0; // Set the hours to "0" if the input translates to midnight
  // Convert the hours to 24-hour format if this is a PM time

  var numericHours = parseInt(hours, 10);

  if (hasAMNotation && numericHours === TWELVE_HOURS) {
    numericHours = 0;
  } else if (hasPMNotation && numericHours < TWELVE_HOURS) {
    numericHours += TWELVE_HOURS;
  } // Throw an error if the hours or minutes are out of range


  if (numericHours > TWELVE_HOURS * 2 || numericMinutes >= SIXTY_MINUTES) {
    throw new SyntaxError();
  }

  return {
    hours: numericHours,
    minutes: numericMinutes
  };
};
//# sourceMappingURL=TimeInputUtils.js.map