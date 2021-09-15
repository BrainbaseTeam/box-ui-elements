function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
import { FormattedMessage } from 'react-intl';
import uniqueId from 'lodash/uniqueId';
import cloneDeep from 'lodash/cloneDeep';
import Checkbox from '../../../components/checkbox/Checkbox';
import DraggableList from '../../../components/draggable-list';
import PortaledDraggableListItem from '../../../components/draggable-list/PortaledDraggableListItem';
import PrimaryButton from '../../../components/primary-button/PrimaryButton';
import reorder from '../../../components/draggable-list/draggable-list-utils/reorder';
import messages from '../messages';

var ColumnButtonOverlay =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ColumnButtonOverlay, _React$Component);

  function ColumnButtonOverlay(props) {
    var _this;

    _classCallCheck(this, ColumnButtonOverlay);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColumnButtonOverlay).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onDragEnd", function (sourceIndex, destinationIndex) {
      var pendingColumns = _this.state.pendingColumns;
      var columns = reorder(pendingColumns, sourceIndex, destinationIndex);

      _this.setState({
        pendingColumns: cloneDeep(columns)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updatePendingColumns", function (column) {
      var pendingColumns = _this.state.pendingColumns;
      var pendingColumnsCopy = cloneDeep(pendingColumns);

      var newColumn = _objectSpread({}, column, {
        isShown: !column.isShown
      });

      var foundIndex = pendingColumnsCopy.findIndex(function (originalColumn) {
        return originalColumn.id === column.id;
      });
      pendingColumnsCopy[foundIndex] = newColumn;

      _this.setState({
        pendingColumns: pendingColumnsCopy
      });
    });

    _defineProperty(_assertThisInitialized(_this), "applyFilters", function () {
      var onColumnChange = _this.props.onColumnChange;
      var pendingColumns = _this.state.pendingColumns;

      if (onColumnChange) {
        onColumnChange(pendingColumns);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getNumberOfHiddenColumns", function () {
      var columns = _this.props.columns;
      return columns ? columns.reduce(function (total, column) {
        if (!column.isShown) {
          return total + 1;
        }

        return total;
      }, 0) : 0;
    });

    _this.state = {
      listId: uniqueId(),
      pendingColumns: props.columns ? cloneDeep(props.columns) : []
    };
    return _this;
  }

  _createClass(ColumnButtonOverlay, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          listId = _this$state.listId,
          pendingColumns = _this$state.pendingColumns;
      return React.createElement("div", {
        className: "column-button-dropdown"
      }, React.createElement("div", {
        className: "column-button-dropdown-header"
      }, React.createElement(DraggableList, {
        className: "draggable-list-example",
        listId: listId,
        onDragEnd: this.onDragEnd
      }, pendingColumns.map(function (item, index) {
        return React.createElement(PortaledDraggableListItem, {
          id: item.id,
          index: index,
          isDraggableViaHandle: true,
          key: index
        }, React.createElement(Checkbox, {
          isChecked: item.isShown,
          label: item.displayName,
          name: item.displayName,
          onChange: function onChange() {
            return _this2.updatePendingColumns(item);
          }
        }));
      }))), React.createElement("div", {
        className: "column-button-dropdown-footer"
      }, React.createElement(PrimaryButton, {
        type: "button",
        onClick: this.applyFilters
      }, React.createElement(FormattedMessage, messages.applyFiltersButtonText))));
    }
  }]);

  return ColumnButtonOverlay;
}(React.Component);

export default ColumnButtonOverlay;
//# sourceMappingURL=ColumnButtonOverlay.js.map