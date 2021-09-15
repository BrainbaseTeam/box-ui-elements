function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Throttler implements something similar to debounce but throttle is more suitable for
 * throttling backend call because it will retrieve result from a recorded call if a call of the
 * same key AND params has not expired.
 *
 * A couple of improvement compared with lodash/debounce is:
 *  1. avoid call only if key AND params are the same as cached
 *  2. avoid implementing using setTimeout as setTimeout is more complex, and fragile
 *  3. return value is recorded and retrieved next time if a second call is made
 *  4. key is optional and is used to optimize for retrieval performance but can only contain
 *     string or number, while params can accommodate array of any data for referential equality
 *     check.
 *
 *  Use case:
 *    1) when we make backend call to log event, we can avoid making multiple calls for the
 *       same event due to minor UI flickering, but still allow different event to go through.
 *    2) when we make backend call for email address validation, we can avoid making repeated calls
 *       in short period of time for the same email address.
 *  Implementation:
 *    store is an object of key => array of records where each record contains params array,
 *    expirationTime and result of the call.
 *  Example:
 *    Assuming there are two backend calls:
 *        const validateEmail = async (email :string) => boolean
 *        const postEvent = async (name: string, type: string) => void
 *
 *    Here is the code to implement a throttler that will throttle the call if it has been
 *    called in the last 1000 seconds. Notice that throttled version has exactly the same
 *    signature as unthrottled version.
 *        const validateEmailThrottler = new Throttler<boolean>();
 *        const throttledValidateEmail = (email: string) =>
 *            validateEmailThrottler(() => validateEmail(email), 1e6, [], email);
 *
 *        const postEventThrottler = new Throttler<void, Array<string>>();
 *        const throttledPostEvent = (name: string, type: string) =>
 *            postEventThrottler(() => postEvent(name, type), 1e6, [name, type]);
 *
 * Abbreviation
 *   V: the return value of the callback function.
 *   P: the parameter of the callback function as an array, default to Array<any>.
 *   PB: the base type for the parameter of the callback function.
 */
var Throttler =
/*#__PURE__*/
function () {
  function Throttler() {
    _classCallCheck(this, Throttler);

    _defineProperty(this, "store", {});
  }

  _createClass(Throttler, [{
    key: "throttle",
    value: function throttle(callback, expirationInMs, params, key) {
      function isMatchingRecord(record) {
        if (record.params.length !== params.length) {
          return false;
        }

        return !params.some(function (param, i) {
          return record.params[i] !== param;
        });
      }

      var _this$store$key = this.store[key],
          records = _this$store$key === void 0 ? [] : _this$store$key;
      var currentTime = Date.now(); // remove existing records that have expired

      var filteredRecords = records.filter(function (_ref) {
        var expirationTime = _ref.expirationTime;
        return expirationTime > currentTime;
      }); // check if there is a matching record to reuse

      var matchedRecords = filteredRecords.filter(isMatchingRecord);
      this.store[key] = filteredRecords;

      if (matchedRecords.length < 1) {
        // add the call into records
        var expirationTime = currentTime + expirationInMs;
        var record = {
          expirationTime: expirationTime,
          params: params,
          result: callback()
        };
        this.store[key].push(record);
        return record.result;
      }

      return matchedRecords[0].result;
    }
  }]);

  return Throttler;
}();

export default Throttler;
//# sourceMappingURL=Throttler.js.map