import * as React from 'react';
import Avatar from '../../avatar/Avatar';
import Button from '../../button/Button';
import MenuItem from '../../menu/MenuItem'; // @ts-ignore TODO: migrate TextArea to typescript

import TextArea from '../../text-area';
import Media from '../Media';
import notes from './Media.stories.md';
import { bdlGreenLight, bdlPurpleRain, bdlWatermelonRed, bdlYellorange } from '../../../styles/variables';
export var example = function example() {
  return React.createElement(Media, {
    style: {
      width: 300
    }
  }, React.createElement(Media.Figure, null, React.createElement(Avatar, {
    size: "large"
  })), React.createElement(Media.Body, null, React.createElement(Media.Menu, {
    "aria-label": "Options"
  }, React.createElement(MenuItem, null, "Edit"), React.createElement(MenuItem, null, "Delete")), React.createElement("div", null, React.createElement("b", null, "Yo Yo Ma"), " commented on this file"), React.createElement("div", null, "Please review the notes", React.createElement("br", null), "a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9")));
};
export var exampleExplanation = function exampleExplanation() {
  return React.createElement(React.Fragment, null, React.createElement("code", null, React.createElement("span", {
    style: {
      color: bdlGreenLight
    }
  }, "Media"), React.createElement("span", {
    style: {
      color: bdlPurpleRain
    }
  }, "Media.Figure"), React.createElement("span", {
    style: {
      color: bdlYellorange
    }
  }, "Media.Body"), React.createElement("span", {
    style: {
      color: bdlWatermelonRed
    }
  }, "Media.Menu")), React.createElement("br", null), React.createElement("br", null), React.createElement(Media, {
    style: {
      width: 300,
      boxShadow: "0 0 2px 3px ".concat(bdlGreenLight),
      padding: 5
    }
  }, React.createElement(Media.Figure, {
    style: {
      boxShadow: "0 0 2px 3px ".concat(bdlPurpleRain)
    }
  }, React.createElement(Avatar, {
    size: "large"
  })), React.createElement(Media.Body, {
    style: {
      boxShadow: "0 0 2px 3px ".concat(bdlYellorange),
      padding: 3
    }
  }, React.createElement(Media.Menu, {
    style: {
      boxShadow: "0 0 2px 3px ".concat(bdlWatermelonRed),
      margin: 3,
      padding: 3
    }
  }, React.createElement(MenuItem, null, "Edit"), React.createElement(MenuItem, null, "Delete")), React.createElement("div", null, React.createElement("b", null, "Yo Yo Ma"), " commented on this file"), React.createElement("div", null, "Please review the notes", React.createElement("br", null), "a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9"))));
};
export var withNestedComponents = function withNestedComponents() {
  return React.createElement(Media, {
    style: {
      width: 300
    }
  }, React.createElement(Media.Figure, null, React.createElement(Avatar, null)), React.createElement(Media.Body, null, React.createElement(Media.Menu, null, React.createElement(MenuItem, null, "Edit"), React.createElement(MenuItem, null, "Delete")), React.createElement("div", null, React.createElement("b", null, "Yo Yo Ma"), " commented on this file"), React.createElement("div", null, "This is a nested media object"), React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0
    }
  }, React.createElement(Media, {
    as: "li",
    style: {
      marginTop: 10
    }
  }, React.createElement(Media.Figure, null, React.createElement(Avatar, null)), React.createElement(Media.Body, null, React.createElement("div", null, React.createElement("b", null, "Bjork"), " replied"), React.createElement("div", null, "I must agree!"), React.createElement(Media, {
    as: "li",
    style: {
      marginTop: 10
    }
  }, React.createElement(Media.Figure, null, React.createElement(Avatar, null)), React.createElement(Media.Body, null, React.createElement("div", null, React.createElement("b", null, "Bono"), " replied"), React.createElement("div", null, "Me too!"))))))));
};
export var withFormElements = function withFormElements() {
  return React.createElement(Media, {
    style: {
      width: 300
    }
  }, React.createElement(Media.Figure, null, React.createElement(Avatar, {
    size: "large"
  })), React.createElement(Media.Body, null, React.createElement(Media.Menu, null, React.createElement(MenuItem, null, "Edit"), React.createElement(MenuItem, null, "Delete")), React.createElement("div", null, React.createElement("b", null, "W.A. Mozart"), " commented on this file"), React.createElement("div", null, "Everyone get ready to perform the symphony tonight!"), React.createElement("div", null, React.createElement(Button, null, "Reply"), React.createElement(Button, null, "Cancel"), React.createElement(TextArea, {
    label: "Response"
  }))));
};
export default {
  title: 'Components|Media/Media',
  component: Media,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=Media.stories.js.map