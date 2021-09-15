function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { MemoryRouter, Router } from 'react-router';

var NavRouter = function NavRouter(_ref) {
  var children = _ref.children,
      history = _ref.history,
      rest = _objectWithoutProperties(_ref, ["children", "history"]);

  if (history) {
    return React.createElement(Router, {
      history: history
    }, children);
  }

  return React.createElement(MemoryRouter, rest, children);
};

export default NavRouter;
//# sourceMappingURL=NavRouter.js.map