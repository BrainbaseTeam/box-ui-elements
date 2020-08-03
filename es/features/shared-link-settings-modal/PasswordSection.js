function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import Checkbox from '../../components/checkbox';
import TextInput from '../../components/text-input';
import Fieldset from '../../components/fieldset';
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
      _ref$passwordInputPro = _ref.passwordInputProps,
      passwordInputProps = _ref$passwordInputPro === void 0 ? {} : _ref$passwordInputPro;

  if (!isPasswordAvailable) {
    return null;
  }

  var passwordInput = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TextInput, _extends({
    disabled: !canChangePassword,
    error: error,
    hideLabel: true,
    isRequired: !isPasswordInitiallyEnabled,
    label: /*#__PURE__*/React.createElement(FormattedMessage, messages.passwordPlaceholder),
    maxLength: 100
    /* maxlength due to backend constraint */
    ,
    name: "password",
    onChange: onPasswordChange,
    placeholder: isPasswordInitiallyEnabled ? '••••••••' : formatMessage(messages.passwordPlaceholder),
    type: "password",
    value: password
  }, passwordInputProps)));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(Fieldset, {
    className: "password-section",
    title: /*#__PURE__*/React.createElement(FormattedMessage, messages.passwordTitle)
  }, /*#__PURE__*/React.createElement(Checkbox, _extends({
    isChecked: isPasswordEnabled,
    isDisabled: !canChangePassword,
    label: /*#__PURE__*/React.createElement(FormattedMessage, messages.passwordLabel),
    name: "isPasswordEnabled",
    onChange: onCheckboxChange,
    subsection: isPasswordEnabled ? passwordInput : undefined
  }, passwordCheckboxProps))));
};

PasswordSection.propTypes = {
  canChangePassword: PropTypes.bool.isRequired,
  error: PropTypes.string,
  intl: intlShape.isRequired,
  isPasswordAvailable: PropTypes.bool.isRequired,
  isPasswordEnabled: PropTypes.bool.isRequired,
  isPasswordInitiallyEnabled: PropTypes.bool.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  password: PropTypes.string,
  passwordCheckboxProps: PropTypes.object,
  passwordInputProps: PropTypes.object
};
export { PasswordSection as PasswordSectionBase };
export default injectIntl(PasswordSection);
//# sourceMappingURL=PasswordSection.js.map