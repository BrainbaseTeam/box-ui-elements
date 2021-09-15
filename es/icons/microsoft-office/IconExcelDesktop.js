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
var ICON_CLASS = 'icon-excel-desktop';

var IconExcelDesktop =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IconExcelDesktop, _React$Component);

  function IconExcelDesktop() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IconExcelDesktop);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IconExcelDesktop)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "idPrefix", "".concat(uniqueId(ICON_CLASS), "-"));

    return _this;
  }

  _createClass(IconExcelDesktop, [{
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
        viewBox: "0 0 96 96",
        width: width
      }, React.createElement("path", {
        clipRule: "evenodd",
        d: "M45 80.5c-.8 0-1.5-.7-1.5-1.5V16c0-.8.7-1.5 1.5-1.5h44c.8 0 1.5.7 1.5 1.5v63c0 .8-.7 1.5-1.5 1.5H45z",
        fill: "#FFF",
        fillRule: "evenodd"
      }), React.createElement("path", {
        d: "M89 16v63H45V16h44m0-3H45c-1.7 0-3 1.3-3 3v63c0 1.7 1.3 3 3 3h44c1.7 0 3-1.3 3-3V16c0-1.7-1.3-3-3-3z",
        fill: "#217346"
      }), React.createElement("path", {
        clipRule: "evenodd",
        d: "M68 22h14v7H68zm-18 0h14v7H50zm18 11h14v7H68zm-18 0h14v7H50zm18 33h14v7H68zm-18 0h14v7H50zm18-22h14v7H68zm-18 0h14v7H50zm18 11h14v7H68zm-18 0h14v7H50z",
        fill: "#217346",
        fillRule: "evenodd"
      }), React.createElement("path", {
        clipRule: "evenodd",
        d: "M56 4L4 13v70l52 9V4z",
        fill: "#217346",
        fillRule: "evenodd"
      }), React.createElement("g", {
        opacity: ".05"
      }, React.createElement("linearGradient", {
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "a"),
        x1: "4",
        x2: "56",
        y1: "48",
        y2: "48"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#FFF"
      }), React.createElement("stop", {
        offset: "1"
      })), React.createElement("path", {
        clipRule: "evenodd",
        d: "M56 4L4 13v70l52 9V4z",
        fill: "url(#".concat(this.idPrefix, "a)"),
        fillRule: "evenodd"
      })), React.createElement("path", {
        d: "M40.5 31l-6.8.4-4.1 9.7-.3.9c-.1.3-.2.5-.2.8-.1.2-.1.4-.2.6-.1.2-.1.4-.1.5h-.1c-.1-.3-.1-.5-.2-.7-.1-.2-.1-.5-.2-.7-.1-.2-.1-.4-.2-.6-.1-.2-.1-.4-.2-.6L24.3 32l-6.6.4 7 15.2-7.6 15.2 6.4.4 4.3-9.9c.1-.2.1-.5.2-.7.1-.2.1-.4.2-.6 0-.2.1-.4.1-.5 0-.2.1-.3.1-.4h.1c0 .3.1.5.1.7 0 .2.1.4.1.6 0 .2.1.3.1.5 0 .1.1.2.1.3l4.5 10.6 7.3.4-8.3-16.7L40.5 31",
        fill: "#FFF"
      }));
    }
  }]);

  return IconExcelDesktop;
}(React.Component);

_defineProperty(IconExcelDesktop, "defaultProps", {
  className: '',
  height: 30,
  width: 30
});

export default IconExcelDesktop;
//# sourceMappingURL=IconExcelDesktop.js.map