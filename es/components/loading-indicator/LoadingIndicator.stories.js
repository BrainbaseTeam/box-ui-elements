import * as React from 'react';
import LoadingIndicator, { LoadingIndicatorSize } from './LoadingIndicator';
import notes from './LoadingIndicator.stories.md';
export var defaultSize = function defaultSize() {
  return React.createElement(LoadingIndicator, null);
};
export var smallSize = function smallSize() {
  return React.createElement(LoadingIndicator, {
    size: LoadingIndicatorSize.SMALL
  });
};
export var mediumSize = function mediumSize() {
  return React.createElement(LoadingIndicator, {
    size: LoadingIndicatorSize.MEDIUM
  });
};
export var largeSize = function largeSize() {
  return React.createElement(LoadingIndicator, {
    size: LoadingIndicatorSize.LARGE
  });
};
export default {
  title: 'Components|LoadingIndicator',
  component: LoadingIndicator,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=LoadingIndicator.stories.js.map