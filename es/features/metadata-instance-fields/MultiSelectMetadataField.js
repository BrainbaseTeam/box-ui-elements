import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import Label from '../../components/label/Label';
import MultiSelect from '../../components/select-field/MultiSelectField';
import messages from './messages';
import './MultiSelectMetadataField.scss';

var MultiSelectMetadataField = function MultiSelectMetadataField(_ref) {
  var blurExceptionClassNames = _ref.blurExceptionClassNames,
      dataKey = _ref.dataKey,
      dataValue = _ref.dataValue,
      displayName = _ref.displayName,
      description = _ref.description,
      _onChange = _ref.onChange,
      onRemove = _ref.onRemove,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options;
  var placeholder = React.createElement(FormattedMessage, messages.metadataFieldMultiSelectValue);
  return React.createElement("div", {
    className: "bdl-MultiSelectMetadataField"
  }, React.createElement(Label, {
    text: displayName
  }, !!description && React.createElement("i", {
    className: "bdl-MultiSelectMetadataField-desc"
  }, description), React.createElement(MultiSelect, {
    blurExceptionClassNames: blurExceptionClassNames,
    isEscapedWithReference: true,
    isScrollable: true,
    onChange: function onChange(selectedOptions) {
      if (selectedOptions.length) {
        _onChange(dataKey, selectedOptions.map(function (_ref2) {
          var value = _ref2.value;
          return value;
        }));
      } else {
        onRemove(dataKey);
      }
    },
    options: options.map(function (option) {
      return {
        displayText: option.key,
        value: option.key
      };
    }),
    placeholder: placeholder,
    selectedValues: dataValue
  })));
};

export { MultiSelectMetadataField as MultiSelectMetadataFieldBase };
export default MultiSelectMetadataField;
//# sourceMappingURL=MultiSelectMetadataField.js.map