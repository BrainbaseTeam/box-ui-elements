import * as React from 'react';
import Button, { ButtonType } from '../button/Button'; // @ts-ignore flow import

import testImageSrc from './getTestImageSrc';
import ImageTooltip from './ImageTooltip';
import notes from './ImageTooltip.stories.md';
export var basic = function basic() {
  return React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, React.createElement(ImageTooltip, {
    content: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut at semper nisl.",
    image: React.createElement("img", {
      src: testImageSrc,
      alt: "Lorem ipsum dolor"
    }),
    isShown: true,
    title: "Lorem ipsum dolor"
  }, React.createElement(Button, {
    type: ButtonType.BUTTON
  }, "Callout")));
};
export default {
  title: 'Components|ImageTooltip',
  component: ImageTooltip,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=ImageTooltip.stories.js.map