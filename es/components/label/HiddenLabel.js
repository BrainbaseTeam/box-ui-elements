import * as React from 'react';
import LabelPrimitive from './LabelPrimitive';

var HiddenLabel = function HiddenLabel(_ref) {
  var children = _ref.children,
      labelContent = _ref.labelContent;
  return React.createElement(LabelPrimitive, {
    className: "accessibility-hidden",
    labelContent: labelContent
  }, children);
};

export default HiddenLabel;
//# sourceMappingURL=HiddenLabel.js.map