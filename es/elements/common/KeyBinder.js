function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Item List Key bindings
 * @author Box
 */
import React, { PureComponent } from 'react';
import noop from 'lodash/noop';
import { isInputElement } from '../../utils/dom';

var KeyBinder =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(KeyBinder, _PureComponent);

  _createClass(KeyBinder, null, [{
    key: "getDerivedStateFromProps",

    /**
     * Resets scroll position if props change
     * @private
     * @inheritdoc
     * @return {State|null}
     */
    value: function getDerivedStateFromProps(props, state) {
      var prevId = state.prevId,
          prevScrollToColumn = state.prevScrollToColumn,
          prevScrollToRow = state.prevScrollToRow;
      var id = props.id,
          scrollToColumnProp = props.scrollToColumn,
          scrollToRowProp = props.scrollToRow;

      if (id !== prevId) {
        return {
          focusOnRender: false,
          prevId: id,
          prevScrollToColumn: 0,
          prevScrollToRow: 0,
          scrollToColumn: 0,
          scrollToRow: 0
        };
      }

      var newState = {};

      if (prevScrollToColumn !== scrollToColumnProp && prevScrollToRow !== scrollToRowProp) {
        newState.prevScrollToColumn = scrollToColumnProp;
        newState.prevScrollToRow = scrollToRowProp;
        newState.scrollToColumn = scrollToColumnProp;
        newState.scrollToRow = scrollToRowProp;
      } else if (scrollToRowProp !== prevScrollToRow) {
        newState.prevScrollToRow = scrollToRowProp;
        newState.scrollToRow = scrollToRowProp;
      } else if (scrollToColumnProp !== prevScrollToColumn) {
        newState.prevScrollToColumn = scrollToColumnProp;
        newState.scrollToColumn = scrollToColumnProp;
      }

      return Object.keys(newState).length ? newState : null;
    }
    /**
     * [constructor]
     *
     * @private
     * @return {KeyBinder}
     */

  }]);

  function KeyBinder(props) {
    var _this;

    _classCallCheck(this, KeyBinder);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(KeyBinder).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      if (isInputElement(event.target)) {
        return;
      }

      var _this$props = _this.props,
          columnCount = _this$props.columnCount,
          rowCount = _this$props.rowCount,
          onSelect = _this$props.onSelect,
          onRename = _this$props.onRename,
          onDownload = _this$props.onDownload,
          onShare = _this$props.onShare,
          onDelete = _this$props.onDelete,
          onOpen = _this$props.onOpen,
          items = _this$props.items;
      var _this$state = _this.state,
          scrollToColumnPrevious = _this$state.scrollToColumn,
          scrollToRowPrevious = _this$state.scrollToRow;
      var _this$state2 = _this.state,
          scrollToColumn = _this$state2.scrollToColumn,
          scrollToRow = _this$state2.scrollToRow;
      var currentItem = items[scrollToRow];
      var ctrlMeta = event.metaKey || event.ctrlKey; // The above cases all prevent default event event behavior.
      // This is to keep the grid from scrolling after the snap-to update.

      switch (event.key) {
        case 'ArrowDown':
          scrollToRow = ctrlMeta ? rowCount - 1 : Math.min(scrollToRow + 1, rowCount - 1);
          event.stopPropagation(); // To prevent the arrow down capture of parent

          break;

        case 'ArrowLeft':
          scrollToColumn = ctrlMeta ? 0 : Math.max(scrollToColumn - 1, 0);
          break;

        case 'ArrowRight':
          scrollToColumn = ctrlMeta ? columnCount - 1 : Math.min(scrollToColumn + 1, columnCount - 1);
          break;

        case 'ArrowUp':
          scrollToRow = ctrlMeta ? 0 : Math.max(scrollToRow - 1, 0);
          break;

        case 'Enter':
          onOpen(currentItem);
          event.preventDefault();
          break;

        case 'Delete':
          onDelete(currentItem);
          event.preventDefault();
          break;

        case 'X':
          onSelect(currentItem);
          event.preventDefault();
          break;

        case 'D':
          onDownload(currentItem);
          event.preventDefault();
          break;

        case 'S':
          onShare(currentItem);
          event.preventDefault();
          break;

        case 'R':
          onRename(currentItem);
          event.preventDefault();
          break;

        default:
          return;
      }

      if (scrollToColumn !== scrollToColumnPrevious || scrollToRow !== scrollToRowPrevious) {
        event.preventDefault();

        _this.updateScrollState({
          scrollToColumn: scrollToColumn,
          scrollToRow: scrollToRow
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSectionRendered", function (_ref) {
      var columnStartIndex = _ref.columnStartIndex,
          columnStopIndex = _ref.columnStopIndex,
          rowStartIndex = _ref.rowStartIndex,
          rowStopIndex = _ref.rowStopIndex;
      _this.columnStartIndex = columnStartIndex;
      _this.columnStopIndex = columnStopIndex;
      _this.rowStartIndex = rowStartIndex;
      _this.rowStopIndex = rowStopIndex;
    });

    var id = props.id,
        _scrollToRow = props.scrollToRow,
        _scrollToColumn = props.scrollToColumn;
    _this.state = {
      focusOnRender: false,
      prevId: id,
      prevScrollToColumn: _scrollToColumn,
      prevScrollToRow: _scrollToRow,
      scrollToColumn: _scrollToColumn,
      scrollToRow: _scrollToRow
    };
    _this.columnStartIndex = 0;
    _this.columnStopIndex = 0;
    _this.rowStartIndex = 0;
    _this.rowStopIndex = 0;
    return _this;
  }
  /**
   * Keyboard events
   *
   * @private
   * @inheritdoc
   * @return {void}
   */


  _createClass(KeyBinder, [{
    key: "updateScrollState",

    /**
     * Updates the scroll states
     *
     * @private
     * @inheritdoc
     * @return {void}
     */
    value: function updateScrollState(_ref2) {
      var scrollToColumn = _ref2.scrollToColumn,
          scrollToRow = _ref2.scrollToRow;
      var onScrollToChange = this.props.onScrollToChange;
      onScrollToChange({
        scrollToColumn: scrollToColumn,
        scrollToRow: scrollToRow
      });
      this.setState({
        scrollToColumn: scrollToColumn,
        scrollToRow: scrollToRow,
        focusOnRender: true
      });
    }
    /**
     * Renders the HOC
     *
     * @private
     * @inheritdoc
     * @return {void}
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          children = _this$props2.children;
      var _this$state3 = this.state,
          scrollToColumn = _this$state3.scrollToColumn,
          scrollToRow = _this$state3.scrollToRow,
          focusOnRender = _this$state3.focusOnRender;
      /* eslint-disable jsx-a11y/no-static-element-interactions */

      return React.createElement("div", {
        className: className,
        onKeyDown: this.onKeyDown
      }, children({
        onSectionRendered: this.onSectionRendered,
        scrollToColumn: scrollToColumn,
        scrollToRow: scrollToRow,
        focusOnRender: focusOnRender
      }));
      /* eslint-enable jsx-a11y/no-static-element-interactions */
    }
  }]);

  return KeyBinder;
}(PureComponent);

_defineProperty(KeyBinder, "defaultProps", {
  scrollToColumn: 0,
  scrollToRow: 0,
  onRename: noop,
  onShare: noop,
  onDownload: noop,
  onOpen: noop,
  onSelect: noop,
  onDelete: noop
});

export default KeyBinder;
//# sourceMappingURL=KeyBinder.js.map