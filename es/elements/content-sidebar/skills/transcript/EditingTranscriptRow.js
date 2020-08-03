/**
 * 
 * @file Editable transcript row component
 * @author Box
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import TextareaAutosize from 'react-textarea-autosize';
import PrimaryButton from '../../../../components/primary-button/PrimaryButton';
import Button from '../../../../components/button/Button';
import messages from '../../../common/messages';
import { SKILLS_TARGETS } from '../../../common/interactionTargets';
import './EditingTranscriptRow.scss';

var EditingTranscriptRow = function EditingTranscriptRow(_ref) {
  var time = _ref.time,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? '' : _ref$text,
      onSave = _ref.onSave,
      onCancel = _ref.onCancel,
      onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement("div", {
    className: "be-transcript-row be-transcript-editing-row"
  }, time && /*#__PURE__*/React.createElement("div", {
    className: "be-transcript-time"
  }, time), /*#__PURE__*/React.createElement("div", {
    className: "be-transcript-text"
  }, /*#__PURE__*/React.createElement(TextareaAutosize, {
    maxRows: 10,
    onChange: onChange,
    value: text
  }), /*#__PURE__*/React.createElement("div", {
    className: "be-transcript-buttons"
  }, /*#__PURE__*/React.createElement(Button, {
    "data-resin-target": SKILLS_TARGETS.TRANSCRIPTS.EDIT_CANCEL,
    onClick: onCancel,
    type: "button"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.cancel)), /*#__PURE__*/React.createElement(PrimaryButton, {
    "data-resin-target": SKILLS_TARGETS.TRANSCRIPTS.EDIT_SAVE,
    onClick: onSave,
    type: "button"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.save)))));
};

export default EditingTranscriptRow;
//# sourceMappingURL=EditingTranscriptRow.js.map