import * as React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Portal from '../portal';
import ListItem from './ListItem';

var PortaledDraggableListItem = function PortaledDraggableListItem(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      id = _ref.id,
      index = _ref.index,
      isDraggableViaHandle = _ref.isDraggableViaHandle;
  return React.createElement(Draggable, {
    draggableId: id,
    index: index
  }, function (draggableProvided, draggableSnapshot) {
    var listItem = React.createElement(ListItem, {
      draggableProvided: draggableProvided,
      isDraggableViaHandle: isDraggableViaHandle
    }, children);

    if (draggableSnapshot.isDragging) {
      return React.createElement(Portal, {
        className: className
      }, listItem);
    }

    return listItem;
  });
};

export default PortaledDraggableListItem;
//# sourceMappingURL=PortaledDraggableListItem.js.map