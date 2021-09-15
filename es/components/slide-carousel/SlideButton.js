function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PlainButton from '../plain-button';

var SlideButton = function SlideButton(_ref) {
  var buttonRef = _ref.buttonRef,
      onClick = _ref.onClick,
      _ref$isSelected = _ref.isSelected,
      isSelected = _ref$isSelected === void 0 ? false : _ref$isSelected,
      rest = _objectWithoutProperties(_ref, ["buttonRef", "onClick", "isSelected"]);

  return React.createElement(PlainButton, _extends({
    "aria-selected": isSelected,
    className: "slide-selector ".concat(isSelected ? 'is-selected' : ''),
    getDOMRef: buttonRef,
    onClick: onClick,
    role: "tab",
    type: "button"
  }, rest));
};

export default SlideButton;
//# sourceMappingURL=SlideButton.js.map