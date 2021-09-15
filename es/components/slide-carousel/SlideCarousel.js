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
import uniqueId from 'lodash/uniqueId';
import SlideCarouselPrimitive from './SlideCarouselPrimitive';
import './SlideCarousel.scss';

var SlideCarousel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SlideCarousel, _React$Component);

  function SlideCarousel(props) {
    var _this;

    _classCallCheck(this, SlideCarousel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SlideCarousel).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "setSelectedIndex", function (index) {
      _this.setState({
        selectedIndex: index
      });
    });

    _this.id = uniqueId('slidecarousel');
    _this.state = {
      selectedIndex: props.initialIndex || 0
    };
    return _this;
  }
  /*
   * If the selected index in the state has somehow gotten set to an
   * out of bounds value (either because we were passed a bad value,
   * or the number of children has reduced), compute a new selected
   * index which is a floored value between 0 <= index < num children
   */


  _createClass(SlideCarousel, [{
    key: "getBoundedSelectedIndex",
    value: function getBoundedSelectedIndex() {
      var children = this.props.children;
      var selectedIndex = this.state.selectedIndex;
      var lastChildIndex = Math.max(React.Children.count(children) - 1, 0);
      var boundedSelectedIndex = Math.max(selectedIndex || 0, 0);
      return boundedSelectedIndex > lastChildIndex ? lastChildIndex : Math.floor(boundedSelectedIndex);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          contentHeight = _this$props.contentHeight,
          title = _this$props.title;
      var selectedIndex = this.getBoundedSelectedIndex();
      return React.createElement(SlideCarouselPrimitive, {
        className: className,
        contentHeight: contentHeight,
        idPrefix: this.id,
        onSelection: this.setSelectedIndex,
        selectedIndex: selectedIndex,
        title: title
      }, children);
    }
  }]);

  return SlideCarousel;
}(React.Component);

_defineProperty(SlideCarousel, "defaultProps", {
  className: '',
  initialIndex: 0
});

export default SlideCarousel;
//# sourceMappingURL=SlideCarousel.js.map