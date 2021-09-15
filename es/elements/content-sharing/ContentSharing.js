function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * 
 * @file ContentSharing Element
 * @description This is the top-level component for ContentSharing. It instantiates the API, which it then
 * passes to the SharingModal component either immediately (when no custom button is provided) or on
 * button click (when a custom button is provided).
 * @author Box
 */
import 'regenerator-runtime/runtime';
import * as React from 'react';
import API from '../../api';
import SharingModal from './SharingModal';
import { CLIENT_NAME_CONTENT_SHARING, DEFAULT_HOSTNAME_API } from '../../constants';
import '../common/base.scss';
import '../common/fonts.scss';
import '../common/modal.scss';

var createAPI = function createAPI(apiHost, itemID, itemType, token) {
  return new API({
    apiHost: apiHost,
    clientName: CLIENT_NAME_CONTENT_SHARING,
    id: "".concat(itemType, "_").concat(itemID),
    token: token
  });
};

function ContentSharing(_ref) {
  var _ref$apiHost = _ref.apiHost,
      apiHost = _ref$apiHost === void 0 ? DEFAULT_HOSTNAME_API : _ref$apiHost,
      config = _ref.config,
      customButton = _ref.customButton,
      displayInModal = _ref.displayInModal,
      itemID = _ref.itemID,
      itemType = _ref.itemType,
      language = _ref.language,
      messages = _ref.messages,
      token = _ref.token,
      uuid = _ref.uuid;

  var _React$useState = React.useState(createAPI(apiHost, itemID, itemType, token)),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      api = _React$useState2[0],
      setAPI = _React$useState2[1];

  var _React$useState3 = React.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      launchButton = _React$useState4[0],
      setLaunchButton = _React$useState4[1];

  var _React$useState5 = React.useState(!customButton),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      isVisible = _React$useState6[0],
      setIsVisible = _React$useState6[1]; // Reset the API if necessary


  React.useEffect(function () {
    if (!api && apiHost && itemID && itemType && token) {
      setAPI(createAPI(apiHost, itemID, itemType, token));
    }
  }, [api, apiHost, itemID, itemType, token]); // Reset state if the API has changed

  React.useEffect(function () {
    setIsVisible(!customButton);
  }, [api, customButton, uuid]);
  React.useEffect(function () {
    if (customButton && !launchButton) {
      setLaunchButton(React.cloneElement(customButton, {
        onClick: function onClick() {
          return setIsVisible(true);
        }
      }));
    }
  }, [config, customButton, displayInModal, itemID, itemType, language, launchButton, messages, isVisible]);
  return React.createElement(React.Fragment, null, launchButton, api && React.createElement(SharingModal, {
    api: api,
    config: config,
    displayInModal: displayInModal,
    isVisible: isVisible,
    itemID: itemID,
    itemType: itemType,
    language: language,
    messages: messages,
    setIsVisible: setIsVisible,
    uuid: uuid
  }));
}

export default ContentSharing;
//# sourceMappingURL=ContentSharing.js.map