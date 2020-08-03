/**
 * 
 * @file Component for Activity feed empty state
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../../../common/messages';
import IconActivityFeedEmptyState from '../icons';

var EmptyState = function EmptyState(_ref) {
  var showCommentMessage = _ref.showCommentMessage;
  return /*#__PURE__*/React.createElement("div", {
    className: "bcs-activity-feed-empty-state"
  }, /*#__PURE__*/React.createElement(IconActivityFeedEmptyState, null), /*#__PURE__*/React.createElement("div", {
    className: "bcs-empty-state-cta"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.noActivity), showCommentMessage ? /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement(FormattedMessage, messages.noActivityCommentPrompt)) : null));
};

export default EmptyState;
//# sourceMappingURL=EmptyState.js.map