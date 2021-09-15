import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import Media from '../media';
import Ghost from './Ghost';
import notes from './Ghost.stories.md';
export var regular = function regular() {
  return React.createElement(Ghost, {
    isAnimated: boolean('isAnimated', true)
  });
};
export var withoutAnimation = function withoutAnimation() {
  return React.createElement(Ghost, {
    isAnimated: false
  });
};
export var circle = function circle() {
  return React.createElement(Ghost, {
    borderRadius: "50%",
    width: 32,
    height: 32
  });
};
export var rectangle = function rectangle() {
  return React.createElement(Ghost, {
    width: 100,
    height: 32
  });
};
export var pill = function pill() {
  return React.createElement(Ghost, {
    borderRadius: 12,
    width: 100,
    height: 24
  });
};
export var complicatedLayout = function complicatedLayout() {
  return React.createElement(Media, {
    style: {
      maxWidth: 400
    }
  }, React.createElement(Media.Figure, null, React.createElement(Ghost, {
    borderRadius: "50%",
    height: 32,
    width: 32
  })), React.createElement(Media.Body, null, React.createElement("p", null, React.createElement(Ghost, null), React.createElement(Ghost, null), React.createElement(Ghost, {
    width: "50%"
  })), React.createElement("p", null, React.createElement(Ghost, {
    width: 100,
    height: 32
  }), " ", React.createElement(Ghost, {
    width: 100,
    height: 32
  }))));
};
export default {
  title: 'Components|Ghost',
  component: Ghost,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=Ghost.stories.js.map