function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import classNames from 'classnames';
import isEqual from 'lodash/isEqual';
import Button from '../button';

var PillCloud = function PillCloud(_ref) {
  var options = _ref.options,
      onSelect = _ref.onSelect,
      _ref$selectedOptions = _ref.selectedOptions,
      selectedOptions = _ref$selectedOptions === void 0 ? [] : _ref$selectedOptions,
      _ref$buttonProps = _ref.buttonProps,
      buttonProps = _ref$buttonProps === void 0 ? {} : _ref$buttonProps;
  return React.createElement("div", {
    className: "bdl-PillCloud pill-cloud-container"
  }, options && options.map(function (option) {
    return React.createElement(Button, _extends({
      key: option.value,
      className: classNames('bdl-Pill', 'bdl-PillCloud-button', 'pill', 'pill-cloud-button', {
        'is-selected': selectedOptions.find(function (op) {
          return isEqual(op, option);
        })
      }),
      onClick: onSelect ? function () {
        return onSelect(option);
      } : undefined,
      "data-resin-target": option.value
    }, buttonProps), option.displayText);
  }));
};

export default PillCloud;
//# sourceMappingURL=PillCloud.js.map