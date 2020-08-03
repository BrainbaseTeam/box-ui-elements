import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import Field from './fields/Field';
import messages from './messages';
import { isHidden } from './metadataUtil';
import './TemplatedInstance.scss';

var TemplatedInstance = function TemplatedInstance(_ref) {
  var canEdit = _ref.canEdit,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      errors = _ref.errors,
      onFieldChange = _ref.onFieldChange,
      onFieldRemove = _ref.onFieldRemove,
      template = _ref.template;
  var _template$fields = template.fields,
      fields = _template$fields === void 0 ? [] : _template$fields;
  var hasFields = fields.length > 0;
  var hasVisibleFields = hasFields && fields.some(function (field) {
    return !isHidden(field);
  });
  var showNoFieldsMessage = !hasFields;
  var showHiddenFieldsMessage = hasFields && !hasVisibleFields;
  return /*#__PURE__*/React.createElement(React.Fragment, null, hasVisibleFields && fields.map(function (field) {
    return /*#__PURE__*/React.createElement(Field, {
      key: field.id,
      canEdit: canEdit,
      dataKey: field.key,
      dataValue: data[field.key],
      description: field.description,
      displayName: field.displayName,
      error: errors[field.key],
      isHidden: isHidden(field) // Checking both isHidden and hidden attributes due to differences in V2 and V3 APIs
      ,
      onChange: function onChange(key, value) {
        if (canEdit && onFieldChange) {
          onFieldChange(key, value, field.type);
        }
      },
      onRemove: function onRemove(key) {
        if (canEdit && onFieldRemove) {
          onFieldRemove(key);
        }
      },
      options: field.options,
      type: field.type
    });
  }), showHiddenFieldsMessage && /*#__PURE__*/React.createElement("div", {
    className: "attributes-hidden-message"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.allAttributesAreHidden)), showNoFieldsMessage && /*#__PURE__*/React.createElement("div", {
    className: "no-attributes-message"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.noAttributesForTemplate)));
};

export default TemplatedInstance;
//# sourceMappingURL=TemplatedInstance.js.map