import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { bdlGray20, bdlPurpleRain } from '../../../styles/variables';
import RadioButton from '../RadioButton';
import RadioGroup from '../RadioGroup';
import notes from './RadioGroup.stories.md';
export var basic = function basic() {
  return React.createElement(RadioGroup, {
    name: "radiogroup",
    value: "radio3"
  }, React.createElement(RadioButton, {
    label: "Radio Button 1",
    value: "radio1",
    description: "I have a description"
  }), React.createElement(RadioButton, {
    label: "Radio Button 2",
    value: "radio2",
    description: "I also have a description"
  }), React.createElement(RadioButton, {
    label: "Radio Button 3",
    value: "radio3"
  }), React.createElement(RadioButton, {
    label: "Radio Button 4",
    value: "radio4"
  }), React.createElement(RadioButton, {
    label: "Disabled Radio Button",
    value: "radio5",
    isDisabled: boolean('isDisabled', true)
  }));
};
export var withCustomRadioButtonComponent = function withCustomRadioButtonComponent() {
  var CustomRadioButton = function CustomRadioButton(_ref) {
    var isSelected = _ref.isSelected,
        label = _ref.label,
        name = _ref.name,
        value = _ref.value;
    return React.createElement("span", {
      style: {
        marginRight: '15px',
        position: 'relative'
      },
      title: String(label)
    }, React.createElement("span", {
      style: {
        backgroundColor: isSelected ? bdlPurpleRain : bdlGray20,
        borderRadius: '50%',
        display: 'inline-block',
        height: '20px',
        left: '0',
        position: 'absolute',
        width: '20px'
      }
    }), React.createElement("input", {
      checked: isSelected,
      name: name,
      type: "radio",
      value: value,
      style: {
        cursor: 'pointer',
        height: '20px',
        opacity: 0,
        width: '20px'
      }
    }));
  };

  return React.createElement(RadioGroup, {
    name: "customradiogroup",
    value: "customRadio3"
  }, React.createElement(CustomRadioButton, {
    label: "Radio Button 1",
    value: "customRadio1"
  }), React.createElement(CustomRadioButton, {
    label: "Radio Button 2",
    value: "customRadio2"
  }), React.createElement(CustomRadioButton, {
    label: "Radio Button 3",
    value: "customRadio3"
  }), React.createElement(CustomRadioButton, {
    label: "Radio Button 4",
    value: "customRadio4"
  }), React.createElement(CustomRadioButton, {
    label: "Radio Button 5",
    value: "customRadio5"
  }));
};
export default {
  title: 'Components|Radio/RadioGroup',
  component: RadioGroup,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=RadioGroup.stories.js.map