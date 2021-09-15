import * as React from 'react';
import MessageTextContent from '../common/MessageTextContent';
import MessageTags from '../common/MessageTags';
import MessageFooter from '../common/MessageFooter';
import BottomContentWrapper from '../common/BottomContentWrapper';

function TitleBodyTagsButton(_ref) {
  var date = _ref.date,
      body = _ref.body,
      button1 = _ref.button1,
      tags = _ref.tags,
      title = _ref.title,
      name = _ref.name;
  return React.createElement("div", {
    className: "TitleBodyTagsButton"
  }, React.createElement(BottomContentWrapper, null, React.createElement(MessageTextContent, {
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

export default TitleBodyTagsButton;
//# sourceMappingURL=TitleBodyTagsButton.js.map