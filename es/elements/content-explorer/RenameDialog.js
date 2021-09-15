function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Content Explorer Rename Dialog
 * @author Box
 */
import React from 'react';
import Modal from 'react-modal';
import { injectIntl, FormattedMessage } from 'react-intl';
import PrimaryButton from '../../components/primary-button/PrimaryButton';
import Button from '../../components/button/Button';
import messages from '../common/messages';
import { CLASS_MODAL_CONTENT, CLASS_MODAL_OVERLAY, CLASS_MODAL, ERROR_CODE_ITEM_NAME_TOO_LONG, ERROR_CODE_ITEM_NAME_IN_USE } from '../../constants';

/* eslint-disable jsx-a11y/label-has-for */
var RenameDialog = function RenameDialog(_ref) {
  var isOpen = _ref.isOpen,
      onRename = _ref.onRename,
      onCancel = _ref.onCancel,
      item = _ref.item,
      isLoading = _ref.isLoading,
      errorCode = _ref.errorCode,
      parentElement = _ref.parentElement,
      appElement = _ref.appElement,
      intl = _ref.intl;
  var textInput = null;
  var error;
  var _item$name = item.name,
      name = _item$name === void 0 ? '' : _item$name,
      extension = item.extension;
  var ext = extension ? ".".concat(extension) : '';
  var nameWithoutExt = extension ? name.replace(ext, '') : name;
  /**
   * Appends the extension and calls rename function
   */

  var rename = function rename() {
    if (textInput && textInput.value) {
      if (textInput.value === nameWithoutExt) {
        onCancel();
      } else {
        onRename(textInput.value, ext);
      }
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
        rename();
        break;

      default:
        break;
    }
  };

  switch (errorCode) {
    case ERROR_CODE_ITEM_NAME_IN_USE:
      error = messages.renameDialogErrorInUse;
      break;

    case ERROR_CODE_ITEM_NAME_TOO_LONG:
      error = messages.renameDialogErrorTooLong;
      break;

    default:
      error = errorCode ? messages.renameDialogErrorInvalid : null;
      break;
  }

  return React.createElement(Modal, {
    appElement: appElement,
    className: CLASS_MODAL_CONTENT,
    contentLabel: intl.formatMessage(messages.renameDialogLabel),
    isOpen: isOpen,
    onRequestClose: onCancel,
    overlayClassName: CLASS_MODAL_OVERLAY,
    parentSelector: function parentSelector() {
      return parentElement;
    },
    portalClassName: "".concat(CLASS_MODAL, " be-modal-rename")
  }, React.createElement("label", null, error ? React.createElement("div", {
    className: "be-modal-error"
  }, React.createElement(FormattedMessage, _extends({}, error, {
    values: {
      name: nameWithoutExt
    }
  }))) : null, React.createElement(FormattedMessage, _extends({
    tagName: "div"
  }, messages.renameDialogText, {
    values: {
      name: nameWithoutExt
    }
  })), React.createElement("input", {
    ref: ref,
    defaultValue: nameWithoutExt,
    onKeyDown: onKeyDown,
    required: true,
    type: "text"
  })), React.createElement("div", {
    className: "be-modal-btns"
  }, React.createElement(PrimaryButton, {
    isLoading: isLoading,
    onClick: rename,
    type: "button"
  }, React.createElement(FormattedMessage, messages.rename)), React.createElement(Button, {
    isDisabled: isLoading,
    onClick: onCancel,
    type: "button"
  }, React.createElement(FormattedMessage, messages.cancel))));
};

export default injectIntl(RenameDialog);
//# sourceMappingURL=RenameDialog.js.map