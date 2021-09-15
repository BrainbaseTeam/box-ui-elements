function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage, injectIntl } from 'react-intl';
import PillSelectorDropdown from '../../components/pill-selector-dropdown';
import ContactDatalistItem from '../../components/contact-datalist-item';
import TextArea from '../../components/text-area';
import PrimaryButton from '../../components/primary-button';
import { ModalActions } from '../../components/modal';
import Button from '../../components/button';
import parseEmails from '../../utils/parseEmails';
import commonMessages from '../../common/messages';
import messages from './messages';
import './EmailSharedLink.scss';

var EmailSharedLink =
/*#__PURE__*/
function (_Component) {
  _inherits(EmailSharedLink, _Component);

  function EmailSharedLink(props) {
    var _this;

    _classCallCheck(this, EmailSharedLink);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EmailSharedLink).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getSelectorOptions", function () {
      var contacts = _this.props.contacts;
      var _this$state = _this.state,
          pillSelectorInputValue = _this$state.pillSelectorInputValue,
          selectedOptions = _this$state.selectedOptions;

      if (pillSelectorInputValue !== '') {
        return contacts.filter( // filter contacts who have already been selected
        function (_ref) {
          var email = _ref.email,
              id = _ref.id;
          return !selectedOptions.find(function (_ref2) {
            var value = _ref2.value;
            return value === email || value === id;
          });
        }).map(function (_ref3) {
          var email = _ref3.email,
              id = _ref3.id,
              name = _ref3.name,
              type = _ref3.type;
          return {
            // map to standardized DatalistItem format
            // TODO: refactor this so inline conversions aren't required at every usage
            email: email,
            id: id,
            text: name,
            type: type,
            value: email || id // if email doesn't exist, contact is a group, use id

          };
        });
      } // return empty selector options if input value is empty


      return [];
    });

    _defineProperty(_assertThisInitialized(_this), "handlePillSelectorInput", function (value) {
      var getContacts = _this.props.getContacts;
      var trimmedValue = value.trim();
      getContacts(trimmedValue); // As user is typing, reset error

      _this.setState({
        pillSelectorError: '',
        pillSelectorInputValue: trimmedValue
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePillSelect", function (pills) {
      _this.setState({
        selectedOptions: [].concat(_toConsumableArray(_this.state.selectedOptions), _toConsumableArray(pills))
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePillRemove", function (option, index) {
      var selectedOptions = _this.state.selectedOptions.slice();

      selectedOptions.splice(index, 1);

      _this.setState({
        selectedOptions: selectedOptions
      });
    });

    _defineProperty(_assertThisInitialized(_this), "validateForError", function (text) {
      var formatMessage = _this.props.intl.formatMessage;
      var pillSelectorError = '';

      if (text && !_this.validator(text)) {
        pillSelectorError = formatMessage(commonMessages.invalidEmailError);
      }

      _this.setState({
        pillSelectorError: pillSelectorError
      });
    });

    _defineProperty(_assertThisInitialized(_this), "validator", function (text) {
      // email input validation
      var pattern = /^[^\s<>@,]+@[^\s<>@,/\\]+\.[^\s<>@,]+$/i;
      return pattern.test(text);
    });

    _defineProperty(_assertThisInitialized(_this), "sendEmail", function (event) {
      event.preventDefault();
      var _this$props = _this.props,
          formatMessage = _this$props.intl.formatMessage,
          sendEmail = _this$props.sendEmail;
      var _this$state2 = _this.state,
          selectedOptions = _this$state2.selectedOptions,
          emailMessage = _this$state2.emailMessage,
          pillSelectorError = _this$state2.pillSelectorError;

      if (pillSelectorError !== '') {
        return;
      }

      if (selectedOptions.length === 0) {
        // Block submission if no pills are selected
        _this.setState({
          pillSelectorError: formatMessage(messages.enterAtLeastOneEmailError)
        });

        return;
      }

      sendEmail({
        emails: selectedOptions.map(function (_ref4) {
          var value = _ref4.value;
          return value;
        }),
        emailMessage: emailMessage
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleMessageChange", function (event) {
      _this.setState({
        emailMessage: event.target.value
      });
    });

    var defaultEmailMessage = props.defaultEmailMessage;
    _this.state = {
      pillSelectorError: '',
      pillSelectorInputValue: '',
      emailMessage: defaultEmailMessage || '',
      selectedOptions: []
    };
    return _this;
  }

  _createClass(EmailSharedLink, [{
    key: "render",
    value: function render() {
      var _this$state3 = this.state,
          pillSelectorError = _this$state3.pillSelectorError,
          selectedOptions = _this$state3.selectedOptions,
          emailMessage = _this$state3.emailMessage;
      var _this$props2 = this.props,
          emailMessageProps = _this$props2.emailMessageProps,
          formatMessage = _this$props2.intl.formatMessage,
          isExpanded = _this$props2.isExpanded,
          onExpand = _this$props2.onExpand,
          onRequestClose = _this$props2.onRequestClose,
          submitting = _this$props2.submitting;
      var selectorOptions = this.getSelectorOptions();
      return React.createElement("form", {
        onSubmit: this.sendEmail,
        className: classNames('email-shared-link', {
          'is-expanded': isExpanded
        })
      }, React.createElement(PillSelectorDropdown, {
        allowCustomPills: true,
        error: pillSelectorError,
        label: React.createElement(FormattedMessage, messages.emailSharedLink),
        inputProps: _objectSpread({
          onFocus: onExpand
        }, emailMessageProps),
        onInput: this.handlePillSelectorInput,
        onRemove: this.handlePillRemove,
        onSelect: this.handlePillSelect,
        parseItems: parseEmails,
        placeholder: formatMessage(commonMessages.pillSelectorPlaceholder),
        selectedOptions: selectedOptions,
        selectorOptions: selectorOptions,
        validateForError: this.validateForError,
        validator: this.validator
      }, selectorOptions.map(function (_ref5) {
        var email = _ref5.email,
            text = _ref5.text,
            value = _ref5.value;
        return React.createElement(ContactDatalistItem, {
          key: value,
          name: text,
          subtitle: email
        });
      })), React.createElement(TextArea, {
        isRequired: true,
        label: React.createElement(FormattedMessage, messages.messageTitle),
        onChange: this.handleMessageChange,
        rows: 3,
        value: emailMessage
      }), isExpanded && React.createElement(ModalActions, null, React.createElement(Button, {
        isDisabled: submitting,
        onClick: onRequestClose,
        type: "button"
      }, React.createElement(FormattedMessage, commonMessages.cancel)), React.createElement(PrimaryButton, {
        isDisabled: submitting,
        isLoading: submitting,
        type: "submit"
      }, React.createElement(FormattedMessage, commonMessages.send))));
    }
  }]);

  return EmailSharedLink;
}(Component);

_defineProperty(EmailSharedLink, "propTypes", {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    email: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isrequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  })).isRequired,
  defaultEmailMessage: PropTypes.string,
  emailMessageProps: PropTypes.object,
  intl: PropTypes.any,
  getContacts: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool,
  onExpand: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  sendEmail: PropTypes.func.isRequired,
  submitting: PropTypes.bool
});

_defineProperty(EmailSharedLink, "defaultProps", {
  emailMessageProps: {}
});

export { EmailSharedLink as EmailSharedLinkBase };
export default injectIntl(EmailSharedLink);
//# sourceMappingURL=EmailSharedLink.js.map