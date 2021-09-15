function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import omit from 'lodash/omit';
import throttle from 'lodash/throttle';
import { FormattedMessage, injectIntl } from 'react-intl';
import { UpgradeBadge } from '../../components/badge';
import Button from '../../components/button';
import InlineNotice from '../../components/inline-notice';
import PrimaryButton from '../../components/primary-button';
import Select from '../../components/select';
import TextArea from '../../components/text-area';
import { Link } from '../../components/link';
import { Modal, ModalActions } from '../../components/modal';
import ContactDatalistItem from '../../components/contact-datalist-item';
import PillSelectorDropdown from '../../components/pill-selector-dropdown';
import parseEmails from '../../utils/parseEmails';
import { RESIN_TAG_TARGET } from '../../common/variables';
import PermissionFlyout from './PermissionFlyout';
import ReferAFriendAd from './ReferAFriendAd';
import messages from './messages';
import commonMessages from '../../common/messages';
import './InviteCollaboratorsModal.scss';
var COLLAB_ROLE_FOR_FILE = 'Editor';
var INPUT_DELAY = 250;
/**
 * Returns true if the given value is a substring of the searchString
 * @param {String} value
 * @param {String} searchString
 * @return {boolean}
 */

var isSubstring = function isSubstring(value, searchString) {
  return value && value.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
};

