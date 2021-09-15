function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import LoadingIndicator from './LoadingIndicator';

var makeLoadable = function makeLoadable(BaseComponent) {
  var LoadableComponent = function LoadableComponent(_ref) {
    var _ref$isLoading = _ref.isLoading,
        isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
        _ref$loadingIndicator = _ref.loadingIndicatorProps,
        loadingIndicatorProps = _ref$loadingIndicator === void 0 ? {} : _ref$loadingIndicator,
        rest = _objectWithoutProperties(_ref, ["isLoading", "loadingIndicatorProps"]);

    return isLoading ? React.createElement(LoadingIndicator, loadingIndicatorProps) : React.createElement(BaseComponent, rest);
  };

  LoadableComponent.displayName = "Loadable".concat(BaseComponent.displayName || BaseComponent.name || 'Component');
  return LoadableComponent;
};

export default makeLoadable;
//# sourceMappingURL=makeLoadable.js.map