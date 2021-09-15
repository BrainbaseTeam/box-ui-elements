import * as React from 'react';
import Avatar from '../../avatar/Avatar';
import MenuItem from '../../menu/MenuItem';
import Media from '../Media';
import MediaFigure from '../MediaFigure';
import notes from './MediaFigure.stories.md';
export var example = function example() {
  return React.createElement(Media, {
    style: {
      width: 300
    }
  }, React.createElement(Media.Figure, {
    style: {
      boxShadow: '0 0 2px 3px red'
    }
  }, React.createElement(Avatar, {
    size: "large"
  })), React.createElement(Media.Body, null, React.createElement(Media.Menu, null, React.createElement(MenuItem, null, "Edit"), React.createElement(MenuItem, null, "Delete")), React.createElement("div", null, React.createElement("b", null, "Yo Yo Ma"), " commented on this file"), React.createElement("div", null, "Please review the notes", React.createElement("br", null), "a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9")));
};
export default {
  title: 'Components|Media/MediaFigure',
  component: MediaFigure,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=MediaFigure.stories.js.map