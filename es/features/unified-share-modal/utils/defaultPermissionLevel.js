import { EDITOR } from '../constants';

var getDefaultPermissionLevel = function getDefaultPermissionLevel(inviteePermissions) {
  var defaultLevel = inviteePermissions.reduce(function (defaultValue, currentLevel) {
    return currentLevel.default ? currentLevel.value : defaultValue;
  }, EDITOR);
  return defaultLevel;
};

export default getDefaultPermissionLevel;
//# sourceMappingURL=defaultPermissionLevel.js.map