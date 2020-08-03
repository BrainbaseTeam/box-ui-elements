'no babel-plugin-flow-react-proptypes'; // turn off this plugin because it breaks the IntlShape flow type

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
import { FormattedMessage, injectIntl } from 'react-intl';
import LoadingIndicatorWrapper from '../../components/loading-indicator/LoadingIndicatorWrapper';
import { Modal } from '../../components/modal';
import { Link } from '../../components/link';
import Button from '../../components/button';
import { UpgradeBadge } from '../../components/badge';
import { ITEM_TYPE_WEBLINK } from '../../common/constants';
import Tooltip from '../../components/tooltip';
import { CollaboratorAvatars, CollaboratorList } from '../collaborator-avatars';
import UnifiedShareModalTitle from './UnifiedShareModalTitle';
import InviteePermissionsMenu from './InviteePermissionsMenu';
import messages from './messages';
import RemoveLinkConfirmModal from './RemoveLinkConfirmModal';
import SharedLinkSection from './SharedLinkSection';
import EmailForm from './EmailForm';
import getDefaultPermissionLevel from './utils/defaultPermissionLevel';
import mergeContacts from './utils/mergeContacts';
import './UnifiedShareModal.scss';
var SHARED_LINKS_COMMUNITY_URL = 'https://community.box.com/t5/Using-Shared-Links/Creating-Shared-Links/ta-p/19523';
var INVITE_COLLABS_CONTACTS_TYPE = 'inviteCollabsContacts';
var EMAIL_SHARED_LINK_CONTACTS_TYPE = 'emailSharedLinkContacts';

