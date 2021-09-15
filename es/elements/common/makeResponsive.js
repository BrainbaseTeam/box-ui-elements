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
 * @file HOC to make responsive Box UI Elements
 * @author Box
 */
import * as React from 'react';
import debounce from 'lodash/debounce';
import Measure from 'react-measure';
import classNames from 'classnames';
import { CLASS_IS_MEDIUM, CLASS_IS_SMALL, CLASS_IS_TOUCH, SIZE_LARGE, SIZE_MEDIUM, SIZE_SMALL, SIZE_VERY_LARGE } from '../../constants';
var CROSS_OVER_WIDTH_SMALL = 700;
var CROSS_OVER_WIDTH_MEDIUM = 1000;
var CROSS_OVER_WIDTH_LARGE = 1500;
var HAS_TOUCH = !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch);

function makeResponsive(Wrapped) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(_class, _React$PureComponent);

    /**
     * [constructor]
     *
     * @param {*} data
     * @return {void}
     */
    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));

      _defineProperty(_assertThisInitialized(_this), "onResize", debounce(function (_ref) {
        var width = _ref.bounds.width;

        _this.setState({
          size: _this.getSize(width)
        });
      }, 500));

      _defineProperty(_assertThisInitialized(_this), "innerRef", function (el) {
        _this.innerElement = el;
      });

      _defineProperty(_assertThisInitialized(_this), "getInnerElement", function () {
        return _this.innerElement;
      });

      _this.state = {
        size: props.size || _this.getSize(window.innerWidth)
      };
      return _this;
    }
    /**
     * Calculates the new size
     *
     * @private
     * @param {Component} react component
     * @return {void}
     */


    _createClass(_class, [{
      key: "getSize",
      value: function getSize(width) {
        var size = SIZE_VERY_LARGE;

        if (width <= CROSS_OVER_WIDTH_SMALL) {
          size = SIZE_SMALL;
        } else if (width <= CROSS_OVER_WIDTH_MEDIUM) {
          size = SIZE_MEDIUM;
        } else if (width <= CROSS_OVER_WIDTH_LARGE) {
          size = SIZE_LARGE;
        }

        return size;
      }
      /**
       * Resizing function
       *
       * @private
       * @param {Component} react component
       * @return {void}
       */

    }, {
      key: "render",

      /**
       * Renders the Box UI Element
       *
       * @private
       * @inheritdoc
       * @return {Element}
       */
      value: function render() {
        var _classNames,
            _this2 = this;

        var _this$props = this.props,
            isTouch = _this$props.isTouch,
            size = _this$props.size,
            className = _this$props.className,
            componentRef = _this$props.componentRef,
            rest = _objectWithoutProperties(_this$props, ["isTouch", "size", "className", "componentRef"]);

        var isLarge = size === SIZE_LARGE;
        var isMedium = size === SIZE_MEDIUM;
        var isSmall = size === SIZE_SMALL;
        var isVeryLarge = size === SIZE_VERY_LARGE;
        var isResponsive = !isSmall && !isLarge && !isMedium && !isVeryLarge;

        if ([isSmall, isMedium, isLarge, isVeryLarge].filter(function (item) {
          return item;
        }).length > 1) {
          throw new Error('Box UI Element cannot be small or medium or large or very large at the same time');
        }

        if (!isResponsive) {
          return React.createElement(Wrapped, _extends({
            ref: componentRef,
            className: className,
            isLarge: isLarge,
            isMedium: isMedium,
            isSmall: isSmall,
            isTouch: isTouch,
            isVeryLarge: isVeryLarge
          }, rest));
        }

        var sizeFromState = this.state.size;
        isSmall = sizeFromState === SIZE_SMALL;
        isMedium = sizeFromState === SIZE_MEDIUM;
        isLarge = sizeFromState === SIZE_LARGE;
        isVeryLarge = sizeFromState === SIZE_VERY_LARGE;
        var styleClassName = classNames((_classNames = {}, _defineProperty(_classNames, CLASS_IS_SMALL, isSmall), _defineProperty(_classNames, CLASS_IS_MEDIUM, isMedium), _defineProperty(_classNames, CLASS_IS_TOUCH, isTouch), _classNames), className);
        return React.createElement(Measure, {
          bounds: true,
          innerRef: this.innerRef,
          onResize: this.onResize
        }, function (_ref2) {
          var measureRef = _ref2.measureRef;
          return React.createElement(Wrapped, _extends({
            ref: componentRef,
            className: styleClassName,
            getInnerRef: _this2.getInnerElement,
            isLarge: isLarge,
            isMedium: isMedium,
            isSmall: isSmall,
            isTouch: isTouch,
            isVeryLarge: isVeryLarge,
            measureRef: measureRef
          }, rest));
        });
      }
    }]);

    return _class;
  }(React.PureComponent), _defineProperty(_class, "defaultProps", {
    className: '',
    isTouch: HAS_TOUCH
  }), _temp;
}

export default makeResponsive;
//# sourceMappingURL=makeResponsive.js.map