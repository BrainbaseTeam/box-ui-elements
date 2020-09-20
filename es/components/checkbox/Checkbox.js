function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import CheckboxTooltip from './CheckboxTooltip';
import './Checkbox.scss';

var Checkbox = function Checkbox(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      description = _ref.description,
      fieldLabel = _ref.fieldLabel,
      hideLabel = _ref.hideLabel,
      id = _ref.id,
      isChecked = _ref.isChecked,
      isDisabled = _ref.isDisabled,
      label = _ref.label,
      name = _ref.name,
      onChange = _ref.onChange,
      subsection = _ref.subsection,
      tooltip = _ref.tooltip,
      rest = _objectWithoutProperties(_ref, ["className", "description", "fieldLabel", "hideLabel", "id", "isChecked", "isDisabled", "label", "name", "onChange", "subsection", "tooltip"]);

  var checkboxLabel =
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/label-has-for
  React.createElement("label", {
    className: "checkbox-label"
  }, /*#__PURE__*/React.createElement("input", _extends({
    checked: isChecked,
    disabled: isDisabled,
    id: id,
    name: name,
    onChange: onChange,
    type: "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "checkbox-pointer-target"
  }), /*#__PURE__*/React.createElement("span", {
    className: hideLabel ? 'accessibility-hidden' : ''
  }, label), "\xA0\xA0\xA0\xA0");
  return /*#__PURE__*/React.createElement("div", {
    className: "checkbox-container ".concat(className, " ").concat(isDisabled ? 'is-disabled' : '')
  }, fieldLabel && /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, fieldLabel), tooltip ? /*#__PURE__*/React.createElement(CheckboxTooltip, {
    label: checkboxLabel,
    tooltip: tooltip
  }) : checkboxLabel, description ? /*#__PURE__*/React.createElement("div", {
    className: "checkbox-description"
  }, description) : null, subsection ? /*#__PURE__*/React.createElement("div", {
    className: "checkbox-subsection"
  }, subsection) : null);
};

export default Checkbox;
//# sourceMappingURL=Checkbox.js.map