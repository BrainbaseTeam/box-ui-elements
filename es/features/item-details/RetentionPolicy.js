function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { FormattedDate, FormattedMessage } from 'react-intl';
import PlainButton from '../../components/plain-button';
import messages from './messages';
var datetimeOptions = {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
};

var RetentionPolicy = function RetentionPolicy(_ref) {
  var dispositionTime = _ref.dispositionTime,
      openModal = _ref.openModal,
      policyType = _ref.policyType,
      retentionPolicyDescription = _ref.retentionPolicyDescription;

  if (!retentionPolicyDescription) {
    return null;
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormattedMessage, _extends({
    tagName: "dt"
  }, messages.retentionPolicyDescription)), /*#__PURE__*/React.createElement("dd", null, retentionPolicyDescription), policyType !== 'indefinite' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormattedMessage, _extends({
    tagName: "dt"
  }, messages.retentionPolicyExpiration)), dispositionTime ? /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement(FormattedDate, _extends({
    value: new Date(dispositionTime)
  }, datetimeOptions)), openModal ? /*#__PURE__*/React.createElement(PlainButton, {
    className: "lnk",
    onClick: openModal
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.retentionPolicyExtend)) : null) : null) : null);
};

export default RetentionPolicy;
//# sourceMappingURL=RetentionPolicy.js.map