function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file withErrorBoundary HOC which adds error boundaries as well as error logging
 * @author Box
 */
import * as React from 'react';
import DefaultError from './DefaultError';
import ErrorBoundary from './ErrorBoundary';

var withErrorBoundary = function withErrorBoundary(errorOrigin) {
  var errorComponent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DefaultError;
  return function (WrappedComponent) {
    return React.forwardRef(function (props, ref) {
      return React.createElement(ErrorBoundary, _extends({
        errorComponent: errorComponent,
        errorOrigin: errorOrigin
      }, props), React.createElement(WrappedComponent, {
        ref: ref
      }));
    });
  };
};

export default withErrorBoundary;
//# sourceMappingURL=withErrorBoundary.js.map