function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { PEOPLE_WITH_LINK, PEOPLE_IN_COMPANY, PEOPLE_IN_ITEM } from './constants';
import { accessLevelPropType } from './propTypes';
import messages from './messages';

var AccessDescription = function AccessDescription(props) {
  var accessLevel = props.accessLevel,
      enterpriseName = props.enterpriseName,
      isDownloadAllowed = props.isDownloadAllowed,
      isEditAllowed = props.isEditAllowed,
      isPreviewAllowed = props.isPreviewAllowed,
      itemType = props.itemType;
  var description;

  switch (accessLevel) {
    case PEOPLE_WITH_LINK:
      if (itemType !== 'folder' && isEditAllowed) {
        description = messages.peopleWithLinkCanEditFile;
      } else if (isDownloadAllowed) {
        description = itemType === 'folder' ? messages.peopleWithLinkCanDownloadFolder : messages.peopleWithLinkCanDownloadFile;
      } else {
        description = itemType === 'folder' ? messages.peopleWithLinkCanViewFolder : messages.peopleWithLinkCanViewFile;
      }

      break;

    case PEOPLE_IN_COMPANY:
      if (itemType === 'folder') {
        if (isDownloadAllowed) {
          description = enterpriseName ? messages.peopleInSpecifiedCompanyCanDownloadFolder : messages.peopleInCompanyCanDownloadFolder;
        } else {
          description = enterpriseName ? messages.peopleInSpecifiedCompanyCanViewFolder : messages.peopleInCompanyCanViewFolder;
        }
      } else if (isEditAllowed) {
        description = enterpriseName ? messages.peopleInSpecifiedCompanyCanEditFile : messages.peopleInCompanyCanEditFile;
      } else if (isDownloadAllowed) {
        description = enterpriseName ? messages.peopleInSpecifiedCompanyCanDownloadFile : messages.peopleInCompanyCanDownloadFile;
      } else {
        description = enterpriseName ? messages.peopleInSpecifiedCompanyCanViewFile : messages.peopleInCompanyCanViewFile;
      }

      break;

    case PEOPLE_IN_ITEM:
      if (itemType !== 'folder' && isEditAllowed) {
        description = messages.peopleInItemCanEditFile;
      } else if (isPreviewAllowed && isDownloadAllowed) {
        description = itemType === 'folder' ? messages.peopleInItemCanPreviewAndDownloadFolder : messages.peopleInItemCanPreviewAndDownloadFile;
      } else if (isPreviewAllowed) {
        description = itemType === 'folder' ? messages.peopleInItemCanPreviewFolder : messages.peopleInItemCanPreviewFile;
      } else if (isDownloadAllowed) {
        description = itemType === 'folder' ? messages.peopleInItemCanDownloadFolder : messages.peopleInItemCanDownloadFile;
      } else {
        description = itemType === 'folder' ? messages.peopleInItemCanAccessFolder : messages.peopleInItemCanAccessFile;
      }

      break;

    default:
      return null;
  }

  return React.createElement("p", null, React.createElement(FormattedMessage, _extends({}, description, {
    values: {
      company: enterpriseName
    }
  })));
};

AccessDescription.displayName = 'AccessDescription';
export default AccessDescription;
//# sourceMappingURL=AccessDescription.js.map