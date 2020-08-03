import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import InlineError from '../../../components/inline-error/InlineError';
import TextField from './TextField';
import EnumField from './EnumField';
import DateField from './DateField';
import FloatField from './FloatField';
import IntegerField from './IntegerField';
import MultiSelectField from './MultiSelectField';
import ReadOnlyField from './ReadOnlyField';
import messages from '../messages';
import { FIELD_TYPE_ENUM, FIELD_TYPE_FLOAT, FIELD_TYPE_INTEGER, FIELD_TYPE_STRING, FIELD_TYPE_DATE, FIELD_TYPE_MULTISELECT } from '../constants';

var Field = function Field(_ref) {
  var dataKey = _ref.dataKey,
      dataValue = _ref.dataValue,
      displayName = _ref.displayName,
      description = _ref.description,
      error = _ref.error,
      isHidden = _ref.isHidden,
      canEdit = _ref.canEdit,
      onChange = _ref.onChange,
      onRemove = _ref.onRemove,
      options = _ref.options,
      type = _ref.type;

  if (isHidden) {
    return null;
  }

  if (!canEdit) {
    return /*#__PURE__*/React.createElement(ReadOnlyField, {
      dataValue: dataValue,
      description: description,
      displayName: displayName,
      type: type
    });
  }

  if (!onChange || !onRemove) {
    throw new Error('Need to have onChange and onRemove');
  }

  switch (type) {
    case FIELD_TYPE_STRING:
      return /*#__PURE__*/React.createElement(TextField, {
        dataKey: dataKey,
        dataValue: dataValue,
        description: description,
        displayName: displayName,
        onChange: onChange,
        onRemove: onRemove
      });

    case FIELD_TYPE_FLOAT:
      return /*#__PURE__*/React.createElement(FloatField, {
        dataKey: dataKey,
        dataValue: dataValue,
        description: description,
        displayName: displayName,
        error: error,
        onChange: onChange,
        onRemove: onRemove,
        type: type
      });

    case FIELD_TYPE_INTEGER:
      return /*#__PURE__*/React.createElement(IntegerField, {
        dataKey: dataKey,
        dataValue: dataValue,
        description: description,
        displayName: displayName,
        error: error,
        onChange: onChange,
        onRemove: onRemove,
        type: type
      });

    case FIELD_TYPE_ENUM:
      return /*#__PURE__*/React.createElement(EnumField, {
        dataKey: dataKey,
        dataValue: dataValue,
        description: description,
        displayName: displayName,
        onChange: onChange,
        onRemove: onRemove,
        options: options
      });

    case FIELD_TYPE_MULTISELECT:
      return /*#__PURE__*/React.createElement(MultiSelectField, {
        dataKey: dataKey,
        dataValue: dataValue,
        description: description,
        displayName: displayName,
        onChange: onChange,
        onRemove: onRemove,
        options: options
      });

    case FIELD_TYPE_DATE:
      return /*#__PURE__*/React.createElement(DateField, {
        dataKey: dataKey,
        dataValue: dataValue,
        description: description,
        displayName: displayName,
        onChange: onChange,
        onRemove: onRemove
      });

    default:
      return /*#__PURE__*/React.createElement(InlineError, {
        title: type
      }, /*#__PURE__*/React.createElement(FormattedMessage, messages.invalidMetadataFieldType));
  }
};

export default Field;
//# sourceMappingURL=Field.js.map