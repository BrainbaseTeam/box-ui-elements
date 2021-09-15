import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { IntlProvider } from 'react-intl';
import ContentPreview from '../ContentPreview';
import notes from './ContentPreview.notes.md';
export var Preview = function Preview() {
  var fileId = text('File ID', global.FILE_ID);
  var token = text('Access Token', global.TOKEN);
  return React.createElement(IntlProvider, {
    locale: "en"
  }, React.createElement(ContentPreview, {
    features: global.FEATURES,
    fileId: fileId,
    hasHeader: true,
    key: "".concat(fileId, "-").concat(token),
    token: token
  }));
};
export var PreviewWithAnnotations = function PreviewWithAnnotations() {
  var fileId = text('File ID', global.FILE_ID);
  var token = text('Access Token', global.TOKEN);
  return React.createElement(IntlProvider, {
    locale: "en"
  }, React.createElement(ContentPreview, {
    contentSidebarProps: {
      detailsSidebarProps: {
        hasAccessStats: true,
        hasClassification: true,
        hasNotices: true,
        hasProperties: true,
        hasRetentionPolicy: true,
        hasVersions: true
      },
      features: global.FEATURES,
      hasActivityFeed: true,
      hasMetadata: true,
      hasSkills: true,
      hasVersions: true
    },
    features: global.FEATURES,
    fileId: fileId,
    hasHeader: true,
    key: "".concat(fileId, "-").concat(token),
    showAnnotations: true,
    token: token
  }));
};
export var PreviewWithSidebar = function PreviewWithSidebar() {
  var fileId = text('File ID', global.FILE_ID);
  var token = text('Access Token', global.TOKEN);
  return React.createElement(IntlProvider, {
    locale: "en"
  }, React.createElement(ContentPreview, {
    contentSidebarProps: {
      detailsSidebarProps: {
        hasAccessStats: true,
        hasClassification: true,
        hasNotices: true,
        hasProperties: true,
        hasRetentionPolicy: true,
        hasVersions: true
      },
      features: global.FEATURES,
      hasActivityFeed: true,
      hasMetadata: true,
      hasSkills: true,
      hasVersions: true
    },
    features: global.FEATURES,
    fileId: fileId,
    hasHeader: true,
    key: "".concat(fileId, "-").concat(token),
    token: token
  }));
};
export default {
  title: 'Elements|ContentPreview',
  component: ContentPreview,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=ContentPreview.stories.js.map