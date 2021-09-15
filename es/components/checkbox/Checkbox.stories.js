import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';
import Checkbox from './Checkbox';
import notes from './Checkbox.stories.md';
export var basic = function basic() {
  return React.createElement(Checkbox, {
    fieldLabel: "Field Label",
    id: "1",
    name: "checkbox1",
    label: "Uncontrolled checkbox",
    description: "isChecked is undefined, which makes this an uncontrolled component. You can turn this one on-off whenever you feel like!"
  });
};
export var controlled = function controlled() {
  var componentStore = new Store({
    isChecked: false
  });

  var handleChange = function handleChange() {
    return componentStore.set({
      isChecked: !componentStore.get('isChecked')
    });
  };

  return React.createElement(State, {
    store: componentStore
  }, function (state) {
    return React.createElement("div", null, React.createElement(Checkbox, {
      name: "checkbox2",
      label: "Controlled checkbox",
      isChecked: state.isChecked,
      onChange: handleChange,
      description: "This is a controlled component."
    }), React.createElement(Checkbox, {
      name: "checkbox3",
      label: "Inverted Controlled checkbox",
      isChecked: !state.isChecked,
      onChange: handleChange,
      description: "This is a controlled component, whose value is the inverse of the one above."
    }));
  });
};
export var disabled = function disabled() {
  return React.createElement(Checkbox, {
    name: "checkbox5",
    label: "Disabled",
    isChecked: boolean('isChecked', true),
    isDisabled: boolean('isDisabled', true)
  });
};
export var withTooltip = function withTooltip() {
  return React.createElement(Checkbox, {
    name: "checkbox6",
    label: "I have a tooltip",
    tooltip: "See? Isn\u2019t this great??"
  });
};
export var withSubsection = function withSubsection() {
  return React.createElement(Checkbox, {
    id: "321",
    name: "checkbox321",
    label: "Checkbox with subsection",
    subsection: React.createElement(Checkbox, {
      id: "134",
      name: "checkbox134",
      label: "Subsection checkbox",
      description: "Hi I'm a description"
    })
  });
};
export default {
  title: 'Components|Checkbox',
  component: Checkbox,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=Checkbox.stories.js.map