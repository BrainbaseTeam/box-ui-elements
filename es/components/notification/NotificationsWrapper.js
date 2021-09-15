import * as React from 'react';
import FocusTrap from '../focus-trap';
import Portal from '../portal';

var NotificationsWrapper = function NotificationsWrapper(_ref) {
  var children = _ref.children;
  return React.createElement(Portal, {
    className: "notifications-wrapper",
    "aria-live": "polite"
  }, children ? React.createElement(FocusTrap, null, children) : null);
};

export default NotificationsWrapper;
//# sourceMappingURL=NotificationsWrapper.js.map