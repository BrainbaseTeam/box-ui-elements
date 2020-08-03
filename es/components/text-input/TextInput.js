function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import IconVerified from '../../icons/general/IconVerified';
import Label from '../label';
import LoadingIndicator from '../loading-indicator';
import Tooltip from '../tooltip';
import './TextInput.scss';

var TextInput = function TextInput(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      description = _ref.description,
      error = _ref.error,
      errorPosition = _ref.errorPosition,
      hideLabel = _ref.hideLabel,
      hideOptionalLabel = _ref.hideOptionalLabel,
      inputRef = _ref.inputRef,
      isLoading = _ref.isLoading,
      isRequired = _ref.isRequired,
      isValid = _ref.isValid,
      label = _ref.label,
      labelTooltip = _ref.labelTooltip,
      rest = _objectWithoutProperties(_ref, ["className", "description", "error", "errorPosition", "hideLabel", "hideOptionalLabel", "inputRef", "isLoading", "isRequired", "isValid", "label", "labelTooltip"]);

  var hasError = !!error;
  var classes = classNames(className, 'text-input-container', {
    'show-error': hasError
  });
  var errorMessageID = React.useRef(uniqueId('errorMessage')).current;
  var ariaAttrs = {
    'aria-invalid': hasError,
    'aria-required': isRequired,
    'aria-errormessage': errorMessageID
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classes
  }, /*#__PURE__*/React.createElement(Label, {
    hideLabel: hideLabel,
    showOptionalText: !hideOptionalLabel && !isRequired,
    text: label,
    tooltip: labelTooltip
  }, !!description && /*#__PURE__*/React.createElement("i", {
    className: "text-input-description"
  }, description), /*#__PURE__*/React.createElement(Tooltip, {
    isShown: hasError,
    position: errorPosition || 'middle-right',
    text: error || '',
    theme: "error"
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: inputRef,
    required: isRequired
  }, ariaAttrs, rest))), isLoading && !isValid && /*#__PURE__*/React.createElement(LoadingIndicator, {
    className: "text-input-loading"
  }), isValid && !isLoading && /*#__PURE__*/React.createElement(IconVerified, {
    className: "text-input-verified"
  }), /*#__PURE__*/React.createElement("span", {
    id: errorMessageID,
    className: "accessibility-hidden",
    role: "alert"
  }, error)));
};

TextInput.displayName = 'TextInput';
export default TextInput;
//# sourceMappingURL=TextInput.js.map