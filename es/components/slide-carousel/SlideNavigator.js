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

import range from 'lodash/range';
import * as React from 'react';
import SlideButton from './SlideButton';

var SlideNavigator =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SlideNavigator, _React$Component);

  function SlideNavigator() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SlideNavigator);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SlideNavigator)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "buttonElements", []);

    _defineProperty(_assertThisInitialized(_this), "focusOnButtonElement", function (index) {
      if (index + 1 > _this.buttonElements.length || index < 0) {
        return;
      }

      _this.buttonElements[index].focus();
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      var _this$props = _this.props,
          numOptions = _this$props.numOptions,
          selectedIndex = _this$props.selectedIndex;
      var nextIndex = null;

      switch (event.key) {
        case 'ArrowRight':
          nextIndex = (selectedIndex + 1) % numOptions;
          break;

        case 'ArrowLeft':
          nextIndex = (selectedIndex - 1 + numOptions) % numOptions;
          break;

        default:
          return;
      }

      _this.handleSelection(nextIndex);

      event.preventDefault();
      event.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelection", function (index) {
      _this.focusOnButtonElement(index);

      _this.props.onSelection(index);
    });

    return _this;
  }

  _createClass(SlideNavigator, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          getButtonIdFromValue = _this$props2.getButtonIdFromValue,
          getPanelIdFromValue = _this$props2.getPanelIdFromValue,
          numOptions = _this$props2.numOptions,
          onSelection = _this$props2.onSelection,
          selectedIndex = _this$props2.selectedIndex;
      return React.createElement("nav", {
        className: "slide-navigator"
        /* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
        ,
        onKeyDown: this.handleKeyDown,
        role: "tablist"
      }, range(numOptions).map(function (child, i) {
        return React.createElement(SlideButton, {
          key: i,
          "aria-controls": getPanelIdFromValue(i),
          "aria-label": "slide".concat(i),
          buttonRef: function buttonRef(buttonEl) {
            _this2.buttonElements[i] = buttonEl;
          },
          id: getButtonIdFromValue(i),
          isSelected: i === selectedIndex,
          onClick: function onClick() {
            return onSelection(i);
          },
          tabIndex: i === selectedIndex ? '0' : '-1'
        });
      }));
    }
  }]);

  return SlideNavigator;
}(React.Component);

export default SlideNavigator;
//# sourceMappingURL=SlideNavigator.js.map