/**
 * 
 * @file Pagination component
 * @author Box
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import noop from 'lodash/noop';
import Button from '../../../components/button';
import ButtonGroup from '../../../components/button-group';
import IconPageBack from '../../../icons/general/IconPageBack';
import IconPageForward from '../../../icons/general/IconPageForward';
import PaginationMenu from './PaginationMenu';
import Tooltip from '../Tooltip';
import messages from '../messages';
import { DEFAULT_PAGE_SIZE } from '../../../constants';
import './Pagination.scss';
var PAGE_ICON_STYLE = {
  height: 9,
  width: 6
};

var Pagination = function Pagination(_ref) {
  var _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? 0 : _ref$offset,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? noop : _ref$onChange,
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

    onChange(newOffset);
  };

  var handleNextClick = function handleNextClick() {
    updateOffset(pageNumber + 1);
  };

  var handlePreviousClick = function handlePreviousClick() {
    updateOffset(pageNumber - 1);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "be-pagination"
  }, /*#__PURE__*/React.createElement("div", {
    className: "be-pagination-count"
  }, /*#__PURE__*/React.createElement(PaginationMenu, {
    onPageClick: updateOffset,
    pageCount: pageCount,
    pageNumber: pageNumber
  })), /*#__PURE__*/React.createElement(ButtonGroup, {
    className: "be-pagination-nav"
  }, /*#__PURE__*/React.createElement(Tooltip, {
    isDisabled: !hasPreviousPage,
    text: /*#__PURE__*/React.createElement(FormattedMessage, messages.previousPage)
  }, /*#__PURE__*/React.createElement(Button, {
    isDisabled: !hasPreviousPage,
    onClick: handlePreviousClick
  }, /*#__PURE__*/React.createElement(IconPageBack, PAGE_ICON_STYLE))), /*#__PURE__*/React.createElement(Tooltip, {
    isDisabled: !hasNextPage,
    text: /*#__PURE__*/React.createElement(FormattedMessage, messages.nextPage)
  }, /*#__PURE__*/React.createElement(Button, {
    isDisabled: !hasNextPage,
    onClick: handleNextClick
  }, /*#__PURE__*/React.createElement(IconPageForward, PAGE_ICON_STYLE)))));
};

export default Pagination;
//# sourceMappingURL=Pagination.js.map