import baseCellRenderer from './baseCellRenderer';
import getSize from '../../utils/size';
import { DEFAULT_MULTIPLIER } from './constants';

var sizeCellRenderer = function sizeCellRenderer() {
  var multiplier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_MULTIPLIER;
  return function (cellRendererParams) {
    return baseCellRenderer(cellRendererParams, function (cellValue) {
      return getSize(Number(cellValue) * multiplier);
    });
  };
};

export default sizeCellRenderer;
//# sourceMappingURL=sizeCellRenderer.js.map