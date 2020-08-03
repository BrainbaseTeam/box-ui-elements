function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Function to render the progress table cell
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../common/messages';
import ItemProgress from './ItemProgress';
import { ERROR_CODE_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, ERROR_CODE_ITEM_NAME_IN_USE, ERROR_CODE_ITEM_NAME_INVALID, ERROR_CODE_UPLOAD_PENDING_APP_FOLDER_SIZE_LIMIT, ERROR_CODE_UPLOAD_STORAGE_LIMIT_EXCEEDED, ERROR_CODE_UPLOAD_CHILD_FOLDER_FAILED, STATUS_ERROR, STATUS_IN_PROGRESS, STATUS_STAGED } from '../../constants';

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
      return /*#__PURE__*/React.createElement(FormattedMessage, messages.uploadsOneOrMoreChildFoldersFailedToUploadMessage);

    case ERROR_CODE_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED:
      return /*#__PURE__*/React.createElement(FormattedMessage, messages.uploadsFileSizeLimitExceededErrorMessage);

    case ERROR_CODE_ITEM_NAME_IN_USE:
      return /*#__PURE__*/React.createElement(FormattedMessage, messages.uploadsItemNameInUseErrorMessage);

    case ERROR_CODE_ITEM_NAME_INVALID:
      return /*#__PURE__*/React.createElement(FormattedMessage, _extends({}, messages.uploadsProvidedFolderNameInvalidMessage, {
        values: {
          name: itemName
        }
      }));

    case ERROR_CODE_UPLOAD_STORAGE_LIMIT_EXCEEDED:
      return /*#__PURE__*/React.createElement(FormattedMessage, messages.uploadsStorageLimitErrorMessage);

    case ERROR_CODE_UPLOAD_PENDING_APP_FOLDER_SIZE_LIMIT:
      return /*#__PURE__*/React.createElement(FormattedMessage, messages.uploadsPendingFolderSizeLimitErrorMessage);

    default:
      return /*#__PURE__*/React.createElement(FormattedMessage, messages.uploadsDefaultErrorMessage);
  }
};

export default (function () {
  return function (_ref) {
    var rowData = _ref.rowData;
    var status = rowData.status,
        _rowData$error = rowData.error,
        error = _rowData$error === void 0 ? {} : _rowData$error,
        name = rowData.name,
        isFolder = rowData.isFolder;
    var code = error.code;

    if (isFolder && status !== STATUS_ERROR) {
      return null;
    }

    switch (status) {
      case STATUS_IN_PROGRESS:
      case STATUS_STAGED:
        return /*#__PURE__*/React.createElement(ItemProgress, rowData);

      case STATUS_ERROR:
        return getErrorMessage(code, name);

      default:
        return null;
    }
  };
});
//# sourceMappingURL=progressCellRenderer.js.map