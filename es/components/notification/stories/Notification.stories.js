import * as React from 'react';
import { IntlProvider } from 'react-intl';
import Button from '../../button/Button';
import Notification from '../Notification';
import notes from './Notification.stories.md';
export var basic = function basic() {
  return React.createElement(IntlProvider, {
    locale: "en"
  }, React.createElement(Notification, null, "This is a default notification."));
};
export var info = function info() {
  return React.createElement(IntlProvider, {
    locale: "en"
  }, React.createElement(Notification, {
    type: "info"
  }, React.createElement("span", null, "This is an info notification with a button."), React.createElement(Button, null, "Click me")));
};
export var warn = function warn() {
  return React.createElement(IntlProvider, {
    locale: "en"
  }, React.createElement(Notification, {
    type: "warn"
  }, React.createElement("span", null, "This is a warning notification with two buttons."), React.createElement(Button, null, "Click me"), React.createElement(Button, null, "Click me again")));
};
export var error = function error() {
  return React.createElement(IntlProvider, {
    locale: "en"
  }, React.createElement(Notification, {
    type: "error"
  }, React.createElement("span", null, "This is an error notification.")));
};
export default {
  title: 'Components|Notifications/Notification',
  component: Notification,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=Notification.stories.js.map