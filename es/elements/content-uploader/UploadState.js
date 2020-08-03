/**
 * 
 * @file Upload state component
 */
import React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import ErrorEmptyState from '../../icons/states/ErrorEmptyState';
import UploadEmptyState from '../../icons/states/UploadEmptyState';
import UploadSuccessState from '../../icons/states/UploadSuccessState';
import messages from '../common/messages';
import Browser from '../../utils/Browser';
import UploadStateContent from './UploadStateContent';
import { VIEW_ERROR, VIEW_UPLOAD_EMPTY, VIEW_UPLOAD_IN_PROGRESS, VIEW_UPLOAD_SUCCESS } from '../../constants';
import './UploadState.scss';

var UploadState = function UploadState(_ref) {
  var canDrop = _ref.canDrop,
      hasItems = _ref.hasItems,
      isOver = _ref.isOver,
      isTouch = _ref.isTouch,
      view = _ref.view,
      onSelect = _ref.onSelect,
      isFolderUploadEnabled = _ref.isFolderUploadEnabled;
  var icon;
  var content;

  switch (view) {
    case VIEW_ERROR:
      icon = /*#__PURE__*/React.createElement(ErrorEmptyState, null);
      content = /*#__PURE__*/React.createElement(UploadStateContent, {
        message: /*#__PURE__*/React.createElement(FormattedMessage, messages.uploadError)
      });
      break;

    case VIEW_UPLOAD_EMPTY:
      icon = /*#__PURE__*/React.createElement(UploadEmptyState, null);
      /* eslint-disable no-nested-ternary */

      content = canDrop && hasItems ? /*#__PURE__*/React.createElement(UploadStateContent, {
        message: /*#__PURE__*/React.createElement(FormattedMessage, messages.uploadInProgress)
      }) : isTouch ? /*#__PURE__*/React.createElement(UploadStateContent, {
        fileInputLabel: /*#__PURE__*/React.createElement(FormattedMessage, messages.uploadNoDragDrop),
        onChange: onSelect,
        useButton: true
      }) : /*#__PURE__*/React.createElement(UploadStateContent, {
        fileInputLabel: /*#__PURE__*/React.createElement(FormattedMessage, messages.uploadEmptyFileInput),
        folderInputLabel: isFolderUploadEnabled && /*#__PURE__*/React.createElement(FormattedMessage, messages.uploadEmptyFolderInput),
        message: !Browser.isIE() && (isFolderUploadEnabled ? /*#__PURE__*/React.createElement(FormattedMessage, messages.uploadEmptyWithFolderUploadEnabled) : /*#__PURE__*/React.createElement(FormattedMessage, messages.uploadEmptyWithFolderUploadDisabled)),
        onChange: onSelect
      });
      /* eslint-enable no-nested-ternary */

      break;

    case VIEW_UPLOAD_IN_PROGRESS:
      icon = /*#__PURE__*/React.createElement(UploadEmptyState, null);
      content = /*#__PURE__*/React.createElement(UploadStateContent, {
        message: /*#__PURE__*/React.createElement(FormattedMessage, messages.uploadInProgress)
      });
      break;

    case VIEW_UPLOAD_SUCCESS:
      icon = /*#__PURE__*/React.createElement(UploadSuccessState, null);
      content = /*#__PURE__*/React.createElement(UploadStateContent, {
        fileInputLabel: /*#__PURE__*/React.createElement(FormattedMessage, messages.uploadSuccessFileInput),
        folderInputLabel: isFolderUploadEnabled && /*#__PURE__*/React.createElement(FormattedMessage, messages.uploadSuccessFolderInput),
        message: /*#__PURE__*/React.createElement(FormattedMessage, messages.uploadSuccess),
        onChange: onSelect,
        useButton: isTouch
      });
      break;

    default:
      break;

    /* eslint-enable jsx-a11y/label-has-for */
  }

  var className = classNames('bcu-upload-state', {
    'bcu-is-droppable': isOver && canDrop,
    'bcu-is-not-droppable': isOver && !canDrop,
    'bcu-has-items': hasItems
  });
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement("div", null, icon, content), /*#__PURE__*/React.createElement("div", {
    className: "bcu-drag-drop-overlay"
  }));
};

export default UploadState;
//# sourceMappingURL=UploadState.js.map