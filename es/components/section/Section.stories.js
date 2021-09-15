import * as React from 'react';
import Section from './Section';
import notes from './Section.stories.md';
export var basic = function basic() {
  return React.createElement(Section, {
    title: "User Info",
    description: "Your account info"
  }, React.createElement("input", {
    name: "textinput",
    type: "email",
    placeholder: "Enter email here"
  }));
};
export default {
  title: 'Components|Section',
  component: Section,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=Section.stories.js.map