import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { State, Store } from '@sambego/storybook-state';
import { boolean } from '@storybook/addon-knobs';
import Button from '../../../components/button/Button';
import Flyout from '../../../components/flyout/Flyout';
import Overlay from '../../../components/flyout/Overlay';
import SharedLink from '../SharedLink';
import notes from './SharedLink.stories.md';
export var basic = function basic() {
  var componentStore = new Store({
    accessLevel: 'peopleInYourCompany',
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
    }, React.createElement(Flyout, {
      className: "shared-link-flyout",
      closeOnClick: boolean('closeOnClick', false),
      constrainToScrollParent: boolean('constrainToScrollParent', false),
      constrainToWindow: boolean('constrainToWindow', true),
      portaledClasses: ['modal', 'share-access-menu'],
      position: "bottom-right"
    }, React.createElement(Button, null, "Shared Link Flyout"), React.createElement(Overlay, {
      style: {
        width: '300px'
      }
    }, React.createElement(SharedLink, {
      accessDropdownMenuProps: {
        constrainToWindow: true
      },
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
      copyButtonProps: {
        'data-resin-target': 'copy'
      },
      enterpriseName: "Box",
      isDownloadAllowed: boolean('isDownloadAllowed', true),
      isEditAllowed: boolean('isEditAllowed', true),
      isPreviewAllowed: boolean('isPreviewAllowed', true),
      itemType: "folder",
      onSettingsClick: function onSettingsClick() {
        return null;
      },
      removeLink: fakeRequest,
      removeLinkButtonProps: {
        'data-resin-target': 'remove'
      },
      settingsButtonProps: {
        'data-resin-target': 'settings'
      },
      sharedLink: "http://box.com/s/abcdefg",
      submitting: state.submitting
    }))));
  });
};
export default {
  title: 'Features|SharedLink',
  component: SharedLink,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=SharedLink.stories.js.map