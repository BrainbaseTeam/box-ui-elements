import * as React from 'react';
import PrimaryButton from '../../../../components/primary-button';
import { Modal, ModalActions } from '../../../../components/modal';
import Button from '../../../../components/button';
import MessagePreviewContent from '../../../message-preview-content/MessagePreviewContent';
import { messageActions } from '../../types/message-actions';
import './styles/PreviewTitleBodyTwoButtonsModalTemplate.scss';

var handleClose = function handleClose(onAction) {
  onAction([messageActions.close]);
};

var handleButtonClick = function handleButtonClick(onAction, button) {
  if (button) {
    onAction(button.actions);
  }
};

var PreviewTitleBodyTwoButtonsModalTemplate = function PreviewTitleBodyTwoButtonsModalTemplate(_ref) {
  var apiHost = _ref.apiHost,
      contentPreviewProps = _ref.contentPreviewProps,
      getToken = _ref.getToken,
      onAction = _ref.onAction,
      _ref$params = _ref.params,
      body = _ref$params.body,
      button1 = _ref$params.button1,
      button2 = _ref$params.button2,
      _ref$params$fileUploa = _ref$params.fileUpload;
  _ref$params$fileUploa = _ref$params$fileUploa === void 0 ? {} : _ref$params$fileUploa;
  var fileId = _ref$params$fileUploa.fileId,
      sharedLinkUrl = _ref$params$fileUploa.sharedLinkUrl,
      title = _ref$params.title;
  return React.createElement(Modal, {
    className: "bdl-PreviewTitleBodyTwoButtonsModalTemplate",
    closeButtonProps: {
      'data-resin-target': 'dismiss'
    },
    isOpen: true,
    onRequestClose: function onRequestClose() {
      return handleClose(onAction);
    },
    shouldNotUsePortal: true
  }, React.createElement("div", {
    className: "bdl-PreviewTitleBodyTwoButtonsModalTemplate-contentContainer"
  }, React.createElement("div", {
    className: "bdl-PreviewTitleBodyTwoButtonsModalTemplate-title",
    dangerouslySetInnerHTML: {
      __html: title
    }
  }), React.createElement("div", {
    className: "bdl-PreviewTitleBodyTwoButtonsModalTemplate-body",
    dangerouslySetInnerHTML: {
      __html: body
    }
  }), React.createElement("div", {
    className: "bdl-PreviewTitleBodyTwoButtonsModalTemplate-previewContainer"
  }, React.createElement(MessagePreviewContent, {
    apiHost: apiHost,
    contentPreviewProps: contentPreviewProps,
    fileId: fileId,
    getToken: getToken,
    sharedLink: sharedLinkUrl
  })), React.createElement(ModalActions, null, React.createElement(PrimaryButton, {
    "data-resin-target": "cta1",
    onClick: function onClick() {
      return handleButtonClick(onAction, button1);
    }
  }, button1.label), button2 && React.createElement(Button, {
    "data-resin-target": "cta2",
    onClick: function onClick() {
      return handleButtonClick(onAction, button2);
    }
  }, button2.label))));
};

export default PreviewTitleBodyTwoButtonsModalTemplate;
//# sourceMappingURL=PreviewTitleBodyTwoButtonsModalTemplate.js.map