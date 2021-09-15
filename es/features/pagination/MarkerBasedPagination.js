/**
 * 
 * @file Offset Based Pagination component
 * @author Box
 */
import React from 'react';
import noop from 'lodash/noop';
import PaginationControls from './PaginationControls';

var MarkerBasedPagination = function MarkerBasedPagination(_ref) {
  var _ref$hasNextMarker = _ref.hasNextMarker,
      hasNextMarker = _ref$hasNextMarker === void 0 ? false : _ref$hasNextMarker,
      _ref$hasPrevMarker = _ref.hasPrevMarker,
      hasPrevMarker = _ref$hasPrevMarker === void 0 ? false : _ref$hasPrevMarker,
      _ref$onMarkerBasedPag = _ref.onMarkerBasedPageChange,
      onMarkerBasedPageChange = _ref$onMarkerBasedPag === void 0 ? noop : _ref$onMarkerBasedPag;

  if (!hasNextMarker && !hasPrevMarker) {
    return null;
  }

  var handleNextClick = function handleNextClick() {
    onMarkerBasedPageChange(1);
  };

  var handlePreviousClick = function handlePreviousClick() {
    onMarkerBasedPageChange(-1);
  };

  return React.createElement(PaginationControls, {
    handleNextClick: handleNextClick,
    handlePreviousClick: handlePreviousClick,
    hasNextPage: hasNextMarker,
    hasPreviousPage: hasPrevMarker,
    isOffsetBasedPagination: false
  });
};

export default MarkerBasedPagination;
//# sourceMappingURL=MarkerBasedPagination.js.map