var UnifiedShareModal = /*#__PURE__*/function (_React$Component) {
  _inherits(UnifiedShareModal, _React$Component);

  var _super = _createSuper(UnifiedShareModal);

  function UnifiedShareModal(props) {
    var _this;

    _classCallCheck(this, UnifiedShareModal);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "getInitialData", function () {
      var getInitialData = _this.props.getInitialData;
      getInitialData().finally(function () {
        _this.setState({
          isFetching: false,
          shouldRenderFTUXTooltip: true
        });
      });

      _this.setState({
        getInitialDataCalled: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleInviteCollabPillCreate", function (pills) {
      return _this.onPillCreate(INVITE_COLLABS_CONTACTS_TYPE, pills);
    });

    _defineProperty(_assertThisInitialized(_this), "handleEmailSharedLinkPillCreate", function (pills) {
      return _this.onPillCreate(EMAIL_SHARED_LINK_CONTACTS_TYPE, pills);
    });

    _defineProperty(_assertThisInitialized(_this), "onToggleSharedLink", function (event) {
      var target = event.target;
      var _this$props = _this.props,
          onAddLink = _this$props.onAddLink,
          trackingProps = _this$props.trackingProps;
      var shouldRenderFTUXTooltip = _this.state.shouldRenderFTUXTooltip;
      var sharedLinkTracking = trackingProps.sharedLinkTracking;
      var onToggleLink = sharedLinkTracking.onToggleLink;

      if (shouldRenderFTUXTooltip) {
        _this.setState({
          shouldRenderFTUXTooltip: false
        });
      }

      if (target.type === 'checkbox') {
        if (target.checked === false) {
          _this.openConfirmModal();
        } else {
          onAddLink();
        }

        if (onToggleLink) {
          onToggleLink(target.checked);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "openConfirmModal", function () {
      _this.setState({
        isConfirmModalOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeConfirmModal", function () {
      _this.setState({
        isConfirmModalOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "showCollaboratorList", function () {
      _this.setState({
        showCollaboratorList: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeCollaboratorList", function () {
      _this.setState({
        showCollaboratorList: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSendInvites", function (data) {
      var _this$props2 = _this.props,
          inviteePermissions = _this$props2.inviteePermissions,
          sendInvites = _this$props2.sendInvites,
          trackingProps = _this$props2.trackingProps;
      var inviteCollabsEmailTracking = trackingProps.inviteCollabsEmailTracking;
      var onSendClick = inviteCollabsEmailTracking.onSendClick;
      var inviteePermissionLevel = _this.state.inviteePermissionLevel;
      var defaultPermissionLevel = getDefaultPermissionLevel(inviteePermissions);
      var selectedPermissionLevel = inviteePermissionLevel || defaultPermissionLevel;
      var emails = data.emails,
          groupIDs = data.groupIDs,
          message = data.message;
      var params = {
        emails: emails.join(','),
        groupIDs: groupIDs.join(','),
        emailMessage: message,
        permission: selectedPermissionLevel,
        numsOfInvitees: emails.length,
        numOfInviteeGroups: groupIDs.length
      };

      if (onSendClick) {
        onSendClick(params);
      }

      return sendInvites(params);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSendSharedLink", function (data) {
      var _this$props3 = _this.props,
          sendSharedLink = _this$props3.sendSharedLink,
          trackingProps = _this$props3.trackingProps;
      var sharedLinkEmailTracking = trackingProps.sharedLinkEmailTracking;
      var onSendClick = sharedLinkEmailTracking.onSendClick;
      var emails = data.emails,
          groupIDs = data.groupIDs;

      if (onSendClick) {
        var _params = _objectSpread(_objectSpread({}, data), {}, {
          numsOfRecipients: emails.length,
          numOfRecipientGroups: groupIDs.length
        });

        onSendClick(_params);
      }

      return sendSharedLink(data);
    });

    _defineProperty(_assertThisInitialized(_this), "handleInviteePermissionChange", function (permissionLevel) {
      var trackingProps = _this.props.trackingProps;
      var inviteCollabTracking = trackingProps.inviteCollabTracking;
      var onInviteePermissionChange = inviteCollabTracking.onInviteePermissionChange;

      _this.setState({
        inviteePermissionLevel: permissionLevel
      });

      if (onInviteePermissionChange) {
        onInviteePermissionChange(permissionLevel);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFtuxCloseClick", function () {
      _this.setState({
        shouldRenderFTUXTooltip: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onPillCreate", function (type, pills) {
      // If this is a dropdown select event, we ignore it
      // $FlowFixMe
      var selectOptionPills = pills.filter(function (pill) {
        return !pill.id;
      });

      if (selectOptionPills.length === 0) {
        return;
      }

      var getContactsByEmail = _this.props.getContactsByEmail;

      if (getContactsByEmail) {
        var emails = pills.map(function (pill) {
          return pill.value;
        }); // $FlowFixMe

        getContactsByEmail({
          emails: emails
        }).then(function (contacts) {
          if (type === INVITE_COLLABS_CONTACTS_TYPE) {
            _this.setState(function (prevState) {
              return {
                inviteCollabsContacts: mergeContacts(prevState.inviteCollabsContacts, contacts)
              };
            });
          } else if (type === EMAIL_SHARED_LINK_CONTACTS_TYPE) {
            _this.setState(function (prevState) {
              return {
                emailSharedLinkContacts: mergeContacts(prevState.emailSharedLinkContacts, contacts)
              };
            });
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "openInviteCollaborators", function (value) {
      if (_this.state.isInviteSectionExpanded) {
        return;
      } // checking the value because IE seems to trigger onInput immediately
      // on focus of the contacts field


      if (value !== '') {
        _this.setState({
          shouldRenderFTUXTooltip: false,
          isInviteSectionExpanded: true
        }, function () {
          var onEnterInviteCollabs = _this.props.trackingProps.inviteCollabTracking.onEnterInviteCollabs;

          if (onEnterInviteCollabs) {
            onEnterInviteCollabs();
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "openInviteCollaboratorsSection", function () {
      _this.setState({
        isInviteSectionExpanded: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeInviteCollaborators", function () {
      _this.setState({
        isInviteSectionExpanded: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "openEmailSharedLinkForm", function () {
      _this.setState({
        isEmailLinkSectionExpanded: true,
        shouldRenderFTUXTooltip: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeEmailSharedLinkForm", function () {
      _this.setState({
        isEmailLinkSectionExpanded: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hasExternalContact", function (type) {
      var _this$state = _this.state,
          inviteCollabsContacts = _this$state.inviteCollabsContacts,
          emailSharedLinkContacts = _this$state.emailSharedLinkContacts;

      if (type === INVITE_COLLABS_CONTACTS_TYPE) {
        return inviteCollabsContacts.some(function (contact) {
          return contact.isExternalUser;
        });
      }

      if (type === EMAIL_SHARED_LINK_CONTACTS_TYPE) {
        return emailSharedLinkContacts.some(function (contact) {
          return contact.isExternalUser;
        });
      }

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "updateInviteCollabsContacts", function (inviteCollabsContacts) {
      var setUpdatedContacts = _this.props.setUpdatedContacts;

      _this.setState({
        inviteCollabsContacts: inviteCollabsContacts
      });

      if (setUpdatedContacts) {
        setUpdatedContacts(inviteCollabsContacts);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateEmailSharedLinkContacts", function (emailSharedLinkContacts) {
      _this.setState({
        emailSharedLinkContacts: emailSharedLinkContacts
      });
    });

    _defineProperty(_assertThisInitialized(_this), "shouldAutoFocusSharedLink", function () {
      var _this$props4 = _this.props,
          focusSharedLinkOnLoad = _this$props4.focusSharedLinkOnLoad,
          sharedLink = _this$props4.sharedLink;
      var sharedLinkLoaded = _this.state.sharedLinkLoaded; // if not forcing focus (due to USM being opened from shared link UI)
      // or not a newly added shared link, return false

      if (!(focusSharedLinkOnLoad || sharedLink.isNewSharedLink)) {
        return false;
      } // otherwise wait until the link data is loaded before focusing


      if (!sharedLinkLoaded) {
        return false;
      }

      return true;
    });

    _this.state = {
      emailSharedLinkContacts: [],
      inviteCollabsContacts: props.initiallySelectedContacts,
      inviteePermissionLevel: '',
      isConfirmModalOpen: false,
      isEmailLinkSectionExpanded: false,
      isFetching: true,
      isInviteSectionExpanded: !!props.initiallySelectedContacts.length,
      showCollaboratorList: false,
      getInitialDataCalled: false,
      shouldRenderFTUXTooltip: false,
      sharedLinkLoaded: false
    };
    return _this;
  }

  _createClass(UnifiedShareModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props5 = this.props,
          item = _this$props5.item,
          trackingProps = _this$props5.trackingProps;
      var type = item.type,
          typedID = item.typedID;
      var modalTracking = trackingProps.modalTracking;
      var onLoad = modalTracking.onLoad;
      var getInitialDataCalled = this.state.getInitialDataCalled; // This check is to ensure minimum item props are
      // hydrated before we fetch data

      if (!getInitialDataCalled && type && typedID) {
        this.getInitialData();
      }

      if (onLoad) {
        onLoad();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props6 = this.props,
          item = _this$props6.item,
          sharedLink = _this$props6.sharedLink;
      var type = item.type,
          typedID = item.typedID;
      var prevSharedLink = prevProps.sharedLink;
      var getInitialDataCalled = this.state.getInitialDataCalled; // This check is to ensure minimum item props are
      // hydrated before we fetch data

      if (!getInitialDataCalled && type && typedID) {
        this.getInitialData();
      } // we use state to override the default auto copy prop when a URL comes into view


      if (prevSharedLink.url !== sharedLink.url && sharedLink.url) {
        this.setState({
          sharedLinkLoaded: true
        });
      }
    }
  }, {
    key: "renderInviteSection",
    value: function renderInviteSection() {
      var _this$props7 = this.props,
          canInvite = _this$props7.canInvite,
          collaborationRestrictionWarning = _this$props7.collaborationRestrictionWarning,
          contactLimit = _this$props7.contactLimit,
          getCollaboratorContacts = _this$props7.getCollaboratorContacts,
          item = _this$props7.item,
          _this$props7$recommen = _this$props7.recommendedSharingTooltipCalloutName,
          recommendedSharingTooltipCalloutName = _this$props7$recommen === void 0 ? null : _this$props7$recommen,
          sendInvitesError = _this$props7.sendInvitesError,
          _this$props7$showEnte = _this$props7.showEnterEmailsCallout,
          showEnterEmailsCallout = _this$props7$showEnte === void 0 ? false : _this$props7$showEnte,
          _this$props7$showCall = _this$props7.showCalloutForUser,
          showCalloutForUser = _this$props7$showCall === void 0 ? false : _this$props7$showCall,
          showUpgradeOptions = _this$props7.showUpgradeOptions,
          submitting = _this$props7.submitting,
          suggestedCollaborators = _this$props7.suggestedCollaborators,
          trackingProps = _this$props7.trackingProps;
      var type = item.type;
      var _this$state2 = this.state,
          isInviteSectionExpanded = _this$state2.isInviteSectionExpanded,
          shouldRenderFTUXTooltip = _this$state2.shouldRenderFTUXTooltip;
      var inviteCollabsEmailTracking = trackingProps.inviteCollabsEmailTracking,
          modalTracking = trackingProps.modalTracking;
      var contactsFieldDisabledTooltip = type === ITEM_TYPE_WEBLINK ? /*#__PURE__*/React.createElement(FormattedMessage, messages.inviteDisabledWeblinkTooltip) : /*#__PURE__*/React.createElement(FormattedMessage, messages.inviteDisabledTooltip);
      var inlineNotice = sendInvitesError ? {
        type: 'error',
        content: sendInvitesError
      } : {
        type: 'warning',
        content: collaborationRestrictionWarning
      };
      var avatars = this.renderCollaboratorAvatars();
      var ftuxConfirmButtonProps = modalTracking.ftuxConfirmButtonProps;
      var ftuxTooltipText = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
        className: "ftux-tooltip-title"
      }, /*#__PURE__*/React.createElement(FormattedMessage, messages.ftuxNewUSMUserTitle)), /*#__PURE__*/React.createElement("p", {
        className: "ftux-tooltip-body"
      }, /*#__PURE__*/React.createElement(FormattedMessage, messages.ftuxNewUSMUserBody), ' ', /*#__PURE__*/React.createElement(Link, {
        className: "ftux-tooltip-link",
        href: SHARED_LINKS_COMMUNITY_URL,
        target: "_blank"
      }, /*#__PURE__*/React.createElement(FormattedMessage, messages.ftuxLinkText))), /*#__PURE__*/React.createElement("div", {
        className: "ftux-tooltip-controls"
      }, /*#__PURE__*/React.createElement(Button, _extends({
        className: "ftux-tooltip-button",
        onClick: this.handleFtuxCloseClick
      }, ftuxConfirmButtonProps), /*#__PURE__*/React.createElement(FormattedMessage, messages.ftuxConfirmLabel))));
      var ftuxTooltipProps = {
        className: 'usm-ftux-tooltip',
        // don't want ftux tooltip to show if the recommended sharing tooltip callout is showing
        isShown: !recommendedSharingTooltipCalloutName && shouldRenderFTUXTooltip && showCalloutForUser,
        position: 'middle-left',
        showCloseButton: true,
        text: ftuxTooltipText,
        theme: 'callout'
      };
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tooltip, ftuxTooltipProps, /*#__PURE__*/React.createElement("div", {
        className: "invite-collaborator-container"
      }, /*#__PURE__*/React.createElement(EmailForm, _extends({
        contactLimit: contactLimit,
        contactsFieldAvatars: avatars,
        contactsFieldDisabledTooltip: contactsFieldDisabledTooltip,
        contactsFieldLabel: /*#__PURE__*/React.createElement(FormattedMessage, messages.inviteFieldLabel),
        getContacts: getCollaboratorContacts,
        inlineNotice: inlineNotice,
        isContactsFieldEnabled: canInvite,
        isExpanded: isInviteSectionExpanded,
        isExternalUserSelected: this.hasExternalContact(INVITE_COLLABS_CONTACTS_TYPE),
        onContactInput: this.openInviteCollaborators,
        onPillCreate: this.handleInviteCollabPillCreate,
        onRequestClose: this.closeInviteCollaborators,
        onSubmit: this.handleSendInvites,
        openInviteCollaboratorsSection: this.openInviteCollaboratorsSection,
        recommendedSharingTooltipCalloutName: recommendedSharingTooltipCalloutName,
        showEnterEmailsCallout: showEnterEmailsCallout,
        submitting: submitting,
        selectedContacts: this.state.inviteCollabsContacts,
        suggestedCollaborators: suggestedCollaborators,
        updateSelectedContacts: this.updateInviteCollabsContacts
      }, inviteCollabsEmailTracking), this.renderInviteePermissionsDropdown(), isInviteSectionExpanded && showUpgradeOptions && this.renderUpgradeLinkDescription()))));
    }
  }, {
    key: "renderCollaboratorAvatars",
    value: function renderCollaboratorAvatars() {
      var _this$props8 = this.props,
          collaboratorsList = _this$props8.collaboratorsList,
          canInvite = _this$props8.canInvite,
          currentUserID = _this$props8.currentUserID,
          item = _this$props8.item,
          trackingProps = _this$props8.trackingProps;
      var modalTracking = trackingProps.modalTracking;
      var avatarsContent = null;

      if (collaboratorsList) {
        var collaborators = collaboratorsList.collaborators;
        var _item$hideCollaborato = item.hideCollaborators,
            hideCollaborators = _item$hideCollaborato === void 0 ? true : _item$hideCollaborato;
        var canShowCollaboratorAvatars = hideCollaborators ? canInvite : true; // filter out the current user by comparing to the ItemCollabRecord ID field

        avatarsContent = canShowCollaboratorAvatars && /*#__PURE__*/React.createElement(CollaboratorAvatars, {
          collaborators: collaborators.filter(function (collaborator) {
            return String(collaborator.userID) !== currentUserID;
          }),
          onClick: this.showCollaboratorList,
          containerAttributes: modalTracking.collaboratorAvatarsProps
        });
      }

      return avatarsContent;
    }
  }, {
    key: "renderUpgradeLinkDescription",
    value: function renderUpgradeLinkDescription() {
      var _this$props$trackingP = this.props.trackingProps,
          trackingProps = _this$props$trackingP === void 0 ? {} : _this$props$trackingP;
      var _trackingProps$invite = trackingProps.inviteCollabsEmailTracking,
          inviteCollabsEmailTracking = _trackingProps$invite === void 0 ? {} : _trackingProps$invite;
      var _inviteCollabsEmailTr = inviteCollabsEmailTracking.upgradeLinkProps,
          upgradeLinkProps = _inviteCollabsEmailTr === void 0 ? {} : _inviteCollabsEmailTr;
      return /*#__PURE__*/React.createElement("div", {
        className: "upgrade-description"
      }, /*#__PURE__*/React.createElement(UpgradeBadge, {
        type: "warning"
      }), /*#__PURE__*/React.createElement(FormattedMessage, _extends({
        values: {
          upgradeGetMoreAccessControlsLink: /*#__PURE__*/React.createElement(Link, _extends({
            className: "upgrade-link",
            href: "/upgrade"
          }, upgradeLinkProps), /*#__PURE__*/React.createElement(FormattedMessage, messages.upgradeGetMoreAccessControlsLink))
        }
      }, messages.upgradeGetMoreAccessControlsDescription)));
    }
  }, {
    key: "renderInviteePermissionsDropdown",
    value: function renderInviteePermissionsDropdown() {
      var _this$props9 = this.props,
          inviteePermissions = _this$props9.inviteePermissions,
          item = _this$props9.item,
          submitting = _this$props9.submitting,
          canInvite = _this$props9.canInvite,
          trackingProps = _this$props9.trackingProps;
      var type = item.type;
      var inviteCollabTracking = trackingProps.inviteCollabTracking;
      return inviteePermissions && /*#__PURE__*/React.createElement(InviteePermissionsMenu, {
        disabled: !canInvite || submitting,
        inviteePermissionsButtonProps: inviteCollabTracking.inviteePermissionsButtonProps,
        inviteePermissionLevel: this.state.inviteePermissionLevel,
        inviteePermissions: inviteePermissions,
        changeInviteePermissionLevel: this.handleInviteePermissionChange,
        itemType: type
      });
    }
  }, {
    key: "renderCollaboratorList",
    value: function renderCollaboratorList() {
      var _this$props10 = this.props,
          item = _this$props10.item,
          collaboratorsList = _this$props10.collaboratorsList,
          trackingProps = _this$props10.trackingProps;
      var name = item.name,
          type = item.type;
      var collaboratorListTracking = trackingProps.collaboratorListTracking;
      var listContent = null;

      if (collaboratorsList) {
        var collaborators = collaboratorsList.collaborators;
        listContent = /*#__PURE__*/React.createElement(CollaboratorList, {
          itemName: name,
          itemType: type,
          onDoneClick: this.closeCollaboratorList,
          item: item,
          collaborators: collaborators,
          trackingProps: collaboratorListTracking
        });
      }

      return listContent;
    }
  }, {
    key: "render",
    value: function render() {
      // Shared link section props
      var _this$props11 = this.props,
          changeSharedLinkAccessLevel = _this$props11.changeSharedLinkAccessLevel,
          changeSharedLinkPermissionLevel = _this$props11.changeSharedLinkPermissionLevel,
          focusSharedLinkOnLoad = _this$props11.focusSharedLinkOnLoad,
          item = _this$props11.item,
          onSettingsClick = _this$props11.onSettingsClick,
          sharedLink = _this$props11.sharedLink,
          intl = _this$props11.intl,
          _this$props11$onDismi = _this$props11.onDismissTooltip,
          onDismissTooltip = _this$props11$onDismi === void 0 ? function () {} : _this$props11$onDismi,
          _this$props11$showEnt = _this$props11.showEnterEmailsCallout,
          showEnterEmailsCallout = _this$props11$showEnt === void 0 ? false : _this$props11$showEnt,
          _this$props11$showSha = _this$props11.showSharedLinkSettingsCallout,
          showSharedLinkSettingsCallout = _this$props11$showSha === void 0 ? false : _this$props11$showSha,
          submitting = _this$props11.submitting,
          _this$props11$tooltip = _this$props11.tooltips,
          tooltips = _this$props11$tooltip === void 0 ? {} : _this$props11$tooltip,
          rest = _objectWithoutProperties(_this$props11, ["changeSharedLinkAccessLevel", "changeSharedLinkPermissionLevel", "focusSharedLinkOnLoad", "item", "onSettingsClick", "sharedLink", "intl", "onDismissTooltip", "showEnterEmailsCallout", "showSharedLinkSettingsCallout", "submitting", "tooltips"]);

      var canInvite = rest.canInvite,
          getSharedLinkContacts = rest.getSharedLinkContacts,
          isOpen = rest.isOpen,
          onRequestClose = rest.onRequestClose,
          onRemoveLink = rest.onRemoveLink,
          sendSharedLinkError = rest.sendSharedLinkError,
          trackingProps = rest.trackingProps;
      var modalTracking = trackingProps.modalTracking,
          sharedLinkTracking = trackingProps.sharedLinkTracking,
          sharedLinkEmailTracking = trackingProps.sharedLinkEmailTracking,
          removeLinkConfirmModalTracking = trackingProps.removeLinkConfirmModalTracking;
      var modalProps = modalTracking.modalProps;
      var _this$state3 = this.state,
          isEmailLinkSectionExpanded = _this$state3.isEmailLinkSectionExpanded,
          isFetching = _this$state3.isFetching,
          isInviteSectionExpanded = _this$state3.isInviteSectionExpanded,
          isConfirmModalOpen = _this$state3.isConfirmModalOpen,
          showCollaboratorList = _this$state3.showCollaboratorList; // focus logic at modal level

      var extendedModalProps = _objectSpread({
        focusElementSelector: canInvite ? '.pill-selector-input' // focus on invite collabs field
        : '.toggle-simple'
      }, modalProps);

      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Modal, _extends({
        className: "unified-share-modal",
        isOpen: isConfirmModalOpen ? false : isOpen,
        onRequestClose: submitting ? undefined : onRequestClose,
        title: /*#__PURE__*/React.createElement(UnifiedShareModalTitle, {
          isEmailLinkSectionExpanded: isEmailLinkSectionExpanded,
          showCollaboratorList: showCollaboratorList,
          item: item
        })
      }, extendedModalProps), /*#__PURE__*/React.createElement(LoadingIndicatorWrapper, {
        isLoading: isFetching,
        hideContent: true
      }, !isEmailLinkSectionExpanded && !showCollaboratorList && this.renderInviteSection(), !isEmailLinkSectionExpanded && !isInviteSectionExpanded && !showCollaboratorList && /*#__PURE__*/React.createElement(SharedLinkSection, {
        autofocusSharedLink: this.shouldAutoFocusSharedLink(),
        triggerCopyOnLoad: focusSharedLinkOnLoad,
        changeSharedLinkAccessLevel: changeSharedLinkAccessLevel,
        changeSharedLinkPermissionLevel: changeSharedLinkPermissionLevel,
        intl: intl,
        item: item,
        itemType: item.type,
        onDismissTooltip: onDismissTooltip,
        onEmailSharedLinkClick: this.openEmailSharedLinkForm,
        onSettingsClick: onSettingsClick,
        onToggleSharedLink: this.onToggleSharedLink,
        sharedLink: sharedLink,
        showSharedLinkSettingsCallout: showSharedLinkSettingsCallout,
        submitting: submitting || isFetching,
        trackingProps: sharedLinkTracking,
        tooltips: tooltips
      }), isEmailLinkSectionExpanded && !showCollaboratorList && /*#__PURE__*/React.createElement(EmailForm, _extends({
        contactsFieldLabel: /*#__PURE__*/React.createElement(FormattedMessage, messages.sendSharedLinkFieldLabel),
        getContacts: getSharedLinkContacts,
        inlineNotice: {
          type: 'error',
          content: sendSharedLinkError
        },
        isContactsFieldEnabled: true,
        isExpanded: true,
        isExternalUserSelected: this.hasExternalContact(EMAIL_SHARED_LINK_CONTACTS_TYPE),
        onPillCreate: this.handleEmailSharedLinkPillCreate,
        onRequestClose: this.closeEmailSharedLinkForm,
        onSubmit: this.handleSendSharedLink,
        showEnterEmailsCallout: showEnterEmailsCallout,
        submitting: submitting,
        selectedContacts: this.state.emailSharedLinkContacts,
        updateSelectedContacts: this.updateEmailSharedLinkContacts
      }, sharedLinkEmailTracking)), showCollaboratorList && this.renderCollaboratorList())), isConfirmModalOpen && /*#__PURE__*/React.createElement(RemoveLinkConfirmModal, _extends({
        isOpen: isConfirmModalOpen,
        onRequestClose: this.closeConfirmModal,
        removeLink: onRemoveLink,
        submitting: submitting
      }, removeLinkConfirmModalTracking)));
    }
  }]);

  return UnifiedShareModal;
}(React.Component);

_defineProperty(UnifiedShareModal, "defaultProps", {
  initiallySelectedContacts: [],
  focusSharedLinkOnLoad: false,
  trackingProps: {
    inviteCollabsEmailTracking: {},
    sharedLinkEmailTracking: {},
    sharedLinkTracking: {},
    inviteCollabTracking: {},
    modalTracking: {},
    removeLinkConfirmModalTracking: {},
    collaboratorListTracking: {}
  }
});

export { UnifiedShareModal as UnifiedShareModalBase };
export default injectIntl(UnifiedShareModal);
//# sourceMappingURL=UnifiedShareModal.js.map