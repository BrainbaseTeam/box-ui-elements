import * as React from 'react';
import MessageTextContent from '../common/MessageTextContent';
import MessagePreviewContent from '../../../../message-preview-content/MessagePreviewContent';
import MessageTags from '../common/MessageTags';
import MessageFooter from '../common/MessageFooter';
import BottomContentWrapper from '../common/BottomContentWrapper';

function PreviewTitleBodyTags(_ref) {
  var apiHost = _ref.apiHost,
      date = _ref.date,
      body = _ref.body,
      contentPreviewProps = _ref.contentPreviewProps,
      _ref$fileUpload = _ref.fileUpload;
  _ref$fileUpload = _ref$fileUpload === void 0 ? {} : _ref$fileUpload;
  var fileId = _ref$fileUpload.fileId,
      sharedLinkUrl = _ref$fileUpload.sharedLinkUrl,
      tags = _ref.tags,
      title = _ref.title,
      getToken = _ref.getToken,
      name = _ref.name;
  return React.createElement("div", {
    className: "PreviewTitleBodyTags"
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
    date: date,
    name: name
  })));
}

export default PreviewTitleBodyTags;
//# sourceMappingURL=PreviewTitleBodyTags.js.map