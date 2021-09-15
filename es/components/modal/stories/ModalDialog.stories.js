import * as React from 'react';
import { IntlProvider } from 'react-intl';
import ModalDialog from '../ModalDialog';
import notes from './ModalDialog.stories.md';
export var basic = function basic() {
  return React.createElement(IntlProvider, {
    locale: "en"
  }, React.createElement(ModalDialog, {
    title: "Static ModalDialog"
  }, React.createElement("p", null, "I can be rendered statically! Because I\u2019m not in a portal!"), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue, lacus ut scelerisque porttitor, libero diam luctus ante, non porta lectus dolor eu lectus. Suspendisse sagittis ut orci eget placerat.")));
};
export default {
  title: 'Components|ModalDialog',
  component: ModalDialog,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=ModalDialog.stories.js.map