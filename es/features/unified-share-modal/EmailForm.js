'no babel-plugin-flow-react-proptypes'; // this plugin breaks the IntlShape type

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import classNames from 'classnames';
import { FormattedMessage, injectIntl } from 'react-intl';
import TextArea from '../../components/text-area';
import PrimaryButton from '../../components/primary-button';
import { ModalActions } from '../../components/modal';
import Button from '../../components/button';
import Tooltip from '../../components/tooltip';
import InlineNotice from '../../components/inline-notice';
import PillSelectorDropdown from '../../components/pill-selector-dropdown';
import commonMessages from '../../common/messages';
import { emailValidator } from '../../utils/validators';
import IconGlobe from '../../icons/general/IconGlobe';
import ContactsField from './ContactsField';
import messages from './messages';

var EmailForm = /*#__PURE__*/function (_React$Component) {
  _inherits(EmailForm, _React$Component);

  var _super = _createSuper(EmailForm);

  function EmailForm(props) {
    var _this;

    _classCallCheck(this, EmailForm);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "contactsFieldRef", /*#__PURE__*/React.createRef());

    _defineProperty(_assertThisInitialized(_this), "handleContactAdd", function (contacts) {
      var _this$props = _this.props,
          selectedContacts = _this$props.selectedContacts,
          onContactAdd = _this$props.onContactAdd,
          updateSelectedContacts = _this$props.updateSelectedContacts;
      var updatedContacts = [].concat(_toConsumableArray(selectedContacts), _toConsumableArray(contacts));
      updateSelectedContacts(updatedContacts);

      _this.validateContacts(updatedContacts);

      if (onContactAdd) {
        onContactAdd(contacts);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleContactRemove", function (option, index) {
      var _this$props2 = _this.props,
          onContactRemove = _this$props2.onContactRemove,
          updateSelectedContacts = _this$props2.updateSelectedContacts;

      var selectedContacts = _this.props.selectedContacts.slice();

      var removed = selectedContacts.splice(index, 1);
      updateSelectedContacts(selectedContacts);

      _this.validateContacts(selectedContacts);

      if (onContactRemove) {
        onContactRemove(removed);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "validateContacts", function (selectedContacts) {
      var _this$props3 = _this.props,
          contactLimit = _this$props3.contactLimit,
          intl = _this$props3.intl;
      var contactsFieldError = '';

      if (contactLimit !== undefined && selectedContacts.length > contactLimit) {
        contactsFieldError = intl.formatMessage(messages.contactsExceedLimitError, {
          maxContacts: contactLimit
        });
      } else if (selectedContacts.length === 0) {
        contactsFieldError = intl.formatMessage(messages.enterAtLeastOneEmailError);
      }

      _this.setState({
        contactsFieldError: contactsFieldError
      });

      return contactsFieldError;
    });

    _defineProperty(_assertThisInitialized(_this), "handleContactInput", function (value) {
      var onContactInput = _this.props.onContactInput;

      if (onContactInput) {
        onContactInput(value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMessageChange", function (event) {
      var target = event.target;

      if (target instanceof HTMLTextAreaElement) {
        _this.setState({
          message: target.value
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      _this.setState({
        message: '',
        contactsFieldError: ''
      });

      _this.props.updateSelectedContacts([]);
      /* Need to reset text in contacts field upon cancelling
         because the field still shows if the field isn't unmounted
         but only collapsed (like in invite collabs usage).
         inputValue doesn't get passed down through props but is
         internal state in pill selector. */


      if (_this.contactsFieldRef.current) {
        _this.contactsFieldRef.current.setState({
          inputValue: ''
        });
      }

      _this.props.onRequestClose();
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (event) {
      event.preventDefault();
      var _this$props4 = _this.props,
          onSubmit = _this$props4.onSubmit,
          selectedContacts = _this$props4.selectedContacts;
      var _this$state = _this.state,
          message = _this$state.message,
          contactsFieldError = _this$state.contactsFieldError;

      if (contactsFieldError !== '') {
        // Block submission if there's a validation error
        return;
      }

      var contactsError = _this.validateContacts(selectedContacts);

      if (contactsError) {
        return;
      }

      var emails = [];
      var groupIDs = [];
      selectedContacts.forEach(function (_ref) {
        var type = _ref.type,
            value = _ref.value;

        if (type === 'group') {
          groupIDs.push(value);
        } else {
          emails.push(value);
        }
      });
      onSubmit({
        emails: emails,
        groupIDs: groupIDs,
        message: message
      }).catch(function (error) {
        // Remove sent emails from selected pills
        var invitedEmails = error.invitedEmails || [];

        _this.filterSentEmails(invitedEmails);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "filterSentEmails", function (sentEmails) {
      _this.props.updateSelectedContacts(_this.props.selectedContacts.filter(function (_ref2) {
        var value = _ref2.value;
        return !sentEmails.includes(value);
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "validateContactField", function (text) {
      var intl = _this.props.intl;
      var contactsFieldError = '';

      if (text && !_this.isValidEmail(text)) {
        contactsFieldError = intl.formatMessage(commonMessages.invalidEmailError);
      }

      _this.setState({
        contactsFieldError: contactsFieldError
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isValidEmail", function (text) {
      return emailValidator(text);
    });

    _this.state = {
      contactsFieldError: '',
      message: ''
    };
    return _this;
  }

  _createClass(EmailForm, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          contactsFieldError = _this$state2.contactsFieldError,
          message = _this$state2.message;
      var _this$props5 = this.props,
          cancelButtonProps = _this$props5.cancelButtonProps,
          children = _this$props5.children,
          contactsFieldAvatars = _this$props5.contactsFieldAvatars,
          contactsFieldDisabledTooltip = _this$props5.contactsFieldDisabledTooltip,
          contactsFieldLabel = _this$props5.contactsFieldLabel,
          inlineNotice = _this$props5.inlineNotice,
          isContactsFieldEnabled = _this$props5.isContactsFieldEnabled,
          isExternalUserSelected = _this$props5.isExternalUserSelected,
          getContacts = _this$props5.getContacts,
          intl = _this$props5.intl,
          isExpanded = _this$props5.isExpanded,
          messageProps = _this$props5.messageProps,
          onPillCreate = _this$props5.onPillCreate,
          recommendedSharingTooltipCalloutName = _this$props5.recommendedSharingTooltipCalloutName,
          sendButtonProps = _this$props5.sendButtonProps,
          showEnterEmailsCallout = _this$props5.showEnterEmailsCallout,
          selectedContacts = _this$props5.selectedContacts,
          submitting = _this$props5.submitting,
          suggestedCollaborators = _this$props5.suggestedCollaborators;
      var ftuxTooltipProps = {
        className: 'usm-ftux-tooltip',
        isShown: showEnterEmailsCallout,
        position: 'middle-right',
        showCloseButton: true,
        text: /*#__PURE__*/React.createElement(FormattedMessage, messages.enterEmailAddressesCalloutText),
        theme: 'callout'
      };
      var recommendedSharingTooltipProps = {
        isShown: !!recommendedSharingTooltipCalloutName,
        position: 'middle-left',
        text: /*#__PURE__*/React.createElement(FormattedMessage, _extends({}, messages.recommendedSharingTooltipCalloutText, {
          values: {
            fullName: recommendedSharingTooltipCalloutName
          }
        })),
        theme: 'callout'
      };
      var tooltipPropsToRender = recommendedSharingTooltipCalloutName ? recommendedSharingTooltipProps : ftuxTooltipProps;
      var contactsField = /*#__PURE__*/React.createElement("div", {
        className: "tooltip-target"
      }, /*#__PURE__*/React.createElement(Tooltip, tooltipPropsToRender, /*#__PURE__*/React.createElement(ContactsField, {
        disabled: !isContactsFieldEnabled,
        error: contactsFieldError,
        fieldRef: this.contactsFieldRef,
        getContacts: getContacts,
        label: contactsFieldLabel,
        onContactAdd: this.handleContactAdd,
        onContactRemove: this.handleContactRemove,
        onInput: this.handleContactInput,
        onPillCreate: onPillCreate,
        selectedContacts: selectedContacts,
        suggestedCollaborators: suggestedCollaborators,
        validateForError: this.validateContactField,
        validator: this.isValidEmail
      })));
      var contactsFieldWrap;

      if (isContactsFieldEnabled) {
        contactsFieldWrap = contactsField;
      } else {
        contactsFieldWrap = /*#__PURE__*/React.createElement(Tooltip, {
          position: "bottom-center",
          text: contactsFieldDisabledTooltip
        }, contactsField);
      }

      return /*#__PURE__*/React.createElement("form", {
        className: classNames({
          'is-expanded': isExpanded
        }),
        onSubmit: this.handleSubmit
      }, inlineNotice.content && isExpanded && /*#__PURE__*/React.createElement(InlineNotice, {
        type: inlineNotice.type
      }, inlineNotice.content), contactsFieldAvatars, contactsFieldWrap, children, isExpanded && /*#__PURE__*/React.createElement(TextArea, _extends({
        label: /*#__PURE__*/React.createElement(FormattedMessage, messages.messageTitle),
        onChange: this.handleMessageChange,
        placeholder: intl.formatMessage(commonMessages.messageSelectorPlaceholder),
        rows: 3,
        value: message
      }, messageProps)), isExpanded && isExternalUserSelected && /*#__PURE__*/React.createElement("div", {
        className: "security-indicator-note"
      }, /*#__PURE__*/React.createElement("span", {
        className: "security-indicator-icon-globe"
      }, /*#__PURE__*/React.createElement(IconGlobe, {
        height: 12,
        width: 12
      })), /*#__PURE__*/React.createElement(FormattedMessage, messages.contentSharedWithExternalCollaborators)), isExpanded && /*#__PURE__*/React.createElement(ModalActions, null, /*#__PURE__*/React.createElement(Button, _extends({
        isDisabled: submitting,
        onClick: this.handleClose,
        type: "button"
      }, cancelButtonProps), /*#__PURE__*/React.createElement(FormattedMessage, commonMessages.cancel)), /*#__PURE__*/React.createElement(PrimaryButton, _extends({
        isDisabled: submitting,
        isLoading: submitting,
        type: "submit"
      }, sendButtonProps), /*#__PURE__*/React.createElement(FormattedMessage, commonMessages.send))));
    }
  }]);

  return EmailForm;
}(React.Component);

_defineProperty(EmailForm, "defaultProps", {
  messageProps: {},
  contactsFieldDisabledTooltip: null
});

export { EmailForm as EmailFormBase };
export default injectIntl(EmailForm);
//# sourceMappingURL=EmailForm.js.map