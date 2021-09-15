function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as React from 'react';
import noop from 'lodash/noop';
import API from '../../../api';

/**
 * Generate the sendInvites() function, which is used for inviting collaborators in the USM.
 *
 * @param {API} api
 * @param {string} itemID
 * @param {ItemType} itemType
 * @param {UseInvitesOptions} options
 */
function useInvites(api, itemID, itemType, options) {
  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      sendInvites = _React$useState2[0],
      setSendInvites = _React$useState2[1];

  var _options$handleSucces = options.handleSuccess,
      handleSuccess = _options$handleSucces === void 0 ? noop : _options$handleSucces,
      _options$handleError = options.handleError,
      handleError = _options$handleError === void 0 ? noop : _options$handleError,
      _options$setIsLoading = options.setIsLoading,
      setIsLoading = _options$setIsLoading === void 0 ? noop : _options$setIsLoading,
      transformRequest = options.transformRequest,
      _options$transformRes = options.transformResponse,
      transformResponse = _options$transformRes === void 0 ? function (arg) {
    return arg;
  } : _options$transformRes;
  React.useEffect(function () {
    if (sendInvites) return;
    var itemData = {
      id: itemID,
      type: itemType
    };

    var sendCollabRequest = function sendCollabRequest(collab) {
      setIsLoading(true);
      return api.getCollaborationsAPI(false).addCollaboration(itemData, collab, function (response) {
        handleSuccess(response);
        return transformResponse(response);
      }, handleError);
    };

    var createPostCollaborationFn = function createPostCollaborationFn() {
      return (
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee(collabRequest) {
            var _transformRequest, users, groups;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (transformRequest) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return", Promise.resolve(null));

                  case 2:
                    _transformRequest = transformRequest(collabRequest), users = _transformRequest.users, groups = _transformRequest.groups;
                    return _context.abrupt("return", Promise.all([users.map(function (user) {
                      return sendCollabRequest(user);
                    }), groups.map(function (group) {
                      return sendCollabRequest(group);
                    })]));

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()
      );
    };

    if (!sendInvites) {
      setSendInvites(createPostCollaborationFn);
    }
  }, [api, handleError, handleSuccess, itemID, itemType, sendInvites, setIsLoading, transformRequest, transformResponse]);
  return sendInvites;
}

export default useInvites;
//# sourceMappingURL=useInvites.js.map