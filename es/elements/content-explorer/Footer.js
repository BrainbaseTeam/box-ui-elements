/**
 * 
 * @file Footer component
 * @author Box
 */
import * as React from 'react';
import Button from '../../components/button';
import ButtonGroup from '../../components/button-group';
import PrimaryButton from '../../components/primary-button';
import './Footer.scss';

var Footer = function Footer(_ref) {
  var pickedCount = _ref.pickedCount,
      onBatchCancel = _ref.onBatchCancel,
      onBatchDownload = _ref.onBatchDownload,
      children = _ref.children;
  return /*#__PURE__*/React.createElement("footer", {
    className: "bce-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bce-footer-left"
  }, children), /*#__PURE__*/React.createElement("div", {
    className: "bce-footer-right"
  }, pickedCount > 0 && /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    onClick: onBatchCancel,
    type: "button"
  }, "Cancel"), /*#__PURE__*/React.createElement(PrimaryButton, {
    onClick: onBatchDownload,
    type: "button"
  }, "Download"))));
};

export default Footer;
//# sourceMappingURL=Footer.js.map