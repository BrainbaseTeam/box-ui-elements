import * as React from 'react';
import { injectIntl } from 'react-intl';
import DatePicker from '../../../components/date-picker';
import { convertISOStringToUTCDate } from '../../../utils/datetime';
import messages from '../messages';
import './DateField.scss';

var DateField = function DateField(_ref) {
  var dataKey = _ref.dataKey,
      dataValue = _ref.dataValue,
      displayName = _ref.displayName,
      description = _ref.description,
      intl = _ref.intl,
      _onChange = _ref.onChange,
      onRemove = _ref.onRemove;
  return /*#__PURE__*/React.createElement(DatePicker, {
    className: "metadata-instance-editor-field-date",
    dateFormat: "utcISOString",
    description: description,
    displayFormat: {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    },
    hideOptionalLabel: true,
    label: displayName,
    onChange: function onChange(date, isoDate) {
      if (isoDate) {
        _onChange(dataKey, isoDate);
      } else {
        onRemove(dataKey);
      }
    },
    placeholder: intl.formatMessage(messages.metadataFieldSetDate),
    value: typeof dataValue === 'string' ? convertISOStringToUTCDate(dataValue) : undefined
  });
};

export { DateField as DateFieldBase };
export default injectIntl(DateField);
//# sourceMappingURL=DateField.js.map