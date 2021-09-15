function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { ANYONE_WITH_LINK, ANYONE_IN_COMPANY, PEOPLE_IN_ITEM } from './constants';
import SharedLinkAccessDescription from './SharedLinkAccessDescription';
import messages from './messages';

var SharedLinkAccessLabel = function SharedLinkAccessLabel(_ref) {
  var _messageKeyMap;

  var accessLevel = _ref.accessLevel,
      enterpriseName = _ref.enterpriseName,
      hasDescription = _ref.hasDescription,
      itemType = _ref.itemType;
  var messageKeyMap = (_messageKeyMap = {}, _defineProperty(_messageKeyMap, ANYONE_WITH_LINK, 'peopleWithTheLinkText'), _defineProperty(_messageKeyMap, ANYONE_IN_COMPANY, enterpriseName === '' ? 'peopleInYourCompany' : 'peopleInEnterpriseName'), _defineProperty(_messageKeyMap, PEOPLE_IN_ITEM, itemType === 'folder' ? 'peopleInThisFolder' : 'peopleInThisFile'), _messageKeyMap);
  var messageName;

  if (accessLevel) {
    messageName = messageKeyMap[accessLevel];
  } else {
    return null;
  }

  return hasDescription ? React.createElement("span", null, React.createElement("strong", null, React.createElement(FormattedMessage, _extends({}, messages[messageName], {
    values: {
      enterpriseName: enterpriseName
    }
  }))), React.createElement(SharedLinkAccessDescription, {
    accessLevel: accessLevel,
    enterpriseName: enterpriseName,
    itemType: itemType
  })) : React.createElement(FormattedMessage, _extends({}, messages[messageName], {
    values: {
      enterpriseName: enterpriseName
    }
  }));
};

export default SharedLinkAccessLabel;
//# sourceMappingURL=SharedLinkAccessLabel.js.map