var InviteCollaboratorsModal =
/*#__PURE__*/
function (_Component) {
  _inherits(InviteCollaboratorsModal, _Component);

  function InviteCollaboratorsModal(props) {
    var _this;

    _classCallCheck(this, InviteCollaboratorsModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InviteCollaboratorsModal).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getSelectorOptions", function () {
      var contacts = _this.props.contacts;
      var _this$state = _this.state,
          pillSelectorInputValue = _this$state.pillSelectorInputValue,
          selectedOptions = _this$state.selectedOptions;

      if (pillSelectorInputValue !== '') {
        return contacts.filter( // filter contacts whose name or email don't match input value
        function (_ref) {
          var name = _ref.name,
              email = _ref.email;
          return isSubstring(name, pillSelectorInputValue) || isSubstring(email, pillSelectorInputValue);
        }).filter( // filter contacts who have already been selected
        function (_ref2) {
          var email = _ref2.email,
              id = _ref2.id;
          return !selectedOptions.find(function (_ref3) {
            var value = _ref3.value;
            return value === email || value === id;
          });
        }).map(function (_ref4) {
          var email = _ref4.email,
              id = _ref4.id,
              name = _ref4.name,
              type = _ref4.type;
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

    _defineProperty(_assertThisInitialized(_this), "closeModal", function () {
      _this.setState({
        pillSelectorError: '',
        pillSelectorInputValue: '',
        selectedOptions: []
      });

      _this.props.onRequestClose();
    });

    _defineProperty(_assertThisInitialized(_this), "sendInvites", function () {
      var _this$props = _this.props,
          intl = _this$props.intl,
          sendInvites = _this$props.sendInvites;
      var _this$state2 = _this.state,
          message = _this$state2.message,
          permission = _this$state2.permission,
          pillSelectorError = _this$state2.pillSelectorError,
          selectedOptions = _this$state2.selectedOptions;

      if (pillSelectorError) {
        // Block submission if there's a validation error
        return;
      }

      if (selectedOptions.length === 0) {
        // Block submission if no pills are selected
        _this.setState({
          pillSelectorError: intl.formatMessage(commonMessages.requiredFieldError)
        });

        return;
      }

      var emails = [];
      var groupIDs = [];
      selectedOptions.forEach(function (_ref5) {
        var type = _ref5.type,
            value = _ref5.value;

        if (type === 'group') {
          groupIDs.push(value);
        } else {
          emails.push(value);
        }
      });
      var params = {
        emails: emails.join(','),
        groupIDs: groupIDs.join(','),
        emailMessage: message,
        permission: permission || COLLAB_ROLE_FOR_FILE,
        numsOfInvitees: emails.length,
        numOfInviteeGroups: groupIDs.length
      };
      sendInvites(params).catch(function (error) {
        // Remove invited emails from selected pills
        var invitedEmails = error.invitedEmails || [];

        _this.filterInvitedEmails(invitedEmails);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "filterInvitedEmails", function (invitedEmails) {
      _this.setState({
        selectedOptions: _this.state.selectedOptions.filter(function (_ref6) {
          var value = _ref6.value;
          return !invitedEmails.includes(value);
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePillSelectorInput", throttle(function (value) {
      var onUserInput = _this.props.onUserInput;

      if (onUserInput) {
        onUserInput(value);
      } // As user is typing, reset error


      _this.setState({
        pillSelectorError: '',
        pillSelectorInputValue: value
      });
    }, INPUT_DELAY));

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
      var intl = _this.props.intl;
      var pillSelectorError = '';

      if (text && !_this.validator(text)) {
        pillSelectorError = intl.formatMessage(commonMessages.invalidEmailError);
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

    _defineProperty(_assertThisInitialized(_this), "handlePermissionChange", function (_ref7) {
      var target = _ref7.target;
      var value = target.value;

      _this.setState({
        permission: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleMessageChange", function (_ref8) {
      var target = _ref8.target;
      var value = target.value;

      _this.setState({
        message: value
      });
    });

    var defaultPersonalMessage = props.defaultPersonalMessage,
        inviteePermissions = props.inviteePermissions;
    _this.state = {
      message: defaultPersonalMessage || '',
      permission: inviteePermissions ? inviteePermissions[0].value : COLLAB_ROLE_FOR_FILE,
      pillSelectorError: '',
      pillSelectorInputValue: '',
      selectedOptions: []
    };
    return _this;
  }

  _createClass(InviteCollaboratorsModal, [{
    key: "renderFileCollabComponents",
    value: function renderFileCollabComponents() {
      return React.createElement("div", {
        className: "invite-file-editors"
      }, React.createElement(FormattedMessage, messages.inviteFileEditorsLabel));
    }
  }, {
    key: "renderPermissionsSection",
    value: function renderPermissionsSection() {
      var inviteePermissions = this.props.inviteePermissions;
      return React.createElement("div", {
        className: "invite-permissions-container"
      }, React.createElement(Select, {
        className: "select-container-medium",
        "data-resin-target": "selectpermission",
        label: React.createElement(FormattedMessage, messages.inviteePermissionsFieldLabel),
        name: "invite-permission",
        onChange: this.handlePermissionChange
      }, inviteePermissions.map(function (_ref9) {
        var value = _ref9.value,
            _ref9$disabled = _ref9.disabled,
            disabled = _ref9$disabled === void 0 ? false : _ref9$disabled,
            text = _ref9.text;
        return React.createElement("option", {
          key: value,
          "data-resin-option": value,
          disabled: disabled,
          value: value
        }, text);
      })), React.createElement(PermissionFlyout, null));
    }
  }, {
    key: "renderFolderCollabComponents",
    value: function renderFolderCollabComponents() {
      var _this$props2 = this.props,
          defaultPersonalMessage = _this$props2.defaultPersonalMessage,
          inviteePermissions = _this$props2.inviteePermissions,
          showUpgradeOptions = _this$props2.showUpgradeOptions;
      return React.createElement("div", null, inviteePermissions && this.renderPermissionsSection(), showUpgradeOptions && React.createElement(Link, {
        className: "upgrade-link",
        href: "/upgrade"
      }, React.createElement(UpgradeBadge, null), React.createElement(FormattedMessage, messages.upgradeGetMoreAccessControls)), defaultPersonalMessage && React.createElement(TextArea, {
        cols: "30",
        "data-resin-feature": "personalmessage",
        "data-resin-target": "message",
        defaultValue: defaultPersonalMessage,
        label: React.createElement(FormattedMessage, messages.personalMessageLabel),
        name: "collab-message",
        onChange: this.handleMessageChange,
        rows: "4"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          collaborationRestrictionWarning = _this$props3.collaborationRestrictionWarning,
          intl = _this$props3.intl,
          inviteButtonProps = _this$props3.inviteButtonProps,
          isEligibleForReferAFriendProgram = _this$props3.isEligibleForReferAFriendProgram,
          itemName = _this$props3.itemName,
          itemType = _this$props3.itemType,
          submissionError = _this$props3.submissionError,
          submitting = _this$props3.submitting,
          rest = _objectWithoutProperties(_this$props3, ["collaborationRestrictionWarning", "intl", "inviteButtonProps", "isEligibleForReferAFriendProgram", "itemName", "itemType", "submissionError", "submitting"]);

      var _this$state3 = this.state,
          pillSelectorError = _this$state3.pillSelectorError,
          selectedOptions = _this$state3.selectedOptions;
      var modalProps = omit(rest, ['contacts', 'defaultPersonalMessage', 'inviteePermissions', 'itemTypedID', 'onRequestClose', 'onUserInput', 'sendInvites', 'showUpgradeOptions']);
      var selectorOptions = this.getSelectorOptions();
      var title = React.createElement(FormattedMessage, _extends({}, messages.inviteCollaboratorsModalTitle, {
        values: {
          itemName: itemName
        }
      }));
      var groupLabel = React.createElement(FormattedMessage, messages.groupLabel);
      return React.createElement(Modal, _extends({
        className: "invite-collaborators-modal",
        closeButtonProps: _defineProperty({}, RESIN_TAG_TARGET, 'close'),
        "data-resin-component": "modal",
        "data-resin-feature": "invitecollaborators",
        onRequestClose: this.closeModal,
        title: title
      }, modalProps), submissionError && React.createElement(InlineNotice, {
        type: "error"
      }, submissionError), collaborationRestrictionWarning && React.createElement(InlineNotice, {
        type: "warning"
      }, collaborationRestrictionWarning), React.createElement(PillSelectorDropdown, {
        allowCustomPills: true,
        error: pillSelectorError,
        label: React.createElement(FormattedMessage, messages.inviteFieldLabel),
        onInput: this.handlePillSelectorInput,
        onRemove: this.handlePillRemove,
        onSelect: this.handlePillSelect,
        parseItems: parseEmails,
        placeholder: intl.formatMessage(commonMessages.pillSelectorPlaceholder),
        selectedOptions: selectedOptions,
        selectorOptions: selectorOptions,
        validateForError: this.validateForError,
        validator: this.validator
      }, selectorOptions.map(function (_ref11) {
        var email = _ref11.email,
            text = _ref11.text,
            value = _ref11.value;
        return React.createElement(ContactDatalistItem, {
          key: value,
          name: text,
          subtitle: email || groupLabel
        });
      })), itemType === 'file' ? this.renderFileCollabComponents() : this.renderFolderCollabComponents(), isEligibleForReferAFriendProgram && React.createElement(ReferAFriendAd, null), React.createElement(ModalActions, null, React.createElement(Button, {
        "data-resin-target": "cancel",
        isDisabled: submitting,
        onClick: this.closeModal,
        type: "button"
      }, React.createElement(FormattedMessage, messages.inviteCollaboratorsModalCancelButton)), React.createElement(PrimaryButton, _extends({}, inviteButtonProps, {
        isDisabled: submitting,
        isLoading: submitting,
        onClick: this.sendInvites
      }), React.createElement(FormattedMessage, messages.inviteCollaboratorsModalSendInvitesButton))));
    }
  }]);

  return InviteCollaboratorsModal;
}(Component);

_defineProperty(InviteCollaboratorsModal, "propTypes", {
  /** Message warning about restrictions regarding inviting collaborators to the item */
  collaborationRestrictionWarning: PropTypes.node,

  /** An array of contacts for the pill selector dropdown */
  contacts: PropTypes.arrayOf(PropTypes.shape({
    email: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isrequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  })).isRequired,

  /**
   * Default personal message for inviting collaborators to the item.
   * Do not include if no personal message textarea should show up.
   * Only applicable to non-file item types.
   * */
  defaultPersonalMessage: PropTypes.node,
  intl: PropTypes.any,

  /** Props for the invite button */
  inviteButtonProps: PropTypes.object,

  /** An array of invitee permissions */
  inviteePermissions: PropTypes.arrayOf(PropTypes.shape({
    disabled: PropTypes.bool,
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })),

  /** If true, will render a link to the refer-a-friend reward center */
  isEligibleForReferAFriendProgram: PropTypes.bool,

  /** The name of the item to invite collaborators for */
  itemName: PropTypes.string.isRequired,

  /** The type of the item to invite collaborators for (e.g. "file", "folder") */
  itemType: PropTypes.string.isRequired,

  /** The typed id of the item to invite collaborators for */
  itemTypedID: PropTypes.string.isRequired,

  /** Handler function for closing the modal */
  onRequestClose: PropTypes.func.isRequired,

  /** Handler function whenever the user types, e.g. to fetch contacts. */
  onUserInput: PropTypes.func,

  /**
   * Function to send collab invitations based on the given parameters object.
   * This function should return a Promise.
   */
  sendInvites: PropTypes.func.isRequired,

  /**
   * Flag to show link to upgrade and get more access controls.
   * Only applicable to non-file item types.
   */
  showUpgradeOptions: PropTypes.bool,

  /** Message indicating an error occurred while sending the invites. */
  submissionError: PropTypes.node,

  /**
   * Flag indicating whether the send invites request is submitting.
   */
  submitting: PropTypes.bool
});

_defineProperty(InviteCollaboratorsModal, "defaultProps", {
  inviteButtonProps: {}
});

export { InviteCollaboratorsModal as InviteCollaboratorsModalBase };
export default injectIntl(InviteCollaboratorsModal);
//# sourceMappingURL=InviteCollaboratorsModal.js.map