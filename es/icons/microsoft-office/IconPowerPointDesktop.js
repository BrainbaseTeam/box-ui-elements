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
var ICON_CLASS = 'icon-powerpoint-desktop';

var IconPowerPointDesktop =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IconPowerPointDesktop, _React$Component);

  function IconPowerPointDesktop() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IconPowerPointDesktop);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IconPowerPointDesktop)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "idPrefix", "".concat(uniqueId(ICON_CLASS), "-"));

    return _this;
  }

  _createClass(IconPowerPointDesktop, [{
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
        d: "M90 78.5c0 .8-.7 1.5-1.5 1.5h-48c-.8 0-1.5-.7-1.5-1.5v-61c0-.8.7-1.5 1.5-1.5h48c.8 0 1.5.7 1.5 1.5v61z",
        fill: "#FFF"
      }), React.createElement("path", {
        d: "M89 17v61H41V17h48m0-3H41c-1.7 0-3 1.3-3 3v61c0 1.7 1.3 3 3 3h48c1.7 0 3-1.3 3-3V17c0-1.7-1.3-3-3-3z",
        fill: "#D24726"
      }), React.createElement("g", {
        clipRule: "evenodd",
        fill: "#C1442B",
        fillRule: "evenodd"
      }, React.createElement("path", {
        d: "M61 26c-7.2 0-13 5.8-13 13s5.8 13 13 13 13-5.8 13-13H61V26z"
      }), React.createElement("path", {
        d: "M63 24v13h13c0-7.2-5.8-13-13-13zM49 57h31v4H49zm1 9h30v4H50z"
      })), React.createElement("path", {
        clipRule: "evenodd",
        d: "M56 4L4 13v70l52 9V4z",
        fill: "#C1442B",
        fillRule: "evenodd"
      }), React.createElement("g", {
        opacity: "0.05"
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
        d: "M26 46.5V37l1.9-.3c.8 0 1.5 0 2 .2.6.2 1.1.5 1.5.9.4.4.7.9.9 1.6.2.6.3 1.4.3 2.2 0 .9-.1 1.6-.3 2.3-.2.7-.5 1.2-.9 1.6-.4.4-.9.8-1.5 1-.6.2-1.3.3-2 .3l-1.9-.3M29 31l-9 .5v31.9l6 .5V52.2l2.3.2c.8 0 1.6 0 2.3-.2.7-.1 1.4-.3 2.1-.6.7-.3 1.3-.6 1.9-1 .6-.4 1.1-.9 1.6-1.4.5-.5.9-1.1 1.3-1.7.4-.6.7-1.2.9-1.9.2-.7.4-1.4.5-2.2.1-.8.2-1.6.2-2.4 0-1.8-.2-3.4-.7-4.7-.4-1.3-1.1-2.4-2-3.3-.9-.8-1.9-1.4-3.2-1.8C32 31 31 31 29 31",
        fill: "#FFF"
      }));
    }
  }]);

  return IconPowerPointDesktop;
}(React.Component);

_defineProperty(IconPowerPointDesktop, "defaultProps", {
  className: '',
  height: 30,
  width: 30
});

export default IconPowerPointDesktop;
//# sourceMappingURL=IconPowerPointDesktop.js.map