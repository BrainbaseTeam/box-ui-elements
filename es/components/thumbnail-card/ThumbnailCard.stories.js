import * as React from 'react';
import ThumbnailCard from './ThumbnailCard';
import notes from './ThumbnailCard.stories.md';
var thumbnail = React.createElement("div", null, "Thumbnail");
var title = 'Title';
export var basic = function basic() {
  return React.createElement(ThumbnailCard, {
    thumbnail: thumbnail,
    title: title
  });
};
export var highlightOnHover = function highlightOnHover() {
  return React.createElement(ThumbnailCard, {
    highlightOnHover: true,
    thumbnail: thumbnail,
    title: title
  });
};
export default {
  title: 'Components|ThumbnailCard',
  component: ThumbnailCard,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=ThumbnailCard.stories.js.map