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
var ICON_CLASS = 'chart-circle-illustration';

var ChartCircleIllustration =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ChartCircleIllustration, _React$PureComponent);

  function ChartCircleIllustration() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ChartCircleIllustration);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ChartCircleIllustration)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "idPrefix", "".concat(uniqueId(ICON_CLASS), "-"));

    return _this;
  }

  _createClass(ChartCircleIllustration, [{
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
        viewBox: "0 0 200 200",
        width: width
      }, React.createElement("defs", null, React.createElement("rect", {
        height: "79.2",
        id: "b",
        rx: "1.2175",
        width: "79.2"
      }), React.createElement("filter", {
        filterUnits: "objectBoundingBox",
        height: "136.6%",
        id: "a",
        width: "136.6%",
        x: "-18.3%",
        y: "-12%"
      }, React.createElement("feOffset", {
        dy: 5,
        in: "SourceAlpha",
        result: "shadowOffsetOuter1"
      }), React.createElement("feGaussianBlur", {
        in: "shadowOffsetOuter1",
        result: "shadowBlurOuter1",
        stdDeviation: 4
      }), React.createElement("feColorMatrix", {
        in: "shadowBlurOuter1",
        values: "0 0 0 0 0 0 0 0 0 0.160784314 0 0 0 0 0.278431373 0 0 0 0.12 0"
      })), React.createElement("filter", {
        filterUnits: "objectBoundingBox",
        height: "520%",
        id: "c",
        width: "216.7%",
        x: "-58.3%",
        y: "-152.9%"
      }, React.createElement("feOffset", {
        dy: 1,
        in: "SourceAlpha",
        result: "shadowOffsetOuter1"
      }), React.createElement("feGaussianBlur", {
        in: "shadowOffsetOuter1",
        result: "shadowBlurOuter1",
        stdDeviation: 2
      }), React.createElement("feColorMatrix", {
        in: "shadowBlurOuter1",
        result: "shadowMatrixOuter1",
        values: "0 0 0 0 0 0 0 0 0 0.380392157 0 0 0 0 0.839215686 0 0 0 0.1 0"
      }), React.createElement("feOffset", {
        dy: 1,
        in: "SourceAlpha",
        result: "shadowOffsetOuter2"
      }), React.createElement("feGaussianBlur", {
        in: "shadowOffsetOuter2",
        result: "shadowBlurOuter2",
        stdDeviation: "4.5"
      }), React.createElement("feColorMatrix", {
        in: "shadowBlurOuter2",
        result: "shadowMatrixOuter2",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
      }), React.createElement("feOffset", {
        dy: 1,
        in: "SourceAlpha",
        result: "shadowOffsetOuter3"
      }), React.createElement("feGaussianBlur", {
        in: "shadowOffsetOuter3",
        result: "shadowBlurOuter3",
        stdDeviation: 7
      }), React.createElement("feColorMatrix", {
        in: "shadowBlurOuter3",
        result: "shadowMatrixOuter3",
        values: "0 0 0 0 0 0 0 0 0 0.380392157 0 0 0 0 0.839215686 0 0 0 0.05 0"
      }), React.createElement("feOffset", {
        dy: 1,
        in: "SourceAlpha",
        result: "shadowOffsetOuter4"
      }), React.createElement("feGaussianBlur", {
        in: "shadowOffsetOuter4",
        result: "shadowBlurOuter4",
        stdDeviation: 5
      }), React.createElement("feColorMatrix", {
        in: "shadowBlurOuter4",
        result: "shadowMatrixOuter4",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
      }), React.createElement("feMerge", null, React.createElement("feMergeNode", {
        in: "shadowMatrixOuter1"
      }), React.createElement("feMergeNode", {
        in: "shadowMatrixOuter2"
      }), React.createElement("feMergeNode", {
        in: "shadowMatrixOuter3"
      }), React.createElement("feMergeNode", {
        in: "shadowMatrixOuter4"
      }), React.createElement("feMergeNode", {
        in: "SourceGraphic"
      }))), React.createElement("rect", {
        height: "34.7866",
        id: "e",
        rx: "17.3933",
        width: 126
      }), React.createElement("filter", {
        filterUnits: "objectBoundingBox",
        height: "396.1%",
        id: "d",
        width: "181.7%",
        x: "-40.9%",
        y: "-102.1%"
      }, React.createElement("feOffset", {
        dy: 16,
        in: "SourceAlpha",
        result: "shadowOffsetOuter1"
      }), React.createElement("feGaussianBlur", {
        in: "shadowOffsetOuter1",
        result: "shadowBlurOuter1",
        stdDeviation: "14.5"
      }), React.createElement("feComposite", {
        in: "shadowBlurOuter1",
        in2: "SourceAlpha",
        operator: "out",
        result: "shadowBlurOuter1"
      }), React.createElement("feColorMatrix", {
        in: "shadowBlurOuter1",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
      })), React.createElement("path", {
        d: "M17.393 0h104.148c1.55 0 2.113.162 2.68.465a3.161 3.161 0 0 1 1.314 1.315c.303.566.465 1.129.465 2.68v25.867c0 1.55-.162 2.113-.465 2.68a3.16 3.16 0 0 1-1.315 1.315c-.567.303-1.129.465-2.68.465H17.394C7.787 34.787 0 26.999 0 17.393 0 7.787 7.787 0 17.393 0z",
        id: "g"
      }), React.createElement("filter", {
        filterUnits: "objectBoundingBox",
        height: "174.7%",
        id: "f",
        width: "118.3%",
        x: "-5.2%",
        y: "-18.7%"
      }, React.createElement("feOffset", {
        dx: 5,
        dy: 8,
        in: "SourceAlpha",
        result: "shadowOffsetOuter1"
      }), React.createElement("feGaussianBlur", {
        in: "shadowOffsetOuter1",
        result: "shadowBlurOuter1",
        stdDeviation: "2.5"
      }), React.createElement("feColorMatrix", {
        in: "shadowBlurOuter1",
        values: "0 0 0 0 0.0823529412 0 0 0 0 0.121568627 0 0 0 0 0.149019608 0 0 0 0.08 0"
      }))), React.createElement("g", {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(10 10)"
      }, React.createElement("circle", {
        cx: 90,
        cy: 90,
        fill: "#E9EEF3",
        r: 90
      }), React.createElement("g", {
        transform: "translate(74.7 18)"
      }, React.createElement("use", {
        fill: "#000",
        filter: "url(#a)",
        xlinkHref: "#b"
      }), React.createElement("use", {
        fill: "#FFF",
        xlinkHref: "#b"
      }), React.createElement("path", {
        d: "M36.554 2.437h40.303v74.515H36.554z",
        fill: "#E9EEF3"
      }), React.createElement("g", {
        transform: "translate(45.083 28.0246)"
      }, React.createElement("circle", {
        cx: "11.716",
        cy: "11.716",
        fill: "#F5B95A",
        r: "11.716"
      }), React.createElement("path", {
        d: "M11.716 23.432V11.716h11.716c0 6.47-5.245 11.716-11.716 11.716z",
        fill: "#0061D5"
      }), React.createElement("path", {
        d: "M11.728 0v11.716l10.315 5.581a11.727 11.727 0 0 1-10.315 6.135C5.251 23.432 0 18.187 0 11.716 0 5.246 5.25 0 11.728 0z",
        fill: "#FC627A"
      })), React.createElement("rect", {
        fill: "#0061D5",
        height: "1.5231",
        rx: ".7615",
        width: "12.1846",
        x: "8.6698",
        y: "17.8083"
      }), React.createElement("path", {
        d: "M9.38 22.026h17.793a.71.71 0 1 1 0 1.422H9.381a.71.71 0 0 1 0-1.422zm0 14.215h8.046a.71.71 0 1 1 0 1.422H9.38a.71.71 0 1 1 0-1.422zm0 2.843h17.793a.71.71 0 0 1 0 1.422H9.381a.71.71 0 1 1 0-1.421zm0 2.843h22.668a.71.71 0 1 1 0 1.422H9.381a.71.71 0 1 1 0-1.421z",
        fill: "#C3D1D9"
      }), React.createElement("path", {
        d: "M9.38 52.081h17.793a.71.71 0 1 1 0 1.422H9.381a.71.71 0 1 1 0-1.422zm0 2.843h11.702a.71.71 0 0 1 0 1.422H9.38a.71.71 0 1 1 0-1.421zm0 2.844h15.966a.71.71 0 1 1 0 1.421H9.38a.71.71 0 1 1 0-1.421z",
        fill: "#E9EEF3"
      })), React.createElement("g", {
        filter: "url(#c)",
        transform: "translate(0 117.9)"
      }, React.createElement("g", {
        opacity: ".42"
      }, React.createElement("use", {
        fill: "#000",
        filter: "url(#d)",
        xlinkHref: "#e"
      }), React.createElement("use", {
        fill: "#FFF",
        fillOpacity: 0,
        xlinkHref: "#e"
      })), React.createElement("use", {
        fill: "#000",
        filter: "url(#f)",
        xlinkHref: "#g"
      }), React.createElement("use", {
        fill: "#FFF",
        xlinkHref: "#g"
      }), React.createElement("rect", {
        fill: "#E9EEF3",
        height: "6.9573",
        rx: "3.4787",
        width: 72,
        x: "38.2653",
        y: "13.9147"
      }), React.createElement("circle", {
        cx: "17.3933",
        cy: "17.3933",
        fill: "#5FC9CF",
        r: "12.1753"
      }), React.createElement("text", {
        fill: "#FFF",
        fontFamily: "Lato-Bold, Lato",
        fontSize: "8.6967",
        fontWeight: "bold",
        letterSpacing: ".8697"
      }, React.createElement("tspan", {
        x: "7.9292",
        y: "21.1753"
      }, "MW")))));
    }
  }]);

  return ChartCircleIllustration;
}(React.PureComponent);

_defineProperty(ChartCircleIllustration, "defaultProps", {
  className: '',
  height: 200,
  width: 200
});

export default ChartCircleIllustration;
//# sourceMappingURL=ChartCircleIllustration.js.map