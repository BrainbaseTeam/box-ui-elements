function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Decorates a component with logging methods
 * @author Box
 */
import * as React from 'react';
import Logger from './Logger';

var withLogger = function withLogger(source) {
  return function (WrappedComponent) {
    return /*#__PURE__*/React.forwardRef(function (props, ref) {
      return /*#__PURE__*/React.createElement(Logger, _extends({}, props, {
        source: source
      }), /*#__PURE__*/React.createElement(WrappedComponent, {
        ref: ref
      }));
    });
  };
};

export default withLogger;
//# sourceMappingURL=withLogger.js.map