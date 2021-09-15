import * as React from 'react';
import { IntlProvider } from 'react-intl';
import ContentUploader from '../ContentUploader';
import notes from './ContentUploader.notes.md';
export var Uploader = function Uploader() {
  return React.createElement(IntlProvider, {
    locale: "en"
  }, React.createElement(ContentUploader, {
    features: global.FEATURES,
    rootFolderId: global.FOLDER_ID,
    token: global.TOKEN
  }));
};
export default {
  title: 'Elements|ContentUploader',
  component: ContentUploader,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=ContentUploader.stories.js.map