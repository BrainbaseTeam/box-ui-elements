function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Classification, { getClassificationLabelColor } from '../classification';
import messages from './messages';

function getTitle(isEmailLinkSectionExpanded, showCollaboratorList, item) {
  var name = item.name;
  var title;

  if (isEmailLinkSectionExpanded) {
    title = React.createElement(FormattedMessage, _extends({}, messages.emailModalTitle, {
      values: {
        itemName: name
      }
    }));
  } else if (showCollaboratorList) {
    title = React.createElement(FormattedMessage, _extends({}, messages.collaboratorListTitle, {
      values: {
        itemName: name
      }
    }));
  } else {
    title = React.createElement(FormattedMessage, _extends({}, messages.modalTitle, {
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
      canUserSeeClassification = item.canUserSeeClassification,
      classification = item.classification;
  var classificationColor = getClassificationLabelColor(bannerPolicy);
  return React.createElement(React.Fragment, null, React.createElement("span", {
    className: "bdl-UnifiedShareModalTitle"
  }, title), canUserSeeClassification && React.createElement(Classification, {
    definition: bannerPolicy ? bannerPolicy.body : undefined,
    messageStyle: "tooltip",
    name: classification,
    color: classificationColor,
    className: "bdl-UnifiedShareModalTitle-classification"
  }));
};

export default UnifiedShareModalTitle;
//# sourceMappingURL=UnifiedShareModalTitle.js.map