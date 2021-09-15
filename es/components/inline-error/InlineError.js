function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import InlineNotice from '../inline-notice';

var InlineError = function InlineError(props) {
  return React.createElement(InlineNotice, _extends({}, props, {
    type: "error"
  }));
};

export default InlineError;
//# sourceMappingURL=InlineError.js.map