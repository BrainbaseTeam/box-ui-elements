function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import FeatureConsumer from './FeatureConsumer';

function withFeatureConsumer(WrappedComponent) {
  function wrapComponent(props, ref) {
    return React.createElement(FeatureConsumer, null, function (features) {
      return React.createElement(WrappedComponent, _extends({}, props, {
        ref: ref,
        features: features
      }));
    });
  }

  var wrappedName = WrappedComponent.displayName || WrappedComponent.name || 'component';
  wrapComponent.displayName = "withFeatureConsumer(".concat(wrappedName, ")");
  return React.forwardRef(wrapComponent);
}

export default withFeatureConsumer;
//# sourceMappingURL=withFeatureConsumer.js.map