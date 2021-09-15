import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '../../components/button/Button';
import PlainButton from '../../components/plain-button/PlainButton';
import PrimaryButton from '../../components/primary-button/PrimaryButton';
import messages from './messages';
import './Footer.scss';

var Footer = function Footer(_ref) {
  var onCancel = _ref.onCancel,
      onRemove = _ref.onRemove,
      showSave = _ref.showSave;
  return React.createElement("div", {
    className: "metadata-instance-editor-footer"
  }, React.createElement("div", {
    className: "metadata-instance-editor-footer-delete"
  }, React.createElement(PlainButton, {
    "data-resin-target": "metadata-instanceremove",
    onClick: onRemove,
    type: "button"
  }, React.createElement(FormattedMessage, messages.metadataRemoveTemplate))), React.createElement("div", {
    className: "metadata-instance-editor-footer-save-cancel"
  }, React.createElement(Button, {
    "data-resin-target": "metadata-instancecancel",
    onClick: onCancel,
    type: "button"
  }, React.createElement(FormattedMessage, messages.metadataCancel)), showSave && React.createElement(PrimaryButton, {
    "data-resin-target": "metadata-instancesave"
  }, React.createElement(FormattedMessage, messages.metadataSave))));
};

export default Footer;
//# sourceMappingURL=Footer.js.map