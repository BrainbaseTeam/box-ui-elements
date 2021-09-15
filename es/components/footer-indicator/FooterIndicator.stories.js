import * as React from 'react';
import FooterIndicator from './FooterIndicator';
import notes from './FooterIndicator.stories.md';
export var regular = function regular() {
  return React.createElement("div", {
    style: {
      height: '250px',
      position: 'relative',
      transform: 'translate3d(0, 0, 0)'
    }
  }, React.createElement(FooterIndicator, {
    indicatorText: "FooterIndicator"
  }));
};
export var withTruncatedText = function withTruncatedText() {
  return React.createElement("div", {
    style: {
      height: '250px',
      position: 'relative',
      transform: 'translate3d(0, 0, 0)'
    }
  }, React.createElement(FooterIndicator, {
    indicatorText: "FooterIndicatorWithExtremelyRemarkablyStupendouslyTerrificallyLongName"
  }));
};
export default {
  title: 'Components|FooterIndicator',
  component: FooterIndicator,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=FooterIndicator.stories.js.map