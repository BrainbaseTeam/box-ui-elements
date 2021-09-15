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
var ICON_CLASS = 'icon-iwork-numbers';

var IconIWorkNumbers =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IconIWorkNumbers, _React$Component);

  function IconIWorkNumbers() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IconIWorkNumbers);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IconIWorkNumbers)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "idPrefix", "".concat(uniqueId(ICON_CLASS), "-"));

    return _this;
  }

  _createClass(IconIWorkNumbers, [{
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
        viewBox: "0 0 30 30",
        width: width
      }, React.createElement("defs", null, React.createElement("linearGradient", {
        gradientTransform: "matrix(1.33 0 0 1.33 1370.77 1805.85)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "b"),
        x1: "-1016.86",
        x2: "-1016.84",
        y1: "-1332.01",
        y2: "-1354.15"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#11d51d"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#82fa6c"
      })), React.createElement("linearGradient", {
        gradientTransform: "translate(1047.93 1130.18)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "a"),
        x1: "-1035.54",
        x2: "-1035.87",
        y1: "-1124.31",
        y2: "-1105.94"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#fff"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#fff"
      })), React.createElement("linearGradient", {
        id: "".concat(this.idPrefix, "c"),
        x1: "-1041.03",
        x2: "-1041.35",
        xlinkHref: "#".concat(this.idPrefix, "a"),
        y1: "-1124.41",
        y2: "-1106.03"
      }), React.createElement("linearGradient", {
        id: "".concat(this.idPrefix, "d"),
        x1: "-1030.07",
        x2: "-1030.4",
        xlinkHref: "#".concat(this.idPrefix, "a"),
        y1: "-1124.22",
        y2: "-1105.84"
      }), React.createElement("linearGradient", {
        id: "".concat(this.idPrefix, "e"),
        x1: "-1024.48",
        x2: "-1024.8",
        xlinkHref: "#".concat(this.idPrefix, "a"),
        y1: "-1124.12",
        y2: "-1105.74"
      }), React.createElement("linearGradient", {
        id: "".concat(this.idPrefix, "f"),
        x1: "-1032.65",
        x2: "-1032.97",
        xlinkHref: "#".concat(this.idPrefix, "a"),
        y1: "-1124.26",
        y2: "-1105.89"
      })), React.createElement("path", {
        d: "M6.88 0h16.24A6.87 6.87 0 0 1 30 6.88v16.24A6.87 6.87 0 0 1 23.12 30H6.88A6.87 6.87 0 0 1 0 23.12V6.88A6.87 6.87 0 0 1 6.88 0z",
        fill: "url(#".concat(this.idPrefix, "b)")
      }), React.createElement("path", {
        d: "M10 14.79h4.4a.18.18 0 0 1 .18.18v7.56a.18.18 0 0 1-.18.18H10a.18.18 0 0 1-.18-.18V15a.18.18 0 0 1 .18-.21z",
        fill: "url(#".concat(this.idPrefix, "a)")
      }), React.createElement("path", {
        d: "M4.39 19.29h4.49a.13.13 0 0 1 .14.12v3.18a.13.13 0 0 1-.14.12H4.39a.13.13 0 0 1-.14-.12v-3.18a.13.13 0 0 1 .14-.12z",
        fill: "url(#".concat(this.idPrefix, "c)")
      }), React.createElement("path", {
        d: "M15.51 5.79h4.4a.18.18 0 0 1 .18.19v16.55a.18.18 0 0 1-.18.18h-4.4a.18.18 0 0 1-.18-.18V6a.18.18 0 0 1 .18-.21z",
        fill: "url(#".concat(this.idPrefix, "d)")
      }), React.createElement("path", {
        d: "M21.05 10.74h4.43a.17.17 0 0 1 .16.18v11.62a.16.16 0 0 1-.16.17h-4.43a.16.16 0 0 1-.17-.17V10.92a.17.17 0 0 1 .17-.18z",
        fill: "url(#".concat(this.idPrefix, "e)")
      }), React.createElement("path", {
        d: "M4.52 23.58H25.4a.4.4 0 0 1 .43.35V24a.4.4 0 0 1-.43.35H4.52a.4.4 0 0 1-.43-.35v-.11a.4.4 0 0 1 .43-.31z",
        fill: "url(#".concat(this.idPrefix, "f)")
      }));
    }
  }]);

  return IconIWorkNumbers;
}(React.Component);

_defineProperty(IconIWorkNumbers, "defaultProps", {
  className: '',
  height: 30,
  width: 30
});

export default IconIWorkNumbers;
//# sourceMappingURL=IconIWorkNumbers.js.map