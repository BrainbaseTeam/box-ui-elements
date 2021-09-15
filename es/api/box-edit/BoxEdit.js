function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import Browser from './BrowserUtils';
import ComServerClient from './ComServerClient';
import CONSTANTS from './constants';
var TIMEOUT_MS = 5000;
var EXTENSION_CHECK_DEBOUNCE_TIME = 100;
var extensionRequestTimeout;

function createRequestData(extensions) {
  return JSON.stringify({
    request_type: 'get_default_application',
    extension: extensions
  });
}

function createExecuteData(fileId, token, authCode, tokenScope) {
  var execData = JSON.stringify({
    auth_code: authCode,
    auth_token: token,
    browser_type: Browser.getName(),
    command_type: 'launch_application',
    file_id: fileId.toString(),
    token_scope: tokenScope
  });
  return execData;
}

function isBlacklistedExtension(extension) {
  var EXTENSION_BLACKLIST = CONSTANTS.EXTENSION_BLACKLIST;
  var uppercaseExt = extension.toUpperCase(); // if ext has a leading ., strip it

  if (uppercaseExt.charAt(0) === '.') {
    uppercaseExt = uppercaseExt.substr(1);
  }

  return uppercaseExt in EXTENSION_BLACKLIST;
}

var BoxEditInstance = null;

var BoxEdit =
/*#__PURE__*/
function () {
  function BoxEdit() {
    _classCallCheck(this, BoxEdit);

    if (!(BoxEditInstance instanceof BoxEdit)) {
      BoxEditInstance = this;
    }

    this.extensionRequestQueue = new Map();
    return BoxEditInstance;
  }

  _createClass(BoxEdit, [{
    key: "queueGetNativeAppNameFromLocal",
    value: function queueGetNativeAppNameFromLocal(extension) {
      // There's already a pending or fulfilled request for the appname
      if (this.extensionRequestQueue.has(extension)) {
        var queueItem = this.extensionRequestQueue.get(extension);

        if (!queueItem) {
          throw new Error('Race condition re: queueGetNativeAppNameFromLocal');
        }

        return queueItem.promise;
      }

      var extensionRequest = {};
      var appNameRequestPromise = new Promise(function (resolve, reject) {
        extensionRequest.resolve = resolve;
        extensionRequest.reject = reject;
      });
      extensionRequest.promise = appNameRequestPromise;
      this.extensionRequestQueue.set(extension, extensionRequest);
      return appNameRequestPromise;
    }
  }, {
    key: "checkBoxEditAvailability",
    value: function checkBoxEditAvailability() {
      return this.getBoxEditAvailability();
    }
  }, {
    key: "getBoxEditAvailability",
    value: function getBoxEditAvailability() {
      this.client = new ComServerClient(CONSTANTS.BOX_EDIT_APP_NAME);
      return this.client.getComServerStatus();
    }
  }, {
    key: "canOpenWithBoxEdit",
    value: function () {
      var _canOpenWithBoxEdit = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(extensions) {
        var _this = this;

        var extensionToAppTuples, resultMap;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Promise.all(extensions.map(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee(ext) {
                    var appName, result, _result;

                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return _this.getAppForExtension(ext);

                          case 3:
                            appName = _context.sent;
                            result = [ext, appName];
                            return _context.abrupt("return", result);

                          case 8:
                            _context.prev = 8;
                            _context.t0 = _context["catch"](0);
                            _result = [ext, ''];
                            return _context.abrupt("return", _result);

                          case 12:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, null, [[0, 8]]);
                  }));

                  return function (_x2) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 2:
                extensionToAppTuples = _context2.sent;
                resultMap = new Map();
                extensionToAppTuples.forEach(function (tuple) {
                  return resultMap.set.apply(resultMap, _toConsumableArray(tuple));
                });
                return _context2.abrupt("return", Promise.resolve(resultMap));

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function canOpenWithBoxEdit(_x) {
        return _canOpenWithBoxEdit.apply(this, arguments);
      }

      return canOpenWithBoxEdit;
    }()
  }, {
    key: "openFile",
    value: function openFile(fileID, token) {
      // @NOTE. canOpenWithBoxEdit, create token taken care of higher levels
      // therefore not ported into React library
      // TODO is token the right name?
      var executeDataAsString = createExecuteData(fileID, token.data.token, token.data.auth_code, token.data.token_scope);
      return this.client.sendCommand(executeDataAsString, TIMEOUT_MS);
    }
  }, {
    key: "getAppForExtension",
    value: function getAppForExtension(extension) {
      var _this2 = this;

      try {
        if (isBlacklistedExtension(extension)) {
          throw new Error('blacklisted');
        }

        var applicationSupportRequest = this.queueGetNativeAppNameFromLocal(extension);

        if (!extensionRequestTimeout) {
          extensionRequestTimeout = setTimeout(function () {
            _this2.processExtensionRequestQueue();
          }, EXTENSION_CHECK_DEBOUNCE_TIME);
        }

        return applicationSupportRequest;
      } catch (err) {
        return Promise.reject();
      }
    }
  }, {
    key: "processExtensionRequestQueue",
    value: function processExtensionRequestQueue() {
      var copyQueue = new Map();
      var extensions = [];
      this.extensionRequestQueue.forEach(function (value, key) {
        copyQueue.set(key, value);
        extensions.push(key);
      });
      this.extensionRequestQueue.clear();
      extensionRequestTimeout = null;
      var requestData = createRequestData(extensions);
      return this.client.sendRequest(requestData).then(function (data) {
        if (data && data.default_application_name) {
          var defaultApplicationName = data.default_application_name; // @TODO. Reassess.
          // This is an odd construction that may not be necessary.

          if (Object.prototype.toString.call(defaultApplicationName) === '[object Object]') {
            defaultApplicationName = [defaultApplicationName];
          }

          defaultApplicationName.forEach(function (extensionAppObj) {
            var extension = Object.keys(extensionAppObj)[0];
            var appName = decodeURIComponent(extensionAppObj[extension]);

            if (appName) {
              var queueItem = copyQueue.get(extension);

              if (queueItem) {
                queueItem.resolve(appName);
                copyQueue.delete(extension);
              }
            }
          });
        } // Reject all remaining items in the queue


        extensions.forEach(function (extension) {
          var queueItem = copyQueue.get(extension);

          if (queueItem) {
            queueItem.reject();
          }
        });
      });
    }
  }]);

  return BoxEdit;
}();

export default BoxEdit;
//# sourceMappingURL=BoxEdit.js.map