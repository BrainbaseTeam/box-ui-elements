import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { bdlBoxBlue } from '../../styles/variables';
import Header from './Header';
import notes from './Header.stories.md';
export var regular = function regular() {
  return React.createElement(Header, {
    color: text('color', bdlBoxBlue)
  }, React.createElement("h1", {
    style: {
      color: '#fff'
    }
  }, "Lorem Ipsum"));
};
export default {
  title: 'Components|Header',
  component: Header,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=Header.stories.js.map