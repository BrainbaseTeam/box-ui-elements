import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import Avatar from '../avatar/Avatar';
import Link from '../link/Link';
import Menu from '../menu/Menu';
import MenuItem from '../menu/MenuItem';
import MenuLinkItem from '../menu/MenuLinkItem';
import MenuSeparator from '../menu/MenuSeparator';
import MenuToggle from './MenuToggle';
import PlainButton from '../plain-button/PlainButton';
import DropdownMenu from './DropdownMenu';
import notes from './DropdownMenu.stories.md';

function generateClickHandler(message) {
  return function (event) {
    event.preventDefault();
    /* eslint-disable-next-line no-console */

    console.log("".concat(message, " menu option selected"));
  };
}

export var basic = function basic() {
  return React.createElement(DropdownMenu, {
    onMenuOpen: function onMenuOpen() {
      /* eslint-disable-next-line no-console */
      console.log('menu opened');
    },
    onMenuClose: function onMenuClose() {
      /* eslint-disable-next-line no-console */
      console.log('menu closed');
    }
  }, React.createElement(PlainButton, {
    className: "dropdown-menu-example-button",
    type: "button"
  }, React.createElement(MenuToggle, null, React.createElement(Avatar, {
    id: "123",
    name: "Jay Tee"
  }))), React.createElement(Menu, null, React.createElement(MenuItem, {
    onClick: generateClickHandler('View Profile')
  }, "View Profile"), React.createElement(MenuItem, {
    onClick: generateClickHandler('Help')
  }, "Help"), React.createElement(MenuItem, {
    onClick: generateClickHandler('Should Not Fire This Handler'),
    isDisabled: boolean('isDisabled', true)
  }, "Disabled Option"), React.createElement(MenuSeparator, null), React.createElement(MenuLinkItem, null, React.createElement(Link, {
    href: "/logout-example-link",
    onClick: generateClickHandler('Log Out')
  }, "Log Out"))));
};
export var withLinkMenu = function withLinkMenu() {
  return (// When using `MenuToggle` in an element with the `lnk` class, the caret icon is automatically colored blue.
    React.createElement(DropdownMenu, null, React.createElement(PlainButton, {
      className: "lnk"
    }, React.createElement(MenuToggle, null, "Hello")), React.createElement(Menu, null, React.createElement(MenuItem
    /* eslint-disable-next-line no-console */
    , {
      onClick: function onClick() {
        return console.log('hey');
      }
    }, "Menu Item")))
  );
};
export default {
  title: 'Components|DropdownMenu',
  component: DropdownMenu,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=DropdownMenu.stories.js.map