/**
 * 
 * @file Logo for the header
 * @author Box
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import IconLogo from '../../../icons/general/IconLogo';
import messages from '../messages';
import './Logo.scss';

function getLogo(url) {
  if (url === 'box') {
    return React.createElement(IconLogo, null);
  }

  if (typeof url === 'string') {
    return React.createElement("img", {
      alt: "",
      className: "be-logo-custom",
      src: url
    });
  }

  return React.createElement("div", {
    className: "be-logo-placeholder"
  }, React.createElement(FormattedMessage, messages.logo));
}

var Logo = function Logo(_ref) {
  var url = _ref.url;
  return React.createElement("div", {
    className: "be-logo"
  }, getLogo(url));
};

export default Logo;
//# sourceMappingURL=Logo.js.map