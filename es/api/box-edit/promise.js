/**
 * NOTE: we don't use the NPM package directly because it has an unnecessary dependency on es6-promise + its commonjs format.
 * Returns the first promise in `promises` to successfully resolve.
 * If all fail, reject.
 * @see {@link https://github.com/jarofghosts/promise-one}
 */
function promiseOne(promises) {
  var errors = [];
  var errorCount = 0;
  var error;
  return new Promise(function (resolve, reject) {
    var pushErrors = function pushErrors(idx) {
      return function (err) {
        errors[idx] = err;
        errorCount += 1;

        if (errorCount === promises.length) {
          error = new Error('no promises resolved');
          reject(error);
        }
      };
    };

    promises.forEach(function (promise, idx) {
      promise.then(resolve).catch(pushErrors(idx));
    });
  });
}

export default promiseOne;
//# sourceMappingURL=promise.js.map