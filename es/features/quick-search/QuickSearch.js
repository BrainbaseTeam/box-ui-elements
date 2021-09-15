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
import classNames from 'classnames';
import SelectorDropdown from '../../components/selector-dropdown';
import QuickSearchMessage from './QuickSearchMessage';
import QuickSearchSelector from './QuickSearchSelector';
import './QuickSearch.scss';

var QuickSearch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(QuickSearch, _React$Component);

  function QuickSearch(props) {
    var _this;

    _classCallCheck(this, QuickSearch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(QuickSearch).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function () {
      _this.setState({
        showMessage: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      _this.setState({
        showMessage: false
      });
    });

    _this.state = {
      showMessage: false
    };
    return _this;
  }

  _createClass(QuickSearch, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          dividerIndex = _this$props.dividerIndex,
          errorMessage = _this$props.errorMessage,
          inputProps = _this$props.inputProps,
          noItemsMessage = _this$props.noItemsMessage,
          onSelect = _this$props.onSelect;
      var showMessage = this.state.showMessage;
      return React.createElement("div", {
        className: classNames('quick-search', className),
        onBlur: this.handleBlur,
        onFocus: this.handleFocus
      }, React.createElement(SelectorDropdown, {
        dividerIndex: dividerIndex,
        onSelect: onSelect,
        selector: React.createElement(QuickSearchSelector, inputProps)
      }, children), !!errorMessage && React.createElement(QuickSearchMessage, {
        isShown: showMessage
      }, errorMessage), !!noItemsMessage && React.createElement(QuickSearchMessage, {
        isShown: showMessage
      }, noItemsMessage));
    }
  }]);

  return QuickSearch;
}(React.Component);

export default QuickSearch;
//# sourceMappingURL=QuickSearch.js.map