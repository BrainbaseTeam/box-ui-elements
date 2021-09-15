function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as React from 'react';
import noop from 'lodash/noop';
import API from '../../../api';
import { FIELD_NAME, FIELD_PERMISSIONS } from '../../../constants';

/**
 * Generate the getContacts() function, which is used for retrieving potential collaborators in the USM.
 *
 * @param {API} api
 * @param {string} itemID
 * @param {ContentSharingHooksOptions} options
 * @returns {GetContactsFnType | null}
 */
function useContacts(api, itemID, options) {
  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      getContacts = _React$useState2[0],
      setGetContacts = _React$useState2[1];

  var _options$handleSucces = options.handleSuccess,
      handleSuccess = _options$handleSucces === void 0 ? noop : _options$handleSucces,
      _options$handleError = options.handleError,
      handleError = _options$handleError === void 0 ? noop : _options$handleError,
      transformGroups = options.transformGroups,
      transformUsers = options.transformUsers;
  React.useEffect(function () {
    if (getContacts) return;

    var resolveAPICall = function resolveAPICall(resolve, response, transformFn) {
      handleSuccess(response); // A successful API call will always return an entries array, but we still need these checks for Flow purposes

      var entriesExist = response && response.entries && response.entries.length;

      if (transformFn && entriesExist) {
        return resolve(transformFn(response));
      }

      var emptyEntries = [];
      return resolve(response && response.entries ? response.entries : emptyEntries);
    };

    var updatedGetContactsFn = function updatedGetContactsFn() {
      return function (filterTerm) {
        var getUsers = new Promise(function (resolve) {
          api.getMarkerBasedUsersAPI(false).getUsersInEnterprise(itemID, function (response) {
            return resolveAPICall(resolve, response, transformUsers);
          }, handleError, {
            filter_term: filterTerm
          });
        });
        var getGroups = new Promise(function (resolve) {
          api.getMarkerBasedGroupsAPI(false).getGroupsInEnterprise(itemID, function (response) {
            return resolveAPICall(resolve, response, transformGroups);
          }, handleError, {
            fields: [FIELD_NAME, FIELD_PERMISSIONS].toString(),
            filter_term: filterTerm
          });
        });
        return Promise.all([getUsers, getGroups]).then(function (contactArrays) {
          return [].concat(_toConsumableArray(contactArrays[0]), _toConsumableArray(contactArrays[1]));
        });
      };
    };

    setGetContacts(updatedGetContactsFn);
  }, [api, getContacts, handleError, handleSuccess, itemID, transformGroups, transformUsers]);
  return getContacts;
}

export default useContacts;
//# sourceMappingURL=useContacts.js.map