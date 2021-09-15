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
var ICON_CLASS = 'icon-doc-illustration';

var IconDocIllustration =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(IconDocIllustration, _React$PureComponent);

  function IconDocIllustration() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IconDocIllustration);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IconDocIllustration)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "idPrefix", "".concat(uniqueId(ICON_CLASS), "-"));

    return _this;
  }

  _createClass(IconDocIllustration, [{
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
        viewBox: "0 0 170 170",
        width: width
      }, React.createElement("defs", null, React.createElement("path", {
        d: "M105.26 46.045v94.815c0 1.225-1.012 2.24-2.232 2.24H18.231c-1.22 0-2.231-1.015-2.231-2.24V33.34c0-1.225 1.011-2.24 2.231-2.24h72.14c.593 0 1.151.245 1.57.665l12.656 12.705c.453.385.663.98.663 1.575z",
        id: "".concat(this.idPrefix, "a")
      }), React.createElement("path", {
        d: "M128.235 40.9v106.68c0 1.4-1.116 2.52-2.51 2.52H30.329a2.505 2.505 0 0 1-2.51-2.52V26.62c0-1.4 1.115-2.52 2.51-2.52h81.17c.662 0 1.29.28 1.778.735l14.226 14.28c.488.49.732 1.12.732 1.785z",
        id: "".concat(this.idPrefix, "c")
      }), React.createElement("filter", {
        filterUnits: "objectBoundingBox",
        height: "119.8%",
        id: "".concat(this.idPrefix, "b"),
        width: "124.9%",
        x: "-12.4%",
        y: "-6.7%"
      }, React.createElement("feOffset", {
        dy: "4",
        in: "SourceAlpha",
        result: "shadowOffsetOuter1"
      }), React.createElement("feGaussianBlur", {
        in: "shadowOffsetOuter1",
        result: "shadowBlurOuter1",
        stdDeviation: "3.5"
      }), React.createElement("feColorMatrix", {
        in: "shadowBlurOuter1",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
      })), React.createElement("path", {
        d: "M153.574 33.655V152.2c0 1.54-1.255 2.8-2.789 2.8H44.79A2.803 2.803 0 0 1 42 152.2V17.8c0-1.54 1.255-2.8 2.79-2.8h90.2c.733 0 1.465.28 1.988.805l15.795 15.855c.523.56.801 1.26.801 1.995z",
        id: "".concat(this.idPrefix, "e")
      }), React.createElement("filter", {
        filterUnits: "objectBoundingBox",
        height: "135%",
        id: "".concat(this.idPrefix, "d"),
        width: "143.9%",
        x: "-22%",
        y: "-12.5%"
      }, React.createElement("feOffset", {
        dy: "7",
        in: "SourceAlpha",
        result: "shadowOffsetOuter1"
      }), React.createElement("feGaussianBlur", {
        in: "shadowOffsetOuter1",
        result: "shadowBlurOuter1",
        stdDeviation: "7"
      }), React.createElement("feComposite", {
        in: "shadowBlurOuter1",
        in2: "SourceAlpha",
        operator: "out",
        result: "shadowBlurOuter1"
      }), React.createElement("feColorMatrix", {
        in: "shadowBlurOuter1",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
      })), React.createElement("path", {
        d: "M59.859 39.5c-3.835 0-6.973-3.15-6.973-7s3.138-7 6.973-7 6.973 3.15 6.973 7-3.138 7-6.973 7z",
        id: "".concat(this.idPrefix, "g")
      }), React.createElement("filter", {
        filterUnits: "objectBoundingBox",
        height: "278.6%",
        id: "".concat(this.idPrefix, "f"),
        width: "279.3%",
        x: "-89.6%",
        y: "-60.7%"
      }, React.createElement("feOffset", {
        dy: "4",
        in: "SourceAlpha",
        result: "shadowOffsetOuter1"
      }), React.createElement("feGaussianBlur", {
        in: "shadowOffsetOuter1",
        result: "shadowBlurOuter1",
        stdDeviation: "3.5"
      }), React.createElement("feColorMatrix", {
        in: "shadowBlurOuter1",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
      })), React.createElement("filter", {
        filterUnits: "objectBoundingBox",
        height: "274.7%",
        id: "".concat(this.idPrefix, "h"),
        width: "249.1%",
        x: "-74.5%",
        y: "-87.4%"
      }, React.createElement("feGaussianBlur", {
        in: "SourceGraphic",
        stdDeviation: "3.465"
      })), React.createElement("path", {
        d: "M84.998 136.38a19.765 19.765 0 0 0 5.788-14.035c0-10.955-8.856-19.845-19.77-19.845v19.845l13.982 14.035z",
        id: "".concat(this.idPrefix, "j")
      }), React.createElement("filter", {
        filterUnits: "objectBoundingBox",
        height: "182.6%",
        id: "".concat(this.idPrefix, "i"),
        width: "241.6%",
        x: "-70.8%",
        y: "-20.7%"
      }, React.createElement("feOffset", {
        dy: "7",
        in: "SourceAlpha",
        result: "shadowOffsetOuter1"
      }), React.createElement("feGaussianBlur", {
        in: "shadowOffsetOuter1",
        result: "shadowBlurOuter1",
        stdDeviation: "3.5"
      }), React.createElement("feColorMatrix", {
        in: "shadowBlurOuter1",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
      }))), React.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, React.createElement("g", {
        fill: "#8EA6B2",
        opacity: ".2"
      }, React.createElement("use", {
        xlinkHref: "#".concat(this.idPrefix, "a")
      }), React.createElement("use", {
        xlinkHref: "#".concat(this.idPrefix, "a")
      })), React.createElement("g", {
        opacity: ".2"
      }, React.createElement("use", {
        fill: "#000",
        filter: "url(#".concat(this.idPrefix, "b)"),
        xlinkHref: "#".concat(this.idPrefix, "c")
      }), React.createElement("use", {
        fill: "#8EA6B2",
        xlinkHref: "#".concat(this.idPrefix, "c")
      }), React.createElement("use", {
        fill: "#8EA6B2",
        xlinkHref: "#".concat(this.idPrefix, "c")
      })), React.createElement("use", {
        fill: "#000",
        filter: "url(#".concat(this.idPrefix, "d)"),
        xlinkHref: "#".concat(this.idPrefix, "e")
      }), React.createElement("use", {
        fill: "#FFF",
        fillOpacity: ".95",
        xlinkHref: "#".concat(this.idPrefix, "e")
      }), React.createElement("path", {
        d: "M70.912 102.5c-10.913 0-19.77 8.89-19.77 19.845h19.77V102.5z",
        fill: "#0061D5"
      }), React.createElement("path", {
        d: "M70.912 122.45h-19.77c0 10.955 8.857 19.845 19.77 19.845 5.44 0 10.39-2.205 13.982-5.81L70.912 122.45z",
        fill: "#FC617A"
      }), React.createElement("use", {
        fill: "#000",
        filter: "url(#".concat(this.idPrefix, "f)"),
        xlinkHref: "#".concat(this.idPrefix, "g")
      }), React.createElement("use", {
        fill: "#8EA6B2",
        xlinkHref: "#".concat(this.idPrefix, "g")
      }), React.createElement("path", {
        d: "M52.537 30.75h13.947v11.9H52.537z",
        fill: "#005ECF",
        fillOpacity: ".2",
        filter: "url(#".concat(this.idPrefix, "h)")
      }), React.createElement("use", {
        fill: "#000",
        filter: "url(#".concat(this.idPrefix, "i)"),
        xlinkHref: "#".concat(this.idPrefix, "j")
      }), React.createElement("use", {
        fill: "#76AEF1",
        xlinkHref: "#".concat(this.idPrefix, "j")
      }), React.createElement("path", {
        d: "M57.418 32.57l1.465 1.47 2.929-2.94",
        stroke: "#FFF",
        strokeWidth: ".5"
      }), React.createElement("path", {
        d: "M77.293 37.75a5.233 5.233 0 0 1-5.23-5.25 5.233 5.233 0 0 1 5.23-5.25 5.233 5.233 0 0 1 5.23 5.25 5.233 5.233 0 0 1-5.23 5.25zM90.193 36c-1.917 0-3.486-1.575-3.486-3.5s1.569-3.5 3.486-3.5c1.918 0 3.487 1.575 3.487 3.5S92.111 36 90.193 36z",
        fill: "#8EA6B2",
        opacity: ".5"
      }), React.createElement("path", {
        d: "M58 46.5v-1h80v1H58zm0 9v-1h80v1H58zm0 9v-1h80v1H58zm0 8v-1h80v1H58zm0 9v-1h80v1H58zm0 9v-1h80v1H58zm44 9v-1h36v1h-36zm0 9v-1h36v1h-36zm0 9v-1h36v1h-36zm0 9v-1h36v1h-36zm0 9v-1h36v1h-36z",
        stroke: "#C3D1D9"
      })));
    }
  }]);

  return IconDocIllustration;
}(React.PureComponent);

_defineProperty(IconDocIllustration, "defaultProps", {
  className: '',
  height: 170,
  width: 170
});

export default IconDocIllustration;
//# sourceMappingURL=IconDocIllustration.js.map