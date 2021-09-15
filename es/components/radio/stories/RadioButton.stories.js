import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import RadioButton from '../RadioButton';
import notes from './RadioButton.stories.md';
export var basic = function basic() {
  return React.createElement(RadioButton, {
    label: "Radio Button 1",
    value: "radio1"
  });
};
export var disabled = function disabled() {
  return React.createElement(RadioButton, {
    label: "Disabled Radio Button",
    value: "radio2",
    isDisabled: boolean('isDisabled', true)
  });
};
export default {
  title: 'Components|Radio/RadioButton',
  component: RadioButton,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=RadioButton.stories.js.map