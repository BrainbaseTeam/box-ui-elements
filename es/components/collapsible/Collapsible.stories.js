import * as React from 'react';
import Button from '../button/Button';
import Collapsible from './Collapsible';
import notes from './Collapsible.stories.md';
export var withBorder = function withBorder() {
  var onOpen = function onOpen(arg) {
    // eslint-disable-next-line no-console
    console.log('opened', arg);
  };

  var onClose = function onClose(arg) {
    // eslint-disable-next-line no-console
    console.log('closed', arg);
  };

  return React.createElement(Collapsible, {
    isOpen: true,
    onOpen: onOpen,
    onClose: onClose,
    isBordered: true,
    title: "Collapsible card title"
  }, React.createElement("div", null, "This is content of a collapsible component"), React.createElement("div", null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\u2019s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."));
};
export var withoutBorder = function withoutBorder() {
  return React.createElement(Collapsible, {
    isOpen: true,
    title: "Collapsible card title"
  }, React.createElement("div", null, "This is content of a collapsible component"), React.createElement("div", null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\u2019s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."));
};
export var withButtonInHeader = function withButtonInHeader() {
  return React.createElement(Collapsible, {
    headerActionItems: React.createElement(Button, {
      className: "collapsible-card-action-items"
    }, "Click Here"),
    isBordered: true,
    isOpen: true,
    title: "Collapsible card title"
  }, React.createElement("div", null, "This is content of a collapsible component"), React.createElement("div", null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\u2019s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."));
};
export default {
  title: 'Components|Collapsible',
  component: Collapsible,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=Collapsible.stories.js.map