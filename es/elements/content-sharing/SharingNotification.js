function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import API from '../../api';
import Notification from '../../components/notification/Notification';
import { DURATION_SHORT, TYPE_ERROR, TYPE_INFO } from '../../components/notification/constants';
import NotificationsWrapper from '../../components/notification/NotificationsWrapper';
import useSharedLink from './hooks/useSharedLink';
import { convertCollab, convertCollabsRequest, convertCollabsResponse, convertGroupContactsResponse, convertItemResponse, convertSharedLinkPermissions, convertSharedLinkSettings, convertUserContactsResponse, USM_TO_API_ACCESS_LEVEL_MAP } from '../../features/unified-share-modal/utils/convertData';
import useAvatars from './hooks/useAvatars';
import useCollaborators from './hooks/useCollaborators';
import useContacts from './hooks/useContacts';
import useInvites from './hooks/useInvites';
import contentSharingMessages from './messages';

function SharingNotification(_ref) {
  var accessLevel = _ref.accessLevel,
      api = _ref.api,
      closeComponent = _ref.closeComponent,
      closeSettings = _ref.closeSettings,
      collaboratorsList = _ref.collaboratorsList,
      currentUserID = _ref.currentUserID,
      getContacts = _ref.getContacts,
      isDownloadAvailable = _ref.isDownloadAvailable,
      itemID = _ref.itemID,
      itemType = _ref.itemType,
      ownerEmail = _ref.ownerEmail,
      ownerID = _ref.ownerID,
      permissions = _ref.permissions,
      sendInvites = _ref.sendInvites,
      serverURL = _ref.serverURL,
      setChangeSharedLinkAccessLevel = _ref.setChangeSharedLinkAccessLevel,
      setChangeSharedLinkPermissionLevel = _ref.setChangeSharedLinkPermissionLevel,
      setGetContacts = _ref.setGetContacts,
      setCollaboratorsList = _ref.setCollaboratorsList,
      setIsLoading = _ref.setIsLoading,
      setItem = _ref.setItem,
      setOnAddLink = _ref.setOnAddLink,
      setOnRemoveLink = _ref.setOnRemoveLink,
      setOnSubmitSettings = _ref.setOnSubmitSettings,
      setSendInvites = _ref.setSendInvites,
      setSharedLink = _ref.setSharedLink;

  var _React$useState = React.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      notifications = _React$useState2[0],
      setNotifications = _React$useState2[1];

  var _React$useState3 = React.useState(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      notificationID = _React$useState4[0],
      setNotificationID = _React$useState4[1]; // Close a notification


  var handleNotificationClose = React.useCallback(function (id) {
    var updatedNotifications = _objectSpread({}, notifications);

    delete updatedNotifications[id];
    setNotifications(updatedNotifications);
  }, [notifications]); // Create a notification

  var createNotification = React.useCallback(function (notificationType, message) {
    var updatedNotifications = _objectSpread({}, notifications);

    if (updatedNotifications[notificationID]) {
      return;
    }

    updatedNotifications[notificationID] = React.createElement(Notification, {
      key: notificationID,
      duration: DURATION_SHORT,
      onClose: function onClose() {
        return handleNotificationClose(notificationID);
      },
      type: notificationType
    }, React.createElement("span", null, React.createElement(FormattedMessage, message)));
    setNotifications(updatedNotifications);
    setNotificationID(notificationID + 1);
  }, [handleNotificationClose, notificationID, notifications]); // Handle successful PUT requests to /files or /folders

  var _handleUpdateSharedLinkSuccess = function handleUpdateSharedLinkSuccess(itemData) {
    var _convertItemResponse = convertItemResponse(itemData),
        updatedItem = _convertItemResponse.item,
        updatedSharedLink = _convertItemResponse.sharedLink;

    setItem(function (prevItem) {
      return _objectSpread({}, prevItem, {}, updatedItem);
    });
    setSharedLink(function (prevSharedLink) {
      return _objectSpread({}, prevSharedLink, {}, updatedSharedLink);
    }); // merge new shared link data with current shared link data
  };
  /**
   * Handle a successful shared link removal request.
   *
   * Most of the data for the shared link will be removed, with the exception of the "canInvite" and "serverURL"
   * properties, both of which are still necessary for rendering the form-only version of ContentSharing.
   * We retain "serverURL" from the previous shared link, to avoid having to make another call to the Users API.
   *
   * @param {ContentSharingItemAPIResponse} itemData
   */


  var _handleRemoveSharedLinkSuccess = function handleRemoveSharedLinkSuccess(itemData) {
    var _convertItemResponse2 = convertItemResponse(itemData),
        updatedItem = _convertItemResponse2.item,
        updatedSharedLink = _convertItemResponse2.sharedLink;

    setItem(function (prevItem) {
      return _objectSpread({}, prevItem, {}, updatedItem);
    });
    setSharedLink(function (prevSharedLink) {
      return _objectSpread({}, updatedSharedLink, {
        serverURL: prevSharedLink ? prevSharedLink.serverURL : ''
      });
    });
  }; // Generate shared link CRUD functions for the item


  var _useSharedLink = useSharedLink(api, itemID, itemType, permissions, accessLevel, {
    handleUpdateSharedLinkError: function handleUpdateSharedLinkError() {
      createNotification(TYPE_ERROR, contentSharingMessages.sharedLinkUpdateError);
      setIsLoading(false);
      closeSettings();
    },
    handleUpdateSharedLinkSuccess: function handleUpdateSharedLinkSuccess(itemData) {
      createNotification(TYPE_INFO, contentSharingMessages.sharedLinkSettingsUpdateSuccess);

      _handleUpdateSharedLinkSuccess(itemData);

      setIsLoading(false);
      closeSettings();
    },
    handleRemoveSharedLinkError: function handleRemoveSharedLinkError() {
      createNotification(TYPE_ERROR, contentSharingMessages.sharedLinkUpdateError);
      setIsLoading(false);
      closeComponent(); // if this function is provided, it will close the modal
    },
    handleRemoveSharedLinkSuccess: function handleRemoveSharedLinkSuccess(itemData) {
      createNotification(TYPE_INFO, contentSharingMessages.sharedLinkRemovalSuccess);

      _handleRemoveSharedLinkSuccess(itemData);

      setIsLoading(false);
      closeComponent();
    },
    setIsLoading: setIsLoading,
    transformAccess: function transformAccess(newAccessLevel) {
      return USM_TO_API_ACCESS_LEVEL_MAP[newAccessLevel];
    },
    transformPermissions: function transformPermissions(newSharedLinkPermissionLevel) {
      return convertSharedLinkPermissions(newSharedLinkPermissionLevel);
    },
    transformSettings: function transformSettings(settings, access) {
      return convertSharedLinkSettings(settings, access, isDownloadAvailable, serverURL);
    }
  }),
      changeSharedLinkAccessLevel = _useSharedLink.changeSharedLinkAccessLevel,
      changeSharedLinkPermissionLevel = _useSharedLink.changeSharedLinkPermissionLevel,
      onAddLink = _useSharedLink.onAddLink,
      onRemoveLink = _useSharedLink.onRemoveLink,
      onSubmitSettings = _useSharedLink.onSubmitSettings;

  setChangeSharedLinkAccessLevel(function () {
    return changeSharedLinkAccessLevel;
  });
  setChangeSharedLinkPermissionLevel(function () {
    return changeSharedLinkPermissionLevel;
  });
  setOnAddLink(function () {
    return onAddLink;
  });
  setOnRemoveLink(function () {
    return onRemoveLink;
  });
  setOnSubmitSettings(function () {
    return onSubmitSettings;
  }); // Set the collaborators list

  var collaboratorsListFromAPI = useCollaborators(api, itemID, itemType, {
    handleError: function handleError() {
      return createNotification(TYPE_ERROR, contentSharingMessages.collaboratorsLoadingError);
    }
  });
  var avatarsFromAPI = useAvatars(api, itemID, collaboratorsListFromAPI);

  if (collaboratorsListFromAPI && avatarsFromAPI && !collaboratorsList) {
    setCollaboratorsList(convertCollabsResponse(collaboratorsListFromAPI, avatarsFromAPI, ownerEmail, currentUserID === ownerID));
  } // Set the getContacts function


  var getContactsFn = useContacts(api, itemID, {
    handleError: function handleError() {
      return createNotification(TYPE_ERROR, contentSharingMessages.getContactsError);
    },
    transformGroups: function transformGroups(data) {
      return convertGroupContactsResponse(data);
    },
    transformUsers: function transformUsers(data) {
      return convertUserContactsResponse(data, currentUserID);
    }
  });

  if (getContactsFn && !getContacts) {
    setGetContacts(function () {
      return getContactsFn;
    });
  } // Set the sendInvites function


  var sendInvitesFn = useInvites(api, itemID, itemType, {
    handleSuccess: function handleSuccess(response) {
      createNotification(TYPE_INFO, contentSharingMessages.sendInvitesSuccess);
      setIsLoading(false);
      setCollaboratorsList(function (prevList) {
        var newList = prevList ? _objectSpread({}, prevList) : {
          collaborators: []
        };
        var newCollab = convertCollab({
          collab: response,
          ownerEmail: ownerEmail,
          isCurrentUserOwner: currentUserID === ownerID
        });

        if (newCollab) {
          newList.collaborators.push(newCollab);
        }

        return newList;
      });
      closeComponent();
    },
    handleError: function handleError() {
      createNotification(TYPE_ERROR, contentSharingMessages.sendInvitesError);
      setIsLoading(false);
      closeComponent();
    },
    setIsLoading: setIsLoading,
    transformRequest: function transformRequest(data) {
      return convertCollabsRequest(data);
    }
  });

  if (sendInvitesFn && !sendInvites) {
    setSendInvites(function () {
      return sendInvitesFn;
    });
  }

  return React.createElement(NotificationsWrapper, null, React.createElement(React.Fragment, null, _toConsumableArray(Object.values(notifications))));
}

export default SharingNotification;
//# sourceMappingURL=SharingNotification.js.map