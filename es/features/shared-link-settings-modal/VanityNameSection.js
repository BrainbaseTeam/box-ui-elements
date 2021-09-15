function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { bdlGray62 } from '../../styles/variables';
import Checkbox from '../../components/checkbox';
import TextInput from '../../components/text-input';
import Fieldset from '../../components/fieldset';
import QuarantineBadge from '../../icons/badges/QuarantineBadge';
import messages from './messages';

var VanityNameSection = function VanityNameSection(_ref) {
  var canChangeVanityName = _ref.canChangeVanityName,
      error = _ref.error,
      formatMessage = _ref.intl.formatMessage,
      isVanityEnabled = _ref.isVanityEnabled,
      vanityName = _ref.vanityName,
      _ref$vanityNameInputP = _ref.vanityNameInputProps,
      vanityNameInputProps = _ref$vanityNameInputP === void 0 ? {} : _ref$vanityNameInputP,
      serverURL = _ref.serverURL,
      onChange = _ref.onChange,
      onCheckboxChange = _ref.onCheckboxChange;
  var inputValue = canChangeVanityName ? vanityName : vanityName || formatMessage(messages.vanityNameNotSet);
  var vanityURLInput = React.createElement("div", {
    className: "vanity-name-content"
  }, React.createElement(TextInput, _extends({
    description: React.createElement("span", null, React.createElement(QuarantineBadge, {
      color: bdlGray62
    }), React.createElement(FormattedMessage, messages.vanityURLWarning)),
    hideLabel: true,
    disabled: !canChangeVanityName,
    error: error,
    name: "vanityName",
    onChange: onChange,
    placeholder: formatMessage(messages.vanityNamePlaceholder),
    type: "text",
    value: inputValue
  }, vanityNameInputProps)), (canChangeVanityName || !!vanityName) && React.createElement("p", {
    className: "custom-url-preview"
  }, "".concat(serverURL).concat(vanityName)));
  return React.createElement("div", null, React.createElement("hr", null), React.createElement(Fieldset, {
    className: "be vanity-name-section",
    title: React.createElement(FormattedMessage, messages.customURLLabel)
  }, React.createElement(Checkbox, {
    label: React.createElement(FormattedMessage, messages.vanityURLEnableText),
    isChecked: isVanityEnabled,
    isDisabled: !canChangeVanityName,
    subsection: isVanityEnabled ? vanityURLInput : undefined,
    onChange: onCheckboxChange
  })));
};

VanityNameSection.propTypes = {
  canChangeVanityName: PropTypes.bool.isRequired,
  error: PropTypes.string,
  intl: PropTypes.any,
  isVanityEnabled: PropTypes.bool.isRequired,
  vanityName: PropTypes.string.isRequired,
  vanityNameInputProps: PropTypes.object,
  serverURL: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onCheckboxChange: PropTypes.func
};
export { VanityNameSection as VanityNameSectionBase };
export default injectIntl(VanityNameSection);
//# sourceMappingURL=VanityNameSection.js.map