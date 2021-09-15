function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as React from 'react';
import noop from 'lodash/noop';
import API from '../../../api';

/**
 * Generate the getContactsByEmail() function, which is used for looking up contacts added to the collaborators field in the USM.
 *
 * @param {API} api
 * @param {string} itemID
 * @param {ContentSharingHooksOptions} options
 * @returns {GetContactsByEmailFnType | null}
 */
function useContactsByEmail(api, itemID, options) {
  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      getContactsByEmail = _React$useState2[0],
      setGetContactsByEmail = _React$useState2[1];

  var _options$handleSucces = options.handleSuccess,
      handleSuccess = _options$handleSucces === void 0 ? noop : _options$handleSucces,
      _options$handleError = options.handleError,
      handleError = _options$handleError === void 0 ? noop : _options$handleError,
      transformUsers = options.transformUsers;
  React.useEffect(function () {
    if (getContactsByEmail) return;

    var resolveAPICall = function resolveAPICall(resolve, response, transformFn) {
      handleSuccess(response); // A successful API call will always return an entries array, but we still need these checks for Flow purposes

      if (response && response.entries && response.entries.length) {
        return resolve(transformFn ? transformFn(response) : response.entries);
      }

      return resolve({});
    };

    var updatedGetContactsByEmailFn = function updatedGetContactsByEmailFn() {
      return function (filterTerm) {
        if (!filterTerm || !Array.isArray(filterTerm.emails) || !filterTerm.emails.length) {
          return Promise.resolve({});
        }

        var parsedFilterTerm = filterTerm.emails[0];
        return new Promise(function (resolve) {
          api.getMarkerBasedUsersAPI(false).getUsersInEnterprise(itemID, function (response) {
            return resolveAPICall(resolve, response, transformUsers);
          }, handleError, {
            filter_term: parsedFilterTerm
          });
        });
      };
    };

    setGetContactsByEmail(updatedGetContactsByEmailFn);
  }, [api, getContactsByEmail, handleError, handleSuccess, itemID, transformUsers]);
  return getContactsByEmail;
}

export default useContactsByEmail;
//# sourceMappingURL=useContactsByEmail.js.map