function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import classNames from 'classnames';
import ActivityCard from './ActivityCard'; // @ts-ignore flow import

import { decode } from '../../../utils/keys';
import './SelectableActivityCard.scss';
var ALLOWABLE_NODENAMES = ['A', 'BUTTON'];

function isAllowableNode(_ref) {
  var target = _ref.target;
  return target instanceof HTMLElement && ALLOWABLE_NODENAMES.includes(target.nodeName);
}

var SelectableActivityCard = function SelectableActivityCard(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      _ref2$isDisabled = _ref2.isDisabled,
      isDisabled = _ref2$isDisabled === void 0 ? false : _ref2$isDisabled,
      onSelect = _ref2.onSelect,
      rest = _objectWithoutProperties(_ref2, ["children", "className", "isDisabled", "onSelect"]);

  var ref = React.useRef(null);

  var handleClick = function handleClick(event) {
    if (isDisabled || isAllowableNode(event)) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.focus(); // Buttons do not receive focus in Firefox and Safari on MacOS

    onSelect();
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (isDisabled || isAllowableNode(event)) {
      return;
    }

    var key = decode(event);

    if (key === 'Space' || key === 'Enter') {
      onSelect();
    }
  };

  return React.createElement(ActivityCard, _extends({
    ref: ref,
    "aria-disabled": isDisabled,
    className: classNames('bcs-SelectableActivityCard', className),
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    role: "button",
    tabIndex: 0
  }, rest), children);
};

export default SelectableActivityCard;
//# sourceMappingURL=SelectableActivityCard.js.map