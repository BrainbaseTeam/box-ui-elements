function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
 * @file Helper for the box file API
 * @author Box
 */
import queryString from 'query-string';
import getProp from 'lodash/get';
import { findMissingProperties, fillMissingProperties } from '../utils/fields';
import { getTypedFileId } from '../utils/file';
import { getBadItemError, getBadPermissionsError } from '../utils/error';
import { CACHE_PREFIX_FILE, ERROR_CODE_FETCH_FILE, ERROR_CODE_GET_DOWNLOAD_URL, FIELD_AUTHENTICATED_DOWNLOAD_URL, FIELD_EXTENSION, FIELD_IS_DOWNLOAD_AVAILABLE, REPRESENTATIONS_RESPONSE_ERROR, REPRESENTATIONS_RESPONSE_SUCCESS, REPRESENTATIONS_RESPONSE_VIEWABLE, X_REP_HINTS } from '../constants';
import Item from './Item';
import { retryNumOfTimes } from '../utils/function';
import TokenService from '../utils/TokenService';

var File =
/*#__PURE__*/
function (_Item) {
  _inherits(File, _Item);

  function File() {
    _classCallCheck(this, File);

    return _possibleConstructorReturn(this, _getPrototypeOf(File).apply(this, arguments));
  }

  _createClass(File, [{
    key: "getCacheKey",

    /**
     * Creates a key for the cache
     *
     * @param {string} id - Folder id
     * @return {string} key
     */
    value: function getCacheKey(id) {
      return "".concat(CACHE_PREFIX_FILE).concat(id);
    }
    /**
     * API URL for files
     *
     * @param {string} [id] - Optional file id
     * @return {string} base url for files
     */

  }, {
    key: "getUrl",
    value: function getUrl(id) {
      var suffix = id ? "/".concat(id) : '';
      return "".concat(this.getBaseApiUrl(), "/files").concat(suffix);
    }
    /**
     * API for getting download URL for files and file versions
     *
     * @param {string} fileId - File id
     * @param {BoxItem|BoxItemVersion} fileOrFileVersion - File or file version to download
     * @param {Function} successCallback - Success callback
     * @param {Function} errorCallback - Error callback
     * @return {void}
     */

  }, {
    key: "getDownloadUrl",
    value: function () {
      var _getDownloadUrl = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(fileId, fileOrFileVersion, successCallback, errorCallback) {
        var downloadAvailable, downloadUrl, token, _queryString$parseUrl, query, downloadBaseUrl, downloadUrlParams, downloadUrlQuery;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.errorCode = ERROR_CODE_GET_DOWNLOAD_URL;
                this.errorCallback = errorCallback;
                this.successCallback = successCallback;
                downloadAvailable = fileOrFileVersion[FIELD_IS_DOWNLOAD_AVAILABLE];
                downloadUrl = fileOrFileVersion[FIELD_AUTHENTICATED_DOWNLOAD_URL];
                _context.next = 7;
                return TokenService.getReadToken(getTypedFileId(fileId), this.options.token);

              case 7:
                token = _context.sent;

                if (!(!downloadAvailable || !downloadUrl || !token)) {
                  _context.next = 11;
                  break;
                }

                this.errorHandler(new Error('Download is missing required fields or token.'));
                return _context.abrupt("return");

              case 11:
                _queryString$parseUrl = queryString.parseUrl(downloadUrl), query = _queryString$parseUrl.query, downloadBaseUrl = _queryString$parseUrl.url;
                downloadUrlParams = _objectSpread({}, query, {
                  access_token: token
                });
                downloadUrlQuery = queryString.stringify(downloadUrlParams);
                this.successHandler("".concat(downloadBaseUrl, "?").concat(downloadUrlQuery));

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getDownloadUrl(_x, _x2, _x3, _x4) {
        return _getDownloadUrl.apply(this, arguments);
      }

      return getDownloadUrl;
    }()
    /**
     * Determines whether the call to the file representations API has completed
     *
     * @param {data: { FileRepresentation }} response
     * @return {boolean}
     */

  }, {
    key: "isRepresentationsCallComplete",
    value: function isRepresentationsCallComplete(response) {
      var status = getProp(response, 'data.status.state');
      return !status || status === REPRESENTATIONS_RESPONSE_ERROR || status === REPRESENTATIONS_RESPONSE_SUCCESS || status === REPRESENTATIONS_RESPONSE_VIEWABLE;
    }
    /**
     * Polls a representation's infoUrl, attempting to generate a representation
     *
     * @param {FileRepresentation} representation - representation that should have its info.url polled
     * @return {Promise<FileRepresentation>} - representation updated with most current status
     */

  }, {
    key: "generateRepresentation",
    value: function () {
      var _generateRepresentation = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(representation) {
        var _this = this;

        var infoUrl;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                infoUrl = getProp(representation, 'info.url');

                if (infoUrl) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return", representation);

              case 3:
                return _context2.abrupt("return", retryNumOfTimes(function (successCallback, errorCallback) {
                  return _this.xhr.get({
                    successCallback: successCallback,
                    errorCallback: errorCallback,
                    url: infoUrl
                  }).then(function (response) {
                    return _this.isRepresentationsCallComplete(response) ? successCallback(response.data) : errorCallback(response.data);
                  }).catch(function (e) {
                    errorCallback(e);
                  });
                }, 4, 2000, 2));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function generateRepresentation(_x5) {
        return _generateRepresentation.apply(this, arguments);
      }

      return generateRepresentation;
    }()
    /**
     * API for getting a thumbnail URL for a BoxItem
     *
     * @param {BoxItem} item - BoxItem to get the thumbnail URL for
     * @return {Promise<?string>} - the url for the item's thumbnail, or null
     */

  }, {
    key: "getThumbnailUrl",
    value: function () {
      var _getThumbnailUrl = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(item) {
        var entry, extension, template, token, thumbnailUrl, _queryString$parseUrl2, query, thumbnailBaseUrl, thumbnailUrlParams, thumbnailUrlQuery;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                entry = getProp(item, 'representations.entries[0]');
                extension = getProp(entry, 'representation');
                template = getProp(entry, 'content.url_template');
                _context3.next = 5;
                return TokenService.getReadToken(getTypedFileId(item.id), this.options.token);

              case 5:
                token = _context3.sent;

                if (!(!extension || !template || !token)) {
                  _context3.next = 8;
                  break;
                }

                return _context3.abrupt("return", null);

              case 8:
                thumbnailUrl = template.replace('{+asset_path}', extension === 'jpg' ? '' : '1.png');
                _queryString$parseUrl2 = queryString.parseUrl(thumbnailUrl), query = _queryString$parseUrl2.query, thumbnailBaseUrl = _queryString$parseUrl2.url;
                thumbnailUrlParams = _objectSpread({}, query, {
                  access_token: token
                });
                thumbnailUrlQuery = queryString.stringify(thumbnailUrlParams);
                return _context3.abrupt("return", "".concat(thumbnailBaseUrl, "?").concat(thumbnailUrlQuery));

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getThumbnailUrl(_x6) {
        return _getThumbnailUrl.apply(this, arguments);
      }

      return getThumbnailUrl;
    }()
    /**
     * API for setting the description of a file
     *
     * @param {BoxItem} file - File object for which we are changing the description
     * @param {string} description - New file description
     * @param {Function} successCallback - Success callback
     * @param {Function} errorCallback - Error callback
     * @return {Promise}
     */

  }, {
    key: "setFileDescription",
    value: function setFileDescription(file, description, successCallback, errorCallback) {
      var _this2 = this;

      var id = file.id,
          permissions = file.permissions;

      if (!id || !permissions) {
        errorCallback(getBadItemError());
        return Promise.reject();
      }

      if (!permissions.can_rename) {
        errorCallback(getBadPermissionsError());
        return Promise.reject();
      }

      return this.xhr.put({
        id: getTypedFileId(id),
        url: this.getUrl(id),
        data: {
          description: description
        }
      }).then(function (_ref) {
        var data = _ref.data;

        if (!_this2.isDestroyed()) {
          var updatedFile = _this2.merge(_this2.getCacheKey(id), 'description', data.description);

          successCallback(updatedFile);
        }
      }).catch(function () {
        if (!_this2.isDestroyed()) {
          var originalFile = _this2.merge(_this2.getCacheKey(id), 'description', file.description);

          errorCallback(originalFile);
        }
      });
    }
    /**
     * Gets a box file
     *
     * @param {string} id - File id
     * @param {Function} successCallback - Function to call with results
     * @param {Function} errorCallback - Function to call with errors
     * @param {boolean|void} [options.fields] - Optionally include specific fields
     * @param {boolean|void} [options.forceFetch] - Optionally Bypasses the cache
     * @param {boolean|void} [options.refreshCache] - Optionally Updates the cache
     * @return {Promise}
     */

  }, {
    key: "getFile",
    value: function () {
      var _getFile = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(id, successCallback, errorCallback) {
        var options,
            cache,
            key,
            isCached,
            file,
            missingFields,
            xhrOptions,
            _ref2,
            data,
            dataWithMissingFields,
            _args4 = arguments;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                options = _args4.length > 3 && _args4[3] !== undefined ? _args4[3] : {};

                if (!this.isDestroyed()) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt("return");

              case 3:
                cache = this.getCache();
                key = this.getCacheKey(id);
                isCached = !options.forceFetch && cache.has(key);
                file = isCached ? cache.get(key) : {
                  id: id
                };
                missingFields = findMissingProperties(file, options.fields);
                xhrOptions = {
                  id: getTypedFileId(id),
                  url: this.getUrl(id),
                  headers: {
                    'X-Rep-Hints': X_REP_HINTS
                  }
                };
                this.errorCode = ERROR_CODE_FETCH_FILE;
                this.successCallback = successCallback;
                this.errorCallback = errorCallback; // If the file was cached and there are no missing fields
                // then just return the cached file and optionally refresh
                // the cache with new data if required

                if (!(isCached && missingFields.length === 0)) {
                  _context4.next = 17;
                  break;
                }

                successCallback(file);
                missingFields = options.fields || [];

                if (options.refreshCache) {
                  _context4.next = 17;
                  break;
                }

                return _context4.abrupt("return");

              case 17:
                // If there are missing fields to fetch, add it to the params
                if (missingFields.length > 0) {
                  xhrOptions.params = {
                    fields: missingFields.toString()
                  };
                }

                _context4.prev = 18;
                _context4.next = 21;
                return this.xhr.get(xhrOptions);

              case 21:
                _ref2 = _context4.sent;
                data = _ref2.data;

                if (!this.isDestroyed()) {
                  _context4.next = 25;
                  break;
                }

                return _context4.abrupt("return");

              case 25:
                // Merge fields that were requested but were actually not returned.
                // This part is mostly useful for metadata.foo.bar fields since the API
                // returns { metadata: null } instead of { metadata: { foo: { bar: null } } }
                dataWithMissingFields = fillMissingProperties(data, missingFields); // Cache check is again done since this code is executed async

                if (cache.has(key)) {
                  cache.merge(key, dataWithMissingFields);
                } else {
                  // If there was nothing in the cache
                  cache.set(key, dataWithMissingFields);
                }

                this.successHandler(cache.get(key));
                _context4.next = 33;
                break;

              case 30:
                _context4.prev = 30;
                _context4.t0 = _context4["catch"](18);
                this.errorHandler(_context4.t0);

              case 33:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[18, 30]]);
      }));

      function getFile(_x7, _x8, _x9) {
        return _getFile.apply(this, arguments);
      }

      return getFile;
    }()
    /**
     * Gets the extension of a box file.
     *
     * @param {string} id - File id
     * @param {Function} successCallback - Function to call with results
     * @param {Function} errorCallback - Function to call with errors
     * @return {Promise}
     */

  }, {
    key: "getFileExtension",
    value: function getFileExtension(id, successCallback, errorCallback) {
      if (this.isDestroyed()) {
        return;
      }

      this.getFile(id, successCallback, errorCallback, {
        fields: [FIELD_EXTENSION]
      });
    }
  }]);

  return File;
}(Item);

export default File;
//# sourceMappingURL=File.js.map