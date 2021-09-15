import * as React from 'react';
import DraggableList from '../../../examples/src/DraggableListExamples';
import notes from './DraggableList.stories.md';
export var example = function example() {
  var isDraggableViaHandle = true;
  return React.createElement(DraggableList, {
    isDraggableViaHandle: isDraggableViaHandle
  });
};
export default {
  title: 'Components|DraggableList',
  component: DraggableList,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=DraggableList.stories.js.map