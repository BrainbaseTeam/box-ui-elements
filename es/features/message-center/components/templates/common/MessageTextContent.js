import * as React from 'react';
import classNames from 'classnames';
import sanitizeHTML from 'sanitize-html';
import './styles/MessageTextContent.scss';

function MessageTextContent(_ref) {
  var _ref$body = _ref.body,
      body = _ref$body === void 0 ? '' : _ref$body,
      title = _ref.title,
      className = _ref.className;
  return React.createElement("div", {
    className: classNames('MessageTextContent', className)
  }, React.createElement("div", {
    className: "MessageTextContent-title"
  }, title), React.createElement("div", {
    className: "MessageTextContent-body",
    dangerouslySetInnerHTML: {
      __html: sanitizeHTML(body)
    }
  }));
}

export default MessageTextContent;
//# sourceMappingURL=MessageTextContent.js.map