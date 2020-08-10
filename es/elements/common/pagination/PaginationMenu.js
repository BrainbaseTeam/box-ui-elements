function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file PaginationMenu component
 * @author Box
 */
import React from 'react';
import range from 'lodash/range';
import { FormattedMessage } from 'react-intl';
import Button from '../../../components/button';
import DropdownMenu from '../../../components/dropdown-menu';
import { Menu, MenuItem } from '../../../components/menu';
import messages from '../messages';
import './PaginationMenu.scss';

var PaginationMenu = function PaginationMenu(_ref) {
  var onPageClick = _ref.onPageClick,
      _ref$pageCount = _ref.pageCount,
      pageCount = _ref$pageCount === void 0 ? 0 : _ref$pageCount,
      _ref$pageNumber = _ref.pageNumber,
      pageNumber = _ref$pageNumber === void 0 ? 0 : _ref$pageNumber;
  return /*#__PURE__*/React.createElement(DropdownMenu, {
    className: "be-pagination-dropdown",
    constrainToWindow: true,
    isRightAligned: true
  }, /*#__PURE__*/React.createElement(Button, {
    className: "be-pagination-toggle"
  }, /*#__PURE__*/React.createElement(FormattedMessage, _extends({}, messages.pageStatus, {
    values: {
      pageNumber: pageNumber,
      pageCount: pageCount
    }
  }))), /*#__PURE__*/React.createElement(Menu, {
    className: "be-pagination-dropdown-menu"
  }, range(1, pageCount + 1).map(function (page) {
    return /*#__PURE__*/React.createElement(MenuItem, {
      key: page,
      isDisabled: page === pageNumber,
      onClick: function onClick() {
        return onPageClick(page);
      }
    }, page);
  })));
};

export default PaginationMenu;
//# sourceMappingURL=PaginationMenu.js.map