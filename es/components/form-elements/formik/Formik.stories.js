import * as React from 'react';
import { Field, Form, Formik } from 'formik';
import { boolean } from '@storybook/addon-knobs';
import TextInput from '../../text-input/TextInput';
import TextArea from '../../text-area/TextAreaField';
import Toggle from '../../toggle/ToggleField';
import Checkbox from '../../checkbox/CheckboxField';
import SelectField from '../../select-field/SelectField';
import PillSelectorDropdownField from '../../pill-selector-dropdown/PillSelectorDropdownField';
import DatalistItem from '../../datalist-item/DatalistItem';
import { RadioButton, RadioButtonField, RadioGroup } from '../../radio';
import notes from './Formik.stories.md';
export var basic = function basic() {
  var pillSelectorValidator = function pillSelectorValidator(option) {
    var value = typeof option === 'string' ? option : option.value;
    return ['red', 'green', 'blue', 'yellow', 'white', 'black'].includes(value);
  };

  return React.createElement(Formik, {
    initialValues: {
      checkbox: true,
      pillselector: [],
      radiogroup: 'red',
      textarea: 'textarea',
      textinput: 'textinput',
      toggle: true
    },
    onSubmit: function onSubmit() {
      return null;
    },
    validate: function validate(values) {
      var errors = {};
      var textinput = values.textinput,
          textarea = values.textarea,
          pillselector = values.pillselector;

      if (!textinput) {
        errors.textinput = 'Required';
      }

      if (!textarea) {
        errors.textarea = 'Required';
      }

      if (Array.isArray(pillselector) && !pillselector.every(function (pill) {
        return pillSelectorValidator(pill);
      })) {
        errors.pillselector = 'Bad colors';
      }

      return errors;
    }
  }, function (props) {
    return React.createElement(React.Fragment, null, React.createElement(Form, {
      style: {
        display: 'inline-block'
      }
    }, React.createElement(Field, {
      name: "checkbox",
      label: "Checkbox Field",
      component: Checkbox
    }), React.createElement(Field, {
      name: "toggle",
      label: "Toggle Field",
      component: Toggle
    }), React.createElement(Field, {
      isRequired: boolean('isRequired', true),
      label: "Text Input Field",
      name: "textinput",
      type: "text",
      placeholder: "Text Input Field",
      component: TextInput
    }), React.createElement(Field, {
      isRequired: boolean('isRequired', true),
      label: "Text Area Field",
      name: "textarea",
      placeholder: "Text Area Field",
      component: TextArea
    }), React.createElement("b", null, "Non-RadioGroup RadioButtons sharing the same name"), React.createElement("br", null), React.createElement("br", null), React.createElement(Field, {
      isSelected: false,
      label: "Radio Button Field 1",
      name: "radiobutton",
      component: RadioButtonField,
      value: "radio1"
    }), React.createElement(Field, {
      isSelected: false,
      label: "Radio Button Field 2",
      name: "radiobutton",
      component: RadioButtonField,
      value: "radio2"
    }), React.createElement("br", null), React.createElement(Field, {
      label: "Single Select Field",
      name: "singleselect",
      placeholder: "Single Select Field",
      options: [{
        displayText: 'Red',
        value: 'red'
      }, {
        displayText: 'Green',
        value: 'green'
      }, {
        displayText: 'Blue',
        value: 'blue'
      }],
      component: SelectField
    }), React.createElement("br", null), React.createElement("br", null), React.createElement(Field, {
      label: "Multi Select Field",
      name: "multiselect",
      placeholder: "Multi Select Field",
      multiple: true,
      options: [{
        displayText: 'Red',
        value: 'red'
      }, {
        displayText: 'Green',
        value: 'green'
      }, {
        displayText: 'Blue',
        value: 'blue'
      }],
      component: SelectField
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("b", null, "RadioGroup-ed RadioButtons"), React.createElement("br", null), React.createElement("br", null), React.createElement(Field, {
      name: "radiogroup",
      component: RadioGroup
    }, React.createElement(RadioButton, {
      label: "Red",
      value: "red",
      description: "Red color"
    }), React.createElement(RadioButton, {
      label: "Blue",
      value: "blue",
      description: "Blue color"
    })), React.createElement("br", null), React.createElement("br", null), React.createElement(Field, {
      label: "Pill Selector Field",
      name: "pillselector",
      placeholder: "Colors",
      component: PillSelectorDropdownField,
      validator: pillSelectorValidator
    }), React.createElement("br", null), React.createElement("br", null), React.createElement(Field, {
      label: "Pill Selector Field With Dropdown",
      name: "pillselectordropdown",
      placeholder: "Colors",
      options: [{
        displayText: 'Red',
        value: 'red'
      }, {
        displayText: 'Green',
        value: 'green'
      }, {
        displayText: 'Blue',
        value: 'blue'
      }],
      component: PillSelectorDropdownField,
      validator: pillSelectorValidator,
      dropdownRenderer: function dropdownRenderer(options) {
        return options.map(function (option) {
          return React.createElement(DatalistItem, {
            key: option.value,
            style: {
              color: option.value
            }
          }, option.displayText);
        });
      }
    })), React.createElement("pre", {
      style: {
        color: '#fff',
        background: '#0061D5',
        fontSize: '14px',
        padding: '.5rem',
        float: 'right',
        display: 'inline-block'
      }
    }, React.createElement("strong", null, "Formik State"), " = ", JSON.stringify(props, null, 2)));
  });
};
export default {
  title: 'Components|Formik Elements',
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=Formik.stories.js.map