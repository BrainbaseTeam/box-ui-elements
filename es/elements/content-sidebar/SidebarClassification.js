function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Classification sidebar component
 * @author Box
 */
import React from 'react';
import getProp from 'lodash/get';
import { FormattedMessage } from 'react-intl';
import Classification, { classificationMessages, EditClassificationButton } from '../../features/classification';
import { INTERACTION_TARGET, SECTION_TARGETS } from '../common/interactionTargets';
import Collapsible from '../../components/collapsible';
import { FIELD_PERMISSIONS_CAN_UPLOAD } from '../../constants';
import './SidebarClassification.scss';

var SidebarClassification = function SidebarClassification(_ref) {
  var classification = _ref.classification,
      file = _ref.file,
      onEdit = _ref.onEdit;
  var isEditable = !!onEdit && getProp(file, FIELD_PERMISSIONS_CAN_UPLOAD, false);
  var hasClassification = !!getProp(classification, 'name');

  if (!hasClassification && !isEditable) {
    return null;
  }

  return React.createElement(Collapsible, {
    buttonProps: _defineProperty({}, INTERACTION_TARGET, SECTION_TARGETS.CLASSIFICATION),
    className: "bcs-SidebarClassification",
    headerActionItems: isEditable ? React.createElement(EditClassificationButton, {
      className: "bcs-SidebarClassification-edit",
      isEditing: hasClassification,
      onEdit: onEdit
    }) : null,
    title: React.createElement(FormattedMessage, classificationMessages.classification)
  }, React.createElement(Classification, _extends({}, classification, {
    messageStyle: "inline"
  })));
};

export default SidebarClassification;
//# sourceMappingURL=SidebarClassification.js.map