function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import InlineNotice from '../../components/inline-notice';
import messages from './messages';

var SharedLinkExpirationNotice = function SharedLinkExpirationNotice(_ref) {
  var expiration = _ref.expiration;
  return React.createElement(InlineNotice, null, React.createElement(FormattedMessage, _extends({}, messages.sharedLinkExpiration, {
    values: {
      expiration: expiration
    }
  })));
};

SharedLinkExpirationNotice.propTypes = {
  /** a localized, human-readable string/node representing the expiration date */
  expiration: PropTypes.node.isRequired
};
export default SharedLinkExpirationNotice;
//# sourceMappingURL=SharedLinkExpirationNotice.js.map