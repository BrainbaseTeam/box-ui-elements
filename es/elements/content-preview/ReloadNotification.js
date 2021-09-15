/**
 * 
 * @file Preview loading and error UI wrapper
 * @author Box
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '../../components/button/Button';
import { Notification, NotificationConstants } from '../../components/notification';
import messages from '../common/messages';
import './ReloadNotification.scss';

var ReloadNotification = function ReloadNotification(_ref) {
  var onClick = _ref.onClick,
      onClose = _ref.onClose;
  return React.createElement("span", {
    className: "bcpr-notification"
  }, React.createElement(Notification, {
    onClose: onClose,
    type: NotificationConstants.TYPE_INFO
  }, React.createElement(FormattedMessage, messages.previewUpdate), React.createElement(Button, {
    onClick: onClick
  }, React.createElement(FormattedMessage, messages.reload))));
};

export default ReloadNotification;
//# sourceMappingURL=ReloadNotification.js.map