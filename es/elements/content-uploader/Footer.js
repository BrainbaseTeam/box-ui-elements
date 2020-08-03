function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Footer component
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import PrimaryButton from '../../components/primary-button/PrimaryButton';
import Button from '../../components/button/Button';
import messages from '../common/messages';
import { ERROR_CODE_UPLOAD_FILE_LIMIT } from '../../constants';
import './Footer.scss';

var Footer = function Footer(_ref) {
  var isLoading = _ref.isLoading,
      hasFiles = _ref.hasFiles,
      errorCode = _ref.errorCode,
      onCancel = _ref.onCancel,
      onClose = _ref.onClose,
      onUpload = _ref.onUpload,
      fileLimit = _ref.fileLimit,
      isDone = _ref.isDone;
  var message;

  switch (errorCode) {
    case ERROR_CODE_UPLOAD_FILE_LIMIT:
      message = /*#__PURE__*/React.createElement(FormattedMessage, _extends({}, messages.uploadErrorTooManyFiles, {
        values: {
          fileLimit: fileLimit
        }
      }));
      break;

    default: // ignore

  }

  return /*#__PURE__*/React.createElement("div", {
    className: "bcu-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bcu-footer-left"
  }, onClose ? /*#__PURE__*/React.createElement(Button, {
    isDisabled: hasFiles,
    onClick: onClose,
    type: "button"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.close)) : null), message && /*#__PURE__*/React.createElement("div", {
    className: "bcu-footer-message"
  }, message), /*#__PURE__*/React.createElement("div", {
    className: "bcu-footer-right"
  }, /*#__PURE__*/React.createElement(Button, {
    isDisabled: !hasFiles || isDone,
    onClick: onCancel,
    type: "button"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.cancel)), /*#__PURE__*/React.createElement(PrimaryButton, {
    isDisabled: !hasFiles,
    isLoading: isLoading,
    onClick: onUpload,
    type: "button"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.upload))));
};

export default Footer;
//# sourceMappingURL=Footer.js.map