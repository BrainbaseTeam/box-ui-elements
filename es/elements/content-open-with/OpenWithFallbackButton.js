/**
 * 
 * @file Open With fallback button
 * @author Box
 */
import * as React from 'react';
import OpenWithButton from './OpenWithButton';

var OpenWithFallbackButton = function OpenWithFallbackButton(_ref) {
  var error = _ref.error;
  return /*#__PURE__*/React.createElement("div", {
    className: "be bcow"
  }, /*#__PURE__*/React.createElement(OpenWithButton, {
    error: error,
    isLoading: false
  }));
};

export default OpenWithFallbackButton;
//# sourceMappingURL=OpenWithFallbackButton.js.map