function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * 
 * @file SharingModal
 * @description This is the second-level component for the ContentSharing Element. It receives an API instance
 * from its parent component, ContentSharing, and then instantiates the UnifiedShareModal with API data.
 * @author Box
 */
import * as React from 'react';
import isEmpty from 'lodash/isEmpty';
import noop from 'lodash/noop';
import { FormattedMessage } from 'react-intl';
import API from '../../api';
import Internationalize from '../common/Internationalize';
import NotificationsWrapper from '../../components/notification/NotificationsWrapper';
import Notification from '../../components/notification/Notification';
import { DURATION_SHORT, TYPE_ERROR } from '../../components/notification/constants';
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import UnifiedShareModal from '../../features/unified-share-modal';
import SharedLinkSettingsModal from '../../features/shared-link-settings-modal';
import SharingNotification from './SharingNotification';
import { convertItemResponse, convertUserContactsByEmailResponse, convertUserResponse } from '../../features/unified-share-modal/utils/convertData';
import useContactsByEmail from './hooks/useContactsByEmail';
import { FIELD_ENTERPRISE, FIELD_HOSTNAME, TYPE_FILE, TYPE_FOLDER } from '../../constants';
import { CONTENT_SHARING_ERRORS, CONTENT_SHARING_ITEM_FIELDS, CONTENT_SHARING_VIEWS } from './constants';
import { INVITEE_PERMISSIONS_FOLDER, INVITEE_PERMISSIONS_FILE } from '../../features/unified-share-modal/constants';
import contentSharingMessages from './messages';

