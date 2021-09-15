function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Wraps a component with the API context
 * @author Box
 */
import * as React from 'react';
import APIContext from './APIContext';

var withAPIContext = function withAPIContext(WrappedComponent) {
  return React.forwardRef(function (props, ref) {
    return React.createElement(APIContext.Consumer, null, function (api) {
      return React.createElement(WrappedComponent, _extends({
        ref: ref
      }, props, {
        api: api
      }));
    });
  });
};

export default withAPIContext;
//# sourceMappingURL=withAPIContext.js.map