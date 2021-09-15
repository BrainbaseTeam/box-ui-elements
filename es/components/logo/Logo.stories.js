import * as React from 'react';
import Logo from './Logo';
import notes from './Logo.stories.md';
export var regular = function regular() {
  return React.createElement(Logo, {
    title: "Box"
  });
};
export default {
  title: 'Components|Logo',
  component: Logo,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=Logo.stories.js.map