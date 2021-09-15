import * as React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import './DraggableList.scss';

var DraggableList = function DraggableList(_ref) {
  var children = _ref.children,
      className = _ref.className,
      listId = _ref.listId,
      _onDragEnd = _ref.onDragEnd;
  return React.createElement(DragDropContext, {
    onDragEnd: function onDragEnd(result) {
      var destinationIndex = result.destination ? result.destination.index : result.source.index;
      return _onDragEnd(result.source.index, destinationIndex);
    }
  }, React.createElement(Droppable, {
    droppableId: listId
  }, function (droppableProvided) {
    return React.createElement("div", {
      ref: droppableProvided.innerRef,
      className: className
    }, children);
  }));
};

export default DraggableList;
//# sourceMappingURL=DraggableList.js.map