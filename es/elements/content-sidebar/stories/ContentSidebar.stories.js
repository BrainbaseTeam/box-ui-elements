function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { IntlProvider } from 'react-intl';
import ContentSidebar from '../ContentSidebar';
import notes from './ContentSidebar.notes.md';
export var Sidebar = function Sidebar() {
  return React.createElement(IntlProvider, {
    locale: "en"
  }, React.createElement(ContentSidebar, _extends({
    detailsSidebarProps: {
      hasProperties: true,
      hasNotices: true,
      hasAccessStats: true,
      hasClassification: true,
      hasRetentionPolicy: true
    },
    features: global.FEATURES,
    fileId: global.FILE_ID,
    hasActivityFeed: true,
    hasMetadata: true,
    hasSkills: true,
    hasVersions: true,
    token: global.TOKEN
  }, global.PROPS)));
};
export default {
  title: 'Elements|ContentSidebar',
  Component: ContentSidebar,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=ContentSidebar.stories.js.map