function SharingModal(_ref) {
  var api = _ref.api,
      config = _ref.config,
      displayInModal = _ref.displayInModal,
      isVisible = _ref.isVisible,
      itemID = _ref.itemID,
      itemType = _ref.itemType,
      language = _ref.language,
      messages = _ref.messages,
      setIsVisible = _ref.setIsVisible,
      uuid = _ref.uuid;

  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      item = _React$useState2[0],
      setItem = _React$useState2[1];

  var _React$useState3 = React.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      sharedLink = _React$useState4[0],
      setSharedLink = _React$useState4[1];

  var _React$useState5 = React.useState(null),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      currentUserEnterpriseName = _React$useState6[0],
      setCurrentUserEnterpriseName = _React$useState6[1];

  var _React$useState7 = React.useState(null),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      currentUserID = _React$useState8[0],
      setCurrentUserID = _React$useState8[1];

  var _React$useState9 = React.useState(null),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      initialDataErrorMessage = _React$useState10[0],
      setInitialDataErrorMessage = _React$useState10[1];

  var _React$useState11 = React.useState(false),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      isInitialDataErrorVisible = _React$useState12[0],
      setIsInitialDataErrorVisible = _React$useState12[1];

  var _React$useState13 = React.useState(null),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      collaboratorsList = _React$useState14[0],
      setCollaboratorsList = _React$useState14[1];

  var _React$useState15 = React.useState(null),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      onAddLink = _React$useState16[0],
      setOnAddLink = _React$useState16[1];

  var _React$useState17 = React.useState(null),
      _React$useState18 = _slicedToArray(_React$useState17, 2),
      onRemoveLink = _React$useState18[0],
      setOnRemoveLink = _React$useState18[1];

  var _React$useState19 = React.useState(null),
      _React$useState20 = _slicedToArray(_React$useState19, 2),
      changeSharedLinkAccessLevel = _React$useState20[0],
      setChangeSharedLinkAccessLevel = _React$useState20[1];

  var _React$useState21 = React.useState(null),
      _React$useState22 = _slicedToArray(_React$useState21, 2),
      changeSharedLinkPermissionLevel = _React$useState22[0],
      setChangeSharedLinkPermissionLevel = _React$useState22[1];

  var _React$useState23 = React.useState(null),
      _React$useState24 = _slicedToArray(_React$useState23, 2),
      onSubmitSettings = _React$useState24[0],
      setOnSubmitSettings = _React$useState24[1];

  var _React$useState25 = React.useState(CONTENT_SHARING_VIEWS.UNIFIED_SHARE_MODAL),
      _React$useState26 = _slicedToArray(_React$useState25, 2),
      currentView = _React$useState26[0],
      setCurrentView = _React$useState26[1];

  var _React$useState27 = React.useState(null),
      _React$useState28 = _slicedToArray(_React$useState27, 2),
      getContacts = _React$useState28[0],
      setGetContacts = _React$useState28[1];

  var _React$useState29 = React.useState(null),
      _React$useState30 = _slicedToArray(_React$useState29, 2),
      getContactsByEmail = _React$useState30[0],
      setGetContactsByEmail = _React$useState30[1];

  var _React$useState31 = React.useState(null),
      _React$useState32 = _slicedToArray(_React$useState31, 2),
      sendInvites = _React$useState32[0],
      setSendInvites = _React$useState32[1];

  var _React$useState33 = React.useState(true),
      _React$useState34 = _slicedToArray(_React$useState33, 2),
      isLoading = _React$useState34[0],
      setIsLoading = _React$useState34[1]; // Handle successful GET requests to /files or /folders


  var handleGetItemSuccess = React.useCallback(function (itemData) {
    var _convertItemResponse = convertItemResponse(itemData),
        itemFromAPI = _convertItemResponse.item,
        sharedLinkFromAPI = _convertItemResponse.sharedLink;

    setItem(itemFromAPI);
    setSharedLink(sharedLinkFromAPI);
    setIsLoading(false);
  }, []); // Handle initial data retrieval errors

  var getError = React.useCallback(function (error) {
    if (isInitialDataErrorVisible) return; // display only one component-level notification at a time

    setIsInitialDataErrorVisible(true);
    setIsLoading(false);
    var errorObject;

    if (error.status) {
      errorObject = contentSharingMessages[CONTENT_SHARING_ERRORS[error.status]];
    } else if (error.response && error.response.status) {
      errorObject = contentSharingMessages[CONTENT_SHARING_ERRORS[error.response.status]];
    } else {
      errorObject = contentSharingMessages.loadingError;
    }

    setInitialDataErrorMessage(errorObject);
  }, [isInitialDataErrorVisible]); // Reset state if the API has changed

  React.useEffect(function () {
    setChangeSharedLinkAccessLevel(null);
    setChangeSharedLinkPermissionLevel(null);
    setCollaboratorsList(null);
    setInitialDataErrorMessage(null);
    setCurrentUserID(null);
    setCurrentUserEnterpriseName(null);
    setIsInitialDataErrorVisible(false);
    setIsLoading(true);
    setItem(null);
    setOnAddLink(null);
    setOnRemoveLink(null);
    setSharedLink(null);
  }, [api]); // Refresh error state if the uuid has changed

  React.useEffect(function () {
    setInitialDataErrorMessage(null);
    setIsInitialDataErrorVisible(false);
  }, [uuid]); // Get initial data for the item

  React.useEffect(function () {
    var getItem = function getItem() {
      if (itemType === TYPE_FILE) {
        api.getFileAPI().getFile(itemID, handleGetItemSuccess, getError, {
          fields: CONTENT_SHARING_ITEM_FIELDS
        });
      } else if (itemType === TYPE_FOLDER) {
        api.getFolderAPI().getFolderFields(itemID, handleGetItemSuccess, getError, {
          fields: CONTENT_SHARING_ITEM_FIELDS
        });
      }
    };

    if (api && !isEmpty(api) && !initialDataErrorMessage && isVisible && !item && !sharedLink) {
      getItem();
    }
  }, [api, initialDataErrorMessage, getError, handleGetItemSuccess, isVisible, item, itemID, itemType, sharedLink]); // Get initial data for the user

  React.useEffect(function () {
    var getUserSuccess = function getUserSuccess(userData) {
      var _convertUserResponse = convertUserResponse(userData),
          id = _convertUserResponse.id,
          userEnterpriseData = _convertUserResponse.userEnterpriseData;

      setCurrentUserID(id);
      setCurrentUserEnterpriseName(userEnterpriseData.enterpriseName || null);
      setSharedLink(function (prevSharedLink) {
        return _objectSpread({}, prevSharedLink, {}, userEnterpriseData);
      });
      setInitialDataErrorMessage(null);
      setIsLoading(false);
    };

    var getUserData = function getUserData() {
      api.getUsersAPI(false).getUser(itemID, getUserSuccess, getError, {
        params: {
          fields: [FIELD_ENTERPRISE, FIELD_HOSTNAME].toString()
        }
      });
    };

    if (api && !isEmpty(api) && !initialDataErrorMessage && item && sharedLink && !currentUserID) {
      getUserData();
    }
  }, [getError, item, itemID, itemType, sharedLink, currentUserID, api, initialDataErrorMessage]); // Set the getContactsByEmail function. This call is not associated with a banner notification,
  // which is why it exists at this level and not in SharingNotification

  var getContactsByEmailFn = useContactsByEmail(api, itemID, {
    transformUsers: function transformUsers(data) {
      return convertUserContactsByEmailResponse(data);
    }
  });

  if (getContactsByEmailFn && !getContactsByEmail) {
    setGetContactsByEmail(function () {
      return getContactsByEmailFn;
    });
  } // Display a notification if there is an error in retrieving initial data


  if (initialDataErrorMessage) {
    return isInitialDataErrorVisible ? React.createElement(Internationalize, {
      language: language,
      messages: messages
    }, React.createElement(NotificationsWrapper, null, React.createElement(Notification, {
      onClose: function onClose() {
        return setIsInitialDataErrorVisible(false);
      },
      type: TYPE_ERROR,
      duration: DURATION_SHORT
    }, React.createElement("span", null, React.createElement(FormattedMessage, initialDataErrorMessage))))) : null;
  } // Ensure that all necessary data has been received before rendering child components.
  // If the USM is visible, show the LoadingIndicator; otherwise, show nothing.
  // "serverURL" is added to sharedLink after the call to the Users API, so it needs to be checked separately.


  if (!item || !sharedLink || !currentUserID || !sharedLink.serverURL) {
    return isVisible ? React.createElement(LoadingIndicator, null) : null;
  }

  var ownerEmail = item.ownerEmail,
      ownerID = item.ownerID,
      permissions = item.permissions;
  var _sharedLink$accessLev = sharedLink.accessLevel,
      accessLevel = _sharedLink$accessLev === void 0 ? '' : _sharedLink$accessLev,
      _sharedLink$canChange = sharedLink.canChangeExpiration,
      canChangeExpiration = _sharedLink$canChange === void 0 ? false : _sharedLink$canChange,
      expirationTimestamp = sharedLink.expirationTimestamp,
      _sharedLink$isDownloa = sharedLink.isDownloadAvailable,
      isDownloadAvailable = _sharedLink$isDownloa === void 0 ? false : _sharedLink$isDownloa,
      serverURL = sharedLink.serverURL;
  return React.createElement(Internationalize, {
    language: language,
    messages: messages
  }, React.createElement(React.Fragment, null, React.createElement(SharingNotification, {
    accessLevel: accessLevel,
    api: api,
    closeComponent: displayInModal ? function () {
      return setIsVisible(false);
    } : noop,
    closeSettings: function closeSettings() {
      return setCurrentView(CONTENT_SHARING_VIEWS.UNIFIED_SHARE_MODAL);
    },
    collaboratorsList: collaboratorsList,
    currentUserID: currentUserID,
    getContacts: getContacts,
    isDownloadAvailable: isDownloadAvailable,
    itemID: itemID,
    itemType: itemType,
    onSubmitSettings: onSubmitSettings,
    ownerEmail: ownerEmail,
    ownerID: ownerID,
    permissions: permissions,
    sendInvites: sendInvites,
    serverURL: serverURL,
    setChangeSharedLinkAccessLevel: setChangeSharedLinkAccessLevel,
    setChangeSharedLinkPermissionLevel: setChangeSharedLinkPermissionLevel,
    setGetContacts: setGetContacts,
    setCollaboratorsList: setCollaboratorsList,
    setIsLoading: setIsLoading,
    setItem: setItem,
    setOnAddLink: setOnAddLink,
    setOnRemoveLink: setOnRemoveLink,
    setOnSubmitSettings: setOnSubmitSettings,
    setSendInvites: setSendInvites,
    setSharedLink: setSharedLink
  }), isVisible && currentView === CONTENT_SHARING_VIEWS.SHARED_LINK_SETTINGS && React.createElement(SharedLinkSettingsModal, _extends({
    isDirectLinkUnavailableDueToDownloadSettings: false,
    isDirectLinkUnavailableDueToAccessPolicy: false,
    isDirectLinkUnavailableDueToMaliciousContent: false,
    isOpen: isVisible,
    item: item,
    onRequestClose: function onRequestClose() {
      return setCurrentView(CONTENT_SHARING_VIEWS.UNIFIED_SHARE_MODAL);
    },
    onSubmit: onSubmitSettings,
    submitting: isLoading
  }, sharedLink, {
    canChangeExpiration: canChangeExpiration && !!currentUserEnterpriseName
  })), isVisible && currentView === CONTENT_SHARING_VIEWS.UNIFIED_SHARE_MODAL && React.createElement(UnifiedShareModal, {
    canInvite: sharedLink.canInvite,
    config: config,
    changeSharedLinkAccessLevel: changeSharedLinkAccessLevel,
    changeSharedLinkPermissionLevel: changeSharedLinkPermissionLevel,
    collaboratorsList: collaboratorsList,
    currentUserID: currentUserID,
    displayInModal: displayInModal,
    getCollaboratorContacts: getContacts,
    getContactsByEmail: getContactsByEmail,
    initialDataReceived: true,
    inviteePermissions: itemType === TYPE_FOLDER ? INVITEE_PERMISSIONS_FOLDER : INVITEE_PERMISSIONS_FILE,
    isOpen: isVisible,
    item: item,
    onAddLink: onAddLink,
    onRequestClose: displayInModal ? function () {
      return setIsVisible(false);
    } : noop,
    onRemoveLink: onRemoveLink,
    onSettingsClick: function onSettingsClick() {
      return setCurrentView(CONTENT_SHARING_VIEWS.SHARED_LINK_SETTINGS);
    },
    sendInvites: sendInvites,
    sharedLink: _objectSpread({}, sharedLink, {
      expirationTimestamp: expirationTimestamp ? expirationTimestamp / 1000 : null
    }) // the USM expects this value in seconds, while the SLSM expects this value in milliseconds
    ,
    submitting: isLoading
  })));
}

export default SharingModal;
//# sourceMappingURL=SharingModal.js.map