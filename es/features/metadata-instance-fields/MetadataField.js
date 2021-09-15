import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import InlineError from '../../components/inline-error/InlineError';
import TextMetadataField from './TextMetadataField';
import EnumMetadataField from './EnumMetadataField';
import DateMetadataField from './DateMetadataField';
import FloatMetadataField from './FloatMetadataField';
import IntegerMetadataField from './IntegerMetadataField';
import MultiSelectMetadataField from './MultiSelectMetadataField';
import ReadOnlyMetadataField from './ReadOnlyMetadataField';
import messages from './messages';
import { FIELD_TYPE_ENUM, FIELD_TYPE_FLOAT, FIELD_TYPE_INTEGER, FIELD_TYPE_STRING, FIELD_TYPE_DATE, FIELD_TYPE_MULTISELECT } from './constants';

var MetadataField = function MetadataField(_ref) {
  var blurExceptionClassNames = _ref.blurExceptionClassNames,
      dataKey = _ref.dataKey,
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
    return React.createElement(ReadOnlyMetadataField, {
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
      return React.createElement(TextMetadataField, {
        dataKey: dataKey,
        dataValue: dataValue,
        description: description,
        displayName: displayName,
        onChange: onChange,
        onRemove: onRemove
      });

    case FIELD_TYPE_FLOAT:
      return React.createElement(FloatMetadataField, {
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
      return React.createElement(IntegerMetadataField, {
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
      return React.createElement(EnumMetadataField, {
        blurExceptionClassNames: blurExceptionClassNames,
        dataKey: dataKey,
        dataValue: dataValue,
        description: description,
        displayName: displayName,
        onChange: onChange,
        onRemove: onRemove,
        options: options
      });

    case FIELD_TYPE_MULTISELECT:
      return React.createElement(MultiSelectMetadataField, {
        blurExceptionClassNames: blurExceptionClassNames,
        dataKey: dataKey,
        dataValue: dataValue,
        description: description,
        displayName: displayName,
        onChange: onChange,
        onRemove: onRemove,
        options: options
      });

    case FIELD_TYPE_DATE:
      return React.createElement(DateMetadataField, {
        dataKey: dataKey,
        dataValue: dataValue,
        description: description,
        displayName: displayName,
        onChange: onChange,
        onRemove: onRemove
      });

    default:
      return React.createElement(InlineError, {
        title: type
      }, React.createElement(FormattedMessage, messages.invalidMetadataFieldType));
  }
};

export default MetadataField;
//# sourceMappingURL=MetadataField.js.map