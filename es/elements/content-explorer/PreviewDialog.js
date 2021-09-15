function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Content Explorer Preview dialog
 * @author Box
 */
import React from 'react';
import Modal from 'react-modal';
import { injectIntl } from 'react-intl';
import cloneDeep from 'lodash/cloneDeep';
import messages from '../common/messages';
import ContentPreview from '../content-preview';
import { TYPE_FILE, CLASS_MODAL_CONTENT_FULL_BLEED, CLASS_MODAL_OVERLAY, CLASS_MODAL } from '../../constants';

var PreviewDialog = function PreviewDialog(_ref) {
  var item = _ref.item,
      isOpen = _ref.isOpen,
      parentElement = _ref.parentElement,
      appElement = _ref.appElement,
      token = _ref.token,
      cache = _ref.cache,
      currentCollection = _ref.currentCollection,
      canDownload = _ref.canDownload,
      onCancel = _ref.onCancel,
      onPreview = _ref.onPreview,
      onDownload = _ref.onDownload,
      apiHost = _ref.apiHost,
      appHost = _ref.appHost,
      staticHost = _ref.staticHost,
      staticPath = _ref.staticPath,
      previewLibraryVersion = _ref.previewLibraryVersion,
      sharedLink = _ref.sharedLink,
      sharedLinkPassword = _ref.sharedLinkPassword,
      contentPreviewProps = _ref.contentPreviewProps,
      requestInterceptor = _ref.requestInterceptor,
      responseInterceptor = _ref.responseInterceptor,
      intl = _ref.intl;
  var items = currentCollection.items;

  var onLoad = function onLoad(data) {
    onPreview(cloneDeep(data));
  };

  if (!item || !items) {
    return null;
  }

  var files = items.filter(function (_ref2) {
    var type = _ref2.type;
    return type === TYPE_FILE;
  });
  return React.createElement(Modal, {
    isOpen: isOpen,
    parentSelector: function parentSelector() {
      return parentElement;
    },
    portalClassName: "".concat(CLASS_MODAL, " be-modal-preview"),
    className: CLASS_MODAL_CONTENT_FULL_BLEED,
    overlayClassName: CLASS_MODAL_OVERLAY,
    contentLabel: intl.formatMessage(messages.preview),
    onRequestClose: onCancel,
    appElement: appElement
  }, React.createElement(ContentPreview, _extends({}, contentPreviewProps, {
    fileId: item.id,
    apiHost: apiHost,
    appHost: appHost,
    staticHost: staticHost,
    staticPath: staticPath,
    previewLibraryVersion: previewLibraryVersion,
    cache: cache,
    token: token,
    hasHeader: true,
    autoFocus: true,
    collection: files,
    onLoad: onLoad,
    onClose: onCancel,
    onDownload: onDownload,
    canDownload: canDownload,
    sharedLink: sharedLink,
    sharedLinkPassword: sharedLinkPassword,
    contentPreviewProps: contentPreviewProps,
    requestInterceptor: requestInterceptor,
    responseInterceptor: responseInterceptor
  })));
};

export default injectIntl(PreviewDialog);
//# sourceMappingURL=PreviewDialog.js.map