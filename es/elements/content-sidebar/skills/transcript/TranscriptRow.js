/**
 * 
 * @file Transcript row component
 * @author Box
 */
import React from 'react';
import { formatTime } from '../../../../utils/datetime';
import ReadOnlyTranscriptRow from './ReadOnlyTranscriptRow';
import EditingTranscriptRow from './EditingTranscriptRow';
import { isValidTimeSlice } from './timeSliceUtils';
import './TranscriptRow.scss';

var TranscriptRow = function TranscriptRow(_ref) {
  var appears = _ref.appears,
      text = _ref.text,
      isEditing = _ref.isEditing,
      onClick = _ref.onClick,
      onSave = _ref.onSave,
      onCancel = _ref.onCancel,
      onChange = _ref.onChange,
      interactionTarget = _ref.interactionTarget;
  var isValid = isValidTimeSlice(appears) && Array.isArray(appears) && appears.length === 1;
  var timeSlice = appears;
  var start = isValid ? formatTime(timeSlice[0].start) : undefined;
  return isEditing ? React.createElement(EditingTranscriptRow, {
    onCancel: onCancel,
    onChange: onChange,
    onSave: onSave,
    text: text,
    time: start
  }) : React.createElement(ReadOnlyTranscriptRow, {
    interactionTarget: interactionTarget,
    onClick: onClick,
    text: text,
    time: start
  });
};

export default TranscriptRow;
//# sourceMappingURL=TranscriptRow.js.map