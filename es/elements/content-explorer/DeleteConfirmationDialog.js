function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Content Explorer Delete Confirmation Dialog
 * @author Box
 */
import React from 'react';
import Modal from 'react-modal';
import { injectIntl, FormattedMessage } from 'react-intl';
import PrimaryButton from '../../components/primary-button/PrimaryButton';
import Button from '../../components/button/Button';
import messages from '../common/messages';
import { CLASS_MODAL_CONTENT, CLASS_MODAL_OVERLAY, CLASS_MODAL, TYPE_FOLDER } from '../../constants';

var DeleteConfirmationDialog = function DeleteConfirmationDialog(_ref) {
  var isOpen = _ref.isOpen,
      onDelete = _ref.onDelete,
      onCancel = _ref.onCancel,
      item = _ref.item,
      isLoading = _ref.isLoading,
      parentElement = _ref.parentElement,
      appElement = _ref.appElement,
      intl = _ref.intl;
  var message = item.type === TYPE_FOLDER ? messages.deleteDialogFolderText : messages.deleteDialogFileText;
  return React.createElement(Modal, {
    appElement: appElement,
    className: CLASS_MODAL_CONTENT,
    contentLabel: intl.formatMessage(messages.deleteDialogLabel),
    isOpen: isOpen,
    onRequestClose: onCancel,
    overlayClassName: CLASS_MODAL_OVERLAY,
    parentSelector: function parentSelector() {
      return parentElement;
    },
    portalClassName: CLASS_MODAL
  }, React.createElement(FormattedMessage, _extends({}, message, {
    values: {
      name: item.name
    }
  })), React.createElement("div", {
    className: "be-modal-btns"
  }, React.createElement(PrimaryButton, {
    isLoading: isLoading,
    onClick: onDelete,
    type: "button"
  }, React.createElement(FormattedMessage, messages.delete)), React.createElement(Button, {
    autoFocus: true,
    isDisabled: isLoading,
    onClick: onCancel,
    type: "button"
  }, React.createElement(FormattedMessage, messages.cancel))));
};

export default injectIntl(DeleteConfirmationDialog);
//# sourceMappingURL=DeleteConfirmationDialog.js.map