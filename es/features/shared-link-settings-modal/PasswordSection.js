function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import Checkbox from '../../components/checkbox';
import TextInput from '../../components/text-input';
import Fieldset from '../../components/fieldset';
import ExclamationMarkBadge16 from '../../icon/line/ExclamationMarkBadge16';
import messages from './messages';

var PasswordSection = function PasswordSection(_ref) {
  var canChangePassword = _ref.canChangePassword,
      error = _ref.error,
      formatMessage = _ref.intl.formatMessage,
      isPasswordAvailable = _ref.isPasswordAvailable,
      isPasswordEnabled = _ref.isPasswordEnabled,
      isPasswordInitiallyEnabled = _ref.isPasswordInitiallyEnabled,
      onCheckboxChange = _ref.onCheckboxChange,
      onPasswordChange = _ref.onPasswordChange,
      password = _ref.password,
      _ref$passwordCheckbox = _ref.passwordCheckboxProps,
      passwordCheckboxProps = _ref$passwordCheckbox === void 0 ? {} : _ref$passwordCheckbox,
      passwordInformationText = _ref.passwordInformationText,
      _ref$passwordInputPro = _ref.passwordInputProps,
      passwordInputProps = _ref$passwordInputPro === void 0 ? {} : _ref$passwordInputPro;

  if (!isPasswordAvailable) {
    return null;
  }

  var passwordInput = React.createElement("div", null, React.createElement(TextInput, _extends({
    disabled: !canChangePassword,
    error: error,
    hideLabel: true,
    isRequired: !isPasswordInitiallyEnabled,
    label: React.createElement(FormattedMessage, messages.passwordPlaceholder),
    maxLength: 100
    /* maxlength due to backend constraint */
    ,
    name: "password",
    onChange: onPasswordChange,
    placeholder: isPasswordInitiallyEnabled ? '••••••••' : formatMessage(messages.passwordPlaceholder),
    type: "password",
    value: password
  }, passwordInputProps)), passwordInformationText && React.createElement("div", {
    className: "be password-section-information"
  }, React.createElement("span", null, React.createElement(ExclamationMarkBadge16, {
    className: "password-section-information-icon",
    height: 12,
    width: 12
  })), React.createElement("span", {
    className: "password-section-information-text"
  }, passwordInformationText)));
  return React.createElement("div", null, React.createElement("hr", null), React.createElement(Fieldset, {
    className: "be password-section",
    title: React.createElement(FormattedMessage, messages.passwordTitle)
  }, React.createElement(Checkbox, _extends({
    isChecked: isPasswordEnabled,
    isDisabled: !canChangePassword,
    label: React.createElement(FormattedMessage, messages.passwordLabel),
    name: "isPasswordEnabled",
    onChange: onCheckboxChange,
    subsection: isPasswordEnabled ? passwordInput : undefined
  }, passwordCheckboxProps))));
};

PasswordSection.propTypes = {
  canChangePassword: PropTypes.bool.isRequired,
  error: PropTypes.string,
  intl: PropTypes.any,
  isPasswordAvailable: PropTypes.bool.isRequired,
  isPasswordEnabled: PropTypes.bool.isRequired,
  isPasswordInitiallyEnabled: PropTypes.bool.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  password: PropTypes.string,
  passwordCheckboxProps: PropTypes.object,
  passwordInformationText: PropTypes.string,
  passwordInputProps: PropTypes.object
};
export { PasswordSection as PasswordSectionBase };
export default injectIntl(PasswordSection);
//# sourceMappingURL=PasswordSection.js.map