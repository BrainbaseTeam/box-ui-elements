function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import classNames from 'classnames';
import LoadingIndicator from '../../components/loading-indicator';
import './QuickSearchSelector.scss';

var QuickSearchSelector = function QuickSearchSelector(_ref) {
  var className = _ref.className,
      _ref$inputProps = _ref.inputProps,
      inputProps = _ref$inputProps === void 0 ? {} : _ref$inputProps,
      inputRef = _ref.inputRef,
      _ref$isLoading = _ref.isLoading,
      isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
      onInput = _ref.onInput,
      placeholder = _ref.placeholder,
      rest = _objectWithoutProperties(_ref, ["className", "inputProps", "inputRef", "isLoading", "onInput", "placeholder"]);

  return React.createElement("div", {
    className: "quick-search-selector"
  }, React.createElement("input", _extends({}, rest, inputProps, {
    ref: inputRef,
    "aria-label": placeholder,
    autoComplete: "off",
    className: classNames('search-input', className),
    onInput: onInput,
    placeholder: placeholder,
    type: "text"
  })), isLoading && React.createElement(LoadingIndicator, {
    className: "loading-indicator"
  }));
};

QuickSearchSelector.displayName = 'QuickSearchSelector';
export default QuickSearchSelector;
//# sourceMappingURL=QuickSearchSelector.js.map