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
  var readOnlyState = isCascadingEnabled ? /*#__PURE__*/React.createElement("div", {
    className: "metadata-cascade-notice"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.metadataCascadePolicyEnabledInfo)) : null;
  return canEdit ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "metadata-cascade-editor"
  }, /*#__PURE__*/React.createElement("div", {
    className: "metadata-cascade-enable"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FormattedMessage, _extends({
    tagName: "strong"
  }, messages.enableCascadePolicy)), !isCustomMetadata && /*#__PURE__*/React.createElement(Toggle, {
    className: "metadata-cascade-toggle ".concat(isCascadingEnabled ? 'cascade-on' : 'cascade-off'),
    isOn: isCascadingEnabled,
    label: "",
    onChange: function onChange(e) {
      return onCascadeToggle(e.target.checked);
    }
  })), !isCustomMetadata ? /*#__PURE__*/React.createElement("div", {
    className: "cascade-policy-text"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.applyCascadePolicyText), "\xA0", /*#__PURE__*/React.createElement(Link, {
    className: "cascade-policy-learnmore-link",
    href: COMMUNITY_LINK,
    target: "_blank"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.cascadePolicyLearnMore))) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FormattedMessage, messages.cannotApplyCascadePolicyText)))), shouldShowCascadeOptions && /*#__PURE__*/React.createElement("div", {
    className: "metadata-cascade-editor"
  }, /*#__PURE__*/React.createElement("div", {
    className: "metadata-cascading-mode"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.cascadePolicyModeQuestion), /*#__PURE__*/React.createElement("div", {
    className: "metadata-operation-not-immediate"
  }, /*#__PURE__*/React.createElement(IconAlertDefault, null), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(FormattedMessage, messages.operationNotImmediate))), /*#__PURE__*/React.createElement(RadioGroup, {
    className: "metadata-cascading-options",
    onChange: function onChange(e) {
      return onCascadeModeChange(e.target.value === 'overwrite');
    },
    value: isCascadingOverwritten ? 'overwrite' : 'skip'
  }, /*#__PURE__*/React.createElement(RadioButton, {
    label: /*#__PURE__*/React.createElement(FormattedMessage, messages.cascadePolicySkipMode),
    value: "skip"
  }), /*#__PURE__*/React.createElement(RadioButton, {
    label: /*#__PURE__*/React.createElement(FormattedMessage, messages.cascadePolicyOverwriteMode),
    value: "overwrite"
  }))))) : readOnlyState;
};

export default CascadePolicy;
//# sourceMappingURL=CascadePolicy.js.map