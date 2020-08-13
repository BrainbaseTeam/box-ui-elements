function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
import uniqueId from 'lodash/uniqueId';
import AccessibleSVG from '../accessible-svg';
var ICON_CLASS = 'icon-google-slides';

var IconGoogleSlides = /*#__PURE__*/function (_React$Component) {
  _inherits(IconGoogleSlides, _React$Component);

  var _super = _createSuper(IconGoogleSlides);

  function IconGoogleSlides() {
    var _this;

    _classCallCheck(this, IconGoogleSlides);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "idPrefix", "".concat(uniqueId(ICON_CLASS), "-"));

    return _this;
  }

  _createClass(IconGoogleSlides, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          height = _this$props.height,
          title = _this$props.title,
          width = _this$props.width;
      return /*#__PURE__*/React.createElement(AccessibleSVG, {
        className: "".concat(ICON_CLASS, " ").concat(className),
        height: height,
        title: title,
        viewBox: "0 0 30 30",
        width: width
      }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
        gradientTransform: "matrix(2.67 0 0 -2.67 596.67 1357)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "a"),
        x1: "-215.49",
        x2: "-215.49",
        y1: "505.79",
        y2: "503.19"
      }, /*#__PURE__*/React.createElement("stop", {
        offset: "0",
        stopColor: "#d08714",
        stopOpacity: ".88"
      }), /*#__PURE__*/React.createElement("stop", {
        offset: ".55",
        stopColor: "#cf8714",
        stopOpacity: ".2"
      }))), /*#__PURE__*/React.createElement("path", {
        d: "M17.64 0H6.05A2.05 2.05 0 0 0 4 2.05V28a2.05 2.05 0 0 0 2.05 2h17.72a2.05 2.05 0 0 0 2.05-2V8.18l-4.77-3.41z",
        fill: "#f4b912"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M18.23 7.58l7.59 7.58V8.18l-7.59-.6z",
        fill: "url(#".concat(this.idPrefix, "a)")
      }), /*#__PURE__*/React.createElement("path", {
        d: "M17.64 0v6.14a2 2 0 0 0 2 2h6.14z",
        fill: "#fadc87"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M6.05 0A2.05 2.05 0 0 0 4 2.05v.17A2.05 2.05 0 0 1 6.05.17h11.59V0z",
        fill: "#fff",
        fillOpacity: ".2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M19.68 8.18a2 2 0 0 1-2-2v.17a2 2 0 0 0 2 2h6.14v-.17z",
        fill: "#1a237e",
        fillOpacity: ".1"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M10 15v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1zm9 6h-8v-4h8z",
        fill: "#f1f1f1"
      }));
    }
  }]);

  return IconGoogleSlides;
}(React.Component);

_defineProperty(IconGoogleSlides, "defaultProps", {
  className: '',
  height: 30,
  width: 30
});

export default IconGoogleSlides;
//# sourceMappingURL=IconGoogleSlides.js.map