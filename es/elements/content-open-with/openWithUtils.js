/**
 * 
 * @file Open With utils
 * @author Box
 */
import getProp from 'lodash/get';
import BoxToolsInstallMessage from './BoxToolsInstallMessage';

var isDisabledBecauseBoxToolsIsNotInstalled = function isDisabledBecauseBoxToolsIsNotInstalled(integration) {
  var disabledReasonType = getProp(integration, 'disabledReasons.0.type');
  return disabledReasonType === BoxToolsInstallMessage;
};

export default {
  isDisabledBecauseBoxToolsIsNotInstalled: isDisabledBecauseBoxToolsIsNotInstalled
};
//# sourceMappingURL=openWithUtils.js.map