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
 * @file Multiput upload part
 * @author Box
 */
import noop from 'lodash/noop';
import getProp from 'lodash/get';
import { updateQueryParameters } from '../../utils/url';
import { getBoundedExpBackoffRetryDelay } from '../../utils/uploads';
import { retryNumOfTimes } from '../../utils/function';
import BaseMultiput from './BaseMultiput';
import { HTTP_PUT } from '../../constants';
var PART_STATE_NOT_STARTED = 0;
var PART_STATE_DIGEST_READY = 1;
var PART_STATE_UPLOADING = 2;
var PART_STATE_UPLOADED = 3;

var MultiputPart =
/*#__PURE__*/
function (_BaseMultiput) {
  _inherits(MultiputPart, _BaseMultiput);

  // For resumable uploads.  When an error happens, all parts for an upload get paused.  This
  // is not a separate state because a paused upload transitions to the DIGEST_READY state immediately
  // so MultiputUpload can upload the part again.

  /**
   * [constructor]
   *
   * @param {Options} options
   * @param {number} index - 0-based index of this part in array of all parts
   * @param {number} offset - Starting byte offset of this part's range
   * @param {number} partSize - Size of this part in bytes
   * @param {number} sessionId
   * @param {Object} sessionEndpoints
   * @param {MultiputConfig} config
   * @param {Function} getNumPartsUploading
   * @param {Function} [onSuccess]
   * @param {Function} [onProgress]
   * @param {Function} [onError]
   * @return {void}
   */
  function MultiputPart(options, index, offset, partSize, fileSize, sessionId, sessionEndpoints, config, getNumPartsUploading, onSuccess, onProgress, onError) {
    var _this;

    _classCallCheck(this, MultiputPart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MultiputPart).call(this, options, sessionEndpoints, config));

    _defineProperty(_assertThisInitialized(_this), "toJSON", function () {
      return JSON.stringify({
        index: _this.index,
        offset: _this.offset,
        partSize: _this.partSize,
        state: _this.state,
        uploadedBytes: _this.uploadedBytes,
        numUploadRetriesPerformed: _this.numUploadRetriesPerformed,
        numDigestRetriesPerformed: _this.numDigestRetriesPerformed,
        sha256: _this.sha256,
        timing: _this.timing
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getPart", function () {
      return _this.data.part || {};
    });

    _defineProperty(_assertThisInitialized(_this), "upload", function () {
      if (_this.isDestroyedOrPaused()) {
        return;
      }

      if (!_this.sha256) {
        throw new Error('Part SHA-256 unavailable');
      }

      if (!_this.blob) {
        throw new Error('Part blob unavailable');
      }

      var clientEventInfo = {
        documentHidden: document.hidden,
        digest_retries: _this.numDigestRetriesPerformed,
        timing: _this.timing,
        parts_uploading: _this.getNumPartsUploading()
      };
      var headers = {
        'Content-Type': 'application/octet-stream',
        Digest: "sha-256=".concat(_this.sha256),
        'Content-Range': "bytes ".concat(_this.offset, "-").concat(_this.rangeEnd, "/").concat(_this.fileSize),
        'X-Box-Client-Event-Info': JSON.stringify(clientEventInfo)
      };
      _this.state = PART_STATE_UPLOADING;
      _this.startTimestamp = Date.now();

      _this.xhr.uploadFile({
        url: _this.sessionEndpoints.uploadPart,
        data: _this.blob,
        headers: headers,
        method: HTTP_PUT,
        successHandler: _this.uploadSuccessHandler,
        errorHandler: _this.uploadErrorHandler,
        progressHandler: _this.uploadProgressHandler,
        withIdleTimeout: true,
        idleTimeoutDuration: _this.config.requestTimeoutMs
      });
    });

    _defineProperty(_assertThisInitialized(_this), "uploadSuccessHandler", function (_ref) {
      var data = _ref.data;

      if (_this.isDestroyedOrPaused()) {
        return;
      }

      _this.state = PART_STATE_UPLOADED;

      _this.consoleLog("Upload completed: ".concat(_this.toJSON(), "."));

      _this.data = data;
      _this.blob = null;
      _this.timing.uploadTime = Date.now() - _this.startTimestamp;

      _this.onSuccess(_assertThisInitialized(_this));

      _this.uploadedBytes = _this.partSize;
    });

    _defineProperty(_assertThisInitialized(_this), "uploadProgressHandler", function (event) {
      if (_this.isDestroyedOrPaused()) {
        return;
      }

      var newUploadedBytes = parseInt(event.loaded, 10);
      var prevUploadedBytes = _this.uploadedBytes;
      _this.uploadedBytes = newUploadedBytes;

      _this.onProgress(prevUploadedBytes, newUploadedBytes);
    });

    _defineProperty(_assertThisInitialized(_this), "uploadErrorHandler",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(error) {
        var xhr_ready_state, xhr_status_text, eventInfo, eventInfoString, retryDelayMs;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this.isDestroyedOrPaused()) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                xhr_ready_state = getProp(_this.xhr, 'xhr.readyState', null);
                xhr_status_text = getProp(_this.xhr, 'xhr.statusText', '');

                _this.consoleLog("Upload failure ".concat(error.message, " for part ").concat(_this.toJSON(), ". XHR state: ").concat(xhr_ready_state, "."));

                eventInfo = {
                  message: error.message,
                  part: {
                    uploadedBytes: _this.uploadedBytes,
                    id: _this.id,
                    index: _this.index,
                    offset: _this.offset
                  },
                  xhr_ready_state: xhr_ready_state,
                  xhr_status_text: xhr_status_text
                };
                eventInfoString = JSON.stringify(eventInfo);

                if (_this.sessionEndpoints.logEvent) {
                  retryNumOfTimes(function (resolve, reject) {
                    _this.logEvent('part_failure', eventInfoString).then(resolve).catch(reject);
                  }, _this.config.retries, _this.config.initialRetryDelayMs).catch(function (e) {
                    return _this.consoleLog("Failure in logEvent: ".concat(e.message));
                  });
                } else {
                  _this.consoleLog('logEvent endpoint not found');
                }

                if (!(_this.numUploadRetriesPerformed >= _this.config.retries)) {
                  _context.next = 11;
                  break;
                }

                _this.onError(error, eventInfoString);

                return _context.abrupt("return");

              case 11:
                retryDelayMs = getBoundedExpBackoffRetryDelay(_this.config.initialRetryDelayMs, _this.config.maxRetryDelayMs, _this.numUploadRetriesPerformed);
                _this.numUploadRetriesPerformed += 1;

                _this.consoleLog("Retrying uploading part ".concat(_this.toJSON(), " in ").concat(retryDelayMs, " ms"));

                _this.retryTimeout = setTimeout(_this.retryUpload, retryDelayMs);

              case 15:
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

    _defineProperty(_assertThisInitialized(_this), "retryUpload",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var parts, response;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!_this.isDestroyedOrPaused()) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              _context2.prev = 2;
              _context2.next = 5;
              return _this.listParts(_this.index, 1);

            case 5:
              parts = _context2.sent;

              if (!(parts && parts.length === 1 && parts[0].offset === _this.offset && parts[0].part_id)) {
                _context2.next = 11;
                break;
              }

              _this.consoleLog("Part ".concat(_this.toJSON(), " is available on server. Not re-uploading."));

              _this.id = parts[0].part_id;

              _this.uploadSuccessHandler({
                data: {
                  part: parts[0]
                }
              });

              return _context2.abrupt("return");

            case 11:
              _this.consoleLog("Part ".concat(_this.toJSON(), " is not available on server. Re-uploading."));

              throw new Error('Part not found on the server');

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](2);
              response = _context2.t0.response;

              if (response && response.status) {
                _this.consoleLog("Error ".concat(response.status, " while listing part ").concat(_this.toJSON(), ". Re-uploading."));
              }

              _this.numUploadRetriesPerformed += 1;

              _this.upload();

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 15]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "listParts",
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(partIndex, limit) {
        var params, endpoint, response;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                params = {
                  offset: partIndex,
                  limit: limit
                };
                endpoint = updateQueryParameters(_this.sessionEndpoints.listParts, params);
                _context3.next = 4;
                return _this.xhr.get({
                  url: endpoint
                });

              case 4:
                response = _context3.sent;
                return _context3.abrupt("return", response.data.entries);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x2, _x3) {
        return _ref4.apply(this, arguments);
      };
    }());

    _this.index = index;
    _this.numDigestRetriesPerformed = 0;
    _this.numUploadRetriesPerformed = 0;
    _this.offset = offset;
    _this.partSize = partSize;
    _this.fileSize = fileSize;
    _this.state = PART_STATE_NOT_STARTED;
    _this.timing = {};
    _this.uploadedBytes = 0;
    _this.data = {};
    _this.config = config;
    _this.rangeEnd = offset + partSize - 1;

    if (_this.rangeEnd > fileSize - 1) {
      _this.rangeEnd = fileSize - 1;
    }

    _this.isPaused = false;
    _this.onSuccess = onSuccess || noop;
    _this.onError = onError || noop;
    _this.onProgress = onProgress || noop;
    _this.getNumPartsUploading = getNumPartsUploading;
    return _this;
  }

  _createClass(MultiputPart, [{
    key: "cancel",

    /**
     * Cancels upload for this Part.
     *
     * @return {void}
     */
    value: function cancel() {
      clearTimeout(this.retryTimeout);
      this.blob = null;
      this.data = {};
      this.destroy();
    }
    /**
     * Pauses upload for this Part.
     *
     * @return {void}
     */

  }, {
    key: "pause",
    value: function pause() {
      clearTimeout(this.retryTimeout); // Cancel timeout so that we don't keep retrying while paused

      this.isPaused = true;
      this.state = PART_STATE_DIGEST_READY;
      this.xhr.abort(); //  This calls the error handler.
    }
    /**
     * Unpauses upload for this Part.
     *
     * @return {void}
     */

  }, {
    key: "unpause",
    value: function unpause() {
      this.isPaused = false;
      this.state = PART_STATE_UPLOADING;
      this.retryUpload();
    }
    /**
     * Resets upload for this Part.
     *
     * @return {void}
     */

  }, {
    key: "reset",
    value: function reset() {
      this.numUploadRetriesPerformed = 0;
      this.timing = {};
      this.uploadedBytes = 0;
    }
    /**
     * Checks if this Part is destroyed or paused
     *
     * @return {boolean}
     */

  }, {
    key: "isDestroyedOrPaused",
    value: function isDestroyedOrPaused() {
      return this.isDestroyed() || this.isPaused;
    }
    /**
     * List specified parts
     *
     * @param {number} partIndex - Index of starting part. Optional.
     * @param {number} limit - Number of parts to be listed. Optional.
     * @return {Promise<Array<Object>>} Array of parts
     */

  }]);

  return MultiputPart;
}(BaseMultiput);

export default MultiputPart;
export { PART_STATE_NOT_STARTED, PART_STATE_DIGEST_READY, PART_STATE_UPLOADING, PART_STATE_UPLOADED };
//# sourceMappingURL=MultiputPart.js.map