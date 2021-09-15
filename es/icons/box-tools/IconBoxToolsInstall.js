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
var ICON_CLASS = 'icon-box-tools-install';

var IconBoxToolsInstall =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IconBoxToolsInstall, _React$Component);

  function IconBoxToolsInstall() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IconBoxToolsInstall);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IconBoxToolsInstall)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "idPrefix", "".concat(uniqueId(ICON_CLASS), "-"));

    return _this;
  }

  _createClass(IconBoxToolsInstall, [{
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
        viewBox: "0 0 200 131",
        width: width
      }, React.createElement("defs", null, React.createElement("rect", {
        height: "68.9",
        id: "".concat(this.idPrefix, "a"),
        rx: "15.9",
        width: "68.9"
      })), React.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, React.createElement("path", {
        d: "M1.6 119.7c.8 5.1 5.2 9 10.5 9H188c5.3 0 9.7-3.9 10.5-9h-9V5c0-2-1.6-3.5-3.5-3.5H14.1c-2 0-3.5 1.6-3.5 3.5v114.7h-9zM18.2 12.1h165.1v101.5H18.2V12.1z",
        stroke: "#0061D5",
        strokeWidth: "3"
      }), React.createElement("g", {
        fill: "#0061D5",
        transform: "translate(90.4 4.5)"
      }, React.createElement("circle", {
        cx: "1.6",
        cy: "2.5",
        r: "1.5"
      }), React.createElement("rect", {
        height: "3",
        rx: "1.5",
        width: "15.2",
        x: "4.1",
        y: "1"
      })), React.createElement("path", {
        d: "M10.6 119.7h83.7c0 1.4.8 2 2.3 2h10.8c1 0 1.5-.6 1.5-2h80.5",
        stroke: "#0061D5",
        strokeLinecap: "square",
        strokeWidth: "3"
      }), React.createElement("g", {
        transform: "translate(62.1 28.5)"
      }, React.createElement("use", {
        fill: "#0065E3",
        xlinkHref: "#".concat(this.idPrefix, "a")
      }), React.createElement("rect", {
        height: "70.2",
        rx: "15.9",
        stroke: "#C3D1D9",
        strokeOpacity: ".2",
        strokeWidth: "1.3",
        width: "70.2",
        x: "-.7",
        y: "-.7"
      })), React.createElement("path", {
        d: "M97.3 63a5 5 0 0 1-4.9-5 5 5 0 0 1 5-5 5 5 0 0 1 4.8 5 5 5 0 0 1-4.9 5M83 63a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 4.9 5 5 5 0 0 1-5 5m14.5-13.4c4.5 0 8.2 3.7 8.2 8.4 0 4.6-3.7 8.4-8.2 8.4a8.1 8.1 0 0 1-7.2-4.5 8.1 8.1 0 0 1-7.2 4.5 8.3 8.3 0 0 1-8.2-8.3v-14c0-.9.7-1.6 1.6-1.6 1 0 1.6.7 1.7 1.6v7.1A8 8 0 0 1 90 54c1.5-2.6 4.2-4.4 7.3-4.4zm20.9 14c.5.7.4 1.7-.4 2.3-.8.5-1.9.4-2.5-.3l-3.8-4.8-3.8 4.8c-.6.7-1.7.8-2.5.3-.8-.6-1-1.6-.4-2.3l4.5-5.6-4.5-5.7c-.5-.7-.4-1.7.4-2.3.8-.5 1.9-.4 2.5.3l3.8 4.8 3.8-4.8c.6-.7 1.7-.8 2.5-.3.8.6 1 1.6.4 2.3l-4.5 5.7 4.5 5.6z",
        fill: "#FFFFFE"
      }), React.createElement("text", {
        fill: "#FFF",
        fontFamily: "Lato-Regular, Lato",
        fontSize: "13.2",
        letterSpacing: ".5",
        transform: "translate(74.6 42.5)"
      }, React.createElement("tspan", {
        x: ".1",
        y: "39.4"
      }, "TOOLS")), React.createElement("g", {
        transform: "translate(117.2 22.7)"
      }, React.createElement("circle", {
        cx: "10.3",
        cy: "10.3",
        fill: "#26C281",
        r: "10.3",
        stroke: "#F5F7F9",
        strokeWidth: "1.1"
      }), React.createElement("path", {
        d: "M10.5 15.2l3.4-3.8a.3.3 0 0 0-.2-.5h-2V6.6c0-.2-.2-.3-.3-.3H9.3c-.2 0-.3.1-.3.3v4.3H7a.3.3 0 0 0-.3.5l3.4 3.8a.3.3 0 0 0 .4 0z",
        fill: "#FFF",
        fillRule: "nonzero"
      }))));
    }
  }]);

  return IconBoxToolsInstall;
}(React.Component);

_defineProperty(IconBoxToolsInstall, "defaultProps", {
  className: '',
  height: 131,
  width: 200
});

export default IconBoxToolsInstall;
//# sourceMappingURL=IconBoxToolsInstall.js.map