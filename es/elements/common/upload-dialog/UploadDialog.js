function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Content Explorer Delete Confirmation Dialog
 * @author Box
 */
import React from 'react';
import Modal from 'react-modal';
import { injectIntl } from 'react-intl';
import ContentUploader from '../../content-uploader';
import messages from '../messages';
import { CLASS_MODAL_CONTENT_FULL_BLEED, CLASS_MODAL_OVERLAY, CLASS_MODAL } from '../../../constants';

var UploadDialog = function UploadDialog(_ref) {
  var isOpen = _ref.isOpen,
      currentFolderId = _ref.currentFolderId,
      token = _ref.token,
      sharedLink = _ref.sharedLink,
      sharedLinkPassword = _ref.sharedLinkPassword,
      apiHost = _ref.apiHost,
      uploadHost = _ref.uploadHost,
      onClose = _ref.onClose,
      parentElement = _ref.parentElement,
      appElement = _ref.appElement,
      onUpload = _ref.onUpload,
      contentUploaderProps = _ref.contentUploaderProps,
      requestInterceptor = _ref.requestInterceptor,
      responseInterceptor = _ref.responseInterceptor,
      intl = _ref.intl;
  return React.createElement(Modal, {
    appElement: appElement,
    className: CLASS_MODAL_CONTENT_FULL_BLEED,
    contentLabel: intl.formatMessage(messages.upload),
    isOpen: isOpen,
    onRequestClose: onClose,
    overlayClassName: CLASS_MODAL_OVERLAY,
    parentSelector: function parentSelector() {
      return parentElement;
    },
    portalClassName: "".concat(CLASS_MODAL, " be-modal-upload")
  }, React.createElement(ContentUploader, _extends({}, contentUploaderProps, {
    apiHost: apiHost,
    onClose: onClose,
    onComplete: onUpload,
    requestInterceptor: requestInterceptor,
    responseInterceptor: responseInterceptor,
    rootFolderId: currentFolderId,
    sharedLink: sharedLink,
    sharedLinkPassword: sharedLinkPassword,
    token: token,
    uploadHost: uploadHost
  })));
};

export default injectIntl(UploadDialog);
//# sourceMappingURL=UploadDialog.js.map