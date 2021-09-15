function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import CONSTANTS from './constants';
/* eslint-disable*/

var Channel =
/*#__PURE__*/
function () {
  function Channel(appName) {
    var _this = this;

    _classCallCheck(this, Channel);

    _defineProperty(this, "buildNextRequestID", function () {
      return "".concat(CONSTANTS.REQUEST_ID_PRE).concat(_this.window.performance.now());
    });

    _defineProperty(this, "buildDetailsObj", function (operationType, data, comServerToApplicationTimeoutSec) {
      var timeoutSecString = comServerToApplicationTimeoutSec.toString();
      var details = {
        data: undefined,
        operation: operationType,
        properties: {
          application: _this.appName,
          timeout: timeoutSecString
        },
        // eslint-disable-next-line camelcase
        req_id: _this.buildNextRequestID()
      };

      if (operationType !== CONSTANTS.OPERATION_STATUS) {
        if (!data) {
          throw new TypeError("Data cannot be undefined for ".concat(operationType));
        }

        details.data = data;
      }

      return details;
    });

    this.appName = appName;
    this.window = window;
  }

  _createClass(Channel, [{
    key: "sendCommand",
    value: function sendCommand(requestData, browserToComServerTimeoutMS, comServerToApplicationTimeoutSec) {
      return Promise.resolve('TODO');
    }
  }, {
    key: "sendRequest",
    value: function sendRequest(requestData, browserToComServerTimeoutMS, comServerToApplicationTimeoutSec) {
      return Promise.resolve('TODO');
    }
  }, {
    key: "getComServerStatus",
    value: function getComServerStatus(browserToComServerTimeoutMS, comServerToApplicationTimeoutSec) {
      return Promise.resolve('TODO');
    }
  }, {
    key: "destroy",
    value: function destroy() {}
  }]);

  return Channel;
}();

export default Channel;
//# sourceMappingURL=Channel.js.map