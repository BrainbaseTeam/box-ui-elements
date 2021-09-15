function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { State, Store } from '@sambego/storybook-state';
import Button from '../../button/Button';
import PrimaryButton from '../../primary-button/PrimaryButton';
import Notification from '../Notification';
import NotificationsWrapper from '../NotificationsWrapper';
import notes from './NotificationsWrapper.stories.md';
export var example = function example() {
  var DATE = new Date('May 13, 2002 23:15:30').toTimeString();
  var componentStore = new Store({
    id: 0,
    notifications: new Map()
  });

  var closeNotification = function closeNotification(id) {
    var notifications = componentStore.get('notifications');
    notifications.delete(id);
    componentStore.set({
      notifications: notifications
    });
  };

  var addNotification = function addNotification(duration, type) {
    var id = componentStore.get('id');
    var notifications = componentStore.get('notifications');
    var notification = React.createElement(Notification, {
      key: id,
      duration: duration,
      onClose: function onClose() {
        return closeNotification(id);
      },
      type: type
    }, React.createElement("span", null, "Hello world! I was made at ", DATE), React.createElement(Button, null, "Okay"));
    componentStore.set({
      notifications: notifications.set(id, notification),
      id: id + 1
    });
  };

  return React.createElement(State, {
    store: componentStore
  }, function (state) {
    return React.createElement(IntlProvider, {
      locale: "en"
    }, React.createElement("div", null, React.createElement(NotificationsWrapper, null, _toConsumableArray(state.notifications.values())), React.createElement(Button, {
      onClick: function onClick() {
        return addNotification('short', 'info');
      }
    }, "Display timed notification"), React.createElement(PrimaryButton, {
      onClick: function onClick() {
        return addNotification(undefined, 'warn');
      }
    }, "Display persistent notification")));
  });
};
export default {
  title: 'Components|Notifications/NotificationsWrapper',
  component: NotificationsWrapper,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=NotificationsWrapper.stories.js.map