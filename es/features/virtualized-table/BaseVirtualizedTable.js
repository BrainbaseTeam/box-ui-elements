function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import noop from 'lodash/noop';
import classNames from 'classnames';
import { Table } from 'react-virtualized/dist/es/Table/index';
import { DEFAULT_PAGE_SIZE } from '../../constants';
import { VIRTUALIZED_TABLE_DEFAULTS } from './constants';
import loadingRowRenderer from '../virtualized-table-renderers/loadingRowRenderer';
var HEADER_HEIGHT = VIRTUALIZED_TABLE_DEFAULTS.HEADER_HEIGHT,
    ROW_HEIGHT = VIRTUALIZED_TABLE_DEFAULTS.ROW_HEIGHT,
    TAB_INDEX = VIRTUALIZED_TABLE_DEFAULTS.TAB_INDEX;

var handleSort = function handleSort(sortParams) {
  var sort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
  var event = sortParams.event;

  var _ref = event || {},
      currentTarget = _ref.currentTarget,
      type = _ref.type; // Prevent header from remaining focused when triggered with mouse


  if (type === 'click' && currentTarget && currentTarget.blur) {
    currentTarget.blur();
  }

  sort(sortParams);
};

var BaseVirtualizedTable =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(BaseVirtualizedTable, _React$PureComponent);

  function BaseVirtualizedTable() {
    _classCallCheck(this, BaseVirtualizedTable);

    return _possibleConstructorReturn(this, _getPrototypeOf(BaseVirtualizedTable).apply(this, arguments));
  }

  _createClass(BaseVirtualizedTable, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          isLoading = _this$props.isLoading,
          loadingRowCount = _this$props.loadingRowCount,
          rowData = _this$props.rowData,
          rowGetter = _this$props.rowGetter,
          rowRenderer = _this$props.rowRenderer,
          _sort = _this$props.sort,
          tableRef = _this$props.tableRef,
          rest = _objectWithoutProperties(_this$props, ["children", "className", "isLoading", "loadingRowCount", "rowData", "rowGetter", "rowRenderer", "sort", "tableRef"]);

      var displayRowData = isLoading ? Array(loadingRowCount).fill({}) : rowData;
      var tableRowRenderer = isLoading ? loadingRowRenderer : rowRenderer;

      var getRow = rowGetter || function (_ref2) {
        var index = _ref2.index;
        return displayRowData[index];
      };

      return React.createElement(Table, _extends({
        ref: tableRef,
        className: classNames('bdl-VirtualizedTable', className),
        headerHeight: HEADER_HEIGHT,
        rowCount: displayRowData.length,
        rowGetter: getRow,
        rowHeight: ROW_HEIGHT,
        rowRenderer: tableRowRenderer,
        sort: function sort(sortParams) {
          return handleSort(sortParams, _sort);
        },
        tabIndex: TAB_INDEX
      }, rest), children);
    }
  }]);

  return BaseVirtualizedTable;
}(React.PureComponent);

_defineProperty(BaseVirtualizedTable, "defaultProps", {
  isLoading: false,
  loadingRowCount: DEFAULT_PAGE_SIZE
});

export default BaseVirtualizedTable;
//# sourceMappingURL=BaseVirtualizedTable.js.map