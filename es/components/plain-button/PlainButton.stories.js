import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import PlainButton from './PlainButton';
import { ButtonType } from '../button';
import notes from './PlainButton.stories.md';
export var regular = function regular() {
  return React.createElement(PlainButton, {
    isDisabled: boolean('isDisabled', false),
    type: ButtonType.BUTTON
  }, "Click Here");
};
export var disabled = function disabled() {
  return React.createElement(PlainButton, {
    isDisabled: true
  }, "Click Here");
};
export default {
  title: 'Components|PlainButton',
  component: PlainButton,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=PlainButton.stories.js.map