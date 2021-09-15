import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import Label from './Label';
import notes from './Label.stories.md';
export var basic = function basic() {
  return React.createElement(Label, {
    text: "Input Label",
    tooltip: "This is an input label."
  }, React.createElement("input", {
    type: "text"
  }));
};
export var withOptionalText = function withOptionalText() {
  return React.createElement(Label, {
    text: "Input Label",
    showOptionalText: boolean('showOptionalText', true)
  }, React.createElement("input", {
    type: "text"
  }));
};
export var withInfoTooltip = function withInfoTooltip() {
  return React.createElement(Label, {
    text: "Input Label",
    infoTooltip: "I stand above this icon"
  }, React.createElement("input", {
    type: "text"
  }));
};
export default {
  title: 'Components|Label',
  component: Label,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=Label.stories.js.map