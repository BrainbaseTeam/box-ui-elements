function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import noop from 'lodash/noop';
import { ButtonType } from '../button';

var PlainButton = function PlainButton(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$getDOMRef = _ref.getDOMRef,
      getDOMRef = _ref$getDOMRef === void 0 ? noop : _ref$getDOMRef,
      _ref$isDisabled = _ref.isDisabled,
      isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? ButtonType.SUBMIT : _ref$type,
      rest = _objectWithoutProperties(_ref, ["children", "className", "getDOMRef", "isDisabled", "type"]);

  var buttonProps = {};

  if (isDisabled) {
    buttonProps['aria-disabled'] = true;

    buttonProps.onClick = function (event) {
      event.preventDefault();
      event.stopPropagation();
    };
  }

  return (// eslint-disable-next-line react/button-has-type
    React.createElement("button", _extends({
      className: "btn-plain ".concat(className),
      ref: getDOMRef,
      type: type
    }, rest, buttonProps), children)
  );
};

export default PlainButton;
//# sourceMappingURL=PlainButton.js.map