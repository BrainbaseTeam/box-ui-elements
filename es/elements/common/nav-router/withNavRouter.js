function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import NavRouter from './NavRouter';

var withNavRouter = function withNavRouter(Component) {
  function WithNavRouter(_ref) {
    var history = _ref.history,
        initialEntries = _ref.initialEntries,
        rest = _objectWithoutProperties(_ref, ["history", "initialEntries"]);

    return React.createElement(NavRouter, {
      history: history,
      initialEntries: initialEntries
    }, React.createElement(Component, rest));
  }

  WithNavRouter.displayName = "withNavRouter(".concat(Component.displayName || Component.name || 'Component');
  return WithNavRouter;
};

export default withNavRouter;
//# sourceMappingURL=withNavRouter.js.map