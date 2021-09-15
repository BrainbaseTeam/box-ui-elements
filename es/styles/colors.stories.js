function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import Color from 'color';
import * as variables from './variables';
import mdNotes from './colors.md';
var bdlColors = {};
var WCAG_AA = 4.5; // minimum contrast ratio for text

var isPaletteColor = function isPaletteColor(hex, key) {
  return key.startsWith('bdl') && !key.includes('Neutral') && key !== 'bdlSecondaryBlue' && hex.startsWith('#');
};

Object.keys(variables).forEach(function (colorKey) {
  var colorHex = variables[colorKey];
  if (Array.isArray(colorHex)) return;

  if (isPaletteColor(colorHex, colorKey)) {
    var paletteGroup = colorKey.match(/[A-Z][a-z]+/g).join(' ');

    if (!bdlColors[paletteGroup]) {
      bdlColors[paletteGroup] = [];
    }

    var color = Color(colorHex);
    var scssVariableName = colorKey.match(/(bdl)|([A-Z][a-z]+)|(\d+)/g).join('-');
    var contrastRatio = color.contrast(Color('#fff'));
    bdlColors[paletteGroup].push({
      scssVariableName: scssVariableName,
      colorHex: colorHex,
      colorKey: colorKey,
      contrastRatio: contrastRatio
    });
  }
});
var wrapper = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'
};
var palette = {};
var swatchContainer = {
  display: 'flex',
  alignItems: 'center'
};
var swatch = {
  borderRadius: '4px',
  height: '40px',
  width: '200px',
  display: 'inline-block'
};
var label = {
  margin: '0 8px 0 16px'
};

var LabelCell = function LabelCell(props) {
  return React.createElement("td", {
    style: {
      minWidth: 240
    }
  }, props.children);
};

var Swatch = function Swatch(_ref) {
  var color = _ref.color;
  return React.createElement("div", {
    style: swatchContainer
  }, React.createElement("span", {
    style: _objectSpread({}, swatch, {
      backgroundColor: color.colorHex
    })
  }), React.createElement("table", {
    style: label
  }, React.createElement("tr", null, React.createElement(LabelCell, null, React.createElement("strong", null, "SCSS:"), " ", React.createElement("code", null, "$", color.scssVariableName.toLowerCase())), React.createElement(LabelCell, null, React.createElement("strong", {
    title: "WCAG contrast ratio against white background"
  }, "WCAG:"), ' ', React.createElement("code", null, color.contrastRatio.toFixed(2)), ' ', color.contrastRatio > WCAG_AA ? '(AA ✔︎)' : React.createElement("s", null, "(AA)"))), React.createElement("tr", null, React.createElement(LabelCell, null, React.createElement("strong", null, "JS:"), " ", React.createElement("code", null, color.colorKey)), React.createElement(LabelCell, null, React.createElement("strong", null, "Hex:"), " ", React.createElement("code", null, color.colorHex)))));
};

var allColors = function allColors() {
  return React.createElement("div", {
    style: wrapper
  }, React.createElement("div", null, React.createElement("h4", null, "Base"), React.createElement("div", {
    style: palette
  }, React.createElement(Swatch, {
    key: "black",
    color: {
      scssVariableName: 'black',
      colorHex: '#000000',
      colorKey: 'black',
      contrastRatio: 100
    }
  }), React.createElement(Swatch, {
    key: "white",
    color: {
      scssVariableName: 'white',
      colorHex: '#ffffff',
      colorKey: 'white',
      contrastRatio: 0
    }
  }))), Object.entries(bdlColors).sort(function (A, B) {
    // Sort the palette by grayness (hue/saturation = 0) and then by color
    var a = Color(A[1][0].colorHex);
    var b = Color(B[1][0].colorHex);
    if (a.hsl().object().h === 0) return -1;
    if (b.hsl().object().h === 0) return 1;
    return a.rgbNumber() - b.rgbNumber();
  }).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        name = _ref3[0],
        colors = _ref3[1];

    return React.createElement("div", {
      key: name
    }, React.createElement("h4", null, name), React.createElement("div", {
      style: palette
    }, colors.map(function (color) {
      return React.createElement(Swatch, {
        key: color.colorKey,
        color: color
      });
    })));
  }));
};

export { allColors };
export default {
  title: 'Theming|Colors',
  parameters: {
    notes: mdNotes
  }
};
//# sourceMappingURL=colors.stories.js.map