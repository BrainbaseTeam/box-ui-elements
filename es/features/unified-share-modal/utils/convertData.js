var _API_TO_USM_ACCESS_LE, _API_TO_USM_PERMISSIO, _USM_TO_API_ACCESS_LE, _USM_TO_API_PERMISSIO, _API_TO_USM_CLASSIFIC;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { getTypedFileId, getTypedFolderId } from '../../../utils/file';
import { checkIsExternalUser } from '../../../utils/parseEmails';
import { ACCESS_COLLAB, ACCESS_COMPANY, ACCESS_NONE, ACCESS_OPEN, INVITEE_ROLE_EDITOR, PERMISSION_CAN_DOWNLOAD, PERMISSION_CAN_PREVIEW, STATUS_ACCEPTED, STATUS_INACTIVE, TYPE_FOLDER } from '../../../constants';
import { ALLOWED_ACCESS_LEVELS, ANYONE_IN_COMPANY, ANYONE_WITH_LINK, CAN_VIEW_DOWNLOAD, CAN_VIEW_ONLY, COLLAB_GROUP_TYPE, COLLAB_USER_TYPE, DISABLED_REASON_ACCESS_POLICY, DISABLED_REASON_MALICIOUS_CONTENT, PEOPLE_IN_ITEM } from '../constants';
import { bdlDarkBlue50, bdlGray20, bdlGreenLight50, bdlLightBlue50, bdlOrange50, bdlPurpleRain50, bdlWatermelonRed50, bdlYellow50 } from '../../../styles/variables';
import { CLASSIFICATION_COLOR_ID_0, CLASSIFICATION_COLOR_ID_1, CLASSIFICATION_COLOR_ID_2, CLASSIFICATION_COLOR_ID_3, CLASSIFICATION_COLOR_ID_4, CLASSIFICATION_COLOR_ID_5, CLASSIFICATION_COLOR_ID_6, CLASSIFICATION_COLOR_ID_7 } from '../../classification/constants';

/**
 * The following constants are used for converting API requests
 * and responses into objects expected by the USM, and vice versa
 */
export var API_TO_USM_ACCESS_LEVEL_MAP = (_API_TO_USM_ACCESS_LE = {}, _defineProperty(_API_TO_USM_ACCESS_LE, ACCESS_COLLAB, PEOPLE_IN_ITEM), _defineProperty(_API_TO_USM_ACCESS_LE, ACCESS_COMPANY, ANYONE_IN_COMPANY), _defineProperty(_API_TO_USM_ACCESS_LE, ACCESS_OPEN, ANYONE_WITH_LINK), _defineProperty(_API_TO_USM_ACCESS_LE, ACCESS_NONE, ''), _API_TO_USM_ACCESS_LE);
export var API_TO_USM_PERMISSION_LEVEL_MAP = (_API_TO_USM_PERMISSIO = {}, _defineProperty(_API_TO_USM_PERMISSIO, PERMISSION_CAN_DOWNLOAD, CAN_VIEW_DOWNLOAD), _defineProperty(_API_TO_USM_PERMISSIO, PERMISSION_CAN_PREVIEW, CAN_VIEW_ONLY), _API_TO_USM_PERMISSIO);
export var USM_TO_API_ACCESS_LEVEL_MAP = (_USM_TO_API_ACCESS_LE = {}, _defineProperty(_USM_TO_API_ACCESS_LE, ANYONE_IN_COMPANY, ACCESS_COMPANY), _defineProperty(_USM_TO_API_ACCESS_LE, ANYONE_WITH_LINK, ACCESS_OPEN), _defineProperty(_USM_TO_API_ACCESS_LE, PEOPLE_IN_ITEM, ACCESS_COLLAB), _USM_TO_API_ACCESS_LE);
export var USM_TO_API_PERMISSION_LEVEL_MAP = (_USM_TO_API_PERMISSIO = {}, _defineProperty(_USM_TO_API_PERMISSIO, CAN_VIEW_DOWNLOAD, PERMISSION_CAN_DOWNLOAD), _defineProperty(_USM_TO_API_PERMISSIO, CAN_VIEW_ONLY, PERMISSION_CAN_PREVIEW), _USM_TO_API_PERMISSIO);
var API_TO_USM_CLASSIFICATION_COLORS_MAP = (_API_TO_USM_CLASSIFIC = {}, _defineProperty(_API_TO_USM_CLASSIFIC, bdlYellow50, CLASSIFICATION_COLOR_ID_0), _defineProperty(_API_TO_USM_CLASSIFIC, bdlOrange50, CLASSIFICATION_COLOR_ID_1), _defineProperty(_API_TO_USM_CLASSIFIC, bdlWatermelonRed50, CLASSIFICATION_COLOR_ID_2), _defineProperty(_API_TO_USM_CLASSIFIC, bdlPurpleRain50, CLASSIFICATION_COLOR_ID_3), _defineProperty(_API_TO_USM_CLASSIFIC, bdlLightBlue50, CLASSIFICATION_COLOR_ID_4), _defineProperty(_API_TO_USM_CLASSIFIC, bdlDarkBlue50, CLASSIFICATION_COLOR_ID_5), _defineProperty(_API_TO_USM_CLASSIFIC, bdlGreenLight50, CLASSIFICATION_COLOR_ID_6), _defineProperty(_API_TO_USM_CLASSIFIC, bdlGray20, CLASSIFICATION_COLOR_ID_7), _API_TO_USM_CLASSIFIC);
var APP_USERS_DOMAIN_REGEXP = new RegExp('boxdevedition.com');
/**
 * Convert access levels disabled reasons into USM format.
 *
 * @param {{ [string]: string }} disabledReasons
 * @returns {accessLevelsDisabledReasonType | null}
 */

