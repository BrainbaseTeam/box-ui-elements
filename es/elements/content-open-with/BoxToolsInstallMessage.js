function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Custom message to install Box Tools inside of Open With.
 * @author Box
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../common/messages';
import './BoxToolsInstallMessage.scss';
var DEFAULT_BOX_TOOLS_INSTALLATION_URL = 'https://cloud.box.com/v/installboxtools';
var DEFAULT_BOX_TOOLS_NAME = 'Box Tools';

var BoxToolsInstallMessage = function BoxToolsInstallMessage(_ref) {
  var _ref$boxToolsName = _ref.boxToolsName,
      boxToolsName = _ref$boxToolsName === void 0 ? DEFAULT_BOX_TOOLS_NAME : _ref$boxToolsName,
      _ref$boxToolsInstallU = _ref.boxToolsInstallUrl,
      boxToolsInstallUrl = _ref$boxToolsInstallU === void 0 ? DEFAULT_BOX_TOOLS_INSTALLATION_URL : _ref$boxToolsInstallU;

  var onLinkClick = function onLinkClick() {
    // Manually open the URL since disabled menu items are blocked from clickable actions by default
    window.open(boxToolsInstallUrl);
  };

  return React.createElement(FormattedMessage, _extends({}, messages.boxToolsInstallMessage, {
    values: {
      boxTools: // eslint-disable-next-line jsx-a11y/anchor-is-valid
      React.createElement("a", {
        href: "#",
        onClick: onLinkClick,
        rel: "noopener noreferrer"
      }, boxToolsName)
    }
  }));
};

export default BoxToolsInstallMessage;
//# sourceMappingURL=BoxToolsInstallMessage.js.map