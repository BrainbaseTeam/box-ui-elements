import * as React from 'react';
import { State, Store } from '@sambego/storybook-state';
import { boolean } from '@storybook/addon-knobs';
import Toggle from './Toggle';
import notes from './Toggle.stories.md';
export var basic = function basic() {
  return React.createElement(Toggle, {
    name: "toggle1",
    label: "Uncontrolled toggle",
    description: "isOn is undefined, which makes this an uncontrolled component. You can turn this one on or off whenever you want."
  });
};
export var rightAligned = function rightAligned() {
  return React.createElement(Toggle, {
    description: "isOn is undefined, which makes this an uncontrolled component. You can turn this one on or off whenever you want.",
    isToggleRightAligned: boolean('isToggleRightAligned', true),
    label: "Uncontrolled toggle right aligned",
    name: "toggle1"
  });
};
export var controlled = function controlled() {
  var componentStore = new Store({
    isOn: false
  });

  var onToggle = function onToggle() {
    return componentStore.set({
      isOn: !componentStore.get('isOn')
    });
  };

  return React.createElement(State, {
    store: componentStore
  }, function (state) {
    return React.createElement("div", null, React.createElement(Toggle, {
      name: "toggle2",
      label: "Controlled toggle",
      isOn: state.isOn,
      onChange: onToggle,
      description: "This is a controlled component."
    }), React.createElement(Toggle, {
      name: "toggle3",
      label: "Inverted controlled toggle",
      isOn: !state.isOn,
      onChange: onToggle,
      description: "This is a controlled component, whose value is the inverse of the one above."
    }));
  });
};
export var disabled = function disabled() {
  return React.createElement(Toggle, {
    name: "toggle4",
    label: "Disabled",
    isDisabled: boolean('isDisabled', true)
  });
};
export default {
  title: 'Components|Toggle',
  component: Toggle,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=Toggle.stories.js.map