export var convertAccessLevelsDisabledReasons = function convertAccessLevelsDisabledReasons(disabledReasons) {
  if (!disabledReasons) return null;
  var convertedReasons = {};
  Object.entries(disabledReasons).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        level = _ref2[0],
        reason = _ref2[1];

    convertedReasons[API_TO_USM_ACCESS_LEVEL_MAP[level]] = reason;
  });
  return convertedReasons;
};
/**
 * Convert allowed access levels into USM format.
 *
 * @param {Array<string>} [levelsFromAPI]
 * @returns {allowedAccessLevelsType | null}
 */

export var convertAllowedAccessLevels = function convertAllowedAccessLevels(levelsFromAPI) {
  if (!levelsFromAPI) return null;
  var convertedLevels = {
    peopleInThisItem: false,
    peopleInYourCompany: false,
    peopleWithTheLink: false
  };
  levelsFromAPI.forEach(function (level) {
    convertedLevels[API_TO_USM_ACCESS_LEVEL_MAP[level]] = true;
  });
  return convertedLevels;
};
/**
 * Convert a response from the Item API to the object that the USM expects.
 *
 * @param {BoxItem} itemAPIData
 * @returns {ContentSharingItemDataType} Object containing item and shared link information
 */

export var convertItemResponse = function convertItemResponse(itemAPIData) {
  var allowed_invitee_roles = itemAPIData.allowed_invitee_roles,
      allowed_shared_link_access_levels = itemAPIData.allowed_shared_link_access_levels,
      allowed_shared_link_access_levels_disabled_reasons = itemAPIData.allowed_shared_link_access_levels_disabled_reasons,
      classification = itemAPIData.classification,
      id = itemAPIData.id,
      description = itemAPIData.description,
      extension = itemAPIData.extension,
      name = itemAPIData.name,
      _itemAPIData$owned_by = itemAPIData.owned_by,
      ownerID = _itemAPIData$owned_by.id,
      ownerEmail = _itemAPIData$owned_by.login,
      permissions = itemAPIData.permissions,
      shared_link = itemAPIData.shared_link,
      _itemAPIData$shared_l = itemAPIData.shared_link_features,
      isDirectLinkAvailable = _itemAPIData$shared_l.download_url,
      isPasswordAvailable = _itemAPIData$shared_l.password,
      type = itemAPIData.type;
  var isDownloadSettingAvailable = permissions.can_download,
      canInvite = permissions.can_invite_collaborator,
      isPreviewAllowed = permissions.can_preview,
      canChangeAccessLevel = permissions.can_set_share_access,
      itemShare = permissions.can_share; // Convert classification data for the item if available

  var classificationData = {};

  if (classification) {
    var color = classification.color,
        definition = classification.definition,
        classificationName = classification.name;
    classificationData = {
      bannerPolicy: {
        body: definition,
        colorID: API_TO_USM_CLASSIFICATION_COLORS_MAP[color]
      },
      classification: classificationName
    };
  }

  var isEditAllowed = allowed_invitee_roles.indexOf(INVITEE_ROLE_EDITOR) !== -1; // The "canInvite" property is necessary even if the item does not have a shared link,
  // because it allows users to invite individual collaborators.

  var sharedLink = {
    canInvite: !!canInvite
  };

  if (shared_link) {
    var directLink = shared_link.download_url,
        effective_access = shared_link.effective_access,
        effective_permission = shared_link.effective_permission,
        isPasswordEnabled = shared_link.is_password_enabled,
        password = shared_link.password,
        expirationTimestamp = shared_link.unshared_at,
        url = shared_link.url,
        vanityName = shared_link.vanity_name;
    var accessLevel = effective_access ? API_TO_USM_ACCESS_LEVEL_MAP[effective_access] : '';
    var permissionLevel = effective_permission ? API_TO_USM_PERMISSION_LEVEL_MAP[effective_permission] : null;
    var isDownloadAllowed = permissionLevel === API_TO_USM_PERMISSION_LEVEL_MAP.can_download;
    var canChangeDownload = canChangeAccessLevel && isDownloadSettingAvailable && effective_access !== ACCESS_COLLAB; // access must be "company" or "open"

    var canChangePassword = canChangeAccessLevel && isPasswordAvailable;
    var canChangeExpiration = canChangeAccessLevel && isEditAllowed;
    sharedLink = {
      accessLevel: accessLevel,
      accessLevelsDisabledReason: convertAccessLevelsDisabledReasons(allowed_shared_link_access_levels_disabled_reasons) || {},
      allowedAccessLevels: convertAllowedAccessLevels(allowed_shared_link_access_levels) || ALLOWED_ACCESS_LEVELS,
      // show all access levels by default
      canChangeAccessLevel: canChangeAccessLevel,
      canChangeDownload: canChangeDownload,
      canChangeExpiration: canChangeExpiration,
      canChangePassword: canChangePassword,
      canChangeVanityName: false,
      // vanity URLs cannot be set via the API
      canInvite: !!canInvite,
      directLink: directLink,
      expirationTimestamp: expirationTimestamp ? new Date(expirationTimestamp).getTime() : null,
      // convert to milliseconds
      isDirectLinkAvailable: isDirectLinkAvailable,
      isDownloadAllowed: isDownloadAllowed,
      isDownloadAvailable: isDownloadSettingAvailable,
      isDownloadEnabled: isDownloadAllowed,
      isDownloadSettingAvailable: isDownloadSettingAvailable,
      isEditAllowed: isEditAllowed,
      isNewSharedLink: false,
      isPasswordAvailable: isPasswordAvailable,
      isPasswordEnabled: isPasswordEnabled,
      isPreviewAllowed: isPreviewAllowed,
      password: password,
      permissionLevel: permissionLevel,
      url: url,
      vanityName: vanityName || ''
    };
  }

  return {
    item: _objectSpread({
      canUserSeeClassification: !!classification,
      description: description,
      extension: extension,
      grantedPermissions: {
        itemShare: !!itemShare
      },
      hideCollaborators: false,
      // to do: connect to Collaborations API
      id: id,
      name: name,
      ownerEmail: ownerEmail,
      // the owner email is used to determine whether collaborators are external
      ownerID: ownerID,
      // the owner ID is used to determine whether external collaborator badges should be shown
      permissions: permissions,
      // the original permissions are necessary for PUT requests to the Item API
      type: type,
      typedID: type === TYPE_FOLDER ? getTypedFolderId(id) : getTypedFileId(id)
    }, classificationData),
    sharedLink: sharedLink
  };
};
/**
 * Convert a response from the User API into the object that the USM expects.
 *
 * @param {User} userAPIData
 * @returns {ContentSharingUserDataType} Object containing user and enterprise information
 */

export var convertUserResponse = function convertUserResponse(userAPIData) {
  var enterprise = userAPIData.enterprise,
      hostname = userAPIData.hostname,
      id = userAPIData.id;
  return {
    id: id,
    userEnterpriseData: {
      enterpriseName: enterprise ? enterprise.name : '',
      serverURL: hostname ? "".concat(hostname, "v/") : ''
    }
  };
};
/**
 * Create a shared link permissions object for the API based on a USM permission level.
 *
 * @param {string} newSharedLinkPermissionLevel
 * @returns {$Shape<BoxItemPermission>} Object containing shared link permissions
 */

export var convertSharedLinkPermissions = function convertSharedLinkPermissions(newSharedLinkPermissionLevel) {
  var sharedLinkPermissions = {};
  Object.keys(USM_TO_API_PERMISSION_LEVEL_MAP).forEach(function (level) {
    if (level === newSharedLinkPermissionLevel) {
      sharedLinkPermissions[USM_TO_API_PERMISSION_LEVEL_MAP[level]] = true;
    } else {
      sharedLinkPermissions[USM_TO_API_PERMISSION_LEVEL_MAP[level]] = false;
    }
  });
  return sharedLinkPermissions;
};
/**
 * Convert a shared link settings object from the USM into the format that the API expects.
 * This function compares the provided access level to both API and internal USM access level constants, to accommodate two potential flows:
 * - Changing the settings for a shared link right after the shared link has been created. The access level is saved directly from the data
 *   returned by the API, so it is in API format.
 * - Changing the settings for a shared link in any other scenario. The access level is saved from the initial calls to the Item API and
 *   convertItemResponse, so it is in internal USM format.
 *
 * @param {SharedLinkSettingsOptions} newSettings
 * @param {accessLevel} string
 * @param {serverURL} string
 * @returns {$Shape<SharedLink>}
 */

export var convertSharedLinkSettings = function convertSharedLinkSettings(newSettings, accessLevel, isDownloadAvailable, serverURL) {
  var expirationTimestamp = newSettings.expirationTimestamp,
      can_download = newSettings.isDownloadEnabled,
      isExpirationEnabled = newSettings.isExpirationEnabled,
      isPasswordEnabled = newSettings.isPasswordEnabled,
      password = newSettings.password,
      vanityName = newSettings.vanityName;
  var convertedSettings = {
    unshared_at: expirationTimestamp && isExpirationEnabled ? new Date(expirationTimestamp).toISOString() : null,
    vanity_url: serverURL && vanityName ? "".concat(serverURL).concat(vanityName) : ''
  }; // Download permissions can only be set on "company" or "open" shared links.

  if (![ACCESS_COLLAB, PEOPLE_IN_ITEM].includes(accessLevel)) {
    var permissions = {
      can_preview: !can_download
    };

    if (isDownloadAvailable) {
      permissions.can_download = can_download;
    }

    convertedSettings.permissions = permissions;
  }
  /**
   * This block covers the following cases:
   * - Setting a new password: "isPasswordEnabled" is true, and "password" is a non-empty string.
   * - Removing a password: "isPasswordEnabled" is false, and "password" is an empty string.
   *   The API only accepts non-empty strings and null values, so the empty string must be converted to null.
   *
   * Other notes:
   * - Passwords can only be set on "open" shared links.
   * - Attempting to set the password field on any other type of shared link will throw a 400 error.
   * - When other settings are updated, and a password has already been set, the SharedLinkSettingsModal
   *   returns password = '' and isPasswordEnabled = true. In these cases, the password should *not*
   *   be converted to null, because that would remove the existing password.
   */


  if ([ANYONE_WITH_LINK, ACCESS_OPEN].includes(accessLevel)) {
    if (isPasswordEnabled && !!password) {
      convertedSettings.password = password;
    } else if (!isPasswordEnabled) {
      convertedSettings.password = null;
    }
  }

  return convertedSettings;
};
/**
 * Convert a collaborator.
 * Note: We do not retrieve the avatar URL of collaborators right after inviting them,
 * so the avatar fields (hasCustomAvatar and imageURL) are not set in that case.
 *
 * @param {ConvertCollabOptions} options
 * @returns {collaboratorType | null} Object containing a collaborator
 */

export var convertCollab = function convertCollab(_ref3) {
  var collab = _ref3.collab,
      avatarURLMap = _ref3.avatarURLMap,
      ownerEmail = _ref3.ownerEmail,
      _ref3$isCurrentUserOw = _ref3.isCurrentUserOwner,
      isCurrentUserOwner = _ref3$isCurrentUserOw === void 0 ? false : _ref3$isCurrentUserOw;
  if (!collab || collab.status !== STATUS_ACCEPTED) return null;
  var ownerEmailDomain = ownerEmail && /@/.test(ownerEmail) ? ownerEmail.split('@')[1] : null;
  var _collab$accessible_by = collab.accessible_by,
      userID = _collab$accessible_by.id,
      email = _collab$accessible_by.login,
      name = _collab$accessible_by.name,
      type = _collab$accessible_by.type,
      collabID = collab.id,
      executeAt = collab.expires_at,
      role = collab.role;
  var avatarURL = avatarURLMap ? avatarURLMap[userID] : undefined;
  var convertedCollab = {
    collabID: parseInt(collabID, 10),
    email: email,
    hasCustomAvatar: !!avatarURL,
    imageURL: avatarURL,
    isExternalCollab: checkIsExternalUser(isCurrentUserOwner, ownerEmailDomain, email),
    name: name,
    translatedRole: "".concat(role[0].toUpperCase()).concat(role.slice(1)),
    // capitalize the user's role
    type: type,
    userID: parseInt(userID, 10)
  };

  if (executeAt) {
    convertedCollab.expiration = {
      executeAt: executeAt
    };
  }

  return convertedCollab;
};
/**
 * Convert a response from the Item Collaborations API into the object that the USM expects.
 *
 * @param {Collaborations} collabsAPIData
 * @param {AvatarURLMap | null} avatarURLMap
 * @param {string | null | undefined} ownerEmail
 * @param {boolean} isCurrentUserOwner
 * @returns {collaboratorsListType} Object containing an array of collaborators
 */

export var convertCollabsResponse = function convertCollabsResponse(collabsAPIData, avatarURLMap, ownerEmail, isCurrentUserOwner) {
  var _collabsAPIData$entri = collabsAPIData.entries,
      entries = _collabsAPIData$entri === void 0 ? [] : _collabsAPIData$entri;
  if (!entries.length) return {
    collaborators: []
  };
  var collaborators = [];
  entries // Only show accepted collaborations
  .filter(function (collab) {
    return collab.status === STATUS_ACCEPTED;
  }).forEach(function (collab) {
    var convertedCollab = convertCollab({
      collab: collab,
      avatarURLMap: avatarURLMap,
      ownerEmail: ownerEmail,
      isCurrentUserOwner: isCurrentUserOwner
    });

    if (convertedCollab) {
      // Necessary for Flow checking
      collaborators.push(convertedCollab);
    }
  });
  return {
    collaborators: collaborators
  };
};
/**
 * Convert a request from the USM (specifically the Invite Collaborators Modal) into the format expected by the Collaborations API.
 * ContentSharing/USM will only call this function when at least one properly-formatted email is entered into the "Invite People" field.
 * Within the context of this feature, groups are identified by IDs, whereas users are identified by their emails.
 *
 * @param {InviteCollaboratorsRequest} collabRequest
 * @returns {ContentSharingCollaborationsRequest}
 */

export var convertCollabsRequest = function convertCollabsRequest(collabRequest) {
  var emails = collabRequest.emails,
      groupIDs = collabRequest.groupIDs,
      permission = collabRequest.permission;
  var emailArray = emails ? emails.split(',') : [];
  var groupIDArray = groupIDs ? groupIDs.split(',') : [];
  var roleSettings = {
    role: permission.toLowerCase() // USM permissions are identical to API roles, except for the casing

  };
  var groups = groupIDArray.map(function (groupID) {
    return _objectSpread({
      accessible_by: {
        id: groupID,
        type: COLLAB_GROUP_TYPE
      }
    }, roleSettings);
  });
  var users = emailArray.map(function (email) {
    return _objectSpread({
      accessible_by: {
        login: email,
        type: COLLAB_USER_TYPE
      }
    }, roleSettings);
  });
  return {
    groups: groups,
    users: users
  };
};

var sortByName = function sortByName(_ref4, _ref5) {
  var _ref4$name = _ref4.name,
      nameA = _ref4$name === void 0 ? '' : _ref4$name;
  var _ref5$name = _ref5.name,
      nameB = _ref5$name === void 0 ? '' : _ref5$name;
  return nameA.localeCompare(nameB);
};
/**
 * Convert an enterprise users API response into an array of internal USM contacts.
 *
 * @param {UserCollection} contactsAPIData
 * @param {string|null} currentUserID
 * @returns {Array<contactType>} Array of USM contacts
 */


export var convertUserContactsResponse = function convertUserContactsResponse(contactsAPIData, currentUserID) {
  var _contactsAPIData$entr = contactsAPIData.entries,
      entries = _contactsAPIData$entr === void 0 ? [] : _contactsAPIData$entr; // Return all active users except for the current user and app users

  return entries.filter(function (_ref6) {
    var id = _ref6.id,
        email = _ref6.login,
        status = _ref6.status;
    return id !== currentUserID && email && !APP_USERS_DOMAIN_REGEXP.test(email) && status && status !== STATUS_INACTIVE;
  }).map(function (contact) {
    var id = contact.id,
        email = contact.login,
        name = contact.name,
        type = contact.type;
    return {
      id: id,
      email: email,
      name: name,
      type: type
    };
  }).sort(sortByName);
};
/**
 * Convert an enterprise users API response into an object of internal USM contacts, keyed by email, which is
 * then passed to the mergeContacts function.
 *
 * @param {UserCollection} contactsAPIData
 * @returns { [string]: contactType } Object of USM contacts
 */

export var convertUserContactsByEmailResponse = function convertUserContactsByEmailResponse(contactsAPIData) {
  var _contactsAPIData$entr2 = contactsAPIData.entries,
      entries = _contactsAPIData$entr2 === void 0 ? [] : _contactsAPIData$entr2;
  var contactsMap = {};
  entries.forEach(function (contact) {
    var id = contact.id,
        _contact$login = contact.login,
        email = _contact$login === void 0 ? '' : _contact$login,
        name = contact.name,
        type = contact.type;
    contactsMap[email] = {
      id: id,
      email: email,
      name: name,
      type: type
    };
  });
  return contactsMap;
};
/**
 * Convert an enterprise groups API response into an array of internal USM contacts.
 *
 * @param {GroupCollection} contactsAPIData
 * @returns {Array<contactType>} Array of USM contacts
 */

export var convertGroupContactsResponse = function convertGroupContactsResponse(contactsAPIData) {
  var _contactsAPIData$entr3 = contactsAPIData.entries,
      entries = _contactsAPIData$entr3 === void 0 ? [] : _contactsAPIData$entr3; // Only return groups with the correct permissions

  return entries.filter(function (_ref7) {
    var permissions = _ref7.permissions;
    return permissions && permissions.can_invite_as_collaborator;
  }).map(function (contact) {
    var id = contact.id,
        name = contact.name,
        type = contact.type;
    return {
      id: id,
      name: name,
      type: type
    };
  }).sort(sortByName);
};
//# sourceMappingURL=convertData.js.map