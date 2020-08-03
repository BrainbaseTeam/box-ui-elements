import * as React from 'react';
import Tooltip from '../tooltip';
import LabelPrimitive from './LabelPrimitive';

var StandardLabel = function StandardLabel(_ref) {
  var children = _ref.children,
      labelContent = _ref.labelContent,
      tooltip = _ref.tooltip;
  var label = /*#__PURE__*/React.createElement(LabelPrimitive, {
    labelContent: labelContent
  }, children);
  return tooltip ? /*#__PURE__*/React.createElement(Tooltip, {
    position: "top-right",
    text: tooltip
  }, label) : label;
};

export default StandardLabel;
//# sourceMappingURL=StandardLabel.js.map