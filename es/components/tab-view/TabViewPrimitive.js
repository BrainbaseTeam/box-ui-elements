function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import classNames from 'classnames';
import omit from 'lodash/omit';
import uniqueId from 'lodash/uniqueId';
import IconPageBack from '../../icons/general/IconPageBack';
import IconPageForward from '../../icons/general/IconPageForward';
import LinkButton from '../link/LinkButton';
import './Tabs.scss';
export var TAB_KEY = 'Tab';
export var TAB_PANEL_ROLE = 'tabpanel';

var TabViewPrimitive = /*#__PURE__*/function (_React$Component) {
  _inherits(TabViewPrimitive, _React$Component);

  var _super = _createSuper(TabViewPrimitive);

  function TabViewPrimitive(props) {
    var _this;

    _classCallCheck(this, TabViewPrimitive);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onClickTab", function (tabIndex) {
      var _this$props = _this.props,
          onTabFocus = _this$props.onTabFocus,
          onTabSelect = _this$props.onTabSelect;

      if (onTabSelect) {
        onTabSelect(tabIndex);
      }

      onTabFocus(tabIndex);
    });

    _defineProperty(_assertThisInitialized(_this), "getLastElementsAnchorPoint", function () {
      if (_this.tabsElements.length === 0) {
        return 0;
      }

      var lastTabElement = _this.tabsElements[_this.tabsElements.length - 1];
      return lastTabElement.offsetLeft + lastTabElement.offsetWidth;
    });

    _defineProperty(_assertThisInitialized(_this), "getTabsContainerOffsetLeft", function () {
      if (!_this.tabsContainer) {
        return 0;
      }

      var tabsContainerOffsetLeft = _this.state.tabsContainerOffsetLeft;
      var viewportOffset = parseInt(tabsContainerOffsetLeft, 10) * -1;
      viewportOffset = viewportOffset || 0;
      return viewportOffset;
    });

    _defineProperty(_assertThisInitialized(_this), "getTabsContainerWidth", function () {
      return _this.tabsContainer ? parseInt(_this.tabsContainer.offsetWidth, 10) : 0;
    });

    _defineProperty(_assertThisInitialized(_this), "scrollToTab", function (tabIndex) {
      if (!_this.props.isDynamic || _this.tabsContainer === null || _this.tabsElements.length === 0 || tabIndex < 0 || tabIndex > _this.tabsElements.length - 1) {
        return;
      }

      var tabElementOfInterest = _this.tabsElements[tabIndex];

      var lastElementsAnchorPoint = _this.getLastElementsAnchorPoint(); // if tabs don't overflow at all, no need to scroll


      var tabsContainerWidth = _this.getTabsContainerWidth();

      if (lastElementsAnchorPoint <= tabsContainerWidth) {
        _this.setState({
          tabsContainerOffsetLeft: 0
        });

        return;
      } // do not scroll any more if we will go past the rightmost anchor


      var newOffset = Math.min(lastElementsAnchorPoint - tabsContainerWidth, tabElementOfInterest.offsetLeft); // move the viewport

      var newViewportOffset = -1 * newOffset;

      _this.setState({
        tabsContainerOffsetLeft: newViewportOffset
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isRightArrowVisible", function () {
      if (!_this.tabsContainer) {
        return false;
      }

      var tabsContainerOffsetLeft = _this.getTabsContainerOffsetLeft();

      var lastElementsAnchorPoint = _this.getLastElementsAnchorPoint();

      var tabsContainerWidth = _this.getTabsContainerWidth();

      return tabsContainerOffsetLeft + tabsContainerWidth < lastElementsAnchorPoint;
    });

    _defineProperty(_assertThisInitialized(_this), "isLeftArrowVisible", function () {
      var _this$props2 = _this.props,
          focusedIndex = _this$props2.focusedIndex,
          selectedIndex = _this$props2.selectedIndex;

      var tabsContainerOffsetLeft = _this.getTabsContainerOffsetLeft();

      return tabsContainerOffsetLeft !== 0 && (selectedIndex !== 0 || focusedIndex !== 0);
    });

    _defineProperty(_assertThisInitialized(_this), "focusOnTabElement", function (focusedIndex) {
      if (focusedIndex + 1 > _this.tabsElements.length || focusedIndex < 0) {
        return;
      }

      _this.tabsElements[focusedIndex].focus();
    });

    _defineProperty(_assertThisInitialized(_this), "tabsElements", []);

    _defineProperty(_assertThisInitialized(_this), "tabsContainer", null);

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      var _this$props3 = _this.props,
          children = _this$props3.children,
          focusedIndex = _this$props3.focusedIndex,
          onTabFocus = _this$props3.onTabFocus,
          resetFocusedTab = _this$props3.resetFocusedTab,
          resetActiveTab = _this$props3.resetActiveTab;
      var childrenCount = React.Children.count(children);

      switch (event.key) {
        case 'ArrowRight':
          onTabFocus(_this.calculateNextIndex(focusedIndex, childrenCount));
          event.preventDefault();
          event.stopPropagation();
          break;

        case 'ArrowLeft':
          onTabFocus(_this.calculatePrevIndex(focusedIndex, childrenCount));
          event.preventDefault();
          event.stopPropagation();
          break;

        case 'Escape':
          resetActiveTab();
          break;

        case TAB_KEY:
          resetFocusedTab();
          break;

        default:
          break;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "calculateNextIndex", function (currentIndex, childrenCount) {
      return (currentIndex + 1) % childrenCount;
    });

    _defineProperty(_assertThisInitialized(_this), "calculatePrevIndex", function (currentIndex, childrenCount) {
      return (currentIndex - 1 + childrenCount) % childrenCount;
    });

    _this.tabviewID = uniqueId('tabview');
    _this.state = {
      tabsContainerOffsetLeft: 0
    };
    return _this;
  }

  _createClass(TabViewPrimitive, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props4 = this.props,
          isDynamic = _this$props4.isDynamic,
          focusedIndex = _this$props4.focusedIndex;

      if (isDynamic) {
        // set initial tabsContainerOffsetLeft state after first mounting
        this.scrollToTab(focusedIndex);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevFocusedIndex = prevProps.focusedIndex,
          prevSelectedIndex = prevProps.selectedIndex;
      var _this$props5 = this.props,
          focusedIndex = _this$props5.focusedIndex,
          selectedIndex = _this$props5.selectedIndex;

      if (this.props.isDynamic) {
        if (prevFocusedIndex !== focusedIndex) {
          this.scrollToTab(focusedIndex);
        } // update tabsContainerOffsetLeft state when receiving a new prop


        if (prevSelectedIndex !== selectedIndex) {
          this.scrollToTab(selectedIndex);
        }
      }

      if (prevFocusedIndex !== focusedIndex) {
        // have to focus after render otherwise, the focus will be lost
        this.focusOnTabElement(focusedIndex);
      }
    }
  }, {
    key: "renderTabs",

    /* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
    value: function renderTabs() {
      var _this2 = this;

      var _this$props6 = this.props,
          children = _this$props6.children,
          selectedIndex = _this$props6.selectedIndex,
          isDynamic = _this$props6.isDynamic;
      var tabsContainerOffsetLeft = this.state.tabsContainerOffsetLeft;
      var style = isDynamic ? {
        left: "".concat(tabsContainerOffsetLeft, "px")
      } : {};
      return /*#__PURE__*/React.createElement("nav", {
        className: "tabs",
        role: "tablist",
        ref: function ref(_ref2) {
          _this2.tabsContainer = _ref2;
        },
        style: style,
        onKeyDown: !isDynamic ? this.handleKeyDown : null
      }, React.Children.map(children, function (tab, i) {
        var buttonProps = omit(tab.props, ['className', 'children', 'title']);
        var classes = classNames('btn-plain', 'tab', i === selectedIndex ? 'is-selected' : '');
        var ariaControls = "".concat(_this2.tabviewID, "-panel-").concat(i + 1);
        var ariaSelected = i === selectedIndex;
        var id = "".concat(_this2.tabviewID, "-tab-").concat(i + 1);
        var _tab$props = tab.props,
            href = _tab$props.href,
            component = _tab$props.component,
            refProp = _tab$props.refProp;
        var tabIndex = i === selectedIndex ? '0' : '-1';

        if (href) {
          return /*#__PURE__*/React.createElement(LinkButton, {
            className: classes,
            "aria-controls": ariaControls,
            "aria-selected": ariaSelected,
            id: id,
            role: "tab",
            href: href,
            linkRef: function linkRef(ref) {
              _this2.tabsElements[i] = ref;
            },
            refProp: refProp,
            tabIndex: tabIndex,
            to: href,
            component: component
          }, /*#__PURE__*/React.createElement("div", {
            className: "tab-title"
          }, tab.props.title), /*#__PURE__*/React.createElement("div", {
            className: "tab-underline"
          }));
        }

        return /*#__PURE__*/React.createElement("button", _extends({
          className: classes,
          "aria-controls": ariaControls,
          "aria-selected": ariaSelected,
          onClick: function onClick() {
            return _this2.onClickTab(i);
          },
          role: "tab",
          type: "button",
          id: id,
          ref: function ref(_ref) {
            _this2.tabsElements[i] = _ref;
          },
          tabIndex: tabIndex
        }, buttonProps), /*#__PURE__*/React.createElement("div", {
          className: "tab-title"
        }, tab.props.title), /*#__PURE__*/React.createElement("div", {
          className: "tab-underline"
        }));
      }));
    }
    /* eslint-enable jsx-a11y/no-noninteractive-element-to-interactive-role */

  }, {
    key: "renderDynamicTabs",
    value: function renderDynamicTabs() {
      var _this$props7 = this.props,
          onTabFocus = _this$props7.onTabFocus,
          focusedIndex = _this$props7.focusedIndex;
      return (
        /*#__PURE__*/
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        React.createElement("div", {
          className: "dynamic-tabs-bar",
          onKeyDown: this.handleKeyDown
        }, /*#__PURE__*/React.createElement("button", {
          className: classNames('btn-plain svg-container left-arrow', {
            hidden: !this.isLeftArrowVisible()
          }),
          onClick: function onClick() {
            return onTabFocus(focusedIndex - 1);
          },
          type: "button",
          tabIndex: "-1"
        }, /*#__PURE__*/React.createElement(IconPageBack, null)), /*#__PURE__*/React.createElement("div", {
          className: "dynamic-tabs-wrapper"
        }, this.renderTabs()), /*#__PURE__*/React.createElement("button", {
          className: classNames('btn-plain svg-container right-arrow', {
            hidden: !this.isRightArrowVisible()
          }),
          onClick: function onClick() {
            return onTabFocus(focusedIndex + 1);
          },
          type: "button",
          tabIndex: "-1"
        }, /*#__PURE__*/React.createElement(IconPageForward, null)))
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props8 = this.props,
          children = _this$props8.children,
          _this$props8$classNam = _this$props8.className,
          className = _this$props8$classNam === void 0 ? '' : _this$props8$classNam,
          _this$props8$isDynami = _this$props8.isDynamic,
          isDynamic = _this$props8$isDynami === void 0 ? false : _this$props8$isDynami,
          onKeyUp = _this$props8.onKeyUp,
          selectedIndex = _this$props8.selectedIndex;
      return (
        /*#__PURE__*/
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        React.createElement("div", {
          className: "tab-view ".concat(classNames(className, {
            'dynamic-tabs': isDynamic
          })),
          onKeyUp: onKeyUp
        }, !isDynamic ? this.renderTabs() : this.renderDynamicTabs(), /*#__PURE__*/React.createElement("div", {
          className: "tab-panels"
        }, React.Children.toArray(children).map(function (child, i) {
          return /*#__PURE__*/React.createElement("div", {
            key: i,
            id: "".concat(_this3.tabviewID, "-panel-").concat(i),
            "aria-labelledby": "".concat(_this3.tabviewID, "-tab-").concat(i + 1),
            "aria-hidden": selectedIndex !== i,
            className: "tab-panel ".concat(i === selectedIndex ? 'is-selected' : ''),
            role: TAB_PANEL_ROLE // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            ,
            tabIndex: "0"
          }, child.props.children);
        })))
      );
    }
  }]);

  return TabViewPrimitive;
}(React.Component);

export default TabViewPrimitive;
//# sourceMappingURL=TabViewPrimitive.js.map