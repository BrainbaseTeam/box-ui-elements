function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Classification from '../classification';
import messages from './messages';

function getTitle(isEmailLinkSectionExpanded, showCollaboratorList, item) {
  var name = item.name;
  var title;

  if (isEmailLinkSectionExpanded) {
    title = /*#__PURE__*/React.createElement(FormattedMessage, _extends({}, messages.emailModalTitle, {
      values: {
        itemName: name
      }
    }));
  } else if (showCollaboratorList) {
    title = /*#__PURE__*/React.createElement(FormattedMessage, _extends({}, messages.collaboratorListTitle, {
      values: {
        itemName: name
      }
    }));
  } else {
    title = /*#__PURE__*/React.createElement(FormattedMessage, _extends({}, messages.modalTitle, {
      values: {
        itemName: name
      }
    }));
  }

  return title;
}

var UnifiedShareModalTitle = function UnifiedShareModalTitle(_ref) {
  var isEmailLinkSectionExpanded = _ref.isEmailLinkSectionExpanded,
      showCollaboratorList = _ref.showCollaboratorList,
      item = _ref.item;
  var title = getTitle(isEmailLinkSectionExpanded, showCollaboratorList, item);
  var bannerPolicy = item.bannerPolicy,
      classification = item.classification;
  return /*#__PURE__*/React.createElement("span", {
    className: "bdl-UnifiedShareModalTitle"
  }, title, /*#__PURE__*/React.createElement(Classification, {
    definition: bannerPolicy ? bannerPolicy.body : undefined,
    messageStyle: "tooltip",
    name: classification,
    className: "bdl-UnifiedShareModalTitle-classification"
  }));
};

export default UnifiedShareModalTitle;
//# sourceMappingURL=UnifiedShareModalTitle.js.map