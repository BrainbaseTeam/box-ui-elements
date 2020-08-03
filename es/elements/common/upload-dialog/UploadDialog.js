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
      requestInterceptor = _ref.requestInterceptor,
      responseInterceptor = _ref.responseInterceptor,
      intl = _ref.intl;
  return /*#__PURE__*/React.createElement(Modal, {
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
  }, /*#__PURE__*/React.createElement(ContentUploader, {
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
  }));
};

export default injectIntl(UploadDialog);
//# sourceMappingURL=UploadDialog.js.map