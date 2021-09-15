import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Modal, ModalActions } from '../../components/modal';
import Button from '../../components/button';
import PrimaryButton from '../../components/primary-button';
import commonMessages from '../../common/messages';
import messages from './messages';

var RemoveLinkConfirmModal = function RemoveLinkConfirmModal(props) {
  var isOpen = props.isOpen,
      onRequestClose = props.onRequestClose,
      removeLink = props.removeLink,
      submitting = props.submitting;
  return React.createElement(Modal, {
    focusElementSelector: ".btn-primary",
    isOpen: isOpen,
    onRequestClose: submitting ? undefined : onRequestClose,
    title: React.createElement(FormattedMessage, messages.removeLinkConfirmationTitle),
    type: "alert"
  }, React.createElement(FormattedMessage, messages.removeLinkConfirmationDescription), React.createElement(ModalActions, null, React.createElement(Button, {
    isDisabled: submitting,
    onClick: onRequestClose
  }, React.createElement(FormattedMessage, commonMessages.cancel)), React.createElement(PrimaryButton, {
    isDisabled: submitting,
    isLoading: submitting,
    onClick: removeLink
  }, React.createElement(FormattedMessage, commonMessages.okay))));
};

RemoveLinkConfirmModal.displayName = 'RemoveLinkConfirmModal';
export default RemoveLinkConfirmModal;
//# sourceMappingURL=RemoveLinkConfirmModal.js.map