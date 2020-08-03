function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import Label from '../label';
import Tooltip from '../tooltip';
import './TextArea.scss';

var TextArea = function TextArea(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      error = _ref.error,
      hideLabel = _ref.hideLabel,
      hideOptionalLabel = _ref.hideOptionalLabel,
      isRequired = _ref.isRequired,
      isResizable = _ref.isResizable,
      label = _ref.label,
      textareaRef = _ref.textareaRef,
      rest = _objectWithoutProperties(_ref, ["className", "error", "hideLabel", "hideOptionalLabel", "isRequired", "isResizable", "label", "textareaRef"]);

  var hasError = !!error;
  var classes = classNames(className, 'text-area-container', {
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
    text: label
  }, /*#__PURE__*/React.createElement(Tooltip, {
    isShown: hasError,
    position: "bottom-left",
    text: error || '',
    theme: "error"
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    ref: textareaRef,
    required: isRequired,
    style: {
      resize: isResizable ? '' : 'none'
    }
  }, ariaAttrs, rest))), /*#__PURE__*/React.createElement("span", {
    id: errorMessageID,
    className: "accessibility-hidden",
    role: "alert"
  }, error)));
};

TextArea.displayName = 'TextArea';
export default TextArea;
//# sourceMappingURL=TextArea.js.map