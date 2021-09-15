import * as React from 'react';
import Menu from '../menu/Menu';
import MenuItem from '../menu/MenuItem';
import ContextMenu from './ContextMenu';
import notes from './ContextMenu.stories.md';
import ContextMenuWithSubmenuWithBoundariesElementExample from '../../../examples/src/ContextMenuWithSubmenuWithBoundariesElementExample';
import '../../../examples/styles/ContextMenuExamples.scss';
export var basic = function basic() {
  return React.createElement(ContextMenu, null, React.createElement("div", {
    className: "context-menu-example-target"
  }, "Target Component - right click me"), React.createElement(Menu, null, React.createElement(MenuItem, null, "View Profile"), React.createElement(MenuItem, null, "Help")));
};
export var withSubmenu = function withSubmenu() {
  return React.createElement(ContextMenuWithSubmenuWithBoundariesElementExample, null);
};
export default {
  title: 'Components|ContextMenu',
  component: ContextMenu,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=ContextMenu.stories.js.map