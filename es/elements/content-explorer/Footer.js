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
import { FormattedMessage } from 'react-intl';
import messages from 'elements/common/messages';

var Footer = function Footer(_ref) {
  var pickedCount = _ref.pickedCount,
      onBatchCancel = _ref.onBatchCancel,
      onBatchDownload = _ref.onBatchDownload,
      children = _ref.children;
  return React.createElement("footer", {
    className: "bce-footer"
  }, React.createElement("div", {
    className: "bce-footer-left"
  }, children), React.createElement("div", {
    className: "bce-footer-right"
  }, pickedCount > 0 && React.createElement(ButtonGroup, null, React.createElement(Button, {
    onClick: onBatchCancel,
    type: "button"
  }, React.createElement(FormattedMessage, messages.cancel)), React.createElement(PrimaryButton, {
    onClick: onBatchDownload,
    type: "button"
  }, React.createElement(FormattedMessage, messages.download)))));
};

export default Footer;
//# sourceMappingURL=Footer.js.map