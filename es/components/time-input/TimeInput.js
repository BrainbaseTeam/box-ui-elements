function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as React from 'react';
import classnames from 'classnames';
import debounce from 'lodash/debounce';
import { defineMessages, injectIntl, FormattedMessage } from 'react-intl';
import { TooltipPosition } from '../tooltip';
import { parseTimeFromString } from './TimeInputUtils'; // @ts-ignore flow import

import TextInput from '../text-input';
import ClockBadge16 from '../../icon/line/ClockBadge16'; // @ts-ignore flow import

import { DEFAULT_FORMAT_DEBOUNCE } from '../../constants';
import './TimeInput.scss';
var messages = defineMessages({
  invalidTimeError: {
    "id": "boxui.timeInput.invalidTimeError",
    "defaultMessage": "Invalid time format. Enter a time in the format HH:MM A."
  },
  emptyTimeError: {
    "id": "boxui.timeInput.emptyTimeError",
    "defaultMessage": "Required field. Enter a time in the format HH:MM A."
  }
});

var TimeInput = function TimeInput(_ref) {
  var className = _ref.className,
      _ref$errorTooltipPosi = _ref.errorTooltipPosition,
      errorTooltipPosition = _ref$errorTooltipPosi === void 0 ? TooltipPosition.MIDDLE_RIGHT : _ref$errorTooltipPosi,
      _ref$hideLabel = _ref.hideLabel,
      hideLabel = _ref$hideLabel === void 0 ? true : _ref$hideLabel,
      initialDate = _ref.initialDate,
      innerRef = _ref.innerRef,
      intl = _ref.intl,
      _ref$isRequired = _ref.isRequired,
      isRequired = _ref$isRequired === void 0 ? true : _ref$isRequired,
      label = _ref.label,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onError = _ref.onError;

  var _React$useState = React.useState(initialDate ? intl.formatTime(initialDate) : ''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      displayTime = _React$useState2[0],
      setDisplayTime = _React$useState2[1];

  var _React$useState3 = React.useState(undefined),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      error = _React$useState4[0],
      setError = _React$useState4[1];
  /**
   * Handle blur events.
   * Parse and reformat the current display time (as entered by the user).
   * @param latestValue - string
   * @returns
   */


  var formatDisplayTime = function formatDisplayTime() {
    var latestValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : displayTime;

    try {
      var _parseTimeFromString = parseTimeFromString(latestValue, isRequired),
          parsedHours = _parseTimeFromString.hours,
          parsedMinutes = _parseTimeFromString.minutes;

      var date = new Date();
      date.setHours(parsedHours);
      date.setMinutes(parsedMinutes);
      var newDisplayTime = intl.formatTime(date);
      setDisplayTime(newDisplayTime);
      if (onBlur) onBlur({
        displayTime: newDisplayTime,
        hours: parsedHours,
        minutes: parsedMinutes
      });
      if (onChange) onChange({
        displayTime: newDisplayTime,
        hours: parsedHours,
        minutes: parsedMinutes
      });
    } catch (e) {
      var errorMessage = latestValue ? messages.invalidTimeError : messages.emptyTimeError;
      var updatedError = React.createElement(FormattedMessage, errorMessage);
      setError(updatedError);
      if (onError) onError(updatedError);
    }
  };
  /**
   * Debounce formatDisplayTime() for use in handleChange().
   * useCallback() memoizes the debounced function, so that the debounced function
   * is not recreated on every re-render triggered by handleChange().
   */


  var debouncedFormatDisplayTime = React.useCallback(debounce(function (latestValue) {
    return formatDisplayTime(latestValue);
  }, DEFAULT_FORMAT_DEBOUNCE), []);
  /**
   * Handle change events.
   * Clear errors, update the value of the display time to match what the user typed,
   * and call the debounced version of formatDisplayTime().
   * @param event - ChangeEvent
   */

  var handleChange = function handleChange(event) {
    var updatedValue = event.target.value;
    setDisplayTime(updatedValue);
    if (error) setError(undefined);
    debouncedFormatDisplayTime(updatedValue);
  };
  /**
   * Handle blur events.
   */


  var handleBlur = function handleBlur() {
    formatDisplayTime(displayTime);
  };

  return React.createElement(TextInput, {
    className: classnames('bdl-TimeInput', className),
    error: error,
    hideLabel: hideLabel,
    icon: React.createElement(ClockBadge16, {
      className: "bdl-TimeInput-icon"
    }),
    inputRef: innerRef,
    isRequired: isRequired,
    label: label,
    onBlur: handleBlur,
    onChange: handleChange,
    position: errorTooltipPosition,
    type: "text",
    value: displayTime
  });
};

export { TimeInput as TimeInputComponent };
export default injectIntl(TimeInput);
//# sourceMappingURL=TimeInput.js.map