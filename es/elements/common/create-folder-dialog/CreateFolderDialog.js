function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Content Explorer Create Folder Dialog
 * @author Box
 */
import React from 'react';
import Modal from 'react-modal';
import { injectIntl, FormattedMessage } from 'react-intl';
import PrimaryButton from '../../../components/primary-button/PrimaryButton';
import Button from '../../../components/button/Button';
import messages from '../messages';
import { CLASS_MODAL_CONTENT, CLASS_MODAL_OVERLAY, CLASS_MODAL, ERROR_CODE_ITEM_NAME_TOO_LONG, ERROR_CODE_ITEM_NAME_IN_USE } from '../../../constants';

/* eslint-disable jsx-a11y/label-has-for */
var CreateFolderDialog = function CreateFolderDialog(_ref) {
  var isOpen = _ref.isOpen,
      onCreate = _ref.onCreate,
      onCancel = _ref.onCancel,
      isLoading = _ref.isLoading,
      errorCode = _ref.errorCode,
      parentElement = _ref.parentElement,
      appElement = _ref.appElement,
      intl = _ref.intl;
  var textInput = null;
  var error;
  /**
   * Appends the extension and calls rename function
   */

  var create = function create() {
    if (textInput && textInput.value) {
      onCreate(textInput.value);
    }
  };
  /**
   * Grabs reference to the input element
   */


  var ref = function ref(input) {
    textInput = input;

    if (textInput instanceof HTMLInputElement) {
      textInput.focus();
      textInput.select();
    }
  };
  /**
   * Handles enter key down
   */


  var onKeyDown = function onKeyDown(_ref2) {
    var key = _ref2.key;

    switch (key) {
      case 'Enter':
        create();
        break;

      default:
        break;
    }
  };

  switch (errorCode) {
    case ERROR_CODE_ITEM_NAME_IN_USE:
      error = messages.createDialogErrorInUse;
      break;

    case ERROR_CODE_ITEM_NAME_TOO_LONG:
      error = messages.createDialogErrorTooLong;
      break;

    default:
      error = errorCode ? messages.createDialogErrorInvalid : null;
      break;
  }

  return /*#__PURE__*/React.createElement(Modal, {
    appElement: appElement,
    className: CLASS_MODAL_CONTENT,
    contentLabel: intl.formatMessage(messages.createDialogLabel),
    isOpen: isOpen,
    onRequestClose: onCancel,
    overlayClassName: CLASS_MODAL_OVERLAY,
    parentSelector: function parentSelector() {
      return parentElement;
    },
    portalClassName: CLASS_MODAL
  }, /*#__PURE__*/React.createElement("label", null, error ? /*#__PURE__*/React.createElement("div", {
    className: "be-modal-error"
  }, /*#__PURE__*/React.createElement(FormattedMessage, error)) : null, /*#__PURE__*/React.createElement(FormattedMessage, _extends({
    tagName: "div"
  }, messages.createDialogText)), /*#__PURE__*/React.createElement("input", {
    ref: ref,
    onKeyDown: onKeyDown,
    required: true,
    type: "text"
  })), /*#__PURE__*/React.createElement("div", {
    className: "be-modal-btns"
  }, /*#__PURE__*/React.createElement(PrimaryButton, {
    isLoading: isLoading,
    onClick: create,
    type: "button"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.create)), /*#__PURE__*/React.createElement(Button, {
    isDisabled: isLoading,
    onClick: onCancel,
    type: "button"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.cancel))));
};

export default injectIntl(CreateFolderDialog);
//# sourceMappingURL=CreateFolderDialog.js.map