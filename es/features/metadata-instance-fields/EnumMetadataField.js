import * as React from 'react';
import { injectIntl } from 'react-intl';
import Label from '../../components/label/Label';
import SingleSelectField from '../../components/select-field/SingleSelectField';
import messages from './messages';
import './EnumMetadataField.scss';

var EnumMetadataField = function EnumMetadataField(_ref) {
  var blurExceptionClassNames = _ref.blurExceptionClassNames,
      dataKey = _ref.dataKey,
      dataValue = _ref.dataValue,
      displayName = _ref.displayName,
      description = _ref.description,
      intl = _ref.intl,
      _onChange = _ref.onChange,
      onRemove = _ref.onRemove,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options;
  var selectOptions = options.map(function (option) {
    return {
      displayText: option.key,
      value: option.key,
      isSelectable: true
    };
  });
  var defaultValue = intl.formatMessage(messages.metadataFieldSelectValue);
  selectOptions.unshift({
    displayText: defaultValue,
    value: defaultValue,
    isSelectable: false
  });
  return React.createElement("div", {
    className: "bdl-EnumMetadataField"
  }, React.createElement(Label, {
    text: displayName
  }, !!description && React.createElement("i", {
    className: "bdl-EnumMetadataField-desc"
  }, description), React.createElement(SingleSelectField, {
    blurExceptionClassNames: blurExceptionClassNames,
    isEscapedWithReference: true,
    isScrollable: true,
    onChange: function onChange(option) {
      if (option.isSelectable) {
        _onChange(dataKey, option.value);
      } else if (onRemove) {
        onRemove(dataKey);
      }
    },
    options: selectOptions,
    selectedValue: // Conditional to make flow happy, dataValue should never be an array
    Array.isArray(dataValue) ? dataValue.join(', ') : dataValue || defaultValue
  })));
};

export { EnumMetadataField as EnumMetadataFieldBase };
export default injectIntl(EnumMetadataField);
//# sourceMappingURL=EnumMetadataField.js.map