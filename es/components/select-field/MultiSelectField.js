function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import React from 'react';
import { injectIntl } from 'react-intl';
import BaseSelectField from './BaseSelectField';
import CLEAR from './constants';
import messages from './messages';

var optionsWithClearOption = function optionsWithClearOption(options, shouldShowClearOption, intl) {
  return shouldShowClearOption ? [{
    value: CLEAR,
    displayText: intl.formatMessage(messages.clearAll)
  }].concat(_toConsumableArray(options)) : options;
};

var MultiSelectField = function MultiSelectField(_ref) {
  var intl = _ref.intl,
      options = _ref.options,
      shouldShowClearOption = _ref.shouldShowClearOption,
      rest = _objectWithoutProperties(_ref, ["intl", "options", "shouldShowClearOption"]);

  return React.createElement(BaseSelectField, _extends({}, rest, {
    shouldShowClearOption: shouldShowClearOption,
    options: optionsWithClearOption(options, shouldShowClearOption, intl),
    multiple: true
  }));
};

export { MultiSelectField as MultiSelectFieldBase };
export default injectIntl(MultiSelectField);
//# sourceMappingURL=MultiSelectField.js.map