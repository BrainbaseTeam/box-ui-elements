function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as React from 'react';
import API from '../../../api';

/**
 * Generate a map of avatar URLs, which are used to display collaborators in the USM.
 *
 * @param {API} api
 * @param {string} itemID
 * @param {Collaborations | null} collaboratorsList
 * @returns {AvatarURLMap | null}
 */
function useAvatars(api, itemID, collaboratorsList) {
  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      avatarURLMap = _React$useState2[0],
      setAvatarURLMap = _React$useState2[1];

  React.useEffect(function () {
    if (avatarURLMap || !collaboratorsList || !collaboratorsList.entries) return;
    var usersAPI = api.getUsersAPI(false);

    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var retrievedAvatarURLMap, entries;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              retrievedAvatarURLMap = {};
              entries = collaboratorsList ? collaboratorsList.entries : []; // needed for Flow

              _context2.next = 4;
              return Promise.all(entries.map(
              /*#__PURE__*/
              function () {
                var _ref2 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee(collab) {
                  var userID, url;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (!(!collab || !collab.accessible_by)) {
                            _context.next = 2;
                            break;
                          }

                          return _context.abrupt("return");

                        case 2:
                          userID = collab.accessible_by.id;
                          _context.next = 5;
                          return usersAPI.getAvatarUrlWithAccessToken(userID.toString(), itemID);

                        case 5:
                          url = _context.sent;
                          retrievedAvatarURLMap[userID] = url;

                        case 7:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }()));

            case 4:
              setAvatarURLMap(retrievedAvatarURLMap);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }, [api, avatarURLMap, collaboratorsList, itemID]);
  return avatarURLMap;
}

export default useAvatars;
//# sourceMappingURL=useAvatars.js.map