function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import Toggle from '../../components/toggle';
import { RadioButton, RadioGroup } from '../../components/radio';
import Link from '../../components/link/Link';
import IconAlertDefault from '../../icons/general/IconAlertDefault';
import messages from './messages';
import './CascadePolicy.scss';
var COMMUNITY_LINK = 'https://community.box.com/t5/Organizing-and-Tracking-Content/Metadata/ta-p/30765';

var CascadePolicy = function CascadePolicy(_ref) {
  var canEdit = _ref.canEdit,
      isCascadingEnabled = _ref.isCascadingEnabled,
      isCascadingOverwritten = _ref.isCascadingOverwritten,
      isCustomMetadata = _ref.isCustomMetadata,
      onCascadeToggle = _ref.onCascadeToggle,
      onCascadeModeChange = _ref.onCascadeModeChange,
      shouldShowCascadeOptions = _ref.shouldShowCascadeOptions;
  var readOnlyState = isCascadingEnabled ? React.createElement("div", {
    className: "metadata-cascade-notice"
  }, React.createElement(FormattedMessage, messages.metadataCascadePolicyEnabledInfo)) : null;
  return canEdit ? React.createElement(React.Fragment, null, React.createElement("div", {
    className: "metadata-cascade-editor"
  }, React.createElement("div", {
    className: "metadata-cascade-enable"
  }, React.createElement("div", null, React.createElement(FormattedMessage, _extends({
    tagName: "strong"
  }, messages.enableCascadePolicy)), !isCustomMetadata && React.createElement(Toggle, {
    className: "metadata-cascade-toggle ".concat(isCascadingEnabled ? 'cascade-on' : 'cascade-off'),
    isOn: isCascadingEnabled,
    label: "",
    onChange: function onChange(e) {
      return onCascadeToggle(e.target.checked);
    }
  })), !isCustomMetadata ? React.createElement("div", {
    className: "cascade-policy-text"
  }, React.createElement(FormattedMessage, messages.applyCascadePolicyText), "\xA0", React.createElement(Link, {
    className: "cascade-policy-learnmore-link",
    href: COMMUNITY_LINK,
    target: "_blank"
  }, React.createElement(FormattedMessage, messages.cascadePolicyLearnMore))) : React.createElement("div", null, React.createElement(FormattedMessage, messages.cannotApplyCascadePolicyText)))), shouldShowCascadeOptions && React.createElement("div", {
    className: "metadata-cascade-editor"
  }, React.createElement("div", {
    className: "metadata-cascading-mode"
  }, React.createElement(FormattedMessage, messages.cascadePolicyModeQuestion), React.createElement("div", {
    className: "metadata-operation-not-immediate"
  }, React.createElement(IconAlertDefault, null), React.createElement("span", null, React.createElement(FormattedMessage, messages.operationNotImmediate))), React.createElement(RadioGroup, {
    className: "metadata-cascading-options",
    onChange: function onChange(e) {
      return onCascadeModeChange(e.target.value === 'overwrite');
    },
    value: isCascadingOverwritten ? 'overwrite' : 'skip'
  }, React.createElement(RadioButton, {
    label: React.createElement(FormattedMessage, messages.cascadePolicySkipMode),
    value: "skip"
  }), React.createElement(RadioButton, {
    label: React.createElement(FormattedMessage, messages.cascadePolicyOverwriteMode),
    value: "overwrite"
  }))))) : readOnlyState;
};

export default CascadePolicy;
//# sourceMappingURL=CascadePolicy.js.map