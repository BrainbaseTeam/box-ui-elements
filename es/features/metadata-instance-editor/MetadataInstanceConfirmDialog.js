import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '../../components/button/Button';
import PrimaryButton from '../../components/primary-button/PrimaryButton';
import messages from './messages';
import './MetadataInstanceConfirmDialog.scss';

var MetadataInstanceConfirmDialog = function MetadataInstanceConfirmDialog(_ref) {
  var onCancel = _ref.onCancel,
      onConfirm = _ref.onConfirm,
      confirmationMessage = _ref.confirmationMessage;
  return /*#__PURE__*/React.createElement("div", {
    className: "metadata-instance-confirm-cover"
  }, /*#__PURE__*/React.createElement("div", {
    className: "metadata-instance-confim-container"
  }, /*#__PURE__*/React.createElement("p", {
    className: "metadata-instance-confirm-text"
  }, confirmationMessage), /*#__PURE__*/React.createElement("div", {
    className: "metadata-instance-confirm-buttons"
  }, /*#__PURE__*/React.createElement(Button, {
    "data-resin-target": "metadata-confirmcancel",
    onClick: onCancel,
    type: "button"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.metadataCancel)), /*#__PURE__*/React.createElement(PrimaryButton, {
    "data-resin-target": "metadata-confirmremove",
    onClick: onConfirm,
    type: "button"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.customRemove)))));
};

export default MetadataInstanceConfirmDialog;
//# sourceMappingURL=MetadataInstanceConfirmDialog.js.map