/**
 * 
 * @file Offset Based Pagination component
 * @author Box
 */
import React from 'react';
import noop from 'lodash/noop';
import PaginationControls from './PaginationControls';
import { DEFAULT_PAGE_SIZE } from '../../constants';

var OffsetBasedPagination = function OffsetBasedPagination(_ref) {
  var _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? 0 : _ref$offset,
      _ref$onOffsetChange = _ref.onOffsetChange,
      onOffsetChange = _ref$onOffsetChange === void 0 ? noop : _ref$onOffsetChange,
      _ref$pageSize = _ref.pageSize,
      pageSize = _ref$pageSize === void 0 ? DEFAULT_PAGE_SIZE : _ref$pageSize,
      _ref$totalCount = _ref.totalCount,
      totalCount = _ref$totalCount === void 0 ? 0 : _ref$totalCount;
  var pageCount = Math.ceil(totalCount / pageSize);
  if (pageCount <= 1) return null;
  var pageByOffset = Math.floor(offset / pageSize) + 1;
  var pageNumber = pageByOffset > 0 ? Math.min(pageCount, pageByOffset) : 1;
  var hasNextPage = pageNumber < pageCount;
  var hasPreviousPage = pageNumber > 1;

  var updateOffset = function updateOffset(newPageNumber) {
    var newOffset = (newPageNumber - 1) * pageSize;

    if (newOffset <= 0) {
      newOffset = 0;
    }

    if (newOffset >= totalCount) {
      newOffset = totalCount - pageSize;
    }

    onOffsetChange(newOffset);
  };

  var handleNextClick = function handleNextClick() {
    updateOffset(pageNumber + 1);
  };

  var handlePreviousClick = function handlePreviousClick() {
    updateOffset(pageNumber - 1);
  };

  return React.createElement(PaginationControls, {
    handleNextClick: handleNextClick,
    handlePreviousClick: handlePreviousClick,
    hasNextPage: hasNextPage,
    hasPreviousPage: hasPreviousPage,
    isOffsetBasedPagination: true,
    onPageClick: updateOffset,
    pageCount: pageCount,
    pageNumber: pageNumber
  });
};

export default OffsetBasedPagination;
//# sourceMappingURL=OffsetBasedPagination.js.map