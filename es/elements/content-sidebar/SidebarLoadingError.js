import * as React from 'react';
import DefaultError from '../common/error-boundary/DefaultError';
import './SidebarLoadingError.scss';

var SidebarLoadingError = function SidebarLoadingError() {
  return React.createElement("div", {
    className: "bcs-loading-error"
  }, React.createElement(DefaultError, null));
};

export default SidebarLoadingError;
//# sourceMappingURL=SidebarLoadingError.js.map