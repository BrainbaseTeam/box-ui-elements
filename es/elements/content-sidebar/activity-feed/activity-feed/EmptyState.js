/**
 * 
 * @file Component for Activity feed empty state
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import ActivityFeedEmptyStateIllustration from '../illustrations/ActivityFeedEmptyStateIllustration';
import EmptyStatePreviewActivity140 from '../../../../illustration/EmptyStatePreviewActivity140';
import messages from '../../../common/messages';
import './EmptyState.scss';

var EmptyState = function EmptyState(_ref) {
  var showAnnotationMessage = _ref.showAnnotationMessage,
      showCommentMessage = _ref.showCommentMessage;
  var showActionMessage = showAnnotationMessage || showCommentMessage;
  var actionMessage = showAnnotationMessage ? messages.noActivityAnnotationPrompt : messages.noActivityCommentPrompt;
  return React.createElement("div", {
    className: "bcs-EmptyState"
  }, React.createElement("div", {
    className: "bcs-EmptyState-illustration"
  }, showAnnotationMessage ? React.createElement(ActivityFeedEmptyStateIllustration, null) : React.createElement(EmptyStatePreviewActivity140, null)), React.createElement("div", {
    className: "bcs-EmptyState-cta"
  }, React.createElement(FormattedMessage, messages.noActivity, function (text) {
    return React.createElement("span", {
      className: "bcs-EmptyState-cta-detail"
    }, text);
  }), showActionMessage && React.createElement("aside", {
    className: "bcs-EmptyState-cta-message"
  }, React.createElement(FormattedMessage, actionMessage))));
};

export default EmptyState;
//# sourceMappingURL=EmptyState.js.map