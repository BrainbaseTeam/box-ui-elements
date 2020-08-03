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
      isDownloadAvailable = _ref.isDownloadAvailable,
      isDownloadEnabled = _ref.isDownloadEnabled,
      onChange = _ref.onChange;

  if (!isDownloadAvailable && !isDirectLinkAvailable) {
    return null;
  }

  var directLinkSection = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TextInputWithCopyButton, _extends({
    className: "direct-link-input",
    label: /*#__PURE__*/React.createElement(FormattedMessage, messages.directLinkLabel),
    type: "url",
    value: directLink
  }, directLinkInputProps)));
  var tooltipMessage = classification ? _objectSpread({}, messages.directDownloadBlockedByAccessPolicyWithClassification) : _objectSpread({}, messages.directDownloadBlockedByAccessPolicyWithoutClassification);
  var allowDownloadSectionClass = classNames('bdl-AllowDownloadSection', {
    'bdl-is-disabled': isDirectLinkUnavailableDueToAccessPolicy
  });
  var isDirectLinkSectionVisible = (isDirectLinkAvailable || isDirectLinkUnavailableDueToDownloadSettings) && isDownloadEnabled;

  if (isDownloadAvailable) {
    return /*#__PURE__*/React.createElement("div", {
      className: allowDownloadSectionClass
    }, /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(Tooltip, {
      isDisabled: !isDirectLinkUnavailableDueToAccessPolicy,
      text: /*#__PURE__*/React.createElement(FormattedMessage, tooltipMessage),
      position: "middle-left"
    }, /*#__PURE__*/React.createElement(Fieldset, {
      disabled: isDirectLinkUnavailableDueToAccessPolicy,
      title: /*#__PURE__*/React.createElement(FormattedMessage, messages.allowDownloadTitle)
    }, /*#__PURE__*/React.createElement(Checkbox, _extends({
      isChecked: isDownloadEnabled,
      isDisabled: !canChangeDownload || isDirectLinkUnavailableDueToAccessPolicy,
      label: /*#__PURE__*/React.createElement(FormattedMessage, messages.allowDownloadLabel),
      name: "isDownloadEnabled",
      onChange: onChange
    }, downloadCheckboxProps)), isDirectLinkSectionVisible && directLinkSection)));
  } // When download section not available but direct link is available


  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("hr", null), directLinkSection);
};

AllowDownloadSection.propTypes = {
  canChangeDownload: PropTypes.bool.isRequired,
  classification: PropTypes.object,
  directLink: PropTypes.string.isRequired,
  directLinkInputProps: PropTypes.object,
  downloadCheckboxProps: PropTypes.object,
  isDirectLinkAvailable: PropTypes.bool.isRequired,
  isDirectLinkUnavailableDueToAccessPolicy: PropTypes.bool,
  isDirectLinkUnavailableDueToDownloadSettings: PropTypes.bool.isRequired,
  isDownloadAvailable: PropTypes.bool.isRequired,
  isDownloadEnabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};
export default AllowDownloadSection;
//# sourceMappingURL=AllowDownloadSection.js.map