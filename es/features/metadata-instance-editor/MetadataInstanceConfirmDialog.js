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
  var cancelButtonRef = React.useRef(null);
  React.useEffect(function () {
    if (cancelButtonRef.current) {
      cancelButtonRef.current.btnElement.focus();
    }
  }, []);
  return React.createElement("div", {
    className: "metadata-instance-confirm-cover"
  }, React.createElement("div", {
    className: "metadata-instance-confim-container",
    role: "alert"
  }, React.createElement("p", {
    className: "metadata-instance-confirm-text"
  }, confirmationMessage), React.createElement("div", {
    className: "metadata-instance-confirm-buttons"
  }, React.createElement(Button, {
    ref: cancelButtonRef,
    "data-resin-target": "metadata-confirmcancel",
    onClick: onCancel,
    type: "button"
  }, React.createElement(FormattedMessage, messages.metadataCancel)), React.createElement(PrimaryButton, {
    "data-resin-target": "metadata-confirmremove",
    onClick: onConfirm,
    type: "button"
  }, React.createElement(FormattedMessage, messages.customRemove)))));
};

export default MetadataInstanceConfirmDialog;
//# sourceMappingURL=MetadataInstanceConfirmDialog.js.map