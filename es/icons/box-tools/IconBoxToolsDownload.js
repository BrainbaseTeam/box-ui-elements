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
var ICON_CLASS = 'icon-box-tools-download';

var IconBoxToolsDownload =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IconBoxToolsDownload, _React$Component);

  function IconBoxToolsDownload() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IconBoxToolsDownload);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IconBoxToolsDownload)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "idPrefix", "".concat(uniqueId(ICON_CLASS), "-"));

    return _this;
  }

  _createClass(IconBoxToolsDownload, [{
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
        viewBox: "0 0 136 134",
        width: width
      }, React.createElement("defs", null, React.createElement("rect", {
        height: "120",
        id: "".concat(this.idPrefix, "a"),
        rx: "27.692",
        width: "120"
      })), React.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, React.createElement("g", {
        transform: "translate(3 11)"
      }, React.createElement("use", {
        fill: "#0065E3",
        xlinkHref: "#".concat(this.idPrefix, "a")
      }), React.createElement("rect", {
        height: "122.308",
        rx: "27.692",
        stroke: "#C3D1D9",
        strokeOpacity: ".154",
        strokeWidth: "2.308",
        width: "122.308",
        x: "-1.154",
        y: "-1.154"
      })), React.createElement("path", {
        d: "M64.075 72.337c-4.742 0-8.587-3.95-8.587-8.828 0-4.873 3.845-8.823 8.587-8.823 4.74 0 8.582 3.95 8.582 8.823 0 4.878-3.843 8.828-8.582 8.828m-25.282 0c-4.741 0-8.589-3.95-8.589-8.826 0-4.875 3.848-8.825 8.589-8.825 4.74 0 8.58 3.95 8.58 8.823 0 4.878-3.84 8.828-8.58 8.828m25.282-23.543c7.9 0 14.308 6.587 14.308 14.715 0 8.132-6.408 14.721-14.308 14.721-5.476 0-10.24-3.17-12.64-7.817-2.4 4.646-7.163 7.817-12.642 7.817-7.827 0-14.178-6.458-14.304-14.475h-.003V39.338c.035-1.602 1.293-2.884 2.857-2.884 1.563 0 2.833 1.282 2.861 2.884v12.4a14.009 14.009 0 0 1 8.589-2.944c5.479 0 10.241 3.168 12.642 7.82 2.4-4.652 7.164-7.82 12.64-7.82zm36.51 24.509c.987 1.3.703 3.106-.656 4.072-1.36.966-3.27.72-4.323-.54l-6.69-8.434-6.694 8.434c-1.042 1.26-2.963 1.506-4.32.54-1.356-.966-1.64-2.772-.65-4.072h-.003l7.773-9.813-7.773-9.831h.003c-.99-1.297-.706-3.107.65-4.07 1.357-.97 3.278-.722 4.32.536v-.002l6.694 8.446 6.7-8.446v.002c1.052-1.258 2.961-1.507 4.322-.536 1.36.962 1.641 2.773.657 4.07l-7.787 9.831 7.778 9.813z",
        fill: "#FFFFFE"
      }), React.createElement("text", {
        fill: "#FFF",
        fontFamily: "Lato-Regular, Lato",
        fontSize: "23.077",
        transform: "translate(23.77 36.385)"
      }, React.createElement("tspan", {
        x: "1.154",
        y: "68"
      }, "TOOLS")), React.createElement("g", {
        transform: "translate(99 1)"
      }, React.createElement("circle", {
        cx: "18",
        cy: "18",
        fill: "#26C281",
        r: "18",
        stroke: "#F5F7F9",
        strokeWidth: "2"
      }), React.createElement("path", {
        d: "M18.376 26.57l5.898-6.74a.5.5 0 0 0-.376-.83h-3.565v-7.5a.5.5 0 0 0-.5-.5h-3.666a.5.5 0 0 0-.5.5V19h-3.565a.5.5 0 0 0-.376.83l5.898 6.74a.5.5 0 0 0 .752 0z",
        fill: "#FFF"
      }))));
    }
  }]);

  return IconBoxToolsDownload;
}(React.Component);

_defineProperty(IconBoxToolsDownload, "defaultProps", {
  className: '',
  height: 134,
  width: 136
});

export default IconBoxToolsDownload;
//# sourceMappingURL=IconBoxToolsDownload.js.map