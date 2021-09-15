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
var ICON_CLASS = 'icon-trophy-cup';

var IconTrophyCup =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(IconTrophyCup, _React$PureComponent);

  function IconTrophyCup() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IconTrophyCup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IconTrophyCup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "idPrefix", "".concat(uniqueId(ICON_CLASS), "-"));

    return _this;
  }

  _createClass(IconTrophyCup, [{
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
        viewBox: "0 0 36 30",
        width: width
      }, React.createElement("defs", null, React.createElement("path", {
        d: "M18 15.707c6.395 0 11.579-5.1 11.579-11.393H6.42c0 6.292 5.184 11.393 11.579 11.393z",
        id: "".concat(this.idPrefix, "b")
      }), React.createElement("filter", {
        filterUnits: "objectBoundingBox",
        height: "126.3%",
        id: "".concat(this.idPrefix, "a"),
        width: "113%",
        x: "-6.5%",
        y: "-13.2%"
      }, React.createElement("feOffset", {
        in: "SourceAlpha",
        result: "shadowOffsetOuter1"
      }), React.createElement("feGaussianBlur", {
        in: "shadowOffsetOuter1",
        result: "shadowBlurOuter1",
        stdDeviation: ".5"
      }), React.createElement("feColorMatrix", {
        in: "shadowBlurOuter1",
        values: "0 0 0 0 0.960784314 0 0 0 0 0.725490196 0 0 0 0 0.352941176 0 0 0 0.32 0"
      }))), React.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, React.createElement("path", {
        d: "M32.822 4.173h-16.17c.546 3.901 3.954 6.911 8.085 6.911 4.13 0 7.539-3.01 8.085-6.911z",
        stroke: "#F8D371",
        strokeWidth: "2.203"
      }), React.createElement("path", {
        d: "M19.348 4.173H3.178c.546 3.901 3.955 6.911 8.085 6.911 4.13 0 7.539-3.01 8.085-6.911z",
        stroke: "#F8D371",
        strokeWidth: "2.203"
      }), React.createElement("path", {
        d: "M6.972 1h22.056a.55.55 0 0 1 .55.55v2.764H6.422V1.551A.55.55 0 0 1 6.971 1z",
        fill: "#F5B95A"
      }), React.createElement("rect", {
        fill: "#F5B95A",
        height: "3.314",
        rx: ".551",
        width: "10.947",
        x: "12.526",
        y: "18.607"
      }), React.createElement("rect", {
        fill: "#0061D5",
        height: "8",
        rx: ".551",
        width: "16.632",
        x: "9.789",
        y: "20.3"
      }), React.createElement("path", {
        d: "M10.34 20.3h15.53a.55.55 0 0 1 .551.55v7.45H9.79v-7.45a.55.55 0 0 1 .551-.55z",
        fill: "#FC627A"
      }), React.createElement("path", {
        d: "M11.603 20.3h12.794a.55.55 0 0 1 .55.55v7.45H11.053v-7.45a.55.55 0 0 1 .55-.55z",
        fill: "#FFF",
        fillOpacity: ".2"
      }), React.createElement("path", {
        d: "M15.474 13.221h5.052L18.842 21.3h-1.684z",
        fill: "#F5B95A"
      }), React.createElement("path", {
        d: "M14.34 20.3h7.11a.55.55 0 0 1 .55.55v7.45h-8.21v-7.45a.55.55 0 0 1 .55-.55z",
        fill: "#FC627A"
      }), React.createElement("use", {
        fill: "#000",
        filter: "url(#".concat(this.idPrefix, "a)"),
        xlinkHref: "#".concat(this.idPrefix, "b")
      }), React.createElement("use", {
        fill: "#F8D371",
        xlinkHref: "#".concat(this.idPrefix, "b")
      })));
    }
  }]);

  return IconTrophyCup;
}(React.PureComponent);

_defineProperty(IconTrophyCup, "defaultProps", {
  className: '',
  height: 30,
  width: 36
});

export default IconTrophyCup;
//# sourceMappingURL=IconTrophyCup.js.map