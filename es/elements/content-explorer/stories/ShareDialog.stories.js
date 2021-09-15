import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';
import PrimaryButton from '../../../components/primary-button/PrimaryButton';
import { ACCESS_OPEN } from '../../../constants';
import ShareDialog from '../ShareDialog';
import notes from './ShareDialog.stories.md';
export var shareDialog = function shareDialog() {
  var componentStore = new Store({
    isModalOpen: false
  });

  var openModal = function openModal() {
    return componentStore.set({
      isModalOpen: true
    });
  };

  var closeModal = function closeModal() {
    return componentStore.set({
      isModalOpen: false
    });
  };

  var rootElement = document.createElement('div');
  var appElement = document.createElement('div');
  rootElement.appendChild(appElement);

  if (document.body) {
    document.body.appendChild(rootElement);
  }

  return React.createElement(State, {
    store: componentStore
  }, function (state) {
    return React.createElement("div", null, React.createElement(ShareDialog, {
      appElement: appElement,
      canSetShareAccess: boolean('canSetShareAccess', true),
      isLoading: boolean('isLoading', false),
      isOpen: state.isModalOpen,
      item: {
        id: 'abcdefg',
        shared_link: {
          access: ACCESS_OPEN,
          url: 'https://cloud.box.com/s/abcdefg'
        }
      },
      onCancel: closeModal,
      onShareAccessChange: function onShareAccessChange() {
        return null;
      },
      parentElement: rootElement
    }), React.createElement(PrimaryButton, {
      onClick: openModal
    }, "Launch ShareDialog"));
  });
};
export default {
  title: 'Elements|ContentExplorer|ShareDialog',
  component: ShareDialog,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=ShareDialog.stories.js.map