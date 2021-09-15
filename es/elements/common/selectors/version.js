function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
      trashed_by = _ref2.trashed_by,
      uploader_display_name = _ref2.uploader_display_name;

  var _ref3 = restored_by || trashed_by || modified_by || PLACEHOLDER_USER,
      name = _ref3.name,
      id = _ref3.id,
      rest = _objectWithoutProperties(_ref3, ["name", "id"]);

  var isAnonymous = id === PLACEHOLDER_USER.id;
  return _objectSpread({}, rest, {
    id: id,
    name: isAnonymous && uploader_display_name ? uploader_display_name : name
  });
};

export default {
  getVersionAction: getVersionAction,
  getVersionUser: getVersionUser
};
//# sourceMappingURL=version.js.map