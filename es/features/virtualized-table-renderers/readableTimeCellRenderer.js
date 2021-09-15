import * as React from 'react';
import baseCellRenderer from './baseCellRenderer';
import ReadableTime from '../../components/time/ReadableTime';

var readableTimeCellRenderer = function readableTimeCellRenderer(cellRendererParams) {
  return baseCellRenderer(cellRendererParams, function (cellValue) {
    return React.createElement(ReadableTime, {
      timestamp: Date.parse(cellValue),
      alwaysShowTime: true
    });
  });
};

export default readableTimeCellRenderer;
//# sourceMappingURL=readableTimeCellRenderer.js.map