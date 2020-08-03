function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Footer list component
 * @author Box
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '../../components/button';
import ButtonGroup from '../../components/button-group';
import IconCheck from '../../icons/general/IconCheck';
import IconClose from '../../icons/general/IconClose';
import messages from '../common/messages';
import PrimaryButton from '../../components/primary-button';
import Tooltip from '../common/Tooltip';
import './Footer.scss';

var Footer = function Footer(_ref) {
  var selectedCount = _ref.selectedCount,
      onSelectedClick = _ref.onSelectedClick,
      hasHitSelectionLimit = _ref.hasHitSelectionLimit,
      isSingleSelect = _ref.isSingleSelect,
      onCancel = _ref.onCancel,
      onChoose = _ref.onChoose,
      chooseButtonLabel = _ref.chooseButtonLabel,
      cancelButtonLabel = _ref.cancelButtonLabel,
      children = _ref.children;
  return /*#__PURE__*/React.createElement("footer", {
    className: "bcp-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bcp-footer-left"
  }, !isSingleSelect && /*#__PURE__*/React.createElement(Button, {
    className: "bcp-selected",
    onClick: onSelectedClick,
    type: "button"
  }, /*#__PURE__*/React.createElement(FormattedMessage, _extends({
    className: "bcp-selected-count"
  }, messages.selected, {
    values: {
      count: selectedCount
    }
  })), hasHitSelectionLimit && /*#__PURE__*/React.createElement("span", {
    className: "bcp-selected-max"
  }, "(", /*#__PURE__*/React.createElement(FormattedMessage, messages.max), ")"))), /*#__PURE__*/React.createElement("div", {
    className: "bcp-footer-right"
  }, children, /*#__PURE__*/React.createElement(ButtonGroup, {
    className: "bcp-footer-actions"
  }, /*#__PURE__*/React.createElement(Tooltip, {
    text: cancelButtonLabel || /*#__PURE__*/React.createElement(FormattedMessage, messages.cancel)
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onCancel,
    type: "button"
  }, /*#__PURE__*/React.createElement(IconClose, {
    height: 16,
    width: 16
  }))), /*#__PURE__*/React.createElement(Tooltip, {
    isDisabled: !selectedCount,
    text: chooseButtonLabel || /*#__PURE__*/React.createElement(FormattedMessage, messages.choose)
  }, /*#__PURE__*/React.createElement(PrimaryButton, {
    isDisabled: !selectedCount,
    onClick: onChoose,
    type: "button"
  }, /*#__PURE__*/React.createElement(IconCheck, {
    color: "#fff",
    height: 16,
    width: 16
  }))))));
};

export default Footer;
//# sourceMappingURL=Footer.js.map