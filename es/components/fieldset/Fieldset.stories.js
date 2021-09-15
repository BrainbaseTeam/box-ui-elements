import * as React from 'react';
import RadioButton from '../radio/RadioButton';
import RadioGroup from '../radio/RadioGroup';
import Fieldset from './Fieldset';
import notes from './Fieldset.stories.md';
export var basic = function basic() {
  return React.createElement(Fieldset, {
    title: "Choose your favorite dessert"
  }, React.createElement(RadioGroup, {
    name: "nodeType",
    value: "cupcakes"
  }, React.createElement(RadioButton, {
    label: "Apple Pie",
    value: "applePie"
  }), React.createElement(RadioButton, {
    label: "Cheesecake",
    value: "cheesecake"
  }), React.createElement(RadioButton, {
    label: "Cupcakes",
    value: "cupcakes"
  }), React.createElement(RadioButton, {
    label: "Macarons",
    value: "macarons"
  }), React.createElement(RadioButton, {
    label: "Tiramisu",
    value: "tiramisu"
  })));
};
export default {
  title: 'Components|Fieldset',
  component: Fieldset,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=Fieldset.stories.js.map