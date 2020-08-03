function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Base helper for the Box Upload APIs
 * @author Box
 */
import Base from '../Base';
import { DEFAULT_RETRY_DELAY_MS, MS_IN_S } from '../../constants';
var MAX_RETRY = 5;

var BaseUpload = /*#__PURE__*/function (_Base) {
  _inherits(BaseUpload, _Base);

  var _super = _createSuper(BaseUpload);

  function BaseUpload() {
    var _this;

    _classCallCheck(this, BaseUpload);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "retryCount", 0);

    _defineProperty(_assertThisInitialized(_this), "makePreflightRequest", function () {
      if (_this.isDestroyed()) {
        return;
      }

      var url = "".concat(_this.getBaseApiUrl(), "/files/content");

      if (_this.fileId) {
        url = url.replace('content', "".concat(_this.fileId, "/content"));
      }

      var _this$file = _this.file,
          size = _this$file.size,
          name = _this$file.name;
      var attributes = {
        name: _this.fileName || name,
        parent: {
          id: _this.folderId
        },
        size: size
      };

      _this.xhr.options({
        url: url,
        data: attributes,
        successHandler: _this.preflightSuccessHandler,
        errorHandler: _this.preflightErrorHandler
      });
    });

    _defineProperty(_assertThisInitialized(_this), "preflightErrorHandler", function (error) {
      if (_this.isDestroyed()) {
        return;
      }

      _this.fileName = _this.file ? _this.file.name : ''; // TODO: Normalize error object and clean up error handling

      var errorData = error;
      var response = error.response;

      if (response && response.data) {
        errorData = response.data;
      }

      if (_this.retryCount >= MAX_RETRY) {
        _this.errorCallback(errorData); // Automatically handle name conflict errors

      } else if (errorData && errorData.status === 409) {
        if (_this.overwrite) {
          var conflictFileId = errorData.context_info.conflicts.id;

          if (!_this.fileId && !!conflictFileId) {
            _this.fileId = conflictFileId;
          } // Error response contains file ID to upload a new file version for


          _this.makePreflightRequest();
        } else {
          // Otherwise, reupload and append timestamp
          // 'test.jpg' becomes 'test-TIMESTAMP.jpg'
          var extension = _this.fileName.substr(_this.fileName.lastIndexOf('.')) || '';
          _this.fileName = "".concat(_this.fileName.substr(0, _this.fileName.lastIndexOf('.')), "-").concat(Date.now()).concat(extension);

          _this.makePreflightRequest();
        }

        _this.retryCount += 1; // When rate limited, retry after interval defined in header
      } else if (errorData && (errorData.status === 429 || errorData.code === 'too_many_requests')) {
        var retryAfterMs = DEFAULT_RETRY_DELAY_MS;

        if (errorData.headers) {
          var retryAfterSec = parseInt(errorData.headers['retry-after'] || errorData.headers.get('Retry-After'), 10);

          if (!Number.isNaN(retryAfterSec)) {
            retryAfterMs = retryAfterSec * MS_IN_S;
          }
        }

        _this.retryTimeout = setTimeout(_this.makePreflightRequest, retryAfterMs);
        _this.retryCount += 1; // If another error status that isn't name conflict or rate limiting, fail upload
      } else if (errorData && (errorData.status || errorData.message === 'Failed to fetch') && typeof _this.errorCallback === 'function') {
        _this.errorCallback(errorData); // Retry with exponential backoff for other failures since these are likely to be network errors

      } else {
        _this.retryTimeout = setTimeout(_this.makePreflightRequest, Math.pow(2, _this.retryCount) * MS_IN_S);
        _this.retryCount += 1;
      }
    });

    return _this;
  }

  _createClass(BaseUpload, [{
    key: "readFile",

    /**
     * Read a blob with FileReader
     *
     * @param {FileReader} reader
     * @param {Blob} blob
     * @return {Promise}
     */
    value: function readFile(reader, blob) {
      return new Promise(function (resolve, reject) {
        reader.readAsArrayBuffer(blob);

        reader.onload = function () {
          resolve({
            buffer: reader.result,
            readCompleteTimestamp: Date.now()
          });
        };

        reader.onerror = reject;
      });
    }
  }]);

  return BaseUpload;
}(Base);

export default BaseUpload;
//# sourceMappingURL=BaseUpload.js.map