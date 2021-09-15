function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Network utilities
 * @author Box
 */
import axios from 'axios';
import getProp from 'lodash/get';
import includes from 'lodash/includes';
import lowerCase from 'lodash/lowerCase';
import TokenService from './TokenService';
import { HEADER_ACCEPT, HEADER_ACCEPT_LANGUAGE, HEADER_CLIENT_NAME, HEADER_CLIENT_VERSION, HEADER_CONTENT_TYPE, HTTP_GET, HTTP_POST, HTTP_PUT, HTTP_DELETE, HTTP_OPTIONS, HTTP_HEAD, HTTP_STATUS_CODE_RATE_LIMIT } from '../constants';
var DEFAULT_UPLOAD_TIMEOUT_MS = 120000;
var MAX_NUM_RETRIES = 3;
var RETRYABLE_HTTP_METHODS = [HTTP_GET, HTTP_OPTIONS, HTTP_HEAD].map(lowerCase);

var Xhr =
/*#__PURE__*/
function () {
  /**
   * [constructor]
   *
   * @param {Object} options
   * @param {string} options.id - item id
   * @param {string} options.clientName - Client Name
   * @param {string|function} options.token - Auth token
   * @param {string} [options.language] - Accept-Language header value
   * @param {string} [options.sharedLink] - Shared link
   * @param {string} [options.sharedLinkPassword] - Shared link password
   * @param {string} [options.requestInterceptor] - Request interceptor
   * @param {string} [options.responseInterceptor] - Response interceptor
   * @param {number[]} [options.retryableStatusCodes] - Response codes to retry
   * @param {boolean} [options.shouldRetry] - Should retry failed requests
   * @return {Xhr} Cache instance
   */
  function Xhr() {
    var _this = this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        id = _ref.id,
        clientName = _ref.clientName,
        language = _ref.language,
        token = _ref.token,
        version = _ref.version,
        sharedLink = _ref.sharedLink,
        sharedLinkPassword = _ref.sharedLinkPassword,
        responseInterceptor = _ref.responseInterceptor,
        requestInterceptor = _ref.requestInterceptor,
        _ref$retryableStatusC = _ref.retryableStatusCodes,
        retryableStatusCodes = _ref$retryableStatusC === void 0 ? [HTTP_STATUS_CODE_RATE_LIMIT] : _ref$retryableStatusC,
        _ref$shouldRetry = _ref.shouldRetry,
        _shouldRetry = _ref$shouldRetry === void 0 ? true : _ref$shouldRetry;

    _classCallCheck(this, Xhr);

    _defineProperty(this, "retryCount", 0);

    _defineProperty(this, "errorInterceptor", function (error) {
      var shouldRetry = _this.shouldRetryRequest(error);

      if (shouldRetry) {
        _this.retryCount += 1;

        var delay = _this.getExponentialRetryTimeoutInMs(_this.retryCount);

        return new Promise(function (resolve, reject) {
          _this.retryTimeout = setTimeout(function () {
            _this.axios(error.config).then(resolve, reject);
          }, delay);
        });
      }

      var errorObject = getProp(error, 'response.data') || error; // In the case of 401, response.data is empty so fall back to error

      _this.responseInterceptor(errorObject);

      return Promise.reject(error);
    });

    this.clientName = clientName;
    this.id = id;
    this.language = language;
    this.responseInterceptor = responseInterceptor || this.defaultResponseInterceptor;
    this.retryableStatusCodes = retryableStatusCodes;
    this.sharedLink = sharedLink;
    this.sharedLinkPassword = sharedLinkPassword;
    this.shouldRetry = _shouldRetry;
    this.token = token;
    this.version = version;
    this.axios = axios.create();
    this.axiosSource = axios.CancelToken.source();
    this.axios.interceptors.response.use(this.responseInterceptor, this.errorInterceptor);

    if (typeof requestInterceptor === 'function') {
      this.axios.interceptors.request.use(requestInterceptor);
    }
  }
  /**
   * Default response interceptor which just returns the response
   *
   * @param {Object} response - the axios response
   * @return the response
   */


  _createClass(Xhr, [{
    key: "defaultResponseInterceptor",
    value: function defaultResponseInterceptor(response) {
      return response;
    }
    /**
     * Determines if a request should be retried
     *
     * @param {Object} error - Error object from axios
     * @return {boolean} true if the request should be retried
     */

  }, {
    key: "shouldRetryRequest",
    value: function shouldRetryRequest(error) {
      if (!this.shouldRetry || this.retryCount >= MAX_NUM_RETRIES) {
        return false;
      }

      var response = error.response,
          request = error.request,
          config = error.config; // Retry if there is a network error (e.g. ECONNRESET) or rate limited

      var status = getProp(response, 'status');
      var method = getProp(config, 'method');
      var isNetworkError = request && !response;
      var isRateLimitError = status === HTTP_STATUS_CODE_RATE_LIMIT;
      var isOtherRetryableError = includes(this.retryableStatusCodes, status) && includes(RETRYABLE_HTTP_METHODS, method);
      return isNetworkError || isRateLimitError || isOtherRetryableError;
    }
    /**
     * Calculate the exponential backoff time with randomized jitter.
     *
     * @param {number} numRetries Which retry number this one will be. Must be > 0
     * @returns {number} The number of milliseconds after which to retry
     */

  }, {
    key: "getExponentialRetryTimeoutInMs",
    value: function getExponentialRetryTimeoutInMs(numRetries) {
      var randomizationMs = Math.ceil(Math.random() * 1000);
      var exponentialMs = Math.pow(2, numRetries - 1) * 1000;
      return exponentialMs + randomizationMs;
    }
    /**
     * Error interceptor that wraps the passed in responseInterceptor
     *
     * @param {Object} error - Error object from axios
     * @return {Promise} rejected promise with error info
     */

  }, {
    key: "getParsedUrl",

    /**
     * Utility to parse a URL.
     *
     * @param {string} url - Url to parse
     * @return {Object} parsed url
     */
    value: function getParsedUrl(url) {
      var a = document.createElement('a');
      a.href = url;
      return {
        api: url.replace("".concat(a.origin, "/2.0"), ''),
        host: a.host,
        hostname: a.hostname,
        pathname: a.pathname,
        origin: a.origin,
        protocol: a.protocol,
        hash: a.hash,
        port: a.port
      };
    }
    /**
     * Builds a list of required XHR headers.
     *
     * @param {string} [id] - Optional box item id
     * @param {Object} [args] - Optional existing headers
     * @return {Object} Headers
     */

  }, {
    key: "getHeaders",
    value: function () {
      var _getHeaders = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(id) {
        var args,
            headers,
            itemId,
            token,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                args = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                headers = _objectSpread(_defineProperty({
                  Accept: 'application/json'
                }, HEADER_CONTENT_TYPE, 'application/json'), args);

                if (this.language && !headers[HEADER_ACCEPT_LANGUAGE]) {
                  headers[HEADER_ACCEPT_LANGUAGE] = this.language;
                }

                if (this.sharedLink) {
                  headers.BoxApi = "shared_link=".concat(this.sharedLink);

                  if (this.sharedLinkPassword) {
                    headers.BoxApi = "".concat(headers.BoxApi, "&shared_link_password=").concat(this.sharedLinkPassword);
                  }
                }

                if (this.clientName) {
                  headers[HEADER_CLIENT_NAME] = this.clientName;
                }

                if (this.version) {
                  headers[HEADER_CLIENT_VERSION] = this.version;
                } // If id is passed in, use that, otherwise default to this.id


                itemId = id || this.id || '';
                _context.next = 9;
                return TokenService.getWriteToken(itemId, this.token);

              case 9:
                token = _context.sent;

                if (token) {
                  // Only add a token when there was one found
                  headers.Authorization = "Bearer ".concat(token);
                }

                return _context.abrupt("return", headers);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getHeaders(_x) {
        return _getHeaders.apply(this, arguments);
      }

      return getHeaders;
    }()
    /**
     * HTTP GETs a URL
     *
     * @param {string} id - Box item id
     * @param {string} url - The URL to fetch
     * @param {Object} [headers] - Key-value map of headers
     * @param {Object} [params] - Key-value map of querystring params
     * @return {Promise} - HTTP response
     */

  }, {
    key: "get",
    value: function get(_ref2) {
      var _this2 = this;

      var url = _ref2.url,
          id = _ref2.id,
          _ref2$params = _ref2.params,
          params = _ref2$params === void 0 ? {} : _ref2$params,
          _ref2$headers = _ref2.headers,
          headers = _ref2$headers === void 0 ? {} : _ref2$headers;
      return this.getHeaders(id, headers).then(function (hdrs) {
        return _this2.axios.get(url, {
          cancelToken: _this2.axiosSource.token,
          params: params,
          headers: hdrs,
          parsedUrl: _this2.getParsedUrl(url)
        });
      });
    }
    /**
     * HTTP POSTs a URL with JSON data
     *
     * @param {string} id - Box item id
     * @param {string} url - The URL to fetch
     * @param {Object} data - JS Object representation of JSON data to send
     * @param {Object} params - Optional query params for the request
     * @param {Object} [headers] - Key-value map of headers
     * @param {string} [method] - xhr type
     * @return {Promise} - HTTP response
     */

  }, {
    key: "post",
    value: function post(_ref3) {
      var _this3 = this;

      var url = _ref3.url,
          id = _ref3.id,
          data = _ref3.data,
          params = _ref3.params,
          _ref3$headers = _ref3.headers,
          headers = _ref3$headers === void 0 ? {} : _ref3$headers,
          _ref3$method = _ref3.method,
          method = _ref3$method === void 0 ? HTTP_POST : _ref3$method;
      return this.getHeaders(id, headers).then(function (hdrs) {
        return _this3.axios({
          url: url,
          data: data,
          params: params,
          method: method,
          parsedUrl: _this3.getParsedUrl(url),
          headers: hdrs
        });
      });
    }
    /**
     * HTTP PUTs a URL with JSON data
     *
     * @param {string} id - Box item id
     * @param {string} url - The URL to fetch
     * @param {Object} data - JS Object representation of JSON data to send
     * @param {Object} params - Optional query params for the request
     * @param {Object} [headers] - Key-value map of headers
     * @return {Promise} - HTTP response
     */

  }, {
    key: "put",
    value: function put(_ref4) {
      var url = _ref4.url,
          id = _ref4.id,
          data = _ref4.data,
          params = _ref4.params,
          _ref4$headers = _ref4.headers,
          headers = _ref4$headers === void 0 ? {} : _ref4$headers;
      return this.post({
        id: id,
        url: url,
        data: data,
        params: params,
        headers: headers,
        method: HTTP_PUT
      });
    }
    /**
     * HTTP DELETEs a URL with JSON data
     *
     * @param {string} id - Box item id
     * @param {string} url - The URL to fetch
     * @param {Object} data - JS Object representation of JSON data to send
     * @param {Object} [headers] - Key-value map of headers
     * @return {Promise} - HTTP response
     */

  }, {
    key: "delete",
    value: function _delete(_ref5) {
      var url = _ref5.url,
          id = _ref5.id,
          _ref5$data = _ref5.data,
          data = _ref5$data === void 0 ? {} : _ref5$data,
          _ref5$headers = _ref5.headers,
          headers = _ref5$headers === void 0 ? {} : _ref5$headers;
      return this.post({
        id: id,
        url: url,
        data: data,
        headers: headers,
        method: HTTP_DELETE
      });
    }
    /**
     * HTTP OPTIONs a URL with JSON data.
     *
     * @param {string} id - Box item id
     * @param {string} url - The URL to post to
     * @param {Object} data - The non-file post data that should accompany the post
     * @param {Object} [headers] - Key-value map of headers
     * @param {Function} successHandler - Load success handler
     * @param {Function} errorHandler - Error handler
     * @return {void}
     */

  }, {
    key: "options",
    value: function options(_ref6) {
      var _this4 = this;

      var id = _ref6.id,
          url = _ref6.url,
          data = _ref6.data,
          _ref6$headers = _ref6.headers,
          headers = _ref6$headers === void 0 ? {} : _ref6$headers,
          successHandler = _ref6.successHandler,
          errorHandler = _ref6.errorHandler;
      return this.getHeaders(id, headers).then(function (hdrs) {
        return _this4.axios({
          url: url,
          data: data,
          method: HTTP_OPTIONS,
          headers: hdrs
        }).then(successHandler).catch(errorHandler);
      }).catch(errorHandler);
    }
    /**
     * HTTP POST or PUT a URL with File data. Uses native XHR for progress event.
     *
     * @param {string} id - Box item id
     * @param {string} url - The URL to post to
     * @param {Object} [data] - File data and attributes
     * @param {Object} [headers] - Key-value map of headers
     * @param {string} [method] - XHR method, supports 'POST' and 'PUT'
     * @param {Function} successHandler - Load success handler
     * @param {Function} errorHandler - Error handler
     * @param {Function} progressHandler - Progress handler
     * @param {boolean} [withIdleTimeout] - enable idle timeout
     * @param {number} [idleTimeoutDuration] - idle timeout duration
     * @param {Function} [idleTimeoutHandler]
     * @return {void}
     */

  }, {
    key: "uploadFile",
    value: function uploadFile(_ref7) {
      var _this5 = this;

      var id = _ref7.id,
          url = _ref7.url,
          data = _ref7.data,
          _ref7$headers = _ref7.headers,
          headers = _ref7$headers === void 0 ? {} : _ref7$headers,
          _ref7$method = _ref7.method,
          method = _ref7$method === void 0 ? HTTP_POST : _ref7$method,
          successHandler = _ref7.successHandler,
          errorHandler = _ref7.errorHandler,
          progressHandler = _ref7.progressHandler,
          _ref7$withIdleTimeout = _ref7.withIdleTimeout,
          withIdleTimeout = _ref7$withIdleTimeout === void 0 ? false : _ref7$withIdleTimeout,
          _ref7$idleTimeoutDura = _ref7.idleTimeoutDuration,
          idleTimeoutDuration = _ref7$idleTimeoutDura === void 0 ? DEFAULT_UPLOAD_TIMEOUT_MS : _ref7$idleTimeoutDura,
          idleTimeoutHandler = _ref7.idleTimeoutHandler;
      return this.getHeaders(id, headers).then(function (hdrs) {
        var idleTimeout;
        var progressHandlerToUse = progressHandler;

        if (withIdleTimeout) {
          // Func that aborts upload and executes timeout callback
          var idleTimeoutFunc = function idleTimeoutFunc() {
            _this5.abort();

            if (idleTimeoutHandler) {
              idleTimeoutHandler();
            }
          };

          idleTimeout = setTimeout(idleTimeoutFunc, idleTimeoutDuration); // Progress handler that aborts upload if there has been no progress for >= timeoutMs

          progressHandlerToUse = function progressHandlerToUse(event) {
            clearTimeout(idleTimeout);
            idleTimeout = setTimeout(idleTimeoutFunc, idleTimeoutDuration);
            progressHandler(event);
          };
        }

        _this5.axios({
          url: url,
          data: data,
          transformRequest: function transformRequest(reqData, reqHeaders) {
            // Remove Accept & Content-Type added by getHeaders()
            delete reqHeaders[HEADER_ACCEPT];
            delete reqHeaders[HEADER_CONTENT_TYPE];

            if (headers[HEADER_CONTENT_TYPE]) {
              reqHeaders[HEADER_CONTENT_TYPE] = headers[HEADER_CONTENT_TYPE];
            } // Convert to FormData if needed


            if (reqData && !(reqData instanceof Blob) && reqData.attributes) {
              var formData = new FormData();
              Object.keys(reqData).forEach(function (key) {
                formData.append(key, reqData[key]);
              });
              return formData;
            }

            return reqData;
          },
          method: method,
          headers: hdrs,
          onUploadProgress: progressHandlerToUse,
          cancelToken: _this5.axiosSource.token
        }).then(function (response) {
          clearTimeout(idleTimeout);
          successHandler(response);
        }).catch(function (error) {
          clearTimeout(idleTimeout);
          errorHandler(error);
        });
      }).catch(errorHandler);
    }
    /**
     * Aborts an axios request.
     *
     * @return {void}
     */

  }, {
    key: "abort",
    value: function abort() {
      if (this.retryTimeout) {
        clearTimeout(this.retryTimeout);
      }

      if (this.axiosSource) {
        this.axiosSource.cancel();
        this.axiosSource = axios.CancelToken.source();
      }
    }
  }]);

  return Xhr;
}();

export default Xhr;
//# sourceMappingURL=Xhr.js.map