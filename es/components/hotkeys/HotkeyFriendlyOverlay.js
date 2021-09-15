function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { Overlay } from '../flyout';
import HotkeyLayer from './HotkeyLayer';
/*
 * Note that this is expected to be used within a Flyout component that only renders this
 * when it is actually to be put on screen.
 */

var HotkeyFriendlyOverlay = function HotkeyFriendlyOverlay(_ref) {
  var props = _extends({}, _ref);

  return React.createElement(HotkeyLayer, null, React.createElement(Overlay, props));
};

export default HotkeyFriendlyOverlay;
//# sourceMappingURL=HotkeyFriendlyOverlay.js.map