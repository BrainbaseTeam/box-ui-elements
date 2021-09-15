import * as React from 'react';
import { IntlProvider } from 'react-intl';
import SidebarToggleButton from './SidebarToggleButton';
import notes from './SidebarToggleButton.stories.md';
export var open = function open() {
  return React.createElement(IntlProvider, {
    locale: "en"
  }, React.createElement(SidebarToggleButton, {
    isOpen: true
  }));
};
export var closed = function closed() {
  return React.createElement(IntlProvider, {
    locale: "en"
  }, React.createElement(SidebarToggleButton, {
    isOpen: false
  }));
};
export var leftFacing = function leftFacing() {
  return React.createElement(IntlProvider, {
    locale: "en"
  }, React.createElement(SidebarToggleButton, {
    direction: "left",
    isOpen: true
  }));
};
export default {
  title: 'Components|SidebarToggleButton',
  component: SidebarToggleButton,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=SidebarToggleButton.stories.js.map