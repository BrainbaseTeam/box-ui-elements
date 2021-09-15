function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Uploads Manager action component
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../common/messages';
import PrimaryButton from '../../components/primary-button';
import { STATUS_ERROR } from '../../constants';
import { RESIN_TAG_TARGET } from '../../common/variables';
import './UploadsManagerAction.scss';

var UploadsManagerAction = function UploadsManagerAction(_ref) {
  var onClick = _ref.onClick,
      hasMultipleFailedUploads = _ref.hasMultipleFailedUploads;

  var handleResumeClick = function handleResumeClick(event) {
    event.stopPropagation();
    onClick(STATUS_ERROR);
  };

  var resumeMessage = hasMultipleFailedUploads ? messages.resumeAll : messages.resume;

  var resin = _defineProperty({}, RESIN_TAG_TARGET, 'uploadresumeheader');

  return React.createElement("div", {
    className: "bcu-uploads-manager-action"
  }, React.createElement(PrimaryButton, _extends({
    onClick: handleResumeClick,
    type: "button"
  }, resin), React.createElement(FormattedMessage, resumeMessage)));
};

export default UploadsManagerAction;
//# sourceMappingURL=UploadsManagerAction.js.map