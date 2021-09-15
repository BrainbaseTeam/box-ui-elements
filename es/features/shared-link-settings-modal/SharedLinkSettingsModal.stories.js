import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { State, Store } from '@sambego/storybook-state';
import { boolean } from '@storybook/addon-knobs';
import Button from '../../components/button/Button';
import SharedLinkSettingsModal from './SharedLinkSettingsModal';
import notes from './SharedLinkSettingsModal.stories.md';
export var basic = function basic() {
  var componentStore = new Store({
    isOpen: false,
    submitting: false
  });

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

  return React.createElement(State, {
    store: componentStore
  }, function (state) {
    return React.createElement(IntlProvider, {
      locale: "en"
    }, React.createElement("div", null, state.isOpen && React.createElement(SharedLinkSettingsModal, {
      accessLevel: "peopleWithTheLink",
      canChangeVanityName: true,
      item: {
        bannerPolicy: {
          body: 'test'
        },
        classification: 'internal',
        grantedPermissions: {
          itemShare: true
        },
        hideCollaborators: false,
        id: 12345,
        name: 'My Example Folder',
        type: 'folder',
        typedID: 'd_12345'
      },
      isOpen: true,
      onRequestClose: function onRequestClose() {
        return componentStore.set({
          isOpen: false
        });
      },
      onSubmit: fakeRequest,
      serverURL: "https://box.com/v/",
      submitting: state.submitting,
      vanityName: "vanity",
      canChangePassword: true,
      isPasswordAvailable: true,
      isPasswordEnabled: boolean('isPasswordEnabled', false),
      canChangeExpiration: true,
      isDownloadAvailable: true,
      canChangeDownload: true,
      isDownloadEnabled: boolean('isDownloadEnabled', false),
      directLink: "https://box.com/download/path",
      isDirectLinkAvailable: true,
      isDirectLinkUnavailableDueToDownloadSettings: boolean('isDirectLinkUnavailableDueToDownloadSettings', false),
      isDirectLinkUnavailableDueToAccessPolicy: true,
      vanityNameInputProps: {
        'data-resin-target': 'test'
      },
      passwordCheckboxProps: {
        'data-resin-target': 'test'
      },
      passwordInputProps: {
        'data-resin-target': 'test'
      },
      expirationCheckboxProps: {
        'data-resin-target': 'test'
      },
      expirationInputProps: {
        'data-resin-target': 'test'
      },
      downloadCheckboxProps: {
        'data-resin-target': 'test'
      },
      directLinkInputProps: {
        'data-resin-target': 'test'
      },
      saveButtonProps: {
        'data-resin-target': 'test'
      },
      cancelButtonProps: {
        'data-resin-target': 'test'
      },
      modalProps: {
        'data-resin-feature': 'test'
      },
      warnOnPublic: state.isPublic
    }), React.createElement(Button, {
      onClick: function onClick() {
        return componentStore.set({
          isOpen: true
        });
      }
    }, "Shared Link Settings Modal")));
  });
};
export default {
  title: 'Features|SharedLinkSettingsModal',
  component: SharedLinkSettingsModal,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=SharedLinkSettingsModal.stories.js.map