function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Upload state content component
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../common/messages';
import UploadInput from './UploadInput';

var UploadStateContent = function UploadStateContent(_ref) {
  var fileInputLabel = _ref.fileInputLabel,
      folderInputLabel = _ref.folderInputLabel,
      message = _ref.message,
      onChange = _ref.onChange,
      _ref$useButton = _ref.useButton,
      useButton = _ref$useButton === void 0 ? false : _ref$useButton;
  var messageContent = message ? React.createElement("div", {
    className: "bcu-upload-state-message"
  }, message) : null;
  var inputLabelClass = useButton ? 'btn btn-primary be-input-btn' : 'be-input-link';
  var shouldShowFolderUploadInput = !useButton && !!folderInputLabel;

  var handleChange = function handleChange(event) {
    if (!onChange) {
      return;
    }

    onChange(event);
    var currentTarget = event.currentTarget; // resets the file input selection

    currentTarget.value = '';
  };

  var fileInputContent = React.createElement(UploadInput, {
    handleChange: handleChange,
    inputLabel: fileInputLabel,
    inputLabelClass: inputLabelClass
  });
  var folderInputContent = shouldShowFolderUploadInput ? React.createElement(UploadInput, {
    handleChange: handleChange,
    inputLabel: folderInputLabel,
    inputLabelClass: inputLabelClass,
    isFolderUpload: true
  }) : null;
  var inputsContent;

  if (fileInputContent && folderInputContent) {
    inputsContent = React.createElement(FormattedMessage, _extends({}, messages.uploadOptions, {
      values: {
        option1: fileInputContent,
        option2: folderInputContent
      }
    }));
  } else if (fileInputContent) {
    inputsContent = fileInputContent;
  }

  return React.createElement("div", null, messageContent, inputsContent && React.createElement("div", {
    className: "bcu-upload-input-container"
  }, inputsContent));
};

export default UploadStateContent;
//# sourceMappingURL=UploadStateContent.js.map