import * as React from 'react';
import MessagePreviewContent from '../../../../message-preview-content/MessagePreviewContent';
import MessageTextContent from '../common/MessageTextContent';
import MessageTags from '../common/MessageTags';
import MessageFooter from '../common/MessageFooter';
import BottomContentWrapper from '../common/BottomContentWrapper';

function PreviewTitleBodyTagsButton(_ref) {
  var apiHost = _ref.apiHost,
      date = _ref.date,
      body = _ref.body,
      button1 = _ref.button1,
      contentPreviewProps = _ref.contentPreviewProps,
      _ref$fileUpload = _ref.fileUpload;
  _ref$fileUpload = _ref$fileUpload === void 0 ? {} : _ref$fileUpload;
  var fileId = _ref$fileUpload.fileId,
      sharedLinkUrl = _ref$fileUpload.sharedLinkUrl,
      getToken = _ref.getToken,
      tags = _ref.tags,
      title = _ref.title,
      name = _ref.name;
  return React.createElement("div", {
    className: "PreviewTitleBodyTagsButton"
  }, React.createElement(MessagePreviewContent, {
    apiHost: apiHost,
    contentPreviewProps: contentPreviewProps,
    fileId: fileId,
    getToken: getToken,
    sharedLink: sharedLinkUrl
  }), React.createElement(BottomContentWrapper, null, React.createElement(MessageTextContent, {
    body: body,
    title: title
  }), React.createElement(MessageTags, {
    tags: tags
  }), React.createElement(MessageFooter, {
    actionItem: button1,
    date: date,
    name: name
  })));
}

export default PreviewTitleBodyTagsButton;
//# sourceMappingURL=PreviewTitleBodyTagsButton.js.map