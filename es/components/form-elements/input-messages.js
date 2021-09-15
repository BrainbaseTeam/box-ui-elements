function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { FormattedMessage } from 'react-intl';
import commonMessages from '../../common/messages';

var badInput = function badInput() {
  return {
    code: 'badInput',
    message: React.createElement(FormattedMessage, commonMessages.invalidInputError)
  };
};

var patternMismatch = function patternMismatch() {
  return {
    code: 'patternMismatch',
    message: React.createElement(FormattedMessage, commonMessages.invalidInputError)
  };
};

var tooShort = function tooShort(minLength) {
  return {
    code: 'tooShort',
    message: React.createElement(FormattedMessage, _extends({}, commonMessages.minLengthError, {
      values: {
        min: minLength
      }
    }))
  };
};

var tooLong = function tooLong(maxLength) {
  return {
    code: 'tooLong',
    message: React.createElement(FormattedMessage, _extends({}, commonMessages.maxLengthError, {
      values: {
        max: maxLength
      }
    }))
  };
};

var typeMismatchEmail = function typeMismatchEmail() {
  return {
    code: 'typeMismatch',
    message: React.createElement(FormattedMessage, commonMessages.invalidEmailError)
  };
};

var typeMismatchUrl = function typeMismatchUrl() {
  return {
    code: 'typeMismatch',
    message: React.createElement(FormattedMessage, commonMessages.invalidURLError)
  };
};

var valueMissing = function valueMissing() {
  return {
    code: 'valueMissing',
    message: React.createElement(FormattedMessage, commonMessages.requiredFieldError)
  };
};

export { badInput, patternMismatch, tooShort, tooLong, typeMismatchEmail, typeMismatchUrl, valueMissing };
//# sourceMappingURL=input-messages.js.map