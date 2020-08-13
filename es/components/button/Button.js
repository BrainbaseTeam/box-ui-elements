function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
import LoadingIndicator from '../loading-indicator';
import RadarAnimation from '../radar';

var Button = /*#__PURE__*/function (_React$Component) {
  _inherits(Button, _React$Component);

  var _super = _createSuper(Button);

  function Button() {
    var _this;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      var _this$props = _this.props,
          isDisabled = _this$props.isDisabled,
          onClick = _this$props.onClick;

      if (isDisabled || _this.btnElement && _this.btnElement.classList.contains('is-disabled')) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      if (onClick) {
        onClick(event);
      }
    });

    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          _this$props2$classNam = _this$props2.className,
          className = _this$props2$classNam === void 0 ? '' : _this$props2$classNam,
          isDisabled = _this$props2.isDisabled,
          _this$props2$isLoadin = _this$props2.isLoading,
          isLoading = _this$props2$isLoadin === void 0 ? false : _this$props2$isLoadin,
          isSelected = _this$props2.isSelected,
          setRef = _this$props2.setRef,
          _this$props2$type = _this$props2.type,
          type = _this$props2$type === void 0 ? 'submit' : _this$props2$type,
          _this$props2$showRada = _this$props2.showRadar,
          showRadar = _this$props2$showRada === void 0 ? false : _this$props2$showRada,
          rest = _objectWithoutProperties(_this$props2, ["children", "className", "isDisabled", "isLoading", "isSelected", "setRef", "type", "showRadar"]);

      var buttonProps = omit(rest, ['onClick']);

      if (isDisabled) {
        buttonProps['aria-disabled'] = true;
      }

      var styleClassName = classNames('btn', {
        'is-disabled': isDisabled,
        'is-loading': isLoading,
        'is-selected': isSelected
      }, className);
      var button =
      /*#__PURE__*/
      // eslint-disable-next-line react/button-has-type
      React.createElement("button", _extends({
        ref: function ref(element) {
          _this2.btnElement = element;

          if (setRef) {
            setRef(element);
          }
        },
        className: styleClassName,
        onClick: this.handleClick,
        type: type
      }, buttonProps), /*#__PURE__*/React.createElement("span", {
        className: "btn-content"
      }, children), isLoading && /*#__PURE__*/React.createElement(LoadingIndicator, {
        className: "btn-loading-indicator"
      }));

      if (showRadar) {
        button = /*#__PURE__*/React.createElement(RadarAnimation, null, button);
      }

      return button;
    }
  }]);

  return Button;
}(React.Component);

export default Button;
//# sourceMappingURL=Button.js.map