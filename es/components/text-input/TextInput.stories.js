import * as React from 'react';
import { State, Store } from '@sambego/storybook-state';
import TextInput from './TextInput';
import notes from './TextInput.stories.md';
export var basic = function basic() {
  return React.createElement(TextInput, {
    label: "Email",
    name: "textinput",
    type: "email",
    placeholder: "Enter email here"
  });
};
export var withDescription = function withDescription() {
  return React.createElement(TextInput, {
    description: "Email used for work",
    label: "Email",
    name: "textinput",
    type: "email",
    placeholder: "Enter email here"
  });
};
export var withLongBreakableStrings = function withLongBreakableStrings() {
  return React.createElement(TextInput, {
    description: "Long Long Long Long long long Long Long Long Long long longLong Long Long Long long longLong Long Long Long long long",
    label: "Long Long Long Long long long Long Long Long Long long longLong Long Long Long long longLong Long Long Long long long",
    name: "textinput",
    type: "email",
    placeholder: "Enter email here"
  });
};
export var withLongUnbreakableStrings = function withLongUnbreakableStrings() {
  return React.createElement(TextInput, {
    description: "longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong",
    label: "longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong",
    name: "textinput",
    type: "email",
    placeholder: "Enter email here"
  });
};
export var error = function error() {
  return React.createElement(TextInput, {
    label: "Email",
    name: "textinput",
    type: "email",
    error: "oops",
    placeholder: "Enter email here"
  });
};
export var loading = function loading() {
  return React.createElement(TextInput, {
    label: "Email",
    name: "textinput",
    type: "email",
    isLoading: true,
    placeholder: "Enter email here"
  });
};
export var valid = function valid() {
  return React.createElement(TextInput, {
    label: "Email",
    name: "textinput",
    type: "email",
    isValid: true,
    placeholder: "Enter email here"
  });
};
export var requiredWithOnChange = function requiredWithOnChange() {
  var componentStore = new Store({
    error: 'required',
    value: ''
  });
  return React.createElement(State, {
    store: componentStore
  }, function (state) {
    return React.createElement(TextInput, {
      label: "Email",
      name: "textinput",
      type: "email",
      placeholder: "Enter email here",
      value: state.value,
      error: state.error,
      onChange: function onChange(e) {
        return componentStore.set({
          error: e.target.value ? '' : 'required',
          value: e.target.value
        });
      }
    });
  });
};
export default {
  title: 'Components|TextInput',
  component: TextInput,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=TextInput.stories.js.map