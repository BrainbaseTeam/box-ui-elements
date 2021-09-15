import * as React from 'react';
import Link from '../Link';
import LinkGroup from '../LinkGroup';
import notes from './LinkGroup.stories.md';
export var basic = function basic() {
  return React.createElement(LinkGroup, null, React.createElement(Link, {
    href: "https://www.box.com/platform"
  }, "A Link"), React.createElement(Link, {
    href: "https://developer.box.com"
  }, "B Link"), React.createElement(Link, {
    href: "https://github.com/box/box-ui-elements"
  }, "C Link"));
};
export default {
  title: 'Components|Links/LinkGroup',
  component: LinkGroup,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=LinkGroup.stories.js.map