function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Scroll container for lists to be used within CollapsibleSidebar component.
 * @author Box
 *
 * A Scroll container for lists to be used within CollapsibleSidebar component.
 * Applies scroll shadow in the container based on scroll position.
 */
import * as React from 'react';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import Scrollbar from 'react-scrollbars-custom';
import styled from 'styled-components';
import CollapsibleSidebarContext from './CollapsibleSidebarContext';
import { getScrollShadowClassName } from './utils/scrollShadow';
var StyledScrollThumb = styled.div.withConfig({
  displayName: "CollapsibleSidebarNav__StyledScrollThumb",
  componentId: "csqupn-0"
})(["background:", ";opacity:0;transition:opacity 0.15s;.scroll-shadow-container:hover &,&.dragging{opacity:0.5;}"], function (props) {
  return props.theme.primary.foreground;
}); // The following values match the derived values from scrollShadow.scss

var StyledScrollContainer = styled.div.withConfig({
  displayName: "CollapsibleSidebarNav__StyledScrollContainer",
  componentId: "csqupn-1"
})(["&::before{box-shadow:0 6px 6px -2px ", ";}&::after{box-shadow:0 -6px 6px -2px ", ";}"], function (props) {
  return props.theme.primary.scrollShadowRgba;
}, function (props) {
  return props.theme.primary.scrollShadowRgba;
});

var CollapsibleSidebarNav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CollapsibleSidebarNav, _React$Component);

  function CollapsibleSidebarNav(props) {
    var _this;

    _classCallCheck(this, CollapsibleSidebarNav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CollapsibleSidebarNav).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "scrollRef", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "turnOffScrollingState", function () {
      _this.setState({
        isScrolling: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "debouncedTurnOffScrollingState", debounce(_this.turnOffScrollingState, 100));

    _defineProperty(_assertThisInitialized(_this), "onScrollHandler", function () {
      if (!_this.scrollRef.current) {
        return;
      }

      var _this$scrollRef$curre = _this.scrollRef.current,
          scrollHeight = _this$scrollRef$curre.scrollHeight,
          clientHeight = _this$scrollRef$curre.clientHeight,
          scrollTop = _this$scrollRef$curre.scrollTop;
      var scrollShadowClassName = getScrollShadowClassName(scrollTop, scrollHeight, clientHeight);

      _this.setState({
        isScrolling: true,
        scrollShadowClassName: scrollShadowClassName
      });

      _this.debouncedTurnOffScrollingState();
    });

    _defineProperty(_assertThisInitialized(_this), "onUpdateHandler", function (scrollValues, prevScrollValues) {
      var clientHeight = scrollValues.clientHeight,
          contentScrollHeight = scrollValues.contentScrollHeight;
      var prevClientHeight = prevScrollValues.clientHeight,
          prevContentScrollHeight = prevScrollValues.contentScrollHeight;

      if (clientHeight !== prevClientHeight || contentScrollHeight !== prevContentScrollHeight) {
        _this.setScrollShadowState();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setScrollShadowState", function () {
      if (!_this.scrollRef.current) {
        return;
      }

      var scrollShadowClassName = _this.state.scrollShadowClassName;
      var _this$scrollRef$curre2 = _this.scrollRef.current,
          scrollHeight = _this$scrollRef$curre2.scrollHeight,
          clientHeight = _this$scrollRef$curre2.clientHeight,
          scrollTop = _this$scrollRef$curre2.scrollTop;
      var newScrollShadowClassName = getScrollShadowClassName(scrollTop, scrollHeight, clientHeight);

      if (scrollShadowClassName !== newScrollShadowClassName) {
        _this.setState({
          scrollShadowClassName: newScrollShadowClassName
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "throtteldOnScrollHandler", throttle(_this.onScrollHandler, 50));

    _defineProperty(_assertThisInitialized(_this), "throttleOnUpdateHandler", throttle(_this.onUpdateHandler, 50));

    _this.state = {
      isScrolling: false
    };
    return _this;
  }

  _createClass(CollapsibleSidebarNav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setScrollShadowState();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          _this$props$customScr = _this$props.customScrollBarProps,
          customScrollBarProps = _this$props$customScr === void 0 ? {} : _this$props$customScr;
      var _this$state = this.state,
          isScrolling = _this$state.isScrolling,
          scrollShadowClassName = _this$state.scrollShadowClassName;
      var classes = classNames('bdl-CollapsibleSidebar-nav', className, {
        'is-scrolling': isScrolling
      });
      return React.createElement(CollapsibleSidebarContext.Provider, {
        value: {
          isScrolling: isScrolling
        }
      }, React.createElement(Scrollbar, _extends({
        ref: this.scrollRef,
        className: scrollShadowClassName,
        noScrollX: true,
        onScroll: this.throtteldOnScrollHandler,
        onUpdate: this.throttleOnUpdateHandler,
        renderer: function renderer(props) {
          var elementRef = props.elementRef,
              restProps = _objectWithoutProperties(props, ["elementRef"]);

          return React.createElement(StyledScrollContainer, _extends({}, restProps, {
            ref: elementRef
          }));
        },
        style: {
          height: 'auto',
          width: '100%',
          flexGrow: 1
        },
        thumbYProps: {
          renderer: function renderer(renderProps) {
            var elementRef = renderProps.elementRef,
                style = renderProps.style,
                restProps = _objectWithoutProperties(renderProps, ["elementRef", "style"]);

            if (style && style.background) {
              delete style.background; // remove the hardcoded valued so that the theme value can be assigned
            }

            return React.createElement(StyledScrollThumb, _extends({
              style: style
            }, restProps, {
              ref: elementRef
            }));
          }
        },
        trackYProps: {
          style: {
            background: 'none',
            top: '0',
            height: '100%',
            width: '8px',
            marginRight: '1px'
          }
        }
      }, customScrollBarProps), React.createElement("div", {
        className: classes
      }, children)));
    }
  }]);

  return CollapsibleSidebarNav;
}(React.Component);

export default CollapsibleSidebarNav;
//# sourceMappingURL=CollapsibleSidebarNav.js.map