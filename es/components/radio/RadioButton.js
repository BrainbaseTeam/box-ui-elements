function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import './RadioButton.scss'; // @NOTE: readonly is not a valid attribute for input type radio so
// this avoids the propType error that "checked" is set without "onChange"
// eslint-disable-next-line @typescript-eslint/no-empty-function

var onChangeStub = function onChangeStub() {};

var RadioButton = function RadioButton(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$isSelected = _ref.isSelected,
      isSelected = _ref$isSelected === void 0 ? false : _ref$isSelected,
      description = _ref.description,
      _ref$hideLabel = _ref.hideLabel,
      hideLabel = _ref$hideLabel === void 0 ? false : _ref$hideLabel,
      label = _ref.label,
      name = _ref.name,
      value = _ref.value,
      rest = _objectWithoutProperties(_ref, ["isDisabled", "isSelected", "description", "hideLabel", "label", "name", "value"]);

  return React.createElement("div", {
    className: "radio-container"
  }, React.createElement("label", {
    className: "radio-label"
  }, React.createElement("input", _extends({
    checked: isSelected,
    disabled: isDisabled,
    name: name,
    onChange: onChangeStub,
    type: "radio",
    value: value
  }, rest)), React.createElement("span", null), React.createElement("span", {
    className: hideLabel ? 'accessibility-hidden' : ''
  }, label)), description ? React.createElement("div", {
    className: "radio-description"
  }, description) : null);
};

export default RadioButton;
//# sourceMappingURL=RadioButton.js.map