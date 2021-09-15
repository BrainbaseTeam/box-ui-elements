import { EMPTY_VALUE } from './constants';

var baseCellRenderer = function baseCellRenderer(_ref) {
  var cellData = _ref.cellData;
  var renderValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String;

  if (typeof cellData === 'undefined' || cellData === null || cellData === '') {
    return EMPTY_VALUE;
  }

  return renderValue(cellData);
};

export default baseCellRenderer;
//# sourceMappingURL=baseCellRenderer.js.map