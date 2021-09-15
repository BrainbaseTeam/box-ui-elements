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
import AccessibleSVG from '../accessible-svg';
var ICON_CLASS = 'left-nav-ghost-state';

var LeftNavPlaceholder =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(LeftNavPlaceholder, _React$PureComponent);

  function LeftNavPlaceholder() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LeftNavPlaceholder);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LeftNavPlaceholder)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "idPrefix", "".concat(uniqueId(ICON_CLASS), "-"));

    return _this;
  }

  _createClass(LeftNavPlaceholder, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          height = _this$props.height,
          title = _this$props.title,
          width = _this$props.width;
      return React.createElement(AccessibleSVG, {
        className: "".concat(ICON_CLASS, " ").concat(className),
        height: height,
        title: title,
        viewBox: "0 0 150 300",
        width: width
      }, React.createElement("path", {
        d: "M1.282 260h97.436c.446 0 .608.046.77.134a.909.909 0 0 1 .378.378c.088.163.134.324.134.77v11.436c0 .446-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134H1.282c-.446 0-.608-.046-.77-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77v-11.436c0-.446.046-.607.134-.77a.909.909 0 0 1 .378-.378c.163-.088.324-.134.77-.134zm0-260h77.436c.446 0 .608.046.77.134a.909.909 0 0 1 .378.378c.088.163.134.324.134.77v11.436c0 .446-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134H1.282c-.446 0-.608-.046-.77-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77V1.282C0 .836.046.674.134.512A.909.909 0 0 1 .512.134C.675.046.836 0 1.282 0zm0 30h117.436c.446 0 .608.046.77.134a.909.909 0 0 1 .378.378c.088.163.134.324.134.77v11.436c0 .446-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134H1.282c-.446 0-.608-.046-.77-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77V31.282c0-.446.046-.607.134-.77a.909.909 0 0 1 .378-.378c.163-.088.324-.134.77-.134zm0 30h67.436c.446 0 .608.046.77.134a.909.909 0 0 1 .378.378c.088.163.134.324.134.77v11.436c0 .446-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134H1.282c-.446 0-.608-.046-.77-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77V61.282c0-.446.046-.607.134-.77a.909.909 0 0 1 .378-.378c.163-.088.324-.134.77-.134zm0 30h97.436c.446 0 .608.046.77.134a.909.909 0 0 1 .378.378c.088.163.134.324.134.77v11.436c0 .446-.046.608-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134H1.282c-.446 0-.608-.046-.77-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77V91.282c0-.446.046-.608.134-.77a.909.909 0 0 1 .378-.378c.163-.088.324-.134.77-.134zm0 40h77.436c.446 0 .608.046.77.134a.909.909 0 0 1 .378.378c.088.163.134.324.134.77v11.436c0 .446-.046.608-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134H1.282c-.446 0-.608-.046-.77-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77v-11.436c0-.446.046-.608.134-.77a.909.909 0 0 1 .378-.378c.163-.088.324-.134.77-.134zm0 30h117.436c.446 0 .608.046.77.134a.909.909 0 0 1 .378.378c.088.163.134.324.134.77v11.436c0 .446-.046.608-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134H1.282c-.446 0-.608-.046-.77-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77v-11.436c0-.446.046-.608.134-.77a.909.909 0 0 1 .378-.378c.163-.088.324-.134.77-.134zm0 30h67.436c.446 0 .608.046.77.134a.909.909 0 0 1 .378.378c.088.163.134.324.134.77v11.436c0 .446-.046.608-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134H1.282c-.446 0-.608-.046-.77-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77v-11.436c0-.446.046-.608.134-.77a.909.909 0 0 1 .378-.378c.163-.088.324-.134.77-.134zm0 30h97.436c.446 0 .608.046.77.134a.909.909 0 0 1 .378.378c.088.163.134.324.134.77v11.436c0 .446-.046.608-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134H1.282c-.446 0-.608-.046-.77-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77v-11.436c0-.446.046-.608.134-.77a.909.909 0 0 1 .378-.378c.163-.088.324-.134.77-.134z",
        fill: "#DDE6ED",
        fillRule: "evenodd",
        opacity: ".6"
      }));
    }
  }]);

  return LeftNavPlaceholder;
}(React.PureComponent);

_defineProperty(LeftNavPlaceholder, "defaultProps", {
  className: '',
  height: 300,
  width: 150
});

export default LeftNavPlaceholder;
//# sourceMappingURL=LeftNavPlaceholder.js.map