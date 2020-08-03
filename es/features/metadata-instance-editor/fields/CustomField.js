import * as React from 'react';
import { injectIntl } from 'react-intl';
import Button from '../../../components/button/Button';
import ButtonGroup from '../../../components/button-group/ButtonGroup';
import IconMinus from '../../../icons/general/IconMinusThin';
import IconPlus from '../../../icons/general/IconPlusThin';
import Field from './Field';
import messages from '../messages';
import './CustomField.scss';
var COLOR_999 = '#999';

var CustomField = function CustomField(_ref) {
  var intl = _ref.intl,
      canEdit = _ref.canEdit,
      isLast = _ref.isLast,
      dataKey = _ref.dataKey,
      dataValue = _ref.dataValue,
      onAdd = _ref.onAdd,
      onChange = _ref.onChange,
      onRemove = _ref.onRemove;
  var addBtn = /*#__PURE__*/React.createElement(Button, {
    "aria-label": intl.formatMessage(messages.customAdd),
    "data-resin-target": "metadata-customfieldnew",
    onClick: onAdd,
    type: "button"
  }, /*#__PURE__*/React.createElement(IconPlus, {
    color: COLOR_999
  }));
  var removeBtn = /*#__PURE__*/React.createElement(Button, {
    "aria-label": intl.formatMessage(messages.customRemove),
    "data-resin-target": "metadata-customfieldremove",
    onClick: function onClick() {
      if (onRemove) {
        onRemove(dataKey);
      }
    },
    type: "button"
  }, /*#__PURE__*/React.createElement(IconMinus, {
    color: COLOR_999
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "metadata-instance-editor-field-custom"
  }, /*#__PURE__*/React.createElement(Field, {
    canEdit: canEdit,
    dataKey: dataKey,
    dataValue: dataValue,
    displayName: dataKey,
    onChange: onChange // Custom metadata doesn't allow removing of props if the value is emptied out, leave it as empty string
    ,
    onRemove: function onRemove(key) {
      return onChange(key, '');
    },
    type: "string"
  }), canEdit && /*#__PURE__*/React.createElement("div", {
    className: "metadata-instance-editor-field-custom-actions"
  }, isLast ? /*#__PURE__*/React.createElement(ButtonGroup, null, removeBtn, addBtn) : removeBtn));
};

export { CustomField as CustomFieldBase };
export default injectIntl(CustomField);
//# sourceMappingURL=CustomField.js.map