/**
 * 
 * @file Icon
 * @author Box
 */
import React from 'react';
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import IconClose from '../../icons/general/IconClose';

var IconInProgress = function IconInProgress() {
  return React.createElement("div", {
    className: "be-icon-in-progress"
  }, React.createElement(IconClose, null), React.createElement(LoadingIndicator, null));
};

export default IconInProgress;
//# sourceMappingURL=IconInProgress.js.map