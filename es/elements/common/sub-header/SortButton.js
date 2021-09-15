function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Sort Button component
 * @author Box
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '../../../components/button';
import IconSort from '../../../icons/general/IconSort';
import messages from '../messages';
import Tooltip from '../Tooltip';
import './SortButton.scss';

var SortButton = function SortButton(props) {
  return React.createElement(Tooltip, {
    text: React.createElement(FormattedMessage, messages.sort)
  }, React.createElement(Button, _extends({
    className: "be-btn-sort",
    type: "button"
  }, props), React.createElement(IconSort, null)));
};

export default SortButton;
//# sourceMappingURL=SortButton.js.map