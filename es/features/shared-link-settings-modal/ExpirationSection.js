function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Checkbox from '../../components/checkbox';
import DatePicker from '../../components/date-picker';
import Fieldset from '../../components/fieldset';
import messages from './messages';
var displayFormat = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric'
};

var ExpirationSection = function ExpirationSection(_ref) {
  var canChangeExpiration = _ref.canChangeExpiration,
      error = _ref.error,
      _ref$expirationCheckb = _ref.expirationCheckboxProps,
      expirationCheckboxProps = _ref$expirationCheckb === void 0 ? {} : _ref$expirationCheckb,
      expirationDate = _ref.expirationDate,
      _ref$expirationInputP = _ref.expirationInputProps,
      expirationInputProps = _ref$expirationInputP === void 0 ? {} : _ref$expirationInputP,
      isExpirationEnabled = _ref.isExpirationEnabled,
      onCheckboxChange = _ref.onCheckboxChange,
      onExpirationDateChange = _ref.onExpirationDateChange;
  var tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  var datepicker = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DatePicker, {
    displayFormat: displayFormat,
    error: error,
    hideLabel: true,
    inputProps: expirationInputProps,
    isDisabled: !canChangeExpiration,
    isRequired: true,
    label: /*#__PURE__*/React.createElement(FormattedMessage, messages.expirationLabel),
    minDate: tomorrow,
    name: "expiration",
    onChange: onExpirationDateChange,
    value: expirationDate
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(Fieldset, {
    className: "expiration-section",
    title: /*#__PURE__*/React.createElement(FormattedMessage, messages.expirationTitle)
  }, /*#__PURE__*/React.createElement(Checkbox, _extends({
    isChecked: isExpirationEnabled,
    isDisabled: !canChangeExpiration,
    label: /*#__PURE__*/React.createElement(FormattedMessage, messages.expirationLabel),
    name: "isExpirationEnabled",
    onChange: onCheckboxChange,
    subsection: isExpirationEnabled ? datepicker : undefined
  }, expirationCheckboxProps))));
};

ExpirationSection.propTypes = {
  canChangeExpiration: PropTypes.bool.isRequired,
  error: PropTypes.string,
  expirationCheckboxProps: PropTypes.object,
  expirationDate: PropTypes.instanceOf(Date),
  expirationInputProps: PropTypes.object,
  isExpirationEnabled: PropTypes.bool.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
  onExpirationDateChange: PropTypes.func.isRequired
};
export default ExpirationSection;
//# sourceMappingURL=ExpirationSection.js.map