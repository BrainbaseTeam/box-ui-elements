import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import Button from '../button/Button';
import ButtonGroup from './ButtonGroup';
import notes from './ButtonGroup.stories.md';
export var regular = function regular() {
  return React.createElement(ButtonGroup, {
    isDisabled: boolean('isDisabled', false)
  }, React.createElement(Button, null, "Add"), React.createElement(Button, null, "Update"), React.createElement(Button, null, "Remove"));
};
export var disabled = function disabled() {
  return React.createElement(ButtonGroup, {
    isDisabled: true
  }, React.createElement(Button, null, "Add"), React.createElement(Button, null, "Update"), React.createElement(Button, null, "Remove"));
};
export default {
  title: 'Components|ButtonGroup',
  component: ButtonGroup,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=ButtonGroup.stories.js.map