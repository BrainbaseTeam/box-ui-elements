var _RESTRICTION_JUSTIFIC, _RESTRICTION_JUSTIFIC2, _restrictionNoticeMes;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import noop from 'lodash/noop';
import getProp from 'lodash/get';
import { FormattedMessage, injectIntl } from 'react-intl';
import Tooltip from '../../components/tooltip';
import PlainButton from '../../components/plain-button';
import InlineNotice from '../../components/inline-notice';
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import SingleSelectField from '../../components/select-field/SingleSelectField';
import messages from './messages';
import './ContactRestrictionNotice.scss';
var SINGLE_CONTACT = 'singleContact';
var MULTIPLE_CONTACTS = 'multipleContacts';
var RESTRICTION_JUSTIFICATION_ENABLED = 'restrictionJustificationEnabled';
var RESTRICTION_JUSTIFICATION_DISABLED = 'restrictionJustificationDisabled';
var restrictionNoticeMessageMap = (_restrictionNoticeMes = {}, _defineProperty(_restrictionNoticeMes, RESTRICTION_JUSTIFICATION_ENABLED, (_RESTRICTION_JUSTIFIC = {}, _defineProperty(_RESTRICTION_JUSTIFIC, SINGLE_CONTACT, messages.justifiableContactRestrictionNoticeSingular), _defineProperty(_RESTRICTION_JUSTIFIC, MULTIPLE_CONTACTS, messages.justifiableContactRestrictionNotice), _RESTRICTION_JUSTIFIC)), _defineProperty(_restrictionNoticeMes, RESTRICTION_JUSTIFICATION_DISABLED, (_RESTRICTION_JUSTIFIC2 = {}, _defineProperty(_RESTRICTION_JUSTIFIC2, SINGLE_CONTACT, messages.contactRestrictionNoticeSingular), _defineProperty(_RESTRICTION_JUSTIFIC2, MULTIPLE_CONTACTS, messages.contactRestrictionNotice), _RESTRICTION_JUSTIFIC2)), _restrictionNoticeMes);

var ContactRestrictionNotice = function ContactRestrictionNotice(_ref) {
  var error = _ref.error,
      intl = _ref.intl,
      isFetchingJustificationReasons = _ref.isFetchingJustificationReasons,
      isRestrictionJustificationEnabled = _ref.isRestrictionJustificationEnabled,
      justificationReasons = _ref.justificationReasons,
      onRemoveRestrictedExternalContacts = _ref.onRemoveRestrictedExternalContacts,
      onSelectJustificationReason = _ref.onSelectJustificationReason,
      restrictedExternalEmails = _ref.restrictedExternalEmails,
      selectedContacts = _ref.selectedContacts,
      selectedJustificationReason = _ref.selectedJustificationReason;
  var restrictedExternalContacts = selectedContacts.filter(function (_ref2) {
    var value = _ref2.value;
    return restrictedExternalEmails.includes(value);
  });
  var restrictedExternalContactCount = restrictedExternalContacts.length;

  if (!restrictedExternalContactCount) {
    return null;
  }

  var firstEmail = restrictedExternalContacts[0].value;
  var selectedValue = getProp(selectedJustificationReason, 'value', null);
  var isErrorTooltipShown = !!error;
  var justificationStatus = isRestrictionJustificationEnabled ? RESTRICTION_JUSTIFICATION_ENABLED : RESTRICTION_JUSTIFICATION_DISABLED;
  var restrictedContactCountType = restrictedExternalContactCount === 1 ? SINGLE_CONTACT : MULTIPLE_CONTACTS;
  var removeButtonLabelMessage = isRestrictionJustificationEnabled ? messages.justifiableContactRestrictionRemoveButtonLabel : messages.contactRestrictionRemoveButtonLabel;
  var restrictionNoticeMessage = restrictionNoticeMessageMap[justificationStatus][restrictedContactCountType];
  var justificationSelectSection = isFetchingJustificationReasons ? React.createElement(LoadingIndicator, {
    className: "bdl-ContactRestrictionNotice-loadingIndicator"
  }) : React.createElement(SingleSelectField, {
    "data-resin-target": "justificationReasonsSelect",
    options: justificationReasons,
    onChange: onSelectJustificationReason,
    placeholder: intl.formatMessage(messages.justificationSelectPlaceholder),
    selectedValue: selectedValue
  });
  return React.createElement(Tooltip, {
    text: error,
    isShown: isErrorTooltipShown,
    position: "middle-right",
    theme: "error"
  }, React.createElement(InlineNotice, {
    className: "bdl-ContactRestrictionNotice",
    "data-resin-component": "contactRestrictionNotice",
    type: "error"
  }, React.createElement(FormattedMessage, _extends({}, restrictionNoticeMessage, {
    values: {
      count: restrictedExternalContactCount,
      email: firstEmail
    }
  })), "\xA0", isRestrictionJustificationEnabled && justificationSelectSection, React.createElement(PlainButton, {
    className: "bdl-ContactRestrictionNotice-removeBtn",
    "data-resin-target": "removeBtn",
    onClick: onRemoveRestrictedExternalContacts
  }, React.createElement(FormattedMessage, _extends({}, removeButtonLabelMessage, {
    values: {
      count: restrictedExternalContactCount
    }
  })))));
};

ContactRestrictionNotice.displayName = 'ContactRestrictionNotice';
ContactRestrictionNotice.defaultProps = {
  justificationReasons: [],
  onRemoveRestrictedExternalContacts: noop,
  onSelectJustificationReason: noop
};
export { ContactRestrictionNotice as ContactRestrictionNoticeComponent };
export default injectIntl(ContactRestrictionNotice);
//# sourceMappingURL=ContactRestrictionNotice.js.map