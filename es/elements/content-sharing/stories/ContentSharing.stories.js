import * as React from 'react';
import { select, text } from '@storybook/addon-knobs';
import { IntlProvider } from 'react-intl';
import { DEFAULT_HOSTNAME_API, TYPE_FILE, TYPE_FOLDER } from '../../../constants';
import Button from '../../../components/button/Button';
import ContentSharing from '../ContentSharing';
import notes from './ContentSharing.stories.md';
export var withModal = function withModal() {
  var apiHost = text('API Host', DEFAULT_HOSTNAME_API);
  var itemID = text('Item ID');
  var itemType = select('Item Type', [TYPE_FILE, TYPE_FOLDER], TYPE_FILE);
  var token = text('Access Token');
  return React.createElement(React.Fragment, null, React.createElement("p", null, "Update the values in the Knobs section below to view the ContentSharing UI Element. The internal SharingModal will appear when valid values have been entered."), React.createElement(IntlProvider, {
    locale: "en"
  }, React.createElement(ContentSharing, {
    apiHost: apiHost,
    config: {
      showEmailSharedLinkForm: false,
      showInviteCollaboratorMessageSection: false
    },
    displayInModal: true,
    itemID: itemID,
    itemType: itemType,
    language: "en",
    token: token
  })));
};
export var withModalAndCustomButton = function withModalAndCustomButton() {
  var apiHost = text('API Host', DEFAULT_HOSTNAME_API);
  var itemID = text('Item ID');
  var itemType = select('Item Type', [TYPE_FILE, TYPE_FOLDER], TYPE_FILE);
  var token = text('Access Token');
  var customButton = React.createElement(Button, null, "\u273F Launch ContentSharing \u273F");
  return React.createElement(React.Fragment, null, React.createElement("p", null, "Update the values in the Knobs section below to view the ContentSharing UI Element. The API will be instantiated on load, but the internal SharingModal will not be instantiated until the button is clicked."), React.createElement(IntlProvider, {
    locale: "en"
  }, React.createElement(ContentSharing, {
    apiHost: apiHost,
    config: {
      showEmailSharedLinkForm: false,
      showInviteCollaboratorMessageSection: false
    },
    customButton: customButton,
    displayInModal: true,
    itemID: itemID,
    itemType: itemType,
    language: "en",
    token: token
  })));
};
export var withoutModal = function withoutModal() {
  var apiHost = text('API Host', DEFAULT_HOSTNAME_API);
  var itemID = text('Item ID');
  var itemType = select('Item Type', [TYPE_FILE, TYPE_FOLDER], TYPE_FILE);
  var token = text('Access Token');
  return React.createElement(React.Fragment, null, React.createElement("p", null, "Update the values in the Knobs section below to view the ContentSharing UI Element. The internal SharingModal will appear as a form within this page when valid values are entered."), React.createElement(IntlProvider, {
    locale: "en"
  }, React.createElement(ContentSharing, {
    apiHost: apiHost,
    config: {
      showEmailSharedLinkForm: false,
      showInviteCollaboratorMessageSection: false
    },
    displayInModal: false,
    itemID: itemID,
    itemType: itemType,
    language: "en",
    token: token
  })));
};
export default {
  title: 'Elements|ContentSharing',
  component: ContentSharing,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=ContentSharing.stories.js.map