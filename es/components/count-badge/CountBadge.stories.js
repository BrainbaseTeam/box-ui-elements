import * as React from 'react';
import CountBadge from './CountBadge';
import notes from './CountBadge.stories.md';
export var withAnimation = function withAnimation() {
  return React.createElement(CountBadge, {
    isVisible: true,
    shouldAnimate: true,
    value: "1"
  });
};
export var withoutAnimation = function withoutAnimation() {
  return React.createElement(CountBadge, {
    isVisible: true,
    value: "3,000"
  });
};
export var withHTMLSymbol1 = function withHTMLSymbol1() {
  return React.createElement(CountBadge, {
    isVisible: true,
    value: String.fromCharCode(8226)
  });
};
export var withHTMLSymbol2 = function withHTMLSymbol2() {
  return React.createElement(CountBadge, {
    isVisible: true,
    value: String.fromCharCode(215)
  });
};
export default {
  title: 'Components|CountBadge',
  component: CountBadge,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=CountBadge.stories.js.map