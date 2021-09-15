import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { ANONYMOUS_USER_ID } from './constants';

var formatUser = function formatUser(_ref, intl) {
  var email = _ref.email,
      id = _ref.id,
      name = _ref.name;
  var isComponent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var anonymousUser = messages.anonymousUser,
      unknownUser = messages.unknownUser;
  var targetUser = isComponent || !intl ? React.createElement(FormattedMessage, unknownUser) : intl.formatMessage(unknownUser);
  var targetUserInfo = "(".concat(email || id, ")");

  if (id === ANONYMOUS_USER_ID) {
    targetUser = isComponent || !intl ? React.createElement(FormattedMessage, anonymousUser) : intl.formatMessage(anonymousUser);
    targetUserInfo = '';
  } else if (name) {
    targetUser = name;
    targetUserInfo = "(".concat(email || id, ")");
  } else if (email) {
    targetUser = id;
    targetUserInfo = "(".concat(email || id, ")");
  }

  var formattedUser = isComponent ? React.createElement(React.Fragment, null, targetUser, targetUserInfo ? " ".concat(targetUserInfo) : '') : "".concat(String(targetUser), " ").concat(targetUserInfo).trim();
  return formattedUser;
};

var FormattedUser = function FormattedUser(props) {
  return formatUser(props, undefined, true);
};

export { formatUser };
export default FormattedUser;
//# sourceMappingURL=FormattedUser.js.map