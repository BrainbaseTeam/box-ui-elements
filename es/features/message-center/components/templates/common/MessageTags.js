import * as React from 'react';
import classNames from 'classnames';
import LabelPill from '../../../../../components/label-pill';
import './styles/MessageTags.scss';

var generateTags = function generateTags(tags) {
  var tagArray = tags.split(',');
  return tagArray.filter(function (tag) {
    return !!tag;
  }).map(function (tag) {
    return React.createElement(LabelPill.Pill, {
      key: "".concat(tag),
      className: "MessageTags-tag"
    }, React.createElement(LabelPill.Text, null, tag.trim()));
  });
};

function MessageTags(_ref) {
  var tags = _ref.tags,
      className = _ref.className;
  return React.createElement("div", {
    className: classNames('MessageTags', className)
  }, generateTags(tags));
}

export default MessageTags;
//# sourceMappingURL=MessageTags.js.map