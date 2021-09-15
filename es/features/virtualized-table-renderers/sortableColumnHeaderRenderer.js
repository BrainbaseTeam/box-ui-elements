import * as React from 'react';
import classNames from 'classnames';
import { SortDirection } from 'react-virtualized/dist/es/Table/index';
import IconSortChevron from '../../icons/general/IconSortChevron';
var ASC = SortDirection.ASC,
    DESC = SortDirection.DESC;

var sortableColumnHeaderRenderer = function sortableColumnHeaderRenderer(_ref) {
  var dataKey = _ref.dataKey,
      label = _ref.label,
      sortBy = _ref.sortBy,
      sortDirection = _ref.sortDirection;
  return React.createElement("span", {
    className: "VirtualizedTable-sortableColumnHeader ReactVirtualized__Table__headerTruncatedText",
    title: label
  }, React.createElement("span", null, label), dataKey === sortBy && React.createElement(IconSortChevron, {
    className: classNames('VirtualizedTable-sortIcon', {
      'is-ascending': sortDirection === ASC,
      'is-descending': sortDirection === DESC
    })
  }));
};

export default sortableColumnHeaderRenderer;
//# sourceMappingURL=sortableColumnHeaderRenderer.js.map