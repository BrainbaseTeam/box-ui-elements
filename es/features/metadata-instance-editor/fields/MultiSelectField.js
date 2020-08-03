import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import Label from '../../../components/label/Label';
import MultiSelect from '../../../components/select-field/MultiSelectField';
import messages from '../messages';
import './MultiSelectField.scss';

var MultiSelectField = function MultiSelectField(_ref) {
  var dataKey = _ref.dataKey,
      dataValue = _ref.dataValue,
      displayName = _ref.displayName,
      description = _ref.description,
      _onChange = _ref.onChange,
      onRemove = _ref.onRemove,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options;
  var placeholder = /*#__PURE__*/React.createElement(FormattedMessage, messages.metadataFieldMultiSelectValue);
  return /*#__PURE__*/React.createElement("div", {
    className: "metadata-instance-editor-field-multi-select"
  }, /*#__PURE__*/React.createElement(Label, {
    text: displayName
  }, !!description && /*#__PURE__*/React.createElement("i", {
    className: "metadata-instance-editor-field-multi-select-desc"
  }, description), /*#__PURE__*/React.createElement(MultiSelect, {
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

export { MultiSelectField as MultiSelectFieldBase };
export default MultiSelectField;
//# sourceMappingURL=MultiSelectField.js.map