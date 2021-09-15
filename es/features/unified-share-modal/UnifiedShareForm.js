function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import { FormattedMessage, injectIntl } from 'react-intl';
import LoadingIndicatorWrapper from '../../components/loading-indicator/LoadingIndicatorWrapper';
import { Link } from '../../components/link';
import Button from '../../components/button';
import { UpgradeBadge } from '../../components/badge';
import { ITEM_TYPE_WEBLINK } from '../../common/constants';
import Tooltip from '../../components/tooltip';
import { CollaboratorAvatars, CollaboratorList } from '../collaborator-avatars';
import InviteePermissionsMenu from './InviteePermissionsMenu';
import messages from './messages';
import SharedLinkSection from './SharedLinkSection';
import EmailForm from './EmailForm';
import getDefaultPermissionLevel from './utils/defaultPermissionLevel';
import hasRestrictedExternalContacts from './utils/hasRestrictedExternalContacts';
import mergeContacts from './utils/mergeContacts';
import { JUSTIFICATION_CHECKPOINT_EXTERNAL_COLLAB } from './constants';
var SHARED_LINKS_COMMUNITY_URL = 'https://community.box.com/t5/Using-Shared-Links/Creating-Shared-Links/ta-p/19523';
var INVITE_COLLABS_CONTACTS_TYPE = 'inviteCollabsContacts';
var EMAIL_SHARED_LINK_CONTACTS_TYPE = 'emailSharedLinkContacts';

var UnifiedShareForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UnifiedShareForm, _React$Component);

  function UnifiedShareForm(props) {
    var _this;

    _classCallCheck(this, UnifiedShareForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UnifiedShareForm).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "fetchJustificationReasons", function (item, checkpoint) {
      var justificationReasons = _this.state.justificationReasons;
      var getJustificationReasons = _this.props.getJustificationReasons;
      var hasJustificationReasons = !!justificationReasons.length;

      if (!getJustificationReasons || hasJustificationReasons) {
        return Promise.resolve();
      }

      _this.setState({
        isFetchingJustificationReasons: true
      });

      return getJustificationReasons(item.typedID, checkpoint).then(function (_ref) {
        var classificationLabelId = _ref.classificationLabelId,
            options = _ref.options;

        _this.setState({
          classificationLabelId: classificationLabelId,
          justificationReasons: options.map(function (_ref2) {
            var id = _ref2.id,
                title = _ref2.title;
            return {
              displayText: title,
              value: id
            };
          })
        });
      }).finally(function () {
        _this.setState({
          isFetchingJustificationReasons: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "shouldRequireExternalCollabJustification", function () {
      var inviteCollabsContacts = _this.state.inviteCollabsContacts;
      var _this$props = _this.props,
          isCollabRestrictionJustificationAllowed = _this$props.isCollabRestrictionJustificationAllowed,
          restrictedExternalCollabEmails = _this$props.restrictedExternalCollabEmails;
      var hasRestrictedExternalCollabs = hasRestrictedExternalContacts(inviteCollabsContacts, restrictedExternalCollabEmails);
      return hasRestrictedExternalCollabs && isCollabRestrictionJustificationAllowed;
    });

    _defineProperty(_assertThisInitialized(_this), "handleInviteCollabPillCreate", function (pills) {
      return _this.onPillCreate(INVITE_COLLABS_CONTACTS_TYPE, pills);
    });

    _defineProperty(_assertThisInitialized(_this), "handleEmailSharedLinkPillCreate", function (pills) {
      return _this.onPillCreate(EMAIL_SHARED_LINK_CONTACTS_TYPE, pills);
    });

    _defineProperty(_assertThisInitialized(_this), "onToggleSharedLink", function (event) {
      var target = event.target;
      var _this$props2 = _this.props,
          handleFtuxCloseClick = _this$props2.handleFtuxCloseClick,
          onAddLink = _this$props2.onAddLink,
          openConfirmModal = _this$props2.openConfirmModal,
          shouldRenderFTUXTooltip = _this$props2.shouldRenderFTUXTooltip,
          trackingProps = _this$props2.trackingProps;
      var sharedLinkTracking = trackingProps.sharedLinkTracking;
      var onToggleLink = sharedLinkTracking.onToggleLink;

      if (shouldRenderFTUXTooltip) {
        handleFtuxCloseClick();
      }

      if (target.type === 'checkbox') {
        if (target.checked === false) {
          openConfirmModal();
        } else {
          onAddLink();
        }

        if (onToggleLink) {
          onToggleLink(target.checked);
        }
      }
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
      var _this$props3 = _this.props,
          inviteePermissions = _this$props3.inviteePermissions,
          isCollabRestrictionJustificationAllowed = _this$props3.isCollabRestrictionJustificationAllowed,
          sendInvites = _this$props3.sendInvites,
          trackingProps = _this$props3.trackingProps;
      var inviteCollabsEmailTracking = trackingProps.inviteCollabsEmailTracking;
      var onSendClick = inviteCollabsEmailTracking.onSendClick;
      var _this$state = _this.state,
          classificationLabelId = _this$state.classificationLabelId,
          inviteePermissionLevel = _this$state.inviteePermissionLevel;
      var defaultPermissionLevel = getDefaultPermissionLevel(inviteePermissions);
      var selectedPermissionLevel = inviteePermissionLevel || defaultPermissionLevel;
      var emails = data.emails,
          groupIDs = data.groupIDs,
          justificationReason = data.justificationReason,
          message = data.message,
          restrictedExternalEmails = data.restrictedExternalEmails;
      var params = {
        emails: emails.join(','),
        groupIDs: groupIDs.join(','),
        emailMessage: message,
        permission: selectedPermissionLevel,
        numsOfInvitees: emails.length,
        numOfInviteeGroups: groupIDs.length
      };
      var hasJustificationReason = !!justificationReason;
      var hasRestrictedExternalInvitees = !isEmpty(restrictedExternalEmails);
      var shouldSubmitJustificationReason = hasJustificationReason && hasRestrictedExternalInvitees && isCollabRestrictionJustificationAllowed;

      if (shouldSubmitJustificationReason) {
        params = _objectSpread({}, params, {
          classificationLabelId: classificationLabelId,
          justificationReason: {
            id: justificationReason.value,
            title: justificationReason.displayText
          }
        });
      }

      if (onSendClick) {
        onSendClick(params);
      }

      return sendInvites(params);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSendSharedLink", function (data) {
      var _this$props4 = _this.props,
          sendSharedLink = _this$props4.sendSharedLink,
          trackingProps = _this$props4.trackingProps;
      var sharedLinkEmailTracking = trackingProps.sharedLinkEmailTracking;
      var onSendClick = sharedLinkEmailTracking.onSendClick;
      var emails = data.emails,
          groupIDs = data.groupIDs;

      if (onSendClick) {
        var params = _objectSpread({}, data, {
          numsOfRecipients: emails.length,
          numOfRecipientGroups: groupIDs.length
        });

        onSendClick(params);
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
      var handleFtuxCloseClick = _this.props.handleFtuxCloseClick;

      if (_this.state.isInviteSectionExpanded) {
        return;
      } // checking the value because IE seems to trigger onInput immediately
      // on focus of the contacts field


      if (value !== '') {
        handleFtuxCloseClick();

        _this.setState({
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
      var handleFtuxCloseClick = _this.props.handleFtuxCloseClick;
      handleFtuxCloseClick();

      _this.setState({
        isEmailLinkSectionExpanded: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeEmailSharedLinkForm", function () {
      _this.setState({
        isEmailLinkSectionExpanded: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hasExternalContact", function (type) {
      var _this$state2 = _this.state,
          inviteCollabsContacts = _this$state2.inviteCollabsContacts,
          emailSharedLinkContacts = _this$state2.emailSharedLinkContacts;

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

    _defineProperty(_assertThisInitialized(_this), "isRemovingAllRestrictedExternalCollabs", function (currentInviteCollabsContacts, newInviteCollabsContacts) {
      var restrictedExternalCollabEmails = _this.props.restrictedExternalCollabEmails;
      var hasRestrictedExternalCollabs = hasRestrictedExternalContacts(currentInviteCollabsContacts, restrictedExternalCollabEmails);
      var hasRestrictedExternalCollabsAfterUpdate = hasRestrictedExternalContacts(newInviteCollabsContacts, restrictedExternalCollabEmails);
      return hasRestrictedExternalCollabs && !hasRestrictedExternalCollabsAfterUpdate;
    });

    _defineProperty(_assertThisInitialized(_this), "updateInviteCollabsContacts", function (inviteCollabsContacts) {
      var currentInviteCollabsContacts = _this.state.inviteCollabsContacts;
      var _this$props5 = _this.props,
          onRemoveAllRestrictedExternalCollabs = _this$props5.onRemoveAllRestrictedExternalCollabs,
          setUpdatedContacts = _this$props5.setUpdatedContacts;

      var isRemovingAllRestrictedExternalCollabs = _this.isRemovingAllRestrictedExternalCollabs(currentInviteCollabsContacts, inviteCollabsContacts);

      _this.setState({
        inviteCollabsContacts: inviteCollabsContacts
      });

      if (setUpdatedContacts) {
        setUpdatedContacts(inviteCollabsContacts);
      }

      if (onRemoveAllRestrictedExternalCollabs && isRemovingAllRestrictedExternalCollabs) {
        onRemoveAllRestrictedExternalCollabs();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateEmailSharedLinkContacts", function (emailSharedLinkContacts) {
      _this.setState({
        emailSharedLinkContacts: emailSharedLinkContacts
      });
    });

    _defineProperty(_assertThisInitialized(_this), "shouldAutoFocusSharedLink", function () {
      var _this$props6 = _this.props,
          focusSharedLinkOnLoad = _this$props6.focusSharedLinkOnLoad,
          sharedLink = _this$props6.sharedLink,
          sharedLinkLoaded = _this$props6.sharedLinkLoaded,
          createSharedLinkOnLoad = _this$props6.createSharedLinkOnLoad;

      if (!createSharedLinkOnLoad && !focusSharedLinkOnLoad) {
        return false;
      } // if not forcing focus or not a newly added shared link, return false


      if (!(focusSharedLinkOnLoad || sharedLink.isNewSharedLink)) {
        return false;
      } // otherwise wait until the link data is loaded before focusing


      if (!sharedLinkLoaded) {
        return false;
      }

      return true;
    });

    _this.state = {
      classificationLabelId: '',
      emailSharedLinkContacts: [],
      inviteCollabsContacts: props.initiallySelectedContacts,
      inviteePermissionLevel: '',
      isEmailLinkSectionExpanded: false,
      isFetchingJustificationReasons: false,
      isInviteSectionExpanded: !!props.initiallySelectedContacts.length,
      justificationReasons: [],
      showCollaboratorList: false
    };
    return _this;
  }

  _createClass(UnifiedShareForm, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props7 = this.props,
          isCollabRestrictionJustificationAllowed = _this$props7.isCollabRestrictionJustificationAllowed,
          item = _this$props7.item,
          restrictedExternalCollabEmails = _this$props7.restrictedExternalCollabEmails;
      var prevRestrictedExternalCollabEmails = prevProps.restrictedExternalCollabEmails,
          prevIsCollabRestrictionJustificationAllowed = prevProps.isCollabRestrictionJustificationAllowed;
      var didExternalCollabRestrictionsChange = !isEqual(restrictedExternalCollabEmails, prevRestrictedExternalCollabEmails) || isCollabRestrictionJustificationAllowed !== prevIsCollabRestrictionJustificationAllowed;

      if (didExternalCollabRestrictionsChange && this.shouldRequireExternalCollabJustification()) {
        this.fetchJustificationReasons(item, JUSTIFICATION_CHECKPOINT_EXTERNAL_COLLAB);
      }
    }
  }, {
    key: "renderInviteSection",
    value: function renderInviteSection() {
      var _this$props8 = this.props,
          canInvite = _this$props8.canInvite,
          collaborationRestrictionWarning = _this$props8.collaborationRestrictionWarning,
          config = _this$props8.config,
          contactLimit = _this$props8.contactLimit,
          getCollaboratorContacts = _this$props8.getCollaboratorContacts,
          getContactAvatarUrl = _this$props8.getContactAvatarUrl,
          handleFtuxCloseClick = _this$props8.handleFtuxCloseClick,
          item = _this$props8.item,
          _this$props8$recommen = _this$props8.recommendedSharingTooltipCalloutName,
          recommendedSharingTooltipCalloutName = _this$props8$recommen === void 0 ? null : _this$props8$recommen,
          restrictedExternalCollabEmails = _this$props8.restrictedExternalCollabEmails,
          sendInvitesError = _this$props8.sendInvitesError,
          shouldRenderFTUXTooltip = _this$props8.shouldRenderFTUXTooltip,
          _this$props8$showEnte = _this$props8.showEnterEmailsCallout,
          showEnterEmailsCallout = _this$props8$showEnte === void 0 ? false : _this$props8$showEnte,
          _this$props8$showCall = _this$props8.showCalloutForUser,
          showCalloutForUser = _this$props8$showCall === void 0 ? false : _this$props8$showCall,
          showUpgradeOptions = _this$props8.showUpgradeOptions,
          submitting = _this$props8.submitting,
          suggestedCollaborators = _this$props8.suggestedCollaborators,
          trackingProps = _this$props8.trackingProps;
      var type = item.type;
      var _this$state3 = this.state,
          isFetchingJustificationReasons = _this$state3.isFetchingJustificationReasons,
          isInviteSectionExpanded = _this$state3.isInviteSectionExpanded,
          justificationReasons = _this$state3.justificationReasons;
      var inviteCollabsEmailTracking = trackingProps.inviteCollabsEmailTracking,
          modalTracking = trackingProps.modalTracking;
      var contactsFieldDisabledTooltip = type === ITEM_TYPE_WEBLINK ? React.createElement(FormattedMessage, messages.inviteDisabledWeblinkTooltip) : React.createElement(FormattedMessage, messages.inviteDisabledTooltip);
      var inlineNotice = sendInvitesError ? {
        type: 'error',
        content: sendInvitesError
      } : {
        type: 'warning',
        content: collaborationRestrictionWarning
      };
      var avatars = this.renderCollaboratorAvatars();
      var ftuxConfirmButtonProps = modalTracking.ftuxConfirmButtonProps;
      var ftuxTooltipText = React.createElement("div", null, React.createElement("h4", {
        className: "ftux-tooltip-title"
      }, React.createElement(FormattedMessage, messages.ftuxNewUSMUserTitle)), React.createElement("p", {
        className: "ftux-tooltip-body"
      }, React.createElement(FormattedMessage, messages.ftuxNewUSMUserBody), ' ', React.createElement(Link, {
        className: "ftux-tooltip-link",
        href: SHARED_LINKS_COMMUNITY_URL,
        target: "_blank"
      }, React.createElement(FormattedMessage, messages.ftuxLinkText))), React.createElement("div", {
        className: "ftux-tooltip-controls"
      }, React.createElement(Button, _extends({
        className: "ftux-tooltip-button",
        onClick: handleFtuxCloseClick
      }, ftuxConfirmButtonProps), React.createElement(FormattedMessage, messages.ftuxConfirmLabel))));
      var ftuxTooltipProps = {
        className: 'usm-ftux-tooltip',
        // don't want ftux tooltip to show if the recommended sharing tooltip callout is showing
        isShown: !recommendedSharingTooltipCalloutName && shouldRenderFTUXTooltip && showCalloutForUser,
        position: 'middle-left',
        showCloseButton: true,
        text: ftuxTooltipText,
        theme: 'callout'
      };
      return React.createElement(React.Fragment, null, React.createElement(Tooltip, ftuxTooltipProps, React.createElement("div", {
        className: "invite-collaborator-container",
        "data-testid": "invite-collaborator-container"
      }, React.createElement(EmailForm, _extends({
        config: config,
        contactLimit: contactLimit,
        contactsFieldAvatars: avatars,
        contactsFieldDisabledTooltip: contactsFieldDisabledTooltip,
        contactsFieldLabel: React.createElement(FormattedMessage, messages.inviteFieldLabel),
        getContacts: getCollaboratorContacts,
        getContactAvatarUrl: getContactAvatarUrl,
        inlineNotice: inlineNotice,
        isContactsFieldEnabled: canInvite,
        isExpanded: isInviteSectionExpanded,
        isFetchingJustificationReasons: isFetchingJustificationReasons,
        isExternalUserSelected: this.hasExternalContact(INVITE_COLLABS_CONTACTS_TYPE),
        isRestrictionJustificationEnabled: this.shouldRequireExternalCollabJustification(),
        justificationReasons: justificationReasons,
        onContactInput: this.openInviteCollaborators,
        onPillCreate: this.handleInviteCollabPillCreate,
        onRequestClose: this.closeInviteCollaborators,
        onSubmit: this.handleSendInvites,
        openInviteCollaboratorsSection: this.openInviteCollaboratorsSection,
        recommendedSharingTooltipCalloutName: recommendedSharingTooltipCalloutName,
        restrictedExternalEmails: restrictedExternalCollabEmails,
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
      var _this$props9 = this.props,
          collaboratorsList = _this$props9.collaboratorsList,
          canInvite = _this$props9.canInvite,
          currentUserID = _this$props9.currentUserID,
          item = _this$props9.item,
          trackingProps = _this$props9.trackingProps;
      var modalTracking = trackingProps.modalTracking;
      var avatarsContent = null;

      if (collaboratorsList) {
        var collaborators = collaboratorsList.collaborators;
        var _item$hideCollaborato = item.hideCollaborators,
            hideCollaborators = _item$hideCollaborato === void 0 ? true : _item$hideCollaborato;
        var canShowCollaboratorAvatars = hideCollaborators ? canInvite : true; // filter out the current user by comparing to the ItemCollabRecord ID field

        avatarsContent = canShowCollaboratorAvatars && React.createElement(CollaboratorAvatars, {
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
      return React.createElement("div", {
        className: "upgrade-description"
      }, React.createElement(UpgradeBadge, {
        type: "warning"
      }), React.createElement(FormattedMessage, _extends({
        values: {
          upgradeGetMoreAccessControlsLink: React.createElement(Link, _extends({
            className: "upgrade-link",
            href: "/upgrade"
          }, upgradeLinkProps), React.createElement(FormattedMessage, messages.upgradeGetMoreAccessControlsLink))
        }
      }, messages.upgradeGetMoreAccessControlsDescription)));
    }
  }, {
    key: "renderInviteePermissionsDropdown",
    value: function renderInviteePermissionsDropdown() {
      var _this$props10 = this.props,
          inviteePermissions = _this$props10.inviteePermissions,
          item = _this$props10.item,
          submitting = _this$props10.submitting,
          canInvite = _this$props10.canInvite,
          trackingProps = _this$props10.trackingProps;
      var type = item.type;
      var inviteCollabTracking = trackingProps.inviteCollabTracking;
      return inviteePermissions && React.createElement(InviteePermissionsMenu, {
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
      var _this$props11 = this.props,
          item = _this$props11.item,
          collaboratorsList = _this$props11.collaboratorsList,
          trackingProps = _this$props11.trackingProps;
      var name = item.name,
          type = item.type;
      var collaboratorListTracking = trackingProps.collaboratorListTracking;
      var listContent = null;

      if (collaboratorsList) {
        var collaborators = collaboratorsList.collaborators;
        listContent = React.createElement(CollaboratorList, {
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
      var _this$props12 = this.props,
          allShareRestrictionWarning = _this$props12.allShareRestrictionWarning,
          changeSharedLinkAccessLevel = _this$props12.changeSharedLinkAccessLevel,
          createSharedLinkOnLoad = _this$props12.createSharedLinkOnLoad,
          changeSharedLinkPermissionLevel = _this$props12.changeSharedLinkPermissionLevel,
          config = _this$props12.config,
          displayInModal = _this$props12.displayInModal,
          focusSharedLinkOnLoad = _this$props12.focusSharedLinkOnLoad,
          getSharedLinkContacts = _this$props12.getSharedLinkContacts,
          getContactAvatarUrl = _this$props12.getContactAvatarUrl,
          intl = _this$props12.intl,
          isAllowEditSharedLinkForFileEnabled = _this$props12.isAllowEditSharedLinkForFileEnabled,
          isFetching = _this$props12.isFetching,
          item = _this$props12.item,
          onAddLink = _this$props12.onAddLink,
          onCopyError = _this$props12.onCopyError,
          onCopyInit = _this$props12.onCopyInit,
          onCopySuccess = _this$props12.onCopySuccess,
          _this$props12$onDismi = _this$props12.onDismissTooltip,
          onDismissTooltip = _this$props12$onDismi === void 0 ? function () {} : _this$props12$onDismi,
          onSettingsClick = _this$props12.onSettingsClick,
          sendSharedLinkError = _this$props12.sendSharedLinkError,
          sharedLink = _this$props12.sharedLink,
          sharedLinkEditTagTargetingApi = _this$props12.sharedLinkEditTagTargetingApi,
          sharedLinkEditTooltipTargetingApi = _this$props12.sharedLinkEditTooltipTargetingApi,
          _this$props12$showEnt = _this$props12.showEnterEmailsCallout,
          showEnterEmailsCallout = _this$props12$showEnt === void 0 ? false : _this$props12$showEnt,
          _this$props12$showSha = _this$props12.showSharedLinkSettingsCallout,
          showSharedLinkSettingsCallout = _this$props12$showSha === void 0 ? false : _this$props12$showSha,
          submitting = _this$props12.submitting,
          _this$props12$tooltip = _this$props12.tooltips,
          tooltips = _this$props12$tooltip === void 0 ? {} : _this$props12$tooltip,
          trackingProps = _this$props12.trackingProps;
      var sharedLinkTracking = trackingProps.sharedLinkTracking,
          sharedLinkEmailTracking = trackingProps.sharedLinkEmailTracking;
      var _this$state4 = this.state,
          isEmailLinkSectionExpanded = _this$state4.isEmailLinkSectionExpanded,
          isInviteSectionExpanded = _this$state4.isInviteSectionExpanded,
          showCollaboratorList = _this$state4.showCollaboratorList; // Only show the restriction warning on the main page of the USM where the email and share link option is available

      var showShareRestrictionWarning = !isEmailLinkSectionExpanded && !isInviteSectionExpanded && !showCollaboratorList && allShareRestrictionWarning;
      return React.createElement("div", {
        className: displayInModal ? '' : 'be bdl-UnifiedShareForm'
      }, React.createElement(LoadingIndicatorWrapper, {
        isLoading: isFetching,
        hideContent: true
      }, showShareRestrictionWarning && allShareRestrictionWarning, !isEmailLinkSectionExpanded && !showCollaboratorList && this.renderInviteSection(), !isEmailLinkSectionExpanded && !isInviteSectionExpanded && !showCollaboratorList && React.createElement(SharedLinkSection, {
        addSharedLink: onAddLink,
        autofocusSharedLink: this.shouldAutoFocusSharedLink(),
        autoCreateSharedLink: createSharedLinkOnLoad,
        config: config,
        triggerCopyOnLoad: createSharedLinkOnLoad && focusSharedLinkOnLoad,
        changeSharedLinkAccessLevel: changeSharedLinkAccessLevel,
        changeSharedLinkPermissionLevel: changeSharedLinkPermissionLevel,
        intl: intl,
        isAllowEditSharedLinkForFileEnabled: isAllowEditSharedLinkForFileEnabled,
        item: item,
        itemType: item.type,
        onDismissTooltip: onDismissTooltip,
        onEmailSharedLinkClick: this.openEmailSharedLinkForm,
        onSettingsClick: onSettingsClick,
        onToggleSharedLink: this.onToggleSharedLink,
        onCopyInit: onCopyInit,
        onCopySuccess: onCopySuccess,
        onCopyError: onCopyError,
        sharedLink: sharedLink,
        sharedLinkEditTagTargetingApi: sharedLinkEditTagTargetingApi,
        sharedLinkEditTooltipTargetingApi: sharedLinkEditTooltipTargetingApi,
        showSharedLinkSettingsCallout: showSharedLinkSettingsCallout,
        submitting: submitting || isFetching,
        trackingProps: sharedLinkTracking,
        tooltips: tooltips
      }), isEmailLinkSectionExpanded && !showCollaboratorList && React.createElement(EmailForm, _extends({
        contactsFieldLabel: React.createElement(FormattedMessage, messages.sendSharedLinkFieldLabel),
        getContactAvatarUrl: getContactAvatarUrl,
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
      }, sharedLinkEmailTracking)), showCollaboratorList && this.renderCollaboratorList()));
    }
  }]);

  return UnifiedShareForm;
}(React.Component);

_defineProperty(UnifiedShareForm, "defaultProps", {
  displayInModal: true,
  initiallySelectedContacts: [],
  createSharedLinkOnLoad: false,
  focusSharedLinkOnLoad: false,
  restrictedExternalCollabEmails: [],
  trackingProps: {
    collaboratorListTracking: {},
    inviteCollabsEmailTracking: {},
    inviteCollabTracking: {},
    modalTracking: {},
    removeLinkConfirmModalTracking: {},
    sharedLinkEmailTracking: {},
    sharedLinkTracking: {}
  }
});

export { UnifiedShareForm as UnifiedShareFormBase };
export default injectIntl(UnifiedShareForm);
//# sourceMappingURL=UnifiedShareForm.js.map