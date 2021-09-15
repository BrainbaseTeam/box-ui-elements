import * as React from 'react';
import Tooltip, { TooltipPosition } from '../tooltip';
import LabelPrimitive from './LabelPrimitive';

var StandardLabel = function StandardLabel(_ref) {
  var children = _ref.children,
      labelContent = _ref.labelContent,
      tooltip = _ref.tooltip;
  var label = React.createElement(LabelPrimitive, {
    labelContent: labelContent
  }, children);
  return tooltip ? React.createElement(Tooltip, {
    position: TooltipPosition.TOP_RIGHT,
    text: tooltip
  }, label) : label;
};

export default StandardLabel;
//# sourceMappingURL=StandardLabel.js.map