function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
  return /*#__PURE__*/React.createElement(DropdownMenu, {
    isRightAligned: true
  }, /*#__PURE__*/React.createElement(SortButton, null), /*#__PURE__*/React.createElement(Menu, null, SORT_ITEMS.map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        sortByValue = _ref3[0],
        sortDirectionValue = _ref3[1];

    var isSelected = sortByValue === sortBy && sortDirectionValue === sortDirection;
    var sortItemKey = "".concat(sortByValue).concat(sortDirectionValue);
    return /*#__PURE__*/React.createElement(MenuItem, {
      key: sortItemKey,
      onClick: function onClick() {
        return onSortChange(sortByValue, sortDirectionValue);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "be-sort-selected"
    }, isSelected && /*#__PURE__*/React.createElement(IconCheck, {
      height: 16,
      width: 16
    })), /*#__PURE__*/React.createElement(FormattedMessage, messages[sortItemKey]));
  })));
};

export default Sort;
//# sourceMappingURL=Sort.js.map