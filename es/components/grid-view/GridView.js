function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { CellMeasurer, CellMeasurerCache } from 'react-virtualized/dist/es/CellMeasurer';
import Table, { Column } from 'react-virtualized/dist/es/Table';
import getProp from 'lodash/get';
import GridViewSlot from './GridViewSlot';
import 'react-virtualized/styles.css';
import './GridView.scss';

var GridView =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GridView, _React$Component);

  function GridView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GridView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GridView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "cache", new CellMeasurerCache({
      defaultHeight: 300,
      defaultWidth: 400,
      fixedWidth: true
    }));

    _defineProperty(_assertThisInitialized(_this), "cellRenderer", function (_ref) {
      var dataKey = _ref.dataKey,
          parent = _ref.parent,
          rowIndex = _ref.rowIndex;
      var _this$props = _this.props,
          columnCount = _this$props.columnCount,
          currentCollection = _this$props.currentCollection,
          slotRenderer = _this$props.slotRenderer;
      var count = getProp(currentCollection, 'items.length', 0);
      var contents = [];
      var startingIndex = rowIndex * columnCount;
      var maxSlotIndex = Math.min(startingIndex + columnCount, count);

      for (var _slotIndex = startingIndex; _slotIndex < maxSlotIndex; _slotIndex += 1) {
        var _getProp = getProp(currentCollection, "items[".concat(_slotIndex, "]")),
            id = _getProp.id,
            selected = _getProp.selected; // using item's id as key is important for renrendering.  React Virtualized Table rerenders
        // on every 1px scroll, so using improper key would lead to image flickering in each
        // card of the grid view when scrolling.


        contents.push(React.createElement(GridViewSlot, {
          key: id,
          selected: selected,
          slotIndex: _slotIndex,
          slotRenderer: slotRenderer,
          slotWidth: "".concat((100 / columnCount).toFixed(4), "%")
        }));
      }

      return React.createElement(CellMeasurer, {
        key: dataKey,
        cache: _this.cache,
        columnIndex: 0,
        parent: parent,
        rowIndex: rowIndex
      }, React.createElement("div", {
        className: "bdl-GridView-row"
      }, contents));
    });

    _defineProperty(_assertThisInitialized(_this), "rowGetter", function (_ref2) {
      var index = _ref2.index;
      return index;
    });

    return _this;
  }

  _createClass(GridView, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref3) {
      var prevColumnCount = _ref3.columnCount,
          prevWidth = _ref3.width;
      var _this$props2 = this.props,
          columnCount = _this$props2.columnCount,
          width = _this$props2.width; // The React Virtualized Table must be notified whenever the heights of rows
      // could potentially change. If omitted, rows are sized
      // incorrectly resulting in gaps or content overlap.

      if (columnCount !== prevColumnCount || width !== prevWidth) {
        this.cache.clearAll();
        this.forceUpdate();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          columnCount = _this$props3.columnCount,
          currentCollection = _this$props3.currentCollection,
          height = _this$props3.height,
          width = _this$props3.width;
      var count = getProp(currentCollection, 'items.length', 0);
      var rowCount = Math.ceil(count / columnCount);
      return React.createElement(Table, {
        className: "bdl-GridView",
        disableHeader: true,
        height: height,
        rowCount: rowCount,
        rowGetter: this.rowGetter,
        rowHeight: this.cache.rowHeight,
        width: width,
        gridClassName: "bdl-GridView-body",
        rowClassName: "bdl-GridView-tableRow",
        scrollToIndex: 0,
        sortDirection: "ASC"
      }, React.createElement(Column, {
        cellRenderer: this.cellRenderer,
        dataKey: "",
        flexGrow: 1,
        width: 400
      }));
    }
  }]);

  return GridView;
}(React.Component);

export default GridView;
//# sourceMappingURL=GridView.js.map