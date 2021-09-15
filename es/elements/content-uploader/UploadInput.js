/**
 * 
 * @file Input element for folder/file upload
 * @author Box
 */
import * as React from 'react';

var UploadInput = function UploadInput(_ref) {
  var _ref$isMultiple = _ref.isMultiple,
      isMultiple = _ref$isMultiple === void 0 ? true : _ref$isMultiple,
      _ref$isFolderUpload = _ref.isFolderUpload,
      isFolderUpload = _ref$isFolderUpload === void 0 ? false : _ref$isFolderUpload,
      _ref$inputLabelClass = _ref.inputLabelClass,
      inputLabelClass = _ref$inputLabelClass === void 0 ? '' : _ref$inputLabelClass,
      inputLabel = _ref.inputLabel,
      handleChange = _ref.handleChange;
  return inputLabel ? // eslint-disable-next-line jsx-a11y/label-has-for
  React.createElement("label", {
    className: inputLabelClass
  }, inputLabel, React.createElement("input", {
    directory: isFolderUpload ? '' : undefined,
    multiple: isMultiple,
    onChange: handleChange,
    type: "file",
    webkitdirectory: isFolderUpload ? '' : undefined
  })) : null;
};

export default UploadInput;
//# sourceMappingURL=UploadInput.js.map