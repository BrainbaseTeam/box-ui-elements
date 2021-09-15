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
var ICON_CLASS = 'icon-word-desktop';

var IconWordDesktop =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IconWordDesktop, _React$Component);

  function IconWordDesktop() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IconWordDesktop);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IconWordDesktop)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "idPrefix", "".concat(uniqueId(ICON_CLASS), "-"));

    return _this;
  }

  _createClass(IconWordDesktop, [{
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
        d: "M47 81.5c-.8 0-1.5-.7-1.5-1.5V16c0-.8.7-1.5 1.5-1.5h42c.8 0 1.5.7 1.5 1.5v64c0 .8-.7 1.5-1.5 1.5H47z",
        fill: "#FFF"
      }), React.createElement("path", {
        d: "M89 16v64H47V16h42m0-3H47c-1.7 0-3 1.3-3 3v64c0 1.7 1.3 3 3 3h42c1.7 0 3-1.3 3-3V16c0-1.7-1.3-3-3-3z",
        fill: "#2B579A"
      }), React.createElement("path", {
        d: "M50 23h32v4H50zm0 9h32v4H50zm0 9h32v4H50zm0 9h32v4H50zm0 9h32v4H50zm0 9h32v4H50z",
        fill: "#2B579A"
      }), React.createElement("path", {
        clipRule: "evenodd",
        d: "M56 4L4 13v70l52 9V4z",
        fill: "#2B579A",
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
        d: "M43.6 32.7L38 33l-3.3 19.3c0 .3-.1.5-.1.8 0 .3-.1.5-.1.8 0 .3-.1.5-.1.8v.8h-.1c0-.3-.1-.7-.1-1 0-.3-.1-.6-.1-.8 0-.3-.1-.5-.1-.7 0-.2-.1-.4-.1-.6l-3.8-18.9-5.3.3-3.9 18.1c-.1.3-.1.5-.2.8 0 .3-.1.5-.1.8 0 .3-.1.5-.1.8v.7h-.1v-.9c0-.3 0-.6-.1-.8 0-.3 0-.5-.1-.7 0-.2-.1-.4-.1-.6l-2.9-17.6-4.9.3 5.2 26.1 5.4.3 3.7-17.5c0-.2.1-.4.1-.7 0-.2.1-.5.1-.7 0-.3.1-.5.1-.8 0-.3.1-.6.1-.9h.1v.9c0 .3 0 .5.1.8 0 .3.1.5.1.7 0 .2.1.5.1.7l3.7 18 5.9.4 6.6-29.3",
        fill: "#FFF"
      }));
    }
  }]);

  return IconWordDesktop;
}(React.Component);

_defineProperty(IconWordDesktop, "defaultProps", {
  className: '',
  height: 30,
  width: 30
});

export default IconWordDesktop;
//# sourceMappingURL=IconWordDesktop.js.map