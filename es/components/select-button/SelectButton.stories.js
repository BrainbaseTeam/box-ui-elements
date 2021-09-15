import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import SelectButton from './SelectButton';
import notes from './SelectButton.stories.md';
export var regular = function regular() {
  return React.createElement(SelectButton, {
    className: "",
    isDisabled: boolean('isDisabled', false)
  }, "Click Here");
};
export var disabled = function disabled() {
  return React.createElement(SelectButton, {
    className: "",
    isDisabled: true
  }, "Click Here");
};
export var withError = function withError() {
  return React.createElement(SelectButton, {
    className: "",
    error: "Error text",
    isDisabled: false
  }, "Click Here");
};
export default {
  title: 'Components|SelectButton',
  component: SelectButton,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=SelectButton.stories.js.map