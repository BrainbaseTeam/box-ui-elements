/**
 * 
 * @file Preview loading and error UI wrapper
 * @author Box
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import IconFileDefault from '../../icon/content/FileDefault32';
import SecurityBlockedState from '../../icons/states/SecurityBlockedState';
import messages from '../common/messages';
import { ERROR_CODE_FETCH_FILE_DUE_TO_POLICY } from '../../constants';
import './PreviewError.scss';
export default function PreviewError(_ref) {
  var errorCode = _ref.errorCode;
  var isBlockedByPolicy = errorCode === ERROR_CODE_FETCH_FILE_DUE_TO_POLICY;
  var message = isBlockedByPolicy ? messages.previewErrorBlockedByPolicy : messages.previewError;
  var icon = isBlockedByPolicy ? React.createElement(SecurityBlockedState, null) : React.createElement(IconFileDefault, {
    height: 160,
    width: 160
  });
  return React.createElement("div", {
    className: "bcpr-PreviewError"
  }, icon, React.createElement("div", {
    className: "bcpr-PreviewError-message"
  }, React.createElement(FormattedMessage, message)));
}
//# sourceMappingURL=PreviewError.js.map