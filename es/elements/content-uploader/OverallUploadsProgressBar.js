/**
 * 
 * @file Overall uploads progress bar
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../common/messages';
import ProgressBar from './ProgressBar';
import UploadsManagerItemAction from './UploadsManagerAction';
import { VIEW_UPLOAD_IN_PROGRESS, VIEW_UPLOAD_SUCCESS, VIEW_ERROR, VIEW_UPLOAD_EMPTY } from '../../constants';
import './OverallUploadsProgressBar.scss';
/**
 * Get upload status
 *
 * @param {View} view
 * @return {FormattedMessage|string}
 */

var getUploadStatus = function getUploadStatus(view) {
  switch (view) {
    case VIEW_UPLOAD_IN_PROGRESS:
      return React.createElement(FormattedMessage, messages.uploadsManagerUploadInProgress);

    case VIEW_UPLOAD_SUCCESS:
      return React.createElement(FormattedMessage, messages.uploadsManagerUploadComplete);

    case VIEW_UPLOAD_EMPTY:
      return React.createElement(FormattedMessage, messages.uploadsManagerUploadPrompt);

    case VIEW_ERROR:
      return React.createElement(FormattedMessage, messages.uploadsManagerUploadFailed);

    default:
      return '';
  }
};
/**
 * Get overall upload progress percentage
 *
 * @param {string} view
 * @param {number} percent
 */


var getPercent = function getPercent(view, percent) {
  switch (view) {
    case VIEW_UPLOAD_SUCCESS:
      return 100;

    case VIEW_UPLOAD_EMPTY:
    case VIEW_ERROR:
      return 0;

    default:
      return percent;
  }
};

var OverallUploadsProgressBar = function OverallUploadsProgressBar(_ref) {
  var percent = _ref.percent,
      view = _ref.view,
      onClick = _ref.onClick,
      onKeyDown = _ref.onKeyDown,
      onUploadsManagerActionClick = _ref.onUploadsManagerActionClick,
      isDragging = _ref.isDragging,
      isResumeVisible = _ref.isResumeVisible,
      isVisible = _ref.isVisible,
      isExpanded = _ref.isExpanded,
      hasMultipleFailedUploads = _ref.hasMultipleFailedUploads;
  // Show the upload prompt and set progress to 0 when the uploads manager
  // is invisible or is having files dragged to it
  var shouldShowPrompt = isDragging || !isVisible;
  var status = shouldShowPrompt ? React.createElement(FormattedMessage, messages.uploadsManagerUploadPrompt) : getUploadStatus(view);
  var updatedPercent = shouldShowPrompt ? 0 : getPercent(view, percent);
  return React.createElement("div", {
    className: "bcu-overall-progress-bar",
    "data-resin-target": isExpanded ? 'uploadcollapse' : 'uploadexpand',
    onClick: onClick,
    onKeyDown: onKeyDown,
    role: "button",
    tabIndex: isVisible ? '0' : '-1'
  }, React.createElement("span", {
    className: "bcu-upload-status"
  }, status), React.createElement(ProgressBar, {
    percent: updatedPercent
  }), isResumeVisible && React.createElement(UploadsManagerItemAction, {
    hasMultipleFailedUploads: hasMultipleFailedUploads,
    onClick: onUploadsManagerActionClick
  }), React.createElement("span", {
    className: "bcu-uploads-manager-toggle"
  }));
};

export default OverallUploadsProgressBar;
//# sourceMappingURL=OverallUploadsProgressBar.js.map