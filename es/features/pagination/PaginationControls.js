/**
 * 
 * @file Pagination controls for navigation
 * @author Box
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import PaginationMenu from './PaginationMenu';
import Button from '../../components/button';
import ButtonGroup from '../../components/button-group';
import IconPageBack from '../../icons/general/IconPageBack';
import IconPageForward from '../../icons/general/IconPageForward';
import Tooltip from '../../elements/common/Tooltip';
import messages from '../../elements/common/messages';
var PAGE_ICON_STYLE = {
  height: 9,
  width: 6
};

var PaginationControls = function PaginationControls(_ref) {
  var handleNextClick = _ref.handleNextClick,
      handlePreviousClick = _ref.handlePreviousClick,
      hasNextPage = _ref.hasNextPage,
      hasPreviousPage = _ref.hasPreviousPage,
      _ref$isOffsetBasedPag = _ref.isOffsetBasedPagination,
      isOffsetBasedPagination = _ref$isOffsetBasedPag === void 0 ? true : _ref$isOffsetBasedPag,
      onPageClick = _ref.onPageClick,
      _ref$pageCount = _ref.pageCount,
      pageCount = _ref$pageCount === void 0 ? 0 : _ref$pageCount,
      _ref$pageNumber = _ref.pageNumber,
      pageNumber = _ref$pageNumber === void 0 ? 0 : _ref$pageNumber;
  return React.createElement("div", {
    className: "bdl-Pagination"
  }, isOffsetBasedPagination && React.createElement("div", {
    className: "bdl-Pagination-count"
  }, React.createElement(PaginationMenu, {
    onPageClick: onPageClick,
    pageCount: pageCount,
    pageNumber: pageNumber
  })), React.createElement(ButtonGroup, {
    className: "bdl-Pagination-nav"
  }, React.createElement(Tooltip, {
    isDisabled: !hasPreviousPage,
    text: React.createElement(FormattedMessage, messages.previousPage)
  }, React.createElement(Button, {
    isDisabled: !hasPreviousPage,
    onClick: handlePreviousClick
  }, React.createElement(IconPageBack, PAGE_ICON_STYLE))), React.createElement(Tooltip, {
    isDisabled: !hasNextPage,
    text: React.createElement(FormattedMessage, messages.nextPage)
  }, React.createElement(Button, {
    isDisabled: !hasNextPage,
    onClick: handleNextClick
  }, React.createElement(IconPageForward, PAGE_ICON_STYLE)))));
};

export default PaginationControls;
//# sourceMappingURL=PaginationControls.js.map