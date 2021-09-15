import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import isNaN from 'lodash/isNaN';
import DatePicker from '../../../../components/date-picker';
import SingleSelectField from '../../../../components/select-field/SingleSelectField';
import MultiSelectField from '../../../../components/select-field/MultiSelectField';
import TextInput from '../../../../components/text-input';
import { DATE, ENUM, FLOAT, MULTI_SELECT, NUMBER, STRING, VALUE } from '../../constants';
import messages from '../../messages';
import '../../styles/Condition.scss';

var getDateValue = function getDateValue(selectedValues) {
  if (selectedValues.length === 0 || selectedValues[0] === null) {
    return undefined;
  }

  var value = selectedValues[0];
  var date = new Date(value);

  if (!isNaN(date.valueOf())) {
    return date;
  }

  throw new Error('Expected Date');
};

var getStringValue = function getStringValue(selectedValues) {
  if (selectedValues.length === 0) {
    return undefined;
  }

  var value = selectedValues[0];

  if (typeof value === 'string') {
    return value !== '' ? value : null;
  }

  throw new Error('Expected string');
};

var ValueField = function ValueField(_ref) {
  var error = _ref.error,
      _onChange = _ref.onChange,
      selectedValues = _ref.selectedValues,
      valueOptions = _ref.valueOptions,
      valueType = _ref.valueType;
  var value = selectedValues.length > 0 ? selectedValues[0] : '';

  var onInputChange = function onInputChange(e) {
    return e.target.value !== '' ? _onChange([e.target.value]) : _onChange([]);
  };

  switch (valueType) {
    case STRING:
    case NUMBER:
    case FLOAT:
      return React.createElement("div", {
        className: "filter-dropdown-text-field-container"
      }, React.createElement(TextInput, {
        error: error,
        errorPosition: "middle-left",
        hideLabel: true,
        label: "Text Input",
        name: "text",
        onChange: onInputChange,
        placeholder: "Enter ".concat(valueType === STRING ? 'value' : 'a number'),
        value: value
      }));

    case DATE:
      return React.createElement("div", {
        className: "filter-dropdown-date-field-container"
      }, React.createElement(DatePicker, {
        displayFormat: {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        },
        hideLabel: true,
        label: "Date",
        name: "datepicker",
        onChange: function onChange(date) {
          return _onChange([date]);
        },
        placeholder: "Date",
        value: getDateValue(selectedValues)
      }));

    case ENUM:
      return React.createElement(SingleSelectField, {
        fieldType: VALUE,
        onChange: function onChange(e) {
          return _onChange([e.value]);
        },
        options: valueOptions,
        placeholder: React.createElement(FormattedMessage, messages.selectValuePlaceholderText),
        selectedValue: getStringValue(selectedValues)
      });

    case MULTI_SELECT:
      return React.createElement(MultiSelectField, {
        fieldType: VALUE,
        onChange: function onChange(e) {
          return _onChange(e.map(function (option) {
            return option.value;
          }));
        },
        options: valueOptions,
        placeholder: React.createElement(FormattedMessage, messages.selectValuePlaceholderText),
        selectedValues: selectedValues
      });

    default:
      return null;
  }
};

export default ValueField;
//# sourceMappingURL=ValueField.js.map