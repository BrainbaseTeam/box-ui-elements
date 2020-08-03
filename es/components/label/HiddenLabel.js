import * as React from 'react';
import LabelPrimitive from './LabelPrimitive';
var HIDDEN_CLASS_NAME = 'accessibility-hidden';

var HiddenLabel = function HiddenLabel(_ref) {
  var children = _ref.children,
      labelContent = _ref.labelContent;
  return /*#__PURE__*/React.createElement(LabelPrimitive, {
    className: HIDDEN_CLASS_NAME,
    labelContent: labelContent
  }, children);
};

export default HiddenLabel;
//# sourceMappingURL=HiddenLabel.js.map