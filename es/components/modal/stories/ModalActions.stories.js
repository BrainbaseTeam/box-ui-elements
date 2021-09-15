import * as React from 'react';
import { IntlProvider } from 'react-intl';
import Button from '../../button/Button';
import ModalDialog from '../ModalDialog';
import PrimaryButton from '../../primary-button/PrimaryButton';
import ModalActions from '../ModalActions';
import notes from './ModalActions.stories.md';
export var basic = function basic() {
  return React.createElement(IntlProvider, {
    locale: "en"
  }, React.createElement(ModalDialog, {
    title: "Alert ModalDialog",
    type: "alert"
  }, "This is the alert message. It will automatically be wrapped in a paragraph tag.", React.createElement(ModalActions, null, React.createElement(Button, null, "Cancel"), React.createElement(PrimaryButton, null, "Okay"))));
};
export default {
  title: 'Components|ModalActions',
  component: ModalActions,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=ModalActions.stories.js.map