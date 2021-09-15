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

import * as React from 'react';
import classNames from 'classnames';
import noop from 'lodash/noop';
import throttle from 'lodash/throttle';
import './ScrollWrapper.scss';

var ScrollWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ScrollWrapper, _React$Component);

  function ScrollWrapper(props) {
    var _this;

    _classCallCheck(this, ScrollWrapper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScrollWrapper).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      shouldShowTopScrollShadow: false,
      shouldShowBottomScrollShadow: false
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      var newState = _this.getScrollShadowState();

      _this.setState(newState);

      if (_this.scrollRef) {
        _this.scrollRef.addEventListener('transitionend', _this.throttledOnContentScroll); // Apparently, flow only allows for one truthy check per command, so I have to either:
        // 1) duplicate this check per call, or
        // 2) nest if checks (_slightly more performant_)


        if (_this.scrollRef) {
          _this.observer.observe(_this.scrollRef, {
            attributes: true,
            childlist: true,
            subtree: true
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onContentScroll", function () {
      var newState = _this.getScrollShadowState();

      _this.setState(newState);
    });

    _defineProperty(_assertThisInitialized(_this), "getScrollShadowState", function () {
      var _ref = _this.scrollRef || {},
          scrollTop = _ref.scrollTop,
          scrollHeight = _ref.scrollHeight,
          clientHeight = _ref.clientHeight;

      var newState = {};

      if (scrollTop > 0 && scrollTop < scrollHeight - clientHeight) {
        newState.shouldShowTopScrollShadow = true;
        newState.shouldShowBottomScrollShadow = true;
      }

      if (scrollTop === 0) {
        newState.shouldShowTopScrollShadow = false;
      }

      if (scrollTop < scrollHeight - clientHeight) {
        newState.shouldShowBottomScrollShadow = true;
      }

      if (scrollTop === scrollHeight - clientHeight) {
        newState.shouldShowBottomScrollShadow = false;
      }

      return newState;
    });

    _defineProperty(_assertThisInitialized(_this), "scrollRef", null);

    _defineProperty(_assertThisInitialized(_this), "throttledOnContentScroll", throttle(_this.onContentScroll, 100));

    _this.observer = new MutationObserver(_this.throttledOnContentScroll);
    return _this;
  }

  _createClass(ScrollWrapper, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.observer.disconnect();

      if (this.scrollRef) {
        this.scrollRef.removeEventListener('transitionend', this.throttledOnContentScroll);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          scrollRefFn = _this$props.scrollRefFn,
          shadowSize = _this$props.shadowSize,
          rest = _objectWithoutProperties(_this$props, ["children", "className", "scrollRefFn", "shadowSize"]);

      var _this$state = this.state,
          shouldShowTopScrollShadow = _this$state.shouldShowTopScrollShadow,
          shouldShowBottomScrollShadow = _this$state.shouldShowBottomScrollShadow;
      var classes = classNames("scroll-container", className, {
        'is-showing-top-shadow': shouldShowTopScrollShadow,
        'is-showing-bottom-shadow': shouldShowBottomScrollShadow
      });
      return React.createElement("div", _extends({
        className: classes
      }, rest), React.createElement("div", {
        className: classNames('scroll-wrap-container', "style--".concat(shadowSize)),
        onScroll: this.throttledOnContentScroll,
        ref: function ref(el) {
          _this2.scrollRef = el;
          scrollRefFn(el);
        }
      }, children));
    }
  }]);

  return ScrollWrapper;
}(React.Component);

_defineProperty(ScrollWrapper, "defaultProps", {
  scrollRefFn: noop,
  shadowSize: 'cover'
});

export default ScrollWrapper;
//# sourceMappingURL=ScrollWrapper.js.map