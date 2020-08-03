function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { PEOPLE_WITH_LINK, PEOPLE_IN_COMPANY, PEOPLE_IN_ITEM } from './constants';
import messages from './messages';

var AccessLabel = function AccessLabel(_ref) {
  var accessLevel = _ref.accessLevel,
      enterpriseName = _ref.enterpriseName,
      itemType = _ref.itemType;

  switch (accessLevel) {
    case PEOPLE_WITH_LINK:
      return /*#__PURE__*/React.createElement(FormattedMessage, messages.peopleWithTheLink);

    case PEOPLE_IN_COMPANY:
      return enterpriseName ? /*#__PURE__*/React.createElement(FormattedMessage, _extends({}, messages.peopleInEnterprise, {
        values: {
          enterpriseName: enterpriseName
        }
      })) : /*#__PURE__*/React.createElement(FormattedMessage, messages.peopleInYourCompany);

    case PEOPLE_IN_ITEM:
      return itemType === 'folder' ? /*#__PURE__*/React.createElement(FormattedMessage, messages.peopleInThisFolder) : /*#__PURE__*/React.createElement(FormattedMessage, messages.peopleInThisFile);

    default:
      return null;
  }
};

export default AccessLabel;
//# sourceMappingURL=AccessLabel.js.map