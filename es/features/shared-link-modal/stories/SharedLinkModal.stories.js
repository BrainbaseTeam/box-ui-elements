import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { State, Store } from '@sambego/storybook-state';
import { boolean } from '@storybook/addon-knobs';
import Button from '../../../components/button/Button';
import SharedLinkModal from '../SharedLinkModal';
import notes from './SharedLinkModal.stories.md';
export var basic = function basic() {
  var contacts = [{
    id: 0,
    name: 'Jackie',
    email: 'j@example.com',
    type: 'user'
  }, {
    id: 1,
    name: 'Jeff',
    email: 'jt@example.com',
    type: 'user'
  }, {
    id: 2,
    name: 'David',
    email: 'dt@example.com',
    type: 'user'
  }, {
    id: 3,
    name: 'Yang',
    email: 'yz@example.com',
    type: 'user'
  }, {
    id: 4,
    name: 'Yong',
    email: 'ysu@example.com',
    type: 'user'
  }, {
    id: 5,
    name: 'Will',
    email: 'wy@example.com',
    type: 'user'
  }, {
    id: 6,
    name: 'Dave',
    email: 'd@example.com',
    type: 'user'
  }, {
    id: 7,
    name: 'Ke',
    email: 'k@example.com',
    type: 'user'
  }, {
    id: 8,
    name: 'Wenbo',
    email: 'w@example.com',
    type: 'user'
  }, {
    id: 11,
    name: 'Supersupersupersuperreallyreallyreallylongfirstname incrediblyspectacularlylonglastname',
    email: 'Supersupersupersuperreallyreallyreallyincrediblyspectacularlylongemail@example.com',
    type: 'user'
  }];
  var componentStore = new Store({
    isOpen: false,
    accessLevel: 'peopleInYourCompany',
    permissionLevel: 'canView',
    selectorOptions: []
  });

  var closeModal = function closeModal() {
    componentStore.set({
      isOpen: false
    });
  };

  var fakeRequest = function fakeRequest() {
    componentStore.set({
      submitting: true
    });
    return new Promise(function (resolve) {
      setTimeout(function () {
        componentStore.set({
          submitting: false
        });
        resolve();
      }, 500);
    });
  };

  var isSubstring = function isSubstring(value, searchString) {
    return value && value.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
  };

  var getContacts = function getContacts(searchString) {
    var filteredContacts = contacts.filter(function (_ref) {
      var name = _ref.name,
          email = _ref.email;
      return isSubstring(name, searchString) || isSubstring(email, searchString);
    });
    componentStore.set({
      selectorOptions: filteredContacts
    });
  };

  return React.createElement(State, {
    store: componentStore
  }, function (state) {
    return React.createElement(IntlProvider, {
      locale: "en"
    }, React.createElement("div", null, state.isOpen && React.createElement(SharedLinkModal, {
      accessLevel: state.accessLevel,
      accessMenuButtonProps: {
        'data-resin-target': 'changepermissions'
      },
      allowedAccessLevels: {
        peopleWithTheLink: true,
        peopleInYourCompany: true,
        peopleInThisItem: true
      },
      canRemoveLink: boolean('canRemoveLink', true),
      changeAccessLevel: function changeAccessLevel(newLevel) {
        return fakeRequest().then(function () {
          return componentStore.set({
            accessLevel: newLevel
          });
        });
      },
      changePermissionLevel: function changePermissionLevel(newLevel) {
        return fakeRequest().then(function () {
          return componentStore.set({
            permissionLevel: newLevel
          });
        });
      },
      contacts: state.selectorOptions,
      copyButtonProps: {
        'data-resin-target': 'copy'
      },
      defaultEmailMessage: "I want to share this file with you.\\n\\n-me",
      emailMessageProps: {
        'data-resin-target': 'message'
      },
      expiration: 1509173940,
      getContacts: getContacts,
      isOpen: state.isOpen,
      itemName: "somefile.gif",
      itemType: "file",
      isEditAllowed: state.permissionLevel === 'canEdit',
      isPreviewAllowed: state.permissionLevel === 'canView',
      onRequestClose: closeModal,
      onSettingsClick: function onSettingsClick() {
        return null;
      },
      permissionLevel: state.permissionLevel,
      removeLink: function removeLink() {
        return fakeRequest().then(closeModal);
      },
      removeLinkButtonProps: {
        'data-resin-target': 'remove'
      },
      sendEmail: function sendEmail() {
        return fakeRequest().then(function () {
          closeModal();
        });
      },
      sharedLink: "http://box.com/s/abcdefg",
      submitting: state.submitting
    }), React.createElement(Button, {
      onClick: function onClick() {
        return componentStore.set({
          isOpen: true
        });
      }
    }, "Shared Link Modal")));
  });
};
export default {
  title: 'Features|SharedLinkModal',
  component: SharedLinkModal,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=SharedLinkModal.stories.js.map