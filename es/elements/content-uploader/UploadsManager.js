/**
 * 
 * @file Uploads manager
 */
import React from 'react';
import classNames from 'classnames';
import ItemList from './ItemList';
import OverallUploadsProgressBar from './OverallUploadsProgressBar';
import './UploadsManager.scss';
import { STATUS_ERROR } from '../../constants';

var UploadsManager = function UploadsManager(_ref) {
  var items = _ref.items,
      view = _ref.view,
      onItemActionClick = _ref.onItemActionClick,
      onRemoveActionClick = _ref.onRemoveActionClick,
      onUploadsManagerActionClick = _ref.onUploadsManagerActionClick,
      toggleUploadsManager = _ref.toggleUploadsManager,
      isExpanded = _ref.isExpanded,
      isVisible = _ref.isVisible,
      isResumableUploadsEnabled = _ref.isResumableUploadsEnabled,
      isDragging = _ref.isDragging;

  /**
   * Keydown handler for progress bar
   *
   * @param {SyntheticKeyboardEvent} event
   * @return {void}
   */
  var handleProgressBarKeyDown = function handleProgressBarKeyDown(event) {
    switch (event.key) {
      case 'Enter':
      case 'Space':
        toggleUploadsManager();
        break;

      default: // noop

    }
  };

  var numFailedUploads = 0;
  var totalSize = 0;
  var totalUploaded = 0;
  items.forEach(function (item) {
    if (item.status !== STATUS_ERROR && !item.isFolder) {
      totalSize += item.size;
      totalUploaded += item.size * item.progress / 100.0;
    } else if (item.status === STATUS_ERROR) {
      numFailedUploads += 1;
    }
  });
  var percent = totalUploaded / totalSize * 100;
  var isResumeVisible = isResumableUploadsEnabled && numFailedUploads > 0;
  var hasMultipleFailedUploads = numFailedUploads > 1;
  return /*#__PURE__*/React.createElement("div", {
    "data-resin-component": "uploadsmanager",
    "data-resin-feature": "uploads",
    className: classNames('be bcu-uploads-manager-container', {
      'bcu-is-expanded': isExpanded,
      'bcu-is-visible': isVisible
    })
  }, /*#__PURE__*/React.createElement(OverallUploadsProgressBar, {
    isDragging: isDragging,
    isExpanded: isExpanded,
    isResumeVisible: isResumeVisible,
    isVisible: isVisible,
    hasMultipleFailedUploads: hasMultipleFailedUploads,
    onClick: toggleUploadsManager,
    onKeyDown: handleProgressBarKeyDown,
    onUploadsManagerActionClick: onUploadsManagerActionClick,
    percent: percent,
    view: view
  }), /*#__PURE__*/React.createElement("div", {
    className: "bcu-uploads-manager-item-list"
  }, /*#__PURE__*/React.createElement(ItemList, {
    isResumableUploadsEnabled: isResumableUploadsEnabled,
    items: items,
    onClick: onItemActionClick,
    onRemoveClick: onRemoveActionClick,
    view: view
  })));
};

export default UploadsManager;
//# sourceMappingURL=UploadsManager.js.map