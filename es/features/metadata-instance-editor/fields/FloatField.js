import * as React from 'react';
import TextField from './TextField';
import { isValidValue } from './validateField';

var FloatField = function FloatField(_ref) {
  var dataKey = _ref.dataKey,
      dataValue = _ref.dataValue,
      displayName = _ref.displayName,
      description = _ref.description,
      error = _ref.error,
      _onChange = _ref.onChange,
      onRemove = _ref.onRemove,
      type = _ref.type;
  return /*#__PURE__*/React.createElement(TextField, {
    dataKey: dataKey,
    dataValue: dataValue,
    description: description,
    displayName: displayName,
    error: error,
    onChange: function onChange(key, value) {
      if (isValidValue(type, value)) {
        _onChange(key, value);
      }
    },
    onRemove: onRemove
  });
};

export default FloatField;
//# sourceMappingURL=FloatField.js.map