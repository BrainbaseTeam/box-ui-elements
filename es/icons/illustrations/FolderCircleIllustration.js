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
var ICON_CLASS = 'folder-request-illustration';

var FolderCircleIllustration =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(FolderCircleIllustration, _React$PureComponent);

  function FolderCircleIllustration() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FolderCircleIllustration);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FolderCircleIllustration)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "idPrefix", "".concat(uniqueId(ICON_CLASS), "-"));

    return _this;
  }

  _createClass(FolderCircleIllustration, [{
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
        viewBox: "0 0 140 140",
        width: width
      }, React.createElement("defs", null, React.createElement("rect", {
        height: 30,
        id: "b",
        rx: 15,
        width: 30
      }), React.createElement("filter", {
        filterUnits: "objectBoundingBox",
        height: "420%",
        id: "a",
        width: "420%",
        x: "-160%",
        y: "-150%"
      }, React.createElement("feOffset", {
        dy: 1,
        in: "SourceAlpha",
        result: "shadowOffsetOuter1"
      }), React.createElement("feGaussianBlur", {
        in: "shadowOffsetOuter1",
        result: "shadowBlurOuter1",
        stdDeviation: "2.5"
      }), React.createElement("feColorMatrix", {
        in: "shadowBlurOuter1",
        result: "shadowMatrixOuter1",
        values: "0 0 0 0 0 0 0 0 0 0.380392157 0 0 0 0 0.839215686 0 0 0 0.1 0"
      }), React.createElement("feOffset", {
        in: "SourceAlpha",
        result: "shadowOffsetOuter2"
      }), React.createElement("feGaussianBlur", {
        in: "shadowOffsetOuter2",
        result: "shadowBlurOuter2",
        stdDeviation: 4
      }), React.createElement("feColorMatrix", {
        in: "shadowBlurOuter2",
        result: "shadowMatrixOuter2",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
      }), React.createElement("feOffset", {
        in: "SourceAlpha",
        result: "shadowOffsetOuter3"
      }), React.createElement("feGaussianBlur", {
        in: "shadowOffsetOuter3",
        result: "shadowBlurOuter3",
        stdDeviation: 8
      }), React.createElement("feColorMatrix", {
        in: "shadowBlurOuter3",
        result: "shadowMatrixOuter3",
        values: "0 0 0 0 0 0 0 0 0 0.380392157 0 0 0 0 0.839215686 0 0 0 0.05 0"
      }), React.createElement("feOffset", {
        dy: 2,
        in: "SourceAlpha",
        result: "shadowOffsetOuter4"
      }), React.createElement("feGaussianBlur", {
        in: "shadowOffsetOuter4",
        result: "shadowBlurOuter4",
        stdDeviation: "5.5"
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
      })))), React.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, React.createElement("circle", {
        cx: 70,
        cy: 70,
        fill: "#5FC9CF",
        r: 60
      }), React.createElement("path", {
        d: "M61.616 45.983c.211.302.553.483.918.485h40.335A1.14 1.14 0 0 1 104 47.615v44.238A1.14 1.14 0 0 1 102.869 93H37.13A1.14 1.14 0 0 1 36 91.853V42.147A1.14 1.14 0 0 1 37.131 41h20.463c.379.01.728.21.93.535l3.092 4.448z",
        fill: "#0061D5",
        fillRule: "nonzero"
      }), React.createElement("g", {
        transform: "translate(77.4 71)"
      }, React.createElement("use", {
        fill: "#000",
        filter: "url(#a)",
        xlinkHref: "#b"
      }), React.createElement("use", {
        fill: "#F7D271",
        xlinkHref: "#b"
      })), React.createElement("g", {
        stroke: "#F9F9F9",
        strokeWidth: ".6",
        transform: "translate(84.4 80)"
      }, React.createElement("circle", {
        cx: "1.98",
        cy: "1.98",
        r: "1.98"
      }), React.createElement("path", {
        d: "M3.96 1.98h11.52v2.88m-3.42-2.88v2.16",
        strokeLinecap: "square"
      })), React.createElement("g", {
        stroke: "#F9F9F9",
        strokeWidth: ".6",
        transform: "rotate(180 49.94 46.02)"
      }, React.createElement("circle", {
        cx: "1.98",
        cy: "1.98",
        r: "1.98"
      }), React.createElement("path", {
        d: "M3.96 1.98h11.52v2.88m-3.42-2.88v2.16",
        strokeLinecap: "square"
      })), React.createElement("g", {
        transform: "translate(46 56)"
      }, React.createElement("rect", {
        fill: "#FFF",
        height: 28,
        opacity: ".24",
        rx: 14,
        width: 28
      }), React.createElement("g", {
        stroke: "#FFF",
        strokeWidth: ".6"
      }, React.createElement("path", {
        d: "M12.7 10a2.7 2.7 0 1 0-5.4 0 2.7 2.7 0 0 0 5.4 0z"
      }), React.createElement("path", {
        d: "M14.152 16.09C14.665 14.31 16.417 13 18.5 13c2.485 0 4.5 1.865 4.5 4.167 0 .048-.001 2.784-.003 2.833m-17.992.4C5.002 20.33 5 18.833 5 18.762 5 16.132 7.239 14 10 14s5 2.132 5 4.762c0 .056-.001 1.583-.003 1.638",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), React.createElement("path", {
        d: "M20.7 9.5a2.2 2.2 0 1 0-4.4 0 2.2 2.2 0 0 0 4.4 0z"
      }))), React.createElement("path", {
        d: "M62.603-13.592a.993.993 0 0 0 .81.429h35.589c.551 0 .998.454.998 1.015v39.133c0 .56-.447 1.015-.998 1.015H40.998c-.551 0-.998-.454-.998-1.015v-43.97c0-.56.447-1.015.998-1.015h18.056a.995.995 0 0 1 .82.473l2.729 3.935zm0 124a.993.993 0 0 0 .81.429h35.589c.551 0 .998.454.998 1.014v39.134c0 .56-.447 1.015-.998 1.015H40.998c-.551 0-.998-.454-.998-1.015v-43.97c0-.56.447-1.015.998-1.015h18.056a.995.995 0 0 1 .82.473l2.729 3.935z",
        fill: "#FFF",
        fillRule: "nonzero",
        opacity: ".24"
      })));
    }
  }]);

  return FolderCircleIllustration;
}(React.PureComponent);

_defineProperty(FolderCircleIllustration, "defaultProps", {
  className: '',
  height: 200,
  width: 200
});

export default FolderCircleIllustration;
//# sourceMappingURL=FolderCircleIllustration.js.map