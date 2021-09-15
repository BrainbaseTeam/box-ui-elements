function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as React from 'react';
import noop from 'lodash/noop';
import API from '../../../api';
import { ACCESS_NONE, TYPE_FILE, TYPE_FOLDER } from '../../../constants';
import { CONTENT_SHARING_SHARED_LINK_UPDATE_PARAMS } from '../constants';

/**
 * Generate CRUD functions for shared links.
 *
 * @param {API} api
 * @param {string} itemID
 * @param {ItemType} itemType
 * @param {BoxItemPermission} permissions
 * @param {string} accessLevel
 * @param {ContentSharingHooksOptions} [options]
 */
function useSharedLink(api, itemID, itemType, permissions, accessLevel) {
  var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      onAddLink = _React$useState2[0],
      setOnAddLink = _React$useState2[1];

  var _React$useState3 = React.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      onRemoveLink = _React$useState4[0],
      setOnRemoveLink = _React$useState4[1];

  var _React$useState5 = React.useState(null),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      changeSharedLinkAccessLevel = _React$useState6[0],
      setChangeSharedLinkAccessLevel = _React$useState6[1];

  var _React$useState7 = React.useState(null),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      changeSharedLinkPermissionLevel = _React$useState8[0],
      setChangeSharedLinkPermissionLevel = _React$useState8[1];

  var _React$useState9 = React.useState(null),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      onSubmitSettings = _React$useState10[0],
      setOnSubmitSettings = _React$useState10[1];

  var _React$useState11 = React.useState(false),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      generatedFunctions = _React$useState12[0],
      setGeneratedFunctions = _React$useState12[1];
  /**
   * Storing the access level in a ref allows us to update settings, which depend on the access level, in the following potential scenarios:
   * - After changing the shared link's access level
   * - After removing and recreating the shared link
   */


  var currentAccessLevel = React.useRef(accessLevel);
  var _options$handleRemove = options.handleRemoveSharedLinkError,
      handleRemoveSharedLinkError = _options$handleRemove === void 0 ? noop : _options$handleRemove,
      _options$handleRemove2 = options.handleRemoveSharedLinkSuccess,
      handleRemoveSharedLinkSuccess = _options$handleRemove2 === void 0 ? function (arg) {
    return arg;
  } : _options$handleRemove2,
      _options$handleUpdate = options.handleUpdateSharedLinkError,
      handleUpdateSharedLinkError = _options$handleUpdate === void 0 ? noop : _options$handleUpdate,
      _options$handleUpdate2 = options.handleUpdateSharedLinkSuccess,
      handleUpdateSharedLinkSuccess = _options$handleUpdate2 === void 0 ? function (arg) {
    return arg;
  } : _options$handleUpdate2,
      _options$setIsLoading = options.setIsLoading,
      setIsLoading = _options$setIsLoading === void 0 ? noop : _options$setIsLoading,
      _options$transformAcc = options.transformAccess,
      transformAccess = _options$transformAcc === void 0 ? function (arg) {
    return arg;
  } : _options$transformAcc,
      _options$transformPer = options.transformPermissions,
      transformPermissions = _options$transformPer === void 0 ? function (arg) {
    return arg;
  } : _options$transformPer,
      _options$transformSet = options.transformSettings,
      transformSettings = _options$transformSet === void 0 ? function (data, access) {
    return data;
  } : _options$transformSet;
  React.useEffect(function () {
    if (!permissions || generatedFunctions) return;
    var itemData = {
      id: itemID,
      permissions: permissions
    };
    var itemAPIInstance;

    if (itemType === TYPE_FILE) {
      itemAPIInstance = api.getFileAPI();
    } else if (itemType === TYPE_FOLDER) {
      itemAPIInstance = api.getFolderAPI();
    } // Create functions that alter the access level of a shared link


    var connectToItemShare = function connectToItemShare(_ref) {
      var access = _ref.access,
          _ref$requestOptions = _ref.requestOptions,
          requestOptions = _ref$requestOptions === void 0 ? CONTENT_SHARING_SHARED_LINK_UPDATE_PARAMS : _ref$requestOptions,
          _ref$successFn = _ref.successFn,
          successFn = _ref$successFn === void 0 ? handleUpdateSharedLinkSuccess : _ref$successFn,
          _ref$errorFn = _ref.errorFn,
          errorFn = _ref$errorFn === void 0 ? handleUpdateSharedLinkError : _ref$errorFn;
      setIsLoading(true);
      return itemAPIInstance.share(itemData, access, successFn, errorFn, requestOptions);
    };
    /**
     * Set the shared link creation function.
     *
     * The backend will determine the default access level for the shared link, so we should not pass a value for "access."
     * The "open" and "company" access levels may be disabled due to certain policies, and attempting to set a disabled
     * access level will throw a 400. The only access level that we can reliably set is "collaborators," but defaulting
     * to that level diverges from existing shared link creation behavior in the WebApp.
     *
     * After a shared link is successfully created, we save the access level from the API response into our ref.
     */


    var updatedOnAddLinkFn = function updatedOnAddLinkFn() {
      return function () {
        return connectToItemShare({
          successFn: function successFn(data) {
            var access = data.shared_link.access;
            currentAccessLevel.current = access;
            handleUpdateSharedLinkSuccess(data);
          }
        });
      };
    };

    setOnAddLink(updatedOnAddLinkFn); // Shared link removal function

    var updatedOnRemoveLinkFn = function updatedOnRemoveLinkFn() {
      return function () {
        return connectToItemShare({
          access: ACCESS_NONE,
          successFn: handleRemoveSharedLinkSuccess,
          errorFn: handleRemoveSharedLinkError
        });
      };
    };

    setOnRemoveLink(updatedOnRemoveLinkFn); // Shared link access level change function

    var updatedChangeSharedLinkAccessLevelFn = function updatedChangeSharedLinkAccessLevelFn() {
      return function (newAccessLevel) {
        return connectToItemShare({
          access: transformAccess(newAccessLevel),
          successFn: function successFn(data) {
            currentAccessLevel.current = newAccessLevel;
            handleUpdateSharedLinkSuccess(data);
          }
        });
      };
    };

    setChangeSharedLinkAccessLevel(updatedChangeSharedLinkAccessLevelFn); // Create functions that update shared link settings aside from the access level

    var connectToUpdateSharedLink = function connectToUpdateSharedLink(newSharedLinkData) {
      setIsLoading(true);
      return itemAPIInstance.updateSharedLink(itemData, newSharedLinkData, handleUpdateSharedLinkSuccess, handleUpdateSharedLinkError, CONTENT_SHARING_SHARED_LINK_UPDATE_PARAMS);
    }; // Shared link permission level change function


    var updatedChangeSharedLinkPermissionLevelFn = function updatedChangeSharedLinkPermissionLevelFn() {
      return function (newSharedLinkPermissionLevel) {
        return connectToUpdateSharedLink({
          permissions: transformPermissions(newSharedLinkPermissionLevel)
        });
      };
    };

    setChangeSharedLinkPermissionLevel(updatedChangeSharedLinkPermissionLevelFn);
    /**
     * Set the shared link settings update function. This is currently used in the Shared Link Settings Modal,
     * but it may also be used to update any settings not covered by the above functions.
     */

    var updatedOnSubmitSettingsFn = function updatedOnSubmitSettingsFn() {
      return function (newSettings) {
        return connectToUpdateSharedLink(transformSettings(newSettings, currentAccessLevel.current));
      };
    };

    setOnSubmitSettings(updatedOnSubmitSettingsFn);
    setGeneratedFunctions(true);
  }, [permissions, generatedFunctions, itemID, itemType, handleUpdateSharedLinkSuccess, handleRemoveSharedLinkSuccess, transformAccess, accessLevel, transformPermissions, transformSettings, currentAccessLevel, api, setIsLoading, handleRemoveSharedLinkError, handleUpdateSharedLinkError]);
  return {
    changeSharedLinkAccessLevel: changeSharedLinkAccessLevel,
    changeSharedLinkPermissionLevel: changeSharedLinkPermissionLevel,
    onAddLink: onAddLink,
    onRemoveLink: onRemoveLink,
    onSubmitSettings: onSubmitSettings
  };
}

export default useSharedLink;
//# sourceMappingURL=useSharedLink.js.map