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
var ICON_CLASS = 'icon-iwork-keynote';

var IconIWorkKeynote =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IconIWorkKeynote, _React$Component);

  function IconIWorkKeynote() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IconIWorkKeynote);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IconIWorkKeynote)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "idPrefix", "".concat(uniqueId(ICON_CLASS), "-"));

    return _this;
  }

  _createClass(IconIWorkKeynote, [{
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
        id: "".concat(this.idPrefix, "a"),
        x1: "-1016.86",
        x2: "-1016.84",
        y1: "-1332.01",
        y2: "-1354.15"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#155ff4"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#00d4ff"
      }))), React.createElement("path", {
        d: "M6.88 0h16.24A6.87 6.87 0 0 1 30 6.88v16.24A6.87 6.87 0 0 1 23.12 30H6.88A6.87 6.87 0 0 1 0 23.12V6.88A6.87 6.87 0 0 1 6.88 0z",
        fill: "url(#".concat(this.idPrefix, "a)")
      }), React.createElement("path", {
        d: "M6.45 14.65c.16.49.36.85.9.85h16c.54 0 .74-.36.9-.85zM19.07 23.56h-2.92a.4.4 0 0 1-.4-.4v-7H15v7a.4.4 0 0 1-.4.4h-3a.41.41 0 0 0-.43.39.41.41 0 0 0 .45.41h7.43a.41.41 0 0 0 .45-.36.41.41 0 0 0-.43-.44zM23.34 7.62a1 1 0 0 0-1-1h-13V5.25a.61.61 0 0 1 .61-.61h2.18a.71.71 0 0 0 .7.67h1.77a.71.71 0 0 0 .7-.71v-.22a.71.71 0 0 0-.7-.71h-1.79a.72.72 0 0 0-.69.57H9.93a1 1 0 0 0-1 1v1.37h-.66a1 1 0 0 0-1 1L7 14h16.7z",
        fill: "#fff"
      }));
    }
  }]);

  return IconIWorkKeynote;
}(React.Component);

_defineProperty(IconIWorkKeynote, "defaultProps", {
  className: '',
  height: 30,
  width: 30
});

export default IconIWorkKeynote;
//# sourceMappingURL=IconIWorkKeynote.js.map