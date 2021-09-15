import * as React from 'react';
import { PreviewTitleBodyTags, PreviewTitleBodyTagsButton, TitleBodyTags, TitleBodyTagsButton } from '../templates';
import { PREVIEW_TITLE_BODY_TAGS, PREVIEW_TITLE_BODY_TAGS_BUTTON, TITLE_BODY_TAGS, TITLE_BODY_TAGS_BUTTON } from '../../constants';

function Message(_ref) {
  var activateDate = _ref.activateDate,
      apiHost = _ref.apiHost,
      contentPreviewProps = _ref.contentPreviewProps,
      getToken = _ref.getToken,
      templateName = _ref.templateName,
      _ref$templateParams = _ref.templateParams,
      body = _ref$templateParams.body,
      button1 = _ref$templateParams.button1,
      fileUpload = _ref$templateParams.fileUpload,
      tags = _ref$templateParams.tags,
      title = _ref$templateParams.title,
      name = _ref.name;
  var date = new Date(activateDate * 1000);

  if (templateName === PREVIEW_TITLE_BODY_TAGS && fileUpload) {
    return React.createElement(PreviewTitleBodyTags, {
      apiHost: apiHost,
      body: body,
      contentPreviewProps: contentPreviewProps,
      date: date,
      fileUpload: fileUpload,
      getToken: getToken,
      tags: tags,
      title: title,
      name: name
    });
  }

  if (templateName === PREVIEW_TITLE_BODY_TAGS_BUTTON && button1 && fileUpload) {
    return React.createElement(PreviewTitleBodyTagsButton, {
      apiHost: apiHost,
      body: body,
      button1: button1,
      contentPreviewProps: contentPreviewProps,
      date: date,
      fileUpload: fileUpload,
      getToken: getToken,
      tags: tags,
      title: title,
      name: name
    });
  }

  if (templateName === TITLE_BODY_TAGS) {
    return React.createElement(TitleBodyTags, {
      body: body,
      date: date,
      tags: tags,
      title: title,
      name: name
    });
  }

  if (templateName === TITLE_BODY_TAGS_BUTTON && button1) {
    return React.createElement(TitleBodyTagsButton, {
      body: body,
      button1: button1,
      date: date,
      tags: tags,
      title: title,
      name: name
    });
  }

  return null;
}

export default Message;
//# sourceMappingURL=Message.js.map