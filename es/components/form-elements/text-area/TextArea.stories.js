import * as React from 'react';
import TextArea from './TextArea';
import notes from './TextArea.stories.md';
export var basic = function basic() {
  return React.createElement(TextArea, {
    name: "textarea",
    label: "Your story",
    placeholder: "Once upon a time"
  });
};
export var withValidation = function withValidation() {
  var textAreaValidator = function textAreaValidator(value) {
    if (!value.includes('www')) {
      return {
        code: 'nowww',
        message: 'Text must have "www" in it'
      };
    }

    return null;
  };

  return React.createElement(TextArea, {
    name: "textarea",
    label: "Validated Text Area",
    placeholder: "Once upon a time",
    validation: textAreaValidator
  });
};
export default {
  title: 'Components|Form Elements/Textarea',
  component: TextArea,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=TextArea.stories.js.map