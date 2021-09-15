function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import Checkbox from '../../components/checkbox';
import TextInputWithCopyButton from '../../components/text-input-with-copy-button';
import Fieldset from '../../components/fieldset';
import Tooltip from '../../components/tooltip';
import messages from './messages';
import './AllowDownloadSection.scss';

var AllowDownloadSection = function AllowDownloadSection(_ref) {
  var canChangeDownload = _ref.canChangeDownload,
      classification = _ref.classification,
      directLink = _ref.directLink,
      _ref$directLinkInputP = _ref.directLinkInputProps,
      directLinkInputProps = _ref$directLinkInputP === void 0 ? {} : _ref$directLinkInputP,
      _ref$downloadCheckbox = _ref.downloadCheckboxProps,
      downloadCheckboxProps = _ref$downloadCheckbox === void 0 ? {} : _ref$downloadCheckbox,
      isDirectLinkAvailable = _ref.isDirectLinkAvailable,
      isDirectLinkUnavailableDueToDownloadSettings = _ref.isDirectLinkUnavailableDueToDownloadSettings,
      isDirectLinkUnavailableDueToAccessPolicy = _ref.isDirectLinkUnavailableDueToAccessPolicy,
      isDirectLinkUnavailableDueToMaliciousContent = _ref.isDirectLinkUnavailableDueToMaliciousContent,
      isDownloadAvailable = _ref.isDownloadAvailable,
      isDownloadEnabled = _ref.isDownloadEnabled,
      onChange = _ref.onChange;

  if (!isDownloadAvailable && !isDirectLinkAvailable) {
    return null;
  }

  var directLinkSection = React.createElement("div", null, React.createElement(TextInputWithCopyButton, _extends({
    className: "direct-link-input",
    label: React.createElement(FormattedMessage, messages.directLinkLabel),
    type: "url",
    value: directLink
  }, directLinkInputProps)));
  var isDirectLinkUnavailable = isDirectLinkUnavailableDueToAccessPolicy || isDirectLinkUnavailableDueToMaliciousContent;
  var allowDownloadSectionClass = classNames('bdl-AllowDownloadSection', {
    'bdl-is-disabled': isDirectLinkUnavailable
  });
  var isDirectLinkSectionVisible = (isDirectLinkAvailable || isDirectLinkUnavailableDueToDownloadSettings) && isDownloadEnabled;
  var tooltipMessage = null;

  if (isDirectLinkUnavailableDueToMaliciousContent) {
    tooltipMessage = _objectSpread({}, messages.directDownloadBlockedByMaliciousContent);
  } else if (classification) {
    tooltipMessage = _objectSpread({}, messages.directDownloadBlockedByAccessPolicyWithClassification);
  } else {
    tooltipMessage = _objectSpread({}, messages.directDownloadBlockedByAccessPolicyWithoutClassification);
  }

  if (isDownloadAvailable) {
    return React.createElement("div", {
      className: allowDownloadSectionClass
    }, React.createElement("hr", null), React.createElement(Tooltip, {
      isDisabled: !isDirectLinkUnavailable,
      text: React.createElement(FormattedMessage, tooltipMessage),
      position: "middle-left"
    }, React.createElement(Fieldset, {
      className: "be",
      disabled: isDirectLinkUnavailable,
      title: React.createElement(FormattedMessage, messages.allowDownloadTitle)
    }, React.createElement(Checkbox, _extends({
      isChecked: isDownloadEnabled,
      isDisabled: !canChangeDownload || isDirectLinkUnavailable,
      label: React.createElement(FormattedMessage, messages.allowDownloadLabel),
      name: "isDownloadEnabled",
      onChange: onChange
    }, downloadCheckboxProps)), isDirectLinkSectionVisible && directLinkSection)));
  } // When download section not available but direct link is available


  return React.createElement("div", null, React.createElement("hr", null), directLinkSection);
};

AllowDownloadSection.propTypes = {
  canChangeDownload: PropTypes.bool.isRequired,
  classification: PropTypes.string,
  directLink: PropTypes.string.isRequired,
  directLinkInputProps: PropTypes.object,
  downloadCheckboxProps: PropTypes.object,
  isDirectLinkAvailable: PropTypes.bool.isRequired,
  isDirectLinkUnavailableDueToMaliciousContent: PropTypes.bool,
  isDirectLinkUnavailableDueToAccessPolicy: PropTypes.bool,
  isDirectLinkUnavailableDueToDownloadSettings: PropTypes.bool.isRequired,
  isDownloadAvailable: PropTypes.bool.isRequired,
  isDownloadEnabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};
export default AllowDownloadSection;
//# sourceMappingURL=AllowDownloadSection.js.map