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
var ICON_CLASS = 'icon-trophy-cup-with-tooltip';

var IconTrophyCupWithTooltip = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(IconTrophyCupWithTooltip, _React$PureComponent);

  var _super = _createSuper(IconTrophyCupWithTooltip);

  function IconTrophyCupWithTooltip() {
    var _this;

    _classCallCheck(this, IconTrophyCupWithTooltip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "idPrefix", "".concat(uniqueId(ICON_CLASS), "-"));

    return _this;
  }

  _createClass(IconTrophyCupWithTooltip, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          height = _this$props.height,
          title = _this$props.title,
          tooltipColor = _this$props.tooltipColor,
          tooltipText = _this$props.tooltipText,
          width = _this$props.width;
      return /*#__PURE__*/React.createElement(AccessibleSVG, {
        className: "".concat(ICON_CLASS, " ").concat(className),
        height: height,
        title: title,
        viewBox: "0 0 60 54",
        width: width
      }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
        d: "M30 38.707c6.395 0 11.579-5.1 11.579-11.393H18.42c0 6.292 5.184 11.393 11.579 11.393z",
        id: "".concat(this.idPrefix, "b")
      }), /*#__PURE__*/React.createElement("filter", {
        filterUnits: "objectBoundingBox",
        height: "126.3%",
        id: "".concat(this.idPrefix, "a"),
        width: "113%",
        x: "-6.5%",
        y: "-13.2%"
      }, /*#__PURE__*/React.createElement("feOffset", {
        in: "SourceAlpha",
        result: "shadowOffsetOuter1"
      }), /*#__PURE__*/React.createElement("feGaussianBlur", {
        in: "shadowOffsetOuter1",
        result: "shadowBlurOuter1",
        stdDeviation: ".5"
      }), /*#__PURE__*/React.createElement("feColorMatrix", {
        in: "shadowBlurOuter1",
        values: "0 0 0 0 0.960784314 0 0 0 0 0.725490196 0 0 0 0 0.352941176 0 0 0 0.32 0"
      }))), /*#__PURE__*/React.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M44.822 27.173h-16.17c.546 3.901 3.954 6.911 8.085 6.911 4.13 0 7.539-3.01 8.085-6.911z",
        stroke: "#F8D371",
        strokeWidth: "2.203"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M31.348 27.173h-16.17c.546 3.901 3.955 6.911 8.085 6.911 4.13 0 7.539-3.01 8.085-6.911z",
        stroke: "#F8D371",
        strokeWidth: "2.203"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M18.972 24h22.056a.55.55 0 0 1 .55.55v2.764H18.422v-2.763a.55.55 0 0 1 .55-.551z",
        fill: "#F5B95A"
      }), /*#__PURE__*/React.createElement("rect", {
        fill: "#F5B95A",
        height: "3.314",
        rx: ".551",
        width: "10.947",
        x: "24.526",
        y: "41.607"
      }), /*#__PURE__*/React.createElement("rect", {
        fill: "#0061D5",
        height: "8",
        rx: ".551",
        width: "16.632",
        x: "21.789",
        y: "43.3"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M22.34 43.3h15.53a.55.55 0 0 1 .551.55v7.45H21.79v-7.45a.55.55 0 0 1 .551-.55z",
        fill: "#FC627A"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M23.603 43.3h12.794a.55.55 0 0 1 .55.55v7.45H23.053v-7.45a.55.55 0 0 1 .55-.55z",
        fill: "#FFF",
        fillOpacity: ".2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M27.474 36.221h5.052L30.842 44.3h-1.684z",
        fill: "#F5B95A"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M26.34 43.3h7.11a.55.55 0 0 1 .55.55v7.45h-8.21v-7.45a.55.55 0 0 1 .55-.55z",
        fill: "#FC627A"
      }), /*#__PURE__*/React.createElement("use", {
        fill: "#000",
        filter: "url(#".concat(this.idPrefix, "a)"),
        xlinkHref: "#".concat(this.idPrefix, "b")
      }), /*#__PURE__*/React.createElement("use", {
        fill: "#F8D371",
        xlinkHref: "#".concat(this.idPrefix, "b")
      }), /*#__PURE__*/React.createElement("path", {
        d: "M4.564 2h50.872c.892 0 1.215.093 1.54.267.327.174.583.43.757.756.174.326.267.65.267 1.54v14.873c0 .892-.093 1.215-.267 1.54-.174.327-.43.583-.756.757-.326.174-.65.267-1.54.267H32l-2 2-2-2H4.564c-.892 0-1.215-.093-1.54-.267a1.817 1.817 0 0 1-.757-.756c-.174-.326-.267-.65-.267-1.54V4.563c0-.892.093-1.215.267-1.54.174-.327.43-.583.756-.757.326-.174.65-.267 1.54-.267z",
        fill: tooltipColor
      }), /*#__PURE__*/React.createElement("text", {
        fill: "#FFF",
        fontFamily: "Lato-Bold, Lato",
        fontSize: "11",
        fontWeight: "bold",
        letterSpacing: ".6"
      }, /*#__PURE__*/React.createElement("tspan", {
        x: "6.532",
        y: "16"
      }, tooltipText))));
    }
  }]);

  return IconTrophyCupWithTooltip;
}(React.PureComponent);

_defineProperty(IconTrophyCupWithTooltip, "defaultProps", {
  className: '',
  height: 54,
  tooltipColor: '#27C281',
  tooltipText: '',
  width: 60
});

export default IconTrophyCupWithTooltip;
//# sourceMappingURL=IconTrophyCupWithTooltip.js.map