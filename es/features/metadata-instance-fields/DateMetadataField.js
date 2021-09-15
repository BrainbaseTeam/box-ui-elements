import * as React from 'react';
import { injectIntl } from 'react-intl';
import DatePicker from '../../components/date-picker';
import { convertISOStringToUTCDate } from '../../utils/datetime';
import messages from './messages';
import './DateMetadataField.scss';

var DateMetadataField = function DateMetadataField(_ref) {
  var dataKey = _ref.dataKey,
      dataValue = _ref.dataValue,
      displayName = _ref.displayName,
      description = _ref.description,
      intl = _ref.intl,
      _onChange = _ref.onChange,
      onRemove = _ref.onRemove;
  return React.createElement(DatePicker, {
    className: "bdl-DateMetadataField",
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

export { DateMetadataField as DateMetadataFieldBase };
export default injectIntl(DateMetadataField);
//# sourceMappingURL=DateMetadataField.js.map