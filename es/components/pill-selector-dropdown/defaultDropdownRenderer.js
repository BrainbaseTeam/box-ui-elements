import * as React from 'react';
import DatalistItem from '../datalist-item';

function defaultDropdownRenderer(options) {
  return options.map(function (_ref) {
    var displayText = _ref.displayText,
        value = _ref.value;
    return React.createElement(DatalistItem, {
      key: value
    }, displayText);
  });
}

export default defaultDropdownRenderer;
//# sourceMappingURL=defaultDropdownRenderer.js.map