function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Helper for the plain Box Upload API
 * @author Box
 */
import noop from 'lodash/noop';
import { digest } from '../../utils/webcrypto';
import { getFileLastModifiedAsISONoMSIfPossible } from '../../utils/uploads';
import BaseUpload from './BaseUpload';
var CONTENT_MD5_HEADER = 'Content-MD5';

var PlainUpload =
/*#__PURE__*/
function (_BaseUpload) {
  _inherits(PlainUpload, _BaseUpload);

  function PlainUpload() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PlainUpload);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PlainUpload)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "uploadSuccessHandler", function (_ref) {
      var data = _ref.data;
      var entries = data.entries;

      if (_this.isDestroyed()) {
        return;
      }

      if (typeof _this.successCallback === 'function') {
        // Response entries are the successfully created Box File objects
        _this.successCallback(entries);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "uploadProgressHandler", function (event) {
      if (_this.isDestroyed()) {
        return;
      }

      if (typeof _this.progressCallback === 'function') {
        _this.progressCallback(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "preflightSuccessHandler",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_ref3) {
        var data, uploadUrl, attributes, options, sha1;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = _ref3.data;

                if (!_this.isDestroyed()) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                // Use provided upload URL if passed in, otherwise construct
                uploadUrl = data.upload_url;

                if (!uploadUrl) {
                  uploadUrl = "".concat(_this.getBaseUploadUrl(), "/files/content");

                  if (_this.fileId) {
                    uploadUrl = uploadUrl.replace('content', "".concat(_this.fileId, "/content"));
                  }
                }

                attributes = JSON.stringify({
                  name: _this.fileName,
                  parent: {
                    id: _this.folderId
                  },
                  description: _this.fileDescription,
                  content_modified_at: getFileLastModifiedAsISONoMSIfPossible(_this.file)
                });
                options = {
                  url: uploadUrl,
                  data: {
                    attributes: attributes,
                    file: _this.file
                  },
                  headers: {},
                  successHandler: _this.uploadSuccessHandler,
                  errorHandler: _this.preflightErrorHandler,
                  progressHandler: _this.uploadProgressHandler
                }; // Calculate SHA1 for file consistency check

                _context.next = 9;
                return _this.computeSHA1(_this.file);

              case 9:
                sha1 = _context.sent;

                if (sha1) {
                  options.headers = _defineProperty({}, CONTENT_MD5_HEADER, sha1);
                }

                _this.xhr.uploadFile(options);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(PlainUpload, [{
    key: "upload",

    /**
     * Uploads a file. If there is a conflict and overwrite is true, replace the file.
     * Otherwise, re-upload with a different name.
     *
     * @param {Object} options - Upload options
     * @param {string} options.folderId - untyped folder id
     * @param {string} [options.fileId] - Untyped file id (e.g. no "file_" prefix)
     * @param {File} options.file - File blob object
     * @param {Function} [options.successCallback] - Function to call with response
     * @param {Function} [options.errorCallback] - Function to call with errors
     * @param {Function} [options.progressCallback] - Function to call with progress
     * @param {Function} [options.conflictCallback] - Function to call on conflicting file names
     * @param {boolean} [overwrite] - Should upload overwrite file with same name
     * @return {void}
     */
    value: function upload(_ref4) {
      var folderId = _ref4.folderId,
          fileId = _ref4.fileId,
          file = _ref4.file,
          fileDescription = _ref4.fileDescription,
          _ref4$successCallback = _ref4.successCallback,
          successCallback = _ref4$successCallback === void 0 ? noop : _ref4$successCallback,
          _ref4$errorCallback = _ref4.errorCallback,
          errorCallback = _ref4$errorCallback === void 0 ? noop : _ref4$errorCallback,
          _ref4$progressCallbac = _ref4.progressCallback,
          progressCallback = _ref4$progressCallbac === void 0 ? noop : _ref4$progressCallbac,
          conflictCallback = _ref4.conflictCallback,
          _ref4$overwrite = _ref4.overwrite,
          overwrite = _ref4$overwrite === void 0 ? true : _ref4$overwrite;

      if (this.isDestroyed()) {
        return;
      } // Save references


      this.folderId = folderId;
      this.fileId = fileId;
      this.file = file;
      this.fileDescription = fileDescription;
      this.fileName = this.file.name;
      this.successCallback = successCallback;
      this.errorCallback = errorCallback;
      this.progressCallback = progressCallback;
      this.overwrite = overwrite;
      this.conflictCallback = conflictCallback;
      this.makePreflightRequest();
    }
    /**
     * Cancels upload of a file.
     *
     * @return {void}
     */

  }, {
    key: "cancel",
    value: function cancel() {
      if (this.isDestroyed()) {
        return;
      }

      clearTimeout(this.retryTimeout);
      this.destroy();
    }
    /**
     * Calculates SHA1 of a file
     *
     * @param {File} file
     * @return {Promise} Promise that resolves with SHA1 digest
     */

  }, {
    key: "computeSHA1",
    value: function () {
      var _computeSHA = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(file) {
        var sha1, reader, _ref5, buffer, hashBuffer, hashArray;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                sha1 = '';
                _context2.prev = 1;
                // Adapted from https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
                reader = new window.FileReader();
                _context2.next = 5;
                return this.readFile(reader, file);

              case 5:
                _ref5 = _context2.sent;
                buffer = _ref5.buffer;
                _context2.next = 9;
                return digest('SHA-1', buffer);

              case 9:
                hashBuffer = _context2.sent;
                hashArray = Array.from(new Uint8Array(hashBuffer));
                sha1 = hashArray.map(function (b) {
                  return "00".concat(b.toString(16)).slice(-2);
                }).join('');
                _context2.next = 16;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](1);

              case 16:
                return _context2.abrupt("return", sha1);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 14]]);
      }));

      function computeSHA1(_x2) {
        return _computeSHA.apply(this, arguments);
      }

      return computeSHA1;
    }()
  }]);

  return PlainUpload;
}(BaseUpload);

export default PlainUpload;
//# sourceMappingURL=PlainUpload.js.map