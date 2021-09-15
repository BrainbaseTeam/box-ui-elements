import * as React from 'react';
import { select, boolean, text } from '@storybook/addon-knobs';
import Button from '../button/Button';
import Tooltip, { TooltipPosition, TooltipTheme } from './Tooltip';
import notes from './Tooltip.stories.md';

var addSpacing = function addSpacing(component) {
  return React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: '125px',
      marginBottom: '125px'
    }
  }, component);
};

export var positioning = function positioning() {
  var positions = Object.values(TooltipPosition);
  return addSpacing(React.createElement(Tooltip, {
    isShown: true,
    position: select('Positions', positions, TooltipPosition.TOP_CENTER),
    text: "tooltips are constrained to window by default so if you scroll until there is no room for this tooltip above the button, it will flip below the button"
  }, React.createElement(Button, null, "Learn more")));
};
positioning.story = {
  name: 'Positioning'
};
export var themes = function themes() {
  var themeOptions = Object.values(TooltipTheme);
  return addSpacing(React.createElement(Tooltip, {
    isShown: true,
    position: TooltipPosition.TOP_RIGHT,
    text: "Theme this tooltip",
    theme: select('Themes', themeOptions, TooltipTheme.DEFAULT)
  }, React.createElement(Button, null, "Learn more")));
};
themes.story = {
  name: 'Themes'
};
export var withCloseButton = function withCloseButton() {
  var positions = Object.values(TooltipPosition);
  var themeOptions = Object.values(TooltipTheme);
  return addSpacing(React.createElement(Tooltip, {
    isShown: boolean('isShown', true),
    position: select('Positions', positions, TooltipPosition.TOP_CENTER),
    showCloseButton: boolean('showCloseButton', true),
    text: "Tooltips can have a close button and still work even if the text is long and wrapping",
    theme: select('Themes', themeOptions, TooltipTheme.DEFAULT)
  }, React.createElement(Button, null, "Learn more")));
};
withCloseButton.story = {
  name: 'With close button'
};
export var isShown = function isShown() {
  return addSpacing(React.createElement(Tooltip, {
    isShown: boolean('isShown', true),
    text: "Force show or hide"
  }, React.createElement(Button, null, "Learn more")));
};
isShown.story = {
  name: 'Force show and hide'
};
export var withOffset = function withOffset() {
  var positions = Object.values(TooltipPosition);
  return addSpacing(React.createElement(Tooltip, {
    isShown: boolean('isShown', true),
    position: select('Positions', positions, TooltipPosition.MIDDLE_LEFT),
    text: "this tooltip has 20px offset",
    offset: text('offset', '0 20px')
  }, React.createElement(Button, null, "Learn more")));
};
withOffset.story = {
  name: 'With offset'
};
export var withDisabled = function withDisabled() {
  return addSpacing(React.createElement(Tooltip, {
    isDisabled: boolean('isDisabled', true),
    position: TooltipPosition.MIDDLE_RIGHT,
    text: "controlled tooltip that is shown based only on the isDisabled prop"
  }, React.createElement(Button, null, "Learn more")));
};
withDisabled.story = {
  name: 'With disabled tooltip'
};
export var attachedToDisabledButton = function attachedToDisabledButton() {
  return addSpacing(React.createElement(Tooltip, {
    text: "Tooltip works on disabled buttons"
  }, React.createElement(Button, {
    isDisabled: true
  }, "Save changes")));
};
attachedToDisabledButton.story = {
  name: 'Attached to disabled button'
};
export var withLongText = function withLongText() {
  return addSpacing(React.createElement(Tooltip, {
    position: TooltipPosition.MIDDLE_LEFT,
    text: "this is a long tooltip that will addSpacing past 200px width, add a tooltipClass to override"
  }, React.createElement(Button, null, "Learn more")));
};
withLongText.story = {
  name: 'With long tooltip text'
};
export default {
  title: 'Components|Tooltip',
  component: Tooltip,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=Tooltip.stories.js.map