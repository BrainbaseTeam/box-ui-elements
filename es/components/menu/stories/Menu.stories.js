import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';
import Link from '../../link/Link';
import MenuItem from '../MenuItem';
import MenuLinkItem from '../MenuLinkItem';
import MenuSectionHeader from '../MenuSectionHeader';
import MenuSeparator from '../MenuSeparator';
import SelectMenuLinkItem from '../SelectMenuLinkItem';
import SubmenuItem from '../SubmenuItem';
import Menu from '../Menu';
import notes from './Menu.stories.md';
export var basic = function basic() {
  return React.createElement(Menu, null, React.createElement(MenuItem, null, "View Profile"), React.createElement(MenuItem, {
    showRadar: true
  }, "Help"), React.createElement(MenuSeparator, null), React.createElement(MenuSectionHeader, null, "Menu Section"), React.createElement(MenuLinkItem, null, React.createElement(Link, {
    href: "/#"
  }, "Awesome Link")));
};
export var withSubmenu = function withSubmenu() {
  return React.createElement("div", {
    style: {
      maxWidth: '220px'
    }
  }, React.createElement(Menu, null, React.createElement(MenuItem, null, "View Profile"), React.createElement(SubmenuItem, null, "Submenu", React.createElement(Menu, null, React.createElement(MenuItem, null, "View Profile"), React.createElement(MenuItem, null, "Help"))), React.createElement(MenuItem, null, "Help")));
};
export var withSubmenuFlip = function withSubmenuFlip() {
  return React.createElement("div", {
    style: {
      maxWidth: '220px'
    }
  }, React.createElement(Menu, null, React.createElement(MenuItem, null, "View Profile"), React.createElement(SubmenuItem, null, "Submenu", React.createElement(Menu, null, React.createElement(MenuItem, null, "View Profile"), React.createElement(MenuItem, null, "Help"), React.createElement(MenuItem, null, "Help"))), React.createElement(MenuItem, null, "Help")));
};
export var withSelectMenu = function withSelectMenu() {
  return React.createElement(Menu, null, React.createElement(SelectMenuLinkItem, {
    isSelected: boolean('isSelected', true)
  }, React.createElement(Link, {
    href: "http://opensource.box.com/box-ui-elements/storybook"
  }, "View Profile")), React.createElement(SelectMenuLinkItem, null, React.createElement(Link, {
    href: "http://opensource.box.com/box-ui-elements/storybook"
  }, "Awesome Link")));
};
export var withChildOnResize = function withChildOnResize() {
  var componentStore = new Store({
    isLargeMenu: false
  });

  var setVisibility = function setVisibility() {
    if (window.innerWidth < 700 && !componentStore.get('isLargeMenu')) {
      componentStore.set({
        isLargeMenu: true
      });
    }
  };

  window.addEventListener('resize', setVisibility);
  return React.createElement(State, {
    store: componentStore
  }, function (state) {
    return React.createElement(Menu, null, React.createElement(MenuItem, null, "View Profile"), React.createElement(MenuItem, null, "Help"), state.isLargeMenu && React.createElement(MenuItem, null, "Visible on Resize"), React.createElement(MenuItem, null, "Last Item"));
  });
};
export default {
  title: 'Components|Menu',
  component: Menu,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=Menu.stories.js.map