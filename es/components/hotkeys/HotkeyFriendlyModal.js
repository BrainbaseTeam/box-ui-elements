function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import HotkeyLayer from './HotkeyLayer'; // eslint-disable-line import/no-cycle

import { Modal } from '../modal';

var HotkeyFriendlyModal = function HotkeyFriendlyModal(_ref) {
  var isOpen = _ref.isOpen,
      rest = _objectWithoutProperties(_ref, ["isOpen"]);

  if (!isOpen) {
    return null;
  }

  return React.createElement(HotkeyLayer, null, React.createElement(Modal, _extends({
    isOpen: true
  }, rest)));
};

export default HotkeyFriendlyModal;
//# sourceMappingURL=HotkeyFriendlyModal.js.map