import * as React from 'react';
import { isFeatureEnabled, getFeatureConfig } from './util';
import FeatureConsumer from './FeatureConsumer';
import * as types from './flowTypes';

function FeatureFlag(_ref) {
  var feature = _ref.feature,
      _ref$enabled = _ref.enabled,
      enabled = _ref$enabled === void 0 ? function () {
    return null;
  } : _ref$enabled,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? function () {
    return null;
  } : _ref$disabled,
      children = _ref.children,
      _ref$not = _ref.not,
      not = _ref$not === void 0 ? false : _ref$not;
  return React.createElement(FeatureConsumer, null, function (features) {
    var isEnabled = not ? !isFeatureEnabled(features, feature) : isFeatureEnabled(features, feature);
    var featureConfig = getFeatureConfig(features, feature);
    if (children) return isEnabled && children;
    return isEnabled ? enabled(featureConfig) : disabled();
  });
}

export default FeatureFlag;
//# sourceMappingURL=FeatureFlag.js.map