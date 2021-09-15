function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
import { FormattedMessage, injectIntl } from 'react-intl';
import debounce from 'lodash/debounce';
import noop from 'lodash/noop';
import classNames from 'classnames';
import PillSelectorDropdown from '../../components/pill-selector-dropdown';
import ContactDatalistItem from '../../components/contact-datalist-item';
import computeSuggestedCollabs from './utils/computeSuggestedCollabs';
import parseEmails from '../../utils/parseEmails';
import commonMessages from '../../common/messages';
import messages from './messages';

var isSubstring = function isSubstring(value, searchString) {
  return value && value.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
};

var ContactsField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContactsField, _React$Component);

  function ContactsField(props) {
    var _this;

    _classCallCheck(this, ContactsField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContactsField).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "addSuggestedContacts", function (contacts) {
      var _this$props$suggested = _this.props.suggestedCollaborators,
          suggestedCollaborators = _this$props$suggested === void 0 ? {} : _this$props$suggested;
      var pillSelectorInputValue = _this.state.pillSelectorInputValue;

      var _computeSuggestedColl = computeSuggestedCollabs(contacts, suggestedCollaborators, pillSelectorInputValue),
          _computeSuggestedColl2 = _slicedToArray(_computeSuggestedColl, 2),
          suggestedOptions = _computeSuggestedColl2[0],
          otherOptions = _computeSuggestedColl2[1];

      _this.setState({
        numSuggestedShowing: suggestedOptions.length
      });

      return [].concat(_toConsumableArray(suggestedOptions), _toConsumableArray(otherOptions));
    });

    _defineProperty(_assertThisInitialized(_this), "filterContacts", function (contacts) {
      var pillSelectorInputValue = _this.state.pillSelectorInputValue;
      var _this$props = _this.props,
          selectedContacts = _this$props.selectedContacts,
          suggestedCollaborators = _this$props.suggestedCollaborators;

      if (pillSelectorInputValue && contacts) {
        var fullContacts = contacts.filter( // filter contacts whose name or email don't match input value
        function (_ref) {
          var name = _ref.name,
              email = _ref.email;
          return isSubstring(name, pillSelectorInputValue) || isSubstring(email, pillSelectorInputValue);
        }).filter( // filter contacts who have already been selected
        function (_ref2) {
          var email = _ref2.email,
              id = _ref2.id;
          return !selectedContacts.find(function (_ref3) {
            var value = _ref3.value;
            return value === email || value === id;
          });
        });

        if (suggestedCollaborators) {
          fullContacts = _this.addSuggestedContacts(fullContacts);
        }

        return fullContacts.map(function (_ref4) {
          var email = _ref4.email,
              id = _ref4.id,
              isExternalUser = _ref4.isExternalUser,
              name = _ref4.name,
              type = _ref4.type;
          return {
            // map to standardized DatalistItem format
            // TODO: refactor this so inline conversions aren't required at every usage
            email: email,
            id: id,
            isExternalUser: isExternalUser,
            text: name,
            type: type,
            value: email || id // if email doesn't exist, contact is a group, use id

          };
        });
      } // return empty selector options if input value is empty


      return [];
    });

    _defineProperty(_assertThisInitialized(_this), "getContactsPromise", function (query) {
      return _this.props.getContacts(query).then(function (contacts) {
        var filteredContacts = _this.filterContacts(contacts);

        _this.setState({
          contacts: filteredContacts
        });
      }).catch(function (error) {
        if (error.isCanceled) {
          // silently fail - this happens often when requests get cancelled
          // due to overlapping requests
          return;
        }

        throw error;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "debouncedGetContacts", debounce(_this.getContactsPromise, 200));

    _defineProperty(_assertThisInitialized(_this), "handleParseItems", function (inputValue) {
      var validator = _this.props.validator; // ContactField allows invalid pills to be displayed in
      // in some cases (e.g., when user is external and external
      // collab is restricted). We don't allow, however, invalid
      // emails from the pill selector input to be turned into pills.

      var emails = parseEmails(inputValue);
      var validEmails = emails.filter(function (email) {
        return validator(email);
      });
      return validEmails;
    });

    _defineProperty(_assertThisInitialized(_this), "handlePillSelectorInput", function (value) {
      var onInput = _this.props.onInput;
      var trimmedValue = value.trim();

      _this.setState({
        pillSelectorInputValue: trimmedValue
      });

      if (onInput) {
        onInput(value);
      }

      if (!trimmedValue) {
        _this.setState({
          contacts: []
        });

        return;
      }

      _this.debouncedGetContacts(trimmedValue);
    });

    _this.state = {
      contacts: [],
      numSuggestedShowing: 0,
      pillSelectorInputValue: ''
    };
    return _this;
  }

  _createClass(ContactsField, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          disabled = _this$props2.disabled,
          error = _this$props2.error,
          fieldRef = _this$props2.fieldRef,
          getContactAvatarUrl = _this$props2.getContactAvatarUrl,
          getPillClassName = _this$props2.getPillClassName,
          intl = _this$props2.intl,
          label = _this$props2.label,
          onContactAdd = _this$props2.onContactAdd,
          onContactRemove = _this$props2.onContactRemove,
          onPillCreate = _this$props2.onPillCreate,
          selectedContacts = _this$props2.selectedContacts,
          showContactAvatars = _this$props2.showContactAvatars,
          validateForError = _this$props2.validateForError,
          validator = _this$props2.validator;
      var _this$state = this.state,
          contacts = _this$state.contacts,
          numSuggestedShowing = _this$state.numSuggestedShowing;
      var groupLabel = React.createElement(FormattedMessage, messages.groupLabel);
      var shouldShowSuggested = numSuggestedShowing > 0;
      var pillSelectorOverlayClasses = classNames({
        scrollable: contacts.length > 5
      });
      return React.createElement(PillSelectorDropdown, {
        allowCustomPills: true,
        allowInvalidPills: true,
        className: pillSelectorOverlayClasses,
        dividerIndex: shouldShowSuggested ? numSuggestedShowing : undefined,
        disabled: disabled,
        error: error,
        getPillClassName: getPillClassName,
        getPillImageUrl: getContactAvatarUrl,
        inputProps: {
          autoFocus: true,
          onChange: noop
        },
        label: label,
        onInput: this.handlePillSelectorInput,
        onRemove: onContactRemove,
        onSelect: onContactAdd,
        onPillCreate: onPillCreate,
        overlayTitle: shouldShowSuggested ? intl.formatMessage(messages.suggestedCollabsTitle) : undefined,
        parseItems: this.handleParseItems,
        placeholder: intl.formatMessage(commonMessages.pillSelectorPlaceholder),
        ref: fieldRef,
        selectedOptions: selectedContacts,
        showRoundedPills: true,
        selectorOptions: contacts,
        validateForError: validateForError,
        validator: validator
      }, contacts.map(function (_ref5) {
        var email = _ref5.email,
            isExternalUser = _ref5.isExternalUser,
            _ref5$text = _ref5.text,
            text = _ref5$text === void 0 ? null : _ref5$text,
            id = _ref5.id;
        return React.createElement(ContactDatalistItem, {
          getContactAvatarUrl: getContactAvatarUrl,
          key: id,
          id: id,
          isExternal: isExternalUser,
          name: text,
          subtitle: email || groupLabel,
          title: text,
          showAvatar: showContactAvatars
        });
      }));
    }
  }]);

  return ContactsField;
}(React.Component);

_defineProperty(ContactsField, "defaultProps", {
  showContactAvatars: false
});

export { ContactsField as ContactsFieldBase };
export default injectIntl(ContactsField);
//# sourceMappingURL=ContactsField.js.map