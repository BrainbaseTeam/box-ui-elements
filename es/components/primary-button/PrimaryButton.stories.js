import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import PrimaryButton from './PrimaryButton';
import notes from './PrimaryButton.stories.md';
export var regular = function regular() {
  return React.createElement(PrimaryButton, {
    isDisabled: boolean('isDisabled', false),
    isLoading: boolean('isLoading', false),
    onClick: action('onClick called')
  }, "Click Here");
};
export var loading = function loading() {
  return React.createElement(PrimaryButton, {
    isLoading: true
  }, "Click Here");
};
export var disabled = function disabled() {
  return React.createElement(PrimaryButton, {
    isDisabled: true
  }, "Click Here");
};
export default {
  title: 'Components|PrimaryButton',
  component: PrimaryButton,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=PrimaryButton.stories.js.map