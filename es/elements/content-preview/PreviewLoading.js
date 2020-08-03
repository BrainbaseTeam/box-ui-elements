/**
 * 
 * @file Preview loading and error UI wrapper
 * @author Box
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import IconFileDefault from '../../icons/file/IconFileDefault';
import SecurityBlockedState from '../../icons/states/SecurityBlockedState';
import makeLoadable from '../../components/loading-indicator/makeLoadable';
import messages from '../common/messages';
import { ERROR_CODE_FETCH_FILE_DUE_TO_POLICY } from '../../constants';
import './PreviewLoading.scss';

var PreviewLoading = function PreviewLoading(_ref) {
  var errorCode = _ref.errorCode;
  var isBlockedByPolicy = errorCode === ERROR_CODE_FETCH_FILE_DUE_TO_POLICY;
  var message = isBlockedByPolicy ? messages.previewErrorBlockedByPolicy : messages.previewError;
  var icon = isBlockedByPolicy ? /*#__PURE__*/React.createElement(SecurityBlockedState, null) : /*#__PURE__*/React.createElement(IconFileDefault, {
    height: 160,
    width: 160
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "bcpr-PreviewLoading"
  }, icon, /*#__PURE__*/React.createElement("div", {
    className: "bcpr-PreviewLoading-message"
  }, /*#__PURE__*/React.createElement(FormattedMessage, message)));
};

export { PreviewLoading as PreviewLoadingComponent };
export default makeLoadable(PreviewLoading);
//# sourceMappingURL=PreviewLoading.js.map