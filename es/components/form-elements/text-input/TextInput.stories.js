import * as React from 'react';
import TextInput from './TextInput';
import notes from './TextInput.stories.md';
export var basic = function basic() {
  return React.createElement(TextInput, {
    label: "Email Address",
    name: "email",
    placeholder: "user@example.com",
    type: "email",
    value: "aaron@example.com"
  });
};
export var urlInput = function urlInput() {
  return React.createElement(TextInput, {
    label: "Url",
    name: "url",
    placeholder: "https://box.com",
    type: "url"
  });
};
export var withCustomValidation = function withCustomValidation() {
  var customValidationFunc = function customValidationFunc(value) {
    if (value !== 'box') {
      return {
        code: 'notbox',
        message: 'value is not box'
      };
    }

    return null;
  };

  return React.createElement(TextInput, {
    label: "Must say box",
    name: "customValidationFunc",
    placeholder: "Not box",
    type: "text",
    validation: customValidationFunc
  });
};
export var withMinimumLength = function withMinimumLength() {
  return React.createElement(TextInput, {
    minLength: 3,
    name: "minlenCheck",
    label: "Minimum length",
    placeholder: "Three or more",
    type: "text"
  });
};
export var withMaximumLength = function withMaximumLength() {
  return React.createElement(TextInput, {
    maxLength: 5,
    name: "maxlenCheck",
    label: "Maximum length",
    placeholder: "Five or less",
    type: "text"
  });
};
export var withTooltipOnHover = function withTooltipOnHover() {
  return React.createElement(TextInput, {
    name: "tooltipCheck",
    label: "Tooltip on hover",
    labelTooltip: "I am the tooltip",
    placeholder: "Hover over the label",
    type: "text"
  });
};
export var withHiddenLabel = function withHiddenLabel() {
  return React.createElement(TextInput, {
    label: "This label text should be hidden",
    name: "hidden label",
    placeholder: "Hidden (but accessible) label text",
    type: "text",
    hideLabel: true
  });
};
export var disabledInput = function disabledInput() {
  return React.createElement(TextInput, {
    name: "disabled",
    isDisabled: true,
    label: "Disabled",
    placeholder: "Disabled input",
    type: "text"
  });
};
export var loading = function loading() {
  return React.createElement(TextInput, {
    name: "loading",
    isDisabled: true,
    isLoading: true,
    label: "Loading",
    placeholder: "Loading...",
    type: "text"
  });
};
export default {
  title: 'Components|Form Elements/TextInput',
  component: TextInput,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=TextInput.stories.js.map