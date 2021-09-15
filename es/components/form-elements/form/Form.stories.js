import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { boolean } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';
import Button from '../../button/Button';
import Select from '../../select/Select';
import TextArea from '../text-area/TextArea';
import TextInput from '../text-input/TextInput';
import Toggle from '../../toggle/Toggle';
import Form from './Form';
import notes from './Form.stories.md';
export var basic = function basic() {
  var componentStore = new Store({
    formData: {
      showtextareatoggle: ''
    },
    formValidityState: {}
  });

  var customValidationFunc = function customValidationFunc(value) {
    if (value !== 'box') {
      return {
        code: 'notbox',
        message: 'value is not box'
      };
    }

    return null;
  };

  return React.createElement(State, {
    store: componentStore
  }, function (state) {
    return React.createElement(IntlProvider, {
      locale: "en"
    }, React.createElement(Form, {
      onChange: function onChange(formData) {
        componentStore.set({
          formValidityState: {},
          formData: formData
        });
      },
      onValidSubmit: function onValidSubmit() {
        // On a server validation error, set formValidityState to
        // push error states to child inputs
        componentStore.set({
          formValidityState: {
            username: {
              code: 'usernametaken',
              message: 'Username already taken.'
            }
          }
        });
      }
      /* eslint-disable-next-line no-console */
      ,
      onInvalidSubmit: function onInvalidSubmit(formValidityState) {
        return console.log(formValidityState);
      },
      formValidityState: state.formValidityState
    }, React.createElement("div", null, React.createElement(TextInput, {
      name: "username",
      label: "Username",
      placeholder: "swagmaster6",
      type: "text",
      isRequired: boolean('isRequired', true)
    })), React.createElement("div", null, React.createElement(TextInput, {
      name: "email",
      label: "Email Address",
      placeholder: "user@example.com",
      type: "email"
    })), React.createElement("div", null, React.createElement(TextInput, {
      label: "Must say box",
      name: "customValidationFunc",
      placeholder: "Not box",
      type: "text",
      validation: customValidationFunc
    })), React.createElement(Select, {
      name: "albumselect",
      label: "Album"
    }, React.createElement("option", {
      value: 1
    }, "Illmatic"), React.createElement("option", {
      value: 2
    }, "The Marshall Mathers LP"), React.createElement("option", {
      value: 3
    }, "All Eyez on Me"), React.createElement("option", {
      value: 4
    }, "Ready To Die"), React.createElement("option", {
      value: 5
    }, "Enter the Wu-Tang"), React.createElement("option", {
      value: 6
    }, "The Eminem Show"), React.createElement("option", {
      value: 7
    }, "The Chronic"), React.createElement("option", {
      value: 8
    }, "Straight Outta Compton"), React.createElement("option", {
      value: 9
    }, "Reasonable Doubt")), React.createElement("div", null, React.createElement("div", null, React.createElement(Toggle, {
      name: "showtextareatoggle",
      id: "showtextareatoggle",
      isOn: state.formData.showtextareatoggle === 'on',
      label: "Show TextArea",
      onChange: function onChange() {
        return null;
      }
    })), state.formData.showtextareatoggle === 'on' ? React.createElement(TextArea, {
      name: "textarea",
      label: "Your story",
      placeholder: "Once upon a time"
    }) : null), React.createElement(Button, {
      type: "submit"
    }, "Submit")));
  });
};
export default {
  title: 'Components|Form Elements/Form',
  component: Form,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=Form.stories.js.map