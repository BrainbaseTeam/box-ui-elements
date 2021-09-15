function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Modal, ModalActions } from '../../../components/modal';
import commonMessages from '../../../common/messages';
import Button from '../../../components/button';
import classificationMessages from '../messages';
import ClassifiedBadge from '../ClassifiedBadge';
import Label from '../../../components/label/Label';
import messages from './messages';
import SecurityControlsItem from './SecurityControlsItem';
import './SecurityControlsModal.scss';

var SecurityControlsModal = function SecurityControlsModal(_ref) {
  var closeModal = _ref.closeModal,
      definition = _ref.definition,
      classificationColor = _ref.classificationColor,
      classificationName = _ref.classificationName,
      isSecurityControlsModalOpen = _ref.isSecurityControlsModalOpen,
      itemName = _ref.itemName,
      modalItems = _ref.modalItems;

  if (!itemName || !classificationName || !definition) {
    return null;
  }

  var title = React.createElement(FormattedMessage, _extends({}, messages.modalTitle, {
    values: {
      itemName: itemName
    }
  }));
  return React.createElement(Modal, {
    className: "bdl-SecurityControlsModal",
    title: title,
    onRequestClose: closeModal,
    isOpen: isSecurityControlsModalOpen
  }, React.createElement("p", null, React.createElement(FormattedMessage, messages.modalDescription)), React.createElement(ClassifiedBadge, {
    color: classificationColor,
    name: classificationName
  }), React.createElement(Label, {
    text: React.createElement(FormattedMessage, classificationMessages.definition)
  }, React.createElement("p", {
    className: "bdl-SecurityControlsModal-definition"
  }, definition)), React.createElement("ul", {
    className: "bdl-SecurityControlsModal-controlsItemList"
  }, modalItems.map(function (_ref2) {
    var message = _ref2.message,
        tooltipMessage = _ref2.tooltipMessage;
    return React.createElement(SecurityControlsItem, {
      key: message.id,
      message: message,
      tooltipMessage: tooltipMessage
    });
  })), React.createElement(ModalActions, null, React.createElement(Button, {
    onClick: closeModal,
    type: "button"
  }, React.createElement(FormattedMessage, commonMessages.close))));
};

SecurityControlsModal.defaultProps = {
  isSecurityControlsModalOpen: false,
  modalItems: []
};
export default SecurityControlsModal;
//# sourceMappingURL=SecurityControlsModal.js.map