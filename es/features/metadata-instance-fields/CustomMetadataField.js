import * as React from 'react';
import { injectIntl } from 'react-intl';
import Button from '../../components/button/Button';
import ButtonGroup from '../../components/button-group/ButtonGroup';
import IconMinus from '../../icons/general/IconMinusThin';
import IconPlus from '../../icons/general/IconPlusThin';
import Field from './MetadataField';
import messages from './messages';
import './CustomMetadataField.scss';
var COLOR_999 = '#999';

var CustomMetadataField = function CustomMetadataField(_ref) {
  var intl = _ref.intl,
      canEdit = _ref.canEdit,
      isLast = _ref.isLast,
      dataKey = _ref.dataKey,
      dataValue = _ref.dataValue,
      onAdd = _ref.onAdd,
      onChange = _ref.onChange,
      onRemove = _ref.onRemove;
  var addBtn = React.createElement(Button, {
    "aria-label": intl.formatMessage(messages.customAdd),
    "data-resin-target": "metadata-customfieldnew",
    onClick: onAdd,
    type: "button"
  }, React.createElement(IconPlus, {
    color: COLOR_999
  }));
  var removeBtn = React.createElement(Button, {
    "aria-label": intl.formatMessage(messages.customRemove),
    "data-resin-target": "metadata-customfieldremove",
    onClick: function onClick() {
      if (onRemove) {
        onRemove(dataKey);
      }
    },
    type: "button"
  }, React.createElement(IconMinus, {
    color: COLOR_999
  }));
  return React.createElement("div", {
    className: "bdl-CustomMetadataField"
  }, React.createElement(Field, {
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
  }), canEdit && React.createElement("div", {
    className: "bdl-CustomMetadataField-customActions"
  }, isLast ? React.createElement(ButtonGroup, null, removeBtn, addBtn) : removeBtn));
};

export { CustomMetadataField as CustomMetadataFieldBase };
export default injectIntl(CustomMetadataField);
//# sourceMappingURL=CustomMetadataField.js.map