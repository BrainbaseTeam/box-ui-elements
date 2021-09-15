function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ANYONE_WITH_LINK, ANYONE_IN_COMPANY, PEOPLE_IN_ITEM } from './constants';
import messages from './messages';

var SharedLinkAccessDescription = function SharedLinkAccessDescription(_ref) {
  var accessLevel = _ref.accessLevel,
      enterpriseName = _ref.enterpriseName,
      itemType = _ref.itemType;
  var description;

  switch (accessLevel) {
    case ANYONE_WITH_LINK:
      description = messages.peopleWithLinkDescription;
      break;

    case ANYONE_IN_COMPANY:
      if (itemType === 'folder') {
        description = enterpriseName ? messages.peopleInSpecifiedCompanyCanAccessFolder : messages.peopleInCompanyCanAccessFolder;
      } else {
        description = enterpriseName ? messages.peopleInSpecifiedCompanyCanAccessFile : messages.peopleInCompanyCanAccessFile;
      }

      break;

    case PEOPLE_IN_ITEM:
      description = itemType === 'folder' ? messages.peopleInItemCanAccessFolder : messages.peopleInItemCanAccessFile;
      break;

    default:
      return null;
  }

  return React.createElement("small", {
    className: "usm-menu-description"
  }, React.createElement(FormattedMessage, _extends({}, description, {
    values: {
      company: enterpriseName
    }
  })));
};

export default SharedLinkAccessDescription;
//# sourceMappingURL=SharedLinkAccessDescription.js.map