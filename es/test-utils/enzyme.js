function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { mount as baseMount, shallow as baseShallow } from 'enzyme'; // Global providers that need setup

import { ThemeProvider } from 'styled-components';
import defaultTheme from '../styles/theme'; // Wrap this around every component so they can use app-wide context.
// Prevents breaking due to missing providers.
// See https://github.com/airbnb/enzyme/blob/master/docs/api/ReactWrapper/getWrappingComponent.md

/* eslint-disable react/prop-types */

var Wrappers = function Wrappers(_ref) {
  var children = _ref.children;
  return React.createElement(ThemeProvider, {
    theme: defaultTheme
  }, children);
};
/**
 * mount() from Enzyme but with required app-wide context providers included by default
 */


var mountConnected = function mountConnected(element) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return baseMount(element, _objectSpread({
    wrappingComponent: Wrappers
  }, options));
};
/**
 * shallow() from Enzyme but with required app-wide context providers included by default.
 */


var shallowConnected = function shallowConnected(element) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return baseShallow(element, _objectSpread({
    wrappingComponent: Wrappers
  }, options));
}; // Re-export everything from Enzyme


export * from 'enzyme'; // Export wrapped methods

export { mountConnected, shallowConnected };
//# sourceMappingURL=enzyme.js.map