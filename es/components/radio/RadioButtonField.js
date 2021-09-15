function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import RadioButton from './RadioButton';

var RadioButtonField = function RadioButtonField(_ref) {
  var field = _ref.field,
      value = _ref.value,
      rest = _objectWithoutProperties(_ref, ["field", "value"]);

  if (!field) {
    return React.createElement(RadioButton, _extends({
      value: value
    }, rest));
  }

  var fieldValue = field.value,
      fieldRest = _objectWithoutProperties(field, ["value"]);

  return React.createElement(RadioButton, _extends({}, fieldRest, rest, {
    value: value,
    isSelected: value === fieldValue
  }));
};

export default RadioButtonField;
//# sourceMappingURL=RadioButtonField.js.map