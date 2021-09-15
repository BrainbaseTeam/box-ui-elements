function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import classNames from 'classnames';
import Tooltip from '../tooltip';
import './SelectButton.scss';
var SelectButton = React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      error = _ref.error,
      _ref$isDisabled = _ref.isDisabled,
      isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
      rest = _objectWithoutProperties(_ref, ["children", "className", "error", "isDisabled"]);

  return React.createElement(Tooltip, {
    isShown: !!error,
    position: "middle-right",
    text: error,
    theme: "error"
  }, React.createElement("button", _extends({
    className: classNames(className, 'select-button', 'bdl-SelectButton', {
      'is-invalid': !!error
    }),
    disabled: isDisabled,
    ref: ref,
    type: "button"
  }, rest), children));
});
export default SelectButton;
//# sourceMappingURL=SelectButton.js.map