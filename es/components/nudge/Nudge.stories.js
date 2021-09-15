import * as React from 'react';
import { State, Store } from '@sambego/storybook-state';
import BoxMobile140 from '../../illustration/BoxMobile140';
import Nudge from './Nudge';
import notes from './Nudge.stories.md';

var onButtonClick = function onButtonClick() {
  // eslint-disable-next-line no-console
  console.log('button clicked');
};

export var regular = function regular() {
  var componentStore = new Store({
    isShown: true
  });

  var onNudgeClose = function onNudgeClose() {
    return componentStore.set({
      isShown: false
    });
  };

  return React.createElement(State, {
    store: componentStore
  }, function (state) {
    return React.createElement(Nudge, {
      buttonText: React.createElement("span", null, "Pellentesque port"),
      content: React.createElement("span", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis rutrum turpis."),
      illustration: React.createElement(BoxMobile140, {
        height: 140,
        width: 140
      }),
      isShown: state.isShown,
      header: React.createElement("span", null, "Heading goes here"),
      onButtonClick: onButtonClick,
      onCloseButtonClick: onNudgeClose
    });
  });
};
export default {
  title: 'Components|Nudge',
  component: Nudge,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=Nudge.stories.js.map