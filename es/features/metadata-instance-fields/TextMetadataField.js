import * as React from 'react';
import { injectIntl } from 'react-intl';
import TextInput from '../../components/text-input';
import messages from './messages';
import './TextMetadataField.scss';

var TextMetadataField = function TextMetadataField(_ref) {
  var dataKey = _ref.dataKey,
      dataValue = _ref.dataValue,
      displayName = _ref.displayName,
      description = _ref.description,
      error = _ref.error,
      intl = _ref.intl,
      _onChange = _ref.onChange,
      onRemove = _ref.onRemove,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type;
  var value = '';

  if (typeof dataValue === 'number') {
    value = dataValue;
  } else if (dataValue) {
    value = dataValue;
  }

  return React.createElement(TextInput, {
    className: "bdl-TextMetadataField",
    description: description,
    error: error,
    hideOptionalLabel: true,
    label: displayName,
    name: dataKey,
    onChange: function onChange(event) {
      var currentTarget = event.currentTarget;

      if (currentTarget.value) {
        _onChange(dataKey, currentTarget.value);
      } else {
        onRemove(dataKey);
      }
    },
    placeholder: intl.formatMessage(messages.metadataFieldSetValue),
    type: type,
    value: value
  });
};

export { TextMetadataField as TextMetadataFieldBase };
export default injectIntl(TextMetadataField);
//# sourceMappingURL=TextMetadataField.js.map