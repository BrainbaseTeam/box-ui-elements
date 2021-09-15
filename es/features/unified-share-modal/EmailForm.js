function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import isString from 'lodash/isString';
import partition from 'lodash/partition';
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
import ContactRestrictionNotice from './ContactRestrictionNotice';
import ContactsField from './ContactsField';
import hasRestrictedExternalContacts from './utils/hasRestrictedExternalContacts';
import messages from './messages';

var EmailForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EmailForm, _React$Component);

  function EmailForm(props) {
    var _this;

    _classCallCheck(this, EmailForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EmailForm).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "contactsFieldRef", React.createRef());

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

    _defineProperty(_assertThisInitialized(_this), "handleRemoveRestrictedExternalContacts", function () {
      var _this$props3 = _this.props,
          onContactRemove = _this$props3.onContactRemove,
          selectedContacts = _this$props3.selectedContacts,
          updateSelectedContacts = _this$props3.updateSelectedContacts;

      var _partition = partition(selectedContacts, function (_ref) {
        var value = _ref.value;
        return _this.isRestrictedExternalEmail(value);
      }),
          _partition2 = _slicedToArray(_partition, 2),
          removedContacts = _partition2[0],
          remainingContacts = _partition2[1];

      updateSelectedContacts(remainingContacts);

      _this.validateContacts(remainingContacts);

      if (onContactRemove) {
        removedContacts.forEach(function (removedContact) {
          onContactRemove(removedContact);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "validateContacts", function (selectedContacts) {
      var _this$props4 = _this.props,
          contactLimit = _this$props4.contactLimit,
          intl = _this$props4.intl;
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

    _defineProperty(_assertThisInitialized(_this), "validateContactsRestrictions", function () {
      var contactsRestrictionError = '';
      var selectedJustificationReason = _this.state.selectedJustificationReason;
      var _this$props5 = _this.props,
          intl = _this$props5.intl,
          isRestrictionJustificationEnabled = _this$props5.isRestrictionJustificationEnabled,
          selectedContacts = _this$props5.selectedContacts,
          restrictedExternalEmails = _this$props5.restrictedExternalEmails;
      var hasRestrictedContacts = hasRestrictedExternalContacts(selectedContacts, restrictedExternalEmails);
      var isMissingRequiredJustification = isRestrictionJustificationEnabled && !selectedJustificationReason;

      if (isMissingRequiredJustification) {
        contactsRestrictionError = intl.formatMessage(messages.justificationRequiredError);
      } else if (hasRestrictedContacts && !isRestrictionJustificationEnabled) {
        contactsRestrictionError = intl.formatMessage(messages.restrictedContactsError);
      }

      _this.setState({
        contactsRestrictionError: contactsRestrictionError
      });

      return contactsRestrictionError;
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

    _defineProperty(_assertThisInitialized(_this), "handleSelectJustificationReason", function (selectedJustificationReason) {
      _this.setState({
        selectedJustificationReason: selectedJustificationReason
      }, _this.validateContactsRestrictions);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      _this.setState({
        message: '',
        contactsFieldError: '',
        selectedJustificationReason: null
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
      var _this$props6 = _this.props,
          onSubmit = _this$props6.onSubmit,
          selectedContacts = _this$props6.selectedContacts;
      var _this$state = _this.state,
          message = _this$state.message,
          contactsFieldError = _this$state.contactsFieldError,
          selectedJustificationReason = _this$state.selectedJustificationReason;

      if (contactsFieldError !== '') {
        // Block submission if there's a validation error
        return;
      }

      var contactsError = _this.validateContacts(selectedContacts);

      var contactsRestrictionError = _this.validateContactsRestrictions();

      if (contactsError || contactsRestrictionError) {
        return;
      }

      var emails = [];
      var groupIDs = [];
      var restrictedExternalEmails = [];
      selectedContacts.forEach(function (_ref2) {
        var type = _ref2.type,
            value = _ref2.value;

        if (type === 'group') {
          groupIDs.push(value);
        } else {
          if (_this.isRestrictedExternalEmail(value)) {
            restrictedExternalEmails.push(value);
          }

          emails.push(value);
        }
      });
      onSubmit({
        emails: emails,
        groupIDs: groupIDs,
        justificationReason: selectedJustificationReason,
        message: message,
        restrictedExternalEmails: restrictedExternalEmails
      }).catch(function (error) {
        // Remove sent emails from selected pills
        var invitedEmails = error.invitedEmails || [];

        _this.filterSentEmails(invitedEmails);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "filterSentEmails", function (sentEmails) {
      _this.props.updateSelectedContacts(_this.props.selectedContacts.filter(function (_ref3) {
        var value = _ref3.value;
        return !sentEmails.includes(value);
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "validateContactField", function (text) {
      var intl = _this.props.intl;
      var contactsFieldError = '';

      if (text && !emailValidator(text)) {
        contactsFieldError = intl.formatMessage(commonMessages.invalidEmailError);
      }

      _this.setState({
        contactsFieldError: contactsFieldError
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isValidContactPill", function (contactPill) {
      var isValid = true;
      var selectedJustificationReason = _this.state.selectedJustificationReason;
      var isRestrictionJustificationEnabled = _this.props.isRestrictionJustificationEnabled;

      if (isString(contactPill)) {
        // If we receive a string it means we're validating unparsed
        // pill selector input. Check that we have a valid email
        isValid = emailValidator(contactPill);
      } else {
        var hasRequiredJustification = !!selectedJustificationReason && isRestrictionJustificationEnabled; // Invalid emails are filtered out by ContactsField when parsing
        // new pills, so parsed pills can currently only be invalid
        // when user is external and external collab is restricted

        isValid = !_this.isRestrictedExternalEmail(contactPill.value) || hasRequiredJustification;
      }

      return isValid;
    });

    _defineProperty(_assertThisInitialized(_this), "getContactPillClassName", function (contactPill) {
      var selectedJustificationReason = _this.state.selectedJustificationReason;
      var isRestrictionJustificationEnabled = _this.props.isRestrictionJustificationEnabled;
      var pillId = String(contactPill.value);
      var hasRequiredJustification = !!selectedJustificationReason && isRestrictionJustificationEnabled;
      var isWaivedPill = _this.isRestrictedExternalEmail(pillId) && hasRequiredJustification;
      return isWaivedPill ? 'is-waived' : '';
    });

    _defineProperty(_assertThisInitialized(_this), "isRestrictedExternalEmail", function (email) {
      var restrictedExternalEmails = _this.props.restrictedExternalEmails;
      return restrictedExternalEmails.includes(email);
    });

    _this.state = {
      contactsFieldError: '',
      contactsRestrictionError: '',
      message: '',
      selectedJustificationReason: null
    };
    return _this;
  }

  _createClass(EmailForm, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var isRestrictionJustificationEnabled = this.props.isRestrictionJustificationEnabled;
      var prevIsRestrictionJustificationEnabled = prevProps.isRestrictionJustificationEnabled;
      var _this$state2 = this.state,
          contactsFieldError = _this$state2.contactsFieldError,
          contactsRestrictionError = _this$state2.contactsRestrictionError;
      var prevContactsFieldError = prevState.contactsFieldError,
          prevContactsRestrictionError = prevState.contactsRestrictionError; // Only display one type of error at a time and give preference
      // to the one triggered most recently

      if (!prevContactsFieldError && contactsFieldError) {
        this.setState({
          contactsRestrictionError: ''
        });
      }

      if (!prevContactsRestrictionError && contactsRestrictionError) {
        this.setState({
          contactsFieldError: ''
        });
      }

      var didJustificationRequirementChange = isRestrictionJustificationEnabled !== prevIsRestrictionJustificationEnabled; // Clear selected justification when form state is reset

      if (didJustificationRequirementChange && !isRestrictionJustificationEnabled) {
        this.setState({
          selectedJustificationReason: null
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state3 = this.state,
          contactsFieldError = _this$state3.contactsFieldError,
          contactsRestrictionError = _this$state3.contactsRestrictionError,
          message = _this$state3.message,
          selectedJustificationReason = _this$state3.selectedJustificationReason;
      var _this$props7 = this.props,
          cancelButtonProps = _this$props7.cancelButtonProps,
          children = _this$props7.children,
          config = _this$props7.config,
          contactsFieldAvatars = _this$props7.contactsFieldAvatars,
          contactsFieldDisabledTooltip = _this$props7.contactsFieldDisabledTooltip,
          contactsFieldLabel = _this$props7.contactsFieldLabel,
          inlineNotice = _this$props7.inlineNotice,
          isContactsFieldEnabled = _this$props7.isContactsFieldEnabled,
          isExternalUserSelected = _this$props7.isExternalUserSelected,
          getContactAvatarUrl = _this$props7.getContactAvatarUrl,
          getContacts = _this$props7.getContacts,
          intl = _this$props7.intl,
          isExpanded = _this$props7.isExpanded,
          isFetchingJustificationReasons = _this$props7.isFetchingJustificationReasons,
          isRestrictionJustificationEnabled = _this$props7.isRestrictionJustificationEnabled,
          justificationReasons = _this$props7.justificationReasons,
          messageProps = _this$props7.messageProps,
          onPillCreate = _this$props7.onPillCreate,
          recommendedSharingTooltipCalloutName = _this$props7.recommendedSharingTooltipCalloutName,
          restrictedExternalEmails = _this$props7.restrictedExternalEmails,
          selectedContacts = _this$props7.selectedContacts,
          sendButtonProps = _this$props7.sendButtonProps,
          showEnterEmailsCallout = _this$props7.showEnterEmailsCallout,
          submitting = _this$props7.submitting,
          suggestedCollaborators = _this$props7.suggestedCollaborators;
      var ftuxTooltipProps = {
        className: 'usm-ftux-tooltip',
        isShown: showEnterEmailsCallout,
        position: 'middle-right',
        showCloseButton: true,
        text: React.createElement(FormattedMessage, messages.enterEmailAddressesCalloutText),
        theme: 'callout'
      };
      var recommendedSharingTooltipProps = {
        isShown: !!recommendedSharingTooltipCalloutName,
        position: 'middle-left',
        text: React.createElement(FormattedMessage, _extends({}, messages.recommendedSharingTooltipCalloutText, {
          values: {
            fullName: recommendedSharingTooltipCalloutName
          }
        })),
        theme: 'callout'
      };
      var tooltipPropsToRender = recommendedSharingTooltipCalloutName ? recommendedSharingTooltipProps : ftuxTooltipProps;
      var contactsField = React.createElement("div", {
        className: "tooltip-target"
      }, React.createElement(Tooltip, tooltipPropsToRender, React.createElement(ContactsField, {
        disabled: !isContactsFieldEnabled,
        error: contactsFieldError,
        fieldRef: this.contactsFieldRef,
        getContacts: getContacts,
        getContactAvatarUrl: getContactAvatarUrl,
        getPillClassName: this.getContactPillClassName,
        label: contactsFieldLabel,
        onContactAdd: this.handleContactAdd,
        onContactRemove: this.handleContactRemove,
        onInput: this.handleContactInput,
        onPillCreate: onPillCreate,
        selectedContacts: selectedContacts,
        suggestedCollaborators: suggestedCollaborators,
        validateForError: this.validateContactField,
        validator: this.isValidContactPill,
        showContactAvatars: true
      })));
      var contactsFieldWrap;

      if (isContactsFieldEnabled) {
        contactsFieldWrap = contactsField;
      } else {
        contactsFieldWrap = React.createElement(Tooltip, {
          position: "bottom-center",
          text: contactsFieldDisabledTooltip
        }, contactsField);
      }

      var hideMessageSection = config && config.showInviteCollaboratorMessageSection === false;
      var shouldRenderContactRestrictionNotice = isExpanded && hasRestrictedExternalContacts(selectedContacts, restrictedExternalEmails);
      return React.createElement("form", {
        className: classNames({
          'is-expanded': isExpanded
        }),
        onSubmit: this.handleSubmit
      }, inlineNotice.content && isExpanded && React.createElement(InlineNotice, {
        type: inlineNotice.type
      }, inlineNotice.content), shouldRenderContactRestrictionNotice && React.createElement(ContactRestrictionNotice, {
        error: contactsRestrictionError,
        isFetchingJustificationReasons: isFetchingJustificationReasons,
        isRestrictionJustificationEnabled: isRestrictionJustificationEnabled,
        justificationReasons: justificationReasons,
        onRemoveRestrictedExternalContacts: this.handleRemoveRestrictedExternalContacts,
        restrictedExternalEmails: restrictedExternalEmails,
        selectedContacts: selectedContacts,
        selectedJustificationReason: selectedJustificationReason,
        onSelectJustificationReason: this.handleSelectJustificationReason
      }), contactsFieldAvatars, contactsFieldWrap, children, isExpanded && !hideMessageSection && React.createElement(TextArea, _extends({
        "data-testid": "be-emailform-message",
        label: React.createElement(FormattedMessage, messages.messageTitle),
        onChange: this.handleMessageChange,
        placeholder: intl.formatMessage(commonMessages.messageSelectorPlaceholder),
        rows: 3,
        value: message
      }, messageProps)), isExpanded && isExternalUserSelected && React.createElement("div", {
        className: "security-indicator-note"
      }, React.createElement("span", {
        className: "security-indicator-icon-globe"
      }, React.createElement(IconGlobe, {
        height: 12,
        width: 12
      })), React.createElement(FormattedMessage, messages.contentSharedWithExternalCollaborators)), isExpanded && React.createElement(ModalActions, null, React.createElement(Button, _extends({
        isDisabled: submitting,
        onClick: this.handleClose,
        type: "button"
      }, cancelButtonProps), React.createElement(FormattedMessage, commonMessages.cancel)), React.createElement(PrimaryButton, _extends({
        isDisabled: submitting,
        isLoading: submitting,
        type: "submit"
      }, sendButtonProps), React.createElement(FormattedMessage, commonMessages.send))));
    }
  }]);

  return EmailForm;
}(React.Component);

_defineProperty(EmailForm, "defaultProps", {
  messageProps: {},
  contactsFieldDisabledTooltip: null,
  isRestrictionJustificationEnabled: false,
  justificationReasons: [],
  restrictedExternalEmails: []
});

export { EmailForm as EmailFormBase };
export default injectIntl(EmailForm);
//# sourceMappingURL=EmailForm.js.map