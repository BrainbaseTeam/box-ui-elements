function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { FormattedMessage, FormattedDate } from 'react-intl';
import { convertISOStringToUTCDate } from '../../utils/datetime';
import { FIELD_TYPE_DATE } from './constants';
import messages from './messages';
import './ReadOnlyMetadataField.scss';

var ReadOnlyMetadataField = function ReadOnlyMetadataField(_ref) {
  var dataValue = _ref.dataValue,
      description = _ref.description,
      displayName = _ref.displayName,
      type = _ref.type;
  var value = React.createElement(FormattedMessage, _extends({
    tagName: "i"
  }, messages.metadataFieldNoValue));

  if (dataValue || typeof dataValue === 'number') {
    if (typeof dataValue === 'string' && type === FIELD_TYPE_DATE) {
      value = React.createElement(FormattedDate, {
        day: "numeric",
        month: "long",
        value: convertISOStringToUTCDate(dataValue),
        year: "numeric"
      });
    } else if (Array.isArray(dataValue)) {
      value = dataValue.join(', ');
    } else {
      value = dataValue;
    }
  }

  return React.createElement("dl", {
    className: "bdl-ReadOnlyMetadataField"
  }, React.createElement("dt", null, displayName), !!description && React.createElement("i", {
    className: "bdl-ReadOnlyMetadataField-desc"
  }, description), React.createElement("dd", null, value));
};

export default ReadOnlyMetadataField;
//# sourceMappingURL=ReadOnlyMetadataField.js.map