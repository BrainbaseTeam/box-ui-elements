import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import Button from './Button';
import notes from './Button.stories.md';
export var regular = function regular() {
  return React.createElement(Button, {
    isDisabled: boolean('isDisabled', false),
    isLoading: boolean('isLoading', false),
    onClick: action('onClick called'),
    showRadar: boolean('showRadar', false)
  }, "Click Here");
};
export var loading = function loading() {
  return React.createElement(Button, {
    isLoading: true
  }, "Click Here");
};
export var disabled = function disabled() {
  return React.createElement(Button, {
    isDisabled: true
  }, "Click Here");
};
export var withRadar = function withRadar() {
  return React.createElement(Button, {
    showRadar: true
  }, "Click Here");
};
export default {
  title: 'Components|Button',
  component: Button,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=Button.stories.js.map