function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as React from 'react';
import noop from 'lodash/noop';
import API from '../../../api';
import { TYPE_FILE, TYPE_FOLDER } from '../../../constants';

/**
 * Get the item's collaborators
 *
 * A note on the wording: the USM uses the term "collaborators" internally,
 * so the state variable and state setting function also refer to "collaborators."
 * However, we are using the Collaborations API here, so the API-related functions
 * use the term "collaborations." For more details, see ./api/FileCollaborations.
 *
 * @param {API} api
 * @param {string} itemID
 * @param {ItemType} itemType
 * @param {ContentSharingHooksOptions} options
 * @returns {Collaborations | null}
 */
function useCollaborators(api, itemID, itemType, options) {
  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      collaboratorsList = _React$useState2[0],
      setCollaboratorsList = _React$useState2[1];

  var _options$handleSucces = options.handleSuccess,
      handleSuccess = _options$handleSucces === void 0 ? noop : _options$handleSucces,
      _options$handleError = options.handleError,
      handleError = _options$handleError === void 0 ? noop : _options$handleError;
  React.useEffect(function () {
    if (collaboratorsList) return;

    var handleGetCollaborationsSuccess = function handleGetCollaborationsSuccess(response) {
      setCollaboratorsList(response);
      handleSuccess(response);
    };

    var handleGetCollaborationsError = function handleGetCollaborationsError() {
      setCollaboratorsList({
        entries: [],
        next_marker: null
      });
      handleError();
    };

    var collabAPIInstance;

    if (itemType === TYPE_FILE) {
      collabAPIInstance = api.getFileCollaborationsAPI(false);
    } else if (itemType === TYPE_FOLDER) {
      collabAPIInstance = api.getFolderCollaborationsAPI(false);
    }

    if (collabAPIInstance) {
      collabAPIInstance.getCollaborations(itemID, handleGetCollaborationsSuccess, handleGetCollaborationsError);
    }
  }, [api, collaboratorsList, handleError, handleSuccess, itemID, itemType]);
  return collaboratorsList;
}

export default useCollaborators;
//# sourceMappingURL=useCollaborators.js.map