function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Content Explorer Delete Confirmation Dialog
 * @author Box
 */
import React from 'react';
import Modal from 'react-modal';
import noop from 'lodash/noop';
import { injectIntl, FormattedMessage } from 'react-intl';
import PrimaryButton from '../../components/primary-button/PrimaryButton';
import Button from '../../components/button/Button';
import messages from '../common/messages';
import ShareAccessSelect from '../common/share-access-select';
import { CLASS_MODAL_CONTENT, CLASS_MODAL_OVERLAY, CLASS_MODAL } from '../../constants';
import './ShareDialog.scss';

var ShareDialog = function ShareDialog(_ref) {
  var isOpen = _ref.isOpen,
      canSetShareAccess = _ref.canSetShareAccess,
      onShareAccessChange = _ref.onShareAccessChange,
      onCancel = _ref.onCancel,
      item = _ref.item,
      isLoading = _ref.isLoading,
      parentElement = _ref.parentElement,
      appElement = _ref.appElement,
      intl = _ref.intl;
  var textInput = null;

  var copy = function copy() {
    if (textInput instanceof HTMLInputElement) {
      textInput.select();
      document.execCommand('copy');
    }
  };

  var sharedLink = item.shared_link;

  var _ref2 = sharedLink || {
    url: intl.formatMessage(messages.shareDialogNone)
  },
      url = _ref2.url;
  /* eslint-disable jsx-a11y/label-has-for */


  return React.createElement(Modal, {
    appElement: appElement,
    className: CLASS_MODAL_CONTENT,
    contentLabel: intl.formatMessage(messages.shareDialogLabel),
    isOpen: isOpen,
    onRequestClose: onCancel,
    overlayClassName: CLASS_MODAL_OVERLAY,
    parentSelector: function parentSelector() {
      return parentElement;
    },
    portalClassName: "".concat(CLASS_MODAL, " be-modal-share")
  }, React.createElement("div", {
    className: "be-modal-content"
  }, React.createElement("label", null, React.createElement(FormattedMessage, _extends({
    tagName: "div"
  }, messages.shareDialogText))), React.createElement("div", {
    className: "be-modal-input-group"
  }, React.createElement("input", {
    ref: function ref(input) {
      textInput = input;
    },
    onChange: noop,
    type: "text",
    value: url
  }), React.createElement(PrimaryButton, {
    autoFocus: true,
    className: "be-modal-button-copy",
    onClick: copy,
    type: "button"
  }, React.createElement(FormattedMessage, messages.copy)))), React.createElement("div", {
    className: "be-modal-btns"
  }, React.createElement(ShareAccessSelect, {
    canSetShareAccess: canSetShareAccess,
    className: "bce-shared-access-select",
    item: item,
    onChange: onShareAccessChange
  }), React.createElement(Button, {
    isLoading: isLoading,
    onClick: onCancel,
    type: "button"
  }, React.createElement(FormattedMessage, messages.close))));
};

export default injectIntl(ShareDialog);
//# sourceMappingURL=ShareDialog.js.map