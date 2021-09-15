import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import Link from '../../link/Link';
import Menu from '../Menu';
import SelectMenuLinkItem from '../SelectMenuLinkItem';
import notes from './SelectMenuLinkItem.stories.md';
export var basic = function basic() {
  return React.createElement(Menu, null, React.createElement(SelectMenuLinkItem, {
    isSelected: boolean('isSelected', true)
  }, React.createElement(Link, {
    href: "http://opensource.box.com/box-ui-elements/storybook"
  }, "View Profile")), React.createElement(SelectMenuLinkItem, null, React.createElement(Link, {
    href: "http://opensource.box.com/box-ui-elements/storybook"
  }, "Awesome Link")));
};
export default {
  title: 'Components|SelectMenuLinkItem',
  component: SelectMenuLinkItem,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=SelectMenuLinkItem.stories.js.map