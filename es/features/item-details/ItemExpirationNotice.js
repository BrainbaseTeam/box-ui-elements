function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import InlineNotice from '../../components/inline-notice';
import messages from './messages';
var FILE = 'file';
var FOLDER = 'folder';
var WEBLINK = 'web_link';

var ItemExpirationNotice = function ItemExpirationNotice(_ref) {
  var expiration = _ref.expiration,
      itemType = _ref.itemType;
  var messageID = '';

  switch (itemType) {
    case FILE:
      messageID = 'fileExpiration';
      break;

    case FOLDER:
      messageID = 'folderExpiration';
      break;

    case WEBLINK:
      messageID = 'bookmarkExpiration';
      break;
    // no default
  }

  return React.createElement(InlineNotice, null, React.createElement(FormattedMessage, _extends({}, messages[messageID], {
    values: {
      expiration: expiration
    }
  })));
};

ItemExpirationNotice.propTypes = {
  /** a localized, human-readable string/node representing the expiration date */
  expiration: PropTypes.node.isRequired,

  /** the type of the item */
  itemType: PropTypes.oneOf([FILE, FOLDER, WEBLINK]).isRequired
};
export default ItemExpirationNotice;
//# sourceMappingURL=ItemExpirationNotice.js.map