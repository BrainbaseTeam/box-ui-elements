import * as React from 'react';
import { IntlProvider } from 'react-intl';
import ContentExplorer from '../ContentExplorer';
import notes from './ContentExplorer.notes.md';
export var withPreview = function withPreview() {
  return React.createElement(IntlProvider, {
    locale: "en"
  }, React.createElement(ContentExplorer, {
    features: global.FEATURES,
    rootFolderId: global.FOLDER_ID,
    token: global.TOKEN
  }));
};
export var withPreviewSidebar = function withPreviewSidebar() {
  return React.createElement(IntlProvider, {
    locale: "en"
  }, React.createElement(ContentExplorer, {
    contentPreviewProps: {
      contentSidebarProps: {
        detailsSidebarProps: {
          hasProperties: true,
          hasNotices: true,
          hasAccessStats: true,
          hasClassification: true,
          hasRetentionPolicy: true,
          hasVersions: true
        },
        features: global.FEATURES,
        hasActivityFeed: true,
        hasMetadata: true,
        hasSkills: true
      }
    },
    features: global.FEATURES,
    rootFolderId: global.FOLDER_ID,
    token: global.TOKEN
  }));
};
export default {
  title: 'Elements|ContentExplorer',
  component: ContentExplorer,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=ContentExplorer.stories.js.map