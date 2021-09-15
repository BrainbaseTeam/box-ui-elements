function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Function to render the progress table cell
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Browser from '../../utils/Browser';
import messages from '../common/messages';
import ItemProgress from './ItemProgress';
import { ERROR_CODE_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, ERROR_CODE_ITEM_NAME_IN_USE, ERROR_CODE_ITEM_NAME_INVALID, ERROR_CODE_UPLOAD_PENDING_APP_FOLDER_SIZE_LIMIT, ERROR_CODE_UPLOAD_STORAGE_LIMIT_EXCEEDED, ERROR_CODE_UPLOAD_CHILD_FOLDER_FAILED, ERROR_CODE_UPLOAD_BAD_DIGEST, ERROR_CODE_UPLOAD_FAILED_PACKAGE, STATUS_IN_PROGRESS, STATUS_STAGED, STATUS_ERROR } from '../../constants';

/**
 * Get error message for a specific error code
 *
 * @param {string} [errorCode]
 * @param {string} [itemName]
 * @returns {FormattedMessage}
 */
var getErrorMessage = function getErrorMessage(errorCode, itemName) {
  switch (errorCode) {
    case ERROR_CODE_UPLOAD_CHILD_FOLDER_FAILED:
      return React.createElement(FormattedMessage, messages.uploadsOneOrMoreChildFoldersFailedToUploadMessage);

    case ERROR_CODE_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED:
      return React.createElement(FormattedMessage, messages.uploadsFileSizeLimitExceededErrorMessage);

    case ERROR_CODE_ITEM_NAME_IN_USE:
      return React.createElement(FormattedMessage, messages.uploadsItemNameInUseErrorMessage);

    case ERROR_CODE_ITEM_NAME_INVALID:
      return React.createElement(FormattedMessage, _extends({}, messages.uploadsProvidedFolderNameInvalidMessage, {
        values: {
          name: itemName
        }
      }));

    case ERROR_CODE_UPLOAD_STORAGE_LIMIT_EXCEEDED:
      return React.createElement(FormattedMessage, messages.uploadsStorageLimitErrorMessage);

    case ERROR_CODE_UPLOAD_PENDING_APP_FOLDER_SIZE_LIMIT:
      return React.createElement(FormattedMessage, messages.uploadsPendingFolderSizeLimitErrorMessage);

    case ERROR_CODE_UPLOAD_FAILED_PACKAGE:
      return React.createElement(FormattedMessage, messages.uploadsPackageUploadErrorMessage);

    default:
      return React.createElement(FormattedMessage, messages.uploadsDefaultErrorMessage);
  }
};

export default (function () {
  return function (_ref) {
    var rowData = _ref.rowData;
    var status = rowData.status,
        _rowData$error = rowData.error,
        error = _rowData$error === void 0 ? {} : _rowData$error,
        name = rowData.name,
        isFolder = rowData.isFolder,
        file = rowData.file;
    var code = error.code;

    if (isFolder && status !== STATUS_ERROR) {
      return null;
    }

    switch (status) {
      case STATUS_IN_PROGRESS:
      case STATUS_STAGED:
        return React.createElement(ItemProgress, rowData);

      case STATUS_ERROR:
        if (Browser.isSafari() && code === ERROR_CODE_UPLOAD_BAD_DIGEST && file.name.indexOf('.zip') !== -1) {
          return getErrorMessage(ERROR_CODE_UPLOAD_FAILED_PACKAGE, file.name);
        }

        return getErrorMessage(code, name);

      default:
        return null;
    }
  };
});
//# sourceMappingURL=progressCellRenderer.js.map