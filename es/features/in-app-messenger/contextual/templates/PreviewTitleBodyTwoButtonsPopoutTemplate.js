/**
 * This component is intended to be passed to TemplateContainer as templateComponent prop, like this:
 *   <TemplateContainer templateID='my-template' templateComponent=MyTemplate/>
 */
import * as React from 'react';
import Button from '../../../../components/button/Button';
import PrimaryButton from '../../../../components/primary-button/PrimaryButton';
import Overlay from '../../../../components/flyout/Overlay';
import MessagePreviewContent from '../../../message-preview-content/MessagePreviewContent';
import './styles/PreviewTitleBodyTwoButtonsPopoutTemplate.scss';

var handleButtonClick = function handleButtonClick(onAction, button) {
  if (button) {
    onAction(button.actions);
  }
};

var PreviewTitleBodyTwoButtonsPopoutTemplate = function PreviewTitleBodyTwoButtonsPopoutTemplate(_ref) {
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
  return React.createElement("div", {
    className: "bdl-PreviewTitleBodyTwoButtonsPopoutTemplate"
  }, React.createElement(Overlay, null, React.createElement("div", {
    className: "bdl-PreviewTitleBodyTwoButtonsPopoutTemplate-contentContainer"
  }, React.createElement("div", {
    className: "bdl-PreviewTitleBodyTwoButtonsPopoutTemplate-previewContainer"
  }, React.createElement(MessagePreviewContent, {
    apiHost: apiHost,
    contentPreviewProps: contentPreviewProps,
    fileId: fileId,
    getToken: getToken,
    sharedLink: sharedLinkUrl
  })), React.createElement("div", {
    className: "bdl-PreviewTitleBodyTwoButtonsPopoutTemplate-mainContainer"
  }, React.createElement("div", {
    className: "bdl-PreviewTitleBodyTwoButtonsPopoutTemplate-title",
    dangerouslySetInnerHTML: {
      __html: title
    }
  }), React.createElement("div", {
    className: "bdl-PreviewTitleBodyTwoButtonsPopoutTemplate-body",
    dangerouslySetInnerHTML: {
      __html: body
    }
  }), React.createElement("div", {
    className: "bdl-PreviewTitleBodyTwoButtonsPopoutTemplate-buttons"
  }, button2 && React.createElement(Button, {
    "data-resin-target": "cta2",
    onClick: function onClick() {
      return handleButtonClick(onAction, button2);
    }
  }, button2.label), React.createElement(PrimaryButton, {
    "data-resin-target": "cta1",
    onClick: function onClick() {
      return handleButtonClick(onAction, button1);
    }
  }, button1.label))))));
};

export default PreviewTitleBodyTwoButtonsPopoutTemplate;
//# sourceMappingURL=PreviewTitleBodyTwoButtonsPopoutTemplate.js.map