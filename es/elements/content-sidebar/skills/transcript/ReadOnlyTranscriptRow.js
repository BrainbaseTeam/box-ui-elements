/**
 * 
 * @file Read only transcript row component
 * @author Box
 */
import * as React from 'react';
import PlainButton from '../../../../components/plain-button/PlainButton';

var ReadOnlyTranscriptRow = function ReadOnlyTranscriptRow(_ref) {
  var time = _ref.time,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? '' : _ref$text,
      onClick = _ref.onClick,
      interactionTarget = _ref.interactionTarget;
  return /*#__PURE__*/React.createElement(PlainButton, {
    className: "be-transcript-row",
    "data-resin-target": interactionTarget,
    onClick: onClick,
    type: "button"
  }, time && /*#__PURE__*/React.createElement("div", {
    className: "be-transcript-time"
  }, time), /*#__PURE__*/React.createElement("div", {
    className: "be-transcript-text"
  }, text));
};

export default ReadOnlyTranscriptRow;
//# sourceMappingURL=ReadOnlyTranscriptRow.js.map