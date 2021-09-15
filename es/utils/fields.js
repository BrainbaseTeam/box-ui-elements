function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * 
 * @file Utility to combine API fields needed
 * @author Box
 */
import has from 'lodash/has';
import setProp from 'lodash/set';
import { FIELD_ID, FIELD_NAME, FIELD_TYPE, FIELD_SIZE, FIELD_PARENT, FIELD_EXTENSION, FIELD_PERMISSIONS, FIELD_ITEM_COLLECTION, FIELD_ITEM_EXPIRATION, FIELD_PATH_COLLECTION, FIELD_CONTENT_CREATED_AT, FIELD_CONTENT_MODIFIED_AT, FIELD_MODIFIED_AT, FIELD_CREATED_AT, FIELD_SHARED_LINK, FIELD_ALLOWED_SHARED_LINK_ACCESS_LEVELS, FIELD_HAS_COLLABORATIONS, FIELD_IS_EXTERNALLY_OWNED, FIELD_CREATED_BY, FIELD_MODIFIED_BY, FIELD_OWNED_BY, FIELD_RESTORED_BY, FIELD_TRASHED_BY, FIELD_DESCRIPTION, FIELD_REPRESENTATIONS, FIELD_SHA1, FIELD_UPLOADER_DISPLAY_NAME, FIELD_WATERMARK_INFO, FIELD_AUTHENTICATED_DOWNLOAD_URL, FIELD_FILE_VERSION, FIELD_IS_DOWNLOAD_AVAILABLE, FIELD_VERSION_LIMIT, FIELD_VERSION_NUMBER, FIELD_METADATA_SKILLS, FIELD_TASK_ASSIGNMENT_COLLECTION, FIELD_IS_COMPLETED, FIELD_MESSAGE, FIELD_TAGGED_MESSAGE, FIELD_DUE_AT, FIELD_TRASHED_AT, FIELD_ASSIGNED_TO, FIELD_RESTORED_FROM, FIELD_RESTORED_AT, FIELD_STATUS, FIELD_ACTIVITY_TEMPLATE, FIELD_APP, FIELD_OCCURRED_AT, FIELD_RENDERED_TEXT, FIELD_RETENTION, FIELD_URL, PLACEHOLDER_USER } from '../constants'; // Minimum set of fields needed for folder requests

var FOLDER_FIELDS_TO_FETCH = [FIELD_ID, FIELD_NAME, FIELD_TYPE, FIELD_SIZE, FIELD_PARENT, FIELD_EXTENSION, FIELD_PERMISSIONS, FIELD_PATH_COLLECTION, FIELD_MODIFIED_AT, FIELD_CREATED_AT, FIELD_MODIFIED_BY, FIELD_HAS_COLLABORATIONS, FIELD_IS_EXTERNALLY_OWNED, FIELD_ITEM_COLLECTION, FIELD_AUTHENTICATED_DOWNLOAD_URL, FIELD_IS_DOWNLOAD_AVAILABLE, FIELD_REPRESENTATIONS, FIELD_URL]; // Fields needed for the sidebar

var SIDEBAR_FIELDS_TO_FETCH = [FIELD_ID, FIELD_NAME, FIELD_SIZE, FIELD_EXTENSION, FIELD_FILE_VERSION, FIELD_SHARED_LINK, FIELD_PERMISSIONS, FIELD_CONTENT_CREATED_AT, FIELD_CONTENT_MODIFIED_AT, FIELD_CREATED_AT, FIELD_CREATED_BY, FIELD_MODIFIED_AT, FIELD_MODIFIED_BY, FIELD_OWNED_BY, FIELD_DESCRIPTION, FIELD_METADATA_SKILLS, FIELD_ITEM_EXPIRATION, FIELD_VERSION_LIMIT, FIELD_VERSION_NUMBER, FIELD_IS_EXTERNALLY_OWNED, FIELD_RESTORED_FROM, FIELD_AUTHENTICATED_DOWNLOAD_URL, FIELD_IS_DOWNLOAD_AVAILABLE, FIELD_UPLOADER_DISPLAY_NAME]; // Fields needed for preview

var PREVIEW_FIELDS_TO_FETCH = [FIELD_ID, FIELD_PERMISSIONS, FIELD_SHARED_LINK, FIELD_SHA1, FIELD_FILE_VERSION, FIELD_NAME, FIELD_SIZE, FIELD_EXTENSION, FIELD_REPRESENTATIONS, FIELD_WATERMARK_INFO, FIELD_AUTHENTICATED_DOWNLOAD_URL, FIELD_IS_DOWNLOAD_AVAILABLE]; // Fields needed to get information on the current version of a file

var FILE_VERSION_FIELDS_TO_FETCH = [FIELD_FILE_VERSION, FIELD_MODIFIED_AT, FIELD_MODIFIED_BY, FIELD_RESTORED_FROM, FIELD_SIZE, FIELD_UPLOADER_DISPLAY_NAME, FIELD_VERSION_NUMBER]; // Fields needed to get versions for a file

var FILE_VERSIONS_FIELDS_TO_FETCH = [FIELD_AUTHENTICATED_DOWNLOAD_URL, FIELD_CREATED_AT, FIELD_EXTENSION, FIELD_IS_DOWNLOAD_AVAILABLE, FIELD_MODIFIED_AT, FIELD_MODIFIED_BY, FIELD_NAME, FIELD_PERMISSIONS, FIELD_RESTORED_AT, FIELD_RESTORED_BY, FIELD_RETENTION, FIELD_SIZE, FIELD_TRASHED_AT, FIELD_TRASHED_BY, FIELD_UPLOADER_DISPLAY_NAME, FIELD_VERSION_NUMBER]; // Fields needed for Content Picker to show shared link permissions

var FILE_SHARED_LINK_FIELDS_TO_FETCH = [FIELD_ALLOWED_SHARED_LINK_ACCESS_LEVELS, FIELD_SHARED_LINK]; // Fields needed to get tasks data

var TASKS_FIELDS_TO_FETCH = [FIELD_TASK_ASSIGNMENT_COLLECTION, FIELD_IS_COMPLETED, FIELD_CREATED_AT, FIELD_CREATED_BY, FIELD_DUE_AT, FIELD_MESSAGE]; // Fields needed to get task assignments data

var TASK_ASSIGNMENTS_FIELDS_TO_FETCH = [FIELD_ASSIGNED_TO, FIELD_STATUS]; // Fields needed to get tasks data

var COMMENTS_FIELDS_TO_FETCH = [FIELD_TAGGED_MESSAGE, FIELD_MESSAGE, FIELD_CREATED_AT, FIELD_CREATED_BY, FIELD_MODIFIED_AT, FIELD_PERMISSIONS]; // Fields that represent users

var USER_FIELDS = [FIELD_CREATED_BY, FIELD_MODIFIED_BY, FIELD_OWNED_BY, FIELD_ASSIGNED_TO]; // Fields required to fetch app activity

var APP_ACTIVITY_FIELDS_TO_FETCH = [FIELD_ACTIVITY_TEMPLATE, FIELD_APP, FIELD_CREATED_BY, FIELD_OCCURRED_AT, FIELD_RENDERED_TEXT];
/**
 * Finds properties missing in an object
 *
 * @param {Object} obj - some object
 * @param {Array<string>|void} [properties] - object properties to check
 * @return {Array<string>} comma seperated list of properties missing
 */

function findMissingProperties(obj) {
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  // If file doesn't exist or is an empty object, we should fetch all fields
  if (!obj || _typeof(obj) !== 'object' || Object.keys(obj).length === 0) {
    return properties;
  }

  return properties.filter(function (field) {
    return !has(obj, field);
  });
}
/**
 * Fill properties missing in an object
 *
 * @param {Object} obj - some object
 * @param {Array<string>|void} [properties] - some properties to check
 * @return {Object} new object with missing fields
 */


function fillMissingProperties() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var properties = arguments.length > 1 ? arguments[1] : undefined;

  // If file doesn't exist or is an empty object, we should fetch all fields
  if (!Array.isArray(properties) || properties.length === 0) {
    return obj;
  }

  var newObj = _objectSpread({}, obj);

  var missingProperties = findMissingProperties(obj, properties);
  missingProperties.forEach(function (field) {
    // @Note: This will overwrite non object fields
    // @Note: We don't know the type of the field
    setProp(newObj, field, null);
  });
  return newObj;
}
/**
 * Fill user properties that are null in an object
 *
 * @param {Object} obj - some object
 * @return {Object} new object with user placeholder
 */


function fillUserPlaceholder(obj) {
  var newObj = _objectSpread({}, obj);

  USER_FIELDS.forEach(function (field) {
    if (has(newObj, field) && newObj[field] === null) {
      setProp(newObj, field, PLACEHOLDER_USER);
    }
  });
  return newObj;
}

export { APP_ACTIVITY_FIELDS_TO_FETCH, COMMENTS_FIELDS_TO_FETCH, FILE_SHARED_LINK_FIELDS_TO_FETCH, FILE_VERSION_FIELDS_TO_FETCH, FILE_VERSIONS_FIELDS_TO_FETCH, fillMissingProperties, fillUserPlaceholder, findMissingProperties, FOLDER_FIELDS_TO_FETCH, PREVIEW_FIELDS_TO_FETCH, SIDEBAR_FIELDS_TO_FETCH, TASK_ASSIGNMENTS_FIELDS_TO_FETCH, TASKS_FIELDS_TO_FETCH, USER_FIELDS };
//# sourceMappingURL=fields.js.map