function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
 * @file Multiput upload
 * @author Box
 */
import noop from 'lodash/noop';
import isNaN from 'lodash/isNaN';
import { getFileLastModifiedAsISONoMSIfPossible, getBoundedExpBackoffRetryDelay } from '../../utils/uploads';
import { retryNumOfTimes } from '../../utils/function';
import { digest } from '../../utils/webcrypto';
import hexToBase64 from '../../utils/base64';
import createWorker from '../../utils/uploadsSHA1Worker';
import Browser from '../../utils/Browser';
import { DEFAULT_RETRY_DELAY_MS, ERROR_CODE_UPLOAD_STORAGE_LIMIT_EXCEEDED, HTTP_STATUS_CODE_FORBIDDEN, MS_IN_S } from '../../constants';
import MultiputPart, { PART_STATE_UPLOADED, PART_STATE_UPLOADING, PART_STATE_DIGEST_READY, PART_STATE_NOT_STARTED } from './MultiputPart';
import BaseMultiput from './BaseMultiput';
// Constants used for specifying log event types.
// This type is a catch-all for create session errors that aren't 5xx's (for which we'll do
// retries) and aren't specific 4xx's we know how to specifically handle (e.g. out of storage).
var LOG_EVENT_TYPE_CREATE_SESSION_MISC_ERROR = 'create_session_misc_error';
var LOG_EVENT_TYPE_CREATE_SESSION_RETRIES_EXCEEDED = 'create_session_retries_exceeded';
var LOG_EVENT_TYPE_FILE_CHANGED_DURING_UPLOAD = 'file_changed_during_upload';
var LOG_EVENT_TYPE_PART_UPLOAD_RETRIES_EXCEEDED = 'part_upload_retries_exceeded';
var LOG_EVENT_TYPE_COMMIT_RETRIES_EXCEEDED = 'commit_retries_exceeded';
var LOG_EVENT_TYPE_WEB_WORKER_ERROR = 'web_worker_error';
var LOG_EVENT_TYPE_FILE_READER_RECEIVED_NOT_FOUND_ERROR = 'file_reader_received_not_found_error';
var LOG_EVENT_TYPE_PART_DIGEST_RETRIES_EXCEEDED = 'part_digest_retries_exceeded';

var MultiputUpload =
/*#__PURE__*/
function (_BaseMultiput) {
  _inherits(MultiputUpload, _BaseMultiput);

  /**
   * [constructor]
   *
   * @param {Options} options
   * @param {MultiputConfig} [config]
   */
  function MultiputUpload(options, config) {
    var _this;

    _classCallCheck(this, MultiputUpload);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MultiputUpload).call(this, options, {
      createSession: null,
      uploadPart: null,
      listParts: null,
      commit: null,
      abort: null,
      logEvent: null
    }, config));

    _defineProperty(_assertThisInitialized(_this), "getBaseUploadUrlFromPreflightResponse", function (_ref) {
      var data = _ref.data;

      if (!data || !data.upload_url) {
        return _this.getBaseUploadUrl();
      }

      var splitUrl = data.upload_url.split('/'); // splitUrl[0] is the protocol (e.g., https:), splitUrl[2] is hostname (e.g., www.box.com)

      _this.uploadHost = "".concat(splitUrl[0], "//").concat(splitUrl[2]);
      return _this.getBaseUploadUrl();
    });

    _defineProperty(_assertThisInitialized(_this), "preflightSuccessHandler",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(preflightResponse) {
        var uploadUrl, createSessionUrl, postData, response, errorData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this.isDestroyed()) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                uploadUrl = _this.getBaseUploadUrlFromPreflightResponse(preflightResponse);
                createSessionUrl = "".concat(uploadUrl, "/files/upload_sessions"); // Parallelism is currently detrimental to multiput upload performance in Zones, so set it to 1.

                if (createSessionUrl.includes('fupload-ec2')) {
                  _this.config.parallelism = 1;
                } // Set up post body


                postData = {
                  file_size: _this.file.size,
                  file_name: _this.fileName
                };

                if (_this.fileId) {
                  createSessionUrl = createSessionUrl.replace('upload_sessions', "".concat(_this.fileId, "/upload_sessions"));
                } else {
                  postData.folder_id = _this.folderId;
                }

                _context.prev = 7;
                _context.next = 10;
                return _this.xhr.post({
                  url: createSessionUrl,
                  data: postData
                });

              case 10:
                response = _context.sent;

                _this.createSessionSuccessHandler(response.data);

                _context.next = 31;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](7);
                errorData = _this.getErrorResponse(_context.t0);

                if (!(errorData && errorData.status >= 500 && errorData.status < 600)) {
                  _context.next = 20;
                  break;
                }

                _this.createSessionErrorHandler(_context.t0);

                return _context.abrupt("return");

              case 20:
                if (!(errorData && errorData.status === 409 && errorData.code === 'session_conflict')) {
                  _context.next = 23;
                  break;
                }

                _this.createSessionSuccessHandler(errorData.context_info.session);

                return _context.abrupt("return");

              case 23:
                if (!(errorData && errorData.status === HTTP_STATUS_CODE_FORBIDDEN && errorData.code === ERROR_CODE_UPLOAD_STORAGE_LIMIT_EXCEEDED || errorData.status === HTTP_STATUS_CODE_FORBIDDEN && errorData.code === 'access_denied_insufficient_permissions')) {
                  _context.next = 26;
                  break;
                }

                _this.errorCallback(errorData);

                return _context.abrupt("return");

              case 26:
                if (!(errorData && errorData.status === 409)) {
                  _context.next = 30;
                  break;
                }

                _this.resolveConflict(errorData);

                _this.createSessionRetry();

                return _context.abrupt("return");

              case 30:
                // All other cases get treated as an upload failure.
                _this.sessionErrorHandler(_context.t0, LOG_EVENT_TYPE_CREATE_SESSION_MISC_ERROR, JSON.stringify(_context.t0));

              case 31:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[7, 14]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "createSessionErrorHandler", function (error) {
      if (_this.isDestroyed()) {
        return;
      }

      if (_this.createSessionNumRetriesPerformed < _this.config.retries) {
        _this.createSessionRetry();

        return;
      }

      _this.consoleLog('Too many create session failures, failing upload');

      _this.sessionErrorHandler(error, LOG_EVENT_TYPE_CREATE_SESSION_RETRIES_EXCEEDED, JSON.stringify(error));
    });

    _defineProperty(_assertThisInitialized(_this), "getSessionInfo",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var uploadUrl, sessionUrl, response;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              uploadUrl = _this.getBaseUploadUrl();
              sessionUrl = "".concat(uploadUrl, "/files/upload_sessions/").concat(_this.sessionId);
              _context2.prev = 2;
              _context2.next = 5;
              return _this.xhr.get({
                url: sessionUrl
              });

            case 5:
              response = _context2.sent;

              _this.getSessionSuccessHandler(response.data);

              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](2);

              _this.getSessionErrorHandler(_context2.t0);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 9]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "partUploadSuccessHandler", function (part) {
      _this.numPartsUploading -= 1;
      _this.numPartsUploaded += 1;

      _this.updateProgress(part.uploadedBytes, _this.partSize);

      _this.processNextParts();
    });

    _defineProperty(_assertThisInitialized(_this), "partUploadErrorHandler", function (error, eventInfo) {
      _this.sessionErrorHandler(error, LOG_EVENT_TYPE_PART_UPLOAD_RETRIES_EXCEEDED, eventInfo); // Pause the rest of the parts.
      // can't cancel parts because cancel destroys the part and parts are only created in createSession call


      if (_this.isResumableUploadsEnabled) {
        // Reset uploading process for parts that were in progress when the upload failed
        var nextUploadIndex = _this.firstUnuploadedPartIndex;

        while (_this.numPartsUploading > 0) {
          var part = _this.parts[nextUploadIndex];

          if (part && part.state === PART_STATE_UPLOADING) {
            part.reset();
            part.pause();
            _this.numPartsUploading -= 1;
            _this.numPartsDigestReady += 1;
          }

          nextUploadIndex += 1;
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateProgress", function (prevUploadedBytes, newUploadedBytes) {
      if (_this.isDestroyed()) {
        return;
      }

      _this.totalUploadedBytes += newUploadedBytes - prevUploadedBytes;

      _this.progressCallback({
        loaded: _this.totalUploadedBytes,
        total: _this.file.size
      });
    });

    _defineProperty(_assertThisInitialized(_this), "processNextParts", function () {
      if (_this.failSessionIfFileChangeDetected()) {
        return;
      }

      if (_this.numPartsUploaded === _this.parts.length && _this.fileSha1) {
        _this.commitSession();

        return;
      }

      _this.updateFirstUnuploadedPartIndex();

      while (_this.canStartMorePartUploads()) {
        _this.uploadNextPart();
      }

      if (_this.shouldComputeDigestForNextPart()) {
        _this.computeDigestForNextPart();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onWorkerMessage", function (event) {
      if (_this.isDestroyed()) {
        return;
      }

      var data = event.data;

      if (data.type === 'partDone') {
        _this.numPartsDigestComputing -= 1;
        var part = data.part;
        _this.parts[part.index].timing.fileDigestTime = data.duration;

        _this.processNextParts();
      } else if (data.type === 'done') {
        _this.fileSha1 = hexToBase64(data.sha1);

        _this.sha1Worker.terminate();

        _this.processNextParts();
      } else if (data.type === 'error') {
        _this.sessionErrorHandler(null, LOG_EVENT_TYPE_WEB_WORKER_ERROR, JSON.stringify(data));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "sendPartToWorker", function (part, buffer) {
      if (_this.isDestroyed()) {
        return;
      } // Don't send entire part since XHR can't be cloned


      var partInformation = {
        index: part.index,
        offset: part.offset,
        size: part.partSize
      };

      _this.sha1Worker.postMessage({
        part: partInformation,
        fileSize: _this.file.size,
        partContents: buffer
      }, [buffer] // This transfers the ArrayBuffer to the worker context without copying contents.
      );

      _this.consoleLog("Part sent to worker: ".concat(JSON.stringify(part), ".}"));
    });

    _defineProperty(_assertThisInitialized(_this), "onPartDigestError", function (error, part) {
      _this.consoleLog("Error computing digest for part ".concat(JSON.stringify(part), ": ").concat(JSON.stringify(error))); // When a FileReader is processing a file that changes on disk, Chrome reports a 'NotFoundError'
      // and Safari reports a 'NOT_FOUND_ERR'. (Other browsers seem to allow the reader to keep
      // going, either with the old version of the new file or the new one.) Since the error name
      // implies that retrying will not help, we fail the session.


      if (error.name === 'NotFoundError' || error.name === 'NOT_FOUND_ERR') {
        _this.sessionErrorHandler(null, LOG_EVENT_TYPE_FILE_READER_RECEIVED_NOT_FOUND_ERROR, JSON.stringify(error));

        return;
      }

      if (_this.failSessionIfFileChangeDetected()) {
        return;
      }

      if (part.numDigestRetriesPerformed >= _this.config.retries) {
        _this.sessionErrorHandler(null, LOG_EVENT_TYPE_PART_DIGEST_RETRIES_EXCEEDED, JSON.stringify(error));

        return;
      }

      var retryDelayMs = getBoundedExpBackoffRetryDelay(_this.config.initialRetryDelayMs, _this.config.maxRetryDelayMs, part.numDigestRetriesPerformed);
      part.numDigestRetriesPerformed += 1;

      _this.consoleLog("Retrying digest work for part ".concat(JSON.stringify(part), " in ").concat(retryDelayMs, " ms"));

      setTimeout(function () {
        _this.computeDigestForPart(part);
      }, retryDelayMs);
    });

    _defineProperty(_assertThisInitialized(_this), "commitSession", function () {
      if (_this.isDestroyed()) {
        return;
      }

      var stats = {
        totalPartReadTime: 0,
        totalPartDigestTime: 0,
        totalFileDigestTime: 0,
        totalPartUploadTime: 0
      };
      var data = {
        parts: _this.parts.map(function (part) {
          stats.totalPartReadTime += part.timing.readTime;
          stats.totalPartDigestTime += part.timing.subtleCryptoTime;
          stats.totalFileDigestTime += part.timing.fileDigestTime;
          stats.totalPartUploadTime += part.timing.uploadTime;
          return part.getPart();
        }).sort(function (part1, part2) {
          return part1.offset - part2.offset;
        }),
        attributes: {}
      };
      var fileLastModified = getFileLastModifiedAsISONoMSIfPossible(_this.file);

      if (fileLastModified) {
        data.attributes.content_modified_at = fileLastModified;
      }

      if (_this.fileDescription) {
        data.attributes.description = _this.fileDescription;
      }

      var clientEventInfo = {
        avg_part_read_time: Math.round(stats.totalPartReadTime / _this.parts.length),
        avg_part_digest_time: Math.round(stats.totalPartDigestTime / _this.parts.length),
        avg_file_digest_time: Math.round(stats.totalFileDigestTime / _this.parts.length),
        avg_part_upload_time: Math.round(stats.totalPartUploadTime / _this.parts.length)
      }; // To make flow stop complaining about this.fileSha1 could potentially be undefined/null

      var fileSha1 = _this.fileSha1;
      var headers = {
        Digest: "sha=".concat(fileSha1),
        'X-Box-Client-Event-Info': JSON.stringify(clientEventInfo)
      };

      _this.xhr.post({
        url: _this.sessionEndpoints.commit,
        data: data,
        headers: headers
      }).then(_this.commitSessionSuccessHandler).catch(_this.commitSessionErrorHandler);
    });

    _defineProperty(_assertThisInitialized(_this), "commitSessionSuccessHandler", function (response) {
      if (_this.isDestroyed()) {
        return;
      }

      var status = response.status,
          data = response.data;

      if (status === 202) {
        _this.commitSessionRetry(response);

        return;
      }

      var entries = data.entries; // v2.1 API response format is different from v2.0. v2.1 returns individual upload entry directly inside data,
      // while v2.0 returns a collection of entries under data.entries

      if (!entries && data.id) {
        entries = [data];
      }

      _this.destroy();

      if (_this.successCallback && entries) {
        _this.successCallback(entries);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "commitSessionErrorHandler", function (error) {
      if (_this.isDestroyed()) {
        return;
      }

      var response = error.response;

      if (!response) {
        // Some random error happened
        _this.consoleError(error);

        return;
      }

      if (_this.commitRetryCount >= _this.config.retries) {
        _this.consoleLog('Too many commit failures, failing upload');

        _this.sessionErrorHandler(error, LOG_EVENT_TYPE_COMMIT_RETRIES_EXCEEDED, JSON.stringify(error));

        return;
      }

      _this.commitSessionRetry(response);
    });

    _defineProperty(_assertThisInitialized(_this), "getNumPartsUploading", function () {
      return _this.numPartsUploading;
    });

    _this.parts = [];
    _this.options = options;
    _this.fileSha1 = null;
    _this.totalUploadedBytes = 0;
    _this.numPartsNotStarted = 0; // # of parts yet to be processed

    _this.numPartsDigestComputing = 0; // # of parts sent to the digest worker

    _this.numPartsDigestReady = 0; // # of parts with digest finished that are waiting to be uploaded.

    _this.numPartsUploading = 0; // # of parts with upload requests currently inflight

    _this.numPartsUploaded = 0; // # of parts successfully uploaded

    _this.firstUnuploadedPartIndex = 0; // Index of first part that hasn't been uploaded yet.

    _this.createSessionNumRetriesPerformed = 0;
    _this.partSize = 0;
    _this.commitRetryCount = 0;
    _this.clientId = null;
    _this.isResumableUploadsEnabled = false;
    _this.numResumeRetries = 0;
    return _this;
  }
  /**
   * Reset values for uploading process.
   */


  _createClass(MultiputUpload, [{
    key: "reset",
    value: function reset() {
      this.parts = [];
      this.fileSha1 = null;
      this.totalUploadedBytes = 0;
      this.numPartsNotStarted = 0; // # of parts yet to be processed

      this.numPartsDigestComputing = 0; // # of parts sent to the digest worker

      this.numPartsDigestReady = 0; // # of parts with digest finished that are waiting to be uploaded.

      this.numPartsUploading = 0; // # of parts with upload requests currently inflight

      this.numPartsUploaded = 0; // # of parts successfully uploaded

      this.firstUnuploadedPartIndex = 0; // Index of first part that hasn't been uploaded yet.

      this.createSessionNumRetriesPerformed = 0;
      this.partSize = 0;
      this.commitRetryCount = 0;
      this.numResumeRetries = 0;
    }
    /**
     * Set information about file being uploaded
     *
     *
     * @param {Object} options
     * @param {File} options.file
     * @param {string} options.folderId - Untyped folder id (e.g. no "folder_" prefix)
     * @param {string} [options.fileId] - Untyped file id (e.g. no "file_" prefix)
     * @param {string} options.sessionId
     * @param {Function} [options.errorCallback]
     * @param {Function} [options.progressCallback]
     * @param {Function} [options.successCallback]
     * @return {void}
     */

  }, {
    key: "setFileInfo",
    value: function setFileInfo(_ref4) {
      var file = _ref4.file,
          folderId = _ref4.folderId,
          errorCallback = _ref4.errorCallback,
          progressCallback = _ref4.progressCallback,
          successCallback = _ref4.successCallback,
          _ref4$overwrite = _ref4.overwrite,
          overwrite = _ref4$overwrite === void 0 ? true : _ref4$overwrite,
          conflictCallback = _ref4.conflictCallback,
          fileId = _ref4.fileId;
      this.file = file;
      this.fileName = this.file.name;
      this.folderId = folderId;
      this.errorCallback = errorCallback || noop;
      this.progressCallback = progressCallback || noop;
      this.successCallback = successCallback || noop;
      this.overwrite = overwrite;
      this.conflictCallback = conflictCallback;
      this.fileId = fileId;
    }
    /**
     * Upload a given file
     *
     *
     * @param {Object} options
     * @param {File} options.file
     * @param {string} options.folderId - Untyped folder id (e.g. no "folder_" prefix)
     * @param {string} [options.fileId] - Untyped file id (e.g. no "file_" prefix)
     * @param {Function} [options.errorCallback]
     * @param {Function} [options.progressCallback]
     * @param {Function} [options.successCallback]
     * @return {void}
     */

  }, {
    key: "upload",
    value: function upload(_ref5) {
      var file = _ref5.file,
          fileDescription = _ref5.fileDescription,
          folderId = _ref5.folderId,
          errorCallback = _ref5.errorCallback,
          progressCallback = _ref5.progressCallback,
          successCallback = _ref5.successCallback,
          _ref5$overwrite = _ref5.overwrite,
          overwrite = _ref5$overwrite === void 0 ? true : _ref5$overwrite,
          conflictCallback = _ref5.conflictCallback,
          fileId = _ref5.fileId;
      this.file = file;
      this.fileName = this.file.name; // These values are used as part of our (best effort) attempt to abort uploads if we detect
      // a file change during the upload.

      this.initialFileSize = this.file.size;
      this.initialFileLastModified = getFileLastModifiedAsISONoMSIfPossible(this.file);
      this.folderId = folderId;
      this.errorCallback = errorCallback || noop;
      this.progressCallback = progressCallback || noop;
      this.successCallback = successCallback || noop;
      this.sha1Worker = createWorker();
      this.sha1Worker.addEventListener('message', this.onWorkerMessage);
      this.conflictCallback = conflictCallback;
      this.overwrite = overwrite;
      this.fileId = fileId;
      this.fileDescription = fileDescription;
      this.makePreflightRequest();
    }
    /**
     * Update uploadHost with preflight response and return the base uploadUrl
     *
     * @private
     * @param {Object} response
     * @param {Object} [response.data]
     * @return {string}
     */

  }, {
    key: "createSessionRetry",

    /**
     * Schedule a retry for create session request upon failure
     *
     * @private
     * @return {void}
     */
    value: function createSessionRetry() {
      var retryDelayMs = getBoundedExpBackoffRetryDelay(this.config.initialRetryDelayMs, this.config.maxRetryDelayMs, this.createSessionNumRetriesPerformed);
      this.createSessionNumRetriesPerformed += 1;
      this.consoleLog("Retrying create session in ".concat(retryDelayMs, " ms"));
      this.createSessionTimeout = setTimeout(this.makePreflightRequest, retryDelayMs);
    }
    /**
     * Handles a upload session success response
     *
     * @private
     * @param {Object} data - Upload session creation success data
     * @return {void}
     */

  }, {
    key: "createSessionSuccessHandler",
    value: function createSessionSuccessHandler(data) {
      if (this.isDestroyed()) {
        return;
      }

      var id = data.id,
          part_size = data.part_size,
          session_endpoints = data.session_endpoints;
      this.sessionId = id;
      this.partSize = part_size;
      this.sessionEndpoints = _objectSpread({}, this.sessionEndpoints, {
        uploadPart: session_endpoints.upload_part,
        listParts: session_endpoints.list_parts,
        commit: session_endpoints.commit,
        abort: session_endpoints.abort,
        logEvent: session_endpoints.log_event
      });
      this.populateParts();
      this.processNextParts();
    }
    /**
     * Resume uploading the given file
     *
     *
     * @param {Object} options
     * @param {File} options.file
     * @param {string} options.folderId - Untyped folder id (e.g. no "folder_" prefix)
     * @param {string} [options.fileId] - Untyped file id (e.g. no "file_" prefix)
     * @param {string} options.sessionId
     * @param {Function} [options.errorCallback]
     * @param {Function} [options.progressCallback]
     * @param {Function} [options.successCallback]
     * @param {Function} [options.conflictCallback]
     * @return {void}
     */

  }, {
    key: "resume",
    value: function resume(_ref6) {
      var file = _ref6.file,
          folderId = _ref6.folderId,
          errorCallback = _ref6.errorCallback,
          progressCallback = _ref6.progressCallback,
          sessionId = _ref6.sessionId,
          successCallback = _ref6.successCallback,
          _ref6$overwrite = _ref6.overwrite,
          overwrite = _ref6$overwrite === void 0 ? true : _ref6$overwrite,
          conflictCallback = _ref6.conflictCallback,
          fileId = _ref6.fileId;
      this.setFileInfo({
        file: file,
        folderId: folderId,
        errorCallback: errorCallback,
        progressCallback: progressCallback,
        successCallback: successCallback,
        conflictCallback: conflictCallback,
        overwrite: overwrite,
        fileId: fileId
      });
      this.sessionId = sessionId;

      if (!this.sha1Worker) {
        this.sha1Worker = createWorker();
      }

      this.sha1Worker.addEventListener('message', this.onWorkerMessage);
      this.getSessionInfo();
    }
    /**
     * Get session information from API.
     * Uses session info to commit a complete session or continue an in-progress session.
     *
     * @private
     * @return {void}
     */

  }, {
    key: "getSessionSuccessHandler",

    /**
     * Handles a getSessionInfo success and either commits the session or continues to process
     * the parts that still need to be uploaded.
     *
     * @param response
     * @return {void}
     */
    value: function getSessionSuccessHandler(data) {
      var part_size = data.part_size,
          session_endpoints = data.session_endpoints; // Set session information gotten from API response

      this.partSize = part_size;
      this.sessionEndpoints = _objectSpread({}, this.sessionEndpoints, {
        uploadPart: session_endpoints.upload_part,
        listParts: session_endpoints.list_parts,
        commit: session_endpoints.commit,
        abort: session_endpoints.abort,
        logEvent: session_endpoints.log_event
      });
      this.processNextParts();
    }
    /**
     * Handle error from getting upload session.
     * Restart uploads without valid sessions from the beginning of the upload process.
     *
     * @param error
     * @return {void}
     */

  }, {
    key: "getSessionErrorHandler",
    value: function getSessionErrorHandler(error) {
      if (this.isDestroyed()) {
        return;
      }

      var errorData = this.getErrorResponse(error);

      if (this.numResumeRetries > this.config.retries) {
        this.errorCallback(errorData);
        return;
      }

      if (errorData && errorData.status === 429) {
        var retryAfterMs = DEFAULT_RETRY_DELAY_MS;

        if (errorData.headers) {
          var retryAfterSec = parseInt(errorData.headers['retry-after'] || errorData.headers.get('Retry-After'), 10);

          if (!isNaN(retryAfterSec)) {
            retryAfterMs = retryAfterSec * MS_IN_S;
          }
        }

        this.retryTimeout = setTimeout(this.getSessionInfo, retryAfterMs);
        this.numResumeRetries += 1;
      } else if (errorData && errorData.status >= 400 && errorData.status < 500) {
        // Restart upload process for errors resulting from invalid/expired session or no permission
        this.parts.forEach(function (part) {
          part.cancel();
        });
        this.reset(); // Abort session

        clearTimeout(this.createSessionTimeout);
        clearTimeout(this.commitSessionTimeout);
        this.abortSession(); // Restart the uploading process from the beginning

        var uploadOptions = {
          file: this.file,
          folderId: this.folderId,
          errorCallback: this.errorCallback,
          progressCallback: this.progressCallback,
          successCallback: this.successCallback,
          overwrite: this.overwrite,
          fileId: this.fileId
        };
        this.upload(uploadOptions);
      } else {
        // Handle internet disconnects (error.request && !error.response) and (!error.request)
        // Also handle any 500 error messages
        this.retryTimeout = setTimeout(this.getSessionInfo, Math.pow(2, this.numResumeRetries) * MS_IN_S);
        this.numResumeRetries += 1;
      }
    }
    /**
     * Session error handler.
     * Retries the create session request or fails the upload.
     *
     * @private
     * @param {?Error} error
     * @param {string} logEventType
     * @param {string} [logMessage]
     * @return {Promise}
     */

  }, {
    key: "sessionErrorHandler",
    value: function () {
      var _sessionErrorHandler = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(error, logEventType, logMessage) {
        var _this2 = this;

        var errorData;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this.isResumableUploadsEnabled) {
                  this.destroy();
                }

                errorData = this.getErrorResponse(error);
                this.errorCallback(errorData);
                _context3.prev = 3;

                if (this.sessionEndpoints.logEvent) {
                  _context3.next = 6;
                  break;
                }

                throw new Error('logEvent endpoint not found');

              case 6:
                _context3.next = 8;
                return retryNumOfTimes(function (resolve, reject) {
                  _this2.logEvent(logEventType, logMessage).then(resolve).catch(reject);
                }, this.config.retries, this.config.initialRetryDelayMs);

              case 8:
                if (!this.isResumableUploadsEnabled) {
                  this.abortSession();
                }

                _context3.next = 14;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](3);

                if (!this.isResumableUploadsEnabled) {
                  this.abortSession();
                }

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[3, 11]]);
      }));

      function sessionErrorHandler(_x2, _x3, _x4) {
        return _sessionErrorHandler.apply(this, arguments);
      }

      return sessionErrorHandler;
    }()
    /**
     * Aborts the upload session
     *
     * @private
     * @return {void}
     */

  }, {
    key: "abortSession",
    value: function abortSession() {
      var _this3 = this;

      if (this.sha1Worker) {
        this.sha1Worker.terminate();
      }

      if (this.sessionEndpoints.abort && this.sessionId) {
        this.xhr.delete({
          url: this.sessionEndpoints.abort
        }).then(function () {
          _this3.sessionId = '';
        });
      }
    }
    /**
     * Part upload success handler
     *
     * @private
     * @param {MultiputPart} part
     * @return {void}
     */

  }, {
    key: "shouldComputeDigestForNextPart",

    /**
     * We compute digest for parts one at a time.  This is done for simplicity and also to guarantee that
     * we send parts in order to the web sha1Worker (which is computing the digest for the entire file).
     *
     * @private
     * @return {boolean} true if there is work to do, false otherwise.
     */
    value: function shouldComputeDigestForNextPart() {
      return !this.isDestroyed() && this.numPartsDigestComputing === 0 && this.numPartsNotStarted > 0 && this.numPartsDigestReady < this.config.digestReadahead;
    }
    /**
     * Find first part in parts array that doesn't have a digest, and compute its digest.
      * @private
     * @return {void}
     */

  }, {
    key: "computeDigestForNextPart",
    value: function computeDigestForNextPart() {
      for (var i = this.firstUnuploadedPartIndex; i < this.parts.length; i += 1) {
        var part = this.parts[i];

        if (part.state === PART_STATE_NOT_STARTED) {
          // Update the counters here instead of computeDigestForPart because computeDigestForPart
          // can get called on retries
          this.numPartsNotStarted -= 1;
          this.numPartsDigestComputing += 1;
          this.computeDigestForPart(part);
          return;
        }
      }
    }
    /**
     * Compute digest for this part
     *
     * @private
     * @param {MultiputPart} part
     * @return {Promise}
     */

  }, {
    key: "computeDigestForPart",
    value: function () {
      var _computeDigestForPart = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(part) {
        var blob, reader, startTimestamp, _ref7, buffer, readCompleteTimestamp, sha256ArrayBuffer, sha256, digestCompleteTimestamp;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                blob = this.file.slice(part.offset, part.offset + this.partSize);
                reader = new window.FileReader();
                startTimestamp = Date.now();
                _context4.prev = 3;
                _context4.next = 6;
                return this.readFile(reader, blob);

              case 6:
                _ref7 = _context4.sent;
                buffer = _ref7.buffer;
                readCompleteTimestamp = _ref7.readCompleteTimestamp;
                _context4.next = 11;
                return digest('SHA-256', buffer);

              case 11:
                sha256ArrayBuffer = _context4.sent;
                sha256 = btoa([].reduce.call(new Uint8Array(sha256ArrayBuffer), function (data, byte) {
                  return data + String.fromCharCode(byte);
                }, ''));
                this.sendPartToWorker(part, buffer);
                part.sha256 = sha256;
                part.state = PART_STATE_DIGEST_READY;
                part.blob = blob;
                this.numPartsDigestReady += 1;
                digestCompleteTimestamp = Date.now();
                part.timing = {
                  partDigestTime: digestCompleteTimestamp - startTimestamp,
                  readTime: readCompleteTimestamp - startTimestamp,
                  subtleCryptoTime: digestCompleteTimestamp - readCompleteTimestamp
                };
                this.processNextParts();
                _context4.next = 26;
                break;

              case 23:
                _context4.prev = 23;
                _context4.t0 = _context4["catch"](3);
                this.onPartDigestError(_context4.t0, part);

              case 26:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[3, 23]]);
      }));

      function computeDigestForPart(_x5) {
        return _computeDigestForPart.apply(this, arguments);
      }

      return computeDigestForPart;
    }()
    /**
     * Deal with a message from the worker (either a part sha-1 ready, file sha-1 ready, or error).
     *
     * @private
     * @param {object} event
     * @return {void}
     */

  }, {
    key: "commitSessionRetry",

    /**
     * Retry commit.
     * Retries the commit or fails the multiput session.
     *
     * @private
     * @param {Object} response
     * @return {void}
     */
    value: function commitSessionRetry(response) {
      var status = response.status,
          headers = response.headers;
      var retryAfterMs = DEFAULT_RETRY_DELAY_MS;

      if (headers) {
        var retryAfterSec = parseInt(headers['retry-after'], 10);

        if (!Number.isNaN(retryAfterSec)) {
          retryAfterMs = retryAfterSec * 1000;
        }
      }

      var defaultRetryDelayMs = getBoundedExpBackoffRetryDelay(this.config.initialRetryDelayMs, this.config.maxRetryDelayMs, this.commitRetryCount); // If status is 202 then don't increment the retry count.
      // In this case, frontend will keep retrying until it gets another status code.
      // Retry interval = value specified for the Retry-After header in 202 response.

      if (status !== 202) {
        this.commitRetryCount += 1;
      }

      var retryDelayMs = retryAfterMs || defaultRetryDelayMs;
      this.consoleLog("Retrying commit in ".concat(retryDelayMs, " ms"));
      this.commitSessionTimeout = setTimeout(this.commitSession, retryDelayMs);
    }
    /**
     * Find first part in parts array that we can upload, and upload it.
     *
     * @private
     * @return {void}
     */

  }, {
    key: "uploadNextPart",
    value: function uploadNextPart() {
      for (var i = this.firstUnuploadedPartIndex; i < this.parts.length; i += 1) {
        var part = this.parts[i];

        if (part.state === PART_STATE_DIGEST_READY) {
          // Update the counters here instead of uploadPart because uploadPart
          // can get called on retries
          this.numPartsDigestReady -= 1;
          this.numPartsUploading += 1;

          if (part.isPaused) {
            part.unpause();
          } else {
            part.upload();
          }

          break;
        }
      }
    }
    /**
     * Checks if upload pipeline is full
     *
     * @private
     * @return {boolean}
     */

  }, {
    key: "canStartMorePartUploads",
    value: function canStartMorePartUploads() {
      return !this.isDestroyed() && this.numPartsUploading < this.config.parallelism && this.numPartsDigestReady > 0;
    }
    /**
     * Functions that walk the parts array get called a lot, so we cache which part we should
     * start work at to avoid always iterating through entire parts list.
     *
     * @private
     * @return {void}
     */

  }, {
    key: "updateFirstUnuploadedPartIndex",
    value: function updateFirstUnuploadedPartIndex() {
      var part = this.parts[this.firstUnuploadedPartIndex];

      while (part && part.state === PART_STATE_UPLOADED) {
        this.firstUnuploadedPartIndex += 1;
        part = this.parts[this.firstUnuploadedPartIndex];
      }
    }
    /**
     * Get number of parts being uploaded
     *
     * @return {number}
     */

  }, {
    key: "populateParts",

    /**
     * After session is created and we know the part size, populate the parts
     * array.
     *
     * @private
     * @return {void}
     */
    value: function populateParts() {
      this.numPartsNotStarted = Math.ceil(this.file.size / this.partSize);

      for (var i = 0; i < this.numPartsNotStarted; i += 1) {
        var offset = i * this.partSize;
        var currentPartSize = Math.min(offset + this.partSize, this.file.size) - offset;
        var part = new MultiputPart(this.options, i, offset, currentPartSize, this.file.size, this.sessionId, this.sessionEndpoints, this.config, this.getNumPartsUploading, this.partUploadSuccessHandler, this.updateProgress, this.partUploadErrorHandler);
        this.parts.push(part);
      }
    }
    /**
     * Fails the session if the file's size or last modified has changed since the upload process
     * began.
     *
     * This ensures that we don't upload a file that has parts from one file version and parts from
     * another file version.
     *
     * This logic + the "not found" error logic in onWorkerError() is best effort and will not
     * detect all possible file changes. This is because of browser differences. For example,
     * -- In Safari, size and last modified will update when a file changes, and workers will
     * get "not found" errors.
     * -- In Chrome, size and last modified will update, but not in legacy drag and drop (that
     * code path constructs a different file object). Workers will still get "not found" errors,
     * though, so we can still detect changes even in legacy drag and drop.
     * -- In IE 11/Edge, size will update but last modified will not. Workers will not get
     * "not found" errors, but they may get a generic error saying that some bytes failed to be
     * read.
     * -- In Firefox, neither last modified nor size will update. Workers don't seem to get errors.
     * (Not a whole lot we can do here...)
     *
     * Unfortunately, alternative solutions to catch more cases don't have a clear ROI (for
     * example, doing a SHA-1 of the file before and after the upload is very expensive), so
     * this is the best solution we have. We can revisit this if data shows that we need a better
     * solution.
     *
     * @private
     * @return {boolean} True if the session was failed, false if no action was taken
     */

  }, {
    key: "failSessionIfFileChangeDetected",
    value: function failSessionIfFileChangeDetected() {
      var currentFileSize = this.file.size;
      var currentFileLastModified = getFileLastModifiedAsISONoMSIfPossible(this.file);

      if (currentFileSize !== this.initialFileSize || currentFileLastModified !== this.initialFileLastModified) {
        var changeJSON = JSON.stringify({
          oldSize: this.initialFileSize,
          newSize: currentFileSize,
          oldLastModified: this.initialFileLastModified,
          newLastModified: currentFileLastModified
        }); // Leave IE with old behavior and kill upload

        if (Browser.isIE()) {
          this.sessionErrorHandler(null, LOG_EVENT_TYPE_FILE_CHANGED_DURING_UPLOAD, changeJSON);
          return true;
        } // for evergreen browsers where the file change check does not work, log and continue with upload
        // https://w3c.github.io/FileAPI/#file-section


        this.consoleLog("file properties changed during upload: ".concat(changeJSON));
        return false;
      }

      return false;
    }
    /**
     * Cancels an upload in progress by cancelling all upload parts.
     * This cannot be undone or resumed.
     *
     * @private
     * @return {void}
     */

  }, {
    key: "cancel",
    value: function cancel() {
      if (this.isDestroyed()) {
        return;
      } // Cancel individual upload parts


      this.parts.forEach(function (part) {
        part.cancel();
      });
      this.parts = [];
      clearTimeout(this.createSessionTimeout);
      clearTimeout(this.commitSessionTimeout);
      this.abortSession();
      this.destroy();
    }
    /**
     * Resolves upload conflict by overwriting or renaming
     *
     * @param {Object} response data
     * @return {Promise}
     */

  }, {
    key: "resolveConflict",
    value: function () {
      var _resolveConflict = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(data) {
        var extension;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(this.overwrite && data.context_info)) {
                  _context5.next = 3;
                  break;
                }

                this.fileId = data.context_info.conflicts.id;
                return _context5.abrupt("return");

              case 3:
                if (!this.conflictCallback) {
                  _context5.next = 6;
                  break;
                }

                this.fileName = this.conflictCallback(this.fileName);
                return _context5.abrupt("return");

              case 6:
                extension = this.fileName.substr(this.fileName.lastIndexOf('.')) || ''; // foo.txt => foo-1513385827917.txt

                this.fileName = "".concat(this.fileName.substr(0, this.fileName.lastIndexOf('.')), "-").concat(Date.now()).concat(extension);

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function resolveConflict(_x6) {
        return _resolveConflict.apply(this, arguments);
      }

      return resolveConflict;
    }()
    /**
     * Returns detailed error response
     *
     * @param {Object} error
     * @return {Object}
     */

  }, {
    key: "getErrorResponse",
    value: function getErrorResponse(error) {
      if (!error) {
        return {};
      }

      var response = error.response;

      if (!response) {
        return {};
      }

      if (response.status === 401) {
        return response;
      }

      return response.data;
    }
  }]);

  return MultiputUpload;
}(BaseMultiput);

export default MultiputUpload;
//# sourceMappingURL=MultiputUpload.js.map