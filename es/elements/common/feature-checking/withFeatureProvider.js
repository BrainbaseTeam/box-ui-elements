function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import FeatureProvider from './FeatureProvider';

function withFeatureProvider(WrappedComponent) {
  function wrapComponent(_ref, ref) {
    var features = _ref.features,
        props = _objectWithoutProperties(_ref, ["features"]);

    return React.createElement(FeatureProvider, {
      features: features
    }, React.createElement(WrappedComponent, _extends({}, props, {
      ref: ref
    })));
  }

  var wrappedName = WrappedComponent.displayName || WrappedComponent.name || 'component';
  wrapComponent.displayName = "withFeatureProvider(".concat(wrappedName, ")"); // $FlowFixMe forwardRef not supported until Flow 0.89.0

  return React.forwardRef(wrapComponent);
}

export default withFeatureProvider;
//# sourceMappingURL=withFeatureProvider.js.map