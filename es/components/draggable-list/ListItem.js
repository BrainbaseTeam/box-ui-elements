function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import IconDrag from '../../icons/general/IconDrag';

var ListItem = function ListItem(_ref) {
  var children = _ref.children,
      draggableProvided = _ref.draggableProvided,
      isDraggableViaHandle = _ref.isDraggableViaHandle;
  return React.createElement("div", _extends({
    ref: draggableProvided.innerRef,
    className: "draggable-list"
  }, draggableProvided.draggableProps, isDraggableViaHandle ? {} : draggableProvided.dragHandleProps), React.createElement("div", {
    className: "draggable-list-content"
  }, children), isDraggableViaHandle && React.createElement("div", _extends({
    className: "draggable-list-handle"
  }, draggableProvided.dragHandleProps), React.createElement(IconDrag, null)));
};

export default ListItem;
//# sourceMappingURL=ListItem.js.map