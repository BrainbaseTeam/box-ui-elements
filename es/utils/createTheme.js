function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-restricted-syntax */
import Color from 'color';
import method from 'lodash/method';
import merge from 'lodash/merge';
import mapValues from 'lodash/mapValues';
import { THEME_VERY_DARK, THEME_DARK, THEME_MID_DARK, THEME_MIDTONE, THEME_MID_LIGHT, THEME_VERY_LIGHT } from '../constants';
import defaultTheme from '../styles/theme';
import * as vars from '../styles/variables'; // When converting from rgb/hsl to hex there is potential for
// flattening of the color space, so we add an offset factor to account for it.

var OFFSET_FACTOR = 0.05;
export var MIN_CONTRAST = 4.5; // The yiq coefficients in the color library are incorrect
// http://poynton.ca/notes/colour_and_gamma/ColorFAQ.html#RTFToC9

function getYiq(color) {
  var rgb = Color(color).rgb().color;
  return (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 10000;
}

function adjustLightness(color, amount) {
  var lightness = color.lightness();
  return color.lightness(lightness + amount);
} // Given a colorKey, output an accessible Box color palette


function createTheme(colorKey) {
  var _colorMap;

  if (!colorKey) {
    throw new Error('Color key is undefined');
  }

  var colorKeyObj = Color(colorKey);
  var colorKeyYiq = getYiq(colorKey);
  var colorKeyLightness = colorKeyObj.lightness();
  var whiteTextContrast = colorKeyObj.contrast(Color(vars.white));
  var blackTextContrast = colorKeyObj.contrast(Color(vars.black)); // Take the greater contrasting foreground color

  var foreground = whiteTextContrast > blackTextContrast ? vars.white : vars.black;
  var foregroundObj = Color(foreground); //  vDark dark    midDark   midtone   midLight  vLight
  // |----|-----|-----------|----|----|-----------|----|
  // 0    4     20         118  128  168         235  255

  var colorMap = (_colorMap = {}, _defineProperty(_colorMap, THEME_VERY_DARK, {
    yiqRange: [0, 4],
    modifiers: {
      active: 15,
      gradient: 10,
      hover: 10
    }
  }), _defineProperty(_colorMap, THEME_DARK, {
    yiqRange: [4, 20],
    modifiers: {
      active: 8,
      gradient: 5,
      hover: 4
    }
  }), _defineProperty(_colorMap, THEME_MID_DARK, {
    yiqRange: [20, 118],
    modifiers: {
      active: -8,
      gradient: -5,
      hover: 4
    }
  }), _defineProperty(_colorMap, THEME_MIDTONE, {
    yiqRange: [118, 168],
    modifiers: {
      active: -7,
      activeInverse: 9,
      gradient: -7,
      hover: 7,
      hoverInverse: -4
    }
  }), _defineProperty(_colorMap, THEME_MID_LIGHT, {
    yiqRange: [168, 235],
    modifiers: {
      active: 15,
      gradient: -10,
      hover: 10
    }
  }), _defineProperty(_colorMap, THEME_VERY_LIGHT, {
    yiqRange: [235, 256],
    lightnessThreshold: 90,
    modifiers: {
      active: -8,
      gradient: -5,
      hover: -4
    }
  }), _colorMap); // Filter down the color map to the object that's in the proper YIQ range

  var colorRange = Object.keys(colorMap).find(function (key) {
    return colorKeyYiq >= colorMap[key].yiqRange[0] && colorKeyYiq < colorMap[key].yiqRange[1] || colorMap[key].lightnessThreshold && colorKeyLightness >= colorMap[key].lightnessThreshold;
  });

  var colorRangeConfig = _objectSpread({}, colorMap[colorRange || THEME_MIDTONE]); // Modify the primary colorKey with the associated modifiers from the filtered map


  var modifiedColors = {};

  for (var _i = 0, _Object$entries = Object.entries(colorRangeConfig.modifiers); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    // $FlowFixMe
    modifiedColors[key] = adjustLightness(colorKeyObj, value);
  } // If the color is too extreme on either end of the spectrum we need to change our rules.


  var exceedsLightThreshold = colorRange === THEME_VERY_LIGHT || colorRange === THEME_MID_LIGHT;
  var exceedsDarkThreshold = colorRange === THEME_VERY_DARK || colorRange === THEME_DARK; // Light or dark isn't sufficient for determining how the secondary or accent colors should
  // be calculated. In addition to that check, we will check the yiq value of the color to ensure
  // the colorKey is not on the edges of the spectrum.

  var hoverContrast = modifiedColors.hover.contrast(foregroundObj); // If contrast has reached 21, we have hit the end of the spectrum and want to invert.

  var hover = hoverContrast >= MIN_CONTRAST + OFFSET_FACTOR && hoverContrast !== 21 ? modifiedColors.hover : modifiedColors.hoverInverse || adjustLightness(colorKeyObj, -colorRangeConfig.modifiers.hover);
  var activeContrast = modifiedColors.active.contrast(foregroundObj);
  var active = activeContrast >= MIN_CONTRAST + OFFSET_FACTOR && activeContrast !== 21 ? modifiedColors.active : modifiedColors.activeInverse || adjustLightness(colorKeyObj, -colorRangeConfig.modifiers.active);
  var scrollShadowRgba = 'rgba(0, 0, 0, 0.12)';

  if (exceedsLightThreshold) {
    scrollShadowRgba = 'rgba(0, 0, 0, 0.08)';
  } else if (exceedsDarkThreshold) {
    scrollShadowRgba = 'rgba(0, 0, 0, 0.4)';
  } // Converting color objects to hex for return value


  var colorKeyHex = colorKeyObj.hex();
  var hoverHex = hover.hex();
  var activeHex = active.hex();
  var gradientHex = modifiedColors.gradient.hex();
  var colorValues = {
    background: colorKeyHex,
    backgroundHover: hoverHex,
    backgroundActive: activeHex,
    backgroundGradient: gradientHex,
    foreground: foreground,
    border: exceedsLightThreshold ? vars.bdlGray10 : colorKeyHex,
    // Button specific overrides. If the primary color is greater than the lightness threshold
    // we will override the button styling to be a styling based on vars.bdlGray primary.
    buttonForeground: exceedsLightThreshold ? vars.white : foreground,
    buttonBackground: exceedsLightThreshold ? vars.bdlGray : colorKeyHex,
    buttonBackgroundHover: exceedsLightThreshold ? vars.bdlGray80 : hoverHex,
    buttonBackgroundActive: exceedsLightThreshold ? vars.bdlGray62 : activeHex,
    buttonBorder: exceedsLightThreshold ? vars.bdlGray : colorKeyHex,
    buttonBorderHover: exceedsLightThreshold ? vars.bdlGray80 : hoverHex,
    buttonBorderActive: exceedsLightThreshold ? vars.bdlGray62 : activeHex,
    // ProgressBar overrides
    progressBarBackground: exceedsLightThreshold ? vars.bdlGray50 : hoverHex,
    // Scroll effect overrides for scrollable themed elements
    scrollShadowRgba: scrollShadowRgba
  };
  var dynamicTheme = {
    // To avoid a mixture of casing, we force all values to lower
    primary: _objectSpread({}, mapValues(colorValues, method('toLowerCase')), {
      _debug: {
        colorRange: colorRange
      }
    })
  };
  return merge({}, defaultTheme, dynamicTheme);
}

export { createTheme };
//# sourceMappingURL=createTheme.js.map