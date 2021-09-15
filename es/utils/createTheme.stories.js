function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-underscore-dangle */
// @ts-nocheck
import React from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import { color, text } from '@storybook/addon-knobs';
import * as vars from '../styles/variables';
import defaultTheme from '../styles/theme';
import BoxButton from '../components/button';
import BoxLogo from '../icon/logo/BoxLogo';
import { createTheme } from './createTheme';
import notes from './createTheme.stories.md';
import IconAllFiles from '../features/left-sidebar/icons/IconAllFiles';
import IconNotes from '../features/left-sidebar/icons/IconNotes';
import IconRecents from '../features/left-sidebar/icons/IconRecents';
import IconTrash from '../features/left-sidebar/icons/IconTrash';
import IconFavorites from '../features/left-sidebar/icons/IconFavorites';
import IconDevConsole from '../features/left-sidebar/icons/IconDevConsole';
var Swatch = styled.div.withConfig({
  displayName: "createThemestories__Swatch",
  componentId: "wave58-0"
})(["display:inline-block;background:", ";border:1px solid ", ";height:1em;width:1em;border-radius:4px;"], function (p) {
  return p.color;
}, vars.bdlGray30);
var BaseButton = styled(BoxButton).withConfig({
  displayName: "createThemestories__BaseButton",
  componentId: "wave58-1"
})(["background:", ";border-color:", ";color:", ";font-weight:bold;border-radius:6px;font-size:", ";.btn:not(.is-disabled)&:hover{background:", ";border-color:", ";}.btn:not(.is-disabled)&:active{background:", ";border-color:", ";}"], function (props) {
  return props.theme.base.buttonBackground;
}, function (props) {
  return props.theme.base.buttonBorder;
}, function (props) {
  return props.theme.base.buttonForeground;
}, vars.bdlFontSizeDejaBlue, function (props) {
  return props.theme.base.buttonBackgroundHover;
}, function (props) {
  return props.theme.base.buttonBorderHover;
}, function (props) {
  return props.theme.base.buttonBackgroundActive;
}, function (props) {
  return props.theme.base.buttonBorderActive;
});
var PrimaryButton = styled(BoxButton).withConfig({
  displayName: "createThemestories__PrimaryButton",
  componentId: "wave58-2"
})(["background:", ";border-color:", ";color:", ";font-weight:bold;border-radius:6px;font-size:", ";.btn:not(.is-disabled)&:hover{background:", ";border-color:", ";}.btn:not(.is-disabled)&:active{background:", ";border-color:", ";}"], function (props) {
  return props.theme.primary.buttonBackground;
}, function (props) {
  return props.theme.primary.buttonBorder;
}, function (props) {
  return props.theme.primary.buttonForeground;
}, vars.bdlFontSizeDejaBlue, function (props) {
  return props.theme.primary.buttonBackgroundHover;
}, function (props) {
  return props.theme.primary.buttonBorderHover;
}, function (props) {
  return props.theme.primary.buttonBackgroundActive;
}, function (props) {
  return props.theme.primary.buttonBorderActive;
});
var ThemeDemo = styled.div.withConfig({
  displayName: "createThemestories__ThemeDemo",
  componentId: "wave58-3"
})(["width:200px;min-height:500px;padding:8px;border-radius:4px;display:flex;flex-direction:column;color:", ";border:1px solid ", ";background:", ";"], function (p) {
  return p.theme.primary.foreground;
}, function (p) {
  return p.theme.primary.border;
}, function (p) {
  return p.theme.primary.background;
});
var ThemeDemoMenuItem = styled.div.withConfig({
  displayName: "createThemestories__ThemeDemoMenuItem",
  componentId: "wave58-4"
})(["cursor:pointer;padding:8px 12px;margin:2px 4px;border-radius:8px;font-weight:bold;transition:0.15s;border:1px solid;border-color:transparent;&:hover{background:", ";}&.active,&:active{background:", ";}&:focus,&:active{border-color:", ";}&.alt{background:", ";&:hover{background:", ";}}"], function (p) {
  return p.theme.primary.backgroundHover;
}, function (p) {
  return p.theme.primary.backgroundActive;
}, function (p) {
  return p.theme.primary.foreground;
}, function (p) {
  return p.theme.primary.backgroundHover;
}, function (p) {
  return p.theme.primary.backgroundActive;
});
var scroll = keyframes(["0%{right:100%;left:0%;}50%{right:0%;left:0%;}100%{right:0%;left:100%;}"]);
var ThemeDemoProgressBar = styled.div.withConfig({
  displayName: "createThemestories__ThemeDemoProgressBar",
  componentId: "wave58-5"
})(["position:relative;display:inline-block;height:6px;width:300px;padding:0;&::before{position:absolute;top:0;bottom:0;left:0;content:'';background-color:", ";will-change:left,right;animation:2s ", " infinite;}"], function (props) {
  return props.theme.primary.progressBarBackground;
}, scroll);
var ThemeDemoLogo = styled(BoxLogo).withConfig({
  displayName: "createThemestories__ThemeDemoLogo",
  componentId: "wave58-6"
})(["width:61px;height:32px;margin:4px 4px 16px 4px;& path,& .fill-color{fill:", ";}"], function (props) {
  return props.theme.primary.foreground;
});
var ThemeDemoIcon = styled.span.withConfig({
  displayName: "createThemestories__ThemeDemoIcon",
  componentId: "wave58-7"
})(["margin-right:8px;& svg{top:2px;position:relative;}& path,& .fill-color{fill:", ";}"], function (props) {
  return props.theme.primary.foreground;
});
var Footer = styled.div.withConfig({
  displayName: "createThemestories__Footer",
  componentId: "wave58-8"
})(["flex:1;display:flex;flex-direction:column;justify-content:flex-end;"]);
export var ThemeExample = function ThemeExample() {
  var colorText = text('Primary Color Hex');
  var colorMap = color('Primary Color', '#0061d5');
  var colorHex = /^#[0-9A-F]{6}$/i.test(colorText) ? colorText : colorMap;
  var theme = colorHex ? createTheme(colorHex) : defaultTheme;
  return React.createElement(ThemeProvider, {
    theme: theme
  }, React.createElement("div", {
    style: {
      float: 'right'
    }
  }, React.createElement("section", null, React.createElement("h4", null, "theme.primary"), Object.entries(theme.primary).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        key = _ref2[0];

    return key !== '_debug';
  }).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        val = _ref4[1];

    return React.createElement("div", {
      key: key
    }, React.createElement(Swatch, {
      color: val
    }), " ", key, " ", React.createElement("code", null, val));
  }), React.createElement("span", null, "Theme Color Range: ", theme.primary._debug.colorRange), React.createElement("br", null), React.createElement("h4", null, "theme.base"), Object.entries(theme.base).map(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        key = _ref6[0],
        val = _ref6[1];

    return React.createElement("div", {
      key: key
    }, React.createElement(Swatch, {
      color: val
    }), " ", key, " ", React.createElement("code", null, val));
  }))), React.createElement("div", {
    style: {
      marginLeft: -5
    }
  }, React.createElement(BaseButton, null, "Base"), React.createElement(PrimaryButton, null, "Primary")), React.createElement("br", null), React.createElement(ThemeDemoProgressBar, null), React.createElement("br", null), React.createElement("br", null), React.createElement(ThemeDemo, null, React.createElement(ThemeDemoLogo, null), React.createElement(ThemeDemoMenuItem, {
    className: "active"
  }, React.createElement(ThemeDemoIcon, null, React.createElement(IconAllFiles, null)), "All Files"), React.createElement(ThemeDemoMenuItem, null, React.createElement(ThemeDemoIcon, null, React.createElement(IconRecents, null)), "Recents"), React.createElement(ThemeDemoMenuItem, null, React.createElement(ThemeDemoIcon, null, React.createElement(IconFavorites, null)), "Favorites"), React.createElement(ThemeDemoMenuItem, null, React.createElement(ThemeDemoIcon, null, React.createElement(IconTrash, null)), "Trash"), React.createElement(Footer, null, React.createElement(ThemeDemoMenuItem, {
    className: "alt"
  }, React.createElement(ThemeDemoIcon, null, React.createElement(IconNotes, null)), "Notes"), React.createElement(ThemeDemoMenuItem, {
    className: "alt"
  }, React.createElement(ThemeDemoIcon, null, React.createElement(IconDevConsole, null)), "Developer Console"))), React.createElement("br", null), React.createElement("section", null, React.createElement("details", null, React.createElement("summary", null, "JSON Theme"), React.createElement("pre", null, React.createElement("code", null, JSON.stringify(theme, null, 2))))));
};
export default {
  title: 'Theming|Theme',
  component: ThemeExample,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=createTheme.stories.js.map