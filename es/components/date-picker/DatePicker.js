function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { defineMessages, injectIntl, FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import Pikaday from 'pikaday';
import range from 'lodash/range';
import { RESIN_TAG_TARGET } from '../../common/variables';
import IconAlert from '../../icons/general/IconAlert';
import IconCalendar from '../../icons/general/IconCalendar';
import IconClear from '../../icons/general/IconClear';
import Label from '../label';
import PlainButton from '../plain-button';
import Tooltip from '../tooltip';
import { convertDateToUnixMidnightTime } from '../../utils/datetime';
import './DatePicker.scss';
var messages = defineMessages({
  previousMonth: {
    "id": "boxui.base.previousMonth",
    "defaultMessage": "Previous Month"
  },
  nextMonth: {
    "id": "boxui.base.nextMonth",
    "defaultMessage": "Next Month"
  },
  iconAlertText: {
    "id": "boxui.datePicker.iconAlertText",
    "defaultMessage": "Invalid Date"
  },
  dateClearButton: {
    "id": "boxui.datePicker.dateClearButton",
    "defaultMessage": "Clear Date"
  },
  chooseDate: {
    "id": "boxui.datePicker.chooseDate",
    "defaultMessage": "Choose Date"
  }
});
var TOGGLE_DELAY_MS = 300;
var ISO_STRING_DATE_FORMAT = 'isoString';
var UTC_TIME_DATE_FORMAT = 'utcTime';
var UNIX_TIME_DATE_FORMAT = 'unixTime';
var UTC_ISO_STRING_DATE_FORMAT = 'utcISOString';
var ENTER_KEY = 'Enter';
var ESCAPE_KEY = 'Escape';
var TAB_KEY = 'Tab';

var stub = function stub() {};
/**
 * Converts date from being relative to GMT, to being relative to browser
 * timezone. E.g., Thu Jun 29 2017 00:00:00 GMT =>
 * Thu Jun 29 2017 00:00:00 GMT-0700 (PDT)
 * @param {Date} date UTC date
 * @returns {Date} date Local date
 */


function convertUTCToLocal(date) {
  var dateString = date.toUTCString(); // Remove ` GMT` from the timestamp string

  var dateStringWithoutTimeZone = dateString.slice(0, -4);
  return new Date(dateStringWithoutTimeZone);
}

function getFormattedDate(date, format) {
  if (!date) {
    return '';
  }

  var utcDate;

  switch (format) {
    case ISO_STRING_DATE_FORMAT:
      return date.toISOString();

    case UTC_TIME_DATE_FORMAT:
      return convertDateToUnixMidnightTime(date);

    case UTC_ISO_STRING_DATE_FORMAT:
      utcDate = new Date(convertDateToUnixMidnightTime(date));
      return utcDate.toISOString();

    default:
      return date.getTime();
  }
}

var DatePicker = /*#__PURE__*/function (_React$Component) {
  _inherits(DatePicker, _React$Component);

  var _super = _createSuper(DatePicker);

  function DatePicker() {
    var _this;

    _classCallCheck(this, DatePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onSelectHandler", function (date) {
      var onChange = _this.props.onChange;

      if (onChange) {
        var formattedDate = _this.formatValue(date);

        onChange(date, formattedDate);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "shouldStayClosed", false);

    _defineProperty(_assertThisInitialized(_this), "focusDatePicker", function () {
      // By default, this will open the datepicker too
      if (_this.dateInputEl) {
        _this.dateInputEl.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputKeyDown", function (event) {
      var isTextInputAllowed = _this.props.isTextInputAllowed;

      if (_this.datePicker.isVisible()) {
        event.stopPropagation();
      } // Stops up/down arrow & spacebar from moving page scroll position since pikaday does not preventDefault correctly


      if (!isTextInputAllowed && event.key !== TAB_KEY) {
        event.preventDefault();
      }

      if (isTextInputAllowed && event.key === ENTER_KEY) {
        event.preventDefault();
      }

      if (event.key === ENTER_KEY || event.key === ESCAPE_KEY || event.key === ' ') {
        // Since pikaday auto-selects when you move the select box, enter/space don't do anything but close the date picker
        if (_this.datePicker.isVisible()) {
          _this.datePicker.hide();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputBlur", function (event) {
      var _this$props = _this.props,
          onBlur = _this$props.onBlur,
          isTextInputAllowed = _this$props.isTextInputAllowed;
      var nextActiveElement = event.relatedTarget || document.activeElement; // This is mostly here to cancel out the pikaday hide() on blur

      if (_this.datePicker.isVisible() && nextActiveElement && nextActiveElement === _this.datePickerButtonEl) {
        _this.shouldStayClosed = true;
        setTimeout(function () {
          _this.shouldStayClosed = false;
        }, TOGGLE_DELAY_MS);
      }

      if (onBlur) {
        onBlur(event);
      } // Since we Fire parent onChange event if isTextInputAllowed
      // fire it on blur if the user typed a correct date format


      var inputDate = null;

      if (_this.dateInputEl) {
        inputDate = new Date(_this.dateInputEl.value);
      }

      if (isTextInputAllowed && inputDate && inputDate.getDate()) {
        _this.onSelectHandler(inputDate);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleButtonClick", function (event) {
      event.preventDefault();

      if (!_this.shouldStayClosed) {
        _this.focusDatePicker();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "formatDisplay", function (date) {
      var _this$props2 = _this.props,
          displayFormat = _this$props2.displayFormat,
          intl = _this$props2.intl;
      return date ? intl.formatDate(date, displayFormat) : '';
    });

    _defineProperty(_assertThisInitialized(_this), "formatValue", function (date) {
      var dateFormat = _this.props.dateFormat;
      return getFormattedDate(date, dateFormat);
    });

    _defineProperty(_assertThisInitialized(_this), "clearDate", function (event) {
      event.preventDefault(); // so datepicker doesn't open after clearing

      _this.datePicker.setDate(null);

      _this.onSelectHandler(null);
    });

    return _this;
  }

  _createClass(DatePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props3 = this.props,
          dateFormat = _this$props3.dateFormat,
          intl = _this$props3.intl,
          maxDate = _this$props3.maxDate,
          minDate = _this$props3.minDate,
          value = _this$props3.value,
          yearRange = _this$props3.yearRange,
          isTextInputAllowed = _this$props3.isTextInputAllowed;
      var formatDate = intl.formatDate,
          formatMessage = intl.formatMessage;
      var nextMonth = messages.nextMonth,
          previousMonth = messages.previousMonth;
      var defaultValue = value; // When date format is utcTime, initial date needs to be converted from being relative to GMT to being
      // relative to browser timezone

      if (dateFormat === UTC_TIME_DATE_FORMAT && typeof value !== 'undefined') {
        defaultValue = convertUTCToLocal(value);
      } // Make sure the DST detection algorithm in browsers is up-to-date


      var year = new Date().getFullYear();
      var i18n = {
        previousMonth: formatMessage(previousMonth),
        nextMonth: formatMessage(nextMonth),
        months: range(12).map(function (month) {
          return formatDate(new Date(year, month, 15), {
            month: 'long'
          });
        }),
        // weekdays must start with Sunday, so array of dates below is May 1st-8th, 2016
        weekdays: range(1, 8).map(function (date) {
          return formatDate(new Date(2016, 4, date), {
            weekday: 'long'
          });
        }),
        weekdaysShort: range(1, 8).map(function (date) {
          return formatDate(new Date(2016, 4, date), {
            weekday: 'narrow'
          });
        })
      };
      this.datePicker = new Pikaday({
        blurFieldOnSelect: false,
        // Available in pikaday > 1.5.1
        setDefaultDate: true,
        defaultDate: defaultValue,
        field: this.dateInputEl,
        maxDate: maxDate,
        minDate: minDate,
        position: 'bottom left',
        i18n: i18n,
        showDaysInNextAndPreviousMonths: true,
        onSelect: this.onSelectHandler,
        yearRange: yearRange,
        toString: this.formatDisplay
      });

      if (isTextInputAllowed) {
        this.updateDateInputValue(this.formatDisplay(defaultValue));
      }
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var nextValue = nextProps.value,
          nextMinDate = nextProps.minDate,
          nextMaxDate = nextProps.maxDate;
      var _this$props4 = this.props,
          value = _this$props4.value,
          minDate = _this$props4.minDate,
          maxDate = _this$props4.maxDate,
          isTextInputAllowed = _this$props4.isTextInputAllowed; // only set date when props change

      if (nextValue && !value || !nextValue && value || nextValue && value && nextValue.getTime() !== value.getTime()) {
        this.datePicker.setDate(nextValue);
      } // If text input is allowed the dateInputEl will act as an uncontrolled input and
      // we need to set formatted value manually.


      if (isTextInputAllowed) {
        this.updateDateInputValue(this.formatDisplay(nextValue));
      }

      if (nextMinDate && !minDate || !nextMinDate && minDate || nextMinDate && minDate && nextMinDate.getTime() !== minDate.getTime()) {
        this.datePicker.setMinDate(nextMinDate);

        if (this.datePicker.getDate() < nextMinDate) {
          this.datePicker.gotoDate(nextMinDate);
        }
      }

      if (nextMaxDate && !maxDate || !nextMaxDate && maxDate || nextMaxDate && maxDate && nextMaxDate.getTime() !== maxDate.getTime()) {
        this.datePicker.setMaxDate(nextMaxDate);

        if (this.datePicker.getDate() > nextMaxDate) {
          this.datePicker.gotoDate(nextMaxDate);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.datePicker.destroy();
    }
  }, {
    key: "updateDateInputValue",
    value: function updateDateInputValue(value) {
      if (this.dateInputEl) {
        this.dateInputEl.value = value;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props5 = this.props,
          className = _this$props5.className,
          description = _this$props5.description,
          error = _this$props5.error,
          errorTooltipPosition = _this$props5.errorTooltipPosition,
          hideLabel = _this$props5.hideLabel,
          hideOptionalLabel = _this$props5.hideOptionalLabel,
          inputProps = _this$props5.inputProps,
          intl = _this$props5.intl,
          isClearable = _this$props5.isClearable,
          isDisabled = _this$props5.isDisabled,
          isRequired = _this$props5.isRequired,
          isTextInputAllowed = _this$props5.isTextInputAllowed,
          label = _this$props5.label,
          name = _this$props5.name,
          onFocus = _this$props5.onFocus,
          placeholder = _this$props5.placeholder,
          resinTarget = _this$props5.resinTarget,
          value = _this$props5.value;
      var formatMessage = intl.formatMessage;
      var classes = classNames(className, 'date-picker-wrapper', {
        'show-clear-btn': !!value,
        'show-error': !!error
      });
      var resinTargetAttr = resinTarget ? _defineProperty({}, RESIN_TAG_TARGET, resinTarget) : {};
      var valueAttr = isTextInputAllowed ? {
        defaultValue: this.formatDisplay(value)
      } : {
        value: this.formatDisplay(value)
      };
      var onChangeAttr = isTextInputAllowed ? {} : {
        onChange: stub
      };
      /* fixes proptype error about readonly field (not adding readonly so constraint validation works) */

      return /*#__PURE__*/React.createElement("div", {
        className: classes
      }, /*#__PURE__*/React.createElement("span", {
        className: "date-picker-icon-holder"
      }, /*#__PURE__*/React.createElement(Label, {
        hideLabel: hideLabel,
        showOptionalText: !hideOptionalLabel && !isRequired,
        text: label
      }, !!description && /*#__PURE__*/React.createElement("i", {
        className: "date-picker-description"
      }, description), /*#__PURE__*/React.createElement(Tooltip, {
        className: "date-picker-error-tooltip",
        isShown: !!error,
        position: errorTooltipPosition,
        text: error || '',
        theme: "error"
      }, /*#__PURE__*/React.createElement("input", _extends({
        ref: function ref(_ref2) {
          _this2.dateInputEl = _ref2;
        },
        className: "date-picker-input",
        disabled: isDisabled,
        onBlur: this.handleInputBlur,
        placeholder: placeholder || formatMessage(messages.chooseDate),
        required: isRequired,
        type: "text"
      }, onChangeAttr, {
        onFocus: onFocus,
        onKeyDown: this.handleInputKeyDown
      }, resinTargetAttr, inputProps, valueAttr)))), isClearable && !!value && !isDisabled ? /*#__PURE__*/React.createElement(PlainButton, {
        "aria-label": formatMessage(messages.dateClearButton),
        className: "date-picker-clear-btn",
        onClick: this.clearDate,
        type: "button"
      }, /*#__PURE__*/React.createElement(IconClear, {
        height: 12,
        width: 12
      })) : null, error ? /*#__PURE__*/React.createElement(IconAlert, {
        className: "date-picker-icon-alert",
        height: 13,
        title: /*#__PURE__*/React.createElement(FormattedMessage, messages.iconAlertText),
        width: 13
      }) : null, /*#__PURE__*/React.createElement(PlainButton, {
        "aria-label": formatMessage(messages.chooseDate),
        className: "date-picker-open-btn",
        disabled: isDisabled,
        getDOMRef: function getDOMRef(ref) {
          _this2.datePickerButtonEl = ref;
        },
        onClick: this.handleButtonClick,
        type: "button"
      }, /*#__PURE__*/React.createElement(IconCalendar, {
        height: 17,
        width: 16
      })), /*#__PURE__*/React.createElement("input", {
        className: "date-picker-unix-time-input",
        name: name,
        readOnly: true,
        type: "hidden",
        value: this.formatValue(value)
      })));
    }
  }]);

  return DatePicker;
}(React.Component);

_defineProperty(DatePicker, "defaultProps", {
  className: '',
  dateFormat: UNIX_TIME_DATE_FORMAT,
  displayFormat: {},
  error: '',
  errorTooltipPosition: 'bottom-left',
  inputProps: {},
  isClearable: true,
  isTextInputAllowed: false,
  yearRange: 10
});

export { DatePicker as DatePickerBase };
export default injectIntl(DatePicker);
//# sourceMappingURL=DatePicker.js.map