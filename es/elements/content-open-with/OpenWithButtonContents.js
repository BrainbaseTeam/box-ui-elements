/**
 * 
 * @file Open With button contents
 * @author Box
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../common/messages';

var OpenWithButtonContents = function OpenWithButtonContents(_ref) {
  var children = _ref.children;
  return React.createElement(React.Fragment, null, children, React.createElement("span", {
    className: "bcow-btn-header-text"
  }, React.createElement(FormattedMessage, messages.open)));
};

export default OpenWithButtonContents;
//# sourceMappingURL=OpenWithButtonContents.js.map