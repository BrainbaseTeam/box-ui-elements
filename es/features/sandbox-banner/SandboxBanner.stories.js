import * as React from 'react';
import SandboxBanner from './SandboxBanner';
import notes from './SandboxBanner.stories.md';
export var basic = function basic() {
  return React.createElement(SandboxBanner, null, React.createElement("span", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."));
};
export default {
  title: 'Features|SandboxBanner',
  component: SandboxBanner,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=SandboxBanner.stories.js.map