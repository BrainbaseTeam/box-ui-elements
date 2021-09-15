function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * 
 * @file Helper for the box Users API
 * @author Box
 */
import queryString from 'query-string';
import TokenService from '../utils/TokenService';
import { getTypedFileId } from '../utils/file';
import Base from './Base';
import { ERROR_CODE_FETCH_CURRENT_USER } from '../constants';

var Users =
/*#__PURE__*/
function (_Base) {
  _inherits(Users, _Base);

  function Users() {
    _classCallCheck(this, Users);

    return _possibleConstructorReturn(this, _getPrototypeOf(Users).apply(this, arguments));
  }

  _createClass(Users, [{
    key: "getUrl",

    /**
     * API URL for Users
     *
     * @returns {string} base url for users
     */
    value: function getUrl() {
      return "".concat(this.getBaseApiUrl(), "/users/me");
    }
    /**
     * API URL for Users avatar
     *
     * @param {string} id - A box user id.
     * @returns {string} base url for users
     */

  }, {
    key: "getAvatarUrl",
    value: function getAvatarUrl(id) {
      if (!id) {
        throw new Error('Missing user id');
      }

      return "".concat(this.getBaseApiUrl(), "/users/").concat(id, "/avatar");
    }
    /**
     * Gets authenticated user avatar URL from cache or by getting new token
     *
     * @param {string} userId the user id
     * @param {string} fileId the file id
     * @returns {string} the user avatar URL string for a given user with access token attached
     */

  }, {
    key: "getAvatarUrlWithAccessToken",
    value: function () {
      var _getAvatarUrlWithAccessToken = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(userId, fileId) {
        var cache, accessToken, options, urlParams, url;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (userId) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", null);

              case 2:
                // treat cache as key-value pairs of { userId: avatarUrl }
                cache = this.getCache();

                if (!cache.has(userId)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", cache.get(userId));

              case 5:
                _context.next = 7;
                return TokenService.getReadToken(getTypedFileId(fileId), this.options.token);

              case 7:
                accessToken = _context.sent;

                if (!(typeof accessToken === 'string')) {
                  _context.next = 14;
                  break;
                }

                options = {
                  access_token: accessToken,
                  pic_type: 'large'
                };
                urlParams = queryString.stringify(options);
                url = "".concat(this.getAvatarUrl(userId), "?").concat(urlParams);
                cache.set(userId, url);
                return _context.abrupt("return", url);

              case 14:
                return _context.abrupt("return", null);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAvatarUrlWithAccessToken(_x, _x2) {
        return _getAvatarUrlWithAccessToken.apply(this, arguments);
      }

      return getAvatarUrlWithAccessToken;
    }()
    /**
     * API for fetching a user
     *
     * @param {string} id - a Box item id
     * @param {Function} successCallback - Success callback
     * @param {Function} errorCallback - Error callback
     * @param {Object} requestData - additional request data
     * @returns {Promise<void>}
     */

  }, {
    key: "getUser",
    value: function getUser(id, successCallback, errorCallback) {
      var requestData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      this.errorCode = ERROR_CODE_FETCH_CURRENT_USER;
      this.get({
        id: id,
        successCallback: successCallback,
        errorCallback: errorCallback,
        requestData: requestData
      });
    }
  }]);

  return Users;
}(Base);

export default Users;
//# sourceMappingURL=Users.js.map