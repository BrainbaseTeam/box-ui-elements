import * as React from 'react';
import classNames from 'classnames';
import './GridViewSlot.scss';

var GridViewSlot = function GridViewSlot(_ref) {
  var selected = _ref.selected,
      slotIndex = _ref.slotIndex,
      slotRenderer = _ref.slotRenderer,
      slotWidth = _ref.slotWidth;
  return React.createElement("div", {
    className: "bdl-GridViewSlot",
    style: {
      maxWidth: slotWidth,
      flexBasis: slotWidth
    }
  }, React.createElement("div", {
    className: classNames('bdl-GridViewSlot-content', {
      'bdl-GridViewSlot-content--selected': selected
    })
  }, slotRenderer(slotIndex)));
};

export default GridViewSlot;
//# sourceMappingURL=GridViewSlot.js.map