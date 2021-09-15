import * as React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import ListItem from './ListItem';

var DraggableListItem = function DraggableListItem(_ref) {
  var children = _ref.children,
      id = _ref.id,
      index = _ref.index,
      isDraggableViaHandle = _ref.isDraggableViaHandle;
  return React.createElement(Draggable, {
    draggableId: id,
    index: index
  }, function (draggableProvided) {
    return React.createElement(ListItem, {
      draggableProvided: draggableProvided,
      isDraggableViaHandle: isDraggableViaHandle
    }, children);
  });
};

export default DraggableListItem;
//# sourceMappingURL=DraggableListItem.js.map