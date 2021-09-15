function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import AsyncError from './AsyncError';
import { retryNumOfTimes } from '../../../utils/function';
var DEFAULT_NUM_TIMES = 3;
var DEFAULT_INITIAL_DELAY = 500;
var DEFAULT_BACKOFF_FACTOR = 2;

var AsyncLoad = function AsyncLoad() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      errorComponent = _ref.errorComponent,
      fallback = _ref.fallback,
      loader = _ref.loader;

  var lazyRetry = function lazyRetry() {
    return retryNumOfTimes(function (successCallback, errorCallback) {
      return loader().then(successCallback).catch(errorCallback);
    }, DEFAULT_NUM_TIMES, DEFAULT_INITIAL_DELAY, DEFAULT_BACKOFF_FACTOR);
  };

  var LazyComponent = React.lazy(function () {
    return loader().catch(lazyRetry);
  });
  return React.forwardRef(function (props, ref) {
    return React.createElement(AsyncError, {
      component: errorComponent
    }, React.createElement(React.Suspense, {
      fallback: fallback || null
    }, React.createElement(LazyComponent, _extends({
      ref: ref
    }, props))));
  });
};

export default AsyncLoad;
//# sourceMappingURL=AsyncLoad.js.map