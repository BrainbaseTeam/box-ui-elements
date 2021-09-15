import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import Select from './Select';
import notes from './Select.stories.md';
export var basic = function basic() {
  return React.createElement(Select, {
    name: "select",
    label: "Album"
  }, React.createElement("option", null, "Illmatic"), React.createElement("option", null, "The Marshall Mathers LP"), React.createElement("option", null, "All Eyez on Me"), React.createElement("option", null, "Ready To Die"), React.createElement("option", null, "Enter the Wu-Tang"), React.createElement("option", null, "The Eminem Show"), React.createElement("option", null, "The Chronic"), React.createElement("option", null, "Straight Outta Compton"), React.createElement("option", null, "Reasonable Doubt"));
};
export var disabled = function disabled() {
  return React.createElement(Select, {
    name: "select",
    label: "Disabled Select",
    isDisabled: boolean('isDisabled', true)
  }, React.createElement("option", null, "Straight Outta Compton"));
};
export var withErrorMessage = function withErrorMessage() {
  return React.createElement(Select, {
    name: "select",
    label: "Album",
    error: "Not For Kidz"
  }, React.createElement("option", null, "Illmatic"), React.createElement("option", null, "The Marshall Mathers LP"), React.createElement("option", null, "All Eyez on Me"), React.createElement("option", null, "Ready To Die"), React.createElement("option", null, "Enter the Wu-Tang"), React.createElement("option", null, "The Eminem Show"), React.createElement("option", null, "The Chronic"), React.createElement("option", null, "Straight Outta Compton"), React.createElement("option", null, "Reasonable Doubt"));
};
export var withErrorOutline = function withErrorOutline() {
  return React.createElement(Select, {
    name: "select",
    label: "Album",
    showErrorOutline: boolean('showErrorOutline', true)
  }, React.createElement("option", null, "Illmatic"), React.createElement("option", null, "The Marshall Mathers LP"), React.createElement("option", null, "All Eyez on Me"), React.createElement("option", null, "Ready To Die"), React.createElement("option", null, "Enter the Wu-Tang"), React.createElement("option", null, "The Eminem Show"), React.createElement("option", null, "The Chronic"), React.createElement("option", null, "Straight Outta Compton"), React.createElement("option", null, "Reasonable Doubt"));
};
export default {
  title: 'Components|Select',
  component: Select,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=Select.stories.js.map