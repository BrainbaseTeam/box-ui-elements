import * as React from 'react';
import LeftSidebarLink from './LeftSidebarLink';
import LeftSidebarIconWrapper from './LeftSidebarIconWrapper';
import './styles/InstantLogin.scss';

var InstantLogin = function InstantLogin(_ref) {
  var _ref$htmlAttributes = _ref.htmlAttributes,
      htmlAttributes = _ref$htmlAttributes === void 0 ? {} : _ref$htmlAttributes,
      Icon = _ref.iconComponent,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? '' : _ref$message,
      _ref$showTooltip = _ref.showTooltip,
      showTooltip = _ref$showTooltip === void 0 ? false : _ref$showTooltip;
  return React.createElement(LeftSidebarLink, {
    className: "instant-login-link",
    htmlAttributes: htmlAttributes,
    icon: Icon ? React.createElement(LeftSidebarIconWrapper, null, React.createElement(Icon, null)) : null,
    message: message,
    showTooltip: showTooltip
  });
};

export default InstantLogin;
//# sourceMappingURL=InstantLogin.js.map