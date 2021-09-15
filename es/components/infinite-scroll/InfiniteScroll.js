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

/**
 * From https://github.com/jaredpalmer/react-simple-infinite-scroll
 * Updated to accept a scroll container React ref as the "window"
 */
import * as React from 'react';
import throttle from 'lodash/throttle';

var InfiniteScroll =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InfiniteScroll, _React$Component);

  function InfiniteScroll(props) {
    var _this;

    _classCallCheck(this, InfiniteScroll);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InfiniteScroll).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "sentinel", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "addEventListeners", function () {
      var useWindow = _this.props.useWindow;

      if (useWindow) {
        window.addEventListener('scroll', _this.scrollHandler);
        window.addEventListener('resize', _this.resizeHandler);

        _this.setState({
          activeListenerNode: window
        });
      } else {
        var scrollContainerNode = _this.props.scrollContainerNode;
        if (scrollContainerNode == null) return;
        scrollContainerNode.addEventListener('scroll', _this.scrollHandler);
        scrollContainerNode.addEventListener('resize', _this.resizeHandler);

        _this.setState({
          activeListenerNode: scrollContainerNode
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "removeEventListeners", function () {
      var activeListenerNode = _this.state.activeListenerNode;
      if (activeListenerNode == null) return;
      activeListenerNode.removeEventListener('scroll', _this.scrollHandler);
      activeListenerNode.removeEventListener('resize', _this.resizeHandler);
    });

    _defineProperty(_assertThisInitialized(_this), "onContainerScroll", function () {
      var _this$props = _this.props,
          isLoading = _this$props.isLoading,
          hasMore = _this$props.hasMore,
          threshold = _this$props.threshold,
          useWindow = _this$props.useWindow,
          onLoadMore = _this$props.onLoadMore;
      if (isLoading || !hasMore) return;
      if (_this.sentinel.current == null) return;

      var _this$sentinel$curren = _this.sentinel.current.getBoundingClientRect(),
          sentinelTop = _this$sentinel$curren.top;

      if (useWindow) {
        if (sentinelTop - window.innerHeight < threshold) {
          onLoadMore();
        }
      } else {
        var scrollContainerNode = _this.props.scrollContainerNode;
        if (scrollContainerNode == null) return;

        var _scrollContainerNode$ = scrollContainerNode.getBoundingClientRect(),
            containerBottom = _scrollContainerNode$.bottom;

        if (sentinelTop - containerBottom < threshold) {
          onLoadMore();
        }
      }
    });

    _this.scrollHandler = throttle(_this.onContainerScroll, props.throttle);
    _this.resizeHandler = throttle(_this.onContainerScroll, props.throttle);
    _this.state = {
      activeListenerNode: null
    };
    return _this;
  }

  _createClass(InfiniteScroll, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.addEventListeners();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          useWindow = _this$props2.useWindow,
          scrollContainerNode = _this$props2.scrollContainerNode;

      if (useWindow !== prevProps.useWindow || scrollContainerNode !== prevProps.scrollContainerNode) {
        this.removeEventListeners();
        this.addEventListeners();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeEventListeners();
    }
  }, {
    key: "render",
    value: function render() {
      var sentinel = React.createElement("div", {
        ref: this.sentinel,
        "data-testid": "sentinel"
      });
      return React.createElement("div", null, this.props.children, sentinel);
    }
  }]);

  return InfiniteScroll;
}(React.Component);

_defineProperty(InfiniteScroll, "defaultProps", {
  threshold: 100,
  throttle: 64,
  useWindow: false
});

export default InfiniteScroll;
//# sourceMappingURL=InfiniteScroll.js.map