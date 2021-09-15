function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * 
 * @file Sort component
 * @author Box
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import DropdownMenu from '../../../components/dropdown-menu/DropdownMenu';
import Menu from '../../../components/menu/Menu';
import MenuItem from '../../../components/menu/MenuItem';
import IconCheck from '../../../icons/general/IconCheck';
import SortButton from './SortButton';
import messages from '../messages';
import { FIELD_NAME, FIELD_DATE, FIELD_SIZE, SORT_ASC, SORT_DESC } from '../../../constants';
import './Sort.scss';
var SORT_ITEMS = [[FIELD_NAME, SORT_ASC], [FIELD_NAME, SORT_DESC], [FIELD_DATE, SORT_ASC], [FIELD_DATE, SORT_DESC], [FIELD_SIZE, SORT_ASC], [FIELD_SIZE, SORT_DESC]];

var Sort = function Sort(_ref) {
  var sortBy = _ref.sortBy,
      sortDirection = _ref.sortDirection,
      onSortChange = _ref.onSortChange;
  return React.createElement(DropdownMenu, {
    isRightAligned: true
  }, React.createElement(SortButton, null), React.createElement(Menu, null, SORT_ITEMS.map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        sortByValue = _ref3[0],
        sortDirectionValue = _ref3[1];

    var isSelected = sortByValue === sortBy && sortDirectionValue === sortDirection;
    var sortItemKey = "".concat(sortByValue).concat(sortDirectionValue);
    return React.createElement(MenuItem, {
      key: sortItemKey,
      onClick: function onClick() {
        return onSortChange(sortByValue, sortDirectionValue);
      }
    }, React.createElement("div", {
      className: "be-sort-selected"
    }, isSelected && React.createElement(IconCheck, {
      height: 16,
      width: 16
    })), React.createElement(FormattedMessage, messages[sortItemKey]));
  })));
};

export default Sort;
//# sourceMappingURL=Sort.js.map