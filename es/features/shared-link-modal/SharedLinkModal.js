function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '../../components/button';
import { Modal, ModalActions } from '../../components/modal';
import commonMessages from '../../common/messages';
import SharedLink from './SharedLink';
import EmailSharedLink from './EmailSharedLink';
import messages from './messages';
import { accessLevelPropType, allowedAccessLevelsPropType, permissionLevelPropType } from './propTypes';

var SharedLinkModal =
/*#__PURE__*/
function (_Component) {
  _inherits(SharedLinkModal, _Component);

  function SharedLinkModal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SharedLinkModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SharedLinkModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isEmailSharedLinkExpanded: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleEmailSharedLinkExpand", function () {
      _this.setState({
        isEmailSharedLinkExpanded: true
      });
    });

    return _this;
  }

  _createClass(SharedLinkModal, [{
    key: "renderSharedLink",
    value: function renderSharedLink() {
      var _this$props = this.props,
          accessLevel = _this$props.accessLevel,
          accessMenuButtonProps = _this$props.accessMenuButtonProps,
          allowedAccessLevels = _this$props.allowedAccessLevels,
          canRemoveLink = _this$props.canRemoveLink,
          changeAccessLevel = _this$props.changeAccessLevel,
          changePermissionLevel = _this$props.changePermissionLevel,
          copyButtonProps = _this$props.copyButtonProps,
          enterpriseName = _this$props.enterpriseName,
          expiration = _this$props.expiration,
          isDownloadAllowed = _this$props.isDownloadAllowed,
          isEditAllowed = _this$props.isEditAllowed,
          isPreviewAllowed = _this$props.isPreviewAllowed,
          itemType = _this$props.itemType,
          onCopySuccess = _this$props.onCopySuccess,
          onSettingsClick = _this$props.onSettingsClick,
          permissionLevel = _this$props.permissionLevel,
          removeLink = _this$props.removeLink,
          removeLinkButtonProps = _this$props.removeLinkButtonProps,
          sharedLink = _this$props.sharedLink,
          submitting = _this$props.submitting;
      return React.createElement(SharedLink, {
        accessLevel: accessLevel,
        accessMenuButtonProps: accessMenuButtonProps,
        allowedAccessLevels: allowedAccessLevels,
        canRemoveLink: canRemoveLink,
        changeAccessLevel: changeAccessLevel,
        changePermissionLevel: changePermissionLevel,
        copyButtonProps: copyButtonProps,
        enterpriseName: enterpriseName,
        expiration: expiration,
        isDownloadAllowed: isDownloadAllowed,
        isEditAllowed: isEditAllowed,
        isPreviewAllowed: isPreviewAllowed,
        itemType: itemType,
        onCopySuccess: onCopySuccess,
        onSettingsClick: onSettingsClick,
        permissionLevel: permissionLevel,
        removeLink: removeLink,
        removeLinkButtonProps: removeLinkButtonProps,
        sharedLink: sharedLink,
        submitting: submitting
      });
    }
  }, {
    key: "renderEmailSharedLink",
    value: function renderEmailSharedLink() {
      var _this$props2 = this.props,
          contacts = _this$props2.contacts,
          defaultEmailMessage = _this$props2.defaultEmailMessage,
          emailMessageProps = _this$props2.emailMessageProps,
          getContacts = _this$props2.getContacts,
          onRequestClose = _this$props2.onRequestClose,
          sendEmail = _this$props2.sendEmail,
          submitting = _this$props2.submitting;

      if (!getContacts || !contacts || !sendEmail) {
        return null;
      }

      return React.createElement(EmailSharedLink, {
        contacts: contacts,
        defaultEmailMessage: defaultEmailMessage,
        emailMessageProps: emailMessageProps,
        getContacts: getContacts,
        isExpanded: this.state.isEmailSharedLinkExpanded,
        sendEmail: sendEmail,
        onRequestClose: onRequestClose,
        submitting: submitting,
        onExpand: this.handleEmailSharedLinkExpand
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          isOpen = _this$props3.isOpen,
          itemName = _this$props3.itemName,
          modalProps = _this$props3.modalProps,
          onRequestClose = _this$props3.onRequestClose,
          submitting = _this$props3.submitting;
      var isEmailSharedLinkExpanded = this.state.isEmailSharedLinkExpanded;
      return React.createElement(Modal, _extends({
        className: "shared-link-modal",
        focusElementSelector: ".shared-link-container input",
        isOpen: isOpen,
        onRequestClose: submitting ? undefined : onRequestClose,
        title: React.createElement(FormattedMessage, _extends({}, messages.sharedLinkModalTitle, {
          values: {
            itemName: itemName
          }
        }))
      }, modalProps), this.renderSharedLink(), React.createElement("hr", null), this.renderEmailSharedLink(), !isEmailSharedLinkExpanded && React.createElement(ModalActions, null, React.createElement(Button, {
        isDisabled: submitting,
        onClick: onRequestClose,
        type: "button"
      }, React.createElement(FormattedMessage, commonMessages.close))));
    }
  }]);

  return SharedLinkModal;
}(Component);

export default SharedLinkModal;
//# sourceMappingURL=SharedLinkModal.js.map