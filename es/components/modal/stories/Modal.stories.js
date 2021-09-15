import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { State, Store } from '@sambego/storybook-state';
import Button from '../../button/Button';
import ModalActions from '../ModalActions';
import PrimaryButton from '../../primary-button/PrimaryButton';
import Modal from '../Modal';
import notes from './Modal.stories.md';
export var basic = function basic() {
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

  return React.createElement(State, {
    store: componentStore
  }, function (state) {
    return React.createElement(IntlProvider, {
      locale: "en"
    }, React.createElement("div", null, React.createElement(Modal, {
      title: "Box: Sharing is simple",
      onRequestClose: closeModal,
      isOpen: state.isModalOpen,
      focusElementSelector: "input"
    }, React.createElement("p", null, "Elements can be auto-focused by implementing transition logic in componentDidUpdate. Focus is trapped inside the modal while it is open, so pressing tab will cycle through the elements inside."), React.createElement("p", null, React.createElement("input", {
      type: "text"
    })), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue, lacus ut scelerisque porttitor, libero diam luctus ante, non porta lectus dolor eu lectus. Suspendisse sagittis ut orci eget placerat."), React.createElement(ModalActions, null, React.createElement(Button, {
      onClick: closeModal
    }, "Cancel"), React.createElement(PrimaryButton, {
      onClick: closeModal
    }, "Okay"))), React.createElement(PrimaryButton, {
      onClick: openModal
    }, "Launch standard modal")));
  });
};
export var withCustomBackdropClickHandler = function withCustomBackdropClickHandler() {
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

  var confirmBackdropClose = function confirmBackdropClose() {
    // We can call the defined `closeModal` message after any custom processing,
    // or do a no-op if we wish to disable backdrop close functionality
    // eslint-disable-next-line no-alert
    if (window.confirm('There are unsaved changes. Are you sure you want to close?')) {
      closeModal();
    }
  };

  return React.createElement(State, {
    store: componentStore
  }, function (state) {
    return React.createElement(IntlProvider, {
      locale: "en"
    }, React.createElement("div", null, React.createElement(Modal, {
      title: "Box: Sharing is simple",
      onRequestClose: closeModal,
      isOpen: state.isModalOpen,
      focusElementSelector: "input",
      onBackdropClick: confirmBackdropClose
    }, React.createElement("p", null, "Elements can be auto-focused by implementing transition logic in componentDidUpdate. Focus is trapped inside the modal while it is open, so pressing tab will cycle through the elements inside."), React.createElement("p", null, React.createElement("input", {
      type: "text"
    })), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue, lacus ut scelerisque porttitor, libero diam luctus ante, non porta lectus dolor eu lectus. Suspendisse sagittis ut orci eget placerat."), React.createElement(ModalActions, null, React.createElement(Button, {
      onClick: closeModal
    }, "Cancel"), React.createElement(PrimaryButton, {
      onClick: closeModal
    }, "Okay"))), React.createElement(PrimaryButton, {
      onClick: openModal
    }, "Launch standard modal")));
  });
};
export default {
  title: 'Components|Modal',
  component: Modal,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=Modal.stories.js.map