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
var ICON_CLASS = 'icon-google-docs';

var IconGoogleDocs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IconGoogleDocs, _React$Component);

  function IconGoogleDocs() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IconGoogleDocs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IconGoogleDocs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "idPrefix", "".concat(uniqueId(ICON_CLASS), "-"));

    return _this;
  }

  _createClass(IconGoogleDocs, [{
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
        gradientTransform: "matrix(2.67 0 0 -2.67 596.67 1357)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "a"),
        x1: "-215.49",
        x2: "-215.49",
        y1: "505.79",
        y2: "503.19"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#1a237e",
        stopOpacity: ".2"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#1a237e",
        stopOpacity: ".02"
      }))), React.createElement("path", {
        d: "M17.64 0H6.05A2.05 2.05 0 0 0 4 2.05V28a2.05 2.05 0 0 0 2.05 2h17.72a2.05 2.05 0 0 0 2.05-2V8.18l-4.77-3.41z",
        fill: "#4285f4"
      }), React.createElement("path", {
        d: "M18.23 7.58l7.59 7.58V8.18l-7.59-.6z",
        fill: "url(#".concat(this.idPrefix, "a)")
      }), React.createElement("path", {
        d: "M9.45 21.82h10.91v-1.37H9.45zm0 2.73h8.19v-1.37H9.45zm0-9.55v1.36h10.91V15zm0 4.09h10.91v-1.36H9.45z",
        fill: "#f1f1f1"
      }), React.createElement("path", {
        d: "M17.64 0v6.14a2 2 0 0 0 2 2h6.14z",
        fill: "#a1c2fa"
      }), React.createElement("path", {
        d: "M6.05 0A2.05 2.05 0 0 0 4 2.05v.17A2.05 2.05 0 0 1 6.05.17h11.59V0z",
        fill: "#fff",
        fillOpacity: ".2"
      }), React.createElement("path", {
        d: "M19.68 8.18a2 2 0 0 1-2-2v.17a2 2 0 0 0 2 2h6.14v-.17z",
        fill: "#1a237e",
        fillOpacity: ".1"
      }));
    }
  }]);

  return IconGoogleDocs;
}(React.Component);

_defineProperty(IconGoogleDocs, "defaultProps", {
  className: '',
  height: 30,
  width: 30
});

export default IconGoogleDocs;
//# sourceMappingURL=IconGoogleDocs.js.map