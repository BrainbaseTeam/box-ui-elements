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
import TabViewPrimitive, { TAB_KEY, TAB_PANEL_ROLE } from './TabViewPrimitive';

var TabView =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TabView, _React$Component);

  function TabView(props) {
    var _this;

    _classCallCheck(this, TabView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TabView).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getActiveDocElement", function () {
      return document.activeElement;
    });

    _defineProperty(_assertThisInitialized(_this), "resetActiveTab", function () {
      _this.setState({
        focusedIndex: _this.props.defaultSelectedIndex,
        selectedIndex: _this.props.defaultSelectedIndex
      });
    });

    _defineProperty(_assertThisInitialized(_this), "resetFocusedTab", function () {
      _this.setState({
        focusedIndex: _this.state.selectedIndex
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnTabSelect", function (selectedIndex) {
      return _this.setState({
        selectedIndex: selectedIndex
      }, function () {
        var onTabSelect = _this.props.onTabSelect;

        if (onTabSelect) {
          onTabSelect(_this.state.selectedIndex);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnTabFocus", function (index) {
      return _this.setState({
        focusedIndex: index
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyUp", function (event) {
      var activeElement = _this.getActiveDocElement();

      var isTabPanelFocused = activeElement && activeElement.getAttribute('role') === TAB_PANEL_ROLE;
      var isTabPanelFocusedWithTabKey = isTabPanelFocused && event.key === TAB_KEY;

      if (isTabPanelFocusedWithTabKey) {
        _this.setState({
          showOutline: true
        });
      } else if (!isTabPanelFocused && _this.state.showOutline) {
        _this.setState({
          showOutline: false
        });
      }
    });

    _this.state = {
      focusedIndex: props.defaultSelectedIndex,
      showOutline: false,
      selectedIndex: props.defaultSelectedIndex
    };
    return _this;
  }

  _createClass(TabView, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var defaultSelectedIndex = this.props.defaultSelectedIndex;

      if (prevProps.defaultSelectedIndex !== defaultSelectedIndex) {
        this.resetActiveTab();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          isDynamic = _this$props.isDynamic;
      var _this$state = this.state,
          focusedIndex = _this$state.focusedIndex,
          selectedIndex = _this$state.selectedIndex,
          showOutline = _this$state.showOutline;
      return React.createElement(TabViewPrimitive, {
        className: classNames(className, {
          'show-outline': showOutline
        }),
        focusedIndex: focusedIndex,
        isDynamic: isDynamic,
        onKeyUp: this.handleKeyUp,
        onTabFocus: this.handleOnTabFocus,
        onTabSelect: this.handleOnTabSelect,
        resetActiveTab: this.resetActiveTab,
        resetFocusedTab: this.resetFocusedTab,
        selectedIndex: selectedIndex
      }, children);
    }
  }]);

  return TabView;
}(React.Component);

_defineProperty(TabView, "defaultProps", {
  defaultSelectedIndex: 0,
  isDynamic: false
});

export default TabView;
//# sourceMappingURL=TabView.js.map