function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Versions Item Badge component
 * @author Box
 */
import * as React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import messages from './messages';
import './VersionsItemBadge.scss';

var VersionsItemBadge = function VersionsItemBadge(_ref) {
  var intl = _ref.intl,
      versionNumber = _ref.versionNumber;
  var intlValues = {
    versionNumber: versionNumber
  };
  return React.createElement("div", {
    "aria-label": intl.formatMessage(messages.versionNumberLabel, intlValues),
    className: "bcs-VersionsItemBadge"
  }, React.createElement(FormattedMessage, _extends({}, messages.versionNumberBadge, {
    values: intlValues
  })));
};

export default injectIntl(VersionsItemBadge);
//# sourceMappingURL=VersionsItemBadge.js.map