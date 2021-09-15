import * as React from 'react';
import RadarAnimation, { RadarAnimationPosition } from './RadarAnimation';
import Button from '../button';
import notes from './RadarAnimation.stories.md';
export var bottomLeft = function bottomLeft() {
  return React.createElement(RadarAnimation, {
    position: RadarAnimationPosition.BOTTOM_LEFT
  }, React.createElement(Button, null, "Bottom Left"));
};
export var bottomCenter = function bottomCenter() {
  return React.createElement(RadarAnimation, {
    position: RadarAnimationPosition.BOTTOM_CENTER
  }, React.createElement(Button, null, "Bottom Center"));
};
export var bottomRight = function bottomRight() {
  return React.createElement(RadarAnimation, {
    position: RadarAnimationPosition.BOTTOM_RIGHT
  }, React.createElement(Button, null, "Bottom Right"));
};
export var middleLeft = function middleLeft() {
  return React.createElement(RadarAnimation, {
    position: RadarAnimationPosition.MIDDLE_LEFT
  }, React.createElement(Button, null, "Middle Left"));
};
export var middleCenter = function middleCenter() {
  return React.createElement(RadarAnimation, {
    position: RadarAnimationPosition.MIDDLE_CENTER
  }, React.createElement(Button, null, "Middle Center"));
};
export var middleRight = function middleRight() {
  return React.createElement(RadarAnimation, {
    position: RadarAnimationPosition.MIDDLE_RIGHT
  }, React.createElement(Button, null, "Middle Right"));
};
export var topLeft = function topLeft() {
  return React.createElement(RadarAnimation, {
    position: RadarAnimationPosition.TOP_LEFT
  }, React.createElement(Button, null, "Top Left"));
};
export var topCenter = function topCenter() {
  return React.createElement(RadarAnimation, {
    position: RadarAnimationPosition.TOP_CENTER
  }, React.createElement(Button, null, "Top Center"));
};
export var topRight = function topRight() {
  return React.createElement(RadarAnimation, {
    position: RadarAnimationPosition.TOP_RIGHT
  }, React.createElement(Button, null, "Top Right"));
};
export var withOffset = function withOffset() {
  return React.createElement(RadarAnimation, {
    position: RadarAnimationPosition.MIDDLE_LEFT,
    offset: "0 20px"
  }, React.createElement(Button, null, "Middle Left, with offset"));
};
export default {
  title: 'Components|RadarAnimation',
  component: RadarAnimation,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=RadarAnimation.stories.js.map