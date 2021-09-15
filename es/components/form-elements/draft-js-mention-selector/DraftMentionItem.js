import * as React from 'react';
import { ContentState } from 'draft-js';

var DraftMentionItem = function DraftMentionItem(_ref) {
  var contentState = _ref.contentState,
      entityKey = _ref.entityKey,
      children = _ref.children;
  var id = '';

  if (entityKey) {
    id = contentState.getEntity(entityKey).getData().id;
  }

  return React.createElement("a", {
    href: "/profile/".concat(id)
  }, children);
};

export default DraftMentionItem;
//# sourceMappingURL=DraftMentionItem.js.map