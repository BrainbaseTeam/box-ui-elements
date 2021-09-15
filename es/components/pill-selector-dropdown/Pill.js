import React from 'react';
import noop from 'lodash/noop';
import classNames from 'classnames';

var Pill = function Pill(_ref) {
  var _ref$isDisabled = _ref.isDisabled,
      isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
      _ref$isSelected = _ref.isSelected,
      isSelected = _ref$isSelected === void 0 ? false : _ref$isSelected,
      _ref$isValid = _ref.isValid,
      isValid = _ref$isValid === void 0 ? true : _ref$isValid,
      onRemove = _ref.onRemove,
      text = _ref.text;
  var styles = classNames('bdl-Pill', 'pill', {
    'is-selected': isSelected && !isDisabled,
    'is-invalid': !isValid,
    'is-disabled': isDisabled,
    'bdl-is-disabled': isDisabled
  });
  var onClick = isDisabled ? noop : onRemove;
  return React.createElement("span", {
    className: styles
  }, React.createElement("span", {
    className: "bdl-Pill-text pill-text"
  }, text), React.createElement("span", {
    "aria-hidden": "true",
    className: "close-btn",
    onClick: onClick
  }, "\u2715"));
};

export default Pill;
//# sourceMappingURL=Pill.js.map