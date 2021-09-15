function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import classNames from 'classnames';
import './Toggle.scss';
var Toggle = React.forwardRef(function (_ref, ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      description = _ref.description,
      isDisabled = _ref.isDisabled,
      isOn = _ref.isOn,
      _ref$isToggleRightAli = _ref.isToggleRightAligned,
      isToggleRightAligned = _ref$isToggleRightAli === void 0 ? false : _ref$isToggleRightAli,
      label = _ref.label,
      name = _ref.name,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ["className", "description", "isDisabled", "isOn", "isToggleRightAligned", "label", "name", "onBlur", "onChange"]);

  var classes = classNames('toggle-container', className, {
    'is-toggle-right-aligned': isToggleRightAligned
  });
  var toggleElements = [React.createElement("div", {
    key: "toggle-simple-switch",
    className: "toggle-simple-switch"
  }), React.createElement("div", {
    key: "toggle-simple-label",
    className: "toggle-simple-label"
  }, label)];

  if (isToggleRightAligned) {
    toggleElements = toggleElements.reverse();
  }

  return React.createElement("div", {
    className: classes
  }, React.createElement("label", {
    className: "toggle-simple"
  }, React.createElement("input", _extends({
    checked: isOn,
    className: "toggle-simple-input",
    disabled: isDisabled,
    ref: ref,
    name: name,
    onBlur: onBlur,
    onChange: onChange,
    type: "checkbox"
  }, rest)), toggleElements), description ? React.createElement("div", {
    className: "toggle-simple-description"
  }, description) : null);
});
Toggle.displayName = 'Toggle';
export default Toggle;
//# sourceMappingURL=Toggle.js.map