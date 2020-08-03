import { PLACEHOLDER_USER, VERSION_DELETE_ACTION, VERSION_PROMOTE_ACTION, VERSION_RESTORE_ACTION, VERSION_UPLOAD_ACTION } from '../../../constants';

var getVersionAction = function getVersionAction(_ref) {
  var restored_at = _ref.restored_at,
      trashed_at = _ref.trashed_at,
      version_promoted = _ref.version_promoted;
  var action = VERSION_UPLOAD_ACTION;

  if (trashed_at) {
    action = VERSION_DELETE_ACTION;
  }

  if (restored_at) {
    action = VERSION_RESTORE_ACTION;
  }

  if (version_promoted) {
    action = VERSION_PROMOTE_ACTION;
  }

  return action;
};

var getVersionUser = function getVersionUser(_ref2) {
  var modified_by = _ref2.modified_by,
      restored_by = _ref2.restored_by,
      trashed_by = _ref2.trashed_by;
  return restored_by || trashed_by || modified_by || PLACEHOLDER_USER;
};

export default {
  getVersionAction: getVersionAction,
  getVersionUser: getVersionUser
};
//# sourceMappingURL=version.js.map