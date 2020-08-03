function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Add Button component
 * @author Box
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '../../../components/button';
import IconAddThin from '../../../icons/general/IconAddThin';
import messages from '../messages';
import Tooltip from '../Tooltip';
import './AddButton.scss';

var AddButton = function AddButton(props) {
  return /*#__PURE__*/React.createElement(Tooltip, {
    text: /*#__PURE__*/React.createElement(FormattedMessage, messages.add)
  }, /*#__PURE__*/React.createElement(Button, _extends({
    className: "be-btn-add",
    "aria-label": messages.add.defaultMessage,
    type: "button"
  }, props), /*#__PURE__*/React.createElement(IconAddThin, null)));
};

export default AddButton;
//# sourceMappingURL=AddButton.js.map