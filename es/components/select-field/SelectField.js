function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import getProp from 'lodash/get';
import SingleSelectPrimitive from './SingleSelectField';
import MultiSelectPrimitive from './MultiSelectField';

function createFakeSyntheticEvent(name, value) {
  return {
    currentTarget: {
      name: name,
      value: value
    },
    target: {
      name: name,
      value: value
    }
  };
}

function onSelect(name, onChange, options) {
  var value = Array.isArray(options) ? options.map(function (option) {
    return option.value;
  }) : options.value;
  onChange(createFakeSyntheticEvent(name, value));
}

var SelectField = function SelectField(_ref) {
  var field = _ref.field,
      form = _ref.form,
      multiple = _ref.multiple,
      rest = _objectWithoutProperties(_ref, ["field", "form", "multiple"]);

  var _onChange = field.onChange,
      name = field.name,
      value = field.value;
  var errors = form.errors,
      touched = form.touched;
  var isTouched = getProp(touched, name);
  var error = isTouched ? getProp(errors, name) : null;

  if (multiple) {
    return React.createElement(MultiSelectPrimitive, _extends({}, field, rest, {
      error: error,
      onChange: function onChange(options) {
        return onSelect(name, _onChange, options);
      },
      options: rest.options,
      selectedValues: value || []
    }));
  }

  return React.createElement(SingleSelectPrimitive, _extends({}, field, rest, {
    error: error,
    onChange: function onChange(options) {
      return onSelect(name, _onChange, options);
    },
    options: rest.options,
    selectedValue: value || null
  }));
};

export { onSelect };
export default SelectField;
//# sourceMappingURL=SelectField.js.map