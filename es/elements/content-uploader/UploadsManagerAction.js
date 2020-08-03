/**
 * 
 * @file Uploads Manager action component
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../common/messages';
import PrimaryButton from '../../components/primary-button';
import { STATUS_ERROR } from '../../constants';
import './UploadsManagerAction.scss';

var UploadsManagerAction = function UploadsManagerAction(_ref) {
  var onClick = _ref.onClick,
      hasMultipleFailedUploads = _ref.hasMultipleFailedUploads;

  var handleResumeClick = function handleResumeClick(event) {
    event.stopPropagation();
    onClick(STATUS_ERROR);
  };

  var resumeMessage = hasMultipleFailedUploads ? messages.resumeAll : messages.resume;
  return /*#__PURE__*/React.createElement("div", {
    className: "bcu-uploads-manager-action"
  }, /*#__PURE__*/React.createElement(PrimaryButton, {
    onClick: handleResumeClick,
    type: "button"
  }, /*#__PURE__*/React.createElement(FormattedMessage, resumeMessage)));
};

export default UploadsManagerAction;
//# sourceMappingURL=UploadsManagerAction